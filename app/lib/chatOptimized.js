const SYSTEM_PROMPT = `You are Mibo, a friendly AI assistant for ScamSmart. Help users learn about scam detection. Keep responses under 100 words. Be encouraging and educational.`;

const MAX_FREE_MESSAGES = 10;
const MAX_PREMIUM_MESSAGES = 50;

export async function sendChatMessage(messages, userProgress) {
  const limit = userProgress?.is_premium ? MAX_PREMIUM_MESSAGES : MAX_FREE_MESSAGES;
  const used = userProgress?.daily_chat_messages || 0;
  
  if (used >= limit) {
    return {
      error: 'RATE_LIMIT',
      limit,
      isPremium: userProgress?.is_premium
    };
  }

  const recentMessages = messages.slice(-5);

  try {
    const apiKey = process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      console.error('Missing API key');
      return { error: 'CONFIG_ERROR' };
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-3-5-20241022',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages: recentMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Error:', error);
      return { error: 'API_ERROR', details: error };
    }

    const data = await response.json();
    return {
      success: true,
      content: data.content[0].text
    };

  } catch (error) {
    console.error('Chat error:', error);
    return { error: 'NETWORK_ERROR' };
  }
}

export function canSendMessage(userProgress) {
  const limit = userProgress?.is_premium ? MAX_PREMIUM_MESSAGES : MAX_FREE_MESSAGES;
  const used = userProgress?.daily_chat_messages || 0;
  
  return {
    canSend: used < limit,
    remaining: limit - used,
    limit,
    isPremium: userProgress?.is_premium
  };
}
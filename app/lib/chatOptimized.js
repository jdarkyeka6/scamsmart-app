const MAX_FREE_MESSAGES = 10;
const MAX_PREMIUM_MESSAGES = 50;

export async function sendChatMessage(messages, userProgress) {
  const limit = userProgress?.is_premium ? MAX_PREMIUM_MESSAGES : MAX_FREE_MESSAGES;
  const used = userProgress?.daily_chat_messages || 0;
  if (used >= limit) {
    return { error: "RATE_LIMIT", limit, isPremium: userProgress?.is_premium };
  }

  const lastMessage = messages[messages.length - 1];

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: lastMessage.content,
        context: "General scam education"
      })
    });

    const data = await response.json();

    if (!response.ok) return { error: "API_ERROR", details: data };

    return { content: data.response };
  } catch (error) {
    console.error("Chat error:", error);
    return { error: "NETWORK_ERROR" };
  }
}

export function canSendMessage(userProgress) {
  const limit = userProgress?.is_premium ? MAX_PREMIUM_MESSAGES : MAX_FREE_MESSAGES;
  const used = userProgress?.daily_chat_messages || 0;
  return used < limit;
}

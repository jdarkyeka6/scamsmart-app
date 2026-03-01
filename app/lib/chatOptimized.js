export async function sendChatMessage(messages, userProgress) {
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
  return true;
}

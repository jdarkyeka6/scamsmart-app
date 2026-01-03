export default function Upgrade() {
  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1>Upgrade to Mibo Pro</h1>
      <p style={{ opacity: 0.85 }}>
        Free users get <b>5 messages/day</b>. Pro users get <b>unlimited</b>.
      </p>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Free</h2>
        <p>✅ 5 messages/day</p>
      </div>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Pro</h2>
        <p>✅ Unlimited messages</p>
        <p style={{ opacity: 0.7 }}>(Payments coming soon)</p>
      </div>

      <p style={{ marginTop: 18 }}>
        <a href="/chat">← Back to chat</a>
      </p>
    </main>
  );
}

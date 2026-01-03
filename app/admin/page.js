export default function AdminPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>
        ScamSmart Admin Panel
      </h1>

      <p style={{ marginTop: 12, opacity: 0.8 }}>
        If you can see this page, /admin is working.
      </p>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          borderRadius: 12,
          background: "#f3f4f6",
          maxWidth: 420,
        }}
      >
        <strong>Status:</strong> Admin page loaded ✅
      </div>
    </main>
  );
}

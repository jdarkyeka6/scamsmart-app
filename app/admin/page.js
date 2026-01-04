"use client";
import { useEffect, useState } from "react";
import { supabase } from '../../lib/supabase'

export default function AdminPage() {
  const [tab, setTab] = useState("analytics");
  const [status, setStatus] = useState("");
  
  // Drafts
  const [drafts, setDrafts] = useState([]);
  const [activeDraft, setActiveDraft] = useState(null);

  // Bans
  const [bans, setBans] = useState({});
  const [banEmail, setBanEmail] = useState("");
  const [banDuration, setBanDuration] = useState(60);
  const [banUnit, setBanUnit] = useState("minutes");

  // Analytics
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    premiumUsers: 0,
    totalLessons: 0,
    avgProgress: 0,
    topLearners: [],
    recentActivity: []
  });

  // Reviews
  const [reviews, setReviews] = useState([]);

  // Premium Management
  const [premiumUsers, setPremiumUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");

  // Real-time updates
  const [realtimeEvents, setRealtimeEvents] = useState([]);

  async function refreshDrafts() {
    const res = await fetch("/api/admin/drafts");
    const j = await res.json();
    if (j.ok) setDrafts(j.items || []);
  }

  async function loadDraft(id) {
    const res = await fetch(`/api/admin/drafts/${id}`);
    const j = await res.json();
    if (j.ok) setActiveDraft(j.draft);
  }

  async function uploadJsonFile(file) {
    setStatus("Reading file...");
    const text = await file.text();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      setStatus("❌ Invalid JSON - check your file format!");
      return;
    }

    setStatus("Uploading draft...");
    const res = await fetch("/api/admin/drafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, data: parsed }),
    });
    const j = await res.json();

    if (j.ok) {
      setStatus("✅ Draft uploaded successfully!");
      await refreshDrafts();
    } else {
      setStatus("❌ Upload failed: " + (j.error || "unknown"));
    }
  }

  async function publishDraft(id) {
    if (!confirm("Publish this draft to live? This will add new lessons!")) return;
    
    setStatus("Publishing...");
    const res = await fetch(`/api/admin/drafts/${id}`, { method: "POST" });
    const j = await res.json();
    
    if (j.ok) {
      setStatus(`✅ Published! Added ${j.addedSections} sections`);
      await refreshDrafts();
      await loadDraft(id);
    } else {
      setStatus("❌ Publish failed: " + (j.error || "unknown"));
    }
  }

  async function deleteDraft(id) {
    if (!confirm("Delete this draft permanently?")) return;
    
    const res = await fetch(`/api/admin/drafts?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    const j = await res.json();
    
    if (j.ok) {
      setActiveDraft(null);
      setStatus("✅ Draft deleted");
      await refreshDrafts();
    }
  }

  async function refreshBans() {
    const res = await fetch("/api/admin/bans");
    const j = await res.json();
    if (j.ok) setBans(j.bans || {});
  }

  async function banUser() {
    if (!banEmail) {
      alert("Please enter an email!");
      return;
    }

    // Convert to minutes
    let minutes = banDuration;
    if (banUnit === "hours") minutes *= 60;
    if (banUnit === "days") minutes *= 60 * 24;
    if (banUnit === "months") minutes *= 60 * 24 * 30;
    if (banUnit === "years") minutes *= 60 * 24 * 365;
    if (banUnit === "forever") minutes = 60 * 24 * 365 * 100; // 100 years

    setStatus("Banning user...");
    const res = await fetch("/api/admin/bans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: banEmail, minutes: Number(minutes) }),
    });
    const j = await res.json();
    
    if (j.ok) {
      setStatus(`✅ ${banEmail} banned!`);
      setBanEmail("");
      await refreshBans();
    } else {
      setStatus("❌ Ban failed: " + (j.error || "unknown"));
    }
  }

  async function unban(email) {
    const res = await fetch(`/api/admin/bans?email=${encodeURIComponent(email)}`, { method: "DELETE" });
    const j = await res.json();
    if (j.ok) {
      setStatus(`✅ ${email} unbanned`);
      await refreshBans();
    }
  }

  async function refreshAnalytics() {
    try {
      // Get all user progress
      const { data: users, error } = await supabase
        .from('user_progress')
        .select('*')

      if (error) throw error;

      const totalUsers = users.length;
      const premiumUsers = users.filter(u => u.is_premium).length;
      const totalLessons = users.reduce((sum, u) => sum + (u.lessons_completed || 0), 0);
      const avgProgress = totalUsers > 0 ? Math.round(totalLessons / totalUsers) : 0;

      const topLearners = users
        .sort((a, b) => (b.total_xp || 0) - (a.total_xp || 0))
        .slice(0, 10)
        .map(u => ({
          email: u.email,
          xp: u.total_xp || 0,
          lessons: u.lessons_completed || 0,
          premium: u.is_premium
        }));

      setAnalytics({
        totalUsers,
        premiumUsers,
        totalLessons,
        avgProgress,
        topLearners,
        recentActivity: []
      });
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }

  async function refreshReviews() {
    const res = await fetch("/api/admin/feedback");
    const j = await res.json();
    if (j.ok) setReviews(j.feedback || []);
  }

  async function refreshPremiumUsers() {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('is_premium', true)
        .order('email')

      if (error) throw error;
      setPremiumUsers(data || []);
    } catch (error) {
      console.error('Premium users error:', error);
    }
  }

  async function cancelPremium(userId, email) {
    if (!confirm(`Cancel premium for ${email}?`)) return;

    try {
      const { error } = await supabase
        .from('user_progress')
        .update({ is_premium: false, premium_expires_at: null })
        .eq('user_id', userId)

      if (error) throw error;

      setStatus(`✅ Premium cancelled for ${email}`);
      await refreshPremiumUsers();
      await refreshAnalytics();
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = '/admin/login';
  }

  // Setup real-time monitoring
  useEffect(() => {
    const channel = supabase
      .channel('admin-realtime')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'user_progress' },
        (payload) => {
          const event = {
            type: payload.eventType,
            table: 'user_progress',
            data: payload.new,
            time: new Date().toLocaleTimeString()
          };
          setRealtimeEvents(prev => [event, ...prev].slice(0, 50));
        }
      )
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'lesson_completions' },
        (payload) => {
          const event = {
            type: payload.eventType,
            table: 'lesson_completions',
            data: payload.new,
            time: new Date().toLocaleTimeString()
          };
          setRealtimeEvents(prev => [event, ...prev].slice(0, 50));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    refreshDrafts();
    refreshBans();
    refreshAnalytics();
    refreshReviews();
    refreshPremiumUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black mb-2">🛡️ ScamSmart Admin</h1>
            {status && (
              <div className="text-sm bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                {status}
              </div>
            )}
          </div>
          <button 
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-bold transition-colors"
          >
            🚪 Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Tab active={tab === "analytics"} onClick={() => setTab("analytics")}>📊 Analytics</Tab>
          <Tab active={tab === "realtime"} onClick={() => setTab("realtime")}>⚡ Real-time</Tab>
          <Tab active={tab === "reviews"} onClick={() => setTab("reviews")}>⭐ Reviews</Tab>
          <Tab active={tab === "premium"} onClick={() => setTab("premium")}>👑 Premium Users</Tab>
          <Tab active={tab === "drafts"} onClick={() => setTab("drafts")}>📝 Lesson Drafts</Tab>
          <Tab active={tab === "bans"} onClick={() => setTab("bans")}>🚫 Bans</Tab>
        </div>

        {/* Analytics Tab */}
        {tab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatCard icon="👥" label="Total Users" value={analytics.totalUsers} />
              <StatCard icon="👑" label="Premium Users" value={analytics.premiumUsers} />
              <StatCard icon="📚" label="Total Lessons Completed" value={analytics.totalLessons} />
              <StatCard icon="📈" label="Avg Lessons/User" value={analytics.avgProgress} />
            </div>

            <Card title="🏆 Top 10 Learners" onRefresh={refreshAnalytics}>
              <div className="space-y-2">
                {analytics.topLearners.map((learner, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-yellow-400">#{i + 1}</span>
                      <div>
                        <div className="font-semibold">{learner.email}</div>
                        <div className="text-sm opacity-75">{learner.lessons} lessons completed</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-400">{learner.xp} XP</div>
                      {learner.premium && <div className="text-xs text-yellow-400">👑 Premium</div>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Real-time Tab */}
        {tab === "realtime" && (
          <Card title="⚡ Live Activity Feed" onRefresh={() => setRealtimeEvents([])}>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {realtimeEvents.length === 0 && (
                <div className="text-center py-8 opacity-50">
                  Waiting for activity...
                </div>
              )}
              {realtimeEvents.map((event, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-lg border-l-4 border-green-400">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-green-400">{event.type}</span>
                    <span className="text-xs opacity-75">{event.time}</span>
                  </div>
                  <div className="text-sm opacity-75">{event.table}</div>
                  <div className="text-xs mt-2 bg-black/20 p-2 rounded">
                    {JSON.stringify(event.data, null, 2).slice(0, 200)}...
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Reviews Tab */}
        {tab === "reviews" && (
          <Card title="⭐ Premium Feedback Reviews" onRefresh={refreshReviews}>
            <div className="space-y-4">
              {reviews.length === 0 && <div className="text-center py-8 opacity-50">No reviews yet</div>}
              {reviews.map((review) => (
                <div key={review.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-lg">{review.full_name}</div>
                      <div className="text-sm opacity-75">{review.user_email}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl">{"⭐".repeat(review.rating)}</div>
                      <div className="text-xs opacity-75">{new Date(review.created_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg">
                    <p className="whitespace-pre-wrap">{review.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Premium Users Tab */}
        {tab === "premium" && (
          <Card title="👑 Premium Users Management" onRefresh={refreshPremiumUsers}>
            <div className="mb-4">
              <input
                type="text"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                placeholder="Search by email..."
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:border-white/40 outline-none"
              />
            </div>
            <div className="space-y-2">
              {premiumUsers
                .filter(u => u.email.toLowerCase().includes(searchEmail.toLowerCase()))
                .map((user) => (
                  <div key={user.user_id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-bold">{user.email}</div>
                      <div className="text-sm opacity-75">
                        {user.lessons_completed} lessons • {user.total_xp} XP • {user.streak_count} day streak
                      </div>
                      {user.premium_expires_at && (
                        <div className="text-xs opacity-50">
                          Expires: {new Date(user.premium_expires_at).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => cancelPremium(user.user_id, user.email)}
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Cancel Premium
                    </button>
                  </div>
                ))}
              {premiumUsers.length === 0 && (
                <div className="text-center py-8 opacity-50">No premium users yet</div>
              )}
            </div>
          </Card>
        )}

        {/* Drafts Tab */}
        {tab === "drafts" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="📤 Upload Lesson JSON">
              <input
                type="file"
                accept=".json"
                onChange={(e) => e.target.files?.[0] && uploadJsonFile(e.target.files[0])}
                className="w-full px-4 py-3 bg-white/10 rounded-lg border border-white/20 cursor-pointer"
              />
              <div className="mt-4 space-y-2">
                {drafts.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => loadDraft(d.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      activeDraft?.id === d.id 
                        ? 'bg-blue-500/20 border-blue-400' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-bold">{d.filename}</div>
                    <div className="text-xs opacity-75">{d.status} • {d.uploadedAt}</div>
                  </button>
                ))}
                {drafts.length === 0 && <div className="opacity-50 text-center py-4">No drafts uploaded yet</div>}
              </div>
            </Card>

            <Card title="👁️ Draft Preview">
              {!activeDraft ? (
                <div className="text-center py-12 opacity-50">Select a draft to preview</div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge>{activeDraft.status}</Badge>
                    <Badge>{activeDraft.data?.sections?.length || 0} sections</Badge>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => publishDraft(activeDraft.id)}
                      disabled={activeDraft.status === "published"}
                      className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 px-4 py-2 rounded-lg font-bold transition-colors"
                    >
                      ✅ Publish to Live
                    </button>
                    <button
                      onClick={() => deleteDraft(activeDraft.id)}
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold transition-colors"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto space-y-2">
                    {activeDraft.data?.sections?.slice(0, 3).map((section, i) => (
                      <details key={i} className="bg-white/5 p-3 rounded-lg">
                        <summary className="cursor-pointer font-bold">
                          {section.title || `Section ${i + 1}`} ({section.lessons?.length || 0} lessons)
                        </summary>
                        <div className="mt-2 pl-4 space-y-1 text-sm opacity-75">
                          {section.lessons?.slice(0, 2).map((lesson, li) => (
                            <div key={li}>
                              • {lesson.title || `Lesson ${li + 1}`} ({lesson.questions?.length || 0} questions)
                            </div>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Bans Tab */}
        {tab === "bans" && (
          <Card title="🚫 User Bans" onRefresh={refreshBans}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <input
                value={banEmail}
                onChange={(e) => setBanEmail(e.target.value)}
                placeholder="user@email.com"
                className="px-4 py-3 bg-white/10 rounded-lg border border-white/20 outline-none focus:border-white/40"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={banDuration}
                  onChange={(e) => setBanDuration(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 rounded-lg border border-white/20 outline-none focus:border-white/40"
                  min={1}
                />
                <select
                  value={banUnit}
                  onChange={(e) => setBanUnit(e.target.value)}
                  className="px-4 py-3 bg-white/10 rounded-lg border border-white/20 outline-none cursor-pointer"
                >
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                  <option value="forever">Forever</option>
                </select>
              </div>
              <button
                onClick={banUser}
                className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg font-bold transition-colors"
              >
                🚫 Ban User
              </button>
            </div>

            <div className="space-y-2">
              {Object.keys(bans).length === 0 && <div className="text-center py-8 opacity-50">No banned users</div>}
              {Object.entries(bans).map(([email, until]) => {
                const remaining = Math.max(0, Math.round((Number(until) - Date.now()) / 60000));
                const days = Math.floor(remaining / (60 * 24));
                const hours = Math.floor((remaining % (60 * 24)) / 60);
                const mins = remaining % 60;

                return (
                  <div key={email} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-bold">{email}</div>
                      <div className="text-sm opacity-75">
                        {days > 0 && `${days}d `}
                        {hours > 0 && `${hours}h `}
                        {mins}m remaining
                      </div>
                    </div>
                    <button
                      onClick={() => unban(email)}
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Unban
                    </button>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}

function Tab({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-bold transition-all whitespace-nowrap ${
        active
          ? "bg-white text-gray-900"
          : "bg-white/10 hover:bg-white/20"
      }`}
    >
      {children}
    </button>
  );
}

function Card({ title, onRefresh, children }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
          >
            🔄 Refresh
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm opacity-75">{label}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold border border-white/20">
      {children}
    </span>
  );
}
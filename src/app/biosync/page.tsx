"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { berekenSlaapAdvies } from "@/components/BioSync";
import AdemhalingOefening from "@/components/AdemhalingOefening";
import Logo from "@/components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";

function formatDatum(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getLast7Days(): string[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return formatDatum(d);
  });
}

function dagNaam(datum: string): string {
  const d = new Date(datum + "T00:00:00");
  return ["zo", "ma", "di", "wo", "do", "vr", "za"][d.getDay()];
}

function dotStyle(score: number | null) {
  if (score === null) return { bg: "#E2E8F0", text: "#94A3B8" };
  if (score <= 2)     return { bg: "#FECACA", text: "#EF4444" };
  if (score === 3)    return { bg: "#FDE68A", text: "#D97706" };
  return                     { bg: "#BBF7D0", text: "#16A34A" };
}

export default function BioSyncPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading } = useInstellingen();
  const [checkIns, setCheckIns] = useState<(number | null)[]>(Array(7).fill(null));
  const [checkInLoading, setCheckInLoading] = useState(true);
  const [ademOpen, setAdemOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.replace("/");
  }, [user, loading, router]);

  useEffect(() => {
    if (!user || !db) { setCheckInLoading(false); return; }
    const days = getLast7Days();
    Promise.all(
      days.map(datum =>
        getDoc(doc(db!, "users", user.uid, "checkins", datum))
          .then(snap => snap.exists() ? (snap.data().score as number) : null)
          .catch(() => null)
      )
    ).then(results => {
      setCheckIns(results);
      setCheckInLoading(false);
    });
  }, [user]);

  if (loading || instLoading || !user) return null;

  const days = getLast7Days();

  // Streak: consecutive days ending at today (or yesterday if today is empty)
  let streak = 0;
  const startIdx = checkIns[6] !== null ? 6 : 5;
  for (let i = startIdx; i >= 0; i--) {
    if (checkIns[i] !== null) streak++;
    else break;
  }

  // Upcoming CE exams
  const gekozenIds = instellingen?.gekozenVakken ?? [];
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const aankomend = ALLE_VAKKEN
    .filter(v => !v.isSchoolexamen && v.examDatum && gekozenIds.includes(v.id))
    .filter(v => new Date(v.examDatum!).getTime() >= today.getTime())
    .sort((a, b) => a.examDatum!.localeCompare(b.examDatum!));

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <nav className="sticky top-0 z-40" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
          <Logo size="sm" />
          <Link href="/dashboard" className="btn-secondary text-xs flex items-center gap-1.5" style={{ minHeight: 40 }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1" style={{ color: "#0F172A" }}>Bio-Sync</h1>
            <p className="text-sm" style={{ color: "#64748B" }}>Jouw performance tracker</p>
          </div>
          <button
            onClick={() => setAdemOpen(true)}
            className="btn-primary flex items-center gap-2 text-sm"
            style={{ minHeight: 44 }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Ademhaling
          </button>
        </div>

        {/* Check-in history */}
        <div className="card mb-6">
          <p className="label mb-4">Stemming deze week</p>
          {checkInLoading ? (
            <div style={{ display: "flex", gap: 12 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div className="skeleton" style={{ width: 36, height: 36, borderRadius: "50%" }}/>
                  <div className="skeleton" style={{ width: 16, height: 10 }}/>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {days.map((datum, i) => {
                const score = checkIns[i];
                const ds = dotStyle(score);
                return (
                  <div key={datum} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: ds.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {score !== null && (
                        <span style={{ fontSize: 12, fontWeight: 600, color: ds.text }}>{score}</span>
                      )}
                    </div>
                    <span style={{ fontSize: 11, color: "#94A3B8" }}>{dagNaam(datum)}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Streak */}
        {streak > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
            style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 26 }}>🔥</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#92400E" }}>
                  Je hebt {streak} {streak === 1 ? "dag" : "dagen"} op rij ingecheckt
                </p>
                {streak >= 3 && (
                  <p style={{ fontSize: 13, color: "#D97706", marginTop: 2 }}>
                    Goed bezig! Consistentie is key.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Sleep schedule per exam */}
        <p className="label mb-4">Slaapschema per examen</p>
        {aankomend.length === 0 ? (
          <div className="card">
            <p style={{ fontSize: 14, color: "#94A3B8" }}>Geen aankomende examens gevonden.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {aankomend.map((vak, i) => {
              const advies = berekenSlaapAdvies(vak);
              if (!advies) return null;
              return (
                <motion.div
                  key={vak.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="card"
                  style={{ background: "#F8F0FF", border: "1px solid #E9D5FF" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: vak.kleur, display: "inline-block" }}/>
                        <p style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>{vak.naam}</p>
                      </div>
                      <p style={{ fontSize: 12, color: "#94A3B8" }}>{vak.datum} · {vak.tijd}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 28 }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.05em", color: "#9333EA", marginBottom: 2 }}>
                        Slaap om
                      </p>
                      <p style={{ fontSize: 22, fontWeight: 600, color: "#7C3AED" }}>{advies.slapenOm}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.05em", color: "#9333EA", marginBottom: 2 }}>
                        Wakker om
                      </p>
                      <p style={{ fontSize: 22, fontWeight: 600, color: "#7C3AED" }}>{advies.wakkerOm}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {ademOpen && <AdemhalingOefening onClose={() => setAdemOpen(false)} />}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import HulpmiddelBadge from "@/components/HulpmiddelBadge";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

function getToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export default function RoosterPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading } = useInstellingen();

  const [today, setToday] = useState(getToday);

  useEffect(() => {
    function msToMidnight() {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      return midnight.getTime() - now.getTime();
    }
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setToday(getToday());
      interval = setInterval(() => setToday(getToday()), 24 * 60 * 60 * 1000);
    }, msToMidnight());
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, []);

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);
  if (loading || instLoading || !user) return null;

  const gekozenIds = instellingen?.gekozenVakken ?? [];
  const vakken = ALLE_VAKKEN
    .filter(v => !v.isSchoolexamen && v.examDatum && gekozenIds.includes(v.id))
    .sort((a, b) => (a.examDatum ?? "").localeCompare(b.examDatum ?? ""));

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 print:py-4">
        <h1 className="text-2xl font-semibold mb-1" style={{ color: "#0F172A" }}>Examenrooster</h1>
        <p className="text-sm mb-8" style={{ color: "#64748B" }}>
          {instellingen?.niveau ?? "VWO"}{instellingen?.profiel ? ` · ${instellingen.profiel}` : ""} · Centrale examens 2026
        </p>

        <div className="relative">
          {/* Timeline line — desktop only */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px hidden sm:block print:hidden" style={{ background: "#E8ECF0" }}/>

          <div className="space-y-4">
            {vakken.map((vak, i) => {
              const exam = new Date(vak.examDatum!); exam.setHours(0,0,0,0);
              const isPast = exam < today;
              const isToday = exam.getTime() === today.getTime();
              return (
                <motion.div
                  key={vak.id}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="flex gap-6"
                >
                  {/* Date column — desktop only */}
                  <div className="w-[88px] flex-shrink-0 text-right pr-6 pt-3 hidden sm:block">
                    <p className="text-xs font-semibold" style={{ color: isToday ? "#2563EB" : "#0F172A" }}>{vak.datum}</p>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>{vak.tijd}</p>
                  </div>

                  {/* Timeline dot — desktop only */}
                  <div className="relative flex-shrink-0 hidden sm:block print:hidden" style={{ marginTop: 14 }}>
                    <div className="w-3 h-3 rounded-full border-2" style={{
                      background: isToday ? "#2563EB" : isPast ? "#E2E8F0" : "#FFFFFF",
                      borderColor: isToday ? "#2563EB" : isPast ? "#CBD5E1" : vak.kleur,
                      position: "relative", zIndex: 1,
                    }}/>
                    {isToday && <div className="absolute inset-0 rounded-full animate-ping" style={{ background: "#2563EB", opacity: 0.3 }}/>}
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 card cursor-pointer transition-all hover:shadow-md"
                    style={{ opacity: isPast ? 0.6 : 1 }}
                    onClick={() => router.push(`/vak/${vak.id}`)}
                  >
                    {/* Mobile: date + time inside card */}
                    <div className="flex items-center gap-2 mb-2 sm:hidden">
                      <p className="text-xs font-semibold" style={{ color: isToday ? "#2563EB" : "#64748B" }}>{vak.datum}</p>
                      {vak.tijd && <p className="text-xs" style={{ color: "#94A3B8" }}>{vak.tijd}</p>}
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: vak.kleur }}/>
                        <span className="font-semibold text-sm" style={{ color: "#0F172A" }}>{vak.naam}</span>
                        {isToday && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#EFF6FF", color: "#2563EB" }}>
                            Vandaag
                          </span>
                        )}
                      </div>
                      {isPast && <span className="text-xs flex-shrink-0" style={{ color: "#94A3B8" }}>Afgelopen</span>}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {vak.hulpmiddelen.map(h => <HulpmiddelBadge key={h} hulpmiddel={h} />)}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@media print { nav { display: none !important; } body { background: white !important; } }`}</style>
    </div>
  );
}

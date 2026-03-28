"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import { VakData, Vak, Onderwijsniveau } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import VakKaart from "@/components/VakKaart";
import GlobalProgress from "@/components/GlobalProgress";
import Countdown from "@/components/Countdown";
import ZenSuite from "@/components/ZenSuite";
import DailyReview from "@/components/DailyReview";
import OnboardingModal from "@/components/OnboardingModal";
import MobileMenu from "@/components/MobileMenu";
import Logo from "@/components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { greeting, profielLabel } from "@/lib/helpers";
import { DagelijkseCheckIn } from "@/components/BioSync";
import AdemhalingOefening from "@/components/AdemhalingOefening";

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading, saveInstellingen } = useInstellingen();
  const [allData, setAllData] = useState<Record<string, VakData>>({});
  const [dataLoading, setDataLoading] = useState(true);
  const [zenOpen, setZenOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ademOpen, setAdemOpen] = useState(false);

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);

  const gekozenIds = instellingen?.gekozenVakken ?? [];
  const gekozenVakken: Vak[] = ALLE_VAKKEN.filter(v => gekozenIds.includes(v.id));
  const ceVakken = gekozenVakken.filter(v => !v.isSchoolexamen).sort((a, b) => (a.examDatum ?? "9999").localeCompare(b.examDatum ?? "9999"));
  const schoolVakken = gekozenVakken.filter(v => v.isSchoolexamen);
  const firstExamDate = ceVakken[0]?.examDatum;

  const gekozenIdsKey = gekozenIds.join(",");

  useEffect(() => {
    if (!user || !db || instLoading || gekozenIds.length === 0) { setDataLoading(false); return; }
    const fetchAll = async () => {
      const result: Record<string, VakData> = {};
      await Promise.all(gekozenIds.map(async id => {
        const ref = doc(db!, "users", user.uid, "vakken", id);
        const snap = await getDoc(ref);
        if (snap.exists()) result[id] = snap.data() as VakData;
      }));
      setAllData(result);
      setDataLoading(false);
    };
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, instLoading, gekozenIdsKey]);

  if (loading || instLoading) return null;
  if (!user) return null;

  const displayName = user.displayName ?? user.email?.split("@")[0] ?? "daar";
  const initials = displayName.slice(0, 2).toUpperCase();
  const niveauLabel = instellingen?.niveau ?? "";
  const profielLbl = instellingen?.profiel ? profielLabel(instellingen.profiel) : "";

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      {/* Onboarding — eerste login */}
      {instellingen && !instellingen.hasCompletedOnboarding && (
        <OnboardingModal onComplete={saveInstellingen} />
      )}
      {!instellingen && !instLoading && (
        <OnboardingModal onComplete={saveInstellingen} />
      )}
      {/* Onboarding — vakken aanpassen */}
      {showOnboarding && (
        <OnboardingModal
          onComplete={async (inst) => { await saveInstellingen(inst); setShowOnboarding(false); }}
          isAanpassen
          onClose={() => setShowOnboarding(false)}
        />
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <MobileMenu
          niveauLabel={niveauLabel}
          profielLbl={profielLbl}
          onAanpassen={() => setShowOnboarding(true)}
          onFocusMode={() => setZenOpen(true)}
          onSignOut={signOut}
          onClose={() => setMenuOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="sticky top-0 z-40" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Logo size="sm" />
            <Link href="/rooster" className="hidden md:block text-sm font-medium" style={{ color: "#64748B" }}>Rooster</Link>
            <Link href="/biosync" className="hidden md:block text-sm font-medium" style={{ color: "#64748B" }}>Bio-Sync</Link>
          </div>
          <div className="flex items-center gap-3">
            {/* Desktop nav items */}
            <div className="hidden md:flex items-center gap-3">
              {niveauLabel && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}>
                    {niveauLabel}{profielLbl && profielLbl !== "MAVO" ? ` · ${profielLbl}` : ""}
                  </span>
                  <button onClick={() => setShowOnboarding(true)} className="text-xs" style={{ color: "#94A3B8" }}>
                    Aanpassen
                  </button>
                </div>
              )}
              <button onClick={() => setZenOpen(v => !v)} className="btn-secondary flex items-center gap-1.5 text-xs">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Focus
              </button>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: "#EFF6FF" }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: "#2563EB", color: "white" }}>{initials}</span>
                <span className="text-sm font-medium" style={{ color: "#2563EB" }}>{displayName}</span>
              </div>
              <button onClick={signOut} className="btn-secondary text-xs flex items-center gap-1.5">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round"/><polyline points="16 17 21 12 16 7" strokeLinecap="round"/><line x1="21" y1="12" x2="9" y2="12" strokeLinecap="round"/></svg>
                Uitloggen
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center rounded-lg"
              style={{ width: 44, height: 44, color: "#374151" }}
              aria-label="Menu openen"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-semibold mb-0.5" style={{ color: "#0F172A" }}>{greeting(displayName)}</h1>
              <p className="text-sm mb-5" style={{ color: "#64748B" }}>
                Jouw {niveauLabel} examens{profielLbl && profielLbl !== "MAVO" ? ` · ${profielLbl}` : ""}
              </p>
              <GlobalProgress vakken={gekozenVakken} allData={allData} />
            </div>
            <Countdown firstExamDate={firstExamDate} />
          </div>
        </motion.div>

        {/* Daily Check-in */}
        {user && <DagelijkseCheckIn uid={user.uid} />}

        {/* Daily Review */}
        {user && <DailyReview uid={user.uid} />}

        {/* Ademhaling */}
        <div className="mb-6">
          <button
            onClick={() => setAdemOpen(true)}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round"/>
              <path d="M12 8v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Ademhalingsoefening
          </button>
        </div>

        {/* CE Vakken */}
        <div className="flex items-center justify-between mb-4">
          <p className="label">Jouw vakken</p>
          <p className="text-xs" style={{ color: "#94A3B8" }}>Gesorteerd op datum ↓</p>
        </div>

        {dataLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card" style={{ height: 160 }}>
                <div className="skeleton h-4 w-32 mb-3"/><div className="skeleton h-3 w-20 mb-4"/><div className="skeleton h-1.5 w-full"/>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ceVakken.map((vak, i) => (
              <VakKaart key={vak.id} vak={vak} userData={allData[vak.id]} index={i} />
            ))}
          </div>
        )}

        {/* Schoolexamen block */}
        {schoolVakken.length > 0 && (
          <div className="mt-8">
            <p className="label mb-4">Schoolexamens</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {schoolVakken.map((vak, i) => (
                <VakKaart key={vak.id} vak={vak} userData={allData[vak.id]} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Exam schedule chips */}
        {ceVakken.length > 0 && (
          <div className="mt-8 card">
            <p className="label mb-3">Examenrooster</p>
            <div className="flex flex-wrap gap-2">
              {ceVakken.map(vak => (
                <button key={vak.id} onClick={() => router.push(`/vak/${vak.id}`)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-all hover:shadow-sm"
                  style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 36 }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: vak.kleur }}/>
                  <span className="font-medium" style={{ color: vak.kleur }}>{vak.datum}</span>
                  <span>{vak.naam}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {zenOpen && (
        <ZenSuite
          vakken={gekozenVakken}
          niveau={(instellingen?.niveau ?? "VWO") as Onderwijsniveau}
          profiel={instellingen?.profiel ?? "CM"}
          onClose={() => setZenOpen(false)}
        />
      )}

      {ademOpen && <AdemhalingOefening onClose={() => setAdemOpen(false)} />}
    </div>
  );
}

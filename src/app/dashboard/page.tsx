"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import { VakData, Vak, Onderwijsniveau } from "@/types";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Portal } from "@/components/Portal";
import VakKaart from "@/components/VakKaart";
import GlobalProgress from "@/components/GlobalProgress";
import Countdown from "@/components/Countdown";
import ZenSuite from "@/components/ZenSuite";
import { useHerhaling } from "@/hooks/useHerhaling";
import OnboardingModal from "@/components/OnboardingModal";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { greeting, profielLabel } from "@/lib/helpers";
import AdemhalingOefening from "@/components/AdemhalingOefening";
import { useAgenda } from "@/hooks/useAgenda";
import { StudieSessie } from "@/types/agenda";
import IntroTour from "@/components/IntroTour";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading, saveInstellingen } = useInstellingen();
  const { sessies, sessiesOpDatum, loading: agendaLoading } = useAgenda(user?.uid ?? "");
  const { todayItems: herhalingVandaag } = useHerhaling(user?.uid ?? "");
  const [allData, setAllData] = useState<Record<string, VakData>>({});
  const [syllabusChecks, setSyllabusChecks] = useState<Record<string, Record<string, boolean>>>({});
  const [dataLoading, setDataLoading] = useState(true);
  const [zenOpen, setZenOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSeCijferPopup, setShowSeCijferPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ademOpen, setAdemOpen] = useState(false);
  const [tourActief, setTourActief] = useState(false);
  const [hasSeenTour, setHasSeenTour] = useState<boolean | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);

  // Lees hasSeenTour uit een apart document zodat saveInstellingen (profiel) het nooit overschrijft
  useEffect(() => {
    if (!user || !db) return;
    getDoc(doc(db, "users", user.uid, "instellingen", "algemeen")).then(snap => {
      const data = snap.data();
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.log("[tour debug] instellingen/algemeen:", data);
        // eslint-disable-next-line no-console
        console.log("[tour debug] hasSeenTour:", data?.hasSeenTour);
      }
      setHasSeenTour(data?.hasSeenTour === true);
    });
  }, [user]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [showProfileMenu]);

  // Start tour na onboarding — gebruik apart geladen hasSeenTour (niet uit useInstellingen)
  // zodat saveInstellingen (schrijft naar profiel) dit nooit kan overschrijven
  useEffect(() => {
    if (instellingen?.hasCompletedOnboarding && hasSeenTour === false) {
      setTourActief(true);
    }
  }, [instellingen?.hasCompletedOnboarding, hasSeenTour]);

  // Toon SE cijfer banner als nog niet ingevuld en nog niet gezien
  useEffect(() => {
    if (
      instellingen?.hasCompletedOnboarding &&
      !instellingen.hasFilledSeCijfers &&
      !instellingen.hasSeenSeCijferPopup
    ) {
      const timer = setTimeout(() => setShowSeCijferPopup(true), 30 * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, [instellingen]);

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

  // Realtime syllabus voortgang via onSnapshot
  useEffect(() => {
    if (!user || !db || instLoading || gekozenIds.length === 0) return;
    const unsubs = gekozenIds.map(vakId => {
      const ref = doc(db!, "users", user.uid, "syllabusVoortgang", vakId);
      return onSnapshot(ref, snap => {
        const checks = (snap.data()?.checks ?? {}) as Record<string, boolean>;
        setSyllabusChecks(prev => ({ ...prev, [vakId]: checks }));
      });
    });
    return () => unsubs.forEach(u => u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, instLoading, gekozenIdsKey]);

  if (loading || instLoading) return null;
  if (!user) return null;

  // Use local date components — toISOString() returns UTC and can give wrong date at midnight CET/CEST
  const _now = new Date();
  const todayStr = `${_now.getFullYear()}-${String(_now.getMonth() + 1).padStart(2, "0")}-${String(_now.getDate()).padStart(2, "0")}`;

  // DEBUG — open browser console to see what Firestore returned for today
  // Remove this block once Firestore data is verified clean
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log("[agenda debug] sessies vandaag:", sessiesOpDatum(todayStr));
  }

  // Strict filter: correct date string + known vak + positive duration
  const gekozenVakIds = new Set(gekozenVakken.map(v => v.id));
  const vandaagSessies = sessiesOpDatum(todayStr).filter(s =>
    typeof s.datum === "string" &&
    s.datum === todayStr &&
    typeof s.vakId === "string" &&
    gekozenVakIds.has(s.vakId) &&
    typeof s.duurMinuten === "number" &&
    s.duurMinuten > 0
  );
  const zenVandaagSessies = vandaagSessies
    .filter(s => s.syllabusItem !== null)
    .map(s => {
      const vak = gekozenVakken.find(v => v.id === s.vakId);
      return {
        sessieId: s.id,
        vakId: s.vakId,
        doel: s.syllabusItem!,
        vakNaam: vak?.naam ?? "",
        kleur: vak?.kleur ?? "#2563EB",
        duurMinuten: s.duurMinuten,
      };
    })
    .filter(s => s.vakNaam);

  // Merge allData (confidence, notes, seGrade) met syllabusVoortgang checks (realtime).
  // BELANGRIJK: syllabusVoortgang is de enige bron van waarheid voor checks. Nooit
  // terugvallen op base.checks uit users/{uid}/vakken/{vakId}, want daar staat bij
  // sommige gebruikers nog stale data uit een eerdere versie (gaf bv. spookwaarde
  // 4/70 bij Wiskunde A).
  const mergedData: Record<string, VakData> = Object.fromEntries(
    gekozenVakken.map(vak => {
      const base = allData[vak.id] ?? {} as VakData;
      const sc = syllabusChecks[vak.id] ?? {};
      return [vak.id, { ...base, checks: sc as unknown as Record<number, boolean> }];
    })
  );

  const confidenceScores: Record<string, number> = Object.fromEntries(
    Object.entries(allData).map(([vakId, d]) => [vakId, (d as { confidenceScore?: number }).confidenceScore ?? 5])
  );

  const displayName = user.displayName ?? user.email?.split("@")[0] ?? "daar";
  const initials = displayName.slice(0, 2).toUpperCase();
  const niveauLabel = instellingen?.niveau ?? "";
  const profielLbl = instellingen?.profiel ? profielLabel(instellingen.profiel) : "";

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      {/* Onboarding */}
      {instellingen && !instellingen.hasCompletedOnboarding && (
        <OnboardingModal onComplete={saveInstellingen} />
      )}
      {!instellingen && !instLoading && (
        <OnboardingModal onComplete={saveInstellingen} />
      )}
      {showOnboarding && (
        <OnboardingModal
          onComplete={async (inst) => { await saveInstellingen(inst); setShowOnboarding(false); }}
          isAanpassen
          onClose={() => setShowOnboarding(false)}
        />
      )}

      {/* SE Cijfer banner */}
      {showSeCijferPopup && (
        <div style={{
          position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
          zIndex: 9999, width: "calc(100% - 40px)", maxWidth: 480,
          background: "#FFFFFF", border: "1px solid #E8ECF0",
          borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          padding: "12px 16px", display: "flex", alignItems: "center", gap: 12,
        }}>
          <p style={{ flex: 1, fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.4 }}>
            <span style={{ fontWeight: 600 }}>Vul je SE cijfers in</span> zodat de app je planning slimmer kan prioriteren.
          </p>
          <button
            onClick={() => router.push("/instellingen#cijfers")}
            style={{
              padding: "7px 14px", borderRadius: 8, border: "none",
              background: "#2563EB", color: "#FFFFFF",
              fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            Invullen
          </button>
          <button
            onClick={async () => {
              setShowSeCijferPopup(false);
              if (db && user) {
                await setDoc(
                  doc(db, "users", user.uid, "instellingen", "profiel"),
                  { hasSeenSeCijferPopup: true },
                  { merge: true }
                );
              }
            }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#94A3B8", fontSize: 18, lineHeight: 1, padding: "0 2px", flexShrink: 0,
            }}
            aria-label="Sluiten"
          >
            ×
          </button>
        </div>
      )}

      {/* Intro Tour */}
      {tourActief && (
        <IntroTour
          uid={user.uid}
          onVoltooid={() => setTourActief(false)}
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

      <Navbar maxWidth="max-w-7xl" px="px-4 sm:px-6 lg:px-8">
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
              <button
                data-tour="focus-knop"
                onClick={() => setZenOpen(v => !v)}
                className="btn-secondary flex items-center gap-1.5 text-xs"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Focus
              </button>
              {/* Tour herstarten */}
              <button
                onClick={() => setTourActief(true)}
                title="Rondleiding opnieuw starten"
                className="flex items-center justify-center rounded-full text-xs font-bold"
                style={{ width: 28, height: 28, background: "#F1F5F9", color: "#64748B", border: "1px solid #E8ECF0" }}
              >
                ?
              </button>
              <div ref={profileMenuRef} style={{ position: "relative" }}>
                <button
                  onClick={() => setShowProfileMenu(v => !v)}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg"
                  style={{ background: "#EFF6FF", border: "none", cursor: "pointer" }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: "#2563EB", color: "white" }}>{initials}</span>
                  <span className="text-sm font-medium" style={{ color: "#2563EB" }}>{displayName}</span>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {showProfileMenu && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", right: 0,
                    background: "#FFFFFF", border: "1px solid #E8ECF0",
                    borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    minWidth: 200, zIndex: 100, overflow: "hidden",
                  }}>
                    <div style={{ padding: "14px 16px", borderBottom: "1px solid #F1F5F9" }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{displayName}</div>
                      <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{user?.email}</div>
                      <div style={{ fontSize: 11, color: "#64748B", marginTop: 4 }}>{niveauLabel}{profielLbl && profielLbl !== "MAVO" ? ` · ${profielLbl}` : ""}</div>
                    </div>
                    <div style={{ borderBottom: "1px solid #F1F5F9" }}>
                      {[
                        { label: "Mijn profiel", href: "/instellingen#profiel" },
                        { label: "Cijfers & doelen", href: "/instellingen#cijfers" },
                        { label: "Planning voorkeuren", href: "/instellingen#planning" },
                      ].map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setShowProfileMenu(false)}
                          className="block"
                          style={{
                            padding: "10px 16px", fontSize: 14, color: "#374151",
                            textDecoration: "none", display: "block",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#F8F9FC")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <button
                      onClick={signOut}
                      style={{
                        width: "100%", padding: "10px 16px",
                        fontSize: 14, color: "#DC2626",
                        background: "none", border: "none", cursor: "pointer", textAlign: "left",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#F8F9FC")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}
                    >
                      Uitloggen
                    </button>
                  </div>
                )}
              </div>
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
      </Navbar>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-semibold mb-0.5" style={{ color: "#0F172A" }}>{greeting(displayName)}</h1>
              <p className="text-sm mb-5" style={{ color: "#64748B" }}>
                Jouw {niveauLabel} examens{profielLbl && profielLbl !== "MAVO" ? ` · ${profielLbl}` : ""}
              </p>
              <div data-tour="global-progress">
                <GlobalProgress vakken={gekozenVakken} allData={mergedData} />
              </div>
            </div>
            <Countdown firstExamDate={firstExamDate} />
          </div>
        </motion.div>

        {/* Bio-Sync banner — examen binnen 3 dagen */}
        {(() => {
          const today = new Date(); today.setHours(0, 0, 0, 0);
          const binnenDrie = ceVakken.find(v => {
            if (!v.examDatum) return false;
            const exam = new Date(v.examDatum + "T00:00:00");
            const days = Math.round((exam.getTime() - today.getTime()) / 86400000);
            return days >= 0 && days <= 3;
          });
          if (!binnenDrie) return null;
          const exam = new Date(binnenDrie.examDatum! + "T00:00:00");
          const daysLeft = Math.round((exam.getTime() - today.getTime()) / 86400000);
          const wektijd = instellingen?.wektijd ?? "07:30";
          const [wu, wm] = wektijd.split(":").map(Number);
          const wekMin = wu * 60 + (wm ?? 0);
          const bedtijdMin = ((wekMin - 5 * 90 - 15) % (24 * 60) + 24 * 60) % (24 * 60);
          const bedtijd = `${String(Math.floor(bedtijdMin / 60)).padStart(2, "0")}:${String(bedtijdMin % 60).padStart(2, "0")}`;
          return (
            <div
              className="mb-6 flex items-center justify-between gap-3 rounded-xl px-4 py-3 cursor-pointer"
              style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
              onClick={() => router.push("/biosync")}
            >
              <p style={{ fontSize: 13, color: "#D97706", lineHeight: 1.5 }}>
                🌙 <span style={{ fontWeight: 600 }}>{binnenDrie.naam}</span> is over {daysLeft === 0 ? "vandaag" : daysLeft === 1 ? "morgen" : `${daysLeft} dagen`}.
                {" "}Slaap vanavond om <span style={{ fontWeight: 600 }}>{bedtijd}</span> voor optimale voorbereiding.
              </p>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#D97706", whiteSpace: "nowrap", flexShrink: 0 }}>
                Bio-Sync →
              </span>
            </div>
          );
        })()}

        {/* Herhalen banner */}
        {herhalingVandaag.length > 0 && (
          <div
            onClick={() => router.push("/herhalen")}
            className="mb-6 cursor-pointer flex items-center justify-between"
            style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "12px 16px" }}
          >
            <span className="text-sm font-medium" style={{ color: "#2563EB" }}>
              Je hebt {herhalingVandaag.length} leerdoel{herhalingVandaag.length !== 1 ? "en" : ""} te herhalen vandaag
            </span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        {/* Vandaag widget — alleen tonen als Firestore klaar is én er sessies zijn */}
        {!agendaLoading && vandaagSessies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="card mb-6 cursor-pointer"
            onClick={() => router.push("/agenda")}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="label">Vandaag ingepland</p>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}>
                {vandaagSessies.length} sessie{vandaagSessies.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="space-y-2">
              {vandaagSessies
                .sort((a, b) => a.startTijd.localeCompare(b.startTijd))
                .map(s => {
                  const vak = gekozenVakken.find(v => v.id === s.vakId);
                  const onderwerp = s.syllabusItem ?? s.eigenTitel ?? "Eigen onderwerp";
                  return (
                    <div key={s.id} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: vak?.kleur ?? "#2563EB" }} />
                      <span className="text-sm flex-1" style={{ color: "#374151" }}>
                        {vak?.naam ?? ""} · {onderwerp}
                      </span>
                      <span className="text-xs" style={{ color: "#94A3B8" }}>
                        {s.startTijd} · {s.duurMinuten} min
                      </span>
                    </div>
                  );
                })}
            </div>
          </motion.div>
        )}

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
          <p className="text-xs" style={{ color: "#94A3B8" }}>Gesorteerd op datum</p>
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
          <div data-tour="vakken-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ceVakken.map((vak, i) => (
              <VakKaart key={vak.id} vak={vak} userData={mergedData[vak.id]} index={i} />
            ))}
          </div>
        )}

        {/* Schoolexamen block */}
        {schoolVakken.length > 0 && (
          <div className="mt-8">
            <p className="label mb-4">Schoolexamens</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {schoolVakken.map((vak, i) => (
                <VakKaart key={vak.id} vak={vak} userData={mergedData[vak.id]} index={i} />
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
          vandaagSessies={zenVandaagSessies}
          uid={user.uid}
          sessies={vandaagSessies as StudieSessie[]}
          confidenceScores={confidenceScores}
          onClose={() => setZenOpen(false)}
        />
      )}

      {ademOpen && <AdemhalingOefening onClose={() => setAdemOpen(false)} />}
    </div>
  );
}

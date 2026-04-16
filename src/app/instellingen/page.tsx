"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { ALLE_VAKKEN } from "@/data/vakken";
import { Vak, GebruikerInstellingen, Onderwijsniveau, Profiel, PlanningVoorkeuren } from "@/types";
import { profielLabel } from "@/lib/helpers";
import Navbar from "@/components/Navbar";
import { Portal } from "@/components/Portal";
import VakkenModal from "@/components/VakkenModal";
import {
  getAuth, updateProfile, updateEmail,
  sendPasswordResetEmail, deleteUser,
} from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// ─── constants ────────────────────────────────────────────────────────────────

const SECTIES = [
  { id: "profiel",  label: "Mijn profiel" },
  { id: "cijfers",  label: "Cijfers & doelen" },
  { id: "planning", label: "Planning" },
  { id: "account",  label: "Account" },
] as const;

type SectieId = typeof SECTIES[number]["id"];

const NIVEAU_OPTIES: Onderwijsniveau[] = ["VWO", "HAVO", "MAVO"];

const PROFIEL_MAP: Record<string, Profiel[]> = {
  VWO:  ["CM", "EM", "NG", "NT"],
  HAVO: ["CM_HAVO", "EM_HAVO", "NG_HAVO", "NT_HAVO"],
  MAVO: [],
};

const DAG_EIND_OPTIES = ["15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"];
const DUUR_OPTIES = [30, 45, 60, 90] as const;
const PAUZE_OPTIES = [5, 10, 15, 20] as const;

const INPUT_STYLE: React.CSSProperties = {
  padding: "9px 12px", borderRadius: 8, border: "1px solid #E8ECF0",
  fontSize: 14, color: "#0F172A", background: "#FFFFFF", outline: "none", width: "100%",
};

// ─── helpers ──────────────────────────────────────────────────────────────────

function SaveBadge({ saved }: { saved: boolean }) {
  if (!saved) return null;
  return <span style={{ fontSize: 13, color: "#16A34A", fontWeight: 500 }}>Opgeslagen</span>;
}

function SectionCard({ id, title, sub, children }: {
  id: string; title: string; sub?: string; children: React.ReactNode;
}) {
  return (
    <div id={id} style={{
      background: "#FFFFFF", borderRadius: 16,
      border: "1px solid #E8ECF0", padding: 28,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
      marginBottom: 24,
    }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>{title}</h2>
      {sub && <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>{sub}</p>}
      {!sub && <div style={{ height: 16 }} />}
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 12, fontWeight: 600, color: "#94A3B8",
      textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6,
    }}>
      {children}
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function InstellingenPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading, saveInstellingen } = useInstellingen();

  const [activeTab, setActiveTab] = useState<SectieId>("profiel");

  // ── Profiel state ──
  const [naamInput, setNaamInput] = useState("");
  const [niveau, setNiveau] = useState<Onderwijsniveau>("VWO");
  const [profiel, setProfiel] = useState<Profiel>("CM");
  const [profielSaved, setProfielSaved] = useState(false);
  const [showVakkenModal, setShowVakkenModal] = useState(false);

  // ── Cijfers state ──
  const [seCijferRaw, setSeCijferRaw] = useState<Record<string, string>>({});
  const [streefRaw, setStreefRaw] = useState<Record<string, string>>({});
  const [combiRaw, setCombiRaw] = useState<Record<string, string>>({});
  const [seErrors, setSeErrors] = useState<Record<string, boolean>>({});
  const [streefErrors, setStreefErrors] = useState<Record<string, boolean>>({});
  const [combiErrors, setCombiErrors] = useState<Record<string, boolean>>({});
  const [cijfersSaved, setCijfersSaved] = useState(false);
  const [cumLaudeActief, setCumLaudeActief] = useState(false);

  // ── Planning state ──
  const [voorkeurTijden, setVoorkeurTijden] = useState<string[]>(["middag"]);
  const [standaardDuur, setStandaardDuur] = useState<number>(60);
  const [pauzeMinuten, setPauzeMinuten] = useState<number>(15);
  const [dagEindTijd, setDagEindTijd] = useState("18:00");
  const [planningSaved, setPlanningSaved] = useState(false);

  // ── Account state ──
  const [emailInput, setEmailInput] = useState("");
  const [emailBezig, setEmailBezig] = useState(false);
  const [emailMsg, setEmailMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [resetBezig, setResetBezig] = useState(false);
  const [resetMsg, setResetMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteBezig, setDeleteBezig] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");

  // ── Hash navigation ──
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectieId;
    if (hash && SECTIES.some(s => s.id === hash)) setActiveTab(hash);
  }, []);

  // ── Auth guard ──
  useEffect(() => {
    if (!loading && !user) router.replace("/");
  }, [user, loading, router]);

  // ── Populate from Firestore ──
  useEffect(() => {
    if (!instellingen) return;
    setNaamInput(instellingen.displayName ?? user?.displayName ?? "");
    setNiveau(instellingen.niveau);
    setProfiel(instellingen.profiel);
    if (instellingen.seCijfers) {
      const raw: Record<string, string> = {};
      for (const [k, v] of Object.entries(instellingen.seCijfers)) {
        if (v != null) raw[k] = String(v);
      }
      setSeCijferRaw(raw);
    }
    if (instellingen.streefCijfers) {
      const raw: Record<string, string> = {};
      for (const [k, v] of Object.entries(instellingen.streefCijfers)) {
        if (v != null) raw[k] = String(v);
      }
      setStreefRaw(raw);
    }
    if (instellingen.combinatieCijfers) {
      const raw: Record<string, string> = {};
      for (const [k, v] of Object.entries(instellingen.combinatieCijfers)) {
        if (v != null) raw[k] = String(v);
      }
      setCombiRaw(raw);
    }
    if (instellingen.planning) {
      setVoorkeurTijden(instellingen.planning.voorkeurTijden ?? ["middag"]);
      setStandaardDuur(instellingen.planning.standaardDuur ?? 60);
      setPauzeMinuten(instellingen.planning.pauzeMinuten ?? 15);
      setDagEindTijd(instellingen.planning.dagEindTijd ?? "18:00");
    }
    if (user?.email) setEmailInput(user.email);
  }, [instellingen, user]);

  if (loading || instLoading) return null;
  if (!user || !instellingen) return null;

  const currentUser = user;
  const inst = instellingen;

  const gekozenVakken: Vak[] = ALLE_VAKKEN.filter(
    v => inst.gekozenVakken.includes(v.id) && !v.isSchoolexamen
  );
  const profielenVoorNiveau = PROFIEL_MAP[niveau] ?? [];
  const displayName = naamInput || currentUser.displayName || currentUser.email?.split("@")[0] || "";
  const initials = displayName.slice(0, 2).toUpperCase();

  // ─── Save handlers ────────────────────────────────────────────────────────

  async function slaProfielOp() {
    const auth = getAuth();
    await saveInstellingen({ ...inst, niveau, profiel, displayName: naamInput });
    if (auth.currentUser && naamInput !== auth.currentUser.displayName) {
      await updateProfile(auth.currentUser, { displayName: naamInput });
    }
    setProfielSaved(true);
    setTimeout(() => setProfielSaved(false), 3000);
  }

  async function slaCijfersOp() {
    const parsedSe: Record<string, number> = {};
    const parsedStreef: Record<string, number> = {};
    const parsedCombi: Record<string, number> = {};
    const seErr: Record<string, boolean> = {};
    const streefErr: Record<string, boolean> = {};
    const combiErr: Record<string, boolean> = {};
    let hasError = false;

    for (const [id, val] of Object.entries(seCijferRaw)) {
      if (!val.trim()) continue;
      const n = parseFloat(val);
      if (isNaN(n) || n < 1.0 || n > 10.0) { seErr[id] = true; hasError = true; }
      else parsedSe[id] = n;
    }
    for (const [id, val] of Object.entries(streefRaw)) {
      if (!val.trim()) continue;
      const n = parseFloat(val);
      if (isNaN(n) || n < 1.0 || n > 10.0) { streefErr[id] = true; hasError = true; }
      else parsedStreef[id] = n;
    }
    for (const [id, val] of Object.entries(combiRaw)) {
      if (!val.trim()) continue;
      const n = parseFloat(val);
      if (isNaN(n) || n < 1.0 || n > 10.0) { combiErr[id] = true; hasError = true; }
      else parsedCombi[id] = n;
    }

    setSeErrors(seErr);
    setStreefErrors(streefErr);
    setCombiErrors(combiErr);
    if (hasError) return;

    await saveInstellingen({ ...inst, seCijfers: parsedSe, streefCijfers: parsedStreef, combinatieCijfers: parsedCombi });
    setCijfersSaved(true);
    setTimeout(() => setCijfersSaved(false), 3000);
  }

  async function slaPlanningOp() {
    const planning: PlanningVoorkeuren = { voorkeurTijden, standaardDuur, pauzeMinuten, dagEindTijd };
    await saveInstellingen({ ...inst, planning });
    setPlanningSaved(true);
    setTimeout(() => setPlanningSaved(false), 3000);
  }

  async function wijzigEmail() {
    const auth = getAuth();
    if (!auth.currentUser || !emailInput.trim()) return;
    setEmailBezig(true); setEmailMsg(null);
    try {
      await updateEmail(auth.currentUser, emailInput.trim());
      setEmailMsg({ type: "ok", text: "E-mailadres bijgewerkt." });
    } catch (e: unknown) {
      const code = (e as { code?: string }).code;
      if (code === "auth/requires-recent-login") {
        setEmailMsg({ type: "err", text: "Log opnieuw in om je e-mail te wijzigen." });
      } else {
        setEmailMsg({ type: "err", text: "Kon e-mail niet wijzigen. Probeer het opnieuw." });
      }
    }
    setEmailBezig(false);
  }

  async function stuurResetMail() {
    const auth = getAuth();
    if (!currentUser.email) return;
    setResetBezig(true); setResetMsg(null);
    try {
      await sendPasswordResetEmail(auth, currentUser.email);
      setResetMsg({ type: "ok", text: "Reset-mail verzonden naar " + currentUser.email });
    } catch {
      setResetMsg({ type: "err", text: "Kon geen reset-mail sturen." });
    }
    setResetBezig(false);
  }

  async function verwijderAccount() {
    const auth = getAuth();
    if (!auth.currentUser) return;
    setDeleteBezig(true); setDeleteMsg("");
    try {
      if (db) await deleteDoc(doc(db, "users", currentUser.uid));
      await deleteUser(auth.currentUser);
      router.replace("/");
    } catch (e: unknown) {
      const code = (e as { code?: string }).code;
      if (code === "auth/requires-recent-login") {
        setDeleteMsg("Log opnieuw in om je account te verwijderen.");
      } else {
        setDeleteMsg("Verwijderen mislukt. Probeer het opnieuw.");
      }
      setDeleteBezig(false);
    }
  }

  function toggleVoorkeur(tijd: string) {
    setVoorkeurTijden(prev =>
      prev.includes(tijd) ? prev.filter(t => t !== tijd) : [...prev, tijd]
    );
  }

  const pillActive: React.CSSProperties = { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" };
  const pillInactive: React.CSSProperties = { background: "#FFFFFF", color: "#64748B", border: "1px solid #E8ECF0" };

  async function handleVakkenSave(nieuweVakken: string[], heeftNieuweZonderSe: boolean) {
    const updates: GebruikerInstellingen = { ...inst, gekozenVakken: nieuweVakken };
    if (heeftNieuweZonderSe) {
      updates.hasFilledSeCijfers = false;
      updates.hasSeenSeCijferPopup = false;
    }
    await saveInstellingen(updates);
    setShowVakkenModal(false);
  }

  // ─── render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-6 items-start">

          {/* Sidebar — desktop */}
          <aside className="hidden md:block flex-shrink-0" style={{ width: 180 }}>
            <div style={{ position: "sticky", top: 80 }}>
              {SECTIES.map(s => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveTab(s.id);
                    window.history.replaceState(null, "", `/instellingen#${s.id}`);
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    width: "100%", padding: "10px 14px",
                    display: "block", textAlign: "left",
                    fontSize: 14, background: "transparent", border: "none",
                    borderLeft: activeTab === s.id ? "2px solid #2563EB" : "2px solid transparent",
                    color: activeTab === s.id ? "#2563EB" : "#374151",
                    fontWeight: activeTab === s.id ? 600 : 400,
                    cursor: "pointer",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Mobile tabs */}
          <div className="md:hidden w-full mb-4">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SECTIES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  style={{
                    padding: "7px 14px", borderRadius: 8, fontSize: 13,
                    fontWeight: activeTab === s.id ? 600 : 400,
                    ...(activeTab === s.id ? pillActive : pillInactive),
                    cursor: "pointer", border: "1px solid",
                    borderColor: activeTab === s.id ? "#BFDBFE" : "#E8ECF0",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">

            {/* ── SECTIE 1: PROFIEL ── */}
            {activeTab === "profiel" && (
              <SectionCard id="profiel" title="Mijn profiel">
                {/* Avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "#EFF6FF", border: "2px solid #BFDBFE",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, fontWeight: 700, color: "#2563EB",
                  }}>
                    {initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#0F172A" }}>{displayName}</div>
                    <div style={{ fontSize: 13, color: "#94A3B8" }}>{currentUser.email}</div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <Label>Naam</Label>
                    <input
                      type="text"
                      value={naamInput}
                      onChange={e => setNaamInput(e.target.value)}
                      placeholder="Jouw naam"
                      style={INPUT_STYLE}
                    />
                  </div>

                  <div>
                    <Label>Niveau</Label>
                    <select
                      value={niveau}
                      onChange={e => {
                        const n = e.target.value as Onderwijsniveau;
                        setNiveau(n);
                        const profielen = PROFIEL_MAP[n] ?? [];
                        if (profielen.length > 0) setProfiel(profielen[0]);
                      }}
                      style={INPUT_STYLE}
                    >
                      {NIVEAU_OPTIES.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>

                  {profielenVoorNiveau.length > 0 && (
                    <div>
                      <Label>Profiel</Label>
                      <select
                        value={profiel}
                        onChange={e => setProfiel(e.target.value as Profiel)}
                        style={INPUT_STYLE}
                      >
                        {profielenVoorNiveau.map(p => (
                          <option key={p} value={p}>
                            {p === "CM" || p === "CM_HAVO" ? "Cultuur & Maatschappij (C&M)"
                              : p === "EM" || p === "EM_HAVO" ? "Economie & Maatschappij (E&M)"
                              : p === "NG" || p === "NG_HAVO" ? "Natuur & Gezondheid (N&G)"
                              : "Natuur & Techniek (N&T)"}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <Label>Vakken</Label>
                    <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
                      {gekozenVakken.map(v => v.naam).join(", ") || "Geen vakken gekozen"}
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <button
                        onClick={() => setShowVakkenModal(true)}
                        style={{
                          fontSize: 13, color: "#2563EB",
                          background: "none", border: "none",
                          cursor: "pointer", padding: 0,
                          textDecoration: "underline",
                        }}
                      >
                        Vakken aanpassen →
                      </button>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={slaProfielOp}
                    style={{
                      padding: "10px 24px", borderRadius: 10, border: "none",
                      background: "#2563EB", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Opslaan
                  </button>
                  <SaveBadge saved={profielSaved} />
                </div>
              </SectionCard>
            )}

            {/* ── SECTIE 2: CIJFERS ── */}
            {activeTab === "cijfers" && (() => {
              // ── Cum Laude berekening ──
              type CumLaudeVakResultaat = {
                eindcijfer?: number;
                benodigdCE?: number;
                haalbaar: boolean;
                status: "combinatie" | "compleet" | "berekend" | "niet_haalbaar";
              };

              function berekenCumLaude() {
                const resultaten: Record<string, CumLaudeVakResultaat> = {};

                // Stap 1: eindcijfers die al bekend zijn
                for (const vak of gekozenVakken) {
                  const combi = parseFloat(combiRaw[vak.id] ?? "");
                  const se = parseFloat(seCijferRaw[vak.id] ?? "");
                  const ce = parseFloat(streefRaw[vak.id] ?? "");

                  if (!isNaN(combi) && combi >= 1 && combi <= 10) {
                    resultaten[vak.id] = {
                      eindcijfer: combi,
                      status: "combinatie",
                      haalbaar: combi >= 6,
                    };
                  } else if (!isNaN(se) && !isNaN(ce)) {
                    const eindcijfer = Math.round((se + ce) / 2);
                    resultaten[vak.id] = {
                      eindcijfer,
                      status: "compleet",
                      haalbaar: eindcijfer >= 6,
                    };
                  }
                }

                // Stap 2: benodigde CE voor Cum Laude (gemiddelde >= 8.0)
                const vakkenZonderCE = gekozenVakken.filter(v => {
                  const combi = parseFloat(combiRaw[v.id] ?? "");
                  const se = parseFloat(seCijferRaw[v.id] ?? "");
                  const ce = parseFloat(streefRaw[v.id] ?? "");
                  return (isNaN(combi) || combi < 1 || combi > 10) && !isNaN(se) && (isNaN(ce) || ce < 1 || ce > 10);
                });

                const bekendGemiddelde = Object.values(resultaten)
                  .filter(r => r.eindcijfer !== undefined)
                  .reduce((sum, r) => sum + (r.eindcijfer ?? 0), 0);
                const aantalOnbekend = vakkenZonderCE.length;
                const totaalVakken = gekozenVakken.length;

                const benodigdeTotaalSom = 8.0 * totaalVakken;
                const resterendeSom = benodigdeTotaalSom - bekendGemiddelde;
                const gemiddeldePerOnbekendVak = aantalOnbekend > 0 ? resterendeSom / aantalOnbekend : 0;

                for (const vak of vakkenZonderCE) {
                  const se = parseFloat(seCijferRaw[vak.id] ?? "");
                  if (isNaN(se)) continue;
                  const streefEindcijfer = Math.max(8, Math.ceil(gemiddeldePerOnbekendVak));
                  const benodigdCE = 2 * streefEindcijfer - se;
                  const haalbaar = benodigdCE <= 10 && benodigdCE >= 1;

                  resultaten[vak.id] = {
                    benodigdCE: Math.round(benodigdCE * 10) / 10,
                    eindcijfer: haalbaar ? streefEindcijfer : undefined,
                    status: haalbaar ? "berekend" : "niet_haalbaar",
                    haalbaar,
                  };
                }

                // Stap 3: check haalbaarheid
                const alleEindcijfers = Object.values(resultaten)
                  .map(r => r.eindcijfer)
                  .filter((e): e is number => e !== undefined);
                const gemiddelde = alleEindcijfers.length > 0
                  ? alleEindcijfers.reduce((a, b) => a + b, 0) / alleEindcijfers.length
                  : 0;
                const geenOnvoldoende = alleEindcijfers.every(e => e >= 6);
                const cumLaudeHaalbaar = gemiddelde >= 8.0 && geenOnvoldoende &&
                  Object.values(resultaten).every(r => r.haalbaar);

                return { resultaten, gemiddelde, cumLaudeHaalbaar };
              }

              const clResultaat = cumLaudeActief ? berekenCumLaude() : null;
              const vakkenBoven9 = clResultaat ? Object.values(clResultaat.resultaten).filter(r => r.benodigdCE && r.benodigdCE > 9.0).length : 0;

              return (
              <div data-tour="cijferdoelen-sectie">
              <SectionCard id="cijfers" title="Cijfers & doelen">
                <p style={{ fontSize: 13, color: "#64748B", marginBottom: 20, lineHeight: 1.6 }}>
                  Vul je schoolexamencijfer (SE) en het cijfer dat je wil halen voor het CE in.
                  De app gebruikt dit om te bepalen welke vakken meer aandacht nodig hebben.
                </p>

                {/* Cum Laude knop */}
                <div style={{ marginBottom: 20 }}>
                  <button
                    onClick={() => setCumLaudeActief(prev => !prev)}
                    style={{
                      padding: "10px 20px", borderRadius: 8,
                      border: cumLaudeActief ? "2px solid #F59E0B" : "2px solid transparent",
                      background: "#F59E0B", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                      display: "inline-flex", alignItems: "center", gap: 8,
                    }}
                  >
                    {"🏆 Bereken Cum Laude"}
                  </button>
                </div>

                {/* Column headers */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 80px", gap: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Vak</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>SE</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Doel CE</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Combi</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {gekozenVakken.map(vak => {
                    const clVak = clResultaat?.resultaten[vak.id];
                    return (
                    <div key={vak.id}>
                      <div style={{
                        display: "grid", gridTemplateColumns: "1fr 80px 80px 80px",
                        gap: 8, alignItems: "center",
                        padding: "8px 0", borderBottom: "1px solid #F1F5F9",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: vak.kleur, flexShrink: 0 }} />
                          <span style={{ fontSize: 14, color: "#0F172A" }}>{vak.naam}</span>
                        </div>

                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder="bijv. 6.8"
                          value={seCijferRaw[vak.id] ?? ""}
                          onChange={e => {
                            const val = e.target.value;
                            if (/^(\d{0,2}([.,]\d{0,1})?)?$/.test(val)) {
                              setSeCijferRaw(prev => ({ ...prev, [vak.id]: val.replace(",", ".") }));
                              if (seErrors[vak.id]) setSeErrors(prev => ({ ...prev, [vak.id]: false }));
                            }
                          }}
                          style={{
                            width: 80, padding: "8px 12px", borderRadius: 8,
                            border: `1px solid ${seErrors[vak.id] ? "#EF4444" : "#E8ECF0"}`,
                            fontSize: 15, color: "#0F172A", background: "#F8F9FC",
                            textAlign: "center", outline: "none",
                          }}
                        />

                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder="bijv. 6.8"
                          value={streefRaw[vak.id] ?? ""}
                          onChange={e => {
                            const val = e.target.value;
                            if (/^(\d{0,2}([.,]\d{0,1})?)?$/.test(val)) {
                              setStreefRaw(prev => ({ ...prev, [vak.id]: val.replace(",", ".") }));
                              if (streefErrors[vak.id]) setStreefErrors(prev => ({ ...prev, [vak.id]: false }));
                            }
                          }}
                          style={{
                            width: 80, padding: "8px 12px", borderRadius: 8,
                            border: `1px solid ${streefErrors[vak.id] ? "#EF4444" : "#E8ECF0"}`,
                            fontSize: 15, color: "#0F172A", background: "#F8F9FC",
                            textAlign: "center", outline: "none",
                          }}
                        />

                        <input
                          type="text"
                          inputMode="decimal"
                          placeholder="—"
                          value={combiRaw[vak.id] ?? ""}
                          onChange={e => {
                            const val = e.target.value;
                            if (/^(\d{0,2}([.,]\d{0,1})?)?$/.test(val)) {
                              setCombiRaw(prev => ({ ...prev, [vak.id]: val.replace(",", ".") }));
                              if (combiErrors[vak.id]) setCombiErrors(prev => ({ ...prev, [vak.id]: false }));
                            }
                          }}
                          style={{
                            width: 80, padding: "8px 12px", borderRadius: 8,
                            border: `1px solid ${combiErrors[vak.id] ? "#EF4444" : "#E8ECF0"}`,
                            fontSize: 15, color: "#0F172A", background: "#F8F9FC",
                            textAlign: "center", outline: "none",
                          }}
                        />
                      </div>

                      {/* Cum Laude badge per vak */}
                      {cumLaudeActief && clVak && (
                        <div style={{ paddingLeft: 15, paddingTop: 4, paddingBottom: 4 }}>
                          {clVak.status === "combinatie" && (
                            <span style={{
                              display: "inline-block", padding: "3px 10px", borderRadius: 6,
                              fontSize: 12, fontWeight: 500,
                              background: "#FFFBEB", color: "#F59E0B",
                            }}>
                              Combinatiecijfer: {clVak.eindcijfer}
                            </span>
                          )}
                          {clVak.status === "compleet" && (
                            <span style={{
                              display: "inline-block", padding: "3px 10px", borderRadius: 6,
                              fontSize: 12, fontWeight: 500,
                              background: "#F0FDF4", color: "#16A34A",
                            }}>
                              Eindcijfer: {clVak.eindcijfer}
                            </span>
                          )}
                          {clVak.status === "berekend" && clVak.benodigdCE !== undefined && (
                            <span style={{
                              display: "inline-block", padding: "3px 10px", borderRadius: 6,
                              fontSize: 12, fontWeight: 500,
                              background: clVak.benodigdCE > 8.5 ? "#FFFBEB" : "#F0FDF4",
                              color: clVak.benodigdCE > 8.5 ? "#D97706" : "#16A34A",
                            }}>
                              CE: {clVak.benodigdCE} — {clVak.benodigdCE > 8.5 ? "uitdagend" : "haalbaar"}
                            </span>
                          )}
                          {clVak.status === "niet_haalbaar" && (
                            <span style={{
                              display: "inline-block", padding: "3px 10px", borderRadius: 6,
                              fontSize: 12, fontWeight: 500,
                              background: "#FEF2F2", color: "#DC2626",
                            }}>
                              Niet haalbaar
                            </span>
                          )}
                        </div>
                      )}

                      {(seErrors[vak.id] || streefErrors[vak.id] || combiErrors[vak.id]) && (
                        <p style={{ fontSize: 12, color: "#EF4444", marginTop: 2, paddingLeft: 15 }}>
                          Vul een cijfer in tussen 1.0 en 10.0
                        </p>
                      )}
                    </div>
                    );
                  })}
                </div>

                {/* Cum Laude samenvattingsbalk */}
                {cumLaudeActief && clResultaat && (
                  <div style={{
                    marginTop: 20, padding: 16, borderRadius: 12,
                    background: clResultaat.cumLaudeHaalbaar ? "#F0FDF4" : "#FEF2F2",
                    border: `1px solid ${clResultaat.cumLaudeHaalbaar ? "#BBF7D0" : "#FECACA"}`,
                  }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 6 }}>
                      Verwacht gemiddelde: {clResultaat.gemiddelde > 0 ? clResultaat.gemiddelde.toFixed(1) : "—"}
                    </div>
                    <div style={{
                      fontSize: 14, fontWeight: 600,
                      color: clResultaat.cumLaudeHaalbaar ? "#16A34A" : "#DC2626",
                      marginBottom: vakkenBoven9 > 0 ? 6 : 0,
                    }}>
                      {clResultaat.cumLaudeHaalbaar
                        ? "Cum Laude: \u2713 Haalbaar"
                        : "Cum Laude: \u2717 Niet haalbaar met huidige SE cijfers"}
                    </div>
                    {vakkenBoven9 > 0 && (
                      <div style={{ fontSize: 13, color: "#D97706" }}>
                        {vakkenBoven9} {vakkenBoven9 === 1 ? "vak vraagt" : "vakken vragen"} een CE boven 9.0 — focus hierop
                      </div>
                    )}
                  </div>
                )}

                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={slaCijfersOp}
                    style={{
                      padding: "10px 24px", borderRadius: 10, border: "none",
                      background: "#2563EB", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Opslaan
                  </button>
                  <SaveBadge saved={cijfersSaved} />
                </div>
              </SectionCard>
              </div>
              );
            })()}

            {/* ── SECTIE 3: PLANNING ── */}
            {activeTab === "planning" && (
              <SectionCard id="planning" title="Planning">
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                  {/* Voorkeur studietijd */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                      <Label>Voorkeur studietijd</Label>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>Meerdere keuzes mogelijk</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[
                        { key: "ochtend", label: "Ochtend" },
                        { key: "middag",  label: "Middag" },
                        { key: "avond",   label: "Avond" },
                      ].map(t => (
                        <button
                          key={t.key}
                          onClick={() => toggleVoorkeur(t.key)}
                          style={{
                            padding: "9px 16px", borderRadius: 10, fontSize: 14,
                            cursor: "pointer", border: "1px solid",
                            ...(voorkeurTijden.includes(t.key) ? pillActive : pillInactive),
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Standaard sessieduur */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                      <Label>Standaard sessieduur</Label>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>Vooraf ingevuld bij nieuwe sessies</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {DUUR_OPTIES.map(d => (
                        <button
                          key={d}
                          onClick={() => setStandaardDuur(d)}
                          style={{
                            padding: "9px 16px", borderRadius: 10, fontSize: 14,
                            cursor: "pointer", border: "1px solid",
                            ...(standaardDuur === d ? pillActive : pillInactive),
                          }}
                        >
                          {d} min
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pauze */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                      <Label>Pauze tussen sessies</Label>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>Gebruikt bij herplanning</span>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {PAUZE_OPTIES.map(p => (
                        <button
                          key={p}
                          onClick={() => setPauzeMinuten(p)}
                          style={{
                            padding: "9px 16px", borderRadius: 10, fontSize: 14,
                            cursor: "pointer", border: "1px solid",
                            ...(pauzeMinuten === p ? pillActive : pillInactive),
                          }}
                        >
                          {p} min
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Studiedag eindigt om */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                      <Label>Studiedag eindigt om</Label>
                      <span style={{ fontSize: 12, color: "#94A3B8" }}>Grens voor herplanning van sessies</span>
                    </div>
                    <select
                      value={dagEindTijd}
                      onChange={e => setDagEindTijd(e.target.value)}
                      style={{ ...INPUT_STYLE, maxWidth: 140 }}
                    >
                      {DAG_EIND_OPTIES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={slaPlanningOp}
                    style={{
                      padding: "10px 24px", borderRadius: 10, border: "none",
                      background: "#2563EB", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Opslaan
                  </button>
                  <SaveBadge saved={planningSaved} />
                </div>
              </SectionCard>
            )}

            {/* ── SECTIE 4: ACCOUNT ── */}
            {activeTab === "account" && (
              <SectionCard id="account" title="Account">
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                  {/* E-mail */}
                  <div>
                    <Label>E-mailadres</Label>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <input
                        type="email"
                        value={emailInput}
                        onChange={e => setEmailInput(e.target.value)}
                        style={{ ...INPUT_STYLE, flex: 1 }}
                      />
                      <button
                        onClick={wijzigEmail}
                        disabled={emailBezig}
                        style={{
                          background: "none", border: "none", padding: 0,
                          fontSize: 13, color: "#2563EB", cursor: emailBezig ? "default" : "pointer",
                          opacity: emailBezig ? 0.5 : 1, whiteSpace: "nowrap",
                          textDecoration: "underline", fontWeight: 500,
                        }}
                      >
                        {emailBezig ? "Bezig…" : "E-mail wijzigen →"}
                      </button>
                    </div>
                    {emailMsg && (
                      <p style={{ fontSize: 13, marginTop: 6, color: emailMsg.type === "ok" ? "#16A34A" : "#DC2626" }}>
                        {emailMsg.text}
                      </p>
                    )}
                  </div>

                  {/* Wachtwoord */}
                  <div>
                    <Label>Wachtwoord</Label>
                    <button
                      onClick={stuurResetMail}
                      disabled={resetBezig}
                      style={{
                        background: "none", border: "none", padding: 0,
                        fontSize: 13, color: "#2563EB", cursor: resetBezig ? "default" : "pointer",
                        opacity: resetBezig ? 0.5 : 1,
                        textDecoration: "underline", fontWeight: 500,
                      }}
                    >
                      {resetBezig ? "Bezig…" : "Wachtwoord wijzigen →"}
                    </button>
                    {resetMsg && (
                      <p style={{ fontSize: 13, marginTop: 6, color: resetMsg.type === "ok" ? "#16A34A" : "#DC2626" }}>
                        {resetMsg.text}
                      </p>
                    )}
                  </div>

                  {/* Uitloggen */}
                  <div>
                    <Label>Sessie</Label>
                    <button
                      onClick={signOut}
                      style={{
                        padding: "9px 18px", borderRadius: 8, border: "1px solid #E8ECF0",
                        background: "#FFFFFF", color: "#374151", fontSize: 14, cursor: "pointer",
                      }}
                    >
                      Uitloggen
                    </button>
                  </div>
                </div>

                {/* Account verwijderen — subtle text link at bottom */}
                <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #F1F5F9" }}>
                  <button
                    onClick={() => setShowDeletePopup(true)}
                    style={{
                      background: "none", border: "none", padding: 0,
                      fontSize: 13, color: "#94A3B8", cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Account verwijderen
                  </button>
                </div>
              </SectionCard>
            )}
          </div>
        </div>
      </div>

      {/* Delete bevestigingspopup */}
      {showDeletePopup && (
        <Portal>
          <div style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
          }}>
            <div style={{
              background: "#FFFFFF", borderRadius: 16, padding: 28,
              maxWidth: 400, width: "100%", border: "1px solid #E8ECF0",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", margin: "0 0 10px" }}>
                Account verwijderen?
              </h3>
              <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 20px", lineHeight: 1.55 }}>
                Dit verwijdert al je voortgang, planning en instellingen permanent. Dit kan niet ongedaan worden gemaakt.
              </p>
              {deleteMsg && (
                <p style={{ fontSize: 13, color: "#64748B", marginBottom: 16 }}>{deleteMsg}</p>
              )}
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  onClick={() => { setShowDeletePopup(false); setDeleteMsg(""); }}
                  style={{
                    flex: 1, padding: "11px 0", borderRadius: 10,
                    border: "1px solid #E8ECF0", background: "#FFFFFF",
                    color: "#374151", fontSize: 14, cursor: "pointer", fontWeight: 500,
                  }}
                >
                  Annuleren
                </button>
                <button
                  onClick={verwijderAccount}
                  disabled={deleteBezig}
                  style={{
                    flex: 1, padding: "11px 0", borderRadius: 10,
                    border: "1px solid #E8ECF0", background: "#F8F9FC",
                    color: "#374151", fontSize: 14, fontWeight: 500,
                    cursor: deleteBezig ? "default" : "pointer",
                    opacity: deleteBezig ? 0.7 : 1,
                  }}
                >
                  {deleteBezig ? "Bezig…" : "Verwijderen"}
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}

      {/* ── Vakken aanpassen modal ── */}
      {showVakkenModal && (
        <VakkenModal
          niveau={inst.niveau}
          profiel={inst.profiel}
          huidigGekozen={inst.gekozenVakken}
          seCijfers={inst.seCijfers}
          onSave={handleVakkenSave}
          onClose={() => setShowVakkenModal(false)}
        />
      )}
    </div>
  );
}

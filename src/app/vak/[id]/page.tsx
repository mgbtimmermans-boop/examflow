"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ALLE_VAKKEN } from "@/data/vakken";
import { useVakData, useInstellingen } from "@/hooks/useVakData";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import HulpmiddelBadge from "@/components/HulpmiddelBadge";
import GradePredictor from "@/components/GradePredictor";
import ExamenSimulator from "@/components/ExamenSimulator";
import GearUpChecklist from "@/components/GearUpChecklist";
import Logo from "@/components/Logo";
import Link from "next/link";
import { daysLabel, telLeerdoelen } from "@/lib/helpers";
import { useDaysLeft } from "@/hooks/useDaysLeft";
import { Onderwijsniveau, Profiel } from "@/types";
import { db } from "@/lib/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { SlaapAdviesKaart, VoedingsTipKaart } from "@/components/BioSync";
import { useAgenda } from "@/hooks/useAgenda";
import SessieModal from "@/components/Agenda/SessieModal";
import { useHerhaling } from "@/hooks/useHerhaling";
import ScoreWizard from "@/components/ScoreWizard";
import { EXAMEN_VRAGEN } from "@/data/scoreWizard";
import { ExamenVraag } from "@/types/scoreWizard";
import SyllabusTree from "@/components/SyllabusTree";
import { useSyllabusVoortgang } from "@/hooks/useSyllabusVoortgang";
import { ECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/economie-vwo";
import { ECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/economie-havo";
import { WISKUNDE_A_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-a-vwo";
import { WISKUNDE_A_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-a-havo";
import { WISKUNDE_B_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-b-havo";
import { BIOLOGIE_HAVO_SYLLABUS } from "@/data/syllabi/biologie-havo";
import { SCHEIKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/scheikunde-havo";
import { BEDRIJFSECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-havo";
import { GESCHIEDENIS_HAVO_SYLLABUS } from "@/data/syllabi/geschiedenis-havo";
import { NEDERLANDS_HAVO_SYLLABUS } from "@/data/syllabi/nederlands-havo";
import { AARDRIJKSKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-havo";
import { NATUURKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/natuurkunde-havo";
import { FILOSOFIE_HAVO_SYLLABUS } from "@/data/syllabi/filosofie-havo";
import { ENGELS_HAVO_SYLLABUS } from "@/data/syllabi/engels-havo";
import { DUITS_HAVO_SYLLABUS } from "@/data/syllabi/duits-havo";
import { FRANS_HAVO_SYLLABUS } from "@/data/syllabi/frans-havo";
import { NEDERLANDS_VWO_SYLLABUS } from "@/data/syllabi/nederlands-vwo";
import { BIOLOGIE_VWO_SYLLABUS } from "@/data/syllabi/biologie-vwo";
import { SCHEIKUNDE_VWO_SYLLABUS } from "@/data/syllabi/scheikunde-vwo";
import { BEDRIJFSECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-vwo";
import { GESCHIEDENIS_VWO_SYLLABUS } from "@/data/syllabi/geschiedenis-vwo";
import { WISKUNDE_B_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-b-vwo";
import { AARDRIJKSKUNDE_VWO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-vwo";
import { FILOSOFIE_VWO_SYLLABUS } from "@/data/syllabi/filosofie-vwo";
import { NATUURKUNDE_VWO_SYLLABUS } from "@/data/syllabi/natuurkunde-vwo";
import { GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/griekse-taal-en-cultuur-vwo";
import { LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/latijnse-taal-en-cultuur-vwo";
import { ENGELS_VWO_SYLLABUS } from "@/data/syllabi/engels-vwo";
import { DUITS_VWO_SYLLABUS } from "@/data/syllabi/duits-vwo";
import { FRANS_VWO_SYLLABUS } from "@/data/syllabi/frans-vwo";
import { VakSyllabus, Leerdoel } from "@/types/syllabus";
import FormuleOverzicht from "@/components/FormuleOverzicht";
import OpfrissKaart from "@/components/ScoreWizard/OpfrissKaart";
import { FORMULES } from "@/data/formules";
import { begrippen } from "@/data/begrippen";

const SYLLABI: Record<string, VakSyllabus> = {
  "economie-vwo": ECONOMIE_VWO_SYLLABUS,
  "economie-havo": ECONOMIE_HAVO_SYLLABUS,
  "wiskunde-a-vwo": WISKUNDE_A_VWO_SYLLABUS,
  "wiskunde-a-havo": WISKUNDE_A_HAVO_SYLLABUS,
  "wiskunde-b-havo": WISKUNDE_B_HAVO_SYLLABUS,
  "biologie-havo": BIOLOGIE_HAVO_SYLLABUS,
  "scheikunde-havo": SCHEIKUNDE_HAVO_SYLLABUS,
  "bedrijfseconomie-havo": BEDRIJFSECONOMIE_HAVO_SYLLABUS,
  "geschiedenis-havo": GESCHIEDENIS_HAVO_SYLLABUS,
  "nederlands-havo": NEDERLANDS_HAVO_SYLLABUS,
  "aardrijkskunde-havo": AARDRIJKSKUNDE_HAVO_SYLLABUS,
  "natuurkunde-havo": NATUURKUNDE_HAVO_SYLLABUS,
  "filosofie-havo": FILOSOFIE_HAVO_SYLLABUS,
  "engels-havo": ENGELS_HAVO_SYLLABUS,
  "duits-havo": DUITS_HAVO_SYLLABUS,
  "frans-havo": FRANS_HAVO_SYLLABUS,
  "nederlands-vwo": NEDERLANDS_VWO_SYLLABUS,
  "biologie-vwo": BIOLOGIE_VWO_SYLLABUS,
  "scheikunde-vwo": SCHEIKUNDE_VWO_SYLLABUS,
  "bedrijfseconomie-vwo": BEDRIJFSECONOMIE_VWO_SYLLABUS,
  "geschiedenis-vwo": GESCHIEDENIS_VWO_SYLLABUS,
  "wiskunde-b-vwo": WISKUNDE_B_VWO_SYLLABUS,
  "aardrijkskunde-vwo": AARDRIJKSKUNDE_VWO_SYLLABUS,
  "filosofie-vwo": FILOSOFIE_VWO_SYLLABUS,
  "natuurkunde-vwo": NATUURKUNDE_VWO_SYLLABUS,
  "grieks-vwo": GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "latijn-vwo": LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "engels-vwo": ENGELS_VWO_SYLLABUS,
  "duits-vwo": DUITS_VWO_SYLLABUS,
  "frans-vwo": FRANS_VWO_SYLLABUS,
};

export default function VakDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { user, loading } = useAuth();
  const { instellingen } = useInstellingen();
  const vak = ALLE_VAKKEN.find(v => v.id === id);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [savedNote, setSavedNote] = useState(false);
  const [gearUpOpen, setGearUpOpen] = useState(false);
  const [activeWizardVraag, setActiveWizardVraag] = useState<ExamenVraag | null>(null);
  const [activeWizardLeerdoel, setActiveWizardLeerdoel] = useState<Leerdoel | null>(null);
  const [agendaModalItem, setAgendaModalItem] = useState<string | null>(null);
  const [formuleOpen, setFormuleOpen] = useState(false);
  const [openBegrip, setOpenBegrip] = useState<string | null>(null);
  const [opfrissLeerdoel, setOpfrissLeerdoel] = useState<Leerdoel | null>(null);
  const [zwakeDomeinIds, setZwakeDomeinIds] = useState<string[]>([]);
  const [weggeklikteDomeinIds, setWeggeklikteDomeinIds] = useState<string[]>([]);

  // Load zwakeDomeinen + weggeklikteDomeinen from tracker doc (realtime)
  useEffect(() => {
    if (!user || !db) return;
    const trackerRef = doc(db, "users", user.uid, "tracker", id);
    const unsub = onSnapshot(trackerRef, (snap) => {
      const data = snap.data();
      setZwakeDomeinIds(data?.zwakeDomeinen ?? []);
      setWeggeklikteDomeinIds(data?.weggeklikteDomeinen ?? []);
    });
    return unsub;
  }, [user, id]);

  async function klikWegDomein(domeinId: string) {
    if (!user || !db) return;
    const nieuweWeggeklikt = [...weggeklikteDomeinIds, domeinId];
    const trackerRef = doc(db, "users", user.uid, "tracker", id);
    await setDoc(trackerRef, { weggeklikteDomeinen: nieuweWeggeklikt }, { merge: true });
    setWeggeklikteDomeinIds(nieuweWeggeklikt);
  }

  function getVraagVoorItem(vakId: string, syllabusItem: string): ExamenVraag | null {
    return EXAMEN_VRAGEN.find(v => v.vakId === vakId && v.syllabusItem === syllabusItem) ?? null;
  }

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);

  const { data, updateChecks, updateNotes, updateConfidence, updateSeGrade } = useVakData(id);
  const { voegToe: voegSessieToe, ingeplandeSyllabusItems } = useAgenda(user?.uid ?? "");
  const { voegHerhaalItemToe, verwijderHerhaalItem } = useHerhaling(user?.uid ?? "");
  const daysLeft = useDaysLeft(vak?.examDatum);

  // Syllabus tree (for vakken with a VakSyllabus)
  const vakSyllabus = SYLLABI[id] ?? null;
  const { voortgang: syllabusVoortgang, toggleLeerdoel, pctVoltooid } = useSyllabusVoortgang(
    user?.uid ?? "", id
  );

  async function handleToggleLeerdoel(leerdoelId: string) {
    await toggleLeerdoel(leerdoelId);
    if (!vakSyllabus || !vak) return;
    const isNuGecheckt = !syllabusVoortgang[leerdoelId];
    for (const domein of vakSyllabus.domeinen) {
      const domeinNaam = (domein.naam ?? domein.titel ?? "").toLowerCase();
      if (domeinNaam.includes("vaardigheden")) continue;
      for (const sub of domein.subdomeinen) {
        const leerdoel = sub.leerdoelen.find(l => l.id === leerdoelId);
        if (!leerdoel) continue;
        const subNaam = (sub.naam ?? sub.titel ?? "").toLowerCase();
        if (subNaam.includes("vaardigheden") || leerdoel.id.toLowerCase().startsWith("a")) return;
        if (isNuGecheckt) {
          if (vak.id === "bedrijfseconomie-vwo" || vak.id === "bedrijfseconomie-havo") {
            // STAP 5: still check zwakeDomeinen removal for bedrijfseconomie
            await checkAndRemoveZwakDomein(domein.id, sub.id);
            return;
          }
          await voegHerhaalItemToe(leerdoel.id, vak.id, vak.naam, leerdoel.omschrijving);
          // STAP 5: Check if all leerdoelen in this subdomein/domein are done
          await checkAndRemoveZwakDomein(domein.id, sub.id);
        } else {
          await verwijderHerhaalItem(leerdoel.id, vak.id);
        }
        return;
      }
    }
  }

  // STAP 5: Remove domein/subdomein from zwakeDomeinen if all leerdoelen are checked
  async function checkAndRemoveZwakDomein(domeinId: string, subdomeinId: string) {
    if (!user || !db || !vakSyllabus) return;
    const idsToCheck = [domeinId, subdomeinId];
    const relevant = idsToCheck.filter(id => zwakeDomeinIds.includes(id));
    if (relevant.length === 0) return;

    // Build updated voortgang (include the just-toggled item)
    const updatedVoortgang = { ...syllabusVoortgang };

    const toRemove: string[] = [];
    for (const checkId of relevant) {
      let allDone = false;
      if (checkId === domeinId) {
        // Check all leerdoelen in entire domein
        const domein = vakSyllabus.domeinen.find(d => d.id === domeinId);
        if (domein) {
          const allIds = domein.subdomeinen.flatMap(s => s.leerdoelen.map(l => l.id));
          allDone = allIds.every(lid => updatedVoortgang[lid] || !syllabusVoortgang[lid] && updatedVoortgang[lid] !== false);
          // More accurate: check with the toggle applied
          allDone = allIds.every(lid => {
            // The just-toggled one is now checked (isNuGecheckt was true to get here)
            return syllabusVoortgang[lid] || false;
          });
        }
      } else {
        // Check all leerdoelen in subdomein
        const domein = vakSyllabus.domeinen.find(d => d.id === domeinId);
        const sub = domein?.subdomeinen.find(s => s.id === subdomeinId);
        if (sub) {
          allDone = sub.leerdoelen.every(l => syllabusVoortgang[l.id] || false);
        }
      }
      if (allDone) toRemove.push(checkId);
    }

    if (toRemove.length === 0) return;
    const newList = zwakeDomeinIds.filter(id => !toRemove.includes(id));
    setZwakeDomeinIds(newList);
    const trackerRef = doc(db, "users", user.uid, "tracker", id);
    await setDoc(trackerRef, { zwakeDomeinen: newList }, { merge: true });
  }

  const vakFormules = FORMULES.find(f => f.vakId === id)?.formules ?? []
  const vakBegrippen = begrippen.filter(b => b.vakken.includes(id))
  const heeftInhoud = vakFormules.length > 0 || vakBegrippen.length > 0
  const knoopTekst = vakFormules.length > 0 && vakBegrippen.length > 0
    ? "Formules & Begrippen"
    : vakFormules.length > 0
    ? "Formules"
    : "Begrippen"

  if (!vak) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "#F8F9FC" }}>
      <p style={{ color: "#64748B" }}>Vak niet gevonden</p>
      <Link href="/dashboard" className="btn-primary">Terug naar dashboard</Link>
    </div>
  );
  if (loading || !user) return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 200, height: 28, background: "#E8ECF0", borderRadius: 8 }} />
          <div style={{ width: 80, height: 28, background: "#E8ECF0", borderRadius: 8 }} />
        </div>
        <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8ECF0", padding: 28 }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ height: 20, background: "#F1F5F9", borderRadius: 6, marginBottom: 12, width: `${60 + i * 5}%` }} />
          ))}
        </div>
      </div>
    </div>
  );

  const checks = data?.checks ?? {};
  const toggleCheck = (idx: number) => updateChecks({ ...checks, [idx]: !checks[idx] });
  const done = Object.values(checks).filter(Boolean).length;
  const total = telLeerdoelen(vak);
  const niveau = (instellingen?.niveau ?? "VWO") as Onderwijsniveau;
  const gekozenIds = instellingen?.gekozenVakken ?? [];
  const gekozenVakken = ALLE_VAKKEN.filter(v => gekozenIds.includes(v.id));
  const ingeplandItems = vak ? ingeplandeSyllabusItems(vak.id) : [];
  const confidenceScore = data?.confidenceScore ?? 5;
  const bedtijd = instellingen?.bedtijd ?? "23:00";

  const confStyle = () => {
    if (confidenceScore <= 4) return { bg: "#FEF2F2", text: "#DC2626", border: "#FECACA", label: "Prioriteit hoog" };
    if (confidenceScore <= 7) return { bg: "#FFFBEB", text: "#D97706", border: "#FDE68A", label: "Gemiddeld" };
    return { bg: "#F0FDF4", text: "#16A34A", border: "#BBF7D0", label: "Klaar voor examen" };
  };
  const cs = confStyle();

  const dl = vak.examDatum ? daysLabel(daysLeft) : null;

  const handleNotesChange = (v: string) => {
    updateNotes(v); setSavedNote(false);
    setTimeout(() => setSavedNote(true), 1100);
  };

  // Leerdoel oefen handler: show OpfrissKaart first, then ScoreWizard
  function handleOefen(leerdoel: Leerdoel) {
    setOpfrissLeerdoel(leerdoel);
  }

  function handleOpfrissStart() {
    if (!opfrissLeerdoel || !vak) return;
    const vraag = getVraagVoorItem(vak.id, opfrissLeerdoel.id);
    const ld = opfrissLeerdoel;
    setOpfrissLeerdoel(null);
    if (vraag) {
      setActiveWizardLeerdoel(ld);
      setActiveWizardVraag(vraag);
    }
  }

  function heeftVraagVoorLeerdoel(leerdoelId: string): boolean {
    if (!vak) return false;
    return !!getVraagVoorItem(vak.id, leerdoelId);
  }

  return (
    <>
      <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
        <nav className="sticky top-0 z-40" style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECF0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
            <Logo size="sm" />
            <Link href="/dashboard" className="btn-secondary text-xs flex items-center gap-1.5">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Dashboard
            </Link>
          </div>
        </nav>

        {daysLeft === 0 && !vak.isSchoolexamen && vak.tijd && (() => {
          const [h, m] = vak.tijd.split(":").map(Number);
          const totalMin = h * 60 + m - 120;
          const eetUur = String(Math.floor(totalMin / 60)).padStart(2, "0");
          const eetMin = String(totalMin % 60).padStart(2, "0");
          return (
            <div style={{ background: "#FFFBEB", borderBottom: "1px solid #FDE68A", padding: "12px 24px" }}>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#D97706", textAlign: "center" }}>
                Examensdag! Eet je ontbijt/lunch om {eetUur}:{eetMin}.
              </p>
            </div>
          );
        })()}

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>{vak.naam}</h1>
                <span className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: "#F1F5F9", color: "#64748B" }}>{niveau}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {vak.isSchoolexamen ? (
                  <span className="text-sm" style={{ color: "#64748B" }}>Schoolexamen</span>
                ) : (
                  <>
                    <span className="text-sm" style={{ color: "#64748B" }}>{vak.datum} · {vak.tijd}</span>
                    {dl && <span className="text-sm font-medium" style={{ color: dl.color }}>· {dl.text}</span>}
                  </>
                )}
                {vak.hulpmiddelen.map(h => <HulpmiddelBadge key={h} hulpmiddel={h} />)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0">
              {heeftInhoud && (
                <button onClick={() => setFormuleOpen(true)} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 7h6m-6 4h6m-6 4h4" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                  {knoopTekst}
                </button>
              )}
              {!vak.isSchoolexamen && (
                <>
                  <Link href={`/tracker/${id}`} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Tracker
                  </Link>
                  <button onClick={() => setSimulatorOpen(true)} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Start examen simulator
                  </button>
                  <button onClick={() => setGearUpOpen(true)} className="btn-secondary flex items-center justify-center gap-2 text-sm" style={{ minHeight: 44 }}>
                    Examentas
                  </button>
                </>
              )}
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: syllabus */}
            <div className="lg:col-span-3">
              {vakSyllabus ? (
                /* Hiërarchische SyllabusTree */
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <p className="label">Syllabus</p>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                      {pctVoltooid(vakSyllabus.domeinen.flatMap(d => d.subdomeinen.flatMap(s => s.leerdoelen.map(l => l.id))))}% afgerond
                    </span>
                  </div>
                  {(id === "bedrijfseconomie-vwo" || id === "bedrijfseconomie-havo") && (
                    <div style={{
                      background: "#FFFBEB",
                      border: "1px solid #FDE68A",
                      borderRadius: 8,
                      padding: "10px 14px",
                      fontSize: 13,
                      color: "#92400E",
                      marginBottom: 12
                    }}>
                      Herhaalfunctie voor dit vak is tijdelijk niet beschikbaar. We werken aan een update.
                    </div>
                  )}
                  <SyllabusTree
                    syllabus={vakSyllabus}
                    voortgang={syllabusVoortgang}
                    onToggle={handleToggleLeerdoel}
                    onOefen={handleOefen}
                    heeftVraag={heeftVraagVoorLeerdoel}
                    pctVoltooid={pctVoltooid}
                    onBegripClick={(begrip) => { setOpenBegrip(begrip); setFormuleOpen(true); }}
                    zwakeDomeinIds={zwakeDomeinIds}
                    weggeklikteDomeinIds={weggeklikteDomeinIds}
                    onDomeinWegklikken={klikWegDomein}
                    vakId={id}
                  />
                </div>
              ) : (
                /* Klassieke checklist */
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <p className="label">Syllabus checklist</p>
                    <span className="text-xs" style={{ color: "#94A3B8" }}>{done} van {total} afgerond</span>
                  </div>
                  <ul className="space-y-1">
                    {vak.syllabus.map((item, idx) => {
                      const checked = !!checks[idx];
                      return (
                        <motion.li key={idx} animate={checked ? { backgroundColor: ["#F0FDF4","#FFFFFF"] } : {}} transition={{ duration: 0.6 }}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors group min-h-[44px]"
                          style={{ background: checked ? "#F8FFF8" : "transparent" }}>
                          <motion.span onClick={() => toggleCheck(idx)} animate={checked ? { scale: [1,1.2,1] } : { scale: 1 }} transition={{ duration: 0.2 }}
                            className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors"
                            style={checked ? { background: "#16A34A", border: "1px solid #16A34A" } : { background: "white", border: "1px solid #CBD5E1" }}>
                            {checked && <svg width="10" height="10" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </motion.span>
                          <span onClick={() => toggleCheck(idx)} className="text-sm flex-1" style={{ color: checked ? "#94A3B8" : "#374151", textDecoration: checked ? "line-through" : "none" }}>{item}</span>
                          {ingeplandItems.includes(item) && (
                            <span style={{ fontSize: 11, color: "#2563EB", background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 20, padding: "2px 8px", flexShrink: 0 }}>
                              ingepland
                            </span>
                          )}
                          <div className="flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            {!ingeplandItems.includes(item) && (
                              <button
                                onClick={e => { e.stopPropagation(); setAgendaModalItem(item); }}
                                title="Inplannen in agenda"
                                style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, border: "1px solid #BFDBFE", background: "#EFF6FF", color: "#2563EB", cursor: "pointer", fontWeight: 500 }}
                              >
                                + Inplannen
                              </button>
                            )}
                            {(() => {
                              const wizardVraag = getVraagVoorItem(vak.id, item);
                              return (
                                <button
                                  onClick={e => { e.stopPropagation(); if (wizardVraag) setActiveWizardVraag(wizardVraag); }}
                                  disabled={!wizardVraag}
                                  title={wizardVraag ? "Score Wizard" : "Nog geen oefenvraag beschikbaar"}
                                  style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, border: "1px solid #E8ECF0", background: "#FFFFFF", color: "#2563EB", cursor: wizardVraag ? "pointer" : "default", fontWeight: 500, opacity: wizardVraag ? 1 : 0.3 }}
                                >
                                  Oefen
                                </button>
                              );
                            })()}
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: sticky sidebar */}
            <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-24 lg:self-start">
              {/* Confidence */}
              <div className="card">
                <p className="label mb-3">Hoe goed ken je dit vak?</p>
                <div className="flex items-center gap-4 mb-2">
                  <input type="range" min="1" max="10" value={confidenceScore}
                    onChange={e => updateConfidence(Number(e.target.value))}
                    className="flex-1" style={{ accentColor: cs.text }} />
                  <span className="font-bold text-xl w-8 text-center font-mono" style={{ color: cs.text }}>{confidenceScore}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: 11, color: "#94A3B8" }}>Nog veel te leren</span>
                  <span style={{ fontSize: 11, color: "#94A3B8" }}>Ik ken het goed</span>
                </div>
                <p style={{ fontSize: 12, color: "#64748B", marginTop: 10, textAlign: "center", fontStyle: "italic" }}>
                  {confidenceScore <= 2 ? "Er is nog veel te leren voor dit vak"
                    : confidenceScore <= 4 ? "Je staat nog aan het begin"
                    : confidenceScore <= 6 ? "Je kent de basis, maar er zijn nog gaten"
                    : confidenceScore <= 8 ? "Je kent dit vak redelijk goed"
                    : "Je bent goed voorbereid"}
                </p>
              </div>

              {/* Grade predictor */}
              {!vak.isSchoolexamen && (
                <GradePredictor
                  seCijfer={instellingen?.seCijfers?.[vak.id] ?? null}
                  streefCijfer={instellingen?.streefCijfers?.[vak.id] ?? null}
                  niveau={niveau}
                />
              )}

              {/* Notes */}
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <p className="label">Notities & tips</p>
                  <AnimatePresence>
                    {savedNote && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-xs" style={{ color: "#94A3B8" }}>Opgeslagen</motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <textarea value={data?.notes ?? ""} onChange={e => handleNotesChange(e.target.value)}
                  placeholder="Schrijf hier je samenvatting of last-minute tips..."
                  rows={5} className="w-full text-sm resize-none focus:outline-none leading-relaxed"
                  style={{ color: "#374151", background: "transparent" }} />
              </div>

              {/* Slaapadvies + Voeding */}
              <SlaapAdviesKaart vak={vak} daysLeft={daysLeft} bedtijd={bedtijd} />
              <VoedingsTipKaart vak={vak} daysLeft={daysLeft} />

              {/* Links */}
              <div className="card">
                <p className="label mb-3">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { href: `https://www.alleexamens.nl/vwo/${vak.alleExamensSlug}`, label: "Oefen op AlleExamens.nl" },
                    { href: "https://www.examenblad.nl", label: "Officiële syllabus (Examenblad)" },
                  ].map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg transition-colors"
                      style={{ border: "1px solid #E8ECF0" }}>
                      <span className="text-sm" style={{ color: "#374151" }}>{link.label}</span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round"/><polyline points="15 3 21 3 21 9" strokeLinecap="round"/><line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {simulatorOpen && <ExamenSimulator vaknaam={vak.naam} datum={vak.datum ?? ""} startTijd={vak.tijd} examDuur={vak.examDuur} onClose={() => setSimulatorOpen(false)} />}

      <AnimatePresence>
        {gearUpOpen && (
          <GearUpChecklist vak={vak} niveau={niveau} onClose={() => setGearUpOpen(false)} />
        )}
      </AnimatePresence>

      {/* OpfrissKaart voor leerdoelen */}
      <AnimatePresence>
        {opfrissLeerdoel && (
          <OpfrissKaart
            leerdoel={opfrissLeerdoel}
            onSlaOver={() => {
              const vraag = getVraagVoorItem(vak.id, opfrissLeerdoel.id);
              setOpfrissLeerdoel(null);
              if (vraag) setActiveWizardVraag(vraag);
            }}
            onStart={handleOpfrissStart}
          />
        )}
      </AnimatePresence>

      {activeWizardVraag && user && (
        <ScoreWizard
          vraag={activeWizardVraag}
          uid={user.uid}
          leerdoel={activeWizardLeerdoel ?? undefined}
          onClose={() => { setActiveWizardVraag(null); setActiveWizardLeerdoel(null); }}
        />
      )}

      {agendaModalItem && instellingen && (
        <SessieModal
          vakken={gekozenVakken}
          instellingen={instellingen}
          defaultVakId={vak.id}
          defaultSyllabusItem={agendaModalItem}
          onSave={async (sessie) => {
            await voegSessieToe(sessie);
            setAgendaModalItem(null);
          }}
          onClose={() => setAgendaModalItem(null)}
        />
      )}

      {/* Formule overzicht slide-in */}
      <AnimatePresence>
        {formuleOpen && (
          <FormuleOverzicht
            vakId={id}
            initialBegrip={openBegrip ?? undefined}
            onClose={() => { setFormuleOpen(false); setOpenBegrip(null); }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

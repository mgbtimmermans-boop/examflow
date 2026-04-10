"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInstellingen } from "@/hooks/useVakData";
import { useAgenda } from "@/hooks/useAgenda";
import { ALLE_VAKKEN } from "@/data/vakken";
import { Vak, VakData } from "@/types";
import { StudieSessie, AgendaView } from "@/types/agenda";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import WeekView from "@/components/Agenda/WeekView";
import DagView from "@/components/Agenda/DagView";
import SessieModal from "@/components/Agenda/SessieModal";
import HerplanModal from "@/components/Agenda/HerplanModal";
import { VakInfo } from "@/lib/herplannen";
import { telLeerdoelen } from "@/lib/helpers";

export default function AgendaPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { instellingen, loading: instLoading } = useInstellingen();
  const { sessies, loading: agendaLoading, voegToe, update, verwijder, markeerVoltooid } = useAgenda(user?.uid ?? "");

  const [allData, setAllData] = useState<Record<string, VakData>>({});
  const [view, setView] = useState<AgendaView>("week");
  const [showSessieModal, setShowSessieModal] = useState(false);
  const [editSessie, setEditSessie] = useState<StudieSessie | null>(null);
  const [defaultVakId, setDefaultVakId] = useState<string | undefined>(undefined);
  const [defaultSyllabusItem, setDefaultSyllabusItem] = useState<string | undefined>(undefined);
  const [defaultDatum, setDefaultDatum] = useState<string | undefined>(undefined);
  const [defaultStartTijd, setDefaultStartTijd] = useState<string | undefined>(undefined);
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [showHerplan, setShowHerplan] = useState(false);
  const [herplanDatum, setHerplanDatum] = useState("");

  useEffect(() => { if (!loading && !user) router.replace("/"); }, [user, loading, router]);

  useEffect(() => {
    if (!user?.uid || !db) return;
    getDocs(collection(db, "users", user.uid, "vakken")).then(snap => {
      const result: Record<string, VakData> = {};
      snap.forEach(d => { result[d.id] = d.data() as VakData; });
      setAllData(result);
    });
  }, [user?.uid]);

  if (loading || instLoading) return null;
  if (!user) return null;

  const gekozenIds = instellingen?.gekozenVakken ?? [];
  const gekozenVakken: Vak[] = ALLE_VAKKEN.filter(v => gekozenIds.includes(v.id));

  const confidenceScores: Record<string, number> = Object.fromEntries(
    Object.entries(allData).map(([vakId, d]) => [vakId, d.confidenceScore ?? 5])
  );
  const checks: Record<string, Record<string, boolean>> = Object.fromEntries(
    Object.entries(allData).map(([vakId, d]) => [
      vakId,
      Object.fromEntries(Object.entries(d.checks ?? {}).map(([k, v]) => [k, v])),
    ])
  );
  const seCijfers = instellingen?.seCijfers ?? {};

  // VakInfo voor herplanning
  const vakInfoLijst: VakInfo[] = gekozenVakken.map(vak => {
    const vakChecks = checks[vak.id] ?? {};
    const totaal = telLeerdoelen(vak);
    const afgevinkt = Object.values(vakChecks).filter(Boolean).length;
    return {
      vakId: vak.id,
      examDatum: vak.examDatum,
      totaalLeerdoelen: totaal,
      afgevinkt,
      confidenceScore: confidenceScores[vak.id] ?? 5,
    };
  });

  const openHerplan = (datum?: string) => {
    const d = datum || new Date().toISOString().split("T")[0];
    setHerplanDatum(d);
    setShowHerplan(true);
  };

  const handleHerplanBevestig = async (nieuweSessies: StudieSessie[]) => {
    for (const s of nieuweSessies) {
      await update(s.id, { startTijd: s.startTijd, duurMinuten: s.duurMinuten });
    }
  };

  const openNieuweSessie = (vakId?: string, datum?: string, syllabusItem?: string, startTijd?: string) => {
    setEditSessie(null);
    setDefaultVakId(vakId);
    setDefaultDatum(datum);
    setDefaultSyllabusItem(syllabusItem);
    setDefaultStartTijd(startTijd);
    setShowSessieModal(true);
  };

  const openEditSessie = (sessie: StudieSessie) => {
    setEditSessie(sessie);
    setDefaultVakId(undefined);
    setDefaultDatum(undefined);
    setDefaultSyllabusItem(undefined);
    setDefaultStartTijd(undefined);
    setShowSessieModal(true);
  };

  const handleSave = async (sessieData: Omit<StudieSessie, "id" | "aangemaaktOp">) => {
    if (editSessie) {
      await update(editSessie.id, sessieData);
    } else {
      await voegToe(sessieData);
    }
    setShowSessieModal(false);
    setEditSessie(null);
  };

  const handleClose = () => {
    setShowSessieModal(false);
    setEditSessie(null);
  };

  // Restore a deleted session with its original ID (for undo)
  const herstelSessie = async (sessie: StudieSessie) => {
    await update(sessie.id, sessie);
  };

  const tabStyle = (active: boolean): React.CSSProperties =>
    active
      ? { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE", borderRadius: 8 }
      : { background: "transparent", color: "#64748B", border: "1px solid #E8ECF0", borderRadius: 8 };

  return (
    <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-start justify-between gap-4 mb-6"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h1 className="text-2xl font-semibold" style={{ color: "#0F172A", margin: 0 }}>Leeragenda</h1>
              {/* Info tooltip */}
              <div style={{ position: "relative" }}>
                <button
                  onMouseEnter={() => setInfoTooltip(true)}
                  onMouseLeave={() => setInfoTooltip(false)}
                  onClick={() => setInfoTooltip(v => !v)}
                  style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "#F1F5F9", border: "none", cursor: "pointer",
                    fontSize: 12, color: "#64748B", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  ℹ
                </button>
                {infoTooltip && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", left: 0,
                    width: 280, background: "#0F172A", color: "#FFFFFF",
                    fontSize: 12, lineHeight: 1.55, borderRadius: 8,
                    padding: "10px 12px", zIndex: 20,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}>
                    De automatische herplanning past je sessies aan als je uitloopt. Vakken met een naderende examendatum krijgen voorrang. Pauzes van 15 min blijven altijd ingepland.
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm mt-1" style={{ color: "#64748B" }}>Plan je studie per onderwerp</p>
          </div>
          <button
            onClick={() => openNieuweSessie()}
            className="btn-primary text-sm flex items-center gap-1.5 flex-shrink-0"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round"/>
              <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round"/>
            </svg>
            Nieuwe sessie
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {([
            { key: "week" as AgendaView, label: "Week" },
            { key: "dag" as AgendaView, label: "Dag" },
          ]).map(tab => (
            <button
              key={tab.key}
              onClick={() => setView(tab.key)}
              className="px-4 py-2 text-sm font-medium transition-colors"
              style={tabStyle(view === tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ borderBottom: "1px solid #E8ECF0", marginBottom: 24 }} />

        {/* Views */}
        {view === "week" && (
          <WeekView
            sessies={sessies}
            vakken={gekozenVakken}
            loading={agendaLoading}
            onNieuweSessie={(datum, vakId) => openNieuweSessie(vakId, datum)}
            onVoltooid={markeerVoltooid}
            onEdit={openEditSessie}
            onVerwijder={verwijder}
            onVoegToe={herstelSessie}
            onSessieMove={async (id, newDatum) => { await update(id, { datum: newDatum }); }}
          />
        )}
        {view === "dag" && (
          <DagView
            sessies={sessies}
            vakken={gekozenVakken}
            loading={agendaLoading}
            confidenceScores={confidenceScores}
            checks={checks}
            seCijfers={seCijfers}
            onNieuweSessie={(datum, vakId, startTijd) => openNieuweSessie(vakId, datum, undefined, startTijd)}
            onVoltooid={markeerVoltooid}
            onEdit={openEditSessie}
            onVerwijder={verwijder}
            onUpdate={update}
            onVoegToe={herstelSessie}
            onHerplan={openHerplan}
          />
        )}
      </div>

      {/* Sessie Modal */}
      {showSessieModal && instellingen && (
        <SessieModal
          vakken={gekozenVakken}
          instellingen={instellingen}
          defaultVakId={defaultVakId}
          defaultSyllabusItem={defaultSyllabusItem}
          defaultDatum={defaultDatum}
          defaultStartTijd={defaultStartTijd}
          editSessie={editSessie}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
      {/* Herplan Modal */}
      {showHerplan && (
        <HerplanModal
          sessies={sessies.filter(s => s.datum === herplanDatum && !s.voltooid)}
          bestaandeSessies={sessies.filter(s => s.datum === herplanDatum && s.voltooid)}
          vakken={gekozenVakken}
          vakInfo={vakInfoLijst}
          datum={herplanDatum}
          onBevestig={handleHerplanBevestig}
          onClose={() => setShowHerplan(false)}
        />
      )}
    </div>
  );
}

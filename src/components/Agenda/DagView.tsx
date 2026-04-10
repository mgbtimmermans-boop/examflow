"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay,
  PointerSensor, useSensor, useSensors, useDraggable, useDroppable,
} from "@dnd-kit/core";
import { Vak } from "@/types";
import { StudieSessie } from "@/types/agenda";
import { herplanBlok, getHuidigBlok } from "@/hooks/useAgenda";

// ─── types ────────────────────────────────────────────────────────────────────

interface DagViewProps {
  sessies: StudieSessie[];
  vakken: Vak[];
  loading?: boolean;
  confidenceScores?: Record<string, number>;
  checks?: Record<string, Record<string, boolean>>;
  seCijfers?: Record<string, number>;
  onNieuweSessie: (datum: string, vakId?: string, startTijd?: string) => void;
  onVoltooid: (id: string, voltooid: boolean) => void;
  onEdit: (sessie: StudieSessie) => void;
  onVerwijder: (id: string) => void;
  onUpdate: (id: string, data: Partial<StudieSessie>) => Promise<void>;
  onVoegToe: (sessie: StudieSessie) => Promise<void>;
  onHerplan?: (datum: string) => void;
}

// ─── constants ────────────────────────────────────────────────────────────────

const PRULLENBAK_ID = "prullenbak";
const UNDO_DUUR_MS  = 5000;

// ─── helpers ──────────────────────────────────────────────────────────────────

const DAG_LANG   = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const MAAND_KORT = ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];

function datumStr(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dagLabel(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  const dow = DAG_LANG[d.getDay()];
  const dag = d.getDate();
  const maand = MAAND_KORT[d.getMonth()];
  return `${dow} ${dag} ${maand}`;
}

function tijdNaarMin(tijd: string): number {
  const [h, m] = tijd.split(":").map(Number);
  return h * 60 + m;
}

function minNaarTijd(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function eindTijdSessie(s: StudieSessie): string {
  return minNaarTijd(tijdNaarMin(s.startTijd) + s.duurMinuten);
}

// ─── layout constants ─────────────────────────────────────────────────────────

const START_UUR   = 7;
const EIND_UUR    = 24;
const TOTAAL_MIN  = (EIND_UUR - START_UUR) * 60;
const SLOT_H      = 28;
const TOTAL_H     = (TOTAAL_MIN / 30) * SLOT_H;
const PAUZE_MIN   = 15;


// ─── draggable sessie wrapper ─────────────────────────────────────────────────

function DraggableSessieBlok({
  sessie, vak, onSelect,
}: {
  sessie: StudieSessie;
  vak: Vak;
  onSelect: (s: StudieSessie) => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: `sessie-${sessie.id}` });

  const startMin  = tijdNaarMin(sessie.startTijd);
  const top       = ((startMin - START_UUR * 60) / 30) * SLOT_H;
  // Clamp: sessies die na middernacht (EIND_UUR) eindigen worden afgekapt
  const beschikbareMin = Math.max(0, EIND_UUR * 60 - startMin);
  const effectieveDuur = Math.min(sessie.duurMinuten, beschikbareMin);
  const height    = Math.max((effectieveDuur / 30) * SLOT_H, SLOT_H);
  const onderwerp = sessie.syllabusItem ?? sessie.eigenTitel ?? "Eigen onderwerp";
  const eindTijd  = eindTijdSessie(sessie);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={() => { if (!isDragging) onSelect(sessie); }}
      style={{
        position: "absolute",
        top: top + 2,
        left: 8, right: 8,
        height: height - 4,
        borderRadius: 8,
        background: sessie.voltooid ? "#F0FDF4" : "#FFFFFF",
        borderTop:    "1px solid #E8ECF0",
        borderRight:  "1px solid #E8ECF0",
        borderBottom: "1px solid #E8ECF0",
        borderLeft:   `3px solid ${sessie.voltooid ? "#16A34A" : vak.kleur}`,
        padding: "5px 9px",
        cursor: isDragging ? "grabbing" : "pointer",
        zIndex: isDragging ? 10 : 2,
        overflow: "hidden",
        opacity: isDragging ? 0.4 : sessie.voltooid ? 0.7 : 1,
        transition: "box-shadow 0.12s",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* Rij 1: vak naam */}
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: vak.kleur, flexShrink: 0 }} />
        <span style={{
          fontSize: 12, fontWeight: 600, color: "#0F172A",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1,
          textDecoration: sessie.voltooid ? "line-through" : "none",
        }}>
          {vak.naam}
        </span>
        <span style={{ fontSize: 10, color: "#94A3B8", flexShrink: 0 }}>
          {sessie.startTijd}–{eindTijd}
        </span>
      </div>

      {/* Rij 2: onderwerp */}
      {height > SLOT_H && (
        <p style={{
          fontSize: 11, color: "#64748B", margin: "2px 0 0", paddingLeft: 11,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          {onderwerp}
        </p>
      )}
    </div>
  );
}

// ─── droppable prullenbak ─────────────────────────────────────────────────────

function DroppablePrullenbak({ isOver, shake }: { isOver: boolean; shake: boolean }) {
  const { setNodeRef } = useDroppable({ id: PRULLENBAK_ID });
  return (
    <motion.div
      ref={setNodeRef}
      animate={shake ? { x: [0, -5, 5, -5, 5, -3, 3, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 100,
        width: 64, height: 64, borderRadius: "50%",
        background: isOver ? "#FEF2F2" : "#FFFFFF",
        border: `2px ${isOver ? "solid #DC2626" : "dashed #CBD5E1"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.15s, border 0.15s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transform: isOver ? "scale(1.1)" : "scale(1)",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
          stroke={isOver ? "#DC2626" : "#94A3B8"}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11v6M14 11v6"
          stroke={isOver ? "#DC2626" : "#94A3B8"}
          strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
}

// ─── undo toast ───────────────────────────────────────────────────────────────

function UndoToast({ sessie, onHerstel, onDismiss }: {
  sessie: StudieSessie;
  onHerstel: () => void;
  onDismiss: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "fixed", bottom: 24, left: "50%",
        transform: "translateX(-50%)",
        background: "#0F172A", color: "#FFFFFF",
        borderRadius: 10, padding: "10px 16px",
        fontSize: 13, display: "flex", alignItems: "center", gap: 10,
        zIndex: 200, boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        whiteSpace: "nowrap",
      }}
    >
      Sessie verwijderd
      <button
        onClick={onHerstel}
        style={{
          background: "none", border: "none",
          color: "#60A5FA", fontSize: 13,
          cursor: "pointer", fontWeight: 600, padding: 0,
        }}
      >
        Ongedaan maken
      </button>
      <button
        onClick={onDismiss}
        style={{
          background: "none", border: "none",
          color: "rgba(255,255,255,0.4)", fontSize: 16,
          cursor: "pointer", padding: 0, lineHeight: 1,
        }}
      >
        ×
      </button>
    </motion.div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function DagView({
  sessies, vakken, loading = false,
  confidenceScores = {}, checks = {}, seCijfers = {},
  onNieuweSessie, onVoltooid, onEdit, onVerwijder, onUpdate, onVoegToe, onHerplan,
}: DagViewProps) {
  const [dagOffset,         setDagOffset]         = useState(0);
  const [showHerplanPopup,  setShowHerplanPopup]   = useState(false);
  const [nieuwePlannen,     setNieuwePlannen]      = useState<StudieSessie[]>([]);
  const [herplanBezig,      setHerplanBezig]       = useState(false);
  const [herplanKlaar,      setHerplanKlaar]       = useState(false);
  const [voorbijSessie,     setVoorbijSessie]      = useState<StudieSessie | null>(null);
  const [hoveredSlot,       setHoveredSlot]        = useState<number | null>(null);
  const [selectedSessie,    setSelectedSessie]     = useState<StudieSessie | null>(null);
  const [isDraggingSessie,  setIsDraggingSessie]   = useState(false);
  const [activeSleepSessie, setActiveSleepSessie]  = useState<StudieSessie | null>(null);
  const [isOverTrash,       setIsOverTrash]        = useState(false);
  const [trashShake,        setTrashShake]         = useState(false);
  const [verwijderdSessie,  setVerwijderdSessie]   = useState<StudieSessie | null>(null);
  const [isMobile,          setIsMobile]           = useState(false);
  const undoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => () => { if (undoTimer.current) clearTimeout(undoTimer.current); }, []);

  const vandaag = datumStr(0);

  useEffect(() => {
    function check() {
      const nu = new Date();
      const nuMinuten = nu.getHours() * 60 + nu.getMinutes();
      const voorbij = sessies.find(s => {
        const eindMinuten = tijdNaarMin(s.startTijd) + s.duurMinuten;
        return (
          s.datum === vandaag &&
          !s.voltooid &&
          nuMinuten > eindMinuten &&
          nuMinuten < eindMinuten + 60
        );
      });
      setVoorbijSessie(voorbij ?? null);
    }
    check();
    const interval = setInterval(check, 60 * 1000);
    return () => clearInterval(interval);
  }, [sessies, vandaag]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const datum      = datumStr(dagOffset);
  const dagSessies = sessies
    .filter(s => s.datum === datum)
    .sort((a, b) => a.startTijd.localeCompare(b.startTijd));

  const slots: number[] = [];
  for (let m = START_UUR * 60; m < EIND_UUR * 60; m += 30) slots.push(m);

  function slotIsVrij(slotMin: number): boolean {
    return !dagSessies.some(s => {
      const start = tijdNaarMin(s.startTijd);
      const eind  = start + s.duurMinuten;
      return slotMin >= start && slotMin < eind;
    });
  }

  function topForMin(min: number): number {
    return ((min - START_UUR * 60) / 30) * SLOT_H;
  }

  function heightForDuur(duur: number): number {
    return Math.max((duur / 30) * SLOT_H, SLOT_H);
  }

  // ── drag handlers ────────────────────────────────────────────────────────

  function handleDragStart({ active }: DragStartEvent) {
    const id = active.id as string;
    if (id.startsWith("sessie-")) {
      setIsDraggingSessie(true);
      setSelectedSessie(null);
      const gevonden = sessies.find(s => s.id === id.slice(7));
      setActiveSleepSessie(gevonden ?? null);
    }
  }

  function handleDragOver({ over }: DragOverEvent) {
    const overId = over ? (over.id as string) : null;
    setIsOverTrash(overId === PRULLENBAK_ID);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    const activeId = active.id as string;
    const overId   = over ? (over.id as string) : null;

    setIsDraggingSessie(false);
    setIsOverTrash(false);
    setActiveSleepSessie(null);

    if (!overId || !activeId.startsWith("sessie-")) return;

    if (overId === PRULLENBAK_ID) {
      setTrashShake(true);
      setTimeout(() => setTrashShake(false), 450);

      const sessieId = activeId.slice(7);
      const gevonden = sessies.find(s => s.id === sessieId);
      if (gevonden) {
        setVerwijderdSessie(gevonden);
        onVerwijder(sessieId);

        if (undoTimer.current) clearTimeout(undoTimer.current);
        undoTimer.current = setTimeout(() => setVerwijderdSessie(null), UNDO_DUUR_MS);
      }
    }
  }

  function handleDragCancel() {
    setIsDraggingSessie(false);
    setIsOverTrash(false);
    setActiveSleepSessie(null);
  }

  // ── undo ─────────────────────────────────────────────────────────────────

  async function herstelSessie(sessie: StudieSessie) {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setVerwijderdSessie(null);
    await onVoegToe(sessie);
  }

  function dismissToast() {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setVerwijderdSessie(null);
  }

  // ── herplan ───────────────────────────────────────────────────────────────

  function openHerplanPopup() {
    const plan = herplanBlok(dagSessies, null, 0, vakken, confidenceScores, checks, seCijfers);
    setNieuwePlannen(plan);
    setHerplanKlaar(false);
    setShowHerplanPopup(true);
  }

  async function bevestigHerplan() {
    setHerplanBezig(true);
    await Promise.all(nieuwePlannen.map(s =>
      onUpdate(s.id, { startTijd: s.startTijd, duurMinuten: s.duurMinuten })
    ));
    setHerplanBezig(false);
    setHerplanKlaar(true);
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div>
        {/* ── overdue sessie banner ── */}
        {voorbijSessie && dagOffset === 0 && (
          <div style={{
            margin: "0 0 16px",
            padding: "12px 16px",
            background: "#FFFBEB",
            borderTop: "1px solid #FDE68A",
            borderRight: "1px solid #FDE68A",
            borderBottom: "1px solid #FDE68A",
            borderLeft: "3px solid #F59E0B",
            borderRadius: 10,
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>⏰</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>
                  Deze sessie is voorbij
                </div>
                <div style={{ fontSize: 12, color: "#64748B" }}>
                  {vakken.find(v => v.id === voorbijSessie.vakId)?.naam} ·{" "}
                  {voorbijSessie.startTijd} – {minNaarTijd(tijdNaarMin(voorbijSessie.startTijd) + voorbijSessie.duurMinuten)}
                </div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#374151" }}>Hoe is het gegaan?</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => {
                  onVoltooid(voorbijSessie.id, true);
                  setVoorbijSessie(null);
                }}
                style={{
                  flex: 1, padding: "8px 0", borderRadius: 8,
                  border: "1px solid #BBF7D0",
                  background: "#F0FDF4", color: "#16A34A",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                }}
              >
                ✓ Klaar
              </button>
              {[15, 30, 45].map(min => (
                <button
                  key={min}
                  onClick={() => {
                    const vandaagSessies = sessies.filter(s => s.datum === vandaag);
                    const blok = getHuidigBlok(vandaagSessies, voorbijSessie.id);
                    const nieuw = herplanBlok(blok, voorbijSessie.id, min, vakken, confidenceScores, checks, seCijfers);
                    setNieuwePlannen(nieuw);
                    setHerplanKlaar(false);
                    setShowHerplanPopup(true);
                    setVoorbijSessie(null);
                  }}
                  style={{
                    flex: 1, padding: "8px 0", borderRadius: 8,
                    border: "1px solid #BFDBFE",
                    background: "#EFF6FF", color: "#2563EB",
                    fontSize: 13, fontWeight: 600, cursor: "pointer",
                  }}
                >
                  +{min} min
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── navigatie + herplan knop ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
            <button
              onClick={() => setDagOffset(o => o - 1)}
              className="btn-secondary"
              style={{ padding: "7px 12px", minHeight: 36, flexShrink: 0 }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", whiteSpace: "nowrap", margin: 0 }}>
              {dagLabel(dagOffset)}
              {dagOffset === 0 && (
                <span style={{ fontSize: 13, fontWeight: 400, color: "#94A3B8", fontStyle: "italic", marginLeft: 6 }}>
                  (vandaag)
                </span>
              )}
            </p>

            <button
              onClick={() => setDagOffset(o => o + 1)}
              className="btn-secondary"
              style={{ padding: "7px 12px", minHeight: 36, flexShrink: 0 }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dagOffset !== 0 && (
              <button
                onClick={() => setDagOffset(0)}
                style={{
                  fontSize: 12, color: "#2563EB",
                  background: "none", border: "none",
                  cursor: "pointer", textDecoration: "underline",
                  flexShrink: 0, padding: 0,
                }}
              >
                Terug naar vandaag
              </button>
            )}
          </div>

          <button
            onClick={() => onHerplan?.(datum)}
            style={{
              fontSize: 13, padding: "8px 14px",
              borderRadius: 8, border: "1px solid #E8ECF0",
              background: "#FFFFFF", color: "#374151",
              cursor: "pointer", display: "flex",
              alignItems: "center", gap: 6, flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 15 }}>↻</span> Herplan dag
          </button>
        </div>

        {/* ── samenvatting ── */}
        {!loading && dagSessies.length > 0 && (
          <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "#64748B" }}>
              {dagSessies.length} sessie{dagSessies.length !== 1 ? "s" : ""}
            </span>
            <span style={{ fontSize: 12, color: "#64748B" }}>
              {dagSessies.reduce((s, x) => s + x.duurMinuten, 0)} min totaal
            </span>
            <span style={{ fontSize: 12, color: "#16A34A" }}>
              {dagSessies.filter(s => s.voltooid).length} voltooid
            </span>
          </div>
        )}

        {/* ── tijdlijn ── */}
        <div style={{ display: "flex", gap: 0 }}>
          {/* Tijdlabels */}
          <div style={{ width: 48, flexShrink: 0, position: "relative", height: TOTAL_H }}>
            {slots.filter((_, i) => i % 2 === 0).map(slotMin => (
              <div
                key={slotMin}
                style={{
                  position: "absolute",
                  top: topForMin(slotMin),
                  right: 8,
                  fontSize: 11,
                  color: "#94A3B8",
                  lineHeight: "1",
                  transform: "translateY(-6px)",
                  userSelect: "none",
                }}
              >
                {minNaarTijd(slotMin)}
              </div>
            ))}
          </div>

          {/* Rooster + sessies */}
          <div style={{ flex: 1, position: "relative", height: TOTAL_H, borderLeft: "1px solid #E8ECF0" }}>
            {/* Grid lijnen + klikbare slots */}
            {slots.map(slotMin => {
              const isHover = hoveredSlot === slotMin;
              const vrij    = slotIsVrij(slotMin);
              const isUur   = slotMin % 60 === 0;

              return (
                <div
                  key={slotMin}
                  onMouseEnter={() => vrij && !isDraggingSessie && setHoveredSlot(slotMin)}
                  onMouseLeave={() => setHoveredSlot(null)}
                  onClick={() => {
                    if (!loading && vrij && !isDraggingSessie) onNieuweSessie(datum, undefined, minNaarTijd(slotMin));
                  }}
                  style={{
                    position: "absolute",
                    top: topForMin(slotMin),
                    left: 0, right: 0,
                    height: SLOT_H,
                    borderTop: isUur ? "1px solid #E8ECF0" : "1px dashed #F1F5F9",
                    background: isHover && vrij ? "#F8FBFF" : "transparent",
                    cursor: vrij && !loading && !isDraggingSessie ? "pointer" : "default",
                    transition: "background 0.1s",
                    zIndex: 0,
                  }}
                >
                  {isHover && vrij && !isDraggingSessie && (
                    <span style={{
                      position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
                      fontSize: 11, color: "#2563EB", pointerEvents: "none", userSelect: "none",
                    }}>
                      + {minNaarTijd(slotMin)}
                    </span>
                  )}
                </div>
              );
            })}

            {/* Loading shimmer */}
            {loading && (
              <>
                {[120, 240, 390].map(offsetMin => (
                  <div
                    key={offsetMin}
                    style={{
                      position: "absolute",
                      top: topForMin(START_UUR * 60 + offsetMin),
                      left: 8, right: 8,
                      height: heightForDuur(60),
                      borderRadius: 8,
                      background: "linear-gradient(90deg, #F1F5F9 25%, #E8ECF0 50%, #F1F5F9 75%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.4s infinite",
                      zIndex: 1,
                    }}
                  />
                ))}
              </>
            )}

            {/* Sessie blokken */}
            {!loading && dagSessies.map(s => {
              const vak = vakken.find(v => v.id === s.vakId);
              if (!vak) return null;
              return (
                <DraggableSessieBlok
                  key={s.id}
                  sessie={s}
                  vak={vak}
                  onSelect={setSelectedSessie}
                />
              );
            })}

            {/* Huidige-tijd lijn (alleen vandaag) */}
            {dagOffset === 0 && (() => {
              const now = new Date();
              const nowMin = now.getHours() * 60 + now.getMinutes();
              if (nowMin < START_UUR * 60 || nowMin > EIND_UUR * 60) return null;
              return (
                <div style={{
                  position: "absolute",
                  top: topForMin(nowMin),
                  left: 0, right: 0,
                  height: 2,
                  background: "#2563EB",
                  zIndex: 3,
                  pointerEvents: "none",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#2563EB",
                    position: "absolute", left: -4, top: -3,
                  }} />
                </div>
              );
            })()}
          </div>
        </div>

        {/* Lege dag */}
        {!loading && dagSessies.length === 0 && (
          <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", marginTop: 24 }}>
            Geen sessies gepland — klik op een tijdslot om toe te voegen.
          </p>
        )}

        <style>{`
          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>

        {/* Herplan bevestigingspopup */}
        {showHerplanPopup && (
          <div
            onClick={() => { if (!herplanBezig) setShowHerplanPopup(false); }}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.4)",
              display: "flex", alignItems: "center",
              justifyContent: "center", padding: 20,
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                background: "#FFFFFF", borderRadius: 16,
                padding: 24, width: "100%", maxWidth: 420,
                border: "1px solid #E8ECF0",
                boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
              }}
            >
              {herplanKlaar ? (
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <p style={{ fontSize: 24, margin: "0 0 8px" }}>✓</p>
                  <p style={{ fontSize: 14, color: "#16A34A", fontWeight: 600, margin: "0 0 16px" }}>
                    Planning bijgewerkt
                  </p>
                  <button
                    onClick={() => setShowHerplanPopup(false)}
                    style={{
                      padding: "11px 32px", borderRadius: 10, border: "none",
                      background: "#2563EB", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>
                    Planning herberekend
                  </h3>
                  <p style={{ fontSize: 13, color: "#64748B", margin: "0 0 16px" }}>
                    Sessies zijn ingekort op basis van urgentie. Pauzes van 15 min blijven ingepland.
                  </p>

                  {nieuwePlannen.length === 0 ? (
                    <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>
                      Geen sessies te herplannen.
                    </p>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {nieuwePlannen.map(s => {
                        const oud = dagSessies.find(b => b.id === s.id);
                        const vak = vakken.find(v => v.id === s.vakId);
                        return (
                          <div key={s.id} style={{
                            display: "flex", alignItems: "center",
                            gap: 10, padding: "8px 12px",
                            background: "#F8F9FC", borderRadius: 8,
                          }}>
                            <div style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: vak?.kleur ?? "#94A3B8", flexShrink: 0,
                            }} />
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 500, color: "#0F172A" }}>
                                {vak?.naam}
                              </div>
                              <div style={{ fontSize: 12, color: "#64748B" }}>
                                {s.startTijd} · {s.duurMinuten} min
                                {oud && oud.duurMinuten !== s.duurMinuten && (
                                  <span style={{ color: "#DC2626", marginLeft: 6 }}>
                                    (was {oud.duurMinuten} min)
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      onClick={() => setShowHerplanPopup(false)}
                      style={{
                        flex: 1, padding: "11px 0", borderRadius: 10,
                        border: "1px solid #E8ECF0", background: "#FFFFFF",
                        color: "#64748B", fontSize: 14, cursor: "pointer",
                      }}
                    >
                      Annuleren
                    </button>
                    <button
                      onClick={bevestigHerplan}
                      disabled={herplanBezig || nieuwePlannen.length === 0}
                      style={{
                        flex: 2, padding: "11px 0", borderRadius: 10,
                        border: "none", background: "#2563EB",
                        color: "#FFFFFF", fontSize: 14,
                        fontWeight: 600, cursor: nieuwePlannen.length === 0 ? "default" : "pointer",
                        opacity: nieuwePlannen.length === 0 ? 0.5 : 1,
                      }}
                    >
                      {herplanBezig ? "Bezig…" : "Bevestig herplanning →"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Prullenbak (zichtbaar tijdens slepen) */}
      {isDraggingSessie && (
        <DroppablePrullenbak isOver={isOverTrash} shake={trashShake} />
      )}

      {/* Drag overlay */}
      <DragOverlay dropAnimation={null}>
        {activeSleepSessie ? (() => {
          const vak = vakken.find(v => v.id === activeSleepSessie.vakId);
          return (
            <div style={{
              background: "#FFFFFF",
              borderTop:    "1px solid #E8ECF0",
              borderRight:  "1px solid #E8ECF0",
              borderBottom: "1px solid #E8ECF0",
              borderLeft:   `3px solid ${vak?.kleur ?? "#2563EB"}`,
              borderRadius: 8,
              padding: "6px 10px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              opacity: 0.95,
              width: 200,
              cursor: "grabbing",
              pointerEvents: "none",
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: vak?.kleur ?? "#2563EB" }}>
                {vak?.naam ?? ""}
              </div>
              <div style={{ fontSize: 12, color: "#374151", marginTop: 2 }}>
                {activeSleepSessie.syllabusItem ?? activeSleepSessie.eigenTitel ?? "Eigen onderwerp"}
              </div>
              <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>
                {activeSleepSessie.startTijd} · {activeSleepSessie.duurMinuten} min
              </div>
            </div>
          );
        })() : null}
      </DragOverlay>

      {/* Undo toast */}
      <AnimatePresence>
        {verwijderdSessie && (
          <UndoToast
            sessie={verwijderdSessie}
            onHerstel={() => herstelSessie(verwijderdSessie)}
            onDismiss={dismissToast}
          />
        )}
      </AnimatePresence>

      {/* Detail paneel — overlay backdrop */}
      {selectedSessie && (
        <div
          onClick={() => setSelectedSessie(null)}
          style={{ position: "fixed", inset: 0, zIndex: 49, background: "transparent" }}
        />
      )}

      {/* Detail paneel */}
      <AnimatePresence>
        {selectedSessie && (() => {
          const vak = vakken.find(v => v.id === selectedSessie.vakId);
          const onderwerp = selectedSessie.syllabusItem ?? selectedSessie.eigenTitel ?? "Eigen onderwerp";
          const eindTijd  = eindTijdSessie(selectedSessie);

          const panelStyle: React.CSSProperties = isMobile ? {
            position: "fixed",
            bottom: 0, left: 0, right: 0,
            maxHeight: "70vh",
            borderRadius: "20px 20px 0 0",
            background: "#FFFFFF",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.10)",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            padding: 24,
            overflowY: "auto",
          } : {
            position: "fixed",
            top: 0, right: 0, bottom: 0,
            width: 320,
            background: "#FFFFFF",
            borderLeft: "1px solid #E8ECF0",
            boxShadow: "-4px 0 24px rgba(0,0,0,0.08)",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            padding: 24,
            overflowY: "auto",
          };

          return (
            <motion.div
              key="detail-paneel"
              initial={isMobile ? { y: "100%" } : { x: 320 }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: "100%" } : { x: 320 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              style={panelStyle}
            >
              {/* Mobile handle */}
              {isMobile && (
                <div style={{ width: 36, height: 4, borderRadius: 2, background: "#E2E8F0", margin: "0 auto 16px" }} />
              )}

              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: vak?.kleur ?? "#2563EB", flexShrink: 0 }} />
                    <span style={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}>{vak?.naam ?? ""}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#64748B", margin: "4px 0 0 18px" }}>{onderwerp}</p>
                </div>
                <button
                  onClick={() => setSelectedSessie(null)}
                  style={{ background: "none", border: "none", color: "#94A3B8", fontSize: 22, cursor: "pointer", lineHeight: 1, padding: 4 }}
                >
                  ×
                </button>
              </div>

              {/* Info rijen */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "#64748B" }}>Tijd</span>
                  <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500 }}>
                    {selectedSessie.startTijd} – {eindTijd}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "#64748B" }}>Duur</span>
                  <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500 }}>
                    {selectedSessie.duurMinuten} minuten
                  </span>
                </div>
                {selectedSessie.voltooid && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, color: "#64748B" }}>Status</span>
                    <span style={{ fontSize: 13, color: "#16A34A", fontWeight: 500 }}>✓ Voltooid</span>
                  </div>
                )}
                {selectedSessie.doel && (
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <span style={{ fontSize: 13, color: "#64748B", flexShrink: 0 }}>Doel</span>
                    <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500, textAlign: "right" }}>
                      {selectedSessie.doel}
                    </span>
                  </div>
                )}
                {selectedSessie.notitie && (
                  <div>
                    <span style={{ fontSize: 13, color: "#64748B", display: "block", marginBottom: 6 }}>Notitie</span>
                    <p style={{ fontSize: 13, color: "#374151", background: "#F8F9FC", borderRadius: 8, padding: "10px 12px", margin: 0, lineHeight: 1.5 }}>
                      {selectedSessie.notitie}
                    </p>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "#F1F5F9", marginBottom: 20 }} />

              {/* Acties */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button
                  onClick={() => { onEdit(selectedSessie); setSelectedSessie(null); }}
                  style={{
                    padding: "10px 0", borderRadius: 8,
                    border: "1px solid #E8ECF0", background: "#FFFFFF",
                    color: "#374151", fontSize: 14, cursor: "pointer", fontWeight: 500,
                  }}
                >
                  ✎ Bewerken
                </button>
                <button
                  onClick={() => {
                    onVoltooid(selectedSessie.id, !selectedSessie.voltooid);
                    setSelectedSessie(prev => prev ? { ...prev, voltooid: !prev.voltooid } : null);
                  }}
                  style={{
                    padding: "10px 0", borderRadius: 8,
                    border: "1px solid #BBF7D0",
                    background: selectedSessie.voltooid ? "#FFFFFF" : "#F0FDF4",
                    color: "#16A34A", fontSize: 14, cursor: "pointer", fontWeight: 500,
                  }}
                >
                  {selectedSessie.voltooid ? "↩ Markeer als niet voltooid" : "✓ Markeer als voltooid"}
                </button>
                <button
                  onClick={() => { onVerwijder(selectedSessie.id); setSelectedSessie(null); }}
                  style={{
                    padding: "10px 0", borderRadius: 8,
                    border: "1px solid #FECACA", background: "#FFFFFF",
                    color: "#DC2626", fontSize: 14, cursor: "pointer", fontWeight: 500,
                  }}
                >
                  × Verwijderen
                </button>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </DndContext>
  );
}

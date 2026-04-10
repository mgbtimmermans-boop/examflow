"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay,
  PointerSensor, useSensor, useSensors, useDraggable, useDroppable,
} from "@dnd-kit/core";
import { Vak } from "@/types";
import { StudieSessie } from "@/types/agenda";
import SessieBlok from "./SessieBlok";

// ─── types ────────────────────────────────────────────────────────────────────

interface WeekViewProps {
  sessies: StudieSessie[];
  vakken: Vak[];
  loading?: boolean;
  onNieuweSessie: (datum: string, vakId?: string) => void;
  onVoltooid: (id: string, voltooid: boolean) => void;
  onEdit: (sessie: StudieSessie) => void;
  onVerwijder: (id: string) => void;
  onVoegToe: (sessie: StudieSessie) => Promise<void>;
  onSessieMove?: (id: string, newDatum: string) => void;
}

const PRULLENBAK_ID = "prullenbak";
const UNDO_DUUR_MS  = 5000;

// ─── helpers ──────────────────────────────────────────────────────────────────

const DAG_KORT   = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
const DAG_LANG   = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const MAAND_KORT = ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];

function maandag(weekOffset: number): Date {
  const now = new Date();
  const dow = now.getDay();
  const d = new Date(now);
  d.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow) + weekOffset * 7);
  d.setHours(0, 0, 0, 0);
  return d;
}

function weekDagen(weekOffset: number): Date[] {
  const ma = maandag(weekOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(ma);
    d.setDate(ma.getDate() + i);
    return d;
  });
}

function datumStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function isVandaag(d: Date): boolean {
  const t = new Date();
  return d.getDate()===t.getDate() && d.getMonth()===t.getMonth() && d.getFullYear()===t.getFullYear();
}

function weekLabel(dagen: Date[]): string {
  const a = dagen[0], z = dagen[dagen.length-1];
  if (a.getMonth() === z.getMonth())
    return `${a.getDate()} – ${z.getDate()} ${MAAND_KORT[a.getMonth()]} ${a.getFullYear()}`;
  return `${a.getDate()} ${MAAND_KORT[a.getMonth()]} – ${z.getDate()} ${MAAND_KORT[z.getMonth()]} ${a.getFullYear()}`;
}

// ─── shimmer ──────────────────────────────────────────────────────────────────

function ShimmerBlok() {
  return (
    <div style={{
      borderRadius: 8,
      background: "linear-gradient(90deg, #F1F5F9 25%, #E8ECF0 50%, #F1F5F9 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.4s infinite",
      height: 52, width: "100%",
    }} />
  );
}

// ─── draggable vak-pill ───────────────────────────────────────────────────────

function VakPill({ vak, compact = false }: { vak: Vak; compact?: boolean }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: `vak-${vak.id}` });
  return (
    <div
      ref={setNodeRef} {...listeners} {...attributes}
      style={{
        opacity: isDragging ? 0.35 : 1,
        cursor: "grab", touchAction: "none",
        display: "flex", alignItems: "center", gap: 8,
        background: "#FFFFFF", border: "1px solid #E8ECF0",
        borderRadius: 8, padding: compact ? "6px 10px" : "8px 12px",
        fontSize: 12, fontWeight: 500, color: "#374151",
        userSelect: "none", whiteSpace: "nowrap", flexShrink: 0,
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: vak.kleur, flexShrink: 0 }} />
      {vak.naam.length > 13 ? vak.naam.slice(0, 13) + "…" : vak.naam}
    </div>
  );
}

// ─── draggable sessie-wrapper ─────────────────────────────────────────────────

function DraggableSessie({
  sessie, vak, onVoltooid, onEdit, onVerwijder,
}: {
  sessie: StudieSessie; vak: Vak;
  onVoltooid: (id: string, b: boolean) => void;
  onEdit: (s: StudieSessie) => void;
  onVerwijder: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: `sessie-${sessie.id}` });
  return (
    <div
      ref={setNodeRef} {...listeners} {...attributes}
      style={{ opacity: isDragging ? 0.4 : 1, cursor: "grab", touchAction: "none" }}
    >
      <SessieBlok
        sessie={sessie} vak={vak}
        onVoltooid={onVoltooid} onEdit={onEdit} onVerwijder={onVerwijder}
      />
    </div>
  );
}

// ─── droppable dag-kolom ──────────────────────────────────────────────────────

function DroppableDag({ datum, isOver, children }: { datum: string; isOver: boolean; children: React.ReactNode }) {
  const { setNodeRef } = useDroppable({ id: datum });
  return (
    <div
      ref={setNodeRef}
      style={{
        flex: 1, display: "flex", flexDirection: "column",
        borderRadius: 6,
        background: isOver ? "#EFF6FF" : "transparent",
        outline: isOver ? "2px dashed #2563EB" : "2px dashed transparent",
        transition: "background 0.12s, outline 0.12s",
        minHeight: 60,
      }}
    >
      {children}
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

export default function WeekView({
  sessies, vakken, loading = false,
  onNieuweSessie, onVoltooid, onEdit, onVerwijder, onVoegToe, onSessieMove,
}: WeekViewProps) {
  const [weekOffset,       setWeekOffset]       = useState(0);
  const [mobileDagOffset,  setMobileDagOffset]  = useState(0);
  const [overDatum,        setOverDatum]        = useState<string | null>(null);
  const [activeDragId,     setActiveDragId]     = useState<string | null>(null);
  const [isDraggingSessie, setIsDraggingSessie] = useState(false);
  const [isOverTrash,      setIsOverTrash]      = useState(false);
  const [trashShake,       setTrashShake]       = useState(false);
  const [verwijderdSessie, setVerwijderdSessie] = useState<StudieSessie | null>(null);
  const [windowWidth,      setWindowWidth]      = useState(1200);
  const touchStartX  = useRef<number | null>(null);
  const undoTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handle = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // Clear undo timer on unmount
  useEffect(() => () => { if (undoTimer.current) clearTimeout(undoTimer.current); }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const alle7       = weekDagen(weekOffset);
  const desktopDagen = isTablet ? alle7.slice(0, 5) : alle7;
  const mobileDagen  = [-1, 0, 1].map(i => {
    const d = new Date();
    d.setDate(d.getDate() + mobileDagOffset + i);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  const activeSessie = activeDragId?.startsWith("sessie-")
    ? sessies.find(s => s.id === activeDragId.slice(7)) ?? null
    : null;
  const activeVakDrag = activeDragId?.startsWith("vak-")
    ? vakken.find(v => v.id === activeDragId.slice(4)) ?? null
    : null;

  // ── drag handlers ──────────────────────────────────────────────────────────

  function handleDragStart({ active }: DragStartEvent) {
    const id = active.id as string;
    setActiveDragId(id);
    if (id.startsWith("sessie-")) setIsDraggingSessie(true);
  }

  function handleDragOver({ over }: DragOverEvent) {
    const overId = over ? (over.id as string) : null;
    setIsOverTrash(overId === PRULLENBAK_ID);
    setOverDatum(overId !== PRULLENBAK_ID ? overId : null);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    const activeId = active.id as string;
    const overId   = over ? (over.id as string) : null;

    setActiveDragId(null);
    setIsDraggingSessie(false);
    setIsOverTrash(false);
    setOverDatum(null);

    if (!overId) return;

    if (activeId.startsWith("vak-")) {
      if (overId !== PRULLENBAK_ID) {
        onNieuweSessie(overId, activeId.slice(4));
      }
      return;
    }

    if (activeId.startsWith("sessie-")) {
      const sessieId = activeId.slice(7);

      if (overId === PRULLENBAK_ID) {
        // Shake animation
        setTrashShake(true);
        setTimeout(() => setTrashShake(false), 450);

        // Store for undo, then delete
        const gevonden = sessies.find(s => s.id === sessieId);
        if (gevonden) {
          setVerwijderdSessie(gevonden);
          onVerwijder(sessieId);

          // Auto-dismiss undo toast after 5s
          if (undoTimer.current) clearTimeout(undoTimer.current);
          undoTimer.current = setTimeout(() => setVerwijderdSessie(null), UNDO_DUUR_MS);
        }
        return;
      }

      // Move to another day
      const sessie = sessies.find(s => s.id === sessieId);
      if (sessie && sessie.datum !== overId && onSessieMove) {
        onSessieMove(sessieId, overId);
      }
    }
  }

  function handleDragCancel() {
    setActiveDragId(null);
    setIsDraggingSessie(false);
    setIsOverTrash(false);
    setOverDatum(null);
  }

  // ── undo ──────────────────────────────────────────────────────────────────

  async function herstelSessie(sessie: StudieSessie) {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setVerwijderdSessie(null);
    await onVoegToe(sessie);
  }

  function dismissToast() {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setVerwijderdSessie(null);
  }

  // ── touch swipe (mobile) ──────────────────────────────────────────────────

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) setMobileDagOffset(o => o + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  }

  // ── dag-kolom ─────────────────────────────────────────────────────────────

  function DagKolom({ dag }: { dag: Date }) {
    const datum      = datumStr(dag);
    const vandaag    = isVandaag(dag);
    const dagSessies = sessies
      .filter(s => s.datum === datum)
      .sort((a, b) => a.startTijd.localeCompare(b.startTijd));
    const examVakken  = vakken.filter(v => v.examDatum === datum);
    const isExamenDag = examVakken.length > 0;
    const isOver      = overDatum === datum;

    return (
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Dag-header */}
        <div style={{
          borderTop: `2px solid ${vandaag ? "#2563EB" : isExamenDag ? "#D97706" : "transparent"}`,
          background: isExamenDag ? "#FFFBEB" : vandaag ? "#EFF6FF" : "transparent",
          borderRadius: "6px 6px 0 0",
          padding: "6px 4px 4px", marginBottom: 4, textAlign: "center",
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, margin: 0, color: vandaag ? "#2563EB" : "#64748B" }}>
            {DAG_KORT[dag.getDay()]}
          </p>
          <p style={{ fontSize: 13, fontWeight: vandaag ? 700 : 400, margin: "2px 0 0", color: vandaag ? "#2563EB" : "#374151" }}>
            {dag.getDate()}
          </p>
          {isExamenDag && examVakken.map(v => (
            <p key={v.id} style={{ fontSize: 10, color: "#D97706", margin: "2px 0 0", fontWeight: 600 }}>
              📝 {v.naam.length > 8 ? v.naam.slice(0, 8) + "…" : v.naam}
            </p>
          ))}
        </div>

        <DroppableDag datum={datum} isOver={isOver}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "4px 0", flex: 1 }}>
            {loading ? (
              <><ShimmerBlok /><ShimmerBlok /></>
            ) : (
              dagSessies.map(s => {
                const vak = vakken.find(v => v.id === s.vakId);
                if (!vak) return null;
                return (
                  <DraggableSessie
                    key={s.id}
                    sessie={s} vak={vak}
                    onVoltooid={onVoltooid} onEdit={onEdit} onVerwijder={onVerwijder}
                  />
                );
              })
            )}

            {!loading && (
              <button
                onClick={() => onNieuweSessie(datum)}
                style={{
                  width: "100%", padding: "7px 0",
                  background: "transparent", border: "1px dashed #E8ECF0",
                  borderRadius: 8, cursor: "pointer",
                  color: "#94A3B8", fontSize: 12, minHeight: 36,
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#CBD5E1";
                  (e.currentTarget as HTMLButtonElement).style.color = "#64748B";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8ECF0";
                  (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
                }}
              >
                +
              </button>
            )}
          </div>
        </DroppableDag>
      </div>
    );
  }

  // ── render ────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        {/* ── DESKTOP & TABLET ── */}
        {!isMobile && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <button onClick={() => setWeekOffset(o => o - 1)} className="btn-secondary text-sm flex items-center gap-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Vorige week
              </button>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>Week van {weekLabel(alle7)}</p>
              <button onClick={() => setWeekOffset(o => o + 1)} className="btn-secondary text-sm flex items-center gap-1">
                Volgende week
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
              {/* Linkerpaneel — vakken */}
              <div style={{ width: 160, flexShrink: 0, borderRight: "1px solid #E8ECF0", paddingRight: 16, marginRight: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94A3B8", margin: "0 0 12px" }}>
                  Vakken
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {vakken.length === 0
                    ? <p style={{ fontSize: 12, color: "#CBD5E1" }}>Geen vakken</p>
                    : vakken.map(vak => <VakPill key={vak.id} vak={vak} />)
                  }
                </div>
                {vakken.length > 0 && (
                  <p style={{ fontSize: 11, color: "#CBD5E1", marginTop: 16, lineHeight: 1.4 }}>
                    Sleep naar<br />een dag →
                  </p>
                )}
              </div>

              {/* Rechterpaneel — kalender */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${desktopDagen.length}, 1fr)`, gap: 8 }}>
                  {desktopDagen.map(dag => <DagKolom key={datumStr(dag)} dag={dag} />)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MOBIEL ── */}
        {isMobile && (
          <div>
            {vakken.length > 0 && (
              <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 12, marginBottom: 12, msOverflowStyle: "none", scrollbarWidth: "none" }}>
                {vakken.map(vak => <VakPill key={vak.id} vak={vak} compact />)}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <button onClick={() => setMobileDagOffset(o => o - 1)} className="btn-secondary" style={{ padding: "8px 14px", minHeight: 44 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>
                {DAG_LANG[mobileDagen[1].getDay()]} {mobileDagen[1].getDate()} {MAAND_KORT[mobileDagen[1].getMonth()]}
              </p>
              <button onClick={() => setMobileDagOffset(o => o + 1)} className="btn-secondary" style={{ padding: "8px 14px", minHeight: 44 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              {mobileDagen.map(dag => <DagKolom key={datumStr(dag)} dag={dag} />)}
            </div>

            <p style={{ fontSize: 11, color: "#CBD5E1", textAlign: "center", marginTop: 10 }}>Veeg om te navigeren</p>
          </div>
        )}

        {/* ── Drag overlay ── */}
        <DragOverlay>
          {activeSessie && (() => {
            const vak = vakken.find(v => v.id === activeSessie.vakId);
            return vak ? (
              <div style={{ opacity: 0.9, transform: "rotate(2deg)", pointerEvents: "none" }}>
                <SessieBlok sessie={activeSessie} vak={vak} onVoltooid={() => {}} onEdit={() => {}} onVerwijder={() => {}} />
              </div>
            ) : null;
          })()}
          {activeVakDrag && (
            <div style={{
              opacity: 0.9, transform: "scale(1.04)", pointerEvents: "none",
              display: "flex", alignItems: "center", gap: 8,
              background: "#FFFFFF", border: "1px solid #E8ECF0",
              borderRadius: 8, padding: "8px 12px",
              fontSize: 12, fontWeight: 500, color: "#374151",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: activeVakDrag.kleur }} />
              {activeVakDrag.naam.length > 13 ? activeVakDrag.naam.slice(0, 13) + "…" : activeVakDrag.naam}
            </div>
          )}
        </DragOverlay>

        {/* ── Prullenbak — verschijnt alleen tijdens slepen van sessie ── */}
        {isDraggingSessie && (
          <>
            <DroppablePrullenbak isOver={isOverTrash} shake={trashShake} />
            <div style={{
              position: "fixed", bottom: 8, right: 12,
              fontSize: 11, color: "#94A3B8", zIndex: 100,
              pointerEvents: "none",
            }}>
              Sleep hierheen om te verwijderen
            </div>
          </>
        )}
      </DndContext>

      {/* ── Undo toast ── */}
      {verwijderdSessie && (
        <UndoToast
          sessie={verwijderdSessie}
          onHerstel={() => herstelSessie(verwijderdSessie)}
          onDismiss={dismissToast}
        />
      )}
    </>
  );
}

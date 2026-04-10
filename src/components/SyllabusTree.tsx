"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VakSyllabus, Domein, Subdomein, Leerdoel, SyllabusVoortgang } from "@/types/syllabus";

interface SyllabusTreeProps {
  syllabus: VakSyllabus;
  voortgang: SyllabusVoortgang;
  onToggle: (id: string) => void;
  onOefen?: (leerdoel: Leerdoel) => void;
  heeftVraag?: (leerdoelId: string) => boolean;
  pctVoltooid: (ids: string[]) => number;
  onBegripClick?: (begrip: string) => void;
}

function getAllLeerdoelIds(domein: Domein): string[] {
  return domein.subdomeinen.flatMap(s => s.leerdoelen.map(l => l.id));
}

function getSubLeerdoelIds(sub: Subdomein): string[] {
  return sub.leerdoelen.map(l => l.id);
}

// ─── korte titel ───────────────────────────────────────────────────────────

function formatBadgeId(id: string): string {
  // Verwijder vak-prefix zoals "GES-", "ECO-", etc. (2-4 letters gevolgd door streepje)
  let cleaned = id.replace(/^[A-Z]{2,4}-/i, '')
  // Verwijder "DOM-" prefix
  cleaned = cleaned.replace(/^DOM-/i, '')
  // Verwijder "SUB-" prefix
  cleaned = cleaned.replace(/^SUB-/i, '')
  // Neem alleen het eerste segment (voor het eerste streepje dat overblijft)
  // Dus "A-TIJD" → "A", "B1" → "B1"
  cleaned = cleaned.split('-')[0]
  return cleaned.toUpperCase()
}

function formatDomeinTitel(titel: string): string {
  // Verwijder "Domein X:" of "Domein X -" prefix (hoofdletter of kleine letter)
  let cleaned = titel.replace(/^domein\s+[A-Z0-9]+\s*[:\-–—]\s*/i, '')
  // Verwijder id-prefix zoals "B1 — " of "A — "
  cleaned = cleaned.replace(/^[A-Z0-9]+\s*[—–\-]\s*/i, '')
  // Verwijder jaartallen zoals "1050–1700"
  cleaned = cleaned.replace(/\s*\d{3,4}\s*[—–\-]\s*\d{3,4}/g, '')
  return cleaned.trim()
}

function korteTitel(omschrijving: string): string {
  const zonder = omschrijving
    .replace(/^De kandidaat kan (in contexten )?/, "")
    .replace(/^in contexten /, "");
  const woorden = zonder.split(" ");
  const kort = woorden.slice(0, 6).join(" ");
  return woorden.length > 6 ? kort + "…" : kort;
}

// ─── helpers ──────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.18 }}
      width="14" height="14" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth="2.5"
      style={{ flexShrink: 0 }}
    >
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  );
}

function ProgressBar({ pct, klaar }: { pct: number; klaar: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ width: 60, height: 3, background: "#E8ECF0", borderRadius: 2 }}>
        <div style={{
          width: `${pct}%`, height: "100%",
          background: klaar ? "#16A34A" : "#2563EB",
          borderRadius: 2, transition: "width 0.3s",
        }}/>
      </div>
      <span style={{ fontSize: 11, color: "#94A3B8", width: 28, textAlign: "right" }}>{pct}%</span>
    </div>
  );
}

// ─── LeerdoelRij ──────────────────────────────────────────────────────────

function LeerdoelRij({
  leerdoel,
  checked,
  kanOefenen,
  onToggle,
  onOefen,
  onBegripClick,
}: {
  leerdoel: Leerdoel;
  checked: boolean;
  kanOefenen: boolean;
  onToggle: (id: string) => void;
  onOefen?: (leerdoel: Leerdoel) => void;
  onBegripClick?: (begrip: string) => void;
}) {
  const [uitgeklapt, setUitgeklapt] = useState(false);
  const heeftExtra =
    (leerdoel.begrippen?.length ?? 0) > 0 ||
    (leerdoel.formules?.length ?? 0) > 0 ||
    // show expand if omschrijving is long enough to be worth showing in full
    leerdoel.omschrijving.split(" ").length > 6;

  return (
    <div style={{
      borderBottom: "1px solid #F1F5F9",
      background: checked ? "#FAFFFE" : "#FFFFFF",
      transition: "background 0.2s",
    }}>
      {/* ── Hoofdrij ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px" }}>
        {/* Checkbox */}
        <motion.button
          onClick={() => onToggle(leerdoel.id)}
          animate={checked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 0.15 }}
          style={{
            width: 16, height: 16, borderRadius: 4, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", border: "none", padding: 0,
            background: checked ? "#16A34A" : "white",
            outline: checked ? "none" : "1px solid #CBD5E1",
          }}
        >
          {checked && (
            <svg width="10" height="10" fill="none" viewBox="0 0 12 12">
              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </motion.button>

        {/* Korte titel — klik om uit te klappen */}
        <span
          onClick={() => heeftExtra && setUitgeklapt(v => !v)}
          style={{
            flex: 1,
            fontSize: 14,
            color: checked ? "#94A3B8" : "#374151",
            textDecoration: checked ? "line-through" : "none",
            lineHeight: 1.4,
            cursor: heeftExtra ? "pointer" : "default",
          }}
        >
          {korteTitel(leerdoel.omschrijving)}
        </span>

        {/* Uitklap knop */}
        {heeftExtra && (
          <button
            onClick={() => setUitgeklapt(v => !v)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#94A3B8", fontSize: 11,
              padding: "2px 6px", borderRadius: 4, flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {uitgeklapt ? "Minder ▲" : "Meer ▼"}
          </button>
        )}
      </div>

      {/* ── Uitgeklapte sectie ── */}
      <AnimatePresence initial={false}>
        {uitgeklapt && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{
              padding: "0 12px 12px 38px",
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {/* Volledige omschrijving */}
              <p style={{
                fontSize: 13, color: "#374151", lineHeight: 1.6,
                margin: 0, padding: "8px 12px",
                background: "#F8F9FC", borderRadius: 8,
              }}>
                {leerdoel.omschrijving}
              </p>

              {/* Begrippen */}
              {(leerdoel.begrippen?.length ?? 0) > 0 && (
                <div>
                  <p style={{
                    fontSize: 11, color: "#94A3B8",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    margin: "0 0 6px",
                  }}>
                    Begrippen
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {leerdoel.begrippen!.map(b => (
                      <button
                        key={b}
                        onClick={() => onBegripClick?.(b)}
                        style={{
                          fontSize: 12, padding: "3px 8px", borderRadius: 20,
                          background: "#EFF6FF", color: "#2563EB",
                          border: "1px solid #BFDBFE",
                          cursor: onBegripClick ? "pointer" : "default",
                          fontFamily: "inherit",
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Formules */}
              {(leerdoel.formules?.length ?? 0) > 0 && (
                <div>
                  <p style={{
                    fontSize: 11, color: "#94A3B8",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    margin: "0 0 6px",
                  }}>
                    Formules
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {leerdoel.formules!.map(f => (
                      <code key={f} style={{
                        fontSize: 13, padding: "6px 10px",
                        background: "#F8F9FC", border: "1px solid #E8ECF0",
                        borderRadius: 6, color: "#0F172A",
                        fontFamily: "monospace", display: "block",
                      }}>
                        {f}
                      </code>
                    ))}
                  </div>
                </div>
              )}

              {/* Oefen knop */}
              {onOefen && kanOefenen && (
                <div>
                  <button
                    onClick={() => onOefen(leerdoel)}
                    style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: 20,
                      border: "1px solid #BFDBFE", background: "#EFF6FF",
                      color: "#2563EB", cursor: "pointer",
                    }}
                  >
                    Oefen →
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── SyllabusTree ─────────────────────────────────────────────────────────

export default function SyllabusTree({ syllabus, voortgang, onToggle, onOefen, heeftVraag, pctVoltooid, onBegripClick }: SyllabusTreeProps) {
  const [openDomeinen, setOpenDomeinen] = useState<Record<string, boolean>>(() =>
    syllabus.domeinen.reduce((acc, d) => ({ ...acc, [d.id]: true }), {} as Record<string, boolean>)
  );
  const [openSubdomeinen, setOpenSubdomeinen] = useState<Record<string, boolean>>(() =>
    syllabus.domeinen.flatMap(d => d.subdomeinen).reduce((acc, s) => ({ ...acc, [s.id]: true }), {} as Record<string, boolean>)
  );

  return (
    <div className="space-y-3">
      {syllabus.domeinen.map(domein => {
        const domeinIds = getAllLeerdoelIds(domein);
        const domeinPct = pctVoltooid(domeinIds);
        const domeinKlaar = domeinIds.length > 0 && domeinIds.every(id => voortgang[id]);
        const isOpen = openDomeinen[domein.id];
        const domeinNaam = formatDomeinTitel(domein.naam ?? domein.titel ?? "");
        const domeinCode = domein.code ?? domein.id;

        return (
          <div key={domein.id} style={{
            borderRadius: 12, overflow: "hidden",
            border: `1px solid ${domeinKlaar ? "#BBF7D0" : "#E8ECF0"}`,
            background: domeinKlaar ? "#F0FDF4" : "white",
          }}>
            {/* ── Domein header ── */}
            <button
              onClick={() => setOpenDomeinen(prev => ({ ...prev, [domein.id]: !prev[domein.id] }))}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                background: domeinKlaar ? "#DCFCE7" : "#F8F9FC",
                border: "none", cursor: "pointer",
                borderBottom: isOpen ? `1px solid ${domeinKlaar ? "#BBF7D0" : "#E8ECF0"}` : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{
                  flexShrink: 0, whiteSpace: "nowrap",
                  borderRadius: 8, padding: "4px 8px",
                  background: domeinKlaar ? "#BBF7D0" : "#EFF6FF",
                  color: domeinKlaar ? "#16A34A" : "#2563EB",
                  fontSize: 12, fontWeight: 700, lineHeight: 1.4,
                }}>
                  {formatBadgeId(domeinCode)}
                </span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#0F172A", textAlign: "left" }}>
                  {domeinNaam || (domein.naam ?? domein.titel ?? "")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <ProgressBar pct={domeinPct} klaar={domeinKlaar} />
                <span style={{ color: "#94A3B8" }}><ChevronIcon open={isOpen} /></span>
              </div>
            </button>

            {/* ── Subdomeinen ── */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: 8 }}>
                    {domein.subdomeinen.map(sub => {
                      const subIds = getSubLeerdoelIds(sub);
                      const subPct = pctVoltooid(subIds);
                      const subKlaar = subIds.length > 0 && subIds.every(id => voortgang[id]);
                      const subOpen = openSubdomeinen[sub.id];
                      const afgevinkt = subIds.filter(id => voortgang[id]).length;
                      const subNaam = formatDomeinTitel(sub.naam ?? sub.titel ?? "");
                      const subCode = sub.code ?? sub.id;

                      return (
                        <div key={sub.id} style={{
                          marginBottom: 6, borderRadius: 8, overflow: "hidden",
                          border: `1px solid ${subKlaar ? "#BBF7D0" : "#E8ECF0"}`,
                          background: subKlaar ? "#F0FDF4" : "white",
                        }}>
                          {/* ── Subdomein header ── */}
                          <button
                            onClick={() => setOpenSubdomeinen(prev => ({ ...prev, [sub.id]: !prev[sub.id] }))}
                            style={{
                              width: "100%", display: "flex", alignItems: "center",
                              justifyContent: "space-between",
                              padding: "8px 12px",
                              background: subKlaar ? "#DCFCE7" : "#F8F9FC",
                              border: "none", cursor: "pointer",
                              borderBottom: subOpen ? `1px solid ${subKlaar ? "#BBF7D0" : "#E8ECF0"}` : "none",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
                              <span style={{
                                flexShrink: 0, whiteSpace: "nowrap",
                                fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4,
                                background: subKlaar ? "#BBF7D0" : "#EFF6FF",
                                color: subKlaar ? "#16A34A" : "#2563EB",
                              }}>
                                {formatBadgeId(subCode)}
                              </span>
                              <span style={{ fontSize: 13, fontWeight: 500, color: "#374151", textAlign: "left" }}>
                                {subNaam || (sub.naam ?? sub.titel ?? "")}
                              </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                              <span style={{ fontSize: 11, color: "#94A3B8" }}>
                                {afgevinkt}/{subIds.length}
                              </span>
                              <ProgressBar pct={subPct} klaar={subKlaar} />
                              <span style={{ color: "#94A3B8" }}><ChevronIcon open={subOpen} /></span>
                            </div>
                          </button>

                          {/* ── Leerdoelen ── */}
                          <AnimatePresence initial={false}>
                            {subOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                style={{ overflow: "hidden" }}
                              >
                                {sub.leerdoelen.map(leerdoel => (
                                  <LeerdoelRij
                                    key={leerdoel.id}
                                    leerdoel={leerdoel}
                                    checked={!!voortgang[leerdoel.id]}
                                    kanOefenen={heeftVraag?.(leerdoel.id) ?? false}
                                    onToggle={onToggle}
                                    onOefen={onOefen}
                                    onBegripClick={onBegripClick}
                                  />
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

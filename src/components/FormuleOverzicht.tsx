"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "@/components/Portal";
import { FORMULES } from "@/data/formules";
import { begrippen } from "@/data/begrippen";

interface FormuleOverzichtProps {
  vakId: string;
  onClose: () => void;
  initialBegrip?: string;
}

export default function FormuleOverzicht({ vakId, onClose, initialBegrip }: FormuleOverzichtProps) {
  const initVakFormules = FORMULES.find(f => f.vakId === vakId)?.formules ?? [];
  const [tab, setTab] = useState<"formules" | "begrippen">(
    initialBegrip ? "begrippen" : initVakFormules.length > 0 ? "formules" : "begrippen"
  );
  const [zoekterm, setZoekterm] = useState("");
  const [activeDomein, setActiveDomein] = useState<string | null>(null);
  const [uitlegOpen, setUitlegOpen] = useState<Record<string, boolean>>({});
  const [begripOpen, setBegripOpen] = useState<Record<string, boolean>>(
    initialBegrip ? { [initialBegrip]: true } : {}
  );
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const vakFormules = FORMULES.find(f => f.vakId === vakId)?.formules ?? [];
  const vakBegrippen = begrippen.filter(b => b.vakken.includes(vakId));
  const domeinen = [...new Set(vakFormules.map(f => f.domein))];

  const gefilterdFormules = vakFormules.filter(f => {
    const matchesDomein = !activeDomein || f.domein === activeDomein;
    const matchesZoek = !zoekterm || f.naam.toLowerCase().includes(zoekterm.toLowerCase()) || f.formule.toLowerCase().includes(zoekterm.toLowerCase());
    return matchesDomein && matchesZoek;
  });

  const gefilterdBegrippen = vakBegrippen.filter(b =>
    !zoekterm ||
    b.term.toLowerCase().includes(zoekterm.toLowerCase()) ||
    b.definitie.toLowerCase().includes(zoekterm.toLowerCase())
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!initialBegrip) return;
    const t = setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 320); // wait for slide-in animation (~300ms)
    return () => clearTimeout(t);
  }, [initialBegrip]);

  useEffect(() => {
    setZoekterm("");
    setActiveDomein(null);
  }, [tab]);

  const heeftFormules = vakFormules.length > 0;
  const heeftBegrippen = vakBegrippen.length > 0;

  return (
    <Portal>
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.3)", zIndex: 9990 }}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: 380,
          background: "white", zIndex: 9991,
          display: "flex", flexDirection: "column",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Header */}
        <div style={{ padding: "20px 20px 0", borderBottom: "1px solid #E8ECF0", paddingBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}>
              {tab === "formules" ? "Formuleoverzicht" : "Begrippenlijst"}
            </p>
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748B" }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 12, background: "#F1F5F9", borderRadius: 8, padding: 3 }}>
            {heeftFormules && (
              <button
                onClick={() => setTab("formules")}
                style={{
                  flex: 1, padding: "6px 0", borderRadius: 6, border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 500,
                  background: tab === "formules" ? "white" : "transparent",
                  color: tab === "formules" ? "#0F172A" : "#64748B",
                  boxShadow: tab === "formules" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.15s",
                }}
              >
                Formules
              </button>
            )}
            {heeftBegrippen && (
              <button
                onClick={() => setTab("begrippen")}
                style={{
                  flex: 1, padding: "6px 0", borderRadius: 6, border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 500,
                  background: tab === "begrippen" ? "white" : "transparent",
                  color: tab === "begrippen" ? "#0F172A" : "#64748B",
                  boxShadow: tab === "begrippen" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  transition: "all 0.15s",
                }}
              >
                Begrippen ({vakBegrippen.length})
              </button>
            )}
          </div>

          {/* Zoekbalk */}
          <div style={{ position: "relative", marginBottom: tab === "formules" && domeinen.length > 0 ? 10 : 0 }}>
            <svg style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }}
              width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder={tab === "formules" ? "Zoek formule…" : "Zoek begrip…"}
              value={zoekterm}
              onChange={e => setZoekterm(e.target.value)}
              style={{
                width: "100%", padding: "8px 10px 8px 32px",
                border: "1px solid #E2E8F0", borderRadius: 8,
                fontSize: 13, color: "#374151", background: "#F8F9FC",
                outline: "none", boxSizing: "border-box",
              }}
            />
          </div>

          {/* Domein pills */}
          {tab === "formules" && domeinen.length > 0 && (
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingBottom: 4 }}>
              <button
                onClick={() => setActiveDomein(null)}
                style={{
                  fontSize: 11, padding: "3px 10px", borderRadius: 20,
                  background: !activeDomein ? "#2563EB" : "#F1F5F9",
                  color: !activeDomein ? "white" : "#374151",
                  border: "none", cursor: "pointer", fontWeight: 500,
                }}
              >
                Alle
              </button>
              {domeinen.map(d => (
                <button
                  key={d}
                  onClick={() => setActiveDomein(activeDomein === d ? null : d)}
                  style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: 20,
                    background: activeDomein === d ? "#2563EB" : "#F1F5F9",
                    color: activeDomein === d ? "white" : "#374151",
                    border: "none", cursor: "pointer", fontWeight: 500,
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>

          {/* FORMULES TAB */}
          {tab === "formules" && (
            <>
              {vakFormules.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: 40 }}>
                  <p style={{ fontSize: 14, color: "#94A3B8" }}>Geen formules beschikbaar voor dit vak.</p>
                </div>
              ) : gefilterdFormules.length === 0 ? (
                <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", marginTop: 24 }}>Geen resultaten</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {gefilterdFormules.map(f => (
                    <div key={f.id} style={{ borderRadius: 10, border: "1px solid #E8ECF0", overflow: "hidden" }}>
                      <div style={{ padding: "10px 12px" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>{f.naam}</p>
                          <span style={{
                            fontSize: 10, padding: "1px 6px", borderRadius: 4, flexShrink: 0,
                            background: "#F1F5F9", color: "#64748B", fontWeight: 500,
                          }}>{f.domein}</span>
                        </div>
                        <div style={{ padding: "7px 10px", borderRadius: 7, background: "#F8F9FC", border: "1px solid #E8ECF0" }}>
                          <span style={{ fontFamily: "monospace", fontSize: 13, color: "#2563EB", fontWeight: 500 }}>
                            {f.formule}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setUitlegOpen(prev => ({ ...prev, [f.id]: !prev[f.id] }))}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "6px 12px", background: "#F8F9FC", border: "none",
                          borderTop: "1px solid #E8ECF0", cursor: "pointer",
                        }}
                      >
                        <span style={{ fontSize: 11, color: "#64748B" }}>Uitleg</span>
                        <motion.svg
                          animate={{ rotate: uitlegOpen[f.id] ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                          width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2.5"
                        >
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </button>
                      <AnimatePresence initial={false}>
                        {uitlegOpen[f.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{ overflow: "hidden" }}
                          >
                            <p style={{ fontSize: 12, color: "#374151", padding: "8px 12px 10px", lineHeight: 1.5 }}>
                              {f.uitleg}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* BEGRIPPEN TAB */}
          {tab === "begrippen" && (
            <>
              {vakBegrippen.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: 40 }}>
                  <p style={{ fontSize: 14, color: "#94A3B8" }}>Geen begrippen beschikbaar voor dit vak.</p>
                </div>
              ) : gefilterdBegrippen.length === 0 ? (
                <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", marginTop: 24 }}>Geen resultaten</p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {gefilterdBegrippen.map(b => (
                    <div
                      key={b.term}
                      ref={initialBegrip === b.term ? scrollTargetRef : undefined}
                      style={{ borderRadius: 10, border: "1px solid #E8ECF0", overflow: "hidden" }}
                    >
                      <button
                        onClick={() => setBegripOpen(prev => ({ ...prev, [b.term]: !prev[b.term] }))}
                        style={{
                          width: "100%", padding: "10px 12px", background: "white",
                          border: "none", cursor: "pointer", textAlign: "left",
                          display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 13, fontWeight: 600, color: "#0F172A", marginBottom: 2 }}>
                            {b.term.charAt(0).toUpperCase() + b.term.slice(1)}
                          </p>
                          <p style={{ fontSize: 12, color: "#64748B", lineHeight: 1.4 }}>
                            {b.definitie}
                          </p>
                        </div>
                        <motion.svg
                          animate={{ rotate: begripOpen[b.term] ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                          style={{ flexShrink: 0, marginTop: 2 }}
                          width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2.5"
                        >
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </button>
                      <AnimatePresence initial={false}>
                        {begripOpen[b.term] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{ overflow: "hidden" }}
                          >
                            <p style={{
                              fontSize: 12, color: "#374151", lineHeight: 1.5,
                              padding: "8px 12px 10px",
                              borderTop: "1px solid #E8ECF0",
                              background: "#F8F9FC",
                            }}>
                              {b.uitleg}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </Portal>
  );
}

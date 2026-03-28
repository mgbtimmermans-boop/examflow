"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "@/components/Portal";
import { ExamenVraag } from "@/types/scoreWizard";
import { useScoreWizard } from "@/hooks/useScoreWizard";
import Stepper from "@/components/ScoreWizard/Stepper";
import OpenVraag from "@/components/ScoreWizard/OpenVraag";
import RekenVraag from "@/components/ScoreWizard/RekenVraag";
import NakijkMatrix from "@/components/ScoreWizard/NakijkMatrix";

export interface ScoreWizardProps {
  vraag: ExamenVraag;
  uid: string;
  onClose: () => void;
  onVoltooid?: (score: number, max: number) => void;
}

function scoreFeedback(score: number, max: number): string {
  const pct = max > 0 ? score / max : 0;
  if (pct >= 1)    return "Uitstekend! Volledig antwoord.";
  if (pct >= 0.67) return "Goed! Eén punt gemist — zie wat beter kan.";
  if (pct >= 0.33) return "Halverwege. Bekijk de gemiste punten goed.";
  return "Nog oefenen. Probeer de structuur opnieuw.";
}

export default function ScoreWizard({ vraag, uid, onClose, onVoltooid }: ScoreWizardProps) {
  const wizard = useScoreWizard(vraag, uid);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Save when resultaat phase is reached
  useEffect(() => {
    if (wizard.fase === "resultaat") wizard.slaOpInFirestore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wizard.fase]);

  const score = wizard.berekenScore();
  const max = vraag.maxPunten;
  const pct = max > 0 ? score / max : 0;

  const scoreColor = pct >= 0.67 ? "#16A34A" : pct >= 0.33 ? "#D97706" : "#DC2626";

  return (
    <Portal>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 9000, background: "rgba(0,0,0,0.4)" }}
      />

      {/* Panel */}
      <div
        style={{
          position: "fixed", zIndex: 9001,
          // Desktop: centered, 560px wide
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(560px, 100vw)",
          maxHeight: "90vh",
          background: "#FFFFFF",
          borderRadius: 16,
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
        // Prevent backdrop click from closing when clicking inside
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid #E8ECF0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#0F172A" }}>Score Wizard</p>
            <p style={{ fontSize: 11, color: "#94A3B8" }}>{vraag.syllabusItem}</p>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid #E8ECF0", background: "#F8F9FC",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#64748B",
            }}
            aria-label="Sluiten"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div style={{ padding: "20px", overflowY: "auto", flex: 1 }}>
          <Stepper huidige={wizard.fase} />

          <AnimatePresence mode="wait">
            {wizard.fase === "antwoorden" && (
              <motion.div
                key="antwoorden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {vraag.modus === "open" ? (
                  <OpenVraag
                    vraag={vraag}
                    openAntwoord={wizard.openAntwoord}
                    setOpenAntwoord={wizard.setOpenAntwoord}
                    scanKeywords={wizard.scanKeywords}
                    volledigAntwoord={wizard.volledigAntwoord}
                    kanNakijken={wizard.kanNakijken}
                    onVolgende={() => wizard.setFase("nakijken")}
                  />
                ) : (
                  <RekenVraag
                    vraag={vraag}
                    rekenAntwoord={wizard.rekenAntwoord}
                    setRekenAntwoord={wizard.setRekenAntwoord}
                    kanNakijken={wizard.kanNakijken}
                    onVolgende={() => wizard.setFase("nakijken")}
                  />
                )}
              </motion.div>
            )}

            {wizard.fase === "nakijken" && (
              <motion.div
                key="nakijken"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <NakijkMatrix
                  criteria={vraag.correctieVoorschrift}
                  zelfBeoordeling={wizard.zelfBeoordeling}
                  setAntwoord={wizard.setAntwoord}
                  onVoltooid={() => wizard.setFase("resultaat")}
                />
              </motion.div>
            )}

            {wizard.fase === "resultaat" && (
              <motion.div
                key="resultaat"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Score display */}
                <div style={{ textAlign: "center", marginBottom: 24 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#64748B", marginBottom: 8 }}>
                    Je score
                  </p>
                  <p style={{ fontSize: 44, fontWeight: 700, color: scoreColor, lineHeight: 1 }}>
                    {score} <span style={{ fontSize: 24, color: "#94A3B8" }}>/ {max}</span>
                  </p>
                  <p style={{ fontSize: 14, color: "#374151", marginTop: 12, lineHeight: 1.5 }}>
                    {scoreFeedback(score, max)}
                  </p>
                </div>

                <div style={{ height: 1, background: "#F1F5F9", marginBottom: 16 }}/>

                {/* Goed gedaan */}
                {wizard.zelfBeoordeling.some(z => z.antwoord) && (
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                      Wat je goed deed
                    </p>
                    {vraag.correctieVoorschrift
                      .filter(c => wizard.zelfBeoordeling.find(z => z.criteriumId === c.id)?.antwoord)
                      .map(c => (
                        <div key={c.id} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                          <span style={{ color: "#16A34A", fontWeight: 700, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: 13, color: "#374151" }}>{c.omschrijving}</span>
                        </div>
                      ))
                    }
                  </div>
                )}

                {/* Beter kan */}
                {vraag.correctieVoorschrift.some(c => !wizard.zelfBeoordeling.find(z => z.criteriumId === c.id)?.antwoord) && (
                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                      Wat beter kan
                    </p>
                    {vraag.correctieVoorschrift
                      .filter(c => !wizard.zelfBeoordeling.find(z => z.criteriumId === c.id)?.antwoord)
                      .map(c => (
                        <div key={c.id} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                          <span style={{ color: "#DC2626", fontWeight: 700, flexShrink: 0 }}>✗</span>
                          <span style={{ fontSize: 13, color: "#374151" }}>{c.omschrijving}</span>
                        </div>
                      ))
                    }
                  </div>
                )}

                {/* Knoppen */}
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => {
                      if (onVoltooid) onVoltooid(score, max);
                      onClose();
                    }}
                    className="btn-secondary"
                    style={{ flex: 1 }}
                  >
                    Nog een vraag
                  </button>
                  <button
                    onClick={onClose}
                    className="btn-primary"
                    style={{ flex: 1 }}
                  >
                    Terug naar syllabus
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Portal>
  );
}

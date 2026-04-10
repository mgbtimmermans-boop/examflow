"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Portal } from "@/components/Portal";
import { Leerdoel } from "@/types/syllabus";

interface OpfrissKaartProps {
  leerdoel: Leerdoel;
  onSlaOver: () => void;
  onStart: () => void;
}

export default function OpfrissKaart({ leerdoel, onSlaOver, onStart }: OpfrissKaartProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onSlaOver();
      if (e.key === "Enter") onStart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onSlaOver, onStart]);

  const heeftInhoud = (leerdoel.begrippen && leerdoel.begrippen.length > 0) ||
                      (leerdoel.formules && leerdoel.formules.length > 0);

  return (
    <Portal>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed", inset: 0, zIndex: 9995,
          background: "rgba(15,23,42,0.55)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
        }}
        onClick={onSlaOver}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: "white", borderRadius: 16, width: "100%", maxWidth: 480,
            padding: 28, boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          {/* Badge */}
          <div style={{ marginBottom: 16 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em",
              color: "#2563EB", background: "#EFF6FF", padding: "3px 10px", borderRadius: 20,
              border: "1px solid #BFDBFE",
            }}>
              Opfrisser
            </span>
          </div>

          {/* Leerdoel */}
          <p style={{ fontSize: 16, fontWeight: 600, color: "#0F172A", marginBottom: 20, lineHeight: 1.4 }}>
            {leerdoel.omschrijving}
          </p>

          {heeftInhoud ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {/* Begrippen */}
              {leerdoel.begrippen && leerdoel.begrippen.length > 0 && (
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748B", marginBottom: 8 }}>
                    Begrippen
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {leerdoel.begrippen.map((b, i) => (
                      <span key={i} style={{
                        fontSize: 12, padding: "3px 10px", borderRadius: 20,
                        background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE",
                      }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Formules */}
              {leerdoel.formules && leerdoel.formules.length > 0 && (
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748B", marginBottom: 8 }}>
                    Formules
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {leerdoel.formules.map((f, i) => (
                      <div key={i} style={{
                        padding: "7px 12px", borderRadius: 8, background: "#F8F9FC",
                        border: "1px solid #E8ECF0",
                      }}>
                        <span style={{ fontFamily: "monospace", fontSize: 13, color: "#2563EB", fontWeight: 500 }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 24 }}>
              Geen extra begrippen of formules voor dit leerdoel.
            </p>
          )}

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={onSlaOver}
              className="btn-secondary"
              style={{ flex: 1, textAlign: "center" }}
            >
              Sla over — direct oefenen
            </button>
            <button
              onClick={onStart}
              className="btn-primary"
              style={{ flex: 1, textAlign: "center" }}
            >
              Klaar voor oefening →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
}

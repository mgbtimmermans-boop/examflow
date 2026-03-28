"use client";
import { useState } from "react";
import { ExamenVraag, RekenAntwoord } from "@/types/scoreWizard";
import { REKEN_SJABLONEN } from "@/data/scoreWizard";

const NUMMERS = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"];

interface Props {
  vraag: ExamenVraag;
  rekenAntwoord: RekenAntwoord;
  setRekenAntwoord: (a: RekenAntwoord) => void;
  kanNakijken: () => boolean;
  onVolgende: () => void;
}

export default function RekenVraag({
  vraag, rekenAntwoord, setRekenAntwoord, kanNakijken, onVolgende,
}: Props) {
  const [hintOpen, setHintOpen] = useState<string | null>(null);

  const sjabloonType = vraag.rekenSjabloon ?? "generiek";
  const stappen = REKEN_SJABLONEN[sjabloonType];

  function updateStap(id: string, waarde: string) {
    setRekenAntwoord({
      ...rekenAntwoord,
      stappen: { ...rekenAntwoord.stappen, [id]: waarde },
    });
  }

  function updateEenheid(id: string, eenheid: string) {
    setRekenAntwoord({
      ...rekenAntwoord,
      eenheden: { ...rekenAntwoord.eenheden, [id]: eenheid },
    });
  }

  const inputStyle: React.CSSProperties = {
    flex: 1, fontSize: 13, color: "#374151",
    border: "1px solid #E2E8F0", borderRadius: 8,
    padding: "8px 10px", outline: "none",
    fontFamily: "inherit", background: "white",
  };

  return (
    <div>
      {/* Vraag */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, fontWeight: 500 }}>
          {vraag.vraag}
        </p>
        {vraag.jaar && (
          <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 6 }}>
            Examen {vraag.jaar} · {vraag.maxPunten} punten
          </p>
        )}
      </div>

      <div style={{ height: 1, background: "#F1F5F9", marginBottom: 16 }}/>

      {/* Stappen */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
        {stappen.map((stap, i) => {
          const isLaatsteMetBerekening = stap.id === "berekening";
          const waarde = rekenAntwoord.stappen[stap.id] ?? "";
          const eenheid = rekenAntwoord.eenheden[stap.id] ?? "";

          return (
            <div
              key={stap.id}
              style={{
                padding: "12px 14px", borderRadius: 10,
                border: "1px solid #E8ECF0", background: "#FAFBFC",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 16, color: "#2563EB", lineHeight: 1 }}>
                  {NUMMERS[i] ?? `${i + 1}.`}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151", flex: 1 }}>
                  {stap.label}
                </span>
                {stap.hint && (
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setHintOpen(hintOpen === stap.id ? null : stap.id)}
                      style={{
                        width: 22, height: 22, borderRadius: "50%",
                        border: "1px solid #BFDBFE", background: "#EFF6FF",
                        color: "#2563EB", fontSize: 12, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700,
                      }}
                      title={stap.hint}
                    >
                      ℹ
                    </button>
                    {hintOpen === stap.id && (
                      <div style={{
                        position: "absolute", right: 0, top: 28, zIndex: 10,
                        width: 220, padding: "8px 10px", borderRadius: 8,
                        background: "#1E293B", color: "white",
                        fontSize: 12, lineHeight: 1.5,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      }}>
                        {stap.hint}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                {isLaatsteMetBerekening ? (
                  <textarea
                    rows={3}
                    value={waarde}
                    onChange={e => updateStap(stap.id, e.target.value)}
                    placeholder={stap.placeholder}
                    style={{
                      ...inputStyle, flex: 1, resize: "vertical" as const,
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={waarde}
                    onChange={e => updateStap(stap.id, e.target.value)}
                    placeholder={stap.placeholder}
                    style={inputStyle}
                  />
                )}
                {stap.eenheid && (
                  <input
                    type="text"
                    value={eenheid}
                    onChange={e => updateEenheid(stap.id, e.target.value)}
                    placeholder="eenheid"
                    style={{ ...inputStyle, flex: "none", width: 90 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Doorgaan */}
      <button
        onClick={onVolgende}
        disabled={!kanNakijken()}
        className="btn-primary"
        style={{ width: "100%", opacity: kanNakijken() ? 1 : 0.4, cursor: kanNakijken() ? "pointer" : "not-allowed" }}
      >
        Verder naar nakijken →
      </button>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { NakijkCriterium, ZelfBeoordeling } from "@/types/scoreWizard";

interface Props {
  criteria: NakijkCriterium[];
  zelfBeoordeling: ZelfBeoordeling[];
  setAntwoord: (id: string, antwoord: boolean) => void;
  onVoltooid: () => void;
}

export default function NakijkMatrix({ criteria, zelfBeoordeling, setAntwoord, onVoltooid }: Props) {
  const [huidigIdx, setHuidigIdx] = useState(0);
  const [geklikt, setGeklikt] = useState(false);

  // Reset disabled state when question advances
  useEffect(() => {
    setGeklikt(false);
  }, [huidigIdx]);

  const criterium = criteria[huidigIdx];
  const isLaatste = huidigIdx === criteria.length - 1;
  const antwoordWaarde = zelfBeoordeling.find(z => z.criteriumId === criterium.id)?.antwoord;

  function handleAntwoord(antwoord: boolean) {
    if (geklikt) return;
    setGeklikt(true);
    setAntwoord(criterium.id, antwoord);

    if (!isLaatste) {
      setHuidigIdx(i => i + 1);
    } else {
      onVoltooid();
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 15, fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>
          Controleer je antwoord
        </p>
        <p style={{ fontSize: 13, color: "#64748B" }}>
          Beantwoord eerlijk — dit telt alleen voor jouzelf
        </p>
      </div>

      <div style={{ height: 1, background: "#F1F5F9", marginBottom: 20 }}/>

      {/* Voortgang */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {criteria.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1, height: 3, borderRadius: 2,
              background: i < huidigIdx ? "#16A34A" : i === huidigIdx ? "#2563EB" : "#E2E8F0",
            }}
          />
        ))}
      </div>

      {/* Huidige vraag */}
      <div style={{
        padding: "16px", borderRadius: 12,
        border: "1px solid #E8ECF0", background: "#FAFBFC",
        marginBottom: 20,
      }}>
        <p style={{ fontSize: 12, color: "#94A3B8", marginBottom: 8 }}>
          Vraag {huidigIdx + 1} van {criteria.length}
          {criterium.verplicht && (
            <span style={{ marginLeft: 8, fontSize: 11, color: "#DC2626", fontWeight: 600 }}>verplicht</span>
          )}
        </p>
        <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, fontWeight: 500 }}>
          &ldquo;{criterium.checkVraag}&rdquo;
        </p>
        <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>
          {criterium.punten} {criterium.punten === 1 ? "punt" : "punten"} · {criterium.omschrijving}
        </p>
      </div>

      {/* Ja / Nee knoppen */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <button
          onClick={() => handleAntwoord(false)}
          disabled={geklikt}
          style={{
            flex: 1, minHeight: 48, borderRadius: 10,
            border: `2px solid ${antwoordWaarde === false ? "#FECACA" : "#E2E8F0"}`,
            background: antwoordWaarde === false ? "#FEF2F2" : "#FFFFFF",
            color: antwoordWaarde === false ? "#DC2626" : "#64748B",
            fontSize: 14, fontWeight: 500,
            cursor: geklikt ? "not-allowed" : "pointer",
            opacity: geklikt ? 0.5 : 1,
            transition: "all 0.15s",
          }}
        >
          ✗ Nee, dat heb ik niet
        </button>
        <button
          onClick={() => handleAntwoord(true)}
          disabled={geklikt}
          style={{
            flex: 1, minHeight: 48, borderRadius: 10,
            border: `2px solid ${antwoordWaarde === true ? "#BBF7D0" : "#E2E8F0"}`,
            background: antwoordWaarde === true ? "#F0FDF4" : "#FFFFFF",
            color: antwoordWaarde === true ? "#16A34A" : "#64748B",
            fontSize: 14, fontWeight: 500,
            cursor: geklikt ? "not-allowed" : "pointer",
            opacity: geklikt ? 0.5 : 1,
            transition: "all 0.15s",
          }}
        >
          ✓ Ja, dat staat erin
        </button>
      </div>

      {/* Vorige — alleen voor terugnavigatie */}
      {huidigIdx > 0 && (
        <>
          <div style={{ height: 1, background: "#F1F5F9", marginBottom: 16 }}/>
          <button
            onClick={() => setHuidigIdx(i => i - 1)}
            className="btn-secondary"
            style={{ opacity: 0.7 }}
          >
            ← Vorige
          </button>
        </>
      )}
    </div>
  );
}

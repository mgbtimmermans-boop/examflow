"use client";
import { WizardFase } from "@/hooks/useScoreWizard";

const STAPPEN: { id: WizardFase; label: string }[] = [
  { id: "antwoorden", label: "Antwoord" },
  { id: "nakijken",   label: "Nakijken" },
  { id: "resultaat",  label: "Resultaat" },
];

const VOLGORDE: WizardFase[] = ["antwoorden", "nakijken", "resultaat"];

interface Props {
  huidige: WizardFase;
}

export default function Stepper({ huidige }: Props) {
  const huidigIdx = VOLGORDE.indexOf(huidige);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 24 }}>
      {STAPPEN.map((stap, i) => {
        const voltooid = i < huidigIdx;
        const actief = i === huidigIdx;
        const cirkelBg = voltooid ? "#16A34A" : actief ? "#2563EB" : "#E2E8F0";
        const cirkelText = voltooid ? "white" : actief ? "white" : "#94A3B8";
        const labelColor = voltooid ? "#16A34A" : actief ? "#2563EB" : "#94A3B8";

        return (
          <div key={stap.id} style={{ display: "flex", alignItems: "center", flex: i < STAPPEN.length - 1 ? 1 : undefined }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: cirkelBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {voltooid ? (
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                    <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span style={{ fontSize: 12, fontWeight: 600, color: cirkelText }}>{i + 1}</span>
                )}
              </div>
              <span style={{ fontSize: 11, fontWeight: actief ? 600 : 400, color: labelColor, whiteSpace: "nowrap" }}>
                {stap.label}
              </span>
            </div>
            {i < STAPPEN.length - 1 && (
              <div style={{
                flex: 1, height: 1,
                background: i < huidigIdx ? "#16A34A" : "#E2E8F0",
                margin: "0 8px", marginBottom: 18,
              }}/>
            )}
          </div>
        );
      })}
    </div>
  );
}

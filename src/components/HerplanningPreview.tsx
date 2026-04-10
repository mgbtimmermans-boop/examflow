"use client";
import { useMemo } from "react";
import { Portal } from "@/components/Portal";
import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";
import { herplanBlok } from "@/hooks/useAgenda";

interface HerplanningPreviewProps {
  uitgelopenSessieId: string;
  extraMinuten: number;
  huidigBlok: StudieSessie[];
  blokEindtijd: string;
  vakken: Vak[];
  confidenceScores: Record<string, number>;
  checks?: Record<string, Record<string, boolean>>;
  herplanResterend?: number;
  onBevestig: (nieuwePlannen: StudieSessie[]) => void;
  onAnnuleer: () => void;
}

function tijdNaarMin(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function minNaarTijd(m: number): string {
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

export default function HerplanningPreview({
  uitgelopenSessieId, extraMinuten, huidigBlok, blokEindtijd,
  vakken, confidenceScores, checks = {}, herplanResterend, onBevestig, onAnnuleer,
}: HerplanningPreviewProps) {
  const limietBereikt = herplanResterend !== undefined && herplanResterend <= 0;
  const gebruikt = herplanResterend !== undefined ? 3 - herplanResterend : undefined;
  const nieuwePlannen = useMemo(() =>
    herplanBlok(huidigBlok, uitgelopenSessieId, extraMinuten, vakken, confidenceScores, checks),
    [uitgelopenSessieId, extraMinuten, huidigBlok, vakken, confidenceScores, checks]
  );

  // Bereken nieuwe eindtijd van het blok
  const nieuweEindMin = useMemo(() => {
    if (nieuwePlannen.length === 0) return tijdNaarMin(blokEindtijd);
    const laatste = nieuwePlannen[nieuwePlannen.length - 1];
    return tijdNaarMin(laatste.startTijd) + laatste.duurMinuten;
  }, [nieuwePlannen, blokEindtijd]);

  const origineleEindMin = tijdNaarMin(blokEindtijd);
  const verschilMin = nieuweEindMin - origineleEindMin;

  return (
    <Portal>
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center",
        justifyContent: "center", padding: 20,
      }}>
        <div style={{
          background: "#FFFFFF", borderRadius: 16,
          padding: 28, width: "100%", maxWidth: 400,
          border: "1px solid #E8ECF0",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          maxHeight: "90vh", overflowY: "auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", margin: 0 }}>
              Planning aanpassen
            </p>
            <button
              onClick={onAnnuleer}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#94A3B8", lineHeight: 1 }}
            >
              ×
            </button>
          </div>
          <p style={{ fontSize: 13, color: "#64748B", marginBottom: 16 }}>
            Studieblok gepland tot {blokEindtijd} · +{extraMinuten} min uitgelopen
          </p>

          <div style={{ height: 1, background: "#F1F5F9", marginBottom: 16 }} />

          {nieuwePlannen.length > 0 ? (
            <>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 10 }}>
                Nieuw plan voor dit blok:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {nieuwePlannen.map(s => {
                  const vak = vakken.find(v => v.id === s.vakId);
                  const eindMin = tijdNaarMin(s.startTijd) + s.duurMinuten;
                  const onderwerp = s.syllabusItem ?? s.eigenTitel ?? "Eigen onderwerp";
                  const origineel = huidigBlok.find(o => o.id === s.id);
                  const ingekort = origineel && s.duurMinuten < origineel.duurMinuten;
                  return (
                    <div
                      key={s.id}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "8px 12px", borderRadius: 8,
                        background: "#F8F9FC", border: "1px solid #E8ECF0",
                      }}
                    >
                      <span style={{
                        width: 8, height: 8, borderRadius: "50%",
                        background: vak?.kleur ?? "#2563EB", flexShrink: 0,
                      }} />
                      <span style={{ flex: 1, fontSize: 13, color: "#0F172A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {vak?.naam ?? s.vakId} · {onderwerp}
                      </span>
                      <span style={{ fontSize: 12, color: ingekort ? "#D97706" : "#64748B", flexShrink: 0, fontWeight: ingekort ? 600 : 400 }}>
                        {s.startTijd}–{minNaarTijd(eindMin)}{ingekort ? " ↓" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p style={{ fontSize: 13, color: verschilMin > 0 ? "#D97706" : "#16A34A", marginBottom: 20 }}>
                Klaar om {minNaarTijd(nieuweEindMin)}
                {verschilMin > 0 && ` (${verschilMin} min later dan gepland)`}
                {verschilMin <= 0 && " (binnen de geplande tijd)"}
              </p>
            </>
          ) : (
            <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 20, textAlign: "center" }}>
              Geen andere sessies in dit blok om te herplannen.
            </p>
          )}

          {gebruikt !== undefined && (
            <p style={{ fontSize: 12, color: limietBereikt ? "#DC2626" : "#94A3B8", marginBottom: 12 }}>
              {limietBereikt ? "Limiet bereikt voor vandaag" : `Herplannen: ${gebruikt}/3 gebruikt vandaag`}
            </p>
          )}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={onAnnuleer}
              className="btn-secondary"
              style={{ flex: 1, fontSize: 13 }}
            >
              Annuleren
            </button>
            <button
              onClick={() => onBevestig(nieuwePlannen)}
              disabled={limietBereikt}
              className={limietBereikt ? undefined : "btn-primary"}
              style={{
                flex: 2, fontSize: 13,
                ...(limietBereikt
                  ? { background: "#F1F5F9", color: "#94A3B8", border: "1px solid #E8ECF0", borderRadius: 8, cursor: "not-allowed" }
                  : undefined),
              }}
            >
              {limietBereikt ? "Limiet bereikt voor vandaag" : "Pas planning aan →"}
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

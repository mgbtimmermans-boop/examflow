"use client";
import { useState, useEffect } from "react";
import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";
import { herplanDag, berekenBeschikbareTijd, VakInfo, HerplanResultaat, minNaarTijd } from "@/lib/herplannen";

interface HerplanModalProps {
  sessies: StudieSessie[];           // sessies van de huidige dag die herplant moeten worden
  bestaandeSessies: StudieSessie[];  // voltooide sessies die vastliggen
  vakken: Vak[];
  vakInfo: VakInfo[];
  datum: string;
  onBevestig: (sessies: StudieSessie[]) => Promise<void>;
  onClose: () => void;
}

function roundUpTo30(date: Date): string {
  let m = date.getMinutes();
  let h = date.getHours();
  if (m > 30) { h++; m = 0; }
  else if (m > 0) { m = 30; }
  if (h >= 24) { h = 23; m = 30; }
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const LS_KEY = "examflow-herplan-eindtijd";

export default function HerplanModal({ sessies, bestaandeSessies, vakken, vakInfo, datum, onBevestig, onClose }: HerplanModalProps) {
  const [startTijd, setStartTijd] = useState(roundUpTo30(new Date()));
  const [eindTijd, setEindTijd] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LS_KEY) ?? "23:30";
    }
    return "23:30";
  });
  const [resultaat, setResultaat] = useState<HerplanResultaat | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Sla eindtijd op in localStorage
  useEffect(() => {
    localStorage.setItem(LS_KEY, eindTijd);
  }, [eindTijd]);

  const beschikbaar = berekenBeschikbareTijd(startTijd, eindTijd);

  function valideer(): string | null {
    const startMin = startTijd.split(":").map(Number).reduce((h, m) => h * 60 + m);
    const eindMin = eindTijd.split(":").map(Number).reduce((h, m) => h * 60 + m);
    if (eindMin <= startMin) return "Eindtijd moet na starttijd liggen";
    if (eindMin - startMin < 30) return "Minimaal 30 minuten verschil nodig";
    return null;
  }

  function bereken() {
    const err = valideer();
    if (err) { setError(err); return; }
    setError("");
    const res = herplanDag(sessies, startTijd, eindTijd, vakInfo, bestaandeSessies);
    setResultaat(res);
  }

  async function bevestig() {
    if (!resultaat) return;
    setSaving(true);
    await onBevestig(resultaat.sessies);
    setSaving(false);
    onClose();
  }

  function vakNaam(vakId: string): string {
    return vakken.find(v => v.id === vakId)?.naam ?? vakId;
  }

  function vakKleur(vakId: string): string {
    return vakken.find(v => v.id === vakId)?.kleur ?? "#2563EB";
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} onClick={onClose} />
      <div style={{
        position: "relative", background: "white", borderRadius: 16, padding: 24,
        width: "90%", maxWidth: 420, maxHeight: "85vh", overflowY: "auto",
        boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", margin: 0 }}>Herplanning</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 18, color: "#94A3B8", cursor: "pointer" }}>✕</button>
        </div>

        <p style={{ fontSize: 13, color: "#64748B", marginBottom: 16, lineHeight: 1.5 }}>
          {sessies.length} sessie{sessies.length !== 1 ? "s" : ""} herplannen voor {datum}
        </p>

        {/* Tijdinvoer */}
        <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Studeren vanaf</label>
            <input
              type="time"
              value={startTijd}
              onChange={e => { setStartTijd(e.target.value); setResultaat(null); }}
              style={{
                width: "100%", padding: "8px 10px", borderRadius: 8,
                border: "1px solid #E8ECF0", fontSize: 14, color: "#0F172A",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Studeren tot</label>
            <input
              type="time"
              value={eindTijd}
              onChange={e => { setEindTijd(e.target.value); setResultaat(null); }}
              style={{
                width: "100%", padding: "8px 10px", borderRadius: 8,
                border: "1px solid #E8ECF0", fontSize: 14, color: "#0F172A",
              }}
            />
          </div>
        </div>

        {/* Beschikbare tijd */}
        {beschikbaar.nettoMin > 0 && (
          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "8px 12px", marginBottom: 16, fontSize: 12, color: "#166534" }}>
            ~{beschikbaar.nettoMin} minuten beschikbaar ({beschikbaar.pauzeMin} min pauzes)
          </div>
        )}

        {error && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#991B1B" }}>
            {error}
          </div>
        )}

        {/* Preview */}
        {resultaat && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Preview</p>

            {resultaat.sessies.map((s, i) => {
              const ingekortInfo = resultaat.ingekort.find(ik => ik.sessie.id === s.id);
              return (
                <div key={s.id} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 10px", marginBottom: 4,
                  borderRadius: 8, border: "1px solid #E8ECF0",
                  borderLeft: `3px solid ${vakKleur(s.vakId)}`,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#0F172A" }}>{vakNaam(s.vakId)}</div>
                    <div style={{ fontSize: 11, color: "#64748B" }}>
                      {s.startTijd} – {minNaarTijd(s.startTijd.split(":").map(Number).reduce((h, m) => h * 60 + m) + s.duurMinuten)} · {s.duurMinuten} min
                    </div>
                  </div>
                  {ingekortInfo && (
                    <span style={{ fontSize: 10, background: "#FEF3C7", color: "#92400E", padding: "2px 6px", borderRadius: 12, fontWeight: 500 }}>
                      {ingekortInfo.origineel} → {ingekortInfo.nieuw} min
                    </span>
                  )}
                </div>
              );
            })}

            {resultaat.weggelaten.map((w, i) => (
              <div key={`weg-${i}`} style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 10px", marginBottom: 4,
                borderRadius: 8, border: "1px solid #FECACA",
                background: "#FEF2F2", opacity: 0.7,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#991B1B" }}>{vakNaam(w.sessie.vakId)}</div>
                  <div style={{ fontSize: 11, color: "#B91C1C" }}>{w.reden}</div>
                </div>
                <span style={{ fontSize: 10, color: "#991B1B" }}>✕</span>
              </div>
            ))}
          </div>
        )}

        {/* Knoppen */}
        <div style={{ display: "flex", gap: 8 }}>
          {!resultaat ? (
            <button
              onClick={bereken}
              style={{
                flex: 1, padding: "10px 0", borderRadius: 8,
                background: "#2563EB", color: "white", border: "none",
                fontSize: 13, fontWeight: 500, cursor: "pointer",
              }}
            >
              Bereken herplanning
            </button>
          ) : (
            <>
              <button
                onClick={() => setResultaat(null)}
                style={{
                  flex: 1, padding: "10px 0", borderRadius: 8,
                  background: "white", color: "#374151",
                  border: "1px solid #E8ECF0", fontSize: 13, cursor: "pointer",
                }}
              >
                Opnieuw
              </button>
              <button
                onClick={bevestig}
                disabled={saving || resultaat.sessies.length === 0}
                style={{
                  flex: 2, padding: "10px 0", borderRadius: 8,
                  background: saving ? "#94A3B8" : "#16A34A", color: "white",
                  border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer",
                }}
              >
                {saving ? "Opslaan..." : `Bevestig (${resultaat.sessies.length} sessies)`}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import { Portal } from "@/components/Portal";
import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";

interface TimerCheckInProps {
  sessie: StudieSessie | null;
  vak: Vak | null;
  onKlaar: () => void;
  onMeerTijd: (minuten: number) => void;
  onPauze: () => void;
}

export default function TimerCheckIn({ sessie, vak, onKlaar, onMeerTijd, onPauze }: TimerCheckInProps) {
  const onderwerp = sessie?.syllabusItem ?? sessie?.eigenTitel ?? null;

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
          padding: 28, width: "100%", maxWidth: 380,
          border: "1px solid #E8ECF0",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>⏱</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0F172A", margin: "0 0 4px" }}>
              Tijd is op!
            </h3>
            {sessie && vak && (
              <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                {vak.naam}{onderwerp ? ` · ${onderwerp}` : ""}
              </p>
            )}
          </div>

          <p style={{ fontSize: 14, color: "#374151", textAlign: "center", marginBottom: 16 }}>
            Hoe ver ben je?
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button
              onClick={onKlaar}
              style={{
                padding: "12px 0", borderRadius: 10,
                border: "1px solid #BBF7D0", background: "#F0FDF4",
                color: "#16A34A", fontSize: 14, fontWeight: 600,
                cursor: "pointer", width: "100%",
              }}
            >
              ✓ Klaar met dit onderwerp
            </button>
            <button
              onClick={onPauze}
              style={{
                padding: "12px 0", borderRadius: 10,
                border: "1px solid #E8ECF0", background: "#F8F9FC",
                color: "#64748B", fontSize: 14, fontWeight: 500,
                cursor: "pointer", width: "100%",
              }}
            >
              → Ga door naar pauze
            </button>
          </div>

          {sessie && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
                <div style={{ flex: 1, height: 1, background: "#E8ECF0" }} />
                <span style={{ fontSize: 12, color: "#94A3B8", whiteSpace: "nowrap" }}>
                  Of ik heb meer tijd nodig
                </span>
                <div style={{ flex: 1, height: 1, background: "#E8ECF0" }} />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[15, 30, 45].map(min => (
                  <button
                    key={min}
                    onClick={() => onMeerTijd(min)}
                    style={{
                      flex: 1, padding: "10px 0", borderRadius: 10,
                      border: "1px solid #BFDBFE", background: "#EFF6FF",
                      color: "#2563EB", fontSize: 13, fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    +{min} min
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Portal>
  );
}

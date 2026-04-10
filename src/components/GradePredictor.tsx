"use client";
import Link from "next/link";
import { wegingLabel } from "@/lib/helpers";
import { Onderwijsniveau } from "@/types";

interface Props {
  seCijfer: number | null;
  streefCijfer?: number | null;
  niveau: Onderwijsniveau;
}

const DOELEN = [5.5, 6.0, 7.0, 8.0];

export default function GradePredictor({ seCijfer, streefCijfer, niveau }: Props) {
  return (
    <div className="card">
      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#64748B" }}>
        Cijferberekening
      </p>
      <p className="text-xs mb-4" style={{ color: "#94A3B8" }}>{wegingLabel(niveau)}</p>

      {!seCijfer ? (
        <div style={{
          padding: "10px 12px",
          background: "#FFFBEB",
          borderRadius: 8,
          border: "1px solid #FDE68A",
          fontSize: 13,
          color: "#92400E",
        }}>
          Vul je SE cijfer in via{" "}
          <Link href="/instellingen#cijfers" style={{ color: "#2563EB", textDecoration: "underline" }}>
            Instellingen
          </Link>
          {" "}voor een automatische berekening.
        </div>
      ) : (
        <div>
          <div style={{ fontSize: 13, color: "#64748B", marginBottom: 12 }}>
            SE cijfer: <strong>{seCijfer.toFixed(1)}</strong>
            {" · "}
            <Link href="/instellingen#cijfers" style={{ color: "#2563EB", fontSize: 12, textDecoration: "none" }}>
              Aanpassen
            </Link>
          </div>

          <div style={{ fontSize: 13 }}>
            {streefCijfer != null && (() => {
              const ceNodig = streefCijfer * 2 - seCijfer;
              const haalbaar = ceNodig >= 1.0 && ceNodig <= 10.0;
              return (
                <>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 0", borderBottom: "1px solid #F1F5F9",
                  }}>
                    <span style={{ color: "#64748B", display: "flex", alignItems: "center", gap: 6 }}>
                      Voor een {streefCijfer.toFixed(1)}
                      <span style={{ fontSize: 11, color: "#9CA3AF" }}>(jouw doel)</span>
                    </span>
                    <span style={{
                      color: !haalbaar
                        ? ceNodig < 1.0 ? "#16A34A" : "#DC2626"
                        : ceNodig <= 5.5 ? "#16A34A"
                        : ceNodig <= 7.5 ? "#D97706"
                        : "#DC2626",
                    }}>
                      {!haalbaar
                        ? ceNodig < 1.0 ? "Al gehaald ✓" : "Niet haalbaar"
                        : `CE nodig: ${ceNodig.toFixed(1)}`}
                    </span>
                  </div>
                  <div style={{ borderBottom: "2px solid #E2E8F0" }} />
                </>
              );
            })()}

            {DOELEN.map(doel => {
              const ceNodig = doel * 2 - seCijfer;
              const haalbaar = ceNodig >= 1.0 && ceNodig <= 10.0;

              return (
                <div key={doel} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderBottom: "1px solid #F1F5F9",
                }}>
                  <span style={{ color: "#64748B" }}>
                    Voor een {doel.toFixed(1)}
                  </span>
                  <span style={{
                    color: !haalbaar
                      ? ceNodig < 1.0 ? "#16A34A" : "#DC2626"
                      : ceNodig <= 5.5 ? "#16A34A"
                      : ceNodig <= 7.5 ? "#D97706"
                      : "#DC2626",
                  }}>
                    {!haalbaar
                      ? ceNodig < 1.0 ? "Al gehaald ✓" : "Niet haalbaar"
                      : `CE nodig: ${ceNodig.toFixed(1)}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

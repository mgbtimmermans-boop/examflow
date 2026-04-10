"use client";
import { useState } from "react";
import { StudieSessie } from "@/types/agenda";
import { Vak } from "@/types";

interface SessieBlokProps {
  sessie: StudieSessie;
  vak: Vak;
  onVoltooid: (id: string, voltooid: boolean) => void;
  onEdit: (sessie: StudieSessie) => void;
  onVerwijder: (id: string) => void;
}

// ─── SVG icons ────────────────────────────────────────────────────────────────

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function EditIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function TrashIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

// ─── component ────────────────────────────────────────────────────────────────

export default function SessieBlok({ sessie, vak, onVoltooid, onEdit, onVerwijder }: SessieBlokProps) {
  const [isOpen,            setIsOpen]            = useState(false);
  const [isHovered,         setIsHovered]         = useState(false);
  const [checkHover,        setCheckHover]        = useState(false);
  const [editHover,         setEditHover]         = useState(false);
  const [deleteHover,       setDeleteHover]       = useState(false);
  const [bevestigVerwijder, setBevestigVerwijder] = useState(false);

  const onderwerp = sessie.syllabusItem ?? sessie.eigenTitel ?? "Eigen onderwerp";
  const voltooid  = sessie.voltooid;

  return (
    <div
      onClick={() => setIsOpen(o => !o)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCheckHover(false); setEditHover(false); setDeleteHover(false); setBevestigVerwijder(false); }}
      style={{
        background:   voltooid ? "#F0FDF4" : "#FFFFFF",
        borderTop:    "1px solid #E8ECF0",
        borderRight:  "1px solid #E8ECF0",
        borderBottom: "1px solid #E8ECF0",
        borderLeft:   `3px solid ${voltooid ? "#16A34A" : vak.kleur}`,
        borderRadius: 8,
        padding:      "6px 8px",
        cursor:       "pointer",
        maxWidth:     "100%",
        overflow:     "hidden",
        opacity:      voltooid ? 0.6 : 1,
        userSelect:   "none",
      }}
    >
      {/* ── Rij 1: dot · naam · tijd · iconen ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {/* Gekleurde dot */}
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: vak.kleur, flexShrink: 0,
        }} />

        {/* Vaknaam */}
        <span style={{
          fontSize: 12, fontWeight: 600, color: "#0F172A",
          flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          textDecoration: voltooid ? "line-through" : "none",
        }}>
          {vak.naam}
        </span>

        {/* Starttijd */}
        <span style={{ fontSize: 11, color: "#94A3B8", flexShrink: 0, marginRight: 2 }}>
          {sessie.startTijd}
        </span>

        {/* Actie-iconen — alleen zichtbaar bij hover */}
        <div style={{
          display: "flex", alignItems: "center", gap: 1,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.12s",
          flexShrink: 0,
        }}>
          {/* ✓ Voltooid */}
          <button
            onClick={e => { e.stopPropagation(); onVoltooid(sessie.id, !voltooid); }}
            onMouseEnter={e => { e.stopPropagation(); setCheckHover(true); }}
            onMouseLeave={e => { e.stopPropagation(); setCheckHover(false); }}
            title={voltooid ? "Markeer onvoltooid" : "Markeer voltooid"}
            style={iconBtn}
          >
            <CheckIcon color={checkHover || voltooid ? "#16A34A" : "#CBD5E1"} />
          </button>

          {/* ✎ Bewerken */}
          <button
            onClick={e => { e.stopPropagation(); onEdit(sessie); }}
            onMouseEnter={e => { e.stopPropagation(); setEditHover(true); }}
            onMouseLeave={e => { e.stopPropagation(); setEditHover(false); }}
            title="Bewerken"
            style={iconBtn}
          >
            <EditIcon color={editHover ? "#2563EB" : "#CBD5E1"} />
          </button>

          {/* × Verwijderen */}
          <button
            onClick={e => { e.stopPropagation(); setBevestigVerwijder(true); }}
            onMouseEnter={e => { e.stopPropagation(); setDeleteHover(true); }}
            onMouseLeave={e => { e.stopPropagation(); setDeleteHover(false); }}
            title="Verwijderen"
            style={iconBtn}
          >
            <TrashIcon color={deleteHover || bevestigVerwijder ? "#DC2626" : "#CBD5E1"} />
          </button>
        </div>
      </div>

      {/* ── Rij 2: onderwerp ── */}
      <p style={{
        fontSize: 13, margin: "2px 0 0",
        paddingLeft: 11, // uitlijning onder vaknaam
        color: voltooid ? "#94A3B8" : "#374151",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        textDecoration: voltooid ? "line-through" : "none",
        lineHeight: 1.35,
      }}>
        {onderwerp}
      </p>

      {/* ── Uitgeklapt: duur · doel · notitie ── */}
      {isOpen && (
        <div style={{
          paddingLeft: 11, marginTop: 6,
          borderTop: "1px solid #F1F5F9", paddingTop: 6,
        }}>
          <p style={{ fontSize: 11, color: "#94A3B8", margin: "0 0 2px" }}>
            {sessie.duurMinuten} min
            {sessie.doel && (
              <span style={{ marginLeft: 8, color: "#2563EB", fontStyle: "normal" }}>
                🎯 {sessie.doel}
              </span>
            )}
          </p>
          {sessie.notitie && (
            <p style={{
              fontSize: 12, color: "#94A3B8", fontStyle: "italic",
              margin: 0, lineHeight: 1.45,
              whiteSpace: "pre-wrap", wordBreak: "break-word",
            }}>
              {sessie.notitie}
            </p>
          )}
        </div>
      )}

      {/* ── Inline bevestiging verwijderen ── */}
      {bevestigVerwijder && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            display: "flex", gap: 6, alignItems: "center",
            marginTop: 6, padding: "4px 0",
          }}
        >
          <span style={{ fontSize: 11, color: "#DC2626" }}>Verwijderen?</span>
          <button
            onClick={e => { e.stopPropagation(); onVerwijder(sessie.id); }}
            style={{
              fontSize: 11, padding: "2px 8px", borderRadius: 6,
              background: "#DC2626", color: "#FFFFFF",
              border: "none", cursor: "pointer",
            }}
          >
            Ja
          </button>
          <button
            onClick={e => { e.stopPropagation(); setBevestigVerwijder(false); }}
            style={{
              fontSize: 11, padding: "2px 8px", borderRadius: 6,
              background: "#F1F5F9", color: "#64748B",
              border: "none", cursor: "pointer",
            }}
          >
            Nee
          </button>
        </div>
      )}
    </div>
  );
}

const iconBtn: React.CSSProperties = {
  width: 22, height: 22,
  background: "none", border: "none",
  cursor: "pointer", padding: 0, flexShrink: 0,
  display: "flex", alignItems: "center", justifyContent: "center",
};

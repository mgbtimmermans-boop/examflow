"use client";
import { useEffect } from "react";
import { Portal } from "@/components/Portal";
import Logo from "@/components/Logo";
import Link from "next/link";

interface Props {
  niveauLabel: string;
  profielLbl: string;
  onAanpassen: () => void;
  onFocusMode: () => void;
  onSignOut: () => void;
  onClose: () => void;
}

export default function MobileMenu({ niveauLabel, profielLbl, onAanpassen, onFocusMode, onSignOut, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const itemStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 12,
    padding: "12px", borderRadius: 10,
    fontSize: 14, fontWeight: 500, minHeight: 44,
    color: "#374151", background: "none", border: "none",
    cursor: "pointer", textDecoration: "none", width: "100%",
    textAlign: "left" as const,
  };

  return (
    <Portal>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, zIndex: 9990, background: "rgba(0,0,0,0.3)" }}
      />

      {/* Slide-in panel */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0,
          width: 280, zIndex: 9991,
          background: "#FFFFFF", borderRight: "1px solid #E8ECF0",
          display: "flex", flexDirection: "column", overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #E8ECF0" }}>
          <Logo size="sm" />
        </div>

        {/* Niveau badge */}
        {niveauLabel && (
          <div style={{ margin: "12px 12px 0", padding: "8px 12px", borderRadius: 10, background: "#EFF6FF" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#2563EB" }}>
              {niveauLabel}{profielLbl && profielLbl !== "MAVO" ? ` · ${profielLbl}` : ""}
            </span>
          </div>
        )}

        {/* Nav items */}
        <nav style={{ flex: 1, padding: "8px 12px" }}>
          <Link href="/rooster" onClick={onClose} style={itemStyle}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Rooster
          </Link>

          <Link href="/agenda" onClick={onClose} style={itemStyle}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
              <line x1="8" y1="14" x2="8" y2="14" strokeLinecap="round" strokeWidth="2.5"/>
              <line x1="12" y1="14" x2="12" y2="14" strokeLinecap="round" strokeWidth="2.5"/>
              <line x1="16" y1="14" x2="16" y2="14" strokeLinecap="round" strokeWidth="2.5"/>
            </svg>
            Agenda
          </Link>

          <Link href="/biosync" onClick={onClose} style={itemStyle}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Bio-Sync
          </Link>

          <button onClick={() => { onAanpassen(); onClose(); }} style={itemStyle}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Aanpassen
          </button>

          <button onClick={() => { onFocusMode(); onClose(); }} style={itemStyle}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Focus Mode
          </button>
        </nav>

        {/* Footer */}
        <div style={{ borderTop: "1px solid #E8ECF0", padding: 12 }}>
          <button onClick={() => { onSignOut(); onClose(); }}
            style={{ ...itemStyle, color: "#EF4444" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round"/>
              <polyline points="16 17 21 12 16 7" strokeLinecap="round"/>
              <line x1="21" y1="12" x2="9" y2="12" strokeLinecap="round"/>
            </svg>
            Uitloggen
          </button>
        </div>
      </div>
    </Portal>
  );
}

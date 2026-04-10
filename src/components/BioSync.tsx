"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Vak } from "@/types";

// ─── Slaapadvies ──────────────────────────────────────────────────────────────

export interface SlaapAdvies {
  slapenOm: string;
  wakkerOm: string;
  cycli: number;
  tip: string;
  ochtendTip: string | null;
}

function tijdNaarMinuten(tijd: string): number {
  const [u, m] = tijd.split(":").map(Number);
  return u * 60 + (m ?? 0);
}

function minutenNaarTijd(min: number): string {
  const uur = Math.floor(min / 60) % 24;
  const minuten = min % 60;
  return `${String(uur).padStart(2, "0")}:${String(minuten).padStart(2, "0")}`;
}

function berekenOptimaleWektijd(bedtijd: string, examTijd: string) {
  const bedtijdMin = tijdNaarMinuten(bedtijd);
  const examMin = tijdNaarMinuten(examTijd);
  const maximaleWektijdMin = examMin - 90;
  const beschikbaar = maximaleWektijdMin - bedtijdMin;
  const cycli = Math.min(Math.max(Math.floor(beschikbaar / 90), 1), 5);
  const slaapMin = cycli * 90;
  return {
    wektijd: minutenNaarTijd(bedtijdMin + slaapMin),
    cycli,
    slaapMinuten: slaapMin,
  };
}

export function berekenSlaapAdvies(vak: Vak, bedtijd = "23:00"): SlaapAdvies | null {
  if (!vak.tijd || !vak.examDatum) return null;
  const [uur] = vak.tijd.split(":").map(Number);
  const isOchtend = uur < 12;
  const { wektijd, cycli } = berekenOptimaleWektijd(bedtijd, vak.tijd);
  const slaapUren = ((cycli * 90) / 60).toFixed(1).replace(".", ",");

  if (isOchtend) {
    return {
      slapenOm: bedtijd,
      wakkerOm: wektijd,
      cycli,
      tip: `${slaapUren} uur slaap · ${cycli} cycli. Leg je telefoon 30 min voor bedtijd weg. Zet twee wekkers.`,
      ochtendTip: null,
    };
  } else {
    return {
      slapenOm: bedtijd,
      wakkerOm: wektijd,
      cycli,
      tip: `${slaapUren} uur slaap · ${cycli} cycli. Zelfde bedtijd als normaal — je lichaam houdt van ritme.`,
      ochtendTip: "Gebruik de ochtend voor een rustige laatste herhaling. Geen nieuwe stof meer leren.",
    };
  }
}

// ─── SlaapAdviesKaart ─────────────────────────────────────────────────────────

export function SlaapAdviesKaart({ vak, daysLeft, bedtijd = "23:00", onBedtijdBewerken }: { vak: Vak; daysLeft: number; bedtijd?: string; onBedtijdBewerken?: () => void }) {
  if (daysLeft > 3 || daysLeft < 0) return null;
  const advies = berekenSlaapAdvies(vak, bedtijd);
  if (!advies) return null;

  return (
    <div className="card" style={{ background: "#F8F0FF", border: "1px solid #E9D5FF" }}>
      <p className="label mb-3" style={{ color: "#9333EA" }}>🌙 Slaapadvies voor morgenavond</p>
      <div style={{ display: "flex", gap: 28, marginBottom: 12 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9333EA", marginBottom: 4 }}>
            Mijn bedtijd
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <p style={{ fontSize: 28, fontWeight: 600, color: "#7C3AED", lineHeight: 1 }}>
              {advies.slapenOm}
            </p>
            {onBedtijdBewerken && (
              <button onClick={onBedtijdBewerken} style={{ fontSize: 10, color: "#A855F7", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                bewerken
              </button>
            )}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#9333EA", marginBottom: 4 }}>
            Optimaal wakker
          </p>
          <p style={{ fontSize: 28, fontWeight: 600, color: "#7C3AED", lineHeight: 1 }}>
            {advies.wakkerOm}
          </p>
        </div>
      </div>
      <p style={{ fontSize: 12, color: "#9333EA", marginBottom: 6 }}>
        {advies.cycli} slaapcycli · {((advies.cycli * 90) / 60).toFixed(1).replace(".", ",")} uur slaap
      </p>
      <p style={{ fontSize: 12, color: "#A855F7", fontStyle: "italic", marginBottom: advies.ochtendTip ? 10 : 0 }}>
        {advies.tip}
      </p>
      {advies.ochtendTip && (
        <div style={{ padding: "8px 10px", borderRadius: 8, background: "#F0FDF4", border: "1px solid #BBF7D0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", color: "#16A34A", marginBottom: 3 }}>
            Ochtend van het examen
          </p>
          <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{advies.ochtendTip}</p>
        </div>
      )}
    </div>
  );
}

// ─── Voedingstips ────────────────────────────────────────────────────────────

interface VoedingsItem {
  key: string;
  label: string;
  tip: string;
  defaultOpen: boolean;
}

const VOEDINGSTIPS = {
  week: {
    titel: "Voeding deze week",
    tips: [
      "Eet elke dag op vaste tijden — je hersenen houden van regelmaat.",
      "Vermijd grote hoeveelheden suiker en alcohol de hele examenweek.",
      "Drink minimaal 1,5 liter water per dag — uitdroging verlaagt concentratie meetbaar.",
      "Vette vis (zalm, makreel) 2× per week ondersteunt geheugen en concentratie.",
      "Slaap en voeding werken samen — een slechte nacht versterkt de effecten van slechte voeding.",
    ],
  },
  ochtend: {
    titel: "Voeding · Ochtendexamen (09:00)",
    items: [
      { key: "avondervoor", label: "Avond ervoor", tip: "Normale, niet te zware maaltijd. Pasta, rijst of aardappelen met groenten is ideaal. Geen grote biefstuk of vette hap — dat verstoort je slaap.", defaultOpen: false },
      { key: "ontbijt", label: "Ontbijt (07:00–07:30)", tip: "Havermout met banaan, volkoren brood met pindakaas of eieren. Dit geeft 3–4 uur langzame energie zonder piek en dal.", defaultOpen: true },
      { key: "drinken", label: "Drinken", tip: "500ml water voor het examen. Geen energydrank — de crash komt precies tijdens je examen. Geen koffie op een lege maag.", defaultOpen: false },
      { key: "vermijd", label: "Vermijd", tip: "Suikerrijke cornflakes, witbrood met hagelslag, frisdrank, energydrank. Deze geven een suikerpiek gevolgd door een concentratiedip na 45–60 minuten.", defaultOpen: false },
      { key: "meenemen", label: "Neem mee", tip: "Doorzichtige fles water. Eventueel een stuk fruit voor na het examen.", defaultOpen: false },
    ] as VoedingsItem[],
  },
  middag: {
    titel: "Voeding · Middagexamen (13:30)",
    items: [
      { key: "avondervoor", label: "Avond ervoor", tip: "Normaal eten. Geen bijzonderheden — je hebt de volgende ochtend nog ruim de tijd.", defaultOpen: false },
      { key: "ontbijt", label: "Ontbijt (gewoon normaal)", tip: "Eet normaal ontbijt op je vaste tijd. Geen reden om later op te staan of iets speciaals te doen.", defaultOpen: false },
      { key: "lunch", label: "Lunch (rond 11:30 — NIET vlak voor het examen)", tip: "Eet om 11:30, niet om 12:30. Een volle maag vlak voor het examen geeft een middagdip. Kies: volkoren brood, soep, salade met ei of kip. Geen zware warme maaltijd.", defaultOpen: true },
      { key: "drinken", label: "Drinken", tip: "Drink de hele ochtend door water. Geen koffie na 11:00 — dat geeft onrust precies als je moet presteren.", defaultOpen: false },
      { key: "vermijd", label: "Vermijd", tip: "Zware warme lunch vlak voor het examen (12:00–13:00). Je spijsvertering trekt bloed weg van je hersenen. Ook: energydrank en een overgeslagen maaltijd.", defaultOpen: false },
      { key: "meenemen", label: "Neem mee", tip: "Doorzichtige fles water. Eventueel nootjes of fruit als je nerveus bent en niet goed hebt kunnen eten.", defaultOpen: false },
    ] as VoedingsItem[],
  },
};

function UitklapRij({ item, open, onToggle }: { item: VoedingsItem; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid #D1FAE5" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "9px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 500, color: "#16A34A" }}>{item.label}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.18 }}
          style={{ display: "flex", alignItems: "center", color: "#86EFAC", flexShrink: 0 }}
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.55, paddingBottom: 10 }}>
              {item.tip}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function VoedingsTipKaart({ vak, daysLeft }: { vak: Vak; daysLeft: number }) {
  if (!vak.tijd || daysLeft > 7 || daysLeft <= 0) return null;

  const isOchtend = parseInt(vak.tijd.split(":")[0]) < 12;
  const examData = isOchtend ? VOEDINGSTIPS.ochtend : VOEDINGSTIPS.middag;

  const [outerOpen, setOuterOpen] = useState(daysLeft === 1);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() =>
    examData.items.reduce((acc, item) => ({ ...acc, [item.key]: item.defaultOpen }), {} as Record<string, boolean>)
  );

  function toggleItem(key: string) {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  }

  const isUrgent = daysLeft === 1;
  const borderColor = isUrgent ? "#FDE68A" : "#BBF7D0";

  if (daysLeft >= 2) {
    // Week tips — collapsed outer kaartje
    return (
      <div className="card" style={{ background: "#F0FDF4", border: `1px solid ${borderColor}`, padding: 0, overflow: "hidden" }}>
        <button
          onClick={() => setOuterOpen(o => !o)}
          style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 16px", background: "none", border: "none", cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: "#16A34A" }}>🥗 {VOEDINGSTIPS.week.titel}</span>
          <motion.span
            animate={{ rotate: outerOpen ? 90 : 0 }}
            transition={{ duration: 0.18 }}
            style={{ color: "#86EFAC", display: "flex" }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {outerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 16px 14px" }}>
                {VOEDINGSTIPS.week.tips.map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: "#86EFAC", flexShrink: 0, marginTop: 1 }}>·</span>
                    <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // daysLeft === 1 — exam-specific tips, auto-expanded
  return (
    <div className="card" style={{ background: "#F0FDF4", border: `1px solid ${borderColor}` }}>
      <p className="label mb-3" style={{ color: "#16A34A" }}>🥗 {examData.titel}</p>
      {examData.items.map(item => (
        <UitklapRij
          key={item.key}
          item={item}
          open={openItems[item.key] ?? item.defaultOpen}
          onToggle={() => toggleItem(item.key)}
        />
      ))}
    </div>
  );
}


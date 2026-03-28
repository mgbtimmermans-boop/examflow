"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Vak, Onderwijsniveau, Profiel } from "@/types";
import { useAICoach } from "@/hooks/useAICoach";
import { Portal } from "@/components/Portal";

type Modus = "uitlegger" | "overhoorder" | "motivator";

interface AICoachProps {
  vak: Vak;
  onderwerp: string;
  niveau: Onderwijsniveau;
  profiel: Profiel;
  voortgang: { vakNaam: string; pctAfgevinkt: number; confidenceScore: number; };
  onClose: () => void;
}

export default function AICoach({ vak, onderwerp, niveau, profiel, voortgang, onClose }: AICoachProps) {
  const [modus, setModus] = useState<Modus>("uitlegger");
  const [userInput, setUserInput] = useState("");
  const { response, loading, error, askCoach, reset } = useAICoach();

  const modussen: { key: Modus; label: string }[] = [
    { key: "uitlegger", label: "Uitlegger" },
    { key: "overhoorder", label: "Overhoorder" },
    { key: "motivator", label: "Coach" },
  ];

  const handleModus = (m: Modus) => {
    setModus(m);
    setUserInput("");
    reset();
  };

  const handleVerstuur = () => {
    const req = {
      modus,
      vak: vak.naam,
      onderwerp,
      niveau,
      profiel,
      userInput: modus === "motivator"
        ? `${voortgang.pctAfgevinkt}% van syllabus afgevinkt, zelfvertrouwen ${voortgang.confidenceScore}/10 voor ${voortgang.vakNaam}`
        : (userInput || undefined),
    };
    askCoach(req);
  };

  const tabStyle = (active: boolean) => active
    ? { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE", borderRadius: 8 }
    : { background: "transparent", color: "#64748B", border: "1px solid #E8ECF0", borderRadius: 8 };

  return (
    <Portal>
      {/* Backdrop — desktop only (panel is fullscreen on mobile) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="hidden sm:block fixed inset-0"
        style={{ background: "rgba(15,23,42,0.3)", zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Panel — fullscreen on mobile, 400px slide-in on desktop */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.25 }}
        className="fixed inset-0 sm:inset-auto sm:right-0 sm:top-0 sm:bottom-0 sm:w-[400px] flex flex-col"
        style={{ zIndex: 9999, background: "#FFFFFF", boxShadow: "-4px 0 24px rgba(0,0,0,0.08)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid #E8ECF0" }}>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#0F172A" }}>AI Coach</p>
            <p className="text-xs mt-0.5 truncate max-w-[280px]" style={{ color: "#64748B" }}>{onderwerp}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" style={{ minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#64748B" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/></svg>
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 p-4" style={{ borderBottom: "1px solid #F1F5F9" }}>
          {modussen.map(m => (
            <button key={m.key} onClick={() => handleModus(m.key)}
              className="flex-1 py-2 text-xs font-medium transition-colors"
              style={{ ...tabStyle(modus === m.key), minHeight: 36 }}>
              {m.label}
            </button>
          ))}
        </div>

        {/* Response area */}
        <div className="flex-1 overflow-y-auto p-4">
          {loading && (
            <div className="space-y-3">
              {[80, 60, 90].map((w, i) => (
                <div key={i} className="h-3 rounded-full animate-pulse" style={{ width: `${w}%`, background: "#E8ECF0" }} />
              ))}
            </div>
          )}

          {!loading && response && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
              className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "#374151" }}>
              {response}
            </motion.div>
          )}

          {!loading && !response && !error && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="text-sm" style={{ color: "#64748B" }}>
                {modus === "uitlegger" && "Klik 'Verstuur' voor een uitleg."}
                {modus === "overhoorder" && "Klik 'Genereer vraag' om te beginnen."}
                {modus === "motivator" && "Klik 'Analyseer' voor een peptalk."}
              </p>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg mt-2" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
              <span className="text-xs" style={{ color: "#DC2626" }}>Er ging iets mis. Probeer opnieuw.</span>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-4" style={{ borderTop: "1px solid #E8ECF0" }}>
          {modus !== "motivator" && (
            <textarea
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder={modus === "uitlegger" ? "Extra vragen of context..." : "Typ je antwoord hier..."}
              rows={3}
              className="w-full text-sm resize-none focus:outline-none leading-relaxed mb-3 p-3 rounded-xl"
              style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151" }}
            />
          )}
          <button onClick={handleVerstuur} disabled={loading}
            className="btn-primary w-full text-sm"
            style={{ opacity: loading ? 0.6 : 1, minHeight: 44 }}>
            {modus === "overhoorder" && !response ? "Genereer vraag" : modus === "motivator" ? "Analyseer" : "Verstuur"}
          </button>
        </div>
      </motion.div>
    </Portal>
  );
}

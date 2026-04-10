"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Vak, Onderwijsniveau, Profiel } from "@/types";
import { useZenTimer } from "@/hooks/useZenTimer";
import { Portal } from "@/components/Portal";
import AdemhalingOefening from "@/components/AdemhalingOefening";
import { StudieSessie } from "@/types/agenda";
import { useAgenda, getHuidigBlok, getBlokEindtijd, useHerplanLimiet } from "@/hooks/useAgenda";
import TimerCheckIn from "@/components/TimerCheckIn";
import HerplanningPreview from "@/components/HerplanningPreview";

type Geluid = "stilte" | "brown" | "lofi";
type Preset = "25_5" | "50_10" | "eigen" | "ingepland";

// ─── Audio helpers ────────────────────────────────────────────────────────────

function createBrownNoise(ctx: AudioContext, masterGain: GainNode): AudioBufferSourceNode {
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let lastOut = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    data[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = data[i];
    data[i] *= 3.5;
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  source.connect(masterGain);
  return source;
}

function createLoFiBeat(ctx: AudioContext, masterGain: GainNode): () => void {
  function playBass(time: number) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 80;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.6, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
    osc.connect(gain); gain.connect(masterGain);
    osc.start(time); osc.stop(time + 0.4);
  }
  function playChord(time: number, root: number) {
    [root, root * 1.189, root * 1.498].forEach(freq => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 1.8);
      osc.connect(gain); gain.connect(masterGain);
      osc.start(time); osc.stop(time + 1.8);
    });
  }
  function playHihat(time: number, volume = 0.3) {
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 8000;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    source.connect(filter); filter.connect(gain); gain.connect(masterGain);
    source.start(time); source.stop(time + 0.05);
  }
  const chords = [220, 174.6, 261.6, 196];
  const BEAT = 60 / 75;
  let beatIndex = 0;
  let scheduledUntil = ctx.currentTime;
  let stopped = false;
  function schedule() {
    if (stopped) return;
    while (scheduledUntil < ctx.currentTime + 0.3) {
      const t = scheduledUntil;
      const beat = beatIndex % 4;
      if (beat === 0 || beat === 2) playBass(t);
      if (beatIndex % 4 === 0) playChord(t, chords[Math.floor(beatIndex / 4) % chords.length]);
      playHihat(t, beat === 0 || beat === 2 ? 0.25 : 0.12);
      scheduledUntil += BEAT;
      beatIndex++;
    }
    setTimeout(schedule, 100);
  }
  schedule();
  return () => { stopped = true; };
}

// ─── Shared types ─────────────────────────────────────────────────────────────

interface ZenConfig {
  vak: Vak;
  doel: string;
  focusDuur: number;
  pauzeDuur: number;
  agendaSessieId?: string;
}

// ─── Goal modal ───────────────────────────────────────────────────────────────

interface VandaagSessie {
  sessieId: string;
  vakId: string;
  doel: string;
  vakNaam: string;
  kleur: string;
  duurMinuten: number;
}

interface GoalModalProps {
  vakken: Vak[];
  niveau: Onderwijsniveau;
  profiel: Profiel;
  vandaagSessies?: VandaagSessie[];
  onStart: (cfg: ZenConfig) => void;
  onClose: () => void;
}

function GoalModal({ vakken, vandaagSessies = [], onStart, onClose }: GoalModalProps) {
  const ceVakken = vakken.filter(v => !v.isSchoolexamen);
  const [selectedVakId, setSelectedVakId] = useState(ceVakken[0]?.id ?? "");
  const selectedVak = ceVakken.find(v => v.id === selectedVakId) ?? ceVakken[0];
  const [selectedDoel, setSelectedDoel] = useState(selectedVak?.syllabus[0] ?? "");
  const [preset, setPreset] = useState<Preset>("25_5");
  const [eigenFocus, setEigenFocus] = useState("25");
  const [eigenPauze, setEigenPauze] = useState("5");
  const [error, setError] = useState("");
  const [geselecteerdeIngeplandeSessie, setGeselecteerdeIngeplandeSessie] = useState<VandaagSessie | null>(null);
  const pendingDoel = useRef<string | null>(null);

  useEffect(() => {
    if (pendingDoel.current !== null) {
      setSelectedDoel(pendingDoel.current);
      pendingDoel.current = null;
    } else if (selectedVak) {
      setSelectedDoel(selectedVak.syllabus[0] ?? "");
    }
  }, [selectedVakId]); // eslint-disable-line react-hooks/exhaustive-deps

  const selecteerIngeplandeSessie = (s: VandaagSessie) => {
    setGeselecteerdeIngeplandeSessie(s);
    pendingDoel.current = s.doel;
    setSelectedVakId(s.vakId);
    setPreset("ingepland");
  };

  const vaste: { key: Preset; label: string }[] = [
    { key: "25_5", label: "25 / 5 min" },
    { key: "50_10", label: "50 / 10 min" },
    { key: "eigen", label: "Eigen tijd" },
  ];
  const presets: { key: Preset; label: string }[] = geselecteerdeIngeplandeSessie
    ? [...vaste, { key: "ingepland", label: `Ingepland (${geselecteerdeIngeplandeSessie.duurMinuten} min)` }]
    : vaste;

  const activePill = { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE", borderRadius: 8 };
  const inactivePill = { background: "#FFFFFF", color: "#64748B", border: "1px solid #E8ECF0", borderRadius: 8 };

  const handleStart = () => {
    if (!selectedVak || !selectedDoel) return;
    let focusDuur: number, pauzeDuur: number;
    if (preset === "25_5") { focusDuur = 25 * 60; pauzeDuur = 5 * 60; }
    else if (preset === "50_10") { focusDuur = 50 * 60; pauzeDuur = 10 * 60; }
    else if (preset === "ingepland" && geselecteerdeIngeplandeSessie) {
      focusDuur = geselecteerdeIngeplandeSessie.duurMinuten * 60;
      pauzeDuur = Math.max(5 * 60, Math.round(geselecteerdeIngeplandeSessie.duurMinuten / 5) * 60);
    } else {
      const f = parseInt(eigenFocus, 10);
      const p = parseInt(eigenPauze, 10);
      if (isNaN(f) || f < 1 || f > 120) { setError("Focus: 1–120 minuten."); return; }
      if (isNaN(p) || p < 1 || p > 120) { setError("Pauze: 1–120 minuten."); return; }
      focusDuur = f * 60; pauzeDuur = p * 60;
    }
    setError("");
    onStart({ vak: selectedVak, doel: selectedDoel, focusDuur, pauzeDuur, agendaSessieId: geselecteerdeIngeplandeSessie?.sessieId });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-end sm:items-center sm:justify-center sm:p-5"
      style={{ zIndex: 9999, background: "rgba(0,0,0,0.5)" }}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full sm:max-w-[440px] rounded-t-[20px] sm:rounded-2xl overflow-y-auto"
        style={{
          background: "#FFFFFF",
          padding: 28,
          position: "relative",
          border: "1px solid #E8ECF0",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          maxHeight: "90vh",
        }}
      >
        <p className="font-semibold mb-1" style={{ color: "#0F172A" }}>Start Focus Sessie</p>
        <p className="text-sm mb-5" style={{ color: "#64748B" }}>Kies een doel voor deze sessie:</p>

        {vandaagSessies.length > 0 && (
          <div className="mb-4">
            <p className="label mb-2 block">Vandaag ingepland</p>
            <div className="space-y-1.5">
              {vandaagSessies.map((s, i) => {
                const isSelected = geselecteerdeIngeplandeSessie === s;
                return (
                  <button
                    key={i}
                    onClick={() => selecteerIngeplandeSessie(s)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-left transition-colors"
                    style={{
                      background: isSelected ? "#EFF6FF" : "#F8F9FC",
                      border: `1px solid ${isSelected ? "#BFDBFE" : "#E8ECF0"}`,
                      color: "#374151",
                      cursor: "pointer",
                    }}
                    onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.borderColor = "#CBD5E1"; }}
                    onMouseLeave={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8ECF0"; }}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.kleur }} />
                    <span className="flex-1 min-w-0">
                      <span style={{ color: s.kleur, fontWeight: 600 }}>{s.vakNaam}</span>
                      {s.doel && <span style={{ color: "#64748B" }}> · {s.doel}</span>}
                    </span>
                    <span className="text-xs flex-shrink-0 font-medium" style={{ color: "#94A3B8" }}>
                      {s.duurMinuten} min
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {vandaagSessies.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ flex: 1, height: 1, background: "#E8ECF0" }} />
            <span style={{ fontSize: 12, color: "#94A3B8", flexShrink: 0, whiteSpace: "nowrap" }}>Of kies zelf</span>
            <div style={{ flex: 1, height: 1, background: "#E8ECF0" }} />
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <label className="label mb-1 block">Vak</label>
            <select value={selectedVakId} onChange={e => setSelectedVakId(e.target.value)}
              className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
              style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151" }}>
              {ceVakken.map(v => <option key={v.id} value={v.id}>{v.naam}</option>)}
            </select>
          </div>
          <div>
            <label className="label mb-1 block">Doel</label>
            <select value={selectedDoel} onChange={e => setSelectedDoel(e.target.value)}
              className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
              style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151" }}>
              {(selectedVak?.syllabus ?? []).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label mb-2 block">Timer instelling</label>
            <div className="flex gap-2">
              {presets.map(p => (
                <button key={p.key} onClick={() => { setPreset(p.key); setError(""); }}
                  className="flex-1 py-1.5 text-xs font-medium transition-colors"
                  style={preset === p.key ? activePill : inactivePill}>
                  {p.label}
                </button>
              ))}
            </div>
            {preset === "eigen" && (
              <div className="flex gap-3 mt-3">
                <div className="flex-1">
                  <p className="text-xs mb-1" style={{ color: "#64748B" }}>Focus (min)</p>
                  <input type="number" min={1} max={120} value={eigenFocus}
                    onChange={e => setEigenFocus(e.target.value)}
                    className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                    style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151" }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs mb-1" style={{ color: "#64748B" }}>Pauze (min)</p>
                  <input type="number" min={1} max={120} value={eigenPauze}
                    onChange={e => setEigenPauze(e.target.value)}
                    className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                    style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151" }} />
                </div>
              </div>
            )}
            {preset === "ingepland" && geselecteerdeIngeplandeSessie && (
              <p className="text-xs mt-2" style={{ color: "#16A34A" }}>
                De duur van je ingeplande sessie wordt gebruikt als focustijd.
              </p>
            )}
            {error && <p className="text-xs mt-2" style={{ color: "#DC2626" }}>{error}</p>}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={onClose} className="btn-secondary flex-1 text-sm">Annuleren</button>
          <button onClick={handleStart} className="btn-primary flex-1 text-sm">Start Focus Mode →</button>
        </div>
      </div>
    </div>
  );
}

// ─── Focus overlay ────────────────────────────────────────────────────────────

interface ZenOverlayProps {
  config: ZenConfig;
  onClose: () => void;
  audioCtxRef: { current: AudioContext | null };
  masterGainRef: { current: GainNode | null };
  uid: string;
  sessies: StudieSessie[];
  confidenceScores: Record<string, number>;
  vakken: Vak[];
}

function ZenOverlay({ config, onClose, audioCtxRef, masterGainRef, uid, sessies, confidenceScores, vakken }: ZenOverlayProps) {
  const { vak, doel, focusDuur, pauzeDuur } = config;
  const { fase, seconds, running, setRunning, sessies: timerSessies, reset, skipPauze, extendFocus } = useZenTimer(focusDuur, pauzeDuur);
  const [geluid, setGeluid] = useState<Geluid>("stilte");
  const [volume, setVolume] = useState(50);
  const [ademOpen, setAdemOpen] = useState(false);

  const { markeerVoltooid, update } = useAgenda(uid);
  const { resterend: herplanResterend, checkEnVerhoog } = useHerplanLimiet(uid);

  const [showCheckIn, setShowCheckIn] = useState(false);
  const [herplanningData, setHerplanningData] = useState<{
    uitgelopenSessieId: string;
    extraMinuten: number;
    huidigBlok: StudieSessie[];
    blokEindtijd: string;
  } | null>(null);

  const agendaSessie = config.agendaSessieId
    ? (sessies.find(s => s.id === config.agendaSessieId) ?? null)
    : null;

  // Flash on phase switch
  const prevFaseRef = useRef(fase);
  const [flashBg, setFlashBg] = useState("transparent");
  useEffect(() => {
    if (fase !== prevFaseRef.current) {
      prevFaseRef.current = fase;
      const color = fase === "pauze" ? "rgba(16,185,129,0.15)" : "rgba(37,99,235,0.15)";
      setFlashBg(color);
      const t = setTimeout(() => setFlashBg("transparent"), 600);
      return () => clearTimeout(t);
    }
  }, [fase]);

  // Detect focus→pauze transition for check-in
  const checkInFaseRef = useRef<"focus" | "pauze">("focus");
  useEffect(() => {
    if (fase === "pauze" && checkInFaseRef.current === "focus" && config.agendaSessieId) {
      setRunning(false);
      setShowCheckIn(true);
    }
    checkInFaseRef.current = fase;
  }, [fase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Audio — session-local refs (brownSource, lofiStop stay in this component)
  const brownSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const lofiStopRef = useRef<(() => void) | null>(null);

  const stopAll = useCallback(() => {
    if (brownSourceRef.current) {
      try { brownSourceRef.current.stop(); } catch { /* already stopped */ }
      brownSourceRef.current = null;
    }
    if (lofiStopRef.current) {
      lofiStopRef.current();
      lofiStopRef.current = null;
    }
  }, []);

  const handleGeluid = useCallback((keuze: Geluid) => {
    stopAll();
    setGeluid(keuze);
    if (keuze === "stilte") return;

    const ctx = (() => {
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioContext();
      }
      if (!masterGainRef.current || masterGainRef.current.context !== audioCtxRef.current) {
        const mg = audioCtxRef.current.createGain();
        mg.gain.value = 0.5;
        mg.connect(audioCtxRef.current.destination);
        masterGainRef.current = mg;
      }
      return audioCtxRef.current;
    })();

    const mg = masterGainRef.current!;

    function startGeluid() {
      if (keuze === "brown") {
        const src = createBrownNoise(ctx, mg);
        src.start();
        brownSourceRef.current = src;
      } else if (keuze === "lofi") {
        lofiStopRef.current = createLoFiBeat(ctx, mg);
      }
    }

    if (ctx.state === "suspended") {
      ctx.resume().then(startGeluid);
    } else {
      startGeluid();
    }
  }, [stopAll]);

  function handleVolume(value: number) {
    setVolume(value);
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = (value / 100) * 0.7;
    }
  }

  useEffect(() => () => {
    stopAll();
    audioCtxRef.current?.close();
  }, [stopAll]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const focusMin = Math.floor(focusDuur / 60);

  const isFocus = fase === "focus";
  const timerColor = isFocus ? "#FFFFFF" : "#6EE7B7";
  const phaseLabel = isFocus ? "focus tijd" : "pauze — adem uit";
  const pillBg = isFocus ? "rgba(37,99,235,0.3)" : "rgba(16,185,129,0.3)";
  const pillColor = isFocus ? "#93C5FD" : "#6EE7B7";
  const pillText = isFocus ? "● Focus" : "● Pauze";
  const barColor = isFocus ? "#2563EB" : "#6EE7B7";

  const totalFase = isFocus ? focusDuur : pauzeDuur;
  const elapsed = totalFase - seconds;
  const barPct = totalFase > 0 ? Math.max(0, Math.min(100, (elapsed / totalFase) * 100)) : 0;

  const geluidKnoppen: { key: Geluid; label: string }[] = [
    { key: "stilte", label: "🤫 Stilte" },
    { key: "brown", label: "🟤 Brown Noise" },
    { key: "lofi", label: "🎵 Lo-fi" },
  ];

  const activeGeluidStyle = { background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", borderRadius: 8 };
  const inactiveGeluidStyle = { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", borderRadius: 8 };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0F172A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Flash overlay */}
      <motion.div
        animate={{ backgroundColor: flashBg }}
        transition={{ duration: 0.6 }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Naar vak */}
      {vak.id && (
        <button
          onClick={() => window.open(`/vak/${vak.id}`, "_blank")}
          className="absolute top-6 left-6 text-sm px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Naar vak
        </button>
      )}

      {/* Close */}
      <button onClick={onClose} className="absolute top-6 right-6 text-sm px-4 py-2 rounded-xl transition-colors"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
        Stoppen ×
      </button>

      <div className="text-center max-w-md w-full px-6" style={{ position: "relative", zIndex: 1 }}>
        <p className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{vak.naam}</p>
        <p className="text-lg font-medium mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>{doel}</p>

        {/* Phase pill */}
        <div className="flex justify-center mb-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: pillBg, color: pillColor }}>
            {pillText}
          </span>
        </div>

        {/* Timer */}
        <p className="font-mono font-semibold mb-2 transition-colors duration-500 text-[56px] sm:text-[72px]"
          style={{ color: timerColor, letterSpacing: "-3px", lineHeight: 1 }}>
          {mm}:{ss}
        </p>
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>{phaseLabel}</p>

        {/* Progress bar */}
        <div className="w-full mb-8 rounded-full overflow-hidden" style={{ height: 3, background: "rgba(255,255,255,0.1)" }}>
          <motion.div
            animate={{ width: `${barPct}%` }}
            transition={{ duration: 0.9, ease: "linear" }}
            className="h-full rounded-full"
            style={{ background: barColor }}
          />
        </div>

        {/* Pomodoro dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
              style={{ background: i < (timerSessies % 4) ? "#2563EB" : "rgba(255,255,255,0.15)" }} />
          ))}
          <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            Sessie {timerSessies + 1}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button onClick={() => setRunning(r => !r)}
            className="px-8 py-2.5 rounded-xl font-medium text-sm transition-colors"
            style={{ background: "#2563EB", color: "#FFFFFF" }}>
            {running ? "⏸ Pauzeer" : "▶ Start"}
          </button>
          {fase === "pauze" && (
            <button onClick={skipPauze} className="px-4 py-2.5 rounded-xl text-sm transition-colors"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
              ⏭ Sla pauze over
            </button>
          )}
          <button onClick={reset} className="px-4 py-2.5 rounded-xl text-sm transition-colors"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
            ↺ Reset
          </button>
        </div>

        {/* Ademhaling during pauze */}
        {fase === "pauze" && (
          <div className="mb-6">
            <button
              onClick={() => setAdemOpen(true)}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
            >
              🌬 Doe een ademhalingsoefening
            </button>
          </div>
        )}

        {/* Geluid */}
        <div className="mb-5">
          <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Geluid</p>
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {geluidKnoppen.map(g => (
              <button key={g.key} onClick={() => handleGeluid(g.key)}
                className="text-xs px-3 py-2 transition-colors"
                style={geluid === g.key ? activeGeluidStyle : inactiveGeluidStyle}>
                {g.label}
              </button>
            ))}
          </div>
          {geluid !== "stilte" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}
              className="flex items-center gap-3 justify-center">
              <span className="text-xs w-12 text-right" style={{ color: "rgba(255,255,255,0.35)" }}>Volume</span>
              <input type="range" min={0} max={100} value={volume}
                onChange={e => handleVolume(Number(e.target.value))}
                className="w-32 sm:w-32 flex-1 sm:flex-none" style={{ accentColor: "#FFFFFF" }} />
              <span className="text-xs w-8" style={{ color: "rgba(255,255,255,0.35)" }}>{volume}%</span>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Vandaag: {timerSessies} {timerSessies === 1 ? "sessie" : "sessies"} · {timerSessies * focusMin} min gefocust
        </p>
      </div>

      {ademOpen && <AdemhalingOefening onClose={() => setAdemOpen(false)} />}

      {showCheckIn && (
        <TimerCheckIn
          sessie={agendaSessie}
          vak={config.vak}
          onKlaar={() => {
            if (config.agendaSessieId) markeerVoltooid(config.agendaSessieId, true);
            setShowCheckIn(false);
            setRunning(true);
          }}
          onPauze={() => {
            setShowCheckIn(false);
            setRunning(true);
          }}
          onMeerTijd={(extraMinuten) => {
            setShowCheckIn(false);
            if (config.agendaSessieId) {
              const _now = new Date();
              const todayStr = `${_now.getFullYear()}-${String(_now.getMonth() + 1).padStart(2, "0")}-${String(_now.getDate()).padStart(2, "0")}`;
              const vandaagSessies = sessies.filter(s => s.datum === todayStr);
              const huidigBlok = getHuidigBlok(vandaagSessies, config.agendaSessieId!);
              const blokEindtijd = getBlokEindtijd(huidigBlok);
              setHerplanningData({ uitgelopenSessieId: config.agendaSessieId!, extraMinuten, huidigBlok, blokEindtijd });
            }
            extendFocus(extraMinuten * 60);
          }}
        />
      )}

      {herplanningData && (
        <HerplanningPreview
          uitgelopenSessieId={herplanningData.uitgelopenSessieId}
          extraMinuten={herplanningData.extraMinuten}
          huidigBlok={herplanningData.huidigBlok}
          blokEindtijd={herplanningData.blokEindtijd}
          vakken={vakken}
          confidenceScores={confidenceScores}
          herplanResterend={herplanResterend}
          onBevestig={async (nieuwePlannen) => {
            const toegestaan = await checkEnVerhoog();
            if (!toegestaan) return;
            for (const sessie of nieuwePlannen) {
              await update(sessie.id, { startTijd: sessie.startTijd, duurMinuten: sessie.duurMinuten });
            }
            setHerplanningData(null);
          }}
          onAnnuleer={() => setHerplanningData(null)}
        />
      )}
    </div>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────

interface ZenSuiteProps {
  onClose: () => void;
  vakken: Vak[];
  niveau: Onderwijsniveau;
  profiel: Profiel;
  vandaagSessies?: VandaagSessie[];
  uid: string;
  sessies?: StudieSessie[];
  confidenceScores?: Record<string, number>;
}

export default function ZenSuite({ onClose, vakken, niveau, profiel, vandaagSessies, uid, sessies = [], confidenceScores = {} }: ZenSuiteProps) {
  const [fase, setFase] = useState<"goal" | "zen">("goal");
  const [config, setConfig] = useState<ZenConfig | null>(null);
  // Lifted so refs survive the GoalModal → ZenOverlay mount transition
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  return (
    <Portal>
      {fase === "goal" && (
        <GoalModal
          vakken={vakken}
          niveau={niveau}
          profiel={profiel}
          vandaagSessies={vandaagSessies}
          onClose={onClose}
          onStart={(cfg) => {
            setConfig(cfg);
            setFase("zen");
          }}
        />
      )}
      {fase === "zen" && config && (
        <ZenOverlay
          config={config}
          onClose={onClose}
          audioCtxRef={audioCtxRef}
          masterGainRef={masterGainRef}
          uid={uid}
          sessies={sessies}
          confidenceScores={confidenceScores}
          vakken={vakken}
        />
      )}
    </Portal>
  );
}

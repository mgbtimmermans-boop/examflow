"use client";

import { use, useState, useEffect, useMemo } from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ALLE_VAKKEN } from "@/data/vakken";
import { useInstellingen } from "@/hooks/useVakData";
import { Onderwijsniveau, OefenExamen } from "@/types";
import { VakSyllabus, Domein, Subdomein } from "@/types/syllabus";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

// ── Syllabus imports ──────────────────────────────────────────────────────────
import { ECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/economie-vwo";
import { ECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/economie-havo";
import { WISKUNDE_A_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-a-vwo";
import { WISKUNDE_A_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-a-havo";
import { WISKUNDE_B_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-b-havo";
import { BIOLOGIE_HAVO_SYLLABUS } from "@/data/syllabi/biologie-havo";
import { SCHEIKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/scheikunde-havo";
import { BEDRIJFSECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-havo";
import { GESCHIEDENIS_HAVO_SYLLABUS } from "@/data/syllabi/geschiedenis-havo";
import { NEDERLANDS_HAVO_SYLLABUS } from "@/data/syllabi/nederlands-havo";
import { AARDRIJKSKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-havo";
import { NATUURKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/natuurkunde-havo";
import { FILOSOFIE_HAVO_SYLLABUS } from "@/data/syllabi/filosofie-havo";
import { ENGELS_HAVO_SYLLABUS } from "@/data/syllabi/engels-havo";
import { DUITS_HAVO_SYLLABUS } from "@/data/syllabi/duits-havo";
import { FRANS_HAVO_SYLLABUS } from "@/data/syllabi/frans-havo";
import { NEDERLANDS_VWO_SYLLABUS } from "@/data/syllabi/nederlands-vwo";
import { BIOLOGIE_VWO_SYLLABUS } from "@/data/syllabi/biologie-vwo";
import { SCHEIKUNDE_VWO_SYLLABUS } from "@/data/syllabi/scheikunde-vwo";
import { BEDRIJFSECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-vwo";
import { GESCHIEDENIS_VWO_SYLLABUS } from "@/data/syllabi/geschiedenis-vwo";
import { WISKUNDE_B_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-b-vwo";
import { AARDRIJKSKUNDE_VWO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-vwo";
import { FILOSOFIE_VWO_SYLLABUS } from "@/data/syllabi/filosofie-vwo";
import { NATUURKUNDE_VWO_SYLLABUS } from "@/data/syllabi/natuurkunde-vwo";
import { GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/griekse-taal-en-cultuur-vwo";
import { LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/latijnse-taal-en-cultuur-vwo";
import { ENGELS_VWO_SYLLABUS } from "@/data/syllabi/engels-vwo";
import { DUITS_VWO_SYLLABUS } from "@/data/syllabi/duits-vwo";
import { FRANS_VWO_SYLLABUS } from "@/data/syllabi/frans-vwo";

const SYLLABI: Record<string, VakSyllabus> = {
  "economie-vwo": ECONOMIE_VWO_SYLLABUS,
  "economie-havo": ECONOMIE_HAVO_SYLLABUS,
  "wiskunde-a-vwo": WISKUNDE_A_VWO_SYLLABUS,
  "wiskunde-a-havo": WISKUNDE_A_HAVO_SYLLABUS,
  "wiskunde-b-havo": WISKUNDE_B_HAVO_SYLLABUS,
  "biologie-havo": BIOLOGIE_HAVO_SYLLABUS,
  "scheikunde-havo": SCHEIKUNDE_HAVO_SYLLABUS,
  "bedrijfseconomie-havo": BEDRIJFSECONOMIE_HAVO_SYLLABUS,
  "geschiedenis-havo": GESCHIEDENIS_HAVO_SYLLABUS,
  "nederlands-havo": NEDERLANDS_HAVO_SYLLABUS,
  "aardrijkskunde-havo": AARDRIJKSKUNDE_HAVO_SYLLABUS,
  "natuurkunde-havo": NATUURKUNDE_HAVO_SYLLABUS,
  "filosofie-havo": FILOSOFIE_HAVO_SYLLABUS,
  "engels-havo": ENGELS_HAVO_SYLLABUS,
  "duits-havo": DUITS_HAVO_SYLLABUS,
  "frans-havo": FRANS_HAVO_SYLLABUS,
  "nederlands-vwo": NEDERLANDS_VWO_SYLLABUS,
  "biologie-vwo": BIOLOGIE_VWO_SYLLABUS,
  "scheikunde-vwo": SCHEIKUNDE_VWO_SYLLABUS,
  "bedrijfseconomie-vwo": BEDRIJFSECONOMIE_VWO_SYLLABUS,
  "geschiedenis-vwo": GESCHIEDENIS_VWO_SYLLABUS,
  "wiskunde-b-vwo": WISKUNDE_B_VWO_SYLLABUS,
  "aardrijkskunde-vwo": AARDRIJKSKUNDE_VWO_SYLLABUS,
  "filosofie-vwo": FILOSOFIE_VWO_SYLLABUS,
  "natuurkunde-vwo": NATUURKUNDE_VWO_SYLLABUS,
  "grieks-vwo": GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "latijn-vwo": LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "engels-vwo": ENGELS_VWO_SYLLABUS,
  "duits-vwo": DUITS_VWO_SYLLABUS,
  "frans-vwo": FRANS_VWO_SYLLABUS,
};

// ── STAP 7: AlleExamens URL lookup ──────────────────────────────────────────
const ALLE_EXAMENS_URLS: Record<string, string> = {
  "economie-vwo": "https://www.alleexamens.nl/vwo/economie",
  "economie-havo": "https://www.alleexamens.nl/havo/economie",
  "biologie-vwo": "https://www.alleexamens.nl/vwo/biologie",
  "biologie-havo": "https://www.alleexamens.nl/havo/biologie",
  "scheikunde-vwo": "https://www.alleexamens.nl/vwo/scheikunde",
  "scheikunde-havo": "https://www.alleexamens.nl/havo/scheikunde",
  "natuurkunde-vwo": "https://www.alleexamens.nl/vwo/natuurkunde",
  "natuurkunde-havo": "https://www.alleexamens.nl/havo/natuurkunde",
  "wiskunde-a-vwo": "https://www.alleexamens.nl/vwo/wiskunde-a",
  "wiskunde-a-havo": "https://www.alleexamens.nl/havo/wiskunde-a",
  "wiskunde-b-vwo": "https://www.alleexamens.nl/vwo/wiskunde-b",
  "wiskunde-b-havo": "https://www.alleexamens.nl/havo/wiskunde-b",
  "geschiedenis-vwo": "https://www.alleexamens.nl/vwo/geschiedenis",
  "geschiedenis-havo": "https://www.alleexamens.nl/havo/geschiedenis",
  "aardrijkskunde-vwo": "https://www.alleexamens.nl/vwo/aardrijkskunde",
  "aardrijkskunde-havo": "https://www.alleexamens.nl/havo/aardrijkskunde",
  "nederlands-vwo": "https://www.alleexamens.nl/vwo/nederlands",
  "nederlands-havo": "https://www.alleexamens.nl/havo/nederlands",
  "engels-vwo": "https://www.alleexamens.nl/vwo/engels",
  "engels-havo": "https://www.alleexamens.nl/havo/engels",
  "duits-vwo": "https://www.alleexamens.nl/vwo/duits",
  "duits-havo": "https://www.alleexamens.nl/havo/duits",
  "bedrijfseconomie-vwo": "https://www.alleexamens.nl/vwo/bedrijfseconomie",
  "bedrijfseconomie-havo": "https://www.alleexamens.nl/havo/bedrijfseconomie",
};

// ── STAP 1: Examenjaren 2000-2025 aflopend ─────────────────────────────────
const EXAMENJAREN = Array.from({ length: 26 }, (_, i) => 2025 - i);

// ── Helpers ───────────────────────────────────────────────────────────────────

function domeinLabel(d: Domein): string {
  return d.naam ?? d.titel ?? d.id;
}

function subdomeinLabel(s: Subdomein): string {
  return s.naam ?? s.titel ?? s.id;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function fmtDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function TrackerPage({ params }: { params: Promise<{ vakId: string }> }) {
  const { vakId } = use(params);
  const router = useRouter();
  const { user, loading } = useAuth();
  const { instellingen } = useInstellingen();

  const vak = ALLE_VAKKEN.find((v) => v.id === vakId);
  const syllabus = SYLLABI[vakId] ?? null;
  const niveau = (instellingen?.niveau ?? "VWO") as Onderwijsniveau;

  // ── State ─────────────────────────────────────────────────────────────────
  const [examens, setExamens] = useState<OefenExamen[]>([]);
  const [streefCijfer, setStreefCijfer] = useState(7);
  const [loadingData, setLoadingData] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [fDatum, setFDatum] = useState(today());
  const [fCijfer, setFCijfer] = useState("7.0");
  const [fJaar, setFJaar] = useState("2024");
  const [fTijdvak, setFTijdvak] = useState<"I" | "II">("I");
  const [fZwak, setFZwak] = useState<string[]>([]);
  const [zwakkePunten, setZwakkePunten] = useState<string[]>([]);
  const [nieuwPunt, setNieuwPunt] = useState("");
  const [fNotities, setFNotities] = useState("");
  const [saving, setSaving] = useState(false);

  // Redirect if not authed
  useEffect(() => {
    if (!loading && !user) router.replace("/");
  }, [user, loading, router]);

  // ── Firestore listeners ───────────────────────────────────────────────────
  useEffect(() => {
    if (!user || !db) return;
    const trackerRef = doc(db, "users", user.uid, "tracker", vakId);
    getDoc(trackerRef).then((snap) => {
      if (snap.exists()) {
        const d = snap.data();
        if (d.streefCijfer) setStreefCijfer(d.streefCijfer);
      }
    });

    const exRef = collection(db, "users", user.uid, "tracker", vakId, "examens");
    const q = query(exRef, orderBy("datum", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const items: OefenExamen[] = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as OefenExamen[];
      setExamens(items);
      setLoadingData(false);
    });
    return unsub;
  }, [user, vakId]);

  // ── Save streefcijfer ─────────────────────────────────────────────────────
  async function saveStreefCijfer(val: number) {
    setStreefCijfer(val);
    if (!user || !db) return;
    await setDoc(doc(db, "users", user.uid, "tracker", vakId), { streefCijfer: val }, { merge: true });
  }

  // ── STAP 4A: Update zwakeDomeinen aggregate on tracker doc ────────────────
  async function updateZwakeDomeinenAggregate(nieuwZwak: string[]) {
    if (!user || !db || nieuwZwak.length === 0) return;
    const trackerRef = doc(db, "users", user.uid, "tracker", vakId);
    const snap = await getDoc(trackerRef);
    const bestaand: string[] = snap.exists() ? (snap.data().zwakeDomeinen ?? []) : [];
    const merged = Array.from(new Set([...bestaand, ...nieuwZwak]));
    await setDoc(trackerRef, { zwakeDomeinen: merged }, { merge: true });
  }

  // ── Add examen ────────────────────────────────────────────────────────────
  async function handleAdd() {
    if (!user || !db) return;
    setSaving(true);
    const exRef = collection(db, "users", user.uid, "tracker", vakId, "examens");
    await addDoc(exRef, {
      datum: fDatum,
      cijfer: parseFloat(fCijfer),
      jaar: parseInt(fJaar),
      tijdvak: fTijdvak,
      zwakeDomeinen: fZwak,
      zwakkePunten: zwakkePunten.length > 0 ? zwakkePunten : null,
      notities: fNotities || null,
      vakId,
      aangemaakt: new Date().toISOString(),
    });
    // STAP 4A: update aggregate
    await updateZwakeDomeinenAggregate(fZwak);
    setSaving(false);
    setModalOpen(false);
    // Reset form
    setFDatum(today());
    setFCijfer("7.0");
    setFJaar("2024");
    setFTijdvak("I");
    setFZwak([]);
    setZwakkePunten([]);
    setNieuwPunt("");
    setFNotities("");
  }

  // ── Delete examen ─────────────────────────────────────────────────────────
  async function handleDelete(exId: string) {
    if (!user || !db) return;
    await deleteDoc(doc(db, "users", user.uid, "tracker", vakId, "examens", exId));
  }

  // ── Computed ──────────────────────────────────────────────────────────────
  const gemiddelde = examens.length
    ? +(examens.reduce((s, e) => s + e.cijfer, 0) / examens.length).toFixed(1)
    : null;
  const hoogste = examens.length ? Math.max(...examens.map((e) => e.cijfer)) : null;
  const laatste = examens.length ? examens[examens.length - 1].cijfer : null;
  const verschil = gemiddelde !== null ? +(gemiddelde - streefCijfer).toFixed(1) : null;

  // Chart data
  const chartData = examens.map((e) => ({
    datum: fmtDate(e.datum),
    cijfer: e.cijfer,
    zwak: e.zwakeDomeinen,
  }));

  // Trend
  const trend = useMemo(() => {
    if (examens.length < 2) return "neutral";
    const mid = Math.floor(examens.length / 2);
    const firstHalf = examens.slice(0, mid).reduce((s, e) => s + e.cijfer, 0) / mid;
    const secondHalf = examens.slice(mid).reduce((s, e) => s + e.cijfer, 0) / (examens.length - mid);
    return secondHalf > firstHalf ? "up" : secondHalf < firstHalf ? "down" : "neutral";
  }, [examens]);

  // Zwakke domeinen tellen (now includes subdomein IDs too)
  const zwakTelling = useMemo(() => {
    const map: Record<string, number> = {};
    for (const ex of examens) {
      for (const did of ex.zwakeDomeinen) {
        map[did] = (map[did] || 0) + 1;
      }
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [examens]);

  const maxZwak = zwakTelling.length ? zwakTelling[0][1] : 1;

  // Domeinen + subdomeinen lookup (combined)
  const labelMap = useMemo(() => {
    if (!syllabus) return {};
    const m: Record<string, string> = {};
    for (const d of syllabus.domeinen) {
      m[d.id] = domeinLabel(d);
      for (const s of d.subdomeinen) {
        m[s.id] = subdomeinLabel(s);
      }
    }
    return m;
  }, [syllabus]);

  // Domeinen lookup (for focus section)
  const domeinenMap = useMemo(() => {
    if (!syllabus) return {};
    const m: Record<string, Domein> = {};
    for (const d of syllabus.domeinen) {
      m[d.id] = d;
    }
    return m;
  }, [syllabus]);

  // Find parent domein for a subdomein ID
  const subToDomeinMap = useMemo(() => {
    if (!syllabus) return {};
    const m: Record<string, Domein> = {};
    for (const d of syllabus.domeinen) {
      for (const s of d.subdomeinen) {
        m[s.id] = d;
      }
    }
    return m;
  }, [syllabus]);

  // For focus section: resolve ID → Domein (could be domein or subdomein's parent)
  function resolveDomein(id: string): Domein | undefined {
    return domeinenMap[id] ?? subToDomeinMap[id];
  }

  // ── Loading / not found ───────────────────────────────────────────────────
  if (!vak)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "#F8F9FC" }}>
        <p style={{ color: "#64748B" }}>Vak niet gevonden</p>
        <Link href="/dashboard" className="btn-primary">
          Terug naar dashboard
        </Link>
      </div>
    );

  if (loading || !user)
    return (
      <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
          <div style={{ height: 28, background: "#E8ECF0", borderRadius: 8, width: 200, marginBottom: 24 }} />
          <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8ECF0", padding: 28 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ height: 20, background: "#F1F5F9", borderRadius: 6, marginBottom: 12, width: `${50 + i * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    );

  // STAP 7: Use lookup map with fallback
  const alleExamensUrl = ALLE_EXAMENS_URLS[vakId] ?? `https://www.alleexamens.nl/${niveau.toLowerCase()}/${vak.alleExamensSlug}`;

  return (
    <>
      <div className="min-h-screen" style={{ background: "#F8F9FC" }}>
        <Navbar>
          <Link href={`/vak/${vakId}`} className="btn-secondary text-xs flex items-center gap-1.5">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Terug naar vak
          </Link>
        </Navbar>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* ── A) HEADER ──────────────────────────────────────────────── */}
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-2xl font-semibold" style={{ color: "#0F172A" }}>
              {vak.naam} — Examentracker
            </h1>
            <span
              className="text-xs px-2 py-0.5 rounded-md font-medium"
              style={{ background: "#F1F5F9", color: "#64748B" }}
            >
              {niveau}
            </span>
          </div>

          {/* ── B) QUICKLINKS ──────────────────────────────────────────── */}
          <div className="card mb-6">
            <p className="label mb-3">Oefenen met examens</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={alleExamensUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-colors"
                style={{ border: "1px solid #E8ECF0", background: "white" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0F172A" }}>Complete examens</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>alleexamens.nl</p>
                </div>
              </a>
              <a
                href="https://www.examen-centraal.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-colors"
                style={{ border: "1px solid #E8ECF0", background: "white" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#F0FDF4" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#16A34A" strokeWidth="2">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0F172A" }}>Gericht oefenen</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>examen-centraal.nl</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── C) GRAFIEK ─────────────────────────────────────────────── */}
          <div className="card mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <p className="label">Cijfergrafiek</p>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: "#64748B" }}>Streefcijfer:</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  step={0.1}
                  value={streefCijfer}
                  onChange={(e) => saveStreefCijfer(parseFloat(e.target.value) || 7)}
                  className="w-16 text-sm text-center rounded-lg"
                  style={{ border: "1px solid #E8ECF0", padding: "4px 8px", color: "#0F172A" }}
                />
              </div>
            </div>

            {examens.length === 0 ? (
              <div className="flex items-center justify-center py-12" style={{ color: "#94A3B8" }}>
                <p className="text-sm">Nog geen oefenexamens toegevoegd</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8ECF0" />
                  <XAxis dataKey="datum" tick={{ fontSize: 12, fill: "#64748B" }} />
                  <YAxis domain={[0, 10]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} tick={{ fontSize: 12, fill: "#64748B" }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 10, border: "1px solid #E8ECF0", fontSize: 13 }}
                    formatter={(value: number, _name: string, props: { payload?: { zwak?: string[] } }) => {
                      const zwak = props.payload?.zwak ?? [];
                      const zwakLabels = zwak.map((id) => labelMap[id] ?? id);
                      return [
                        <span key="v">
                          {value}
                          {zwakLabels.length > 0 && (
                            <span style={{ display: "block", fontSize: 11, color: "#94A3B8", marginTop: 2 }}>
                              Zwak: {zwakLabels.join(", ")}
                            </span>
                          )}
                        </span>,
                        "Cijfer",
                      ];
                    }}
                  />
                  <ReferenceLine
                    y={streefCijfer}
                    stroke={gemiddelde !== null && gemiddelde >= streefCijfer ? "#16A34A" : "#DC2626"}
                    strokeDasharray="6 4"
                    strokeWidth={2}
                    label={{
                      value: `Streef: ${streefCijfer}`,
                      position: "right",
                      fill: gemiddelde !== null && gemiddelde >= streefCijfer ? "#16A34A" : "#DC2626",
                      fontSize: 11,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="cijfer"
                    stroke={trend === "up" ? "#16A34A" : trend === "down" ? "#DC2626" : "#2563EB"}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "white", stroke: "#2563EB", strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: "#2563EB" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* ── D) STATISTIEKEN ────────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Gemiddelde", value: gemiddelde !== null ? gemiddelde.toString() : "–", color: "#2563EB" },
              { label: "Hoogste", value: hoogste !== null ? hoogste.toString() : "–", color: "#16A34A" },
              { label: "Laatste", value: laatste !== null ? laatste.toString() : "–", color: "#0F172A" },
              {
                label: "vs. streefcijfer",
                value: verschil !== null ? (verschil >= 0 ? `+${verschil}` : `${verschil}`) : "–",
                color: verschil !== null ? (verschil >= 0 ? "#16A34A" : "#DC2626") : "#64748B",
              },
            ].map((s) => (
              <div key={s.label} className="card flex flex-col items-center justify-center py-4">
                <p className="text-xs mb-1" style={{ color: "#64748B" }}>{s.label}</p>
                <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* ── E) ZWAKKE PUNTEN ───────────────────────────────────────── */}
          {zwakTelling.length > 0 && (
            <div className="card mb-6">
              <p className="label mb-4">Zwakke punten analyse</p>
              <div className="space-y-3">
                {zwakTelling.map(([domId, count]) => {
                  const label = labelMap[domId] ?? domId;
                  const pct = Math.round((count / maxZwak) * 100);
                  return (
                    <div key={domId}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm" style={{ color: "#0F172A" }}>{label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs" style={{ color: "#64748B" }}>{count}x</span>
                          <Link href={`/vak/${vakId}#${domId}`} className="text-xs font-medium" style={{ color: "#2563EB" }}>
                            → Bekijk leerdoelen
                          </Link>
                        </div>
                      </div>
                      <div style={{ height: 6, background: "#F1F5F9", borderRadius: 3 }}>
                        <div style={{ height: 6, width: `${pct}%`, background: "#2563EB", borderRadius: 3, transition: "width 0.3s" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── F) TOEVOEGEN KNOP ──────────────────────────────────────── */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-3 rounded-xl text-sm font-semibold mb-6 transition-colors"
            style={{ background: "#2563EB", color: "white" }}
          >
            + Nieuw oefenexamen toevoegen
          </button>

          {/* ── G) EXAMENS LIJST ───────────────────────────────────────── */}
          {examens.length > 0 && (
            <div className="space-y-3 mb-8">
              <p className="label mb-2">Oefenexamens</p>
              {[...examens].reverse().map((ex) => (
                <div key={ex.id} className="card flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                        {fmtDate(ex.datum)}
                      </span>
                      <span className="text-xs" style={{ color: "#64748B" }}>
                        {ex.jaar} · Tijdvak {ex.tijdvak}
                      </span>
                    </div>
                    {ex.zwakeDomeinen.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-1">
                        {ex.zwakeDomeinen.map((did) => (
                          <span
                            key={did}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "#FEF2F2", color: "#DC2626", border: "1px solid #FECACA" }}
                          >
                            {labelMap[did] ?? did}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Zwakke punten bullet list */}
                    {ex.zwakkePunten && ex.zwakkePunten.length > 0 && (
                      <div style={{ marginTop: 8 }}>
                        {ex.zwakkePunten.map((punt, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#94A3B8", flexShrink: 0 }} />
                            <span style={{ fontSize: 12, color: "#64748B" }}>{punt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Legacy: zwakPuntOmschrijving */}
                    {!ex.zwakkePunten?.length && ex.zwakPuntOmschrijving && (
                      <p className="text-xs mt-1" style={{ color: "#94A3B8", fontStyle: "italic" }}>
                        {ex.zwakPuntOmschrijving}
                      </p>
                    )}
                    {ex.notities && (
                      <p className="text-xs mt-1" style={{ color: "#94A3B8" }}>
                        {ex.notities}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: ex.cijfer >= streefCijfer ? "#16A34A" : "#DC2626" }}
                    >
                      {ex.cijfer}
                    </span>
                    <button
                      onClick={() => handleDelete(ex.id)}
                      className="p-1.5 rounded-lg transition-colors"
                      style={{ color: "#94A3B8" }}
                      title="Verwijderen"
                    >
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── H) FOCUS OP LEERDOELEN ─────────────────────────────────── */}
          {syllabus && zwakTelling.length > 0 && (
            <div className="card mb-8">
              <p className="label mb-4">Focus op deze leerdoelen</p>
              <div className="space-y-5">
                {zwakTelling.slice(0, 3).map(([domId]) => {
                  const dom = resolveDomein(domId);
                  if (!dom) return null;
                  const allLeerdoelen = dom.subdomeinen.flatMap((s) => s.leerdoelen);
                  const eerste3 = allLeerdoelen.slice(0, 3);
                  return (
                    <div key={domId}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium" style={{ color: "#0F172A" }}>
                          {domeinLabel(dom)}
                        </p>
                        <Link href={`/vak/${vakId}#${dom.id}`} className="text-xs font-medium" style={{ color: "#2563EB" }}>
                          Ga naar vak →
                        </Link>
                      </div>
                      <ul className="space-y-1.5">
                        {eerste3.map((ld) => (
                          <li key={ld.id} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2563EB" }} />
                            <span className="text-xs" style={{ color: "#64748B" }}>
                              {ld.omschrijving}
                            </span>
                          </li>
                        ))}
                        {allLeerdoelen.length > 3 && (
                          <li className="text-xs" style={{ color: "#94A3B8", paddingLeft: 14 }}>
                            + {allLeerdoelen.length - 3} meer leerdoelen
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── MODAL ──────────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-lg mx-4 rounded-2xl overflow-y-auto"
            style={{ background: "white", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold" style={{ color: "#0F172A" }}>
                  Oefenexamen toevoegen
                </h2>
                <button onClick={() => setModalOpen(false)} style={{ color: "#94A3B8" }}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {/* Datum */}
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{ color: "#64748B" }}>Datum</label>
                  <input
                    type="date"
                    value={fDatum}
                    onChange={(e) => setFDatum(e.target.value)}
                    className="w-full rounded-lg text-sm p-2.5"
                    style={{ border: "1px solid #E8ECF0", color: "#0F172A" }}
                  />
                </div>

                {/* Cijfer */}
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{ color: "#64748B" }}>Cijfer</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    step={0.1}
                    value={fCijfer}
                    onChange={(e) => setFCijfer(e.target.value)}
                    className="w-full rounded-lg text-sm p-2.5"
                    style={{ border: "1px solid #E8ECF0", color: "#0F172A" }}
                  />
                </div>

                {/* STAP 1: Examenjaar 2000-2025 + Tijdvak */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium mb-1 block" style={{ color: "#64748B" }}>Examenjaar</label>
                    <select
                      value={fJaar}
                      onChange={(e) => setFJaar(e.target.value)}
                      className="w-full rounded-lg text-sm p-2.5"
                      style={{ border: "1px solid #E8ECF0", color: "#0F172A" }}
                    >
                      {EXAMENJAREN.map((j) => (
                        <option key={j} value={j}>{j}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1 block" style={{ color: "#64748B" }}>Tijdvak</label>
                    <select
                      value={fTijdvak}
                      onChange={(e) => setFTijdvak(e.target.value as "I" | "II")}
                      className="w-full rounded-lg text-sm p-2.5"
                      style={{ border: "1px solid #E8ECF0", color: "#0F172A" }}
                    >
                      <option value="I">Tijdvak I</option>
                      <option value="II">Tijdvak II</option>
                    </select>
                  </div>
                </div>

                {/* STAP 2: Zwakke domeinen met subdomeinen */}
                {syllabus && (
                  <div>
                    <label className="text-xs font-medium mb-2 block" style={{ color: "#64748B" }}>
                      Zwakke domeinen / subdomeinen
                    </label>
                    <div className="max-h-56 overflow-y-auto" style={{ border: "1px solid #E8ECF0", borderRadius: 10, padding: 8 }}>
                      {syllabus.domeinen.map((dom) => (
                        <div key={dom.id} className="mb-2">
                          {/* Domein header */}
                          <p className="text-xs font-bold px-2 py-1.5" style={{ color: "#64748B" }}>
                            {domeinLabel(dom)}
                          </p>
                          {/* Subdomeinen als checkboxes */}
                          <div className="space-y-0.5 pl-2">
                            {dom.subdomeinen.map((sub) => {
                              const checked = fZwak.includes(sub.id);
                              return (
                                <label
                                  key={sub.id}
                                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors text-sm"
                                  style={{ background: checked ? "#EFF6FF" : "transparent" }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() =>
                                      setFZwak((prev) =>
                                        checked ? prev.filter((id) => id !== sub.id) : [...prev, sub.id]
                                      )
                                    }
                                    style={{ accentColor: "#2563EB" }}
                                  />
                                  <span style={{ color: "#0F172A", fontSize: 13 }}>{subdomeinLabel(sub)}</span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wat ging er precies fout? — dynamische puntenlijst */}
                <div style={{ marginTop: 16 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 8 }}>
                    Wat ging er precies fout?
                  </label>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <input
                      type="text"
                      value={nieuwPunt}
                      onChange={e => setNieuwPunt(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === "Enter" && nieuwPunt.trim()) {
                          e.preventDefault();
                          setZwakkePunten(prev => [...prev, nieuwPunt.trim()]);
                          setNieuwPunt("");
                        }
                      }}
                      placeholder="Bijv. hefboomwerking begreep ik niet..."
                      style={{
                        flex: 1, padding: "9px 12px", borderRadius: 8,
                        border: "1px solid #E8ECF0", fontSize: 13, color: "#0F172A",
                        outline: "none",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (nieuwPunt.trim()) {
                          setZwakkePunten(prev => [...prev, nieuwPunt.trim()]);
                          setNieuwPunt("");
                        }
                      }}
                      style={{
                        padding: "9px 16px", borderRadius: 8, border: "none",
                        background: "#2563EB", color: "white", fontSize: 13,
                        fontWeight: 500, cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  {zwakkePunten.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {zwakkePunten.map((punt, i) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          padding: "8px 12px", borderRadius: 8,
                          background: "#F8F9FC", border: "1px solid #E8ECF0",
                        }}>
                          <div style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: "#2563EB", flexShrink: 0,
                          }} />
                          <span style={{ flex: 1, fontSize: 13, color: "#374151" }}>{punt}</span>
                          <button
                            type="button"
                            onClick={() => setZwakkePunten(prev => prev.filter((_, j) => j !== i))}
                            style={{
                              background: "none", border: "none", cursor: "pointer",
                              color: "#94A3B8", fontSize: 16, padding: "0 2px",
                              lineHeight: 1,
                            }}
                          >
                            x
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Notities */}
                <div>
                  <label className="text-xs font-medium mb-1 block" style={{ color: "#64748B" }}>
                    Notities (optioneel)
                  </label>
                  <textarea
                    value={fNotities}
                    onChange={(e) => setFNotities(e.target.value)}
                    rows={3}
                    placeholder="Bijv. tijdnood bij open vragen..."
                    className="w-full rounded-lg text-sm p-2.5 resize-none"
                    style={{ border: "1px solid #E8ECF0", color: "#0F172A" }}
                  />
                </div>

                {/* Opslaan */}
                <button
                  onClick={handleAdd}
                  disabled={saving}
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-colors"
                  style={{ background: saving ? "#94A3B8" : "#2563EB", color: "white" }}
                >
                  {saving ? "Opslaan..." : "Opslaan"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

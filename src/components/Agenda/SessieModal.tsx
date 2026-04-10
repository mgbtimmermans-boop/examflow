"use client";
import { useState, useEffect } from "react";
import { Portal } from "@/components/Portal";
import { Vak, GebruikerInstellingen } from "@/types";
import { StudieSessie } from "@/types/agenda";

interface SessieModalProps {
  vakken: Vak[];
  instellingen: GebruikerInstellingen;
  defaultVakId?: string;
  defaultSyllabusItem?: string;
  defaultDatum?: string;
  defaultStartTijd?: string;
  editSessie?: StudieSessie | null;
  onSave: (sessie: Omit<StudieSessie, "id" | "aangemaaktOp">) => void;
  onClose: () => void;
}

const DUUR_OPTIES = [30, 45, 60, 90] as const;
const EIGEN_WAARDE = "__eigen__";

function todayString(): string {
  return new Date().toISOString().split("T")[0];
}

export default function SessieModal({
  vakken, instellingen, defaultVakId, defaultSyllabusItem, defaultDatum, defaultStartTijd,
  editSessie, onSave, onClose,
}: SessieModalProps) {
  const gekozenVakken = vakken.filter(v => instellingen.gekozenVakken.includes(v.id));
  const ceVakken = gekozenVakken.filter(v => !v.isSchoolexamen);
  const allVakken = ceVakken.length > 0 ? ceVakken : gekozenVakken;

  const initVakId = editSessie?.vakId ?? defaultVakId ?? allVakken[0]?.id ?? "";
  const initIsEigen = editSessie ? !editSessie.syllabusItem : false;

  const [vakId, setVakId] = useState(initVakId);
  const [onderwerpWaarde, setOnderwerpWaarde] = useState<string>(() => {
    if (editSessie) return editSessie.syllabusItem ?? EIGEN_WAARDE;
    return defaultSyllabusItem ?? "";
  });
  const [eigenTitel, setEigenTitel] = useState(editSessie?.eigenTitel ?? "");
  const [doel, setDoel] = useState(editSessie?.doel ?? "");
  const [datum, setDatum] = useState(editSessie?.datum ?? defaultDatum ?? "");
  const [startTijd, setStartTijd] = useState(editSessie?.startTijd ?? defaultStartTijd ?? "");
  const standaard = (instellingen.planning?.standaardDuur ?? 60) as 30|45|60|90;
  const defaultDuur = DUUR_OPTIES.includes(standaard) ? standaard : 60 as const;
  const initDuur = editSessie
    ? (DUUR_OPTIES.includes(editSessie.duurMinuten as 30|45|60|90) ? editSessie.duurMinuten as 30|45|60|90 : "eigen" as const)
    : defaultDuur;
  const [duur, setDuur] = useState<30|45|60|90|"eigen">(initDuur);
  const [eigenDuur, setEigenDuur] = useState(
    editSessie && !DUUR_OPTIES.includes(editSessie.duurMinuten as 30|45|60|90) ? editSessie.duurMinuten : 120
  );
  const duurMinuten = duur === "eigen" ? eigenDuur : duur;
  const [notitie, setNotitie] = useState(editSessie?.notitie ?? "");
  const [error, setError] = useState("");

  const selectedVak = allVakken.find(v => v.id === vakId);
  const isEigen = onderwerpWaarde === EIGEN_WAARDE;

  // Reset onderwerp when vak changes (but not when editing or preset)
  useEffect(() => {
    if (!defaultSyllabusItem && !editSessie) {
      setOnderwerpWaarde(selectedVak?.syllabus[0] ?? "");
    }
  }, [vakId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!onderwerpWaarde && selectedVak?.syllabus[0]) {
      setOnderwerpWaarde(selectedVak.syllabus[0]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const maxDatum = selectedVak?.examDatum ?? "";

  const handleSubmit = () => {
    if (!vakId) { setError("Selecteer een vak."); return; }
    if (!datum) { setError("Selecteer een datum."); return; }
    if (!startTijd) { setError("Starttijd is verplicht."); return; }
    if (maxDatum && datum > maxDatum) {
      setError(`Datum mag niet na de examdatum van ${selectedVak?.naam ?? "het vak"} (${selectedVak?.datum ?? maxDatum}) liggen.`);
      return;
    }
    if (duur === "eigen" && (eigenDuur < 5 || eigenDuur > 480)) {
      setError("Vul een duur in tussen 5 en 480 minuten."); return;
    }
    if (isEigen && !eigenTitel.trim()) {
      setError("Voer een eigen onderwerp in."); return;
    }
    if (!isEigen && !onderwerpWaarde) {
      setError("Selecteer een onderwerp."); return;
    }
    setError("");
    onSave({
      vakId,
      syllabusItem: isEigen ? null : onderwerpWaarde,
      eigenTitel: isEigen ? eigenTitel.trim() : null,
      doel: doel.trim() || null,
      datum,
      startTijd,
      duurMinuten,
      notitie,
      voltooid: editSessie?.voltooid ?? false,
    });
  };

  const pillActive = { background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE", borderRadius: 8 };
  const pillInactive = { background: "#FFFFFF", color: "#64748B", border: "1px solid #E8ECF0", borderRadius: 8 };

  return (
    <Portal>
      <div
        onClick={onClose}
        className="fixed inset-0 flex items-end sm:items-center sm:justify-center sm:p-5"
        style={{ zIndex: 9999, background: "rgba(0,0,0,0.5)" }}
      >
        <div
          onClick={e => e.stopPropagation()}
          className="w-full sm:max-w-[480px] rounded-t-[20px] sm:rounded-2xl overflow-y-auto"
          style={{
            background: "#FFFFFF",
            padding: 28,
            border: "1px solid #E8ECF0",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            maxHeight: "90vh",
          }}
        >
          {/* Handle bar (mobile) */}
          <div className="sm:hidden" style={{ width: 36, height: 4, borderRadius: 2, background: "#E2E8F0", margin: "0 auto 16px" }} />

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <p className="font-semibold" style={{ color: "#0F172A" }}>
              {editSessie ? "Sessie bewerken" : "Nieuwe studiesessie"}
            </p>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8", fontSize: 22, lineHeight: 1, minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
            >×</button>
          </div>
          <div style={{ borderBottom: "1px solid #E8ECF0", marginBottom: 20 }} />

          <div className="space-y-4">
            {/* Vak */}
            <div>
              <label className="label mb-1 block">Vak</label>
              <select
                value={vakId}
                onChange={e => setVakId(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
              >
                {allVakken.map(v => <option key={v.id} value={v.id}>{v.naam}</option>)}
              </select>
            </div>

            {/* Onderwerp — unified dropdown */}
            <div>
              <label className="label mb-1 block">Onderwerp</label>
              <select
                value={onderwerpWaarde}
                onChange={e => setOnderwerpWaarde(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
              >
                {(selectedVak?.syllabus ?? []).map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
                <option disabled>──────────────</option>
                <option value={EIGEN_WAARDE}>＋ Eigen onderwerp</option>
              </select>
              {isEigen && (
                <input
                  type="text"
                  value={eigenTitel}
                  onChange={e => setEigenTitel(e.target.value)}
                  placeholder="Beschrijf je eigen onderwerp..."
                  className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none mt-2"
                  style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
                />
              )}
            </div>

            {/* Doel */}
            <div>
              <label className="label mb-1 block">Studiedoel <span style={{ color: "#94A3B8", fontWeight: 400 }}>(optioneel)</span></label>
              <input
                type="text"
                value={doel}
                onChange={e => setDoel(e.target.value.slice(0, 100))}
                placeholder="Wat wil je bereiken in deze sessie?"
                className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
                maxLength={100}
              />
              {doel.length > 80 && (
                <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 4, textAlign: "right" }}>{100 - doel.length} tekens over</p>
              )}
            </div>

            {/* Datum */}
            <div>
              <label className="label mb-1 block">Datum</label>
              <input
                type="date"
                value={datum}
                min={todayString()}
                max={maxDatum || undefined}
                onChange={e => setDatum(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
              />
            </div>

            {/* Starttijd */}
            <div>
              <label className="label mb-1 block">Starttijd</label>
              <input
                type="time"
                value={startTijd}
                step="1800"
                onChange={e => setStartTijd(e.target.value)}
                className="w-full text-sm px-3 py-2 rounded-xl focus:outline-none"
                style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151", minHeight: 44 }}
              />
            </div>

            {/* Duur */}
            <div>
              <label className="label mb-2 block">Duur</label>
              <div className="flex gap-2 flex-wrap">
                {DUUR_OPTIES.map(d => (
                  <button
                    key={d}
                    onClick={() => setDuur(d)}
                    className="px-3 text-xs font-medium transition-colors"
                    style={{ ...(duur === d ? pillActive : pillInactive), minHeight: 44, minWidth: 60 }}
                  >
                    {d} min
                  </button>
                ))}
                <button
                  onClick={() => setDuur("eigen")}
                  className="px-3 text-xs font-medium transition-colors"
                  style={{ ...(duur === "eigen" ? pillActive : pillInactive), minHeight: 44, minWidth: 60 }}
                >
                  Eigen
                </button>
              </div>
              {duur === "eigen" && (
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                  <input
                    type="number"
                    min={5}
                    max={480}
                    step={5}
                    value={eigenDuur}
                    onChange={e => setEigenDuur(Number(e.target.value))}
                    style={{
                      width: 72, padding: "6px 10px",
                      borderRadius: 8, border: "1px solid #E8ECF0",
                      fontSize: 14, color: "#0F172A",
                      background: "#F8F9FC", outline: "none",
                    }}
                    autoFocus
                  />
                  <span style={{ fontSize: 13, color: "#64748B" }}>minuten</span>
                </div>
              )}
            </div>

            {/* Notitie */}
            <div>
              <label className="label mb-1 block">Notitie <span style={{ color: "#94A3B8", fontWeight: 400 }}>(optioneel)</span></label>
              <textarea
                value={notitie}
                onChange={e => setNotitie(e.target.value)}
                placeholder="Aantekening bij deze sessie..."
                rows={3}
                className="w-full text-sm resize-none focus:outline-none"
                style={{
                  background: "#F8F9FC", border: "1px solid #E8ECF0", color: "#374151",
                  borderRadius: 12, padding: "8px 12px",
                }}
              />
            </div>

            {error && (
              <p className="text-sm" style={{ color: "#DC2626" }}>{error}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button onClick={onClose} className="btn-secondary flex-1 text-sm" style={{ minHeight: 44 }}>Annuleren</button>
            <button onClick={handleSubmit} className="btn-primary flex-1 text-sm" style={{ minHeight: 44 }}>
              {editSessie ? "Opslaan" : "Sessie inplannen →"}
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

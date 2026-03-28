"use client";
import { useState } from "react";
import { ExamenVraag, OpenAntwoord } from "@/types/scoreWizard";

const VERBINDINGSWOORDEN = [
  "want", "omdat", "doordat", "waardoor", "dit leidt tot",
  "hieruit volgt dat", "als gevolg hiervan", "dus", "daardoor",
  "dit betekent dat", "namelijk",
];

interface Props {
  vraag: ExamenVraag;
  openAntwoord: OpenAntwoord;
  setOpenAntwoord: (a: OpenAntwoord) => void;
  scanKeywords: (tekst: string) => { heeftSignaalwoord: boolean; heeftBronVerwijzing: boolean };
  volledigAntwoord: () => string;
  kanNakijken: () => boolean;
  onVolgende: () => void;
}

export default function OpenVraag({
  vraag, openAntwoord, setOpenAntwoord,
  scanKeywords, volledigAntwoord,
  kanNakijken, onVolgende,
}: Props) {
  const [verbindingswoord, setVerbindingswoord] = useState("want");
  const [verbindingsTekst, setVerbindingsTekst] = useState("");

  function updateVerbinding(woord: string, tekst: string) {
    setOpenAntwoord({ ...openAntwoord, verbinding: `${woord} ${tekst}`.trim() });
  }

  const preview = volledigAntwoord();
  const { heeftSignaalwoord, heeftBronVerwijzing } = scanKeywords(preview);

  const taStyle: React.CSSProperties = {
    width: "100%", fontSize: 13, color: "#374151",
    border: "1px solid #E2E8F0", borderRadius: 8,
    padding: "8px 10px", resize: "vertical" as const,
    outline: "none", fontFamily: "inherit", lineHeight: 1.5,
    background: "white",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: "#64748B",
    display: "block", marginBottom: 6,
  };

  return (
    <div>
      {/* Vraag */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 14, color: "#0F172A", lineHeight: 1.6, fontWeight: 500 }}>
          {vraag.vraag}
        </p>
        {vraag.bron && (
          <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 8, background: "#F8F9FC", border: "1px solid #E8ECF0" }}>
            <p style={{ fontSize: 12, color: "#64748B", fontStyle: "italic", lineHeight: 1.5 }}>{vraag.bron}</p>
          </div>
        )}
        {vraag.jaar && (
          <p style={{ fontSize: 11, color: "#94A3B8", marginTop: 6 }}>Examen {vraag.jaar} · {vraag.maxPunten} punten</p>
        )}
      </div>

      <div style={{ height: 1, background: "#F1F5F9", marginBottom: 16 }}/>

      {/* Kern */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>De kern van mijn antwoord is:</label>
        <textarea
          rows={2}
          value={openAntwoord.kern}
          onChange={e => setOpenAntwoord({ ...openAntwoord, kern: e.target.value })}
          placeholder="Beschrijf het hoofdpunt van je antwoord..."
          style={taStyle}
        />
      </div>

      {/* Verbinding */}
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Dit is zo</label>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <select
            value={verbindingswoord}
            onChange={e => {
              setVerbindingswoord(e.target.value);
              updateVerbinding(e.target.value, verbindingsTekst);
            }}
            style={{
              fontSize: 13, color: "#2563EB", fontWeight: 500,
              border: "1px solid #BFDBFE", borderRadius: 8,
              padding: "6px 10px", background: "#EFF6FF",
              cursor: "pointer", outline: "none",
            }}
          >
            {VERBINDINGSWOORDEN.map(w => <option key={w} value={w}>{w}</option>)}
          </select>
        </div>
        <textarea
          rows={2}
          value={verbindingsTekst}
          onChange={e => {
            setVerbindingsTekst(e.target.value);
            updateVerbinding(verbindingswoord, e.target.value);
          }}
          placeholder="Leg je redenering uit..."
          style={taStyle}
        />
      </div>

      {/* Context / bron */}
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>Bewijs uit bron / tekst:</label>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <span style={{ fontSize: 13, color: "#64748B", paddingTop: 9, whiteSpace: "nowrap" }}>In</span>
          <textarea
            rows={2}
            value={openAntwoord.context}
            onChange={e => setOpenAntwoord({ ...openAntwoord, context: e.target.value })}
            placeholder="de tekst zie ik dat... / (optioneel)"
            style={{ ...taStyle, flex: 1 }}
          />
        </div>
      </div>

      {/* Preview */}
      {preview && (
        <div style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
            Preview van je antwoord
          </p>
          <div style={{ padding: "10px 12px", borderRadius: 8, background: "#F8F9FC", border: "1px solid #E8ECF0" }}>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{preview}</p>
          </div>
        </div>
      )}

      {/* Keyword feedback */}
      {preview && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {heeftSignaalwoord ? (
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#16A34A" }}>
              ✓ Signaalwoord gevonden
            </span>
          ) : (
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#FFFBEB", border: "1px solid #FDE68A", color: "#D97706" }}>
              ⚠ Tip: gebruik een verbindingswoord (want, omdat, daardoor...)
            </span>
          )}
          {heeftBronVerwijzing ? (
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#16A34A" }}>
              ✓ Bronverwijzing aanwezig
            </span>
          ) : (
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 20, background: "#FFFBEB", border: "1px solid #FDE68A", color: "#D97706" }}>
              ⚠ Tip: verwijs naar de bron of tekst
            </span>
          )}
        </div>
      )}

      {/* Doorgaan */}
      <button
        onClick={onVolgende}
        disabled={!kanNakijken()}
        className="btn-primary"
        style={{ width: "100%", opacity: kanNakijken() ? 1 : 0.4, cursor: kanNakijken() ? "pointer" : "not-allowed" }}
      >
        Verder naar nakijken →
      </button>
    </div>
  );
}

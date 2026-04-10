"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useHerhaling } from "@/hooks/useHerhaling"
import { begrippen } from "@/data/begrippen"
import { getBegrippenVanLeerdoel } from "@/lib/leerdoelLookup"
import Navbar from "@/components/Navbar"
import type { Oefenvraag } from "@/data/oefenvragen"

function OefenvraagSection({ leerdoelId, vakId, intervalDagen, itemId, antwoordZichtbaar, setAntwoordZichtbaar }: {
  leerdoelId: string; vakId?: string; intervalDagen: number; itemId: string;
  antwoordZichtbaar: Record<string, boolean>; setAntwoordZichtbaar: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const [vragen, setVragen] = useState<Oefenvraag[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (vakId === "bedrijfseconomie-vwo" || vakId === "bedrijfseconomie-havo") { setLoading(false); return }
    fetch(`/api/oefenvragen?leerdoelId=${encodeURIComponent(leerdoelId)}`)
      .then(r => r.json())
      .then(data => { setVragen(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [leerdoelId, vakId])

  const vraagIndex = intervalDagen <= 1 ? 0 : intervalDagen <= 3 ? 1 : 2
  const oefenvraag = vragen[vraagIndex % vragen.length] ?? null

  if (loading) return <div style={{ padding: "12px 0", fontSize: 12, color: "#94A3B8" }}>Oefenvraag laden...</div>
  if (!oefenvraag) return null

  return (
    <div style={{ marginBottom: 20, border: "1px solid #E8ECF0", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ background: "#F8F9FC", padding: "10px 14px", borderBottom: "1px solid #E8ECF0", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Oefenvraag</span>
        <span style={{
          fontSize: 10, padding: "2px 8px", borderRadius: 20, fontWeight: 500,
          background: oefenvraag.moeilijkheid === "basis" ? "#D1FAE5" : oefenvraag.moeilijkheid === "gemiddeld" ? "#FEF3C7" : "#FEE2E2",
          color: oefenvraag.moeilijkheid === "basis" ? "#065F46" : oefenvraag.moeilijkheid === "gemiddeld" ? "#92400E" : "#991B1B",
        }}>
          {oefenvraag.moeilijkheid}
        </span>
      </div>
      <div style={{ padding: "14px" }}>
        {oefenvraag.context && (
          <div style={{ background: "#F8F9FC", border: "1px solid #E8ECF0", borderRadius: 8, padding: "10px 12px", fontSize: 13, color: "#374151", whiteSpace: "pre-line", marginBottom: 12, lineHeight: 1.6 }}>
            {oefenvraag.context}
          </div>
        )}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", whiteSpace: "pre-line", margin: "0 0 14px", lineHeight: 1.6 }}>
          {oefenvraag.vraag}
        </p>
        {!antwoordZichtbaar[itemId] ? (
          <button onClick={() => setAntwoordZichtbaar(prev => ({ ...prev, [itemId]: true }))}
            style={{ padding: "8px 16px", background: "#F1F5F9", border: "none", borderRadius: 8, fontSize: 13, color: "#374151", cursor: "pointer", fontWeight: 500 }}>
            Toon uitwerking
          </button>
        ) : (
          <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#166534", whiteSpace: "pre-line", lineHeight: 1.7 }}>
            {oefenvraag.antwoord}
          </div>
        )}
      </div>
    </div>
  )
}

function formatOmschrijving(tekst: string): string {
  return tekst
    .replace(/^\d+(\.\d+)*\s+/, '')
    .replace(/^de kandidaat kan\s+/i, '')
    .trim()
    .replace(/^[a-z]/, (c) => c.toUpperCase())
}

function genereerSamenvatting(omschrijving: string, vakId: string, leerdoelBegrippen: string[]): string {
  // Zoek de uitleg van de eerste 2 kernbegrippen
  const uitleggen = leerdoelBegrippen
    .slice(0, 2)
    .map(term => begrippen.find(b => b.term.toLowerCase() === term.toLowerCase()))
    .filter(Boolean)
    .map(b => `${b!.term.charAt(0).toUpperCase() + b!.term.slice(1)}: ${b!.definitie}`)

  if (uitleggen.length > 0) {
    return uitleggen.join('\n\n')
  }

  // Fallback: leerdoel omschrijving
  return formatOmschrijving(omschrijving)
}

function genereerControlevraag(omschrijving: string, begrippen: string[]): string {
  const lager = omschrijving.toLowerCase()
  if (lager.includes("berekenen") || lager.includes("berekend") || lager.includes("berekening")) {
    return begrippen.length > 0
      ? `Hoe bereken je ${begrippen[0]}? Beschrijf de formule en de stappen.`
      : "Beschrijf de berekeningsstappen voor dit onderwerp."
  }
  if (lager.includes("verschil") || lager.includes("onderscheid")) {
    return begrippen.length >= 2
      ? `Wat is het verschil tussen ${begrippen[0]} en ${begrippen[1]}?`
      : "Wat zijn de belangrijkste verschillen binnen dit onderwerp?"
  }
  if (lager.includes("oorzaak") || lager.includes("gevolg") || lager.includes("waardoor")) {
    return begrippen.length > 0
      ? `Wat zijn de oorzaken en gevolgen van ${begrippen[0]}?`
      : "Wat zijn de oorzaken en gevolgen binnen dit onderwerp?"
  }
  if (lager.includes("noemen") || lager.includes("benoemen") || lager.includes("opsommen")) {
    return begrippen.length > 0
      ? `Noem en beschrijf de belangrijkste vormen van ${begrippen[0]}.`
      : "Noem en beschrijf de belangrijkste begrippen van dit onderwerp."
  }
  if (begrippen.length >= 2) {
    return `Wat is het verband tussen ${begrippen[0]} en ${begrippen[1]}?`
  }
  return begrippen.length > 0
    ? `Leg in eigen woorden uit wat ${begrippen[0]} betekent en waarom het belangrijk is.`
    : "Leg dit onderwerp in eigen woorden uit."
}

const VAKKLEUR: Record<string, string> = {
  "economie-vwo": "#f97316",
  "bedrijfseconomie-vwo": "#f59e0b",
  "wiskunde-a-vwo": "#10b981",
  "wiskunde-b-vwo": "#10b981",
  "biologie-vwo": "#10b981",
  "scheikunde-vwo": "#3b82f6",
  "geschiedenis-vwo": "#8b5cf6",
  "nederlands-vwo": "#06b6d4",
  "duits-vwo": "#ef4444",
  "frans-vwo": "#8b5cf6",
  "engels-vwo": "#06b6d4",
  "aardrijkskunde-vwo": "#10b981",
  "natuurkunde-vwo": "#f59e0b",
  "filosofie-vwo": "#6366f1",
  "economie-havo": "#f97316",
  "bedrijfseconomie-havo": "#f59e0b",
  "wiskunde-a-havo": "#10b981",
  "wiskunde-b-havo": "#10b981",
  "biologie-havo": "#10b981",
  "scheikunde-havo": "#3b82f6",
  "geschiedenis-havo": "#8b5cf6",
  "nederlands-havo": "#06b6d4",
  "duits-havo": "#ef4444",
  "frans-havo": "#8b5cf6",
  "engels-havo": "#06b6d4",
  "aardrijkskunde-havo": "#10b981",
  "natuurkunde-havo": "#f59e0b",
  "filosofie-havo": "#6366f1",
}

export default function HerhalenPage() {
  const { todayItems, verwerkBeoordeling, isLoading } = useHerhaling()
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [antwoordZichtbaar, setAntwoordZichtbaar] = useState<Record<string, boolean>>({})
  const [samenvattingOpen, setSamenvattingOpen] = useState<Record<string, boolean>>({})
  const [beoordeeld, setBeoordeeld] = useState<Record<string, boolean>>({})
  const [openVak, setOpenVak] = useState<string | null>(null)

  const handleBeoordeling = async (itemId: string, beoordeling: "ja" | "twijfel" | "nee") => {
    await verwerkBeoordeling(itemId, beoordeling)
    setBeoordeeld(prev => ({ ...prev, [itemId]: true }))
    // Open volgende onbeoordeelde item
    const volgende = todayItems.find(i => i.id !== itemId && !beoordeeld[i.id ?? ""])
    setOpenItem(volgende?.id ?? null)
  }

  const toggleItem = (id: string) => {
    setOpenItem(prev => prev === id ? null : id)
    setAntwoordZichtbaar(prev => ({ ...prev, [id]: false }))
  }

  const aantalKlaar = Object.keys(beoordeeld).length
  const totaal = todayItems.length

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "100vh", background: "#F8F9FC", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#64748B", fontSize: 14 }}>Laden...</p>
        </div>
      </>
    )
  }

  if (todayItems.length === 0) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "100vh", background: "#F8F9FC", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}>Geen herhalingen voor vandaag</p>
          <p style={{ fontSize: 14, color: "#64748B" }}>Goed bezig — vink nieuwe leerdoelen af om ze later te herhalen.</p>
          <Link href="/dashboard" style={{ marginTop: 8, fontSize: 13, color: "#2563EB", textDecoration: "none" }}>Terug naar dashboard</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", background: "#F8F9FC", padding: "32px 16px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#0F172A", margin: 0 }}>Herhalen</h1>
            <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>
              {totaal} leerdoel{totaal !== 1 ? "en" : ""} te herhalen vandaag — {aantalKlaar} van {totaal} afgerond
            </p>
            {/* Voortgangsbalk */}
            <div style={{ marginTop: 10, height: 4, background: "#E8ECF0", borderRadius: 4, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${totaal > 0 ? (aantalKlaar / totaal) * 100 : 0}%`,
                background: "#2563EB",
                borderRadius: 4,
                transition: "width 0.3s ease"
              }} />
            </div>
          </div>

          {/* Gegroepeerde items per vak */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {(() => {
              const groepenPerVak = todayItems.reduce((acc, item) => {
                const key = item.vakId ?? ""
                if (!acc[key]) acc[key] = []
                acc[key].push(item)
                return acc
              }, {} as Record<string, typeof todayItems>)

              return Object.entries(groepenPerVak).map(([vakId, vakItems]) => {
                const kleur = VAKKLEUR[vakId] ?? "#2563EB"
                const vakNaam = vakItems[0]?.vakNaam ?? vakId
                const isVakOpen = openVak === vakId
                const aantalKlaarVak = vakItems.filter(i => beoordeeld[i.id ?? ""]).length

                return (
                  <div key={vakId} style={{ background: "white", borderRadius: 12, border: "1px solid #E8ECF0", overflow: "hidden" }}>
                    {/* Vak header */}
                    <button
                      onClick={() => setOpenVak(prev => prev === vakId ? null : vakId)}
                      style={{
                        width: "100%", display: "flex", alignItems: "center", gap: 12,
                        padding: "14px 16px", background: "none", border: "none", cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: kleur, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A" }}>{vakNaam}</span>
                      </div>
                      <span style={{ fontSize: 12, color: "#64748B", marginRight: 8 }}>
                        {aantalKlaarVak === vakItems.length ? (
                          <span style={{ color: "#16a34a" }}>Alles af</span>
                        ) : (
                          `${vakItems.length} item${vakItems.length !== 1 ? "s" : ""}`
                        )}
                      </span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2"
                        style={{ transform: isVakOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* Uitklapbare items binnen vak */}
                    {isVakOpen && (
                      <div style={{ borderTop: "1px solid #F1F5F9", display: "flex", flexDirection: "column" }}>
                        {vakItems.map(item => {
                          const id = item.id ?? ""
                          const isOpen = openItem === id
                          const isKlaar = beoordeeld[id]
                          const itemBegrippen = getBegrippenVanLeerdoel(item.leerdoelId ?? "").slice(0, 6)

                          return (
                            <div key={id} style={{
                              borderBottom: "1px solid #F1F5F9",
                              opacity: isKlaar ? 0.5 : 1,
                              transition: "opacity 0.2s",
                            }}>
                              {/* Item header */}
                              <button
                                onClick={() => toggleItem(id)}
                                style={{
                                  width: "100%", display: "flex", alignItems: "center", gap: 10,
                                  padding: "12px 16px", background: "none", border: "none", cursor: "pointer",
                                  textAlign: "left",
                                }}
                              >
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                                    <span style={{ fontSize: 11, color: "#94A3B8" }}>
                                      {item.intervalDagen <= 1 ? "Eerste herhaling" : item.intervalDagen <= 3 ? "Tweede herhaling" : "Derde herhaling"}
                                    </span>
                                  </div>
                                  <p style={{ fontSize: 13, fontWeight: 500, color: "#0F172A", margin: 0, overflow: isOpen ? "visible" : "hidden", textOverflow: isOpen ? "clip" : "ellipsis", whiteSpace: isOpen ? "normal" : "nowrap" }}>
                                    {formatOmschrijving((item.leerdoelOmschrijving ?? ""))}
                                  </p>
                                </div>
                                <div style={{ flexShrink: 0 }}>
                                  {isKlaar ? (
                                    <span style={{ fontSize: 12, color: "#16a34a" }}>Afgerond</span>
                                  ) : (
                                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth="2"
                                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                </div>
                              </button>

                              {/* Uitklapbare inhoud */}
                              {isOpen && !isKlaar && (
                                <div style={{ borderTop: "1px solid #F1F5F9", padding: "16px 16px 20px" }}>

                                  {/* Leerdoel */}
                                  <div style={{ marginBottom: 16 }}>
                                    <p style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                                      Leerdoel
                                    </p>
                                    <p style={{ fontSize: 15, fontWeight: 600, color: "#0F172A", margin: 0, lineHeight: 1.5, whiteSpace: "normal", wordBreak: "break-word" }}>
                                      {formatOmschrijving(item.leerdoelOmschrijving ?? "")}
                                    </p>
                                  </div>

                                  {/* Kernbegrippen */}
                                  {itemBegrippen.length > 0 && (
                                    <div style={{ marginBottom: 16 }}>
                                      <p style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                                        Kernbegrippen
                                      </p>
                                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                        {itemBegrippen.map(b => (
                                          <span key={b} style={{
                                            fontSize: 12, padding: "3px 10px", borderRadius: 20,
                                            background: "#F1F5F9", color: "#374151", fontWeight: 500
                                          }}>
                                            {b}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Samenvatting */}
                                  {(() => {
                                    const uitleggen = itemBegrippen
                                      .map(term => begrippen.find(b => b.term.toLowerCase() === term.toLowerCase()))
                                      .filter(Boolean)
                                      .map(b => `${b!.term.charAt(0).toUpperCase() + b!.term.slice(1)}: ${b!.definitie}`)

                                    if (uitleggen.length === 0) return null

                                    return (
                                      <div style={{ marginBottom: 16 }}>
                                        <button
                                          onClick={() => setSamenvattingOpen(prev => ({ ...prev, [id]: !prev[id] }))}
                                          style={{
                                            display: "flex", alignItems: "center", gap: 6,
                                            background: "none", border: "none", cursor: "pointer",
                                            padding: 0, fontSize: 12, color: "#2563EB", fontWeight: 500
                                          }}
                                        >
                                          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                            style={{ transform: samenvattingOpen[id] ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}>
                                            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          {samenvattingOpen[id] ? "Verberg samenvatting" : "Lees samenvatting"}
                                        </button>
                                        {samenvattingOpen[id] && (
                                          <div style={{
                                            marginTop: 10, background: "#F8F9FC", border: "1px solid #E8ECF0",
                                            borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#374151", lineHeight: 1.7,
                                            whiteSpace: "pre-line"
                                          }}>
                                            {uitleggen.join('\n\n')}
                                          </div>
                                        )}
                                      </div>
                                    )
                                  })()}

                                  {/* Bedrijfseconomie melding */}
                                  {(item.vakId === "bedrijfseconomie-vwo" || item.vakId === "bedrijfseconomie-havo") && (
                                    <div style={{
                                      marginBottom: 16,
                                      background: "#FFFBEB",
                                      border: "1px solid #FDE68A",
                                      borderRadius: 8,
                                      padding: "10px 14px",
                                      fontSize: 13,
                                      color: "#92400E"
                                    }}>
                                      Oefenvragen voor dit vak zijn tijdelijk niet beschikbaar. We werken aan een update.
                                    </div>
                                  )}

                                  {/* Oefenvraag — lazy loaded via API */}
                                  {item.leerdoelId && (
                                    <OefenvraagSection
                                      leerdoelId={item.leerdoelId}
                                      vakId={item.vakId}
                                      intervalDagen={item.intervalDagen}
                                      itemId={id}
                                      antwoordZichtbaar={antwoordZichtbaar}
                                      setAntwoordZichtbaar={setAntwoordZichtbaar}
                                    />
                                  )}

                                  {/* Beoordeling */}
                                  <div>
                                    <p style={{ fontSize: 11, fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                                      Hoe ging het?
                                    </p>
                                    <div style={{ display: "flex", gap: 8 }}>
                                      <button
                                        onClick={() => handleBeoordeling(id, "ja")}
                                        style={{
                                          flex: 1, padding: "10px 0", borderRadius: 8,
                                          border: "1px solid #BBF7D0", background: "#F0FDF4",
                                          color: "#16a34a", fontSize: 13, fontWeight: 500, cursor: "pointer"
                                        }}
                                      >
                                        Goed begrepen
                                      </button>
                                      <button
                                        onClick={() => handleBeoordeling(id, "twijfel")}
                                        style={{
                                          flex: 1, padding: "10px 0", borderRadius: 8,
                                          border: "1px solid #FDE68A", background: "#FFFBEB",
                                          color: "#d97706", fontSize: 13, fontWeight: 500, cursor: "pointer"
                                        }}
                                      >
                                        Twijfel
                                      </button>
                                      <button
                                        onClick={() => handleBeoordeling(id, "nee")}
                                        style={{
                                          flex: 1, padding: "10px 0", borderRadius: 8,
                                          border: "1px solid #FECACA", background: "#FEF2F2",
                                          color: "#dc2626", fontSize: 13, fontWeight: 500, cursor: "pointer"
                                        }}
                                      >
                                        Nog aan werken
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })
            })()}
          </div>

          {/* Alles klaar */}
          {aantalKlaar === totaal && totaal > 0 && (
            <div style={{ marginTop: 32, textAlign: "center" }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#0F172A" }}>Alle herhalingen afgerond</p>
              <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>Goed gedaan. Tot morgen.</p>
              <Link href="/dashboard" style={{ display: "inline-block", marginTop: 16, fontSize: 13, color: "#2563EB", textDecoration: "none" }}>
                Terug naar dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

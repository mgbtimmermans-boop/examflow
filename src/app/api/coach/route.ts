import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { modus, vak, onderwerp, niveau, profiel, userInput } = await req.json();
    const systemPrompt = buildSystemPrompt(modus, niveau, profiel);
    const userPrompt = buildUserPrompt(modus, vak, onderwerp, userInput);
    const message = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      messages: [{ role: "user", content: userPrompt }],
      system: systemPrompt,
    });
    const text = message.content[0].type === "text" ? message.content[0].text : "";
    return NextResponse.json({ response: text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Er ging iets mis" }, { status: 500 });
  }
}

function buildSystemPrompt(modus: string, niveau: string, profiel: string): string {
  const niveauContext = {
    MAVO: "Spreek de leerling aan op B1-niveau. Focus op praktische toepassing en concrete voorbeelden. Vermijd jargon.",
    HAVO: "Spreek de leerling aan op B2-niveau. Combineer theorie met toepassing. Gebruik heldere structuur.",
    VWO: "Spreek de leerling aan op C1-niveau. Ga diep in op theoretische kaders, nuances en complexe verbanden.",
  }[niveau] ?? "";

  const modusContext = {
    uitlegger: `Je bent een geduldige en heldere docent. Leg het gevraagde concept stap voor stap uit. ${niveauContext} Gebruik maximaal 3 alinea's. Eindig altijd met een kerninzicht in één zin.`,
    overhoorder: `Je bent een strenge maar eerlijke examinator. Genereer één oefenvraag op ${niveau}-examenniveau voor het aangegeven onderwerp. Als de leerling een antwoord geeft, beoordeel dan op: 1. Inhoudelijke juistheid (geef een score 1-10) 2. Formulering (past dit bij een examenantwoord?) 3. Verbeterpunten (concreet en bondig). Baseer je feedback op de stijl van officiële correctievoorschriften.`,
    motivator: `Je bent een enthousiaste maar nuchtere studiecoach. Analyseer de voortgangsdata van de leerling en geef een korte, feitelijk onderbouwde peptalk (max 3 zinnen). Wees specifiek, niet vaag. Verwijs naar concrete percentages of aantallen als die beschikbaar zijn.`,
  }[modus] ?? "";

  return `${modusContext}\n\nLeerling profiel: ${niveau} - ${profiel}. Antwoord altijd in het Nederlands.`;
}

function buildUserPrompt(modus: string, vak: string, onderwerp: string, userInput?: string): string {
  if (modus === "uitlegger") return `Leg het volgende uit voor het vak ${vak}: "${onderwerp}"`;
  if (modus === "overhoorder") {
    if (!userInput) return `Genereer een oefenvraag over "${onderwerp}" voor het vak ${vak}.`;
    return `Beoordeel dit antwoord op de oefenvraag over "${onderwerp}" (${vak}): "${userInput}"`;
  }
  if (modus === "motivator") return `Geef motivatie op basis van deze voortgangsdata: ${userInput}`;
  return userInput ?? "";
}

"use client";
import { useState, useCallback } from "react";
import {
  ExamenVraag, OpenAntwoord, RekenAntwoord,
  ZelfBeoordeling,
} from "@/types/scoreWizard";

export type WizardFase = "antwoorden" | "nakijken" | "resultaat";

export function useScoreWizard(vraag: ExamenVraag, uid: string) {
  const [fase, setFase] = useState<WizardFase>("antwoorden");
  const [openAntwoord, setOpenAntwoord] = useState<OpenAntwoord>({
    kern: "", verbinding: "", context: "",
  });
  const [rekenAntwoord, setRekenAntwoord] = useState<RekenAntwoord>({
    stappen: {}, eenheden: {},
  });
  const [zelfBeoordeling, setZelfBeoordeling] = useState<ZelfBeoordeling[]>([]);
  const [opgeslagen, setOpgeslagen] = useState(false);

  const scanKeywords = useCallback((tekst: string) => {
    const signaalwoorden = [
      "omdat", "want", "dus", "gevolg", "hieruit blijkt", "daardoor",
      "waardoor", "hierdoor", "dit leidt tot", "doordat",
      "als gevolg", "hieruit volgt", "dit betekent", "namelijk",
    ];
    const bronVerwijzingen = [
      "bron", "regel", "tekst", "grafiek", "tabel", "alinea",
      "fragment", "passage", "in de tekst", "de auteur", "blijkt uit",
    ];
    const lager = tekst.toLowerCase();
    return {
      heeftSignaalwoord: signaalwoorden.some(w => lager.includes(w)),
      heeftBronVerwijzing: bronVerwijzingen.some(w => lager.includes(w)),
    };
  }, []);

  const volledigAntwoord = useCallback(() => {
    const { kern, verbinding, context } = openAntwoord;
    if (!kern) return "";
    let antwoord = kern;
    if (verbinding) antwoord += ` ${verbinding} `;
    if (context) antwoord += context;
    return antwoord;
  }, [openAntwoord]);

  const kanNakijken = useCallback(() => {
    if (vraag.modus === "open") return openAntwoord.kern.trim().length > 10;
    const stappen = Object.values(rekenAntwoord.stappen);
    return stappen.filter(s => s.trim().length > 0).length >= 1;
  }, [vraag.modus, openAntwoord, rekenAntwoord]);

  const toggleCriterium = useCallback((criteriumId: string) => {
    setZelfBeoordeling(prev => {
      const bestaand = prev.find(z => z.criteriumId === criteriumId);
      if (bestaand) {
        return prev.map(z =>
          z.criteriumId === criteriumId ? { ...z, antwoord: !z.antwoord } : z
        );
      }
      return [...prev, { criteriumId, antwoord: true }];
    });
  }, []);

  const setAntwoord = useCallback((criteriumId: string, antwoord: boolean) => {
    setZelfBeoordeling(prev => {
      const bestaand = prev.find(z => z.criteriumId === criteriumId);
      if (bestaand) {
        return prev.map(z =>
          z.criteriumId === criteriumId ? { ...z, antwoord } : z
        );
      }
      return [...prev, { criteriumId, antwoord }];
    });
  }, []);

  const berekenScore = useCallback(() => {
    return vraag.correctieVoorschrift.reduce((total, criterium) => {
      const beoordeling = zelfBeoordeling.find(z => z.criteriumId === criterium.id);
      return beoordeling?.antwoord ? total + criterium.punten : total;
    }, 0);
  }, [vraag.correctieVoorschrift, zelfBeoordeling]);

  const slaOpInFirestore = useCallback(async () => {
    if (opgeslagen) return;

    // Bouw het object zonder undefined velden
    const data: Record<string, unknown> = {
      vraagId: vraag.id,
      vakId: vraag.vakId,
      syllabusItem: vraag.syllabusItem,
      behaaldePunten: berekenScore(),
      maxPunten: vraag.maxPunten,
      zelfBeoordeling,
      datum: new Date().toISOString().split("T")[0],
    };

    // Voeg alleen toe als het vak de juiste modus heeft
    if (vraag.modus === "open" && openAntwoord) {
      data.openAntwoord = openAntwoord;
    }
    if (vraag.modus === "reken" && rekenAntwoord) {
      data.rekenAntwoord = rekenAntwoord;
    }

    try {
      const { db } = await import("@/lib/firebase");
      const { doc, setDoc, serverTimestamp } = await import("firebase/firestore");
      if (!db) return;
      await setDoc(
        doc(db, "users", uid, "scoreWizard", `${vraag.id}_${Date.now()}`),
        { ...data, timestamp: serverTimestamp() }
      );
      setOpgeslagen(true);
    } catch (e) {
      console.error("Opslaan mislukt:", e);
    }
  }, [vraag, berekenScore, zelfBeoordeling, openAntwoord, rekenAntwoord, uid, opgeslagen]);

  return {
    fase, setFase,
    openAntwoord, setOpenAntwoord,
    rekenAntwoord, setRekenAntwoord,
    zelfBeoordeling, toggleCriterium, setAntwoord,
    scanKeywords, volledigAntwoord,
    kanNakijken, berekenScore,
    slaOpInFirestore, opgeslagen,
  };
}

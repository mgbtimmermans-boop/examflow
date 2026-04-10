import { VakSyllabus } from "@/types/syllabus";

export const NEDERLANDS_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "nederlands-havo", niveau: "HAVO",
  domeinen: [
    {
      id: "nl-dom-a", naam: "Domein A: Leesvaardigheid", ceRelevant: true,
      subdomeinen: [
        {
          id: "nl-sub-a1", naam: "A1 — Analyseren en interpreteren",
          leerdoelen: [
            {
              id: "nl-ha-a1-1",
              omschrijving: "vaststellen tot welke tekstsoort een tekst of tekstgedeelte behoort; vaststellen of een tekst of tekstgedeelte uiteenzettend, beschouwend of betogend is.",
              begrippen: ["uiteenzettende tekst (uiteenzetting)", "beschouwende tekst (beschouwing)", "betogende tekst (betoog)"],
            },
            {
              id: "nl-ha-a1-2",
              omschrijving: "het schrijfdoel van een tekst of tekstgedeelte vaststellen; corresponderende schrijfdoelen zijn: informeren/uiteenzetten (uiteenzettend), ter overweging aanbieden (beschouwend), overtuigen / tot actie aanzetten (betogend); het belangrijkste schrijfdoel vaststellen als meerdere schrijfdoelen voorkomen.",
              begrippen: [],
            },
            {
              id: "nl-ha-a1-3",
              omschrijving: "de hoofdgedachte van een tekst(gedeelte) aangeven.",
              begrippen: [],
            },
            {
              id: "nl-ha-a1-4",
              omschrijving: "relaties tussen delen van een tekst aangeven.",
              begrippen: ["oorzaak-gevolg", "middel-doel", "standpunt-argument", "opsomming"],
            },
            {
              id: "nl-ha-a1-5",
              omschrijving: "conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur.",
              begrippen: [],
            },
            {
              id: "nl-ha-a1-6",
              omschrijving: "standpunten en soorten argumenten herkennen en onderscheiden (conform domein D).",
              begrippen: ["standpunt", "argument", "tegenargument", "feitelijke uitspraak", "waarderende uitspraak"],
            },
            {
              id: "nl-ha-a1-7",
              omschrijving: "argumentatieschema's herkennen (conform domein D).",
              begrippen: ["argumentatieschema op basis van oorzaak en gevolg", "argumentatieschema op basis van kenmerk of eigenschap", "argumentatieschema op basis van voor- en nadelen", "argumentatieschema op basis van voorbeelden", "argumentatieschema op basis van vergelijking", "argumentatieschema op basis van autoriteit"],
            },
          ],
        },
        {
          id: "nl-sub-a2", naam: "A2 — Beoordelen",
          leerdoelen: [
            {
              id: "nl-ha-a2-1",
              omschrijving: "een betogende tekst of betogend tekstgedeelte op aanvaardbaarheid beoordelen en in deze tekst drogredenen herkennen (conform domein D).",
              begrippen: ["aanvaardbaarheid", "drogreden"],
            },
          ],
        },
        {
          id: "nl-sub-a3", naam: "A3 — Samenvatten",
          leerdoelen: [
            {
              id: "nl-ha-a3-1",
              omschrijving: "teksten en tekstgedeelten beknopt samenvatten: reduceren tot de hoofduitspraak of hoofduitspraken met (belangrijke) ondergeschikte uitspraken; informatie (her)ordenen tot hoofduitspraak of hoofduitspraken met ondergeschikte uitspraken; beoordelen of een gegeven samenvatting de hoofduitspraak of hoofduitspraken bevat.",
              begrippen: [],
            },
          ],
        },
      ],
    },
    {
      id: "nl-dom-d", naam: "Domein D: Argumentatieve vaardigheden (analyseren en beoordelen)", ceRelevant: true,
      subdomeinen: [
        {
          id: "nl-sub-d-analyse", naam: "D — Analyseren",
          leerdoelen: [
            {
              id: "nl-ha-d-1",
              omschrijving: "standpunten en argumenten in een betoog identificeren en interpreteren.",
              begrippen: ["standpunt", "argument", "tegenargument", "argumentatie"],
            },
            {
              id: "nl-ha-d-2",
              omschrijving: "argumentatiestructuren onderscheiden/herkennen: enkelvoudige, onder- en nevenschikkende argumentaties.",
              begrippen: ["enkelvoudige argumentatie", "onderschikkende argumentatie (ketenargumentatie)", "nevenschikkende argumentatie"],
            },
            {
              id: "nl-ha-d-3",
              omschrijving: "feitelijke en waarderende argumenten onderscheiden.",
              begrippen: ["feitelijke uitspraken", "waarderende uitspraken"],
            },
            {
              id: "nl-ha-d-4",
              omschrijving: "de volgende argumentatieschema's herkennen: op basis van oorzaak en gevolg; kenmerk of eigenschap; voor- en nadelen; voorbeelden; vergelijking; autoriteit.",
              begrippen: [
                "argumentatieschema oorzaak en gevolg",
                "argumentatieschema kenmerk of eigenschap",
                "argumentatieschema voor- en nadelen",
                "argumentatieschema voorbeelden",
                "argumentatieschema vergelijking",
                "argumentatieschema autoriteit",
              ],
            },
          ],
        },
        {
          id: "nl-sub-d-beoordeling", naam: "D — Beoordelen",
          leerdoelen: [
            {
              id: "nl-ha-d-5",
              omschrijving: "een betoog op aanvaardbaarheid beoordelen op basis van: aanvaardbaarheid en controleerbaarheid van feitelijke argumenten; betrouwbaarheid van bronnen; aanvaardbaarheid van waarderende argumenten; relevantie van argumenten; consistentie van de argumentatie; toereikendheid van de argumentatie.",
              begrippen: ["aanvaardbaarheid van feitelijke uitspraken", "controleerbaarheid van feitelijke uitspraken", "betrouwbaarheid van bronnen", "aanvaardbaarheid van waarderende uitspraken", "relevantie van argumenten", "consistentie van argumentatie", "toereikendheid van argumentatie"],
            },
            {
              id: "nl-ha-d-6",
              omschrijving: "drogredenen herkennen — onjuist gebruik van een argumentatieschema: onjuist beroep op oorzaak-gevolgschema; onjuist beroep op kenmerk- of eigenschapsschema; onjuist beroep op voor-en-nadelenschema (overdrijven van voor- of nadelen; vals dilemma); onjuist beroep op voorbeeldschema (overhaaste generalisatie); onjuist beroep op vergelijkingsschema (verkeerde vergelijking); onjuist beroep op autoriteit.",
              begrippen: [
                "onjuist beroep op oorzaak-gevolgschema",
                "onjuist beroep op kenmerk- of eigenschapsschema",
                "overdrijven van voor- of nadelen",
                "vals dilemma",
                "overhaaste generalisatie",
                "verkeerde vergelijking",
                "onjuist beroep op autoriteit",
              ],
            },
            {
              id: "nl-ha-d-7",
              omschrijving: "drogredenen herkennen — overtreding van een discussieregel: de persoonlijke aanval; het ontduiken van de bewijslast; de cirkelredenering; het vertekenen van een standpunt; het bespelen van publiek.",
              begrippen: [
                "persoonlijke aanval",
                "ontduiken van de bewijslast",
                "cirkelredenering",
                "vertekenen van een standpunt",
                "bespelen van publiek",
              ],
            },
          ],
        },
      ],
    },
  ],
};

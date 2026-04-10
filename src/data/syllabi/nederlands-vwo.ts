import { VakSyllabus } from "@/types/syllabus";

export const NEDERLANDS_VWO_SYLLABUS: VakSyllabus = {
  vakId: "nederlands-vwo",
  niveau: "VWO",
  domeinen: [
    {
      id: "nl-dom-a",
      code: "A",
      titel: "Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nl-sub-a1",
          code: "A1",
          titel: "Analyseren en interpreteren",
          leerdoelen: [
            {
              id: "nl-a1-1",
              omschrijving:
                "De kandidaat kan vaststellen tot welke tekstsoort een tekst of tekstgedeelte behoort; de kandidaat kan vaststellen of een tekst of tekstgedeelte uiteenzettend, beschouwend of betogend is.",
              begrippen: [
                "betogende tekst",
                "beschouwende tekst",
                "uiteenzettende tekst",
              ],
            },
            {
              id: "nl-a1-2",
              omschrijving:
                "De kandidaat kan het schrijfdoel van een tekst of tekstgedeelte vaststellen; corresponderende schrijfdoelen bij uiteenzettende, beschouwende of betogende teksten zijn respectievelijk: informeren/uiteenzetten, ter overweging aanbieden en overtuigen / tot actie aanzetten.",
            },
            {
              id: "nl-a1-3",
              omschrijving:
                "De kandidaat kan de hoofdgedachte van een tekst(gedeelte) aangeven; de kandidaat kan onderwerpen en hoofdgedachten van gehele teksten en tekstgedeelten aanwijzen of parafraseren voor zover expliciet aanwezig en verwoorden voor zover impliciet aanwezig.",
            },
            {
              id: "nl-a1-4",
              omschrijving:
                "De kandidaat kan relaties tussen delen van een tekst aangeven; de kandidaat kan inhoudelijke en functionele relaties benoemen die ex- of impliciet tussen tekstonderdelen aanwezig zijn.",
              begrippen: [
                "verwijzingsrelaties",
                "oorzaak-gevolg",
                "doel-middel",
                "standpunt-argument-subargument",
                "algemene uitspraak-toelichting",
              ],
            },
            {
              id: "nl-a1-5",
              omschrijving:
                "De kandidaat kan conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur.",
            },
            {
              id: "nl-a1-6",
              omschrijving:
                "De kandidaat kan standpunten en soorten argumenten herkennen en onderscheiden conform de eindterm onder domein D.",
            },
            {
              id: "nl-a1-7",
              omschrijving:
                "De kandidaat kan argumentatieschema's herkennen conform de eindterm onder domein D.",
            },
          ],
        },
        {
          id: "nl-sub-a2",
          code: "A2",
          titel: "Beoordelen",
          leerdoelen: [
            {
              id: "nl-a2-1",
              omschrijving:
                "De kandidaat kan een betogende tekst of betogend tekstgedeelte op aanvaardbaarheid beoordelen en in deze tekst drogredenen herkennen conform de eindterm onder D.",
            },
          ],
        },
        {
          id: "nl-sub-a3",
          code: "A3",
          titel: "Samenvatten",
          leerdoelen: [
            {
              id: "nl-a3-1",
              omschrijving:
                "De kandidaat kan teksten en tekstgedeelten reduceren tot de hoofduitspraak of hoofduitspraken met (belangrijke) ondergeschikte uitspraken.",
            },
            {
              id: "nl-a3-2",
              omschrijving:
                "De kandidaat kan informatie uit teksten en tekstgedeelten (her)ordenen tot hoofduitspraak of hoofduitspraken met (belangrijke) ondergeschikte uitspraken.",
            },
            {
              id: "nl-a3-3",
              omschrijving:
                "De kandidaat kan beoordelen of een gegeven samenvatting de hoofduitspraak of hoofduitspraken van de tekst of het tekstgedeelte bevat met (belangrijke) ondergeschikte uitspraken.",
            },
          ],
        },
      ],
    },
    {
      id: "nl-dom-d",
      code: "D",
      titel: "Argumentatieve vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nl-sub-d1",
          code: "D1",
          titel: "Analyseren",
          leerdoelen: [
            {
              id: "nl-d1-1",
              omschrijving:
                "De kandidaat kan standpunten en argumenten identificeren en interpreteren.",
              begrippen: [
                "standpunt",
                "argument",
                "tegenargument",
                "argumentatie",
              ],
            },
            {
              id: "nl-d1-2",
              omschrijving:
                "De kandidaat kan argumentatiestructuren onderscheiden/herkennen: enkelvoudige, onder- en nevenschikkende argumentaties.",
              begrippen: [
                "enkelvoudige argumentatie",
                "onderschikkende argumentatie",
                "nevenschikkende argumentatie",
                "argumentatiestructuur",
              ],
            },
            {
              id: "nl-d1-3",
              omschrijving:
                "De kandidaat kan feitelijke en waarderende argumenten onderscheiden.",
              begrippen: ["feitelijke uitspraken", "waarderende uitspraken"],
            },
            {
              id: "nl-d1-4",
              omschrijving:
                "De kandidaat kan de volgende argumentatieschema's herkennen: op basis van oorzaak en gevolg; kenmerk of eigenschap; voor- en nadelen; voorbeelden; vergelijking; autoriteit.",
              begrippen: [
                "argumentatieschema",
                "argumentatie op basis van oorzaak en gevolg",
                "argumentatie op basis van kenmerk of eigenschap",
                "argumentatie op basis van voor- en nadelen",
                "argumentatie op basis van voorbeelden",
                "argumentatie op basis van vergelijking",
                "argumentatie op basis van autoriteit",
              ],
            },
          ],
        },
        {
          id: "nl-sub-d2",
          code: "D2",
          titel: "Beoordelen",
          leerdoelen: [
            {
              id: "nl-d2-1",
              omschrijving:
                "De kandidaat kan een betoog op aanvaardbaarheid beoordelen op basis van: aanvaardbaarheid en controleerbaarheid van feitelijke argumenten; betrouwbaarheid van bronnen; aanvaardbaarheid van waarderende argumenten; relevantie van argumenten; consistentie van de argumentatie; toereikendheid van de argumentatie.",
              begrippen: [
                "aanvaardbaarheid van argumentatie",
                "aanvaardbaarheid van feitelijke uitspraken",
                "controleerbaarheid van feitelijke uitspraken",
                "betrouwbaarheid van bronnen",
                "aanvaardbaarheid van waarderende uitspraken",
                "relevantie van argumenten",
                "consistentie van argumentatie",
                "toereikendheid van argumentatie",
              ],
            },
            {
              id: "nl-d2-2",
              omschrijving:
                "De kandidaat kan drogredenen herkennen: onjuist beroep op een oorzaak-gevolgschema; onjuist beroep op een kenmerk- of eigenschapsschema; onjuist beroep op een voor-en-nadelenschema: overdrijven van voor- of nadelen; onjuist beroep op een voor-en-nadelenschema: vals dilemma; onjuist beroep op een voorbeeldschema: overhaaste generalisatie; onjuist beroep op een vergelijkingsschema: verkeerde vergelijking; onjuist beroep op autoriteit; de persoonlijke aanval; het ontduiken van de bewijslast; de cirkelredenering; het vertekenen van een standpunt; het bespelen van publiek.",
              begrippen: [
                "drogredenen",
                "onjuist beroep op een oorzaak-gevolgschema",
                "onjuist beroep op een kenmerk- of eigenschapsschema",
                "overdrijven van voor- of nadelen",
                "vals dilemma",
                "overhaaste generalisatie",
                "verkeerde vergelijking",
                "onjuist beroep op autoriteit",
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

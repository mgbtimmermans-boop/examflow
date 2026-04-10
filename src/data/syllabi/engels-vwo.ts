import { VakSyllabus } from "@/types/syllabus";

export const ENGELS_VWO_SYLLABUS: VakSyllabus = {
  vakId: "engels-vwo",
  niveau: "VWO",
  domeinen: [
    {
      id: "en-dom-a",
      code: "A",
      titel: "Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "en-sub-a1",
          code: "A1",
          titel: "Eindtermen leesvaardigheid (CE)",
          leerdoelen: [
            {
              id: "en-a1-1",
              omschrijving:
                "De kandidaat kan aangeven welke informatie relevant is, gegeven een vaststaande behoefte.",
            },
            {
              id: "en-a1-2",
              omschrijving:
                "De kandidaat kan de hoofdgedachte van een tekst(gedeelte) aangeven.",
            },
            {
              id: "en-a1-3",
              omschrijving:
                "De kandidaat kan de betekenis van belangrijke elementen van een tekst aangeven.",
            },
            {
              id: "en-a1-4",
              omschrijving:
                "De kandidaat kan relaties tussen delen van een tekst aangeven.",
            },
            {
              id: "en-a1-5",
              omschrijving:
                "De kandidaat kan conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur.",
            },
          ],
        },
        {
          id: "en-sub-a2",
          code: "A2",
          titel: "ERK-niveaus en 'can do'-descriptoren (VWO Engels: C1-niveau)",
          leerdoelen: [
            {
              id: "en-a2-1",
              omschrijving:
                "De kandidaat kan correspondentie lezen: kan alle correspondentie begrijpen, een enkele keer met behulp van een woordenboek. (ERK C1)",
            },
            {
              id: "en-a2-2",
              omschrijving:
                "De kandidaat kan oriënterend lezen: kan snel lange, complexe teksten doorlezen en de relevante details vinden. (ERK B2)",
            },
            {
              id: "en-a2-3",
              omschrijving:
                "De kandidaat kan oriënterend lezen: kan snel de inhoud en relevantie herkennen van nieuwsberichten, artikelen en verslagen over uiteenlopende professionele onderwerpen en dan beslissen of nadere bestudering de moeite waard is. (ERK B2)",
            },
            {
              id: "en-a2-4",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan artikelen en verslagen over hedendaagse problemen begrijpen, waarin de schrijvers bepaalde stellingen of standpunten innemen. (ERK B2)",
            },
            {
              id: "en-a2-5",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan literaire en non-fictie teksten lezen met een redelijke mate van begrip voor het geheel en voor details. (ERK B2)",
            },
            {
              id: "en-a2-6",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan op detailniveau een breed scala van lange, complexe teksten begrijpen, die veel worden aangetroffen in het sociale, professionele of academische leven, en fijnere details herkennen zoals houdingen en uitgesproken of impliciete meningen, mits moeilijke passages herlezen kunnen worden. (ERK C1)",
            },
            {
              id: "en-a2-7",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan met gemak literaire en non-fictie teksten lezen. (ERK C1)",
            },
            {
              id: "en-a2-8",
              omschrijving:
                "De kandidaat kan instructies lezen: kan lange en complexe aanwijzingen begrijpen, met inbegrip van details over voorwaarden en waarschuwingen, mits hij of zij moeilijke passages kan herlezen. (ERK B2)",
            },
            {
              id: "en-a2-9",
              omschrijving:
                "De kandidaat kan instructies lezen: kan lange, complexe aanwijzingen bij een nieuwe machine of procedure op detailniveau begrijpen, ongeacht of de aanwijzingen betrekking hebben op zijn of haar eigen vakgebied, mits hij of zij moeilijke passages kan herlezen. (ERK C1)",
            },
          ],
          begrippen: [
            "Europees Referentiekader (ERK)",
            "ERK-niveau B2",
            "ERK-niveau C1",
            "correspondentie lezen",
            "oriënterend lezen",
            "lezen ter informatie en argumentatie",
            "instructies lezen",
            "can do-descriptoren",
            "Taalprofielen 2015",
          ],
        },
        {
          id: "en-sub-a3",
          code: "A3",
          titel: "Teksten en vraagvormen in het CE",
          leerdoelen: [
            {
              id: "en-a3-1",
              omschrijving:
                "De kandidaat is vertrouwd met meerkeuzevragen (traditioneel en meerkeuze-invulvragen), die samen ongeveer 60% van de scorepunten uitmaken. Meerkeuzevragen worden in de vreemde taal gesteld.",
            },
            {
              id: "en-a3-2",
              omschrijving:
                "De kandidaat is vertrouwd met voor gestructureerde vragen: in-/aanvulvragen, combinatie- of matchingvragen, beweringenvragen en ordeningsvragen.",
            },
            {
              id: "en-a3-3",
              omschrijving:
                "De kandidaat is vertrouwd met citeervragen: de kandidaat citeert een zin, woordgroep of woord uit de tekst.",
            },
            {
              id: "en-a3-4",
              omschrijving:
                "De kandidaat is vertrouwd met open vragen: korte antwoordvragen waarbij het antwoord in het Nederlands geformuleerd wordt, tenzij anders aangegeven.",
            },
            {
              id: "en-a3-5",
              omschrijving:
                "De kandidaat kan teksten lezen van uiteenlopende tekstsoorten: advertentie, krantenartikel, nieuwsbericht van internet, brief, e-mail, folder, informatiebulletin, ingezonden stuk, recensie, interview, passage uit literaire tekst. Het aantal teksten in een CE vwo kan variëren van 10 tot 16.",
            },
          ],
          begrippen: [
            "meerkeuzevraag",
            "meerkeuze-invulvraag",
            "in-/aanvulvraag",
            "combinatie-/matchingvraag",
            "beweringenvraag",
            "ordeningsvraag",
            "citeervraag",
            "open vraag",
          ],
        },
      ],
    },
  ],
};

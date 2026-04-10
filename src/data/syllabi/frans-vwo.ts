import { VakSyllabus } from "@/types/syllabus";

export const FRANS_VWO_SYLLABUS: VakSyllabus = {
  vakId: "frans-vwo",
  niveau: "VWO",
  domeinen: [
    {
      id: "fr-dom-a",
      code: "A",
      titel: "Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "fr-sub-a1",
          code: "A1",
          titel: "Eindtermen leesvaardigheid (CE)",
          leerdoelen: [
            {
              id: "fr-a1-1",
              omschrijving:
                "De kandidaat kan aangeven welke informatie relevant is, gegeven een vaststaande behoefte.",
            },
            {
              id: "fr-a1-2",
              omschrijving:
                "De kandidaat kan de hoofdgedachte van een tekst(gedeelte) aangeven.",
            },
            {
              id: "fr-a1-3",
              omschrijving:
                "De kandidaat kan de betekenis van belangrijke elementen van een tekst aangeven.",
            },
            {
              id: "fr-a1-4",
              omschrijving:
                "De kandidaat kan relaties tussen delen van een tekst aangeven.",
            },
            {
              id: "fr-a1-5",
              omschrijving:
                "De kandidaat kan conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur.",
            },
          ],
        },
        {
          id: "fr-sub-a2",
          code: "A2",
          titel: "ERK-niveaus en 'can do'-descriptoren (VWO Frans: B2-niveau)",
          leerdoelen: [
            {
              id: "fr-a2-1",
              omschrijving:
                "De kandidaat kan correspondentie lezen: kan correspondentie lezen met betrekking tot zijn of haar interessegebied en daarbij meteen de wezenlijke betekenis vatten. (ERK B2)",
            },
            {
              id: "fr-a2-2",
              omschrijving:
                "De kandidaat kan oriënterend lezen: kan snel lange, complexe teksten doorlezen en de relevante details vinden. (ERK B2)",
            },
            {
              id: "fr-a2-3",
              omschrijving:
                "De kandidaat kan oriënterend lezen: kan snel de inhoud en relevantie herkennen van nieuwsberichten, artikelen en verslagen over uiteenlopende professionele onderwerpen en dan beslissen of nadere bestudering de moeite waard is. (ERK B2)",
            },
            {
              id: "fr-a2-4",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan artikelen en verslagen over hedendaagse problemen begrijpen, waarin de schrijvers bepaalde stellingen of standpunten innemen. (ERK B2)",
            },
            {
              id: "fr-a2-5",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan literaire en non-fictie teksten lezen met een redelijke mate van begrip voor het geheel en voor details. (ERK B2)",
            },
            {
              id: "fr-a2-6",
              omschrijving:
                "De kandidaat kan lezen ter informatie en argumentatie: kan hoofdthema en belangrijkste argumenten begrijpen in eenvoudige teksten in tijdschriften, kranten of op internet. (ERK B1+)",
            },
            {
              id: "fr-a2-7",
              omschrijving:
                "De kandidaat kan instructies lezen: kan lange en complexe aanwijzingen begrijpen, met inbegrip van details over voorwaarden en waarschuwingen, mits hij of zij moeilijke passages kan herlezen. (ERK B2)",
            },
          ],
          begrippen: [
            "Europees Referentiekader (ERK)",
            "ERK-niveau B1",
            "ERK-niveau B2",
            "correspondentie lezen",
            "oriënterend lezen",
            "lezen ter informatie en argumentatie",
            "instructies lezen",
            "can do-descriptoren",
            "Taalprofielen 2015",
          ],
        },
        {
          id: "fr-sub-a3",
          code: "A3",
          titel: "Teksten en vraagvormen in het CE",
          leerdoelen: [
            {
              id: "fr-a3-1",
              omschrijving:
                "De kandidaat is vertrouwd met meerkeuzevragen (traditioneel en meerkeuze-invulvragen), die samen ongeveer 60% van de scorepunten uitmaken. Meerkeuzevragen worden in de vreemde taal gesteld.",
            },
            {
              id: "fr-a3-2",
              omschrijving:
                "De kandidaat is vertrouwd met voor gestructureerde vragen: in-/aanvulvragen, combinatie- of matchingvragen, beweringenvragen en ordeningsvragen.",
            },
            {
              id: "fr-a3-3",
              omschrijving:
                "De kandidaat is vertrouwd met citeervragen: de kandidaat citeert een zin, woordgroep of woord uit de tekst.",
            },
            {
              id: "fr-a3-4",
              omschrijving:
                "De kandidaat is vertrouwd met open vragen: korte antwoordvragen waarbij het antwoord in het Nederlands geformuleerd wordt, tenzij anders aangegeven.",
            },
            {
              id: "fr-a3-5",
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

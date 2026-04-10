import { VakSyllabus } from "@/types/syllabus";

export const DUITS_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "duits-havo",
  niveau: "HAVO",
  domeinen: [
    {
      id: "du-h-dom-a",
      naam: "Domein A: Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "du-h-sub-a1",
          naam: "A1: Eindtermen leesvaardigheid (CE)",
          leerdoelen: [
            {
              id: "du-h-a1-1",
              omschrijving:
                "aangeven welke informatie relevant is, gegeven een vaststaande behoefte",
            },
            {
              id: "du-h-a1-2",
              omschrijving:
                "de hoofdgedachte van een tekst(gedeelte) aangeven",
            },
            {
              id: "du-h-a1-3",
              omschrijving:
                "de betekenis van belangrijke elementen van een tekst aangeven",
            },
            {
              id: "du-h-a1-4",
              omschrijving: "relaties tussen delen van een tekst aangeven",
            },
            {
              id: "du-h-a1-5",
              omschrijving:
                "conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur",
            },
          ],
        },
        {
          id: "du-h-sub-a2",
          naam: "A2: ERK-niveaus en 'can do'-descriptoren (HAVO Duits: B2-niveau, voldoende (6+) = B2)",
          leerdoelen: [
            {
              id: "du-h-a2-1",
              omschrijving:
                "correspondentie lezen: kan correspondentie lezen met betrekking tot zijn of haar interessegebied en daarbij meteen de wezenlijke betekenis vatten (ERK B2)",
            },
            {
              id: "du-h-a2-2",
              omschrijving:
                "oriënterend lezen: kan snel lange, complexe teksten doorlezen en de relevante details vinden (ERK B2)",
            },
            {
              id: "du-h-a2-3",
              omschrijving:
                "oriënterend lezen: kan snel de inhoud en relevantie herkennen van nieuwsberichten, artikelen en verslagen over uiteenlopende professionele onderwerpen en dan beslissen of nadere bestudering de moeite waard is (ERK B2)",
            },
            {
              id: "du-h-a2-4",
              omschrijving:
                "oriënterend lezen: kan meer complexe advertenties begrijpen (ERK B2)",
            },
            {
              id: "du-h-a2-5",
              omschrijving:
                "lezen ter informatie en argumentatie: kan artikelen en verslagen over hedendaagse problemen begrijpen, waarin de schrijvers bepaalde stellingen of standpunten innemen (ERK B2)",
            },
            {
              id: "du-h-a2-6",
              omschrijving:
                "lezen ter informatie en argumentatie: kan literaire en non-fictie teksten lezen met een redelijke mate van begrip voor het geheel en voor details (ERK B2)",
            },
            {
              id: "du-h-a2-7",
              omschrijving:
                "instructies lezen: kan lange en complexe aanwijzingen begrijpen, met inbegrip van details over voorwaarden en waarschuwingen, mits hij of zij moeilijke passages kan herlezen (ERK B2)",
            },
          ],
        },
      ],
    },
  ],
};

import { VakSyllabus } from "@/types/syllabus";

export const ENGELS_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "engels-havo",
  niveau: "HAVO",
  domeinen: [
    {
      id: "en-h-dom-a",
      naam: "Domein A: Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "en-h-sub-a1",
          naam: "A1: Eindtermen leesvaardigheid (CE)",
          leerdoelen: [
            {
              id: "en-h-a1-1",
              omschrijving:
                "aangeven welke informatie relevant is, gegeven een vaststaande behoefte",
            },
            {
              id: "en-h-a1-2",
              omschrijving:
                "de hoofdgedachte van een tekst(gedeelte) aangeven",
            },
            {
              id: "en-h-a1-3",
              omschrijving:
                "de betekenis van belangrijke elementen van een tekst aangeven",
            },
            {
              id: "en-h-a1-4",
              omschrijving: "relaties tussen delen van een tekst aangeven",
            },
            {
              id: "en-h-a1-5",
              omschrijving:
                "conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur",
            },
          ],
        },
        {
          id: "en-h-sub-a2",
          naam: "A2: ERK-niveaus en 'can do'-descriptoren (HAVO Engels: C1-examen, voldoende ≈ B2)",
          leerdoelen: [
            {
              id: "en-h-a2-1",
              omschrijving:
                "correspondentie lezen: kan correspondentie lezen met betrekking tot zijn of haar interessegebied en daarbij meteen de wezenlijke betekenis vatten (ERK B2)",
            },
            {
              id: "en-h-a2-2",
              omschrijving:
                "correspondentie lezen: kan alle correspondentie begrijpen, een enkele keer met behulp van een woordenboek (ERK C1)",
            },
            {
              id: "en-h-a2-3",
              omschrijving:
                "oriënterend lezen: kan snel lange, complexe teksten doorlezen en de relevante details vinden (ERK B2)",
            },
            {
              id: "en-h-a2-4",
              omschrijving:
                "oriënterend lezen: kan snel de inhoud en relevantie herkennen van nieuwsberichten, artikelen en verslagen over uiteenlopende professionele onderwerpen en dan beslissen of nadere bestudering de moeite waard is (ERK B2)",
            },
            {
              id: "en-h-a2-5",
              omschrijving:
                "lezen ter informatie en argumentatie: kan artikelen en verslagen over hedendaagse problemen begrijpen, waarin de schrijvers bepaalde stellingen of standpunten innemen (ERK B2)",
            },
            {
              id: "en-h-a2-6",
              omschrijving:
                "lezen ter informatie en argumentatie: kan literaire en non-fictie teksten lezen met een redelijke mate van begrip voor het geheel en voor details (ERK B2)",
            },
            {
              id: "en-h-a2-7",
              omschrijving:
                "lezen ter informatie en argumentatie: kan op detailniveau een breed scala van lange, complexe teksten begrijpen die veel worden aangetroffen in het sociale, professionele of academische leven, en fijnere details herkennen zoals houdingen en uitgesproken of impliciete meningen, mits moeilijke passages herlezen kunnen worden (ERK C1)",
            },
            {
              id: "en-h-a2-8",
              omschrijving:
                "lezen ter informatie en argumentatie: kan met gemak literaire en non-fictie teksten lezen (ERK C1)",
            },
            {
              id: "en-h-a2-9",
              omschrijving:
                "instructies lezen: kan lange en complexe aanwijzingen begrijpen, met inbegrip van details over voorwaarden en waarschuwingen, mits hij of zij moeilijke passages kan herlezen (ERK B2)",
            },
          ],
        },
      ],
    },
  ],
};

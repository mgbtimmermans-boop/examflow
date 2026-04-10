import { VakSyllabus } from "@/types/syllabus";

export const FRANS_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "frans-havo",
  niveau: "HAVO",
  domeinen: [
    {
      id: "fr-h-dom-a",
      naam: "Domein A: Leesvaardigheid",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "fr-h-sub-a1",
          naam: "A1: Eindtermen leesvaardigheid (CE)",
          leerdoelen: [
            {
              id: "fr-h-a1-1",
              omschrijving:
                "aangeven welke informatie relevant is, gegeven een vaststaande behoefte",
            },
            {
              id: "fr-h-a1-2",
              omschrijving:
                "de hoofdgedachte van een tekst(gedeelte) aangeven",
            },
            {
              id: "fr-h-a1-3",
              omschrijving:
                "de betekenis van belangrijke elementen van een tekst aangeven",
            },
            {
              id: "fr-h-a1-4",
              omschrijving: "relaties tussen delen van een tekst aangeven",
            },
            {
              id: "fr-h-a1-5",
              omschrijving:
                "conclusies trekken met betrekking tot intenties, opvattingen en gevoelens van de auteur",
            },
          ],
        },
        {
          id: "fr-h-sub-a2",
          naam: "A2: ERK-niveaus en 'can do'-descriptoren (HAVO Frans: B1-niveau, voldoende (6+) = B1)",
          leerdoelen: [
            {
              id: "fr-h-a2-1",
              omschrijving:
                "correspondentie lezen: kan persoonlijke brieven, e-mails en vormen van sociale media voldoende begrijpen om met iemand te kunnen corresponderen (ERK B1)",
            },
            {
              id: "fr-h-a2-2",
              omschrijving:
                "correspondentie lezen: kan een eenvoudige formele brief of e-mail voldoende begrijpen om adequaat te kunnen reageren (ERK B1)",
            },
            {
              id: "fr-h-a2-3",
              omschrijving:
                "oriënterend lezen: kan relevante informatie vinden en begrijpen in brochures en korte officiële documenten op internet of in andere media (ERK B1)",
            },
            {
              id: "fr-h-a2-4",
              omschrijving:
                "oriënterend lezen: kan in langere teksten op internet of in andere media informatie zoeken over thema's binnen het eigen interessegebied (ERK B1+)",
            },
            {
              id: "fr-h-a2-5",
              omschrijving:
                "lezen ter informatie en argumentatie: kan belangrijke feitelijke informatie begrijpen in korte verslagen en artikelen (ERK B1)",
            },
            {
              id: "fr-h-a2-6",
              omschrijving:
                "lezen ter informatie en argumentatie: kan hoofdthema en belangrijkste argumenten begrijpen in eenvoudige teksten in tijdschriften, kranten of op internet (ERK B1+)",
            },
            {
              id: "fr-h-a2-7",
              omschrijving:
                "instructies lezen: kan helder geschreven, ondubbelzinnige instructies begrijpen (ERK B1)",
            },
          ],
        },
      ],
    },
  ],
};

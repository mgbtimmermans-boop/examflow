import { VakSyllabus } from "@/types/syllabus";

export const ECONOMIE_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "economie-havo", niveau: "HAVO",
  domeinen: [
    // ── Domein D: Concept Markt ───────────────────────────────────────────────
    {
      id: "dom-d", naam: "Domein D: Concept Markt", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d1", naam: "D1 — Marktvraag", leerdoelen: [
            {
              id: "d1-1",
              omschrijving: "Hoe via een verschuiving langs de collectieve vraaglijn een prijsverandering leidt tot een verandering van de gevraagde hoeveelheid.",
              begrippen: ["collectieve vraaglijn", "gevraagde hoeveelheid", "prijsverandering"],
            },
            {
              id: "d1-2",
              omschrijving: "Hoe een verandering in inkomen, behoeften, prijzen van andere producten of het aantal vragers leidt tot een verschuiving van de collectieve vraaglijn. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["inkomen", "behoeften", "prijzen van andere producten", "aantal vragers"],
            },
          ],
        },
        {
          id: "sub-d2", naam: "D2 — Marktaanbod", leerdoelen: [
            {
              id: "d2-1",
              omschrijving: "Hoe via een verschuiving langs de collectieve aanbodlijn een prijsverandering leidt tot een verandering van de aangeboden hoeveelheid.",
              begrippen: ["collectieve aanbodlijn", "aangeboden hoeveelheid"],
            },
            {
              id: "d2-2",
              omschrijving: "Hoe een verandering van de prijzen van productiefactoren, technologische ontwikkeling, natuurlijke omstandigheden of het aantal aanbieders leidt tot een verschuiving van de collectieve aanbodlijn. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["prijzen van productiefactoren", "technologische ontwikkeling", "natuurlijke omstandigheden", "aantal aanbieders"],
            },
          ],
        },
        {
          id: "sub-d3", naam: "D3 — Marktmechanisme", leerdoelen: [
            {
              id: "d3-1",
              omschrijving: "Het marktmodel: Qv = aP + b (a < 0), Qa = cP + d (c > 0), evenwicht indien Qv = Qa.",
              begrippen: ["gevraagde hoeveelheid (Qv)", "aangeboden hoeveelheid (Qa)", "marktprijs (P)"],
              formules: ["Qv = aP + b (a < 0)", "Qa = cP + d (c > 0)", "evenwicht: Qv = Qa"],
            },
            {
              id: "d3-2",
              omschrijving: "Hoe op een markt van volledige mededinging / volkomen concurrentie de prijs tot stand komt via het marktmechanisme.",
              begrippen: ["volledige mededinging", "volkomen concurrentie", "marktmechanisme"],
            },
            {
              id: "d3-3",
              omschrijving: "Hoe op een markt van volledige mededinging / volkomen concurrentie veranderingen in de collectieve vraag en/of het collectieve aanbod resulteren in een nieuw marktevenwicht.",
              begrippen: ["marktevenwicht", "evenwichtsprijs", "evenwichtshoeveelheid"],
            },
          ],
        },
        {
          id: "sub-d4", naam: "D4 — Marktvormen", leerdoelen: [
            {
              id: "d4-1",
              omschrijving: "Begrippen voor de beschrijving van marktvormen (marktkenmerken): aantal vragers, aantal aanbieders, homogeen of heterogeen goed, toetredingsbarrières, transparantie, marktaandeel, marktmacht.",
              begrippen: ["marktkenmerken", "homogeen goed", "heterogeen goed", "toetredingsbarrières", "transparantie", "marktaandeel", "marktmacht"],
            },
            {
              id: "d4-2",
              omschrijving: "Het aan de hand van marktkenmerken indelen van marktvormen: volledige mededinging / volkomen concurrentie; monopolistische concurrentie; oligopolie; duopolie; monopolie.",
              begrippen: ["volledige mededinging", "monopolistische concurrentie", "oligopolie", "duopolie", "monopolie"],
            },
            {
              id: "d4-3",
              omschrijving: "Of de producent hoeveelheidsaanpasser / prijsnemer is of (beperkt) prijszetter.",
              begrippen: ["hoeveelheidsaanpasser", "prijsnemer", "prijszetter"],
            },
          ],
        },
        {
          id: "sub-d5", naam: "D5 — Kostenstructuur en opbrengsten", leerdoelen: [
            {
              id: "d5-1",
              omschrijving: "Begrippen voor de beschrijving van kostenstructuur en opbrengsten van ondernemingen: afzet (q en Q), omzet / totale opbrengsten (TO), verkoopprijs (P) / gemiddelde opbrengst (GO), marginale opbrengst (MO), (gemiddelde) constante kosten (GCK/CK), (gemiddelde) variabele kosten (GVK/VK), (gemiddelde) totale kosten (GTK/TK), marginale kosten (MK), proportioneel, progressief en degressief.",
              begrippen: ["afzet", "omzet", "totale opbrengsten (TO)", "gemiddelde opbrengst (GO)", "marginale opbrengst (MO)", "constante kosten (CK/GCK)", "variabele kosten (VK/GVK)", "totale kosten (TK/GTK)", "marginale kosten (MK)", "proportioneel", "progressief", "degressief"],
            },
            {
              id: "d5-2",
              omschrijving: "Het verloop van de marginale kosten in geval van proportioneel, progressief of degressief variabele kosten.",
              begrippen: ["proportionele variabele kosten", "progressieve variabele kosten", "degressieve variabele kosten"],
            },
          ],
        },
        {
          id: "sub-d6", naam: "D6 — Consumentengedrag", leerdoelen: [
            {
              id: "d6-1",
              omschrijving: "Begrippen voor het beschrijven van consumentengedrag: betalingsbereidheid, prijselasticiteit van de vraag, inkomenselasticiteit van de vraag, complementaire goederen en substitutiegoederen.",
              begrippen: ["betalingsbereidheid", "prijselasticiteit van de vraag", "inkomenselasticiteit van de vraag", "complementaire goederen", "substitutiegoederen"],
            },
            {
              id: "d6-2",
              omschrijving: "Hoe met behulp van de begrippen substitueerbaarheid en complementariteit een prijsverandering van het ene product kan leiden tot een vraagverandering van het andere product. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["substitueerbaarheid", "complementariteit"],
            },
            {
              id: "d6-3",
              omschrijving: "Verbanden tussen de mate waarin de prijs verandert, de mate van de daaruit volgende vraagverandering en de prijselasticiteit van de vraag (segmentelasticiteit).",
              begrippen: ["segmentelasticiteit"],
              formules: ["Ep = (ΔQ/Q) / (ΔP/P)"],
            },
            {
              id: "d6-4",
              omschrijving: "Verbanden tussen de mate waarin het inkomen verandert, de mate van de daaruit volgende vraagverandering en de inkomenselasticiteit van de vraag. (alleen verbaal, niet rekenkundig en niet grafisch)",
              begrippen: ["inkomenselasticiteit"],
            },
            {
              id: "d6-5",
              omschrijving: "Het onderscheid tussen normale en inferieure goederen en tussen noodzakelijke/primaire en luxegoederen en de daarbij behorende inkomenselasticiteit. (alleen verbaal, niet rekenkundig en niet grafisch)",
              begrippen: ["normale goederen", "inferieure goederen", "noodzakelijke goederen", "luxegoederen"],
            },
            {
              id: "d6-6",
              omschrijving: "Hoe veranderingen in betalingsbereidheid en/of de marktprijs leiden tot veranderingen in het consumentensurplus. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["consumentensurplus"],
            },
          ],
        },
        {
          id: "sub-d7", naam: "D7 — Producentengedrag", leerdoelen: [
            {
              id: "d7-1",
              omschrijving: "Begrippen voor het beschrijven van producentengedrag: resultaat (winst, verlies), kostendekkend.",
              begrippen: ["resultaat", "winst", "verlies", "kostendekkend"],
            },
            {
              id: "d7-2",
              omschrijving: "Hoe het gedrag van producenten vanuit verschillende doelstellingen wordt beïnvloed: (maximale) winst, (maximale) opbrengst, marktaandeel, kostendekking/break-even en continuïteit.",
              begrippen: ["winstmaximalisatie", "opbrengstmaximalisatie", "marktaandeel", "break-even", "continuïteit"],
            },
            {
              id: "d7-3",
              omschrijving: "In een grafiek of tabel met de totale kosten en totale opbrengsten van een producent welke prijs en afzet de producent zal kiezen gegeven zijn doelstelling (integrale benadering; volledige mededinging / volkomen concurrentie en monopolie). (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["integrale benadering", "totale kosten", "totale opbrengsten"],
            },
            {
              id: "d7-4",
              omschrijving: "In een grafiek of tabel met de marginale en gemiddelde kosten en marginale en gemiddelde opbrengsten van een producent welke prijs en afzet de producent zal kiezen gegeven zijn doelstelling (marginale benadering; volledige mededinging / volkomen concurrentie en monopolie). (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["marginale benadering", "marginale kosten", "marginale opbrengst", "gemiddelde kosten", "gemiddelde opbrengst"],
            },
            {
              id: "d7-5",
              omschrijving: "Hoe een monopolist prijsdiscriminatie kan inzetten om zijn doelstelling te bereiken. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["prijsdiscriminatie", "monopolist"],
            },
            {
              id: "d7-6",
              omschrijving: "Hoe een monopolist via prijsdiscriminatie een deel van het consumentensurplus kan afromen. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["consumentensurplus afromen"],
            },
            {
              id: "d7-7",
              omschrijving: "Hoe een producent op een markt met monopolistische concurrentie productdifferentiatie kan inzetten om zijn doelstelling te bereiken. (alleen verbaal, niet rekenkundig en niet grafisch)",
              begrippen: ["productdifferentiatie", "monopolistische concurrentie"],
            },
            {
              id: "d7-8",
              omschrijving: "Hoe een producent in een duopolie zal handelen gegeven zijn doelstelling (mede in relatie tot simultane en sequentiële spelen in subdomein F1). (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["duopolie"],
            },
            {
              id: "d7-9",
              omschrijving: "Waarom een producent wel of niet toetreedt tot een nieuwe markt op basis van de overwegingen break-even-afzet of (maximale) winst.",
              begrippen: ["break-even-afzet", "toetreding"],
            },
            {
              id: "d7-10",
              omschrijving: "Hoe veranderingen in de minimale prijs waartegen men het goed wil aanbieden en/of de marktprijs leiden tot veranderingen in het producentensurplus. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["producentensurplus"],
            },
          ],
        },
        {
          id: "sub-d8", naam: "D8 — Marktfalen, overheidsingrijpen en welvaart", leerdoelen: [
            {
              id: "d8-1",
              omschrijving: "Begrippen voor de beschrijving van marktfalen, overheidsingrijpen en welvaart: positieve en negatieve externe effecten; onvolledige mededinging / onvolkomen concurrentie en marktmacht.",
              begrippen: ["positieve externe effecten", "negatieve externe effecten", "onvolledige mededinging", "onvolkomen concurrentie", "marktmacht"],
            },
            {
              id: "d8-2",
              omschrijving: "Situaties van marktfalen: wanneer positieve of negatieve externe effecten optreden; wanneer bij de productie en/of consumptie van goederen en diensten geen of onvoldoende rekening wordt gehouden met de welvaart van toekomstige generaties; wanneer producten niet, onvoldoende of teveel worden geproduceerd dan maatschappelijk gewenst; wanneer de marktprijs hoger of lager dan maatschappelijk gewenst is; wanneer misbruik van marktmacht optreedt.",
              begrippen: ["marktfalen", "externe effecten", "welvaart toekomstige generaties", "misbruik marktmacht"],
            },
            {
              id: "d8-3",
              omschrijving: "Waarom de overheid de productie van bepaalde goederen zelf organiseert (collectieve en quasi collectieve goederen) dan wel geheel of onder voorwaarden aan de markt overlaat.",
              begrippen: ["collectieve goederen", "quasi collectieve goederen"],
            },
            {
              id: "d8-4",
              omschrijving: "Welke instrumenten de overheid toepast om het marktevenwicht te beïnvloeden: minimumprijs en maximumprijs; kostprijsverhogende belastingen; kostprijsverlagende subsidies; productiequota. (alleen verbaal en grafisch, niet rekenkundig)",
              begrippen: ["minimumprijs", "maximumprijs", "kostprijsverhogende belasting", "kostprijsverlagende subsidie", "productiequota"],
            },
            {
              id: "d8-5",
              omschrijving: "Hoe de overheid toezicht houdt op de markt en het marktevenwicht (Autoriteit Consument en Markt, Autoriteit Financiële Markten, kartelverboden).",
              begrippen: ["Autoriteit Consument en Markt (ACM)", "Autoriteit Financiële Markten (AFM)", "kartelverbod"],
            },
            {
              id: "d8-6",
              omschrijving: "De (verandering van de) som van het producentensurplus en consumentensurplus als een beperkte indicatie van (verandering in) welvaart.",
              begrippen: ["totaal surplus", "welvaartsindicatie"],
            },
          ],
        },
        {
          id: "sub-d9", naam: "D9 — Arbeidsmarkt", leerdoelen: [
            {
              id: "d9-1",
              omschrijving: "Begrippen voor de beschrijving van de arbeidsmarkt: vraag naar arbeid; aanbod van arbeid; werkloosheid; prijs van arbeid (uurloon); vaste contracten en flexibele contracten.",
              begrippen: ["vraag naar arbeid", "aanbod van arbeid", "werkloosheid", "uurloon", "vaste contracten", "flexibele contracten"],
            },
            {
              id: "d9-2",
              omschrijving: "Hoe veranderingen in het aanbod van of de vraag naar arbeid leiden tot veranderingen op de arbeidsmarkt.",
            },
            {
              id: "d9-3",
              omschrijving: "De invloed van arbeidsmarktinstituties (vakbonden, werkgeversorganisaties, minimumloon, cao's) op het resultaat op de arbeidsmarkt: gevraagde en aangeboden hoeveelheid, werkloosheid en de prijs van arbeid.",
              begrippen: ["vakbonden", "werkgeversorganisaties", "minimumloon", "cao"],
            },
            {
              id: "d9-4",
              omschrijving: "Hoe contractvormen van invloed zijn op de relatie tussen werkgever en werknemer en hoe dit een positieve / negatieve invloed kan hebben op de welvaart van de betrokkenen.",
            },
          ],
        },
      ],
    },
    // ── Domein E: Concept Ruilen over de tijd ────────────────────────────────
    {
      id: "dom-e", naam: "Domein E: Concept Ruilen over de tijd", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e1", naam: "E1 — Gezinnen ruilen over de tijd", leerdoelen: [
            {
              id: "e1-1",
              omschrijving: "De samenhang tussen inkomsten / uitgaven (per periode) en vermogen / schulden (op een bepaald moment) bij gezinshuishoudingen.",
              begrippen: ["inkomsten", "uitgaven", "vermogen", "schulden", "gezinshuishoudingen"],
            },
            {
              id: "e1-2",
              omschrijving: "De keuzes die gezinnen maken voor sparen en lenen gedurende de verschillende levensfasen mede gegeven hun tijdsvoorkeur en hoe deze keuzes doorwerken op vermogen / schulden van gezinshuishoudingen.",
              begrippen: ["sparen", "lenen", "levensfasen", "tijdsvoorkeur"],
            },
            {
              id: "e1-3",
              omschrijving: "Hoe rente, inflatie, de conjuncturele situatie en consumentenvertrouwen doorwerken op de keuzes voor sparen en lenen.",
              begrippen: ["rente", "inflatie", "conjuncturele situatie", "consumentenvertrouwen"],
            },
            {
              id: "e1-4",
              omschrijving: "Dat sparen beslag legt op consumptie in de toekomst en lenen beslag legt op consumptie nu.",
            },
            {
              id: "e1-5",
              omschrijving: "Dat sparen beslag legt op productie in de toekomst en lenen beslag legt op productie nu.",
            },
          ],
        },
        {
          id: "sub-e2", naam: "E2 — De overheid ruilt over de tijd", leerdoelen: [
            {
              id: "e2-1",
              omschrijving: "De betekenis en oorzaken van (veranderingen in) de overheidsschuld.",
              begrippen: ["overheidsschuld"],
            },
            {
              id: "e2-2",
              omschrijving: "Dat een overheidstekort gezien kan worden als een vorm van uitgestelde belastingheffing.",
              begrippen: ["overheidstekort", "uitgestelde belastingheffing"],
            },
            {
              id: "e2-3",
              omschrijving: "Inkomsten en uitgaven van de overheid als grootheden over een periode en de overheidsschuld als grootheid op een bepaald moment en het verband tussen deze grootheden.",
            },
            {
              id: "e2-4",
              omschrijving: "Overheidsuitgaven in termen van overheidssubsidies, overheidsconsumptie, overdrachtsuitgaven en overheidsinvesteringen en de betekenis voor de economische ontwikkeling.",
              begrippen: ["overheidssubsidies", "overheidsconsumptie", "overdrachtsuitgaven", "overheidsinvesteringen"],
            },
            {
              id: "e2-5",
              omschrijving: "Overheidsontvangsten in termen van directe en indirecte belastingen, sociale premies en niet-belastingontvangsten (zoals dividend uit staatsdeelnemingen) en de betekenis voor de economische ontwikkeling.",
              begrippen: ["directe belastingen", "indirecte belastingen", "sociale premies", "niet-belastingontvangsten"],
            },
          ],
        },
        {
          id: "sub-e3", naam: "E3 — Pensioenen", leerdoelen: [
            {
              id: "e3-1",
              omschrijving: "Pensioenvoorzieningen op basis van het omslagstelsel of het kapitaaldekkingsstelsel en dilemma's die er bij de keuze tussen deze twee financieringswijzen zijn.",
              begrippen: ["omslagstelsel", "kapitaaldekkingsstelsel", "pensioenvoorziening"],
            },
          ],
        },
      ],
    },
    // ── Domein F: Concept Samenwerken en onderhandelen ───────────────────────
    {
      id: "dom-f", naam: "Domein F: Concept Samenwerken en onderhandelen", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-f1", naam: "F1 — Speltheorie", leerdoelen: [
            {
              id: "f1-1",
              omschrijving: "De basiselementen van een simultaan spel weergegeven in een opbrengstenmatrix: spelers, acties, doelstellingen en opbrengsten, waarbij de contexten beperkt blijven tot situaties met twee spelers die simultaan kiezen en waarbij spelers beschikken over complete informatie.",
              begrippen: ["simultaan spel", "opbrengstenmatrix", "spelers", "acties", "doelstellingen", "complete informatie"],
            },
            {
              id: "f1-2",
              omschrijving: "Hoe in een simultaan spel een gevangenendilemma kan optreden als beide spelers een dominante strategie hebben.",
              begrippen: ["gevangenendilemma", "dominante strategie"],
            },
            {
              id: "f1-3",
              omschrijving: "Het onderscheid tussen een simultaan spel met en zonder dominante strategieën voor beide spelers.",
            },
            {
              id: "f1-4",
              omschrijving: "De keuzes en uitkomst in een simultaan spel dat één keer gespeeld wordt indien er sprake is van een gevangenendilemma.",
            },
            {
              id: "f1-5",
              omschrijving: "Het onderscheid tussen simultane spelen met één of meerdere evenwichten.",
              begrippen: ["Nash-evenwicht", "meerdere evenwichten"],
            },
            {
              id: "f1-6",
              omschrijving: "De invloed van het één keer herhalen van een simultaan spel op de keuzes en mogelijke uitkomst, indien er sprake is van een gevangenendilemma.",
            },
            {
              id: "f1-7",
              omschrijving: "De basiselementen van het ultimatum spel weergegeven in een spelboom: spelers, acties, doelstellingen en opbrengsten, waarbij de contexten beperkt blijven tot situaties met twee spelers die eenmalig en sequentieel kiezen, en waarbij spelers beschikken over complete informatie.",
              begrippen: ["ultimatum spel", "spelboom", "sequentieel kiezen"],
            },
            {
              id: "f1-8",
              omschrijving: "De keuzes en uitkomst in een ultimatum spel.",
            },
          ],
        },
        {
          id: "sub-f2", naam: "F2 — Samenwerken en onderhandelen", leerdoelen: [
            {
              id: "f2-1",
              omschrijving: "Dat meerdere evenwichten kunnen bestaan waarbij verschillende spelers een voorkeur hebben voor verschillende evenwichten.",
            },
            {
              id: "f2-2",
              omschrijving: "Dat meeliftersgedrag zorgt voor niet-optimale uitkomsten van een spel indien er sprake is van een dominante strategie van niet-bijdragen.",
              begrippen: ["meeliftersgedrag", "free rider"],
            },
            {
              id: "f2-3",
              omschrijving: "Dat zelfbinding als alternatief voor de eigen dominante strategie kan leiden tot samenwerken van meerdere partijen en daardoor de keuze van één of beide spelers beïnvloedt en daarmee de uitkomst van een spel.",
              begrippen: ["zelfbinding"],
            },
            {
              id: "f2-4",
              omschrijving: "Dat de geloofwaardigheid van dreiging of vertrouwen de keuze van één of beide partijen beïnvloedt en daarmee de uitkomst van een spel.",
              begrippen: ["geloofwaardige dreiging", "vertrouwen"],
            },
            {
              id: "f2-5",
              omschrijving: "Dat sociale normen van invloed kunnen zijn op de opbrengsten en daardoor de keuze van één of beide spelers beïnvloedt en daarmee de uitkomst van een spel.",
              begrippen: ["sociale normen"],
            },
          ],
        },
        {
          id: "sub-f3", naam: "F3 — Marktfalen (speltheorie)", leerdoelen: [
            {
              id: "f3-1",
              omschrijving: "Dat situaties met positieve en negatieve externe effecten kunnen resulteren in een gevangenendilemma, waarbij het collectieve belang wordt geschaad doordat spelers het individuele belang vooropstellen.",
            },
            {
              id: "f3-2",
              omschrijving: "Dat veranderingen in opbrengsten de keuze van één of beide spelers kan beïnvloeden en daarmee de uitkomst van een spel.",
            },
            {
              id: "f3-3",
              omschrijving: "Dat instrumenten zoals collectieve dwang, contracten, sociale normen, boetes of collectieve uitkomsten als individuele doelstelling de keuze van één of beide spelers kan beïnvloeden en daarmee de uitkomst van een spel.",
              begrippen: ["collectieve dwang", "contracten", "boetes"],
            },
            {
              id: "f3-4",
              omschrijving: "Het effect van verzonken kosten op de uitkomst van een spel, waarbij zowel sprake kan zijn van een positief effect (vertrouwen dat partijen afspraken nakomen) als van een negatief effect (kosten die al gemaakt zijn en niet kunnen worden teruggedraaid vanwege het specifieke karakter van de investering).",
              begrippen: ["verzonken kosten"],
            },
          ],
        },
      ],
    },
    // ── Domein G: Concept Risico en informatie ───────────────────────────────
    {
      id: "dom-g", naam: "Domein G: Concept Risico en informatie", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-g1", naam: "G1 — Risico en verzekeren", leerdoelen: [
            {
              id: "g1-1",
              omschrijving: "Het verschil tussen risico als een inschatting van mogelijke gebeurtenissen (kans) en risico als verwacht schadebedrag (in euro's).",
              begrippen: ["risico als kans", "verwacht schadebedrag"],
            },
            {
              id: "g1-2",
              omschrijving: "Hoe de beslissing van een partij om zich wel of niet te verzekeren afhangt van: de mate van risico-aversie; de afweging tussen (financiële) kosten en (financiële) opbrengsten van een verzekering; de eigen beschikbare financiële middelen om eventuele risico's af te dekken.",
              begrippen: ["risico-aversie", "verzekeringskosten", "financiële middelen"],
            },
            {
              id: "g1-3",
              omschrijving: "Solidariteit bij verzekeren en op welke wijze er sprake is van solidariteit die risico's kan verkleinen.",
              begrippen: ["solidariteit"],
            },
            {
              id: "g1-4",
              omschrijving: "Een afweging maken tussen al dan niet afsluiten van een verzekering in relatie tot de hoogte van een eigen risico (in euro's) en/of premiekorting.",
              begrippen: ["eigen risico", "premiekorting"],
            },
          ],
        },
        {
          id: "sub-g2", naam: "G2 — Asymmetrische informatie", leerdoelen: [
            {
              id: "g2-1",
              omschrijving: "Dat asymmetrische informatie leidt tot averechtse selectie en moral hazard.",
              begrippen: ["asymmetrische informatie", "averechtse selectie", "moral hazard"],
            },
            {
              id: "g2-2",
              omschrijving: "Averechtse selectie en middelen om dit te beperken: verplichte solidariteit, het verplicht voorschrijven van een verzekering, het instellen van een collectieve verzekering.",
              begrippen: ["verplichte solidariteit", "verplichte verzekering", "collectieve verzekering"],
            },
            {
              id: "g2-3",
              omschrijving: "Moral hazard en middelen om dit te beperken: eigen risico, bonusmalussysteem, premiedifferentiatie.",
              begrippen: ["bonusmalussysteem", "premiedifferentiatie"],
            },
          ],
        },
        {
          id: "sub-g3", naam: "G3 — Risico en rente", leerdoelen: [
            {
              id: "g3-1",
              omschrijving: "Dat rente zowel een vergoeding is op het uitstellen van consumptie (domein E) als voor het lopen van inflatierisico (domein I) en risico van wanbetaling.",
              begrippen: ["rente", "inflatierisico", "wanbetaling"],
            },
            {
              id: "g3-2",
              omschrijving: "Onderpand en waarom onderpand het risico voor de kredietgever kan verminderen.",
              begrippen: ["onderpand", "kredietgever"],
            },
          ],
        },
      ],
    },
    // ── Domein H: Concept Welvaart en groei ──────────────────────────────────
    {
      id: "dom-h", naam: "Domein H: Concept Welvaart en groei", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-h1", naam: "H1 — Macro-economische kringloop, nationaal inkomen en welvaart", leerdoelen: [
            {
              id: "h1-1",
              omschrijving: "Hoe het bruto binnenlands product (bbp) wordt berekend: vanuit productie (toegevoegde waarde = omzet minus kosten van ingekochte grond- en hulpstoffen en leveringen door derden); vanuit bestedingen (= som van consumptie, investeringen, overheidsbestedingen en export minus import); vanuit inkomen (= arbeidsinkomen (loonsom werknemers + toegerekende lonen zelfstandigen) + kapitaalinkomen (rente, dividend, pacht, huur en winst)).",
              begrippen: ["bruto binnenlands product (bbp)", "toegevoegde waarde", "consumptie", "investeringen", "overheidsbestedingen", "arbeidsinkomen", "kapitaalinkomen"],
              formules: ["bbp (productie) = omzet − kosten ingekochte grondstoffen/hulpstoffen", "bbp (bestedingen) = C + I + G + (Ex − Im)", "bbp (inkomen) = arbeidsinkomen + kapitaalinkomen"],
            },
            {
              id: "h1-2",
              omschrijving: "De economische kringloop met behulp van: de geldstromen tussen de sectoren gezinnen, bedrijven, overheid, banken en buitenland; de saldi: particulier spaarsaldo, overheidssaldo, saldo van de betalingsbalans.",
              begrippen: ["economische kringloop", "particulier spaarsaldo", "overheidssaldo", "betalingsbalans"],
            },
            {
              id: "h1-3",
              omschrijving: "Dat de omvang en groei van het bbp een beperkte welvaartsmaatstaf is op grond van: het onderscheid tussen nominaal en reëel bbp; het bbp per hoofd van de bevolking ten opzichte van het totaal bbp; het bestaan van de informele sector; negatieve en positieve externe effecten.",
              begrippen: ["nominaal bbp", "reëel bbp", "bbp per hoofd", "informele sector"],
            },
            {
              id: "h1-4",
              omschrijving: "Transacties met het buitenland die geboekt worden op de lopende rekening van de betalingsbalans (saldo lopende rekening, betalingsbalans).",
              begrippen: ["lopende rekening", "betalingsbalans", "saldo lopende rekening"],
            },
            {
              id: "h1-5",
              omschrijving: "De alternatieve welvaartsmaatstaven: Human Development Index; groen bbp (per hoofd): groen bbp = bbp minus geschatte (monetaire) waarde van schade aan milieu plus geschatte (monetaire) waarde van verbetering aan milieu; World Happiness Index.",
              begrippen: ["Human Development Index (HDI)", "groen bbp", "World Happiness Index"],
              formules: ["groen bbp = bbp − geschatte milieuschade + geschatte milieuverbetering"],
            },
            {
              id: "h1-6",
              omschrijving: "Dat de (verandering van de) som van het totale producentensurplus en het totale consumentensurplus een beperkte indicatie van (verandering in) welvaart is.",
              begrippen: ["producentensurplus", "consumentensurplus", "welvaart"],
            },
          ],
        },
        {
          id: "sub-h2", naam: "H2 — Economische groei", leerdoelen: [
            {
              id: "h2-1",
              omschrijving: "Hoe structurele groei, de ontwikkeling van de aanbodzijde van de economie, wordt bepaald door de verandering van de hoeveelheid en kwaliteit van de productiefactoren: productiefactoren (arbeid, kapitaal, natuur en ondernemerschap); toename van de arbeidsproductiviteit (onderwijs, learning by doing en samenwerking); innovatie (productinnovatie en processinnovatie, research en development, octrooien en patenten).",
              begrippen: ["structurele groei", "productiefactoren", "arbeid", "kapitaal", "natuur", "ondernemerschap", "arbeidsproductiviteit", "productinnovatie", "processinnovatie", "octrooien", "patenten"],
            },
            {
              id: "h2-2",
              omschrijving: "Hoe de relatie tussen internationale betrekkingen en economische groei is ten aanzien van: handelsstromen; kennisstromen; investeringsstromen (zoals door multinationals).",
              begrippen: ["handelsstromen", "kennisstromen", "investeringsstromen", "multinationals"],
            },
            {
              id: "h2-3",
              omschrijving: "Hoe de relatie tussen de internationale concurrentiepositie en economische groei is.",
              begrippen: ["internationale concurrentiepositie"],
            },
            {
              id: "h2-4",
              omschrijving: "De rol en invloed van de overheid op het gebied van onderwijs, infrastructuur en wetgeving ten aanzien van de structurele groei.",
            },
            {
              id: "h2-5",
              omschrijving: "Motieven voor overheidsbeleid inzake internationale handel en samenwerkingsvormen in relatie tot welvaart en economische groei: het infant industry-argument, voorkomen van dumping en bescherming strategische sectoren.",
              begrippen: ["infant industry-argument", "dumping", "strategische sectoren"],
            },
            {
              id: "h2-6",
              omschrijving: "Dat internationale vrijhandel wordt beïnvloed door protectiemaatregelen zoals importtarieven, importquota en importvoorschriften.",
              begrippen: ["protectiemaatregelen", "importtarieven", "importquota", "importvoorschriften"],
            },
          ],
        },
        {
          id: "sub-h3", naam: "H3 — Ongelijkheid en herverdeling", leerdoelen: [
            {
              id: "h3-1",
              omschrijving: "Het bestaan van verschillende stelsels voor de inkomstenbelasting en de wijze waarop deze stelsels invloed hebben op de mate van inkomensongelijkheid tussen individuen en groepen (nivelleren en denivelleren).",
              begrippen: ["inkomstenbelasting", "inkomensongelijkheid", "nivelleren", "denivelleren"],
            },
            {
              id: "h3-2",
              omschrijving: "Gevolgen van verschillende soorten belastingstelsels, zoals progressief, proportioneel en degressief, voor de netto inkomens met gebruikmaking van de parameters gemiddeld belastingtarief, marginaal belastingtarief, aftrekposten (vóór belastingheffing) en heffingskortingen (ná belastingheffing).",
              begrippen: ["progressief belastingstelsel", "proportioneel belastingstelsel", "degressief belastingstelsel", "gemiddeld belastingtarief", "marginaal belastingtarief", "aftrekposten", "heffingskortingen"],
            },
            {
              id: "h3-3",
              omschrijving: "De Lorenzcurve als weergave van de primaire of secundaire inkomensverdeling.",
              begrippen: ["Lorenzcurve", "primaire inkomensverdeling", "secundaire inkomensverdeling"],
            },
            {
              id: "h3-4",
              omschrijving: "Hoe de overheid inkomen kan herverdelen tussen inkomensgroepen en welke invloed dit heeft op de inkomensverdeling (de vorm van de Lorenzcurve): via belastingen, aftrekposten en heffingskortingen (belastingstelsel); via sociale uitkeringen, toeslagen, subsidies en persoonsgebonden overdrachten (sociale zekerheidsstelsel).",
              begrippen: ["herverdeling", "sociale uitkeringen", "toeslagen", "subsidies", "persoonsgebonden overdrachten", "sociale zekerheidsstelsel"],
            },
            {
              id: "h3-5",
              omschrijving: "De relatie tussen inkomensongelijkheid en economische ontwikkeling.",
            },
          ],
        },
        {
          id: "sub-h4", naam: "H4 — Arbeidsmarkt en werkloosheid", leerdoelen: [
            {
              id: "h4-1",
              omschrijving: "Begrippen voor de beschrijving van de arbeidsmarkt: arbeidsaanbod (= beroepsbevolking); arbeidsvraag (werkgelegenheid + openstaande vacatures); werkloosheid; loonontwikkeling; vaste contracten en flexibele contracten.",
              begrippen: ["arbeidsaanbod", "beroepsbevolking", "arbeidsvraag", "werkgelegenheid", "openstaande vacatures", "werkloosheid", "loonontwikkeling"],
            },
            {
              id: "h4-2",
              omschrijving: "Verklaringen van werkloosheid: fricties op de arbeidsmarkt; mismatch tussen arbeidsvraag en arbeidsaanbod ten aanzien van opleiding / kwaliteiten / regio; te weinig vraag naar producten (binnenlandse vraag, exportvraag); te hoge loonkosten (CAO, minimumloon); hoogte en voorwaarden sociale uitkeringen m.b.t. werkloosheid; vrijhandel, nieuwe technologie en outsourcing.",
              begrippen: ["frictiewerkloosheid", "structurele werkloosheid", "conjuncturele werkloosheid", "mismatch", "outsourcing"],
            },
          ],
        },
      ],
    },
    // ── Domein I: Concept Goede tijden, slechte tijden ───────────────────────
    {
      id: "dom-i", naam: "Domein I: Concept Goede tijden, slechte tijden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-i1", naam: "I1 — Conjunctuur en conjuncturele verschijnselen", leerdoelen: [
            {
              id: "i1-1",
              omschrijving: "Economische ontwikkeling op korte termijn relateren aan conjunctuurindicatoren (niveau en veranderingen): economische indicatoren (bbp, export, investeringen en consumptie); vertrouwensindicatoren (consumentenvertrouwen en producentenvertrouwen); arbeidsmarktindicatoren (werkloosheid en werkgelegenheid).",
              begrippen: ["conjunctuurindicatoren", "economische indicatoren", "vertrouwensindicatoren", "arbeidsmarktindicatoren", "consumentenvertrouwen", "producentenvertrouwen"],
            },
            {
              id: "i1-2",
              omschrijving: "Conjuncturele situaties onderscheiden en relateren aan de genoemde conjunctuurindicatoren: hoogconjunctuur (een situatie van overbesteding: lage werkloosheid en toenemende inflatie); laagconjunctuur (een situatie van onderbesteding: hoge werkloosheid en afnemende inflatie); recessie (een situatie waarin minimaal een half jaar sprake is van negatieve groei); depressie (een situatie waarin sprake is van deflatie en recessie).",
              begrippen: ["hoogconjunctuur", "overbesteding", "laagconjunctuur", "onderbesteding", "recessie", "depressie", "deflatie"],
            },
            {
              id: "i1-3",
              omschrijving: "De gevolgen van conjuncturele ontwikkelingen op inflatie / deflatie, werkloosheid, werkgelegenheid en inkomensontwikkelingen.",
              begrippen: ["inflatie", "deflatie", "conjuncturele werkloosheid", "inkomensontwikkeling"],
            },
          ],
        },
        {
          id: "sub-i2", naam: "I2 — Overheid, centrale bank en conjunctuur", leerdoelen: [
            {
              id: "i2-1",
              omschrijving: "De invloed van conjuncturele veranderingen op de overheidsbegroting via automatische stabilisatoren: (progressief) belastingstelsel en sociale uitkeringen met betrekking tot werkloosheid.",
              begrippen: ["automatische stabilisatoren", "overheidsbegroting"],
            },
            {
              id: "i2-2",
              omschrijving: "Hoe de overheid op de korte termijn de economie kan stimuleren en afremmen via anticyclisch begrotingsbeleid: bij laagconjunctuur stimulerend beleid (hogere uitgaven en/of lagere belastingen) en bij hoogconjunctuur afremmend begrotingsbeleid (lagere uitgaven en/of hogere belastingen).",
              begrippen: ["anticyclisch begrotingsbeleid", "stimulerend beleid", "afremmend beleid"],
            },
            {
              id: "i2-3",
              omschrijving: "Op welke manier begrotingsbeleid de inflatie / deflatie, werkloosheid, werkgelegenheid en inkomensontwikkelingen beïnvloedt.",
            },
            {
              id: "i2-4",
              omschrijving: "Op welke manier een centrale bank het rente-instrument kan inzetten om de inflatie / deflatie te beïnvloeden.",
              begrippen: ["centrale bank", "rente-instrument", "monetair beleid"],
            },
          ],
        },
      ],
    },
  ],
};

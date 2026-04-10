import { VakSyllabus } from "@/types/syllabus";

export const WISKUNDE_A_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "wiskunde-a-havo",
  niveau: "HAVO",
  domeinen: [
    {
      id: "dom-a",
      naam: "Domein A: Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a1",
          naam: "A1 — Algemene vaardigheden",
          leerdoelen: [
            {
              id: "a1-1",
              omschrijving:
                "doelgericht informatie zoeken, beoordelen, selecteren en verwerken",
            },
            {
              id: "a1-2",
              omschrijving:
                "adequaat schriftelijk, mondeling en digitaal communiceren over onderwerpen uit de wiskunde",
            },
            {
              id: "a1-3",
              omschrijving:
                "bij het verwerven van vakkennis en vakvaardigheden reflecteren op eigen belangstelling, motivatie en leerproces",
            },
            {
              id: "a1-4",
              omschrijving:
                "toepassingen en effecten van wiskunde in het dagelijks leven en in verschillende vervolgopleidingen en beroepssituaties herkennen en benoemen",
            },
          ],
        },
        {
          id: "sub-a2",
          naam: "A2 — Profielspecifieke vaardigheden",
          leerdoelen: [
            {
              id: "a2-1",
              omschrijving:
                "een probleemsituatie in de context interpreteren, structureren en vertalen naar een model waarin wiskundig gereedschap kan worden ingezet",
            },
            {
              id: "a2-2",
              omschrijving:
                "wiskundige methoden toepassen op probleemsituaties, de resultaten van een wiskundige handeling terugvertalen naar de context en daaruit conclusies trekken",
            },
          ],
        },
        {
          id: "sub-a3",
          naam: "A3 — Wiskundige vaardigheden",
          leerdoelen: [
            {
              id: "a3-1",
              omschrijving: "beheerst de rekenregels",
            },
            {
              id: "a3-2",
              omschrijving: "beheerst de specifieke algebraïsche vaardigheden",
            },
            {
              id: "a3-3",
              omschrijving:
                "heeft inzicht in wiskundige notaties en formules en kan daarmee kwalitatief redeneren",
            },
            {
              id: "a3-4",
              omschrijving:
                "kan wiskundige informatie ordenen en in probleemsituaties de wiskundige structuur onderkennen",
            },
            {
              id: "a3-5",
              omschrijving:
                "kan bij een gegeven probleemsituatie een model opstellen in wiskundige termen",
            },
            {
              id: "a3-6",
              omschrijving:
                "kan een oplossingsstrategie kiezen, deze correct toepassen en de gevonden oplossing controleren binnen de context",
            },
            {
              id: "a3-7",
              omschrijving: "kan vakspecifieke taal interpreteren en gebruiken",
            },
            {
              id: "a3-8",
              omschrijving:
                "kan de correctheid van wiskundige redeneringen verifiëren",
            },
            {
              id: "a3-9",
              omschrijving:
                "kan eenvoudige wiskundige redeneringen correct onder woorden brengen",
            },
            {
              id: "a3-10",
              omschrijving:
                "kan bij het raadplegen van wiskundige informatie, bij het verkennen van wiskundige situaties en bij het uitvoeren van wiskundige berekeningen gebruik maken van geschikte ICT-middelen",
            },
            {
              id: "a3-11",
              omschrijving:
                "kan antwoorden afronden op een voorgeschreven nauwkeurigheid dan wel op een nauwkeurigheid die past bij de probleemsituatie",
            },
          ],
        },
      ],
    },
    {
      id: "dom-b",
      naam: "Domein B: Algebra en tellen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b1",
          naam: "B1 — Rekenen",
          leerdoelen: [
            {
              id: "wah-b1-1",
              omschrijving:
                "berekeningen maken waarbij gebruik gemaakt wordt van verschillende rekenregels, inclusief die van machten en wortels",
              begrippen: ["absoluut", "relatief"],
            },
            {
              id: "wah-b1-2",
              omschrijving: "berekeningen maken met verhoudingen en breuken",
            },
            {
              id: "wah-b1-3",
              omschrijving:
                "werken met haakjes en vereenvoudigen door haakjes weg te werken",
            },
            {
              id: "wah-b1-4",
              omschrijving: "gebruik maken van de begrippen absoluut en relatief",
            },
            {
              id: "wah-b1-5",
              omschrijving: "berekeningen met procenten uitvoeren",
            },
            {
              id: "wah-b1-6",
              omschrijving:
                "de relatie leggen tussen breuken, decimale notatie en afrondingen",
            },
          ],
        },
        {
          id: "sub-b2",
          naam: "B2 — Algebra",
          leerdoelen: [
            {
              id: "wah-b2-1",
              omschrijving:
                "berekeningen maken met variabelen waarbij gebruik gemaakt wordt van verschillende rekenregels, inclusief die van machten en wortels",
              begrippen: ["variabele", "grootheid", "eenheid"],
            },
            {
              id: "wah-b2-2",
              omschrijving:
                "berekeningen maken met verhoudingen, percentages en breuken met daarin een of meer variabelen",
            },
            {
              id: "wah-b2-3",
              omschrijving:
                "werken met haakjes bij variabelen, waaronder het vereenvoudigen door haakjes wegwerken",
            },
            {
              id: "wah-b2-4",
              omschrijving:
                "werken met grootheden, samengestelde grootheden en maatsystemen, en eenheden omrekenen",
            },
          ],
        },
      ],
    },
    {
      id: "dom-c",
      naam: "Domein C: Verbanden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-c1",
          naam: "C1 — Tabellen",
          leerdoelen: [
            {
              id: "wah-c1-1",
              omschrijving:
                "in een probleemsituatie de relevante variabelen vaststellen",
            },
            {
              id: "wah-c1-2",
              omschrijving: "bijzonderheden van een tabel beschrijven met woorden",
            },
            {
              id: "wah-c1-3",
              omschrijving:
                "waarden aflezen uit een tabel en daaruit conclusies trekken",
            },
            {
              id: "wah-c1-4",
              omschrijving:
                "twee of meer tabellen van eenzelfde variabele vergelijken en conclusies trekken over de probleemsituaties die deze tabellen beschrijven",
            },
            {
              id: "wah-c1-5",
              omschrijving:
                "een tabel in verband brengen met een grafiek, formule of tekst",
            },
            {
              id: "wah-c1-6",
              omschrijving:
                "een tabel opstellen aan de hand van andere tabellen, een grafiek, een formule of een tekst",
            },
            {
              id: "wah-c1-7",
              omschrijving:
                "binnen de probleemsituatie een verband, weergegeven door een tabel, doelgericht gebruiken",
            },
            {
              id: "wah-c1-8",
              omschrijving:
                "een verband tussen (recht en omgekeerd) evenredige grootheden in een tabel herkennen",
              begrippen: ["recht evenredig", "omgekeerd evenredig"],
            },
          ],
        },
        {
          id: "sub-c2",
          naam: "C2 — Grafieken, vergelijkingen en ongelijkheden",
          leerdoelen: [
            {
              id: "wah-c2-1",
              omschrijving:
                "van de standaardverbanden een globale grafiek tekenen zonder ICT",
              begrippen: [
                "lineair verband",
                "exponentieel verband",
                "recht evenredig verband",
                "omgekeerd evenredig verband",
                "snijpunt(en) met x-as en y-as",
                "asymptotisch gedrag",
              ],
              formules: [
                "y = ax + b (lineair verband)",
                "y = b · gˣ (exponentieel verband)",
                "y = ax (recht evenredig verband)",
                "y = a/x (omgekeerd evenredig verband)",
              ],
            },
            {
              id: "wah-c2-2",
              omschrijving:
                "in een gegeven probleemsituatie de parameters van een standaardverband berekenen",
            },
            {
              id: "wah-c2-3",
              omschrijving: "een logaritmische schaalverdeling aflezen",
              begrippen: ["logaritmische schaalverdeling"],
            },
            {
              id: "wah-c2-4",
              omschrijving:
                "in een probleemsituatie de relevante variabelen vaststellen",
            },
            {
              id: "wah-c2-5",
              omschrijving:
                "bijzonderheden van een grafiek met woorden beschrijven",
            },
            {
              id: "wah-c2-6",
              omschrijving:
                "waarden aflezen uit een grafiek en daaruit conclusies trekken",
            },
            {
              id: "wah-c2-7",
              omschrijving:
                "een grafiek tekenen aan de hand van andere grafieken, een tabel, een formule of een tekst",
            },
            {
              id: "wah-c2-8",
              omschrijving:
                "een grafiek schetsen, interpreteren en ermee redeneren",
            },
            {
              id: "wah-c2-9",
              omschrijving:
                "twee of meer grafieken vergelijken en conclusies trekken over de probleemsituaties die deze grafieken beschrijven",
            },
            {
              id: "wah-c2-10",
              omschrijving:
                "de coördinaten van snijpunten van grafieken aflezen, berekenen en interpreteren binnen de gegeven probleemsituatie",
            },
            {
              id: "wah-c2-11",
              omschrijving:
                "een vergelijking of een ongelijkheid opstellen aan de hand van een tabel, formule, grafiek of tekst",
            },
            {
              id: "wah-c2-12",
              omschrijving:
                "conclusies trekken uit grafieken in verband met vergelijkingen en ongelijkheden",
            },
            {
              id: "wah-c2-13",
              omschrijving:
                "gebieden begrensd door grafieken interpreteren en gebruiken om conclusies te trekken",
            },
            {
              id: "wah-c2-14",
              omschrijving:
                "vergelijkingen en ongelijkheden oplossen met behulp van numerieke of grafische methoden",
            },
            {
              id: "wah-c2-15",
              omschrijving:
                "de maximum- of minimumwaarde van een formule berekenen",
              begrippen: ["maximum(waarde)", "minimum(waarde)"],
            },
          ],
        },
        {
          id: "sub-c3",
          naam: "C3 — Formules met één of meer variabelen",
          leerdoelen: [
            {
              id: "wah-c3-1",
              omschrijving:
                "door substitutie in een formule waarden berekenen",
            },
            {
              id: "wah-c3-2",
              omschrijving:
                "een formule opstellen aan de hand van andere formules",
            },
            {
              id: "wah-c3-3",
              omschrijving:
                "een formule opstellen of wijzigen op grond van in een tekst gegeven informatie",
            },
            {
              id: "wah-c3-4",
              omschrijving:
                "een variabele in een formule vervangen door een eenvoudige expressie en het resultaat vereenvoudigen",
            },
          ],
        },
        {
          id: "sub-c4",
          naam: "C4 — Lineaire verbanden",
          leerdoelen: [
            {
              id: "wah-c4-1",
              omschrijving:
                "een verband tussen recht evenredige grootheden uitdrukken in een formule",
              begrippen: ["richtingscoëfficiënt", "lineaire vergelijking"],
              formules: ["y = ax + b"],
            },
            {
              id: "wah-c4-2",
              omschrijving:
                "vergelijkingen van de vorm px + qy = r herleiden tot een vergelijking van de vorm y = ax + b",
              formules: ["px + qy = r  →  y = ax + b"],
            },
            {
              id: "wah-c4-3",
              omschrijving:
                "een formule opstellen bij een lineair verband dat in een tabel, grafiek of tekst gegeven is",
            },
            {
              id: "wah-c4-4",
              omschrijving:
                "grafieken tekenen en interpreteren bij formules van de vorm y = ax + b",
            },
            {
              id: "wah-c4-5",
              omschrijving:
                "waarden vinden door lineair interpoleren of lineair extrapoleren",
              begrippen: ["interpoleren", "extrapoleren"],
            },
            {
              id: "wah-c4-6",
              omschrijving:
                "lineaire vergelijkingen en ongelijkheden oplossen en interpreteren",
            },
            {
              id: "wah-c4-7",
              omschrijving:
                "de coördinaten van het snijpunt van twee lijnen berekenen en interpreteren",
            },
            {
              id: "wah-c4-8",
              omschrijving:
                "gebieden begrensd door ongelijkheden van de vorm px + qy ≤ r of px + qy ≥ r tekenen en interpreteren",
            },
          ],
        },
        {
          id: "sub-c5",
          naam: "C5 — Exponentiële verbanden",
          leerdoelen: [
            {
              id: "wah-c5-1",
              omschrijving:
                "vaststellen of een groeiproces bij benadering exponentieel is",
              begrippen: [
                "grondtal",
                "exponent",
                "beginwaarde",
                "groeifactor",
                "groeipercentage",
                "halveringstijd",
                "verdubbelingstijd",
              ],
            },
            {
              id: "wah-c5-2",
              omschrijving:
                "met beginwaarde, groeifactor, groeipercentage, halveringstijd of verdubbelingstijd berekeningen uitvoeren",
            },
            {
              id: "wah-c5-3",
              omschrijving:
                "een formule opstellen bij een exponentieel verband tussen twee grootheden dat in een tabel, grafiek of tekst gegeven is",
              formules: ["y = b · gˣ"],
            },
            {
              id: "wah-c5-4",
              omschrijving:
                "grafieken tekenen en interpreteren bij formules van het type y = b · gˣ",
            },
          ],
        },
      ],
    },
    {
      id: "dom-e",
      naam: "Domein E: Statistiek",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e1",
          naam: "E1 — Presentaties van data interpreteren en beoordelen",
          leerdoelen: [
            {
              id: "wah-e1-1",
              omschrijving:
                "een gegeven onderzoeksopzet of -vraag kritisch beoordelen",
              begrippen: [
                "steekproef",
                "aselect",
                "representatief",
                "populatie",
              ],
            },
            {
              id: "wah-e1-2",
              omschrijving:
                "een gegeven presentatie van data kritisch beoordelen in relatie tot het doel waartoe deze is gemaakt",
            },
            {
              id: "wah-e1-3",
              omschrijving:
                "beoordelen of er sprake is van een representatieve en/of aselecte steekproef",
            },
            {
              id: "wah-e1-4",
              omschrijving:
                "bij een gegeven presentatie van data de begrippen centrum en spreiding gebruiken en aangeven of deze zinvol zijn",
              begrippen: ["centrummaat", "centrum", "spreidingsmaat", "spreiding"],
            },
            {
              id: "wah-e1-5",
              omschrijving:
                "beoordelen of een variabele kwalitatief of kwantitatief, discreet of continu, ordinaal of nominaal is",
              begrippen: [
                "kwalitatief",
                "kwantitatief",
                "discreet",
                "continu",
                "ordinaal",
                "nominaal",
              ],
            },
            {
              id: "wah-e1-6",
              omschrijving:
                "bij een gegeven presentatie van data beoordelen of uitspraken voldoende zijn onderbouwd",
            },
            {
              id: "wah-e1-7",
              omschrijving:
                "uit gegeven presentaties van data of uit samenvattingen relevante informatie afleiden",
            },
          ],
        },
        {
          id: "sub-e2",
          naam: "E2 — Data verwerken",
          leerdoelen: [
            {
              id: "wah-e2-1",
              omschrijving:
                "geschikte representaties kiezen: dotplot, staafdiagram, cirkeldiagram, steelbladdiagram, lijndiagram, cumulatief en relatief frequentiepolygoon, boxplot, puntenwolk of spreidingsdiagram, (cumulatieve) frequentietabel en kruistabel",
              begrippen: [
                "dotplot",
                "staafdiagram",
                "cirkeldiagram",
                "steelbladdiagram",
                "lijndiagram",
                "frequentiepolygoon",
                "boxplot",
                "puntenwolk",
                "spreidingsdiagram",
                "frequentietabel",
                "kruistabel",
              ],
            },
            {
              id: "wah-e2-2",
              omschrijving:
                "bij een gegeven representatie een andere maken",
            },
            {
              id: "wah-e2-3",
              omschrijving:
                "beargumenteren welke centrummaat (gemiddelde, mediaan of modus) en welke spreidingsmaat (standaardafwijking, interkwartielafstand, spreidingsbreedte) geschikt zijn om een dataset te karakteriseren",
              begrippen: [
                "gemiddelde",
                "mediaan",
                "modus",
                "standaardafwijking",
                "interkwartielafstand",
                "spreidingsbreedte",
              ],
            },
            {
              id: "wah-e2-4",
              omschrijving:
                "de samenhang tussen statistische variabelen beschrijven met behulp van een kruistabel of puntenwolk",
            },
            {
              id: "wah-e2-5",
              omschrijving:
                "uit gegeven data andere data afleiden en de mogelijke gevolgen daarvan beredeneren voor de centrummaten en/of spreidingsmaten",
            },
          ],
        },
        {
          id: "sub-e3",
          naam: "E3 — Data en verdelingen",
          leerdoelen: [
            {
              id: "wah-e3-1",
              omschrijving:
                "verdelingen kwalitatief beschrijven en/of kwalitatief vergelijken, waarbij gebruik gemaakt wordt van klokvormige, meertoppige, uniforme en scheve verdelingen, centrum en spreiding, staarten en uitschieters",
              begrippen: [
                "verdeling",
                "klokvormig",
                "meertoppig",
                "uniform",
                "scheef",
                "staart",
                "uitschieter",
                "normale verdeling",
              ],
            },
            {
              id: "wah-e3-2",
              omschrijving:
                "gebruik maken van de drie vuistregels bij een (bij benadering) normale verdeling",
              begrippen: ["de drie vuistregels van de normale verdeling"],
              formules: [
                "μ ± σ bevat ≈ 68% van de waarnemingen",
                "μ ± 2σ bevat ≈ 95% van de waarnemingen",
                "μ ± 3σ bevat nagenoeg 100% van de waarnemingen",
              ],
            },
            {
              id: "wah-e3-3",
              omschrijving:
                "bij een gegeven probleemstelling de omvang van de steekproef berekenen met gegeven berekeningswijze",
              begrippen: ["steekproefomvang"],
            },
          ],
        },
        {
          id: "sub-e4",
          naam: "E4 — Statistische uitspraken doen",
          leerdoelen: [
            {
              id: "wah-e4-1",
              omschrijving:
                "groepen vergelijken op een gegeven kenmerk",
              begrippen: ["steekproevenverdeling", "steekproefgemiddelde", "steekproefproportie"],
            },
            {
              id: "wah-e4-2",
              omschrijving:
                "aan de hand van een gegeven berekeningswijze het verschil tussen twee groepen kwantificeren",
              formules: [
                "effectgrootte E = |X̄₁ - X̄₂| / ((S₁ + S₂) / 2)",
                "phi = (ad - bc) / √((a+b)(c+d)(a+c)(b+d)) (2×2 kruistabel)",
                "maxVcp = maximaal verschil in cumulatief percentage",
              ],
            },
            {
              id: "wah-e4-3",
              omschrijving:
                "op basis van een steekproefproportie of steekproefgemiddelde uitspraken doen over de populatieproportie of het populatiegemiddelde en aan de hand van een gegeven berekeningswijze de betrouwbaarheid kwantificeren",
              begrippen: [
                "betrouwbaarheid",
                "betrouwbaarheidsinterval",
                "populatiegemiddelde",
                "populatieproportie",
              ],
              formules: [
                "95%-betrouwbaarheidsinterval proportie: p ± 2√(p(1-p)/n)",
                "95%-betrouwbaarheidsinterval gemiddelde: X̄ ± 2·S/√n",
              ],
            },
            {
              id: "wah-e4-4",
              omschrijving:
                "een statistisch verband tussen twee variabelen beschrijven",
            },
            {
              id: "wah-e4-5",
              omschrijving:
                "onderscheid maken tussen statistische samenhang en oorzakelijk verband",
            },
            {
              id: "wah-e4-6",
              omschrijving:
                "de statistische samenhang tussen twee variabelen, beschreven met behulp van een kruistabel of puntenwolk, interpreteren in termen van de probleemsituatie",
            },
            {
              id: "wah-e4-7",
              omschrijving:
                "conclusies uit statistisch onderzoek met behulp van kwalitatieve en kwantitatieve argumenten kritisch beoordelen, al dan niet in het kader van de empirische cyclus (onderzoeksvraag, data verzamelen, data analyseren, conclusies trekken)",
            },
          ],
        },
      ],
    },
  ],
};

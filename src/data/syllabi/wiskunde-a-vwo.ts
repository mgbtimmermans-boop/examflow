import { VakSyllabus } from "@/types/syllabus";

export const WISKUNDE_A_VWO_SYLLABUS: VakSyllabus = {
  vakId: "wiskunde-a-vwo",
  niveau: "VWO",
  domeinen: [
    // Domein A is CE-relevant (combined with B, C, D on the CE)
    {
      id: "wia-dom-a",
      code: "A",
      titel: "Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wia-sub-a1",
          code: "A1",
          titel: "Algemene vaardigheden",
          leerdoelen: [
            {
              id: "wia-a1-1",
              omschrijving:
                "De kandidaat kan doelgericht informatie zoeken, beoordelen, selecteren en verwerken.",
            },
            {
              id: "wia-a1-2",
              omschrijving:
                "De kandidaat kan adequaat schriftelijk, mondeling en digitaal communiceren over onderwerpen uit de wiskunde.",
            },
            {
              id: "wia-a1-3",
              omschrijving:
                "De kandidaat kan bij het verwerven van vakkennis en vakvaardigheden reflecteren op eigen belangstelling, motivatie en leerproces.",
            },
            {
              id: "wia-a1-4",
              omschrijving:
                "De kandidaat kan toepassingen en effecten van wiskunde in het dagelijks leven en in verschillende vervolgopleidingen en beroepssituaties herkennen en benoemen.",
            },
          ],
        },
        {
          id: "wia-sub-a2",
          code: "A2",
          titel: "Profielspecifieke vaardigheden",
          leerdoelen: [
            {
              id: "wia-a2-1",
              omschrijving:
                "De kandidaat kan een probleemsituatie in de context interpreteren, structureren en vertalen naar een model waarin wiskundig gereedschap kan worden ingezet.",
            },
            {
              id: "wia-a2-2",
              omschrijving:
                "De kandidaat kan wiskundige methoden toepassen op probleemsituaties, de resultaten van een wiskundige handeling terugvertalen naar de context en daaruit conclusies trekken.",
            },
          ],
        },
        {
          id: "wia-sub-a3",
          code: "A3",
          titel: "Wiskundige vaardigheden",
          leerdoelen: [
            {
              id: "wia-a3-1",
              omschrijving: "De kandidaat beheerst de rekenregels.",
            },
            {
              id: "wia-a3-2",
              omschrijving:
                "De kandidaat beheerst de specifieke algebraïsche vaardigheden.",
            },
            {
              id: "wia-a3-3",
              omschrijving:
                "De kandidaat heeft inzicht in wiskundige notaties en formules en kan daarmee kwalitatief redeneren.",
            },
            {
              id: "wia-a3-4",
              omschrijving:
                "De kandidaat kan wiskundige informatie ordenen en in probleemsituaties de wiskundige structuur onderkennen.",
            },
            {
              id: "wia-a3-5",
              omschrijving:
                "De kandidaat kan bij een gegeven probleemsituatie een model opstellen in wiskundige termen.",
            },
            {
              id: "wia-a3-6",
              omschrijving:
                "De kandidaat kan een oplossingsstrategie kiezen, deze correct toepassen en de gevonden oplossing controleren binnen de context.",
            },
            {
              id: "wia-a3-7",
              omschrijving:
                "De kandidaat kan vakspecifieke taal interpreteren en gebruiken.",
            },
            {
              id: "wia-a3-8",
              omschrijving:
                "De kandidaat kan de correctheid van wiskundige redeneringen verifiëren.",
            },
            {
              id: "wia-a3-9",
              omschrijving:
                "De kandidaat kan eenvoudige wiskundige redeneringen correct onder woorden brengen.",
            },
            {
              id: "wia-a3-10",
              omschrijving:
                "De kandidaat kan bij het raadplegen van wiskundige informatie, bij het verkennen van wiskundige situaties, bij het geven van wiskundige redeneringen en bij het uitvoeren van wiskundige berekeningen gebruik maken van geschikte ICT-middelen.",
            },
            {
              id: "wia-a3-11",
              omschrijving:
                "De kandidaat kan antwoorden afronden op voorgeschreven nauwkeurigheid dan wel op een nauwkeurigheid die past bij de probleemsituatie.",
            },
          ],
        },
      ],
    },

    {
      id: "wia-dom-b",
      code: "B",
      titel: "Algebra en tellen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wia-sub-b1",
          code: "B1",
          titel: "Algebra",
          leerdoelen: [
            // Parate kennis
            {
              id: "wia-b1-pk",
              omschrijving:
                "De kandidaat kent de begrippen absoluut en relatief.",
              begrippen: ["absoluut", "relatief"],
            },
            // Parate vaardigheden
            {
              id: "wia-b1-1",
              omschrijving:
                "De kandidaat kan berekeningen maken met en zonder variabelen waarbij gebruik gemaakt wordt van verschillende rekenregels, inclusief die van machten en wortels.",
            },
            {
              id: "wia-b1-2",
              omschrijving:
                "De kandidaat kan berekeningen maken met verhoudingen, percentages, breuken.",
            },
            {
              id: "wia-b1-3",
              omschrijving:
                "De kandidaat kan werken met haakjes en vereenvoudigen door haakjes weg te werken.",
            },
            // Productieve vaardigheden
            {
              id: "wia-b1-4",
              omschrijving:
                "De kandidaat kan rekenregels gebruiken om algebraïsche expressies te herleiden of te verifiëren.",
            },
            {
              id: "wia-b1-5",
              omschrijving:
                "De kandidaat kan berekeningen maken met verhoudingen, percentages en breuken met daarin al dan niet een of meer variabelen.",
            },
            {
              id: "wia-b1-6",
              omschrijving:
                "De kandidaat kan werken met grootheden, samengestelde grootheden en maatsystemen, en eenheden omrekenen.",
            },
          ],
        },
        {
          id: "wia-sub-b2",
          code: "B2",
          titel: "Telproblemen",
          leerdoelen: [
            // Parate vaardigheden
            {
              id: "wia-b2-1",
              omschrijving:
                "De kandidaat kan het aantal permutaties en het aantal combinaties berekenen.",
              begrippen: ["permutaties", "combinaties"],
            },
            // Productieve vaardigheden
            {
              id: "wia-b2-2",
              omschrijving:
                "De kandidaat kan telproblemen structureren en schematiseren met behulp van boomdiagram, wegendiagram of rooster.",
              begrippen: ["boomdiagram", "wegendiagram", "rooster"],
            },
            {
              id: "wia-b2-3",
              omschrijving:
                "De kandidaat kan gebruik maken van permutaties en combinaties.",
            },
            {
              id: "wia-b2-4",
              omschrijving:
                "De kandidaat kan een probleem als een telprobleem identificeren.",
            },
            {
              id: "wia-b2-5",
              omschrijving:
                "De kandidaat kan bij een telprobleem een strategie bedenken en daarmee het probleem oplossen.",
            },
          ],
        },
      ],
    },

    {
      id: "wia-dom-c",
      code: "C",
      titel: "Verbanden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wia-sub-c1",
          code: "C1",
          titel: "Standaardfuncties",
          leerdoelen: [
            // Parate kennis
            {
              id: "wia-c1-pk",
              omschrijving:
                "De kandidaat kent de volgende typen standaardfuncties inclusief de bijbehorende namen, de bijbehorende karakteristieke eigenschappen (maximum, minimum, stijgen, dalen), de bijbehorende grafische kenmerken (snijpunten, toppen, asymptotisch gedrag), de begrippen bij exponentiële functies en bij de sinusfunctie.",
              begrippen: [
                "lineaire functie",
                "eerstegraadsfunctie",
                "kwadratische functie",
                "tweedegraadsfunctie",
                "machtsfunctie",
                "exponentiële functie",
                "logaritmische functie",
                "sinusfunctie",
                "grondtal",
                "exponent",
                "beginwaarde",
                "groeifactor",
                "groeipercentage",
                "halveringstijd",
                "verdubbelingstijd",
                "amplitude",
                "evenwichtsstand",
                "periode",
              ],
              formules: [
                "f(x) = ax + b",
                "f(x) = ax² + bx + c",
                "f(x) = axⁿ (n rationaal)",
                "f(x) = b · gˣ, ook f(x) = b · eˣ",
                "f(x) = ᵍlog(x), ook f(x) = ln(x)",
                "f(x) = sin(x)",
              ],
            },
            // Parate vaardigheden
            {
              id: "wia-c1-1",
              omschrijving:
                "De kandidaat kan de standaardfuncties en hun grafieken herkennen en gebruiken met hun karakteristieke eigenschappen.",
            },
            // Productieve vaardigheden
            {
              id: "wia-c1-2",
              omschrijving:
                "De kandidaat kan binnen een probleemsituatie de verschillende representaties van een functie, namelijk formule, tabel, grafiek, tekst, doelgericht gebruiken.",
            },
          ],
        },
        {
          id: "wia-sub-c2",
          code: "C2",
          titel: "Functies, grafieken, vergelijkingen en ongelijkheden",
          leerdoelen: [
            // Parate vaardigheden
            {
              id: "wia-c2-1",
              omschrijving:
                "De kandidaat kan door substitutie in een formule waarden berekenen.",
            },
            // Productieve vaardigheden
            {
              id: "wia-c2-2",
              omschrijving:
                "De kandidaat kan formules herleiden met behulp van de algebraïsche vaardigheden.",
            },
            {
              id: "wia-c2-3",
              omschrijving:
                "De kandidaat kan rekenregels voor logaritmen gebruiken.",
              formules: [
                "ᵍlog(a) + ᵍlog(b) = ᵍlog(a·b)",
                "ᵍlog(a) − ᵍlog(b) = ᵍlog(a/b)",
                "ᵍlog(aᵖ) = p · ᵍlog(a)",
                "ᵍlog(a) = ᵖlog(a) / ᵖlog(g)",
              ],
            },
            {
              id: "wia-c2-4",
              omschrijving:
                "De kandidaat kan passend bij een probleemsituatie de formules van (standaard)functies opstellen.",
            },
            {
              id: "wia-c2-5",
              omschrijving:
                "De kandidaat kan op de grafiek van een standaardfunctie transformaties, namelijk verschuiven of herschalen, uitvoeren en daarbij de bijbehorende formule opstellen.",
              begrippen: ["verschuiven", "herschalen"],
            },
            {
              id: "wia-c2-6",
              omschrijving:
                "De kandidaat kan verbanden van de vorm y = ax (recht evenredig) en van de vorm y = a/x (omgekeerd evenredig) herkennen en gebruiken.",
              begrippen: ["recht evenredig", "omgekeerd evenredig"],
            },
            {
              id: "wia-c2-7",
              omschrijving:
                "De kandidaat kan een vergelijking of een ongelijkheid opstellen aan de hand van een tabel, formule, grafiek of tekst.",
            },
            {
              id: "wia-c2-8",
              omschrijving:
                "De kandidaat kan vergelijkingen en ongelijkheden oplossen met behulp van numerieke of grafische methoden.",
            },
            {
              id: "wia-c2-9",
              omschrijving:
                "De kandidaat kan waarden vinden door lineair interpoleren of lineair extrapoleren.",
              begrippen: ["lineair interpoleren", "lineair extrapoleren"],
            },
            {
              id: "wia-c2-10",
              omschrijving:
                "De kandidaat kan functievoorschriften opstellen door twee functies op te tellen (f(x) + g(x)), af te trekken (f(x) − g(x)), te vermenigvuldigen (f(x) · g(x)), te delen (f(x)/g(x)) of samen te stellen (g(f(x))).",
            },
            {
              id: "wia-c2-11",
              omschrijving:
                "De kandidaat kan de grafiek tekenen van een functie die ontstaat door twee functies op te tellen, af te trekken, te vermenigvuldigen, te delen of samen te stellen.",
            },
            {
              id: "wia-c2-12",
              omschrijving:
                "De kandidaat kan een logaritmische schaalverdeling gebruiken.",
              begrippen: ["logaritmische schaalverdeling"],
            },
            {
              id: "wia-c2-13",
              omschrijving:
                "De kandidaat kan op basis van verbanden met meerdere variabelen kwalitatief redeneren.",
            },
          ],
        },
      ],
    },

    {
      id: "wia-dom-d",
      code: "D",
      titel: "Verandering",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wia-sub-d1",
          code: "D1",
          titel: "Rijen",
          leerdoelen: [
            // Parate kennis
            {
              id: "wia-d1-pk",
              omschrijving:
                "De kandidaat kent de notaties voor rijen: aₙ en a(n), waarbij n zowel bij 0 als bij 1 kan beginnen.",
              begrippen: [
                "rekenkundige rij",
                "meetkundige rij",
                "somrij",
                "∑-teken",
                "directe formule",
                "recursieve formule",
              ],
            },
            // Parate vaardigheden
            {
              id: "wia-d1-1",
              omschrijving:
                "De kandidaat kan vaststellen of een rij getallen een rekenkundige of meetkundige rij is.",
            },
            {
              id: "wia-d1-2",
              omschrijving:
                "De kandidaat kan een directe of recursieve formule opstellen van een rekenkundige of meetkundige rij.",
            },
            // Productieve vaardigheden
            {
              id: "wia-d1-3",
              omschrijving:
                "De kandidaat kan eigenschappen van de rij van verschillen van een rekenkundige en een meetkundige rij beschrijven en gebruiken.",
            },
            {
              id: "wia-d1-4",
              omschrijving:
                "De kandidaat kan bij een rij getallen het begrip somrij gebruiken.",
            },
            {
              id: "wia-d1-5",
              omschrijving:
                "De kandidaat kan uitdrukkingen met het ∑-teken interpreteren.",
            },
            {
              id: "wia-d1-6",
              omschrijving:
                "De kandidaat kan met een gegeven recursieve formule en met een gegeven directe formule werken.",
            },
            {
              id: "wia-d1-7",
              omschrijving:
                "De kandidaat kan binnen een probleemsituatie een recursieve formule herkennen, opstellen en deze doorrekenen.",
            },
          ],
        },
        {
          id: "wia-sub-d2",
          code: "D2",
          titel: "Helling",
          leerdoelen: [
            // Parate kennis
            {
              id: "wia-d2-pk",
              omschrijving:
                "De kandidaat kent het verband tussen de helling van een grafiek en de bijbehorende raaklijn.",
              begrippen: [
                "differentiequotiënt",
                "gemiddelde verandering",
                "toenamediagram",
                "helling",
                "hellinggrafiek",
                "raaklijn",
              ],
            },
            // Parate vaardigheden
            {
              id: "wia-d2-1",
              omschrijving:
                "De kandidaat kan vaststellen of een stijging/daling toenemend of afnemend is.",
            },
            {
              id: "wia-d2-2",
              omschrijving:
                "De kandidaat kan de helling van een grafiek in een punt berekenen.",
            },
            // Productieve vaardigheden
            {
              id: "wia-d2-3",
              omschrijving:
                "De kandidaat kan de extreme waarden van een functie berekenen.",
            },
            {
              id: "wia-d2-4",
              omschrijving:
                "De kandidaat kan bij een grafiek of functie een toenamediagram tekenen en binnen de probleemsituatie een relatie leggen tussen toenamediagram en grafiek of functie.",
            },
            {
              id: "wia-d2-5",
              omschrijving:
                "De kandidaat kan de gemiddelde verandering berekenen van een grafiek op een interval en de uitkomst interpreteren.",
            },
            {
              id: "wia-d2-6",
              omschrijving:
                "De kandidaat kan het veranderingsgedrag van een functie interpreteren binnen de probleemsituatie.",
            },
            {
              id: "wia-d2-7",
              omschrijving:
                "De kandidaat kan de helling van een grafiek in een punt interpreteren of toepassen binnen de probleemsituatie.",
            },
            {
              id: "wia-d2-8",
              omschrijving:
                "De kandidaat kan bij een grafiek de hellinggrafiek schetsen.",
            },
          ],
        },
        {
          id: "wia-sub-d3",
          code: "D3",
          titel: "Afgeleide",
          leerdoelen: [
            // Parate kennis
            {
              id: "wia-d3-pk",
              omschrijving:
                "De kandidaat kent de volgende notaties voor de afgeleide: dy/dx en f'(x).",
              begrippen: [
                "afgeleide",
                "afgeleide functie",
                "somregel",
                "verschilregel",
                "productregel",
                "quotiëntregel",
                "kettingregel",
                "raaklijn",
              ],
              formules: ["dy/dx", "f'(x)"],
            },
            // Parate vaardigheden
            {
              id: "wia-d3-1",
              omschrijving:
                "De kandidaat kan de afgeleide berekenen van de standaardfuncties, met uitzondering van f(x) = sin(x).",
            },
            {
              id: "wia-d3-2",
              omschrijving:
                "De kandidaat kan gebruik maken van de somregel, de verschilregel, de productregel en de quotiëntregel.",
              formules: [
                "s(x) = f(x) + g(x) → s'(x) = f'(x) + g'(x)",
                "v(x) = f(x) − g(x) → v'(x) = f'(x) − g'(x)",
                "p(x) = f(x) · g(x) → p'(x) = f'(x) · g(x) + f(x) · g'(x)",
                "q(x) = f(x)/g(x) → q'(x) = (f'(x)·g(x) − f(x)·g'(x)) / (g(x))²",
              ],
            },
            {
              id: "wia-d3-3",
              omschrijving:
                "De kandidaat kan gebruik maken van de kettingregel voor het differentiëren van functies van de vorm g(f(x)), waarbij f en g standaardfuncties zijn.",
              formules: ["k(x) = f(g(x)) → k'(x) = f'(g(x)) · g'(x)"],
            },
            {
              id: "wia-d3-4",
              omschrijving:
                "De kandidaat kan een verband leggen tussen de afgeleide van een functie en de helling van de grafiek van die functie in een gegeven punt van de grafiek.",
            },
            {
              id: "wia-d3-5",
              omschrijving:
                "De kandidaat kan de afgeleide gebruiken om extreme waarden van een functie te vinden of te controleren.",
            },
            // Productieve vaardigheden
            {
              id: "wia-d3-6",
              omschrijving:
                "De kandidaat kan een optimaliseringsprobleem in een probleemsituatie oplossen met behulp van differentiëren.",
            },
            {
              id: "wia-d3-7",
              omschrijving:
                "De kandidaat kan binnen een probleemsituatie betekenis geven aan de afgeleide en ermee redeneren.",
            },
          ],
        },
      ],
    },
  ],
};

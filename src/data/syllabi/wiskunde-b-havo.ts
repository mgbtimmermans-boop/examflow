import { VakSyllabus } from "@/types/syllabus";

export const WISKUNDE_B_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "wiskunde-b-havo",
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
                "adequaat schriftelijk rapporteren over onderwerpen uit de wiskunde",
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
                "een probleemsituatie in een wiskundige, natuurwetenschappelijke of maatschappelijke context analyseren, gebruik makend van relevante begrippen en theorie vertalen in een vakspecifiek onderzoek, dat onderzoek uitvoeren, en uit de onderzoeksresultaten conclusies trekken",
            },
            {
              id: "a2-2",
              omschrijving:
                "een realistisch probleem in een context analyseren, inperken tot een hanteerbaar probleem, vertalen naar een wiskundig model, modeluitkomsten genereren en interpreteren en het model toetsen en beoordelen",
            },
            {
              id: "a2-3",
              omschrijving:
                "met gegevens van wiskundige en natuurwetenschappelijke aard consistente redeneringen opzetten",
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
                "kan op basis van een gegeven probleemsituatie een schatting maken van de uitkomst zonder deze uitkomst exact te berekenen",
            },
            {
              id: "a3-7",
              omschrijving:
                "kan een oplossingsstrategie kiezen, deze correct toepassen en de gevonden oplossing controleren binnen de context",
            },
            {
              id: "a3-8",
              omschrijving: "kan vakspecifieke taal interpreteren en gebruiken",
            },
            {
              id: "a3-9",
              omschrijving:
                "kan de correctheid van wiskundige redeneringen verifiëren",
            },
            {
              id: "a3-10",
              omschrijving:
                "kan eenvoudige wiskundige redeneringen correct onder woorden brengen",
            },
            {
              id: "a3-11",
              omschrijving:
                "kan bij het raadplegen van wiskundige informatie, bij het verkennen van wiskundige situaties en bij het uitvoeren van wiskundige berekeningen gebruik maken van geschikte ICT-middelen",
            },
            {
              id: "a3-12",
              omschrijving:
                "kan antwoorden afronden op een voorgeschreven nauwkeurigheid dan wel op een nauwkeurigheid die past bij de probleemsituatie",
            },
          ],
        },
      ],
    },
    {
      id: "dom-b",
      naam: "Domein B: Functies, grafieken en vergelijkingen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b1",
          naam: "B1 — Standaardfuncties",
          leerdoelen: [
            {
              id: "wbh-b1-1",
              omschrijving:
                "van de standaardfuncties de grafiek tekenen en daarbij gebruik maken van de karakteristieke eigenschappen van de functie en haar grafiek",
              begrippen: [
                "lineaire functie",
                "kwadratische functie",
                "parabool",
                "machtsfunctie",
                "wortelfunctie",
                "exponentiële functie",
                "logaritmische functie",
                "grondtal",
                "exponent",
                "goniometrische functies",
                "sinusoïde",
                "radiaal",
                "periode",
                "amplitude",
                "evenwichtsstand",
                "gebroken lineaire functie",
                "hyperbool",
                "domein",
                "bereik",
                "nulpunt",
                "extreem",
                "maximum",
                "minimum",
                "stijgen",
                "dalen",
                "top",
                "symmetrie",
                "asymptotisch gedrag",
                "horizontale asymptoot",
                "verticale asymptoot",
              ],
              formules: [
                "f(x) = ax + b (lineair)",
                "f(x) = ax² + bx + c  of  a(x–p)(x–q)  of  a(x–r)² + s (kwadratisch)",
                "f(x) = xᵖ (machtsfunctie, p rationaal)",
                "f(x) = aˣ (exponentieel)",
                "f(x) = ᵃlog(x) (logaritmisch)",
                "f(x) = sin(x), f(x) = cos(x) (goniometrisch)",
                "f(x) = (ax+b)/(cx+d) (gebroken lineair)",
              ],
            },
            {
              id: "wbh-b1-2",
              omschrijving:
                "de verschillende schrijfwijzen van tweedegraadsfuncties gebruiken",
            },
            {
              id: "wbh-b1-3",
              omschrijving:
                "bij een grafiek of een tabel van een standaardfunctie, een lineaire functie of een kwadratische functie het functievoorschrift opstellen",
            },
            {
              id: "wbh-b1-4",
              omschrijving:
                "karakteristieke eigenschappen van een standaardfunctie en haar grafiek gebruiken bij het oplossen van problemen",
            },
            {
              id: "wbh-b1-5",
              omschrijving:
                "een exponentiële functie beschrijven met behulp van de termen beginwaarde en groeifactor",
              begrippen: ["beginwaarde", "groeifactor"],
            },
            {
              id: "wbh-b1-6",
              omschrijving:
                "bij exponentiële en logaritmische functies x schrijven als functie van y",
            },
            {
              id: "wbh-b1-7",
              omschrijving: "bij machtsfuncties x schrijven als functie van y",
            },
            {
              id: "wbh-b1-8",
              omschrijving:
                "op een grafiek een translatie en/of vermenigvuldiging ten opzichte van x- of y-as uitvoeren",
              begrippen: ["translatie", "vermenigvuldiging t.o.v. x-as of y-as"],
            },
            {
              id: "wbh-b1-9",
              omschrijving:
                "het functievoorschrift opstellen dat hoort bij een nieuwe grafiek die is ontstaan na transformatie van een gegeven grafiek",
            },
            {
              id: "wbh-b1-10",
              omschrijving:
                "het functievoorschrift opstellen van de somfunctie of de verschilfunctie van twee functies",
              begrippen: ["somfunctie", "verschilfunctie"],
            },
            {
              id: "wbh-b1-11",
              omschrijving:
                "bij exponentiële groeiprocessen de verdubbelingstijd en de halveringstijd bepalen",
              begrippen: ["verdubbelingstijd", "halveringstijd"],
            },
            {
              id: "wbh-b1-12",
              omschrijving:
                "twee functies samenstellen door middel van een ketting en het functievoorschrift opstellen van de samengestelde functie",
              begrippen: ["samengestelde functie"],
            },
            {
              id: "wbh-b1-13",
              omschrijving:
                "van een samengestelde functie de karakteristieke eigenschappen bepalen",
            },
            {
              id: "wbh-b1-14",
              omschrijving:
                "bij een in een probleemsituatie beschreven verband een passend functievoorschrift opstellen",
            },
            {
              id: "wbh-b1-15",
              omschrijving:
                "x uitdrukken in y bij een samengestelde functie",
            },
          ],
        },
        {
          id: "sub-b2",
          naam: "B2 — Vergelijkingen en ongelijkheden",
          leerdoelen: [
            {
              id: "wbh-b2-1",
              omschrijving:
                "een vergelijking oplossen die te herleiden is tot een lineaire vergelijking",
              begrippen: ["stelsel van vergelijkingen", "abc-formule"],
            },
            {
              id: "wbh-b2-2",
              omschrijving:
                "een vergelijking oplossen die te herleiden is tot een kwadratische vergelijking",
              formules: ["x = (−b ± √(b²−4ac)) / 2a"],
            },
            {
              id: "wbh-b2-3",
              omschrijving:
                "een vergelijking oplossen die te herleiden is tot het type xⁿ = c",
            },
            {
              id: "wbh-b2-4",
              omschrijving:
                "een vergelijking oplossen die te herleiden is tot het type aˣ = c of ᵃlog(x) = c",
            },
            {
              id: "wbh-b2-5",
              omschrijving:
                "een vergelijking oplossen van het type f(x) = g(x) waarbij f en g standaardfuncties zijn",
            },
            {
              id: "wbh-b2-6",
              omschrijving:
                "een stelsel van twee lineaire vergelijkingen met twee onbekenden oplossen",
            },
            {
              id: "wbh-b2-7",
              omschrijving:
                "een ongelijkheid oplossen van het type f(x) ≤ g(x), f(x) < g(x) of f(x) ≥ g(x), f(x) > g(x) waarbij f en g standaardfuncties zijn",
            },
            {
              id: "wbh-b2-8",
              omschrijving:
                "een vergelijking dan wel een ongelijkheid opstellen aan de hand van een gegeven probleemsituatie, de vergelijking of ongelijkheid oplossen en de oplossingen interpreteren",
            },
            {
              id: "wbh-b2-9",
              omschrijving:
                "een vergelijking met een parameter oplossen en de oplossing schrijven als functie van de parameter",
            },
            {
              id: "wbh-b2-10",
              omschrijving:
                "een ongelijkheid oplossen van de vorm |f(x)| ≤ c, |f(x)| < c of |f(x)| ≥ c, |f(x)| > c, waarbij f een samengestelde functie is",
            },
          ],
        },
        {
          id: "sub-b3",
          naam: "B3 — Evenredigheidsverbanden",
          leerdoelen: [
            {
              id: "wbh-b3-1",
              omschrijving:
                "in een gegeven probleemsituatie bepalen of er sprake is van een recht evenredig of een omgekeerd evenredig verband",
              begrippen: [
                "recht evenredig",
                "omgekeerd evenredig",
                "evenredig met een macht",
                "evenredigheidsconstante",
              ],
              formules: [
                "y = cx (recht evenredig)",
                "y = c/x (omgekeerd evenredig)",
                "y = c·xⁿ (machtsverband)",
              ],
            },
            {
              id: "wbh-b3-2",
              omschrijving:
                "met de algemene vorm van het machtsverband y = c·xⁿ rekenen",
            },
            {
              id: "wbh-b3-3",
              omschrijving:
                "in een machtsverband y = c·xⁿ tussen twee grootheden x en y de exponent n en de evenredigheidsconstante c bepalen",
            },
            {
              id: "wbh-b3-4",
              omschrijving:
                "in een gegeven probleemsituatie een vergelijking opstellen waarbij gebruik wordt gemaakt van het machtsverband tussen twee grootheden, de vergelijking oplossen en de oplossingen interpreteren",
            },
          ],
        },
        {
          id: "sub-b4",
          naam: "B4 — Periodieke functies",
          leerdoelen: [
            {
              id: "wbh-b4-1",
              omschrijving:
                "graden omrekenen in radialen en omgekeerd",
              begrippen: ["radiaal", "periodiek verschijnsel", "periode", "amplitude", "evenwichtsstand"],
            },
            {
              id: "wbh-b4-2",
              omschrijving:
                "de grafiek tekenen van functies van de vorm f(x) = d + a·sin(b(x−c)) en f(x) = d + a·cos(b(x−c))",
              formules: [
                "f(x) = d + a·sin(b(x − c))",
                "f(x) = d + a·cos(b(x − c))",
                "exacte waarden: sin(kπ/6) en cos(kπ/6); sin(kπ/4) en cos(kπ/4)",
              ],
            },
            {
              id: "wbh-b4-3",
              omschrijving:
                "vergelijkingen van het type f(x) = c oplossen in een gegeven interval met f een sinusoïde, daarbij gebruik maken van periodiciteit en symmetrie",
            },
            {
              id: "wbh-b4-4",
              omschrijving:
                "van een sinusoïde het bijbehorende functievoorschrift opstellen",
            },
            {
              id: "wbh-b4-5",
              omschrijving:
                "in een gegeven probleemsituatie voor een periodiek verschijnsel een sinusoïde opstellen, daarmee berekeningen uitvoeren en de resultaten interpreteren",
            },
          ],
        },
      ],
    },
    {
      id: "dom-c",
      naam: "Domein C: Meetkundige berekeningen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-c1",
          naam: "C1 — Afstanden en hoeken in concrete situaties",
          leerdoelen: [
            {
              id: "wbh-c1-1",
              omschrijving:
                "sinus, cosinus en tangens gebruiken voor het berekenen van de grootte van hoeken en de lengte van zijden in een rechthoekige driehoek",
              begrippen: [
                "goniometrische verhoudingen",
                "stelling van Pythagoras",
                "sinusregel",
                "cosinusregel",
                "gelijkvormigheid",
              ],
            },
            {
              id: "wbh-c1-2",
              omschrijving:
                "de stelling van Pythagoras gebruiken om de afstand tussen twee punten te berekenen",
            },
            {
              id: "wbh-c1-3",
              omschrijving:
                "de sinus- en cosinusregel gebruiken voor het berekenen van de lengte van lijnstukken en de grootte van hoeken in een driehoek",
            },
            {
              id: "wbh-c1-4",
              omschrijving:
                "met gelijkvormigheid de lengte van lijnstukken berekenen",
            },
            {
              id: "wbh-c1-5",
              omschrijving:
                "voor het oplossen van een meetkundig probleem een combinatie gebruiken van goniometrische verhoudingen, stelling van Pythagoras, sinus- en cosinusregel en gelijkvormigheid",
            },
          ],
        },
        {
          id: "sub-c2",
          naam: "C2 — Algebraïsche methoden",
          leerdoelen: [
            {
              id: "wbh-c2-1",
              omschrijving:
                "de vergelijking van een lijn en een cirkel opstellen",
              begrippen: [
                "vergelijking van een lijn",
                "richtingscoëfficiënt",
                "vergelijking van een cirkel",
                "raaklijn",
              ],
              formules: [
                "lijn: y = ax + b  of  ax + by = c",
                "loodrechte lijnen: m₁ · m₂ = −1",
                "cirkel: (x−a)² + (y−b)² = r²",
              ],
            },
            {
              id: "wbh-c2-2",
              omschrijving: "de hoek tussen twee lijnen berekenen",
            },
            {
              id: "wbh-c2-3",
              omschrijving:
                "de vergelijking van de loodlijn door een gegeven punt op een lijn opstellen",
            },
            {
              id: "wbh-c2-4",
              omschrijving:
                "uit een vergelijking van een cirkel de straal en de coördinaten van het middelpunt afleiden",
            },
            {
              id: "wbh-c2-5",
              omschrijving:
                "de vergelijking van de raaklijn aan een cirkel opstellen in een gegeven raakpunt",
            },
            {
              id: "wbh-c2-6",
              omschrijving:
                "de coördinaten van het snijpunt van twee lijnen berekenen",
            },
            {
              id: "wbh-c2-7",
              omschrijving:
                "de oplosbaarheid van een stelsel van twee lineaire vergelijkingen in verband brengen met de onderlinge ligging van de bijbehorende lijnen",
            },
            {
              id: "wbh-c2-8",
              omschrijving:
                "in een coördinatenstelsel de lengte van een lijnstuk berekenen",
            },
            {
              id: "wbh-c2-9",
              omschrijving:
                "de coördinaten van de snijpunten van een lijn en een cirkel berekenen",
            },
            {
              id: "wbh-c2-10",
              omschrijving:
                "de afstand tussen punten, lijnen en cirkels berekenen",
            },
            {
              id: "wbh-c2-11",
              omschrijving:
                "onderzoeken hoeveel gemeenschappelijke punten een lijn en een cirkel hebben",
            },
          ],
        },
      ],
    },
    {
      id: "dom-d",
      naam: "Domein D: Toegepaste analyse",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d1",
          naam: "D1 — Veranderingen",
          leerdoelen: [
            {
              id: "wbh-d1-1",
              omschrijving:
                "vanuit een gegeven toenamediagram het verloop van een grafiek schetsen",
              begrippen: [
                "interval",
                "intervalnotaties",
                "Δ-notatie",
                "differentie",
                "differentiequotiënt",
                "gemiddelde verandering",
                "toenamediagram",
              ],
            },
            {
              id: "wbh-d1-2",
              omschrijving:
                "een toenamediagram bij een gegeven grafiek, tabel of formule tekenen",
            },
            {
              id: "wbh-d1-3",
              omschrijving:
                "differentiequotiënten berekenen indien de functie is gegeven door een grafiek, tabel of formule",
            },
            {
              id: "wbh-d1-4",
              omschrijving:
                "differentiequotiënten interpreteren als maat voor de gemiddelde verandering in de waarde van een functie op een interval",
            },
            {
              id: "wbh-d1-5",
              omschrijving:
                "het veranderingsgedrag van variabelen beschrijven met behulp van toenamediagrammen en differentiequotiënten",
            },
          ],
        },
        {
          id: "sub-d2",
          naam: "D2 — Afgeleide functies",
          leerdoelen: [
            {
              id: "wbh-d2-1",
              omschrijving:
                "een lokale afgeleide benaderen door differentiequotiënten met afnemende intervalgrootte",
              begrippen: [
                "afgeleide functie",
                "hellinggrafiek",
                "helling",
                "steilheid",
                "raaklijn",
              ],
            },
            {
              id: "wbh-d2-2",
              omschrijving:
                "een lokale afgeleide interpreteren als de helling of steilheid van een grafiek in een punt",
            },
            {
              id: "wbh-d2-3",
              omschrijving:
                "de grafiek van de afgeleide schetsen indien de grafiek van de functie is gegeven",
            },
            {
              id: "wbh-d2-4",
              omschrijving:
                "de grafiek van de functie schetsen indien de grafiek van de afgeleide is gegeven",
            },
            {
              id: "wbh-d2-5",
              omschrijving:
                "conclusies trekken over lokale veranderingen van functiewaarden op basis van de afgeleide of met behulp van een numeriek-grafische methode",
            },
          ],
        },
        {
          id: "sub-d3",
          naam: "D3 — Bepaling afgeleide functies",
          leerdoelen: [
            {
              id: "wbh-d3-1",
              omschrijving:
                "de afgeleide bepalen van machtsfuncties met rationale exponenten",
              begrippen: ["differentiëren", "somregel", "verschilregel", "kettingregel"],
              formules: [
                "f(x) = xⁿ  →  f'(x) = n·xⁿ⁻¹",
                "somregel: (f + g)' = f' + g'",
                "kettingregel (eerste functie lineair): f(g(x))' = f'(g(x))·g'(x)",
              ],
            },
            {
              id: "wbh-d3-2",
              omschrijving:
                "de somregel en verschilregel gebruiken bij het bepalen van de afgeleide",
            },
            {
              id: "wbh-d3-3",
              omschrijving:
                "de kettingregel gebruiken bij het bepalen van de afgeleide van een samengestelde functie, waarvan de eerste functie lineair is en de tweede functie een machtsfunctie met rationale exponent",
            },
            {
              id: "wbh-d3-4",
              omschrijving:
                "het verband gebruiken tussen de afgeleide van f(x) en de afgeleide van c·f(x) + d of van f(cx + d)",
            },
            {
              id: "wbh-d3-5",
              omschrijving:
                "een combinatie van somregel, verschilregel en kettingregel gebruiken bij het bepalen van de afgeleide",
            },
          ],
        },
        {
          id: "sub-d4",
          naam: "D4 — Toepassing afgeleide functies",
          leerdoelen: [
            {
              id: "wbh-d4-1",
              omschrijving:
                "de afgeleide gebruiken bij het opstellen van de vergelijking van de raaklijn in een punt van de grafiek van een functie",
            },
            {
              id: "wbh-d4-2",
              omschrijving:
                "de afgeleide gebruiken bij het verifiëren en bij het bepalen van extremen van een functie",
              begrippen: ["extreem", "maximum", "minimum"],
            },
            {
              id: "wbh-d4-3",
              omschrijving:
                "de afgeleide gebruiken bij het bepalen van een raaklijn met een gegeven helling",
            },
            {
              id: "wbh-d4-4",
              omschrijving:
                "in een gegeven probleemsituatie de afgeleide gebruiken voor het bepalen van een optimale situatie",
            },
            {
              id: "wbh-d4-5",
              omschrijving:
                "een optimaliseringsprobleem vertalen in een formule en dit probleem vervolgens met behulp van de afgeleide of numeriek-grafisch oplossen",
            },
          ],
        },
      ],
    },
  ],
};

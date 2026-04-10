import { VakSyllabus } from "@/types/syllabus";

export const WISKUNDE_B_VWO_SYLLABUS: VakSyllabus = {
  vakId: "wiskunde-b-vwo",
  niveau: "VWO",
  domeinen: [
    {
      id: "wib-dom-a",
      code: "A",
      titel: "Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wib-sub-a1",
          code: "A1",
          titel: "Algemene vaardigheden",
          leerdoelen: [
            {
              id: "wib-a1-1",
              omschrijving: "De kandidaat kan doelgericht informatie zoeken, beoordelen, selecteren en verwerken.",
            },
            {
              id: "wib-a1-2",
              omschrijving: "De kandidaat kan adequaat schriftelijk rapporteren over onderwerpen uit de wiskunde.",
            },
          ],
        },
        {
          id: "wib-sub-a2",
          code: "A2",
          titel: "Profielspecifieke vaardigheden",
          leerdoelen: [
            {
              id: "wib-a2-1",
              omschrijving:
                "De kandidaat kan een probleemsituatie in een wiskundige, natuurwetenschappelijke of maatschappelijke context analyseren, gebruik makend van relevante begrippen en theorie vertalen in een vakspecifiek onderzoek, dat onderzoek uitvoeren, en uit de onderzoeksresultaten conclusies trekken.",
            },
            {
              id: "wib-a2-2",
              omschrijving:
                "De kandidaat kan een realistisch probleem in een context analyseren, inperken tot een hanteerbaar probleem, vertalen naar een wiskundig model, modeluitkomsten genereren en interpreteren en het model toetsen en beoordelen.",
            },
            {
              id: "wib-a2-3",
              omschrijving:
                "De kandidaat kan met gegevens van wiskundige en natuurwetenschappelijke aard consistente redeneringen opzetten.",
            },
          ],
        },
        {
          id: "wib-sub-a3",
          code: "A3",
          titel: "Wiskundige vaardigheden",
          leerdoelen: [
            {
              id: "wib-a3-1",
              omschrijving: "De kandidaat beheerst de rekenregels.",
            },
            {
              id: "wib-a3-2",
              omschrijving: "De kandidaat beheerst de specifieke algebraïsche vaardigheden.",
            },
            {
              id: "wib-a3-3",
              omschrijving:
                "De kandidaat heeft inzicht in wiskundige notaties en formules en kan daarmee kwalitatief redeneren.",
            },
            {
              id: "wib-a3-4",
              omschrijving:
                "De kandidaat kan wiskundige informatie ordenen en in probleemsituaties de wiskundige structuur onderkennen.",
            },
            {
              id: "wib-a3-5",
              omschrijving:
                "De kandidaat kan bij een gegeven probleemsituatie een model opstellen in wiskundige termen.",
            },
            {
              id: "wib-a3-6",
              omschrijving:
                "De kandidaat kan op basis van een gegeven probleemsituatie een schatting maken van de uitkomst zonder deze uitkomst exact te berekenen.",
            },
            {
              id: "wib-a3-7",
              omschrijving:
                "De kandidaat kan een oplossingsstrategie kiezen, deze correct toepassen en de gevonden oplossing controleren binnen de context.",
            },
            {
              id: "wib-a3-8",
              omschrijving: "De kandidaat kan vakspecifieke taal interpreteren en gebruiken.",
            },
            {
              id: "wib-a3-9",
              omschrijving: "De kandidaat kan de correctheid van wiskundige redeneringen verifiëren.",
            },
            {
              id: "wib-a3-10",
              omschrijving: "De kandidaat kan eenvoudige wiskundige redeneringen correct onder woorden brengen.",
            },
            {
              id: "wib-a3-11",
              omschrijving:
                "De kandidaat kan bij het raadplegen van wiskundige informatie, bij het verkennen van wiskundige situaties, bij het geven van wiskundige redeneringen en bij het uitvoeren van wiskundige berekeningen gebruik maken van geschikte ICT-middelen.",
            },
            {
              id: "wib-a3-12",
              omschrijving:
                "De kandidaat kan antwoorden afronden op een voorgeschreven nauwkeurigheid dan wel op een nauwkeurigheid die past bij de probleemsituatie.",
            },
          ],
        },
      ],
    },
    {
      id: "wib-dom-b",
      code: "B",
      titel: "Functies, grafieken en vergelijkingen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wib-sub-b1",
          code: "B1",
          titel: "Formules en functies",
          leerdoelen: [
            {
              id: "wib-b1-1",
              omschrijving: "De kandidaat kan een formule herschrijven tot een gelijkwaardige formule.",
              begrippen: ["functie", "functievoorschrift", "variabele"],
            },
            {
              id: "wib-b1-2",
              omschrijving: "De kandidaat kan een formule – indien mogelijk – herleiden tot een functievoorschrift.",
            },
            {
              id: "wib-b1-3",
              omschrijving: "De kandidaat kan bij een verband tussen twee variabelen een grafiek tekenen.",
            },
            {
              id: "wib-b1-4",
              omschrijving: "De kandidaat kan formules combineren tot een nieuwe formule.",
            },
            {
              id: "wib-b1-5",
              omschrijving:
                "De kandidaat kan aan de hand van een formule uitspraken doen over de bijbehorende probleemsituatie.",
            },
          ],
        },
        {
          id: "wib-sub-b2",
          code: "B2",
          titel: "Standaardfuncties",
          leerdoelen: [
            {
              id: "wib-b2-1",
              omschrijving:
                "De kandidaat kan van een standaardfunctie de grafiek tekenen en daarbij gebruik maken van de karakteristieke eigenschappen van de functie en haar grafiek.",
              begrippen: [
                "machtsfunctie",
                "exponentiële functie",
                "logaritmische functie",
                "goniometrische functie",
                "absolute-waardefunctie",
                "grondtal",
                "exponent",
                "radiaal",
                "periode",
                "amplitude",
                "evenwichtsstand",
                "domein",
                "bereik",
                "nulpunt",
                "extreem",
                "minimum",
                "maximum",
                "stijgen",
                "dalen",
                "top",
                "buigpunt",
                "symmetrie",
                "asymptoot",
              ],
            },
            {
              id: "wib-b2-2",
              omschrijving: "De kandidaat kan de verschillende schrijfwijzen van tweedegraads functies gebruiken.",
            },
            {
              id: "wib-b2-3",
              omschrijving:
                "De kandidaat kan bij een grafiek of een tabel van een standaardfunctie, een lineaire functie of een kwadratische functie het functievoorschrift opstellen.",
            },
            {
              id: "wib-b2-4",
              omschrijving:
                "De kandidaat kan karakteristieke eigenschappen van een standaardfunctie en haar grafiek gebruiken bij het oplossen van problemen.",
            },
            {
              id: "wib-b2-5",
              omschrijving:
                "De kandidaat kan een exponentiële functie beschrijven met behulp van de termen beginwaarde en groeifactor.",
              begrippen: ["beginwaarde", "groeifactor"],
            },
            {
              id: "wib-b2-6",
              omschrijving:
                "De kandidaat kan bij exponentiële groeiprocessen de verdubbelingstijd en de halveringstijd bepalen.",
              begrippen: ["verdubbelingstijd", "halveringstijd"],
            },
          ],
        },
        {
          id: "wib-sub-b3",
          code: "B3",
          titel: "Functies en grafieken",
          leerdoelen: [
            {
              id: "wib-b3-1",
              omschrijving:
                "De kandidaat kan op een grafiek een translatie en/of vermenigvuldiging ten opzichte van x- of y-as uitvoeren.",
              begrippen: ["translatie", "vermenigvuldiging"],
            },
            {
              id: "wib-b3-2",
              omschrijving:
                "De kandidaat kan het functievoorschrift opstellen dat hoort bij een nieuwe grafiek die is ontstaan na translatie en/of vermenigvuldiging ten opzichte van x- of y-as van een gegeven grafiek.",
            },
            {
              id: "wib-b3-3",
              omschrijving:
                "De kandidaat kan de samenhang tussen een translatie en/of vermenigvuldiging ten opzichte van x- of y-as van een grafiek en de verandering van het bijbehorende functievoorschrift gebruiken.",
            },
            {
              id: "wib-b3-4",
              omschrijving:
                "De kandidaat kan functievoorschriften combineren door middel van optellen, aftrekken, vermenigvuldigen en/of delen.",
            },
            {
              id: "wib-b3-5",
              omschrijving:
                "De kandidaat kan functies samenstellen door middel van een ketting en het functievoorschrift opstellen van de samengestelde functie.",
              begrippen: ["samengestelde functie", "kettingfunctie"],
            },
            {
              id: "wib-b3-6",
              omschrijving: "De kandidaat kan van functies en hun grafieken karakteristieke eigenschappen bepalen.",
            },
            {
              id: "wib-b3-7",
              omschrijving:
                "De kandidaat kan bij een gegeven machtsverband een formule opstellen, ermee rekenen en over het machtsverband redeneren.",
              begrippen: ["machtsverband"],
            },
            {
              id: "wib-b3-8",
              omschrijving:
                "De kandidaat kan bij een in een probleemsituatie beschreven verband een passend functievoorschrift opstellen.",
            },
            {
              id: "wib-b3-9",
              omschrijving:
                "De kandidaat kan een functievoorschrift dat een parameter bevat hanteren als een verzameling van functievoorschriften.",
              begrippen: ["parameter"],
            },
          ],
        },
        {
          id: "wib-sub-b4",
          code: "B4",
          titel: "Inverse functies",
          leerdoelen: [
            {
              id: "wib-b4-1",
              omschrijving:
                "De kandidaat kan van de machtsfuncties, de exponentiële functies en de logaritmische functies het functievoorschrift van de inverse functie opstellen.",
              begrippen: ["inverse functie"],
            },
            {
              id: "wib-b4-2",
              omschrijving:
                "De kandidaat kan bij de grafiek van een functie de grafiek van de inverse functie tekenen.",
            },
            {
              id: "wib-b4-3",
              omschrijving:
                "De kandidaat kan van een samengestelde functie het functievoorschrift van de inverse functie opstellen.",
            },
            {
              id: "wib-b4-4",
              omschrijving:
                "De kandidaat kan de eigenschappen van de inverse functie en haar grafiek interpreteren in een gegeven probleemsituatie.",
            },
          ],
        },
        {
          id: "wib-sub-b5",
          code: "B5",
          titel: "Vergelijkingen en ongelijkheden",
          leerdoelen: [
            {
              id: "wib-b5-1",
              omschrijving:
                "De kandidaat kan een vergelijking oplossen die te herleiden is tot een lineaire vergelijking.",
              begrippen: ["stelsel van vergelijkingen"],
              formules: ["x = (-b ± √(b²-4ac)) / (2a)"],
            },
            {
              id: "wib-b5-2",
              omschrijving:
                "De kandidaat kan een vergelijking oplossen die te herleiden is tot een kwadratische vergelijking.",
            },
            {
              id: "wib-b5-3",
              omschrijving:
                "De kandidaat kan een vergelijking oplossen die te herleiden is tot het type xᵃ = c of |x| = c.",
            },
            {
              id: "wib-b5-4",
              omschrijving:
                "De kandidaat kan een vergelijking oplossen die te herleiden is tot het type ᵍlog(x) = c of aˣ = c.",
            },
            {
              id: "wib-b5-5",
              omschrijving:
                "De kandidaat kan een vergelijking oplossen van het type f(x) = g(x) waarbij f en g functies zijn zoals genoemd in subdomein B2.",
            },
            {
              id: "wib-b5-6",
              omschrijving:
                "De kandidaat kan een ongelijkheid oplossen van het type f(x) ≤ g(x), f(x) < g(x) of f(x) ≥ g(x), f(x) > g(x) waarbij f en g functies zijn zoals genoemd in subdomein B2.",
            },
            {
              id: "wib-b5-7",
              omschrijving:
                "De kandidaat kan een stelsel van twee lineaire vergelijkingen met twee onbekenden oplossen.",
            },
            {
              id: "wib-b5-8",
              omschrijving:
                "De kandidaat kan een vergelijking dan wel een ongelijkheid opstellen aan de hand van een gegeven probleemsituatie, de vergelijking of ongelijkheid oplossen en de oplossingen van deze vergelijking of ongelijkheid interpreteren.",
            },
            {
              id: "wib-b5-9",
              omschrijving:
                "De kandidaat kan een vergelijking met een parameter oplossen en de oplossing schrijven als functie van de parameter.",
            },
            {
              id: "wib-b5-10",
              omschrijving:
                "De kandidaat kan een ongelijkheid oplossen van de vorm f(x) ≤ c, f(x) < c of f(x) ≥ c, f(x) > c, waarbij f een samengestelde functie is, zoals bedoeld in B3.5.",
            },
          ],
        },
        {
          id: "wib-sub-b6",
          code: "B6",
          titel: "Asymptoten en limietgedrag van functies",
          leerdoelen: [
            {
              id: "wib-b6-1",
              omschrijving: "De kandidaat kan asymptoten van de grafieken van standaardfuncties bepalen.",
              begrippen: [
                "limiet",
                "linkerlimiet",
                "rechterlimiet",
                "horizontale asymptoot",
                "verticale asymptoot",
                "scheve asymptoot",
                "perforatie",
              ],
            },
            {
              id: "wib-b6-2",
              omschrijving:
                "De kandidaat kan met behulp van limieten onderzoek doen naar horizontale, verticale en scheve asymptoten van grafieken van functies.",
            },
            {
              id: "wib-b6-3",
              omschrijving:
                "De kandidaat kan onderzoek doen naar linker- en rechterlimieten en naar perforaties.",
            },
          ],
        },
      ],
    },
    {
      id: "wib-dom-c",
      code: "C",
      titel: "Differentiaal- en integraalrekening",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wib-sub-c1",
          code: "C1",
          titel: "Afgeleide functies",
          leerdoelen: [
            {
              id: "wib-c1-1",
              omschrijving:
                "De kandidaat kan de afgeleide gebruiken bij het opstellen van de vergelijking van de raaklijn in een punt van de grafiek van een functie.",
              begrippen: ["afgeleide", "tweede afgeleide", "hellinggrafiek", "raaklijn"],
            },
            {
              id: "wib-c1-2",
              omschrijving:
                "De kandidaat kan een lokale afgeleide interpreteren als de helling of steilheid van een grafiek in een punt.",
            },
            {
              id: "wib-c1-3",
              omschrijving:
                "De kandidaat kan de afgeleide gebruiken voor het bestuderen van stijgen of dalen van functiewaarden.",
            },
            {
              id: "wib-c1-4",
              omschrijving:
                "De kandidaat kan de afgeleide gebruiken bij het verifiëren en bij het bepalen van extremen van een functie.",
            },
            {
              id: "wib-c1-5",
              omschrijving:
                "De kandidaat kan de grafiek van de afgeleide schetsen indien de grafiek van de functie is gegeven.",
            },
            {
              id: "wib-c1-6",
              omschrijving:
                "De kandidaat kan de grafiek van de functie schetsen indien de grafiek van de afgeleide is gegeven.",
            },
            {
              id: "wib-c1-7",
              omschrijving:
                "De kandidaat kan de tweede afgeleide gebruiken voor het bestuderen van toenemend of afnemend stijgen of dalen van functiewaarden.",
            },
            {
              id: "wib-c1-8",
              omschrijving: "De kandidaat kan de tweede afgeleide gebruiken om buigpunten te berekenen.",
            },
            {
              id: "wib-c1-9",
              omschrijving:
                "De kandidaat kan gebruik maken van de relatie tussen afgeleide en raaklijn in een probleemsituatie.",
            },
            {
              id: "wib-c1-10",
              omschrijving:
                "De kandidaat kan een optimaliseringsprobleem vertalen in een formule en dit probleem vervolgens met behulp van de afgeleide functie of numeriek-grafisch oplossen.",
            },
          ],
        },
        {
          id: "wib-sub-c2",
          code: "C2",
          titel: "Technieken voor differentiëren",
          leerdoelen: [
            {
              id: "wib-c2-1",
              omschrijving:
                "De kandidaat kan bij het bepalen van de afgeleide gebruik maken van de afgeleide van de standaardfuncties.",
              begrippen: ["differentiëren"],
            },
            {
              id: "wib-c2-2",
              omschrijving:
                "De kandidaat kan bij het bepalen van de afgeleide van exponentiële en logaritmische functies het getal e en de natuurlijke logaritme gebruiken.",
              begrippen: ["getal e", "natuurlijke logaritme"],
            },
            {
              id: "wib-c2-3",
              omschrijving:
                "De kandidaat kan voor het bepalen van de afgeleide de som-, verschil-, product-, quotiënt- en kettingregel gebruiken.",
              begrippen: ["somregel", "verschilregel", "productregel", "quotiëntregel", "kettingregel"],
            },
            {
              id: "wib-c2-4",
              omschrijving:
                "De kandidaat kan het verband gebruiken tussen de afgeleide van een functie f(x) en de afgeleide van c·f(x) + d of de afgeleide van f(c·x + d).",
            },
            {
              id: "wib-c2-5",
              omschrijving:
                "De kandidaat kan een combinatie van som-, verschil-, product- en/of quotiëntregel gebruiken bij het bepalen van een afgeleide.",
            },
            {
              id: "wib-c2-6",
              omschrijving:
                "De kandidaat kan de kettingregel gebruiken in combinatie met de som-, verschil-, product- en/of quotiëntregel bij het bepalen van een afgeleide.",
            },
          ],
        },
        {
          id: "wib-sub-c3",
          code: "C3",
          titel: "Integraalrekening",
          leerdoelen: [
            {
              id: "wib-c3-1",
              omschrijving:
                "De kandidaat kan een bepaalde integraal exact berekenen indien de integrand de gedaante c·f(x) + d of f(c·x + d) heeft, waarbij f een machtsfunctie, een exponentiële functie, de functie sinus of de functie cosinus is en indien de integrand de som van twee of meer van deze functies is.",
              begrippen: ["integrand", "primitieve functie", "bepaalde integraal"],
              formules: ["∫ₐᵇ f(x) dx = F(b) - F(a)"],
            },
            {
              id: "wib-c3-2",
              omschrijving:
                "De kandidaat kan een bepaalde integraal benaderen met behulp van ICT.",
            },
            {
              id: "wib-c3-3",
              omschrijving:
                "De kandidaat kan controleren of een gegeven functie een primitieve is van een functie f.",
            },
            {
              id: "wib-c3-4",
              omschrijving:
                "De kandidaat kan voor de berekening van de oppervlakte van een vlakdeel een bepaalde integraal opstellen.",
            },
            {
              id: "wib-c3-5",
              omschrijving:
                "De kandidaat kan voor de berekening van de inhoud van een omwentelingslichaam dat ontstaat door een vlakdeel te wentelen om de x-as of de y-as een bepaalde integraal opstellen.",
              begrippen: ["omwentelingslichaam", "vlakdeel"],
            },
            {
              id: "wib-c3-6",
              omschrijving: "De kandidaat kan de uitkomst van een bepaalde integraal interpreteren.",
            },
            {
              id: "wib-c3-7",
              omschrijving:
                "De kandidaat kan F(x) = ∫ₐˣ f(t) dt interpreteren als functie van x.",
            },
          ],
        },
      ],
    },
    {
      id: "wib-dom-d",
      code: "D",
      titel: "Goniometrische functies",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wib-sub-d1",
          code: "D",
          titel: "Goniometrische functies",
          leerdoelen: [
            {
              id: "wib-d1-1",
              omschrijving: "De kandidaat kan graden omrekenen in radialen en omgekeerd.",
              begrippen: [
                "sinusmodel",
                "sinusoïde",
                "radiaal",
                "periode",
                "amplitude",
                "frequentie",
                "trillingstijd",
                "evenwichtsstand",
                "harmonische trilling",
              ],
              formules: [
                "f(x) = d + a·sin(b·(x - c))",
                "f(x) = d + a·cos(b·(x - c))",
              ],
            },
            {
              id: "wib-d1-2",
              omschrijving: "De kandidaat kan de grafiek tekenen van een sinusmodel.",
            },
            {
              id: "wib-d1-3",
              omschrijving: "De kandidaat kan van een sinusoïde het bijbehorende functievoorschrift opstellen.",
            },
            {
              id: "wib-d1-4",
              omschrijving:
                "De kandidaat kan formules herleiden met behulp van de symmetrie-eigenschappen van de sinus-, cosinus- en tangensgrafiek.",
            },
            {
              id: "wib-d1-5",
              omschrijving:
                "De kandidaat kan formules herleiden met behulp van translaties waarbij de sinus- en cosinusgrafiek uit elkaar ontstaan.",
            },
            {
              id: "wib-d1-6",
              omschrijving:
                "De kandidaat kan vergelijkingen oplossen van de vorm sin(x) = c, cos(x) = c, tan(x) = c en hierbij periodiciteit en symmetrie gebruiken.",
            },
            {
              id: "wib-d1-7",
              omschrijving:
                "De kandidaat kan vergelijkingen oplossen van de vorm f(x) = c met f(x) een sinusmodel en hierbij periodiciteit en symmetrie gebruiken.",
            },
            {
              id: "wib-d1-8",
              omschrijving:
                "De kandidaat kan vergelijkingen oplossen van het type sin(f(x)) = sin(g(x)), cos(f(x)) = cos(g(x)) en tan(f(x)) = tan(g(x)), waarbij f en g lineaire functies van x zijn en hierbij periodiciteit en symmetrie gebruiken.",
            },
            {
              id: "wib-d1-9",
              omschrijving:
                "De kandidaat kan ongelijkheden oplossen van het type sin(f(x)) ≤ c, cos(f(x)) ≤ c, tan(f(x)) ≤ c (en de varianten met <, ≥, >), waarbij f en g lineaire functies zijn.",
            },
            {
              id: "wib-d1-10",
              omschrijving:
                "De kandidaat kan in een gegeven probleemsituatie voor een periodiek verschijnsel een sinusmodel opstellen, de bijbehorende sinusoïde tekenen, berekeningen uitvoeren aan dit model en de resultaten terugvertalen naar de probleemsituatie.",
            },
            {
              id: "wib-d1-11",
              omschrijving:
                "De kandidaat kan een harmonische trilling opvatten als een sinusoïde, er een passend functievoorschrift voor opstellen en de begrippen frequentie en trillingstijd daarbij correct hanteren.",
            },
            {
              id: "wib-d1-12",
              omschrijving:
                "De kandidaat kan de som- en verschilformules en de verdubbelingsformules gebruiken bij het herleiden van formules en het oplossen van vergelijkingen.",
              formules: [
                "sin(α ± β) = sin(α)cos(β) ± cos(α)sin(β)",
                "cos(α ± β) = cos(α)cos(β) ∓ sin(α)sin(β)",
                "sin(2α) = 2sin(α)cos(α)",
                "cos(2α) = cos²(α) - sin²(α)",
              ],
            },
            {
              id: "wib-d1-13",
              omschrijving:
                "De kandidaat kan de formules sin²(x) + cos²(x) = 1 en sin(x)/cos(x) = tan(x) gebruiken bij het herleiden van formules en het oplossen van vergelijkingen.",
              formules: [
                "sin²(x) + cos²(x) = 1",
                "tan(x) = sin(x)/cos(x)",
              ],
            },
            {
              id: "wib-d1-14",
              omschrijving:
                "De kandidaat kan symmetrie-eigenschappen en translaties gebruiken bij het oplossen van vergelijkingen.",
            },
          ],
        },
      ],
    },
    {
      id: "wib-dom-e",
      code: "E",
      titel: "Meetkunde met coördinaten",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "wib-sub-e1",
          code: "E1",
          titel: "Meetkundige vaardigheden",
          leerdoelen: [
            {
              id: "wib-e1-1",
              omschrijving:
                "De kandidaat kan de stelling van Pythagoras gebruiken om de afstand tussen twee punten te berekenen.",
              begrippen: [
                "afstand",
                "middelloodlijn",
                "bissectrice",
                "omgeschreven cirkel",
                "raaklijn",
                "raakpunt",
                "gelijkvormigheid",
              ],
            },
            {
              id: "wib-e1-2",
              omschrijving:
                "De kandidaat kan met gelijkvormigheid de lengte van lijnstukken berekenen.",
            },
            {
              id: "wib-e1-3",
              omschrijving:
                "De kandidaat kan sinus, cosinus en tangens gebruiken voor het berekenen van de grootte van hoeken en de lengte van zijden in een rechthoekige driehoek.",
            },
            {
              id: "wib-e1-4",
              omschrijving:
                "De kandidaat kan de sinus- en cosinusregel gebruiken voor het berekenen van de lengte van lijnstukken en de grootte van hoeken in een driehoek.",
              formules: [
                "a/sin(A) = b/sin(B) = c/sin(C)",
                "a² = b² + c² - 2bc·cos(A)",
              ],
            },
            {
              id: "wib-e1-5",
              omschrijving:
                "De kandidaat kan (een gedeelte van) een meetkundige figuur algebraïsch beschrijven.",
            },
            {
              id: "wib-e1-6",
              omschrijving:
                "De kandidaat kan van een beschreven meetkundig probleem een tekening maken met daarin verwerkt de relevante gegevens.",
            },
            {
              id: "wib-e1-7",
              omschrijving:
                "De kandidaat kan meetkundige technieken gebruiken om eigenschappen van figuren te onderzoeken en te bewijzen.",
            },
            {
              id: "wib-e1-8",
              omschrijving:
                "De kandidaat kan algebraïsche technieken gebruiken om eigenschappen van figuren te onderzoeken en te bewijzen.",
            },
          ],
        },
        {
          id: "wib-sub-e2",
          code: "E2",
          titel: "Algebraïsche methoden in de vlakke meetkunde",
          leerdoelen: [
            {
              id: "wib-e2-1",
              omschrijving:
                "De kandidaat kan de afstand tussen punten, lijnen en cirkels berekenen.",
              begrippen: [
                "richtingscoëfficiënt",
                "loodlijn",
                "stelsel van twee vergelijkingen",
                "strijdig stelsel",
                "afhankelijk stelsel",
                "parametervoorstelling",
              ],
              formules: [
                "y = mx + n",
                "ax + by = c",
                "(x - a)² + (y - b)² = r²",
                "x² + y² + ax + by + c = 0",
                "x(t) = at + c, y(t) = bt + d",
                "x(t) = p + r·cos(t), y(t) = q + r·sin(t)",
              ],
            },
            {
              id: "wib-e2-2",
              omschrijving: "De kandidaat kan de hoek tussen twee lijnen berekenen.",
            },
            {
              id: "wib-e2-3",
              omschrijving:
                "De kandidaat kan de vergelijking of de parametervoorstelling van een lijn opstellen.",
            },
            {
              id: "wib-e2-4",
              omschrijving:
                "De kandidaat kan de vergelijking of de parametervoorstelling van een cirkel opstellen.",
            },
            {
              id: "wib-e2-5",
              omschrijving:
                "De kandidaat kan uit de vergelijking van een cirkel de straal van de cirkel en de coördinaten van het middelpunt afleiden.",
            },
            {
              id: "wib-e2-6",
              omschrijving:
                "De kandidaat kan vanuit een parametervoorstelling van een lijn of cirkel een vergelijking opstellen en vanuit een gegeven vergelijking van een lijn of cirkel een parametervoorstelling opstellen.",
            },
            {
              id: "wib-e2-7",
              omschrijving:
                "De kandidaat kan de coördinaten van de snijpunten van twee lijnen, van twee cirkels en van een lijn en een cirkel berekenen.",
            },
            {
              id: "wib-e2-8",
              omschrijving:
                "De kandidaat kan de oplosbaarheid van een stelsel van twee lineaire vergelijkingen in verband brengen met de onderlinge ligging van rechte lijnen in het platte vlak.",
            },
            {
              id: "wib-e2-9",
              omschrijving:
                "De kandidaat kan onderzoeken hoeveel gemeenschappelijke punten een lijn en een cirkel hebben.",
            },
            {
              id: "wib-e2-10",
              omschrijving:
                "De kandidaat kan de vergelijking van een raaklijn met gegeven richting aan een cirkel opstellen.",
            },
            {
              id: "wib-e2-11",
              omschrijving:
                "De kandidaat kan de vergelijking van een raaklijn door een gegeven punt (op of buiten de cirkel) aan een cirkel opstellen.",
            },
            {
              id: "wib-e2-12",
              omschrijving:
                "De kandidaat kan het verband gebruiken tussen een transformatie van een lijn of een cirkel en een substitutie in de bijhorende vergelijking of parametervoorstelling.",
            },
            {
              id: "wib-e2-13",
              omschrijving:
                "De kandidaat kan meetkundige problemen oplossen met gebruikmaking van bovengenoemde algebraïsche technieken.",
            },
          ],
        },
        {
          id: "wib-sub-e3",
          code: "E3",
          titel: "Vectoren en inproduct",
          leerdoelen: [
            {
              id: "wib-e3-1",
              omschrijving: "De kandidaat kan de vectorvoorstelling van een lijn opstellen.",
              begrippen: [
                "vector",
                "lengte van een vector",
                "richtingshoek",
                "kentallen",
                "componenten",
                "inproduct",
                "steunvector",
                "richtingsvector",
                "plaatsvector",
                "zwaartepunt",
              ],
              formules: [
                "a · b = aₓ·bₓ + aᵧ·bᵧ = |a|·|b|·cos(θ)",
              ],
            },
            {
              id: "wib-e3-2",
              omschrijving:
                "De kandidaat kan rekenen en redeneren met vectoren die beschreven zijn door grootte en richting of door middel van kentallen.",
            },
            {
              id: "wib-e3-3",
              omschrijving:
                "De kandidaat kan vectoren ontbinden in componenten, scalair vermenigvuldigen, bij elkaar optellen of van elkaar aftrekken, zowel meetkundig als met behulp van berekening.",
            },
            {
              id: "wib-e3-4",
              omschrijving:
                "De kandidaat kan het inproduct gebruiken voor de berekening van hoeken en afstanden.",
            },
            {
              id: "wib-e3-5",
              omschrijving:
                "De kandidaat kan de vergelijking, de parametervoorstelling en de vectorvoorstelling van een lijn in elkaar omrekenen.",
            },
            {
              id: "wib-e3-6",
              omschrijving:
                "De kandidaat kan berekeningen uitvoeren aan de baan van een bewegend punt die beschreven is door een tijdsafhankelijke vectorvoorstelling.",
              begrippen: ["baan", "vectoriële snelheid", "vectoriële versnelling", "baansnelheid", "baanversnelling"],
            },
            {
              id: "wib-e3-7",
              omschrijving:
                "De kandidaat kan de vectoriële snelheid en versnelling alsook de baansnelheid en baanversnelling van een bewegend punt berekenen.",
            },
            {
              id: "wib-e3-8",
              omschrijving:
                "De kandidaat kan een vergelijking van de raaklijn opstellen aan de baan van een bewegend punt.",
            },
            {
              id: "wib-e3-9",
              omschrijving: "De kandidaat kan met behulp van vectoren zwaartepunten bepalen.",
            },
          ],
        },
        {
          id: "wib-sub-e4",
          code: "E4",
          titel: "Toepassingen",
          leerdoelen: [
            {
              id: "wib-e4-1",
              omschrijving:
                "De kandidaat kan de aangegeven technieken toepassen in geschikte natuurwetenschappelijke en technische situaties.",
            },
          ],
        },
      ],
    },
  ],
};

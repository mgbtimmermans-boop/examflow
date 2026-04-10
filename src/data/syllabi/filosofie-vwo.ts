import { VakSyllabus } from "@/types/syllabus";

export const FILOSOFIE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "filosofie-vwo",
  niveau: "VWO",
  domeinen: [
    {
      id: "dom-a",
      naam: "Domein A: Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a1",
          naam: "A1 — Argumentatieve vaardigheden",
          leerdoelen: [
            {
              id: "a1-1",
              omschrijving:
                "Met betrekking tot een filosofisch vraagstuk informatie selecteren, structureren en interpreteren: een betoog analyseren; een betoog beoordelen; een logisch correct en overtuigend betoog opzetten en houden; de resultaten van een leeractiviteit overdragen aan anderen.",
              begrippen: ["betoog", "argumentatie", "analyse", "beoordeling"],
            },
          ],
        },
        {
          id: "sub-a2",
          naam: "A2 — Onderzoeksvaardigheden en benaderingswijzen",
          leerdoelen: [
            {
              id: "a2-1",
              omschrijving:
                "Vooronderstellingen onderzoeken waarop een vraagstuk berust; verschillende filosofische posities ten aanzien van een vraagstuk beargumenteerd innemen.",
              begrippen: ["vooronderstellingen", "filosofische posities", "beargumenteren"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-bcde",
      naam: "Domeinen B, C, D, E: Wijsgerige disciplines",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b1",
          naam: "B1 — Centrale begrippen en toonaangevende visies (Wijsgerige antropologie)",
          leerdoelen: [
            {
              id: "b1-1",
              omschrijving:
                "De kandidaat kan een aantal centrale begrippen en toonaangevende visies uit de wijsgerige antropologie herkennen, uitleggen en in een filosofische context toepassen en evalueren. Het gaat daarbij om de centrale begrippen: rede, subjectiviteit, intersubjectiviteit, zelfbewustzijn, identiteit, lichamelijkheid, excentriciteit, macht, disciplinering, arbeid, communicatie, seksualiteit; de begrippenparen: cultuur en natuur, emotie en verstand, geest (ziel) en lichaam, monisme en dualisme/pluralisme, mens en dier, bewust en onbewust, vrijheid en determinisme, doel- en waardegericht handelen; en toonaangevende visies.",
              begrippen: [
                "rede", "subjectiviteit", "intersubjectiviteit", "zelfbewustzijn", "identiteit",
                "lichamelijkheid", "excentriciteit", "macht", "disciplinering", "arbeid",
                "communicatie", "seksualiteit", "cultuur en natuur", "emotie en verstand",
                "geest (ziel) en lichaam", "monisme en dualisme/pluralisme", "mens en dier",
                "bewust en onbewust", "vrijheid en determinisme", "doel- en waardegericht handelen",
                "Aristoteles", "materialisme", "philosophy of mind", "structuralisme", "sociobiologie",
              ],
            },
          ],
        },
        {
          id: "sub-c1",
          naam: "C1 — Centrale begrippen en toonaangevende visies (Ethiek)",
          leerdoelen: [
            {
              id: "c1-1",
              omschrijving:
                "De kandidaat kan een aantal centrale begrippen en toonaangevende visies uit de ethiek herkennen, uitleggen en in een filosofische context toepassen en evalueren. Het gaat daarbij om de centrale begrippen: goed, waarde, norm, geluk, deugd, moraal, rechtvaardigheid, verantwoordelijkheid; de begrippenparen: wil en verstand, waarden en normen, 'is' en 'ought', intrinsiek en instrumenteel handelen, macht en belangen, ethiek en moraal, rechten en plichten; en toonaangevende visies.",
              begrippen: [
                "goed", "waarde", "norm", "geluk", "deugd", "moraal", "rechtvaardigheid",
                "verantwoordelijkheid", "wil en verstand", "waarden en normen", "'is' en 'ought'",
                "intrinsiek en instrumenteel handelen", "macht en belangen", "ethiek en moraal",
                "rechten en plichten", "Plato", "Aristoteles", "Thomas", "MacIntyre", "Nussbaum",
                "Kant", "Mill", "Nietzsche", "Habermas",
              ],
            },
          ],
        },
        {
          id: "sub-d1",
          naam: "D1 — Centrale begrippen en toonaangevende visies (Kennisleer)",
          leerdoelen: [
            {
              id: "d1-1",
              omschrijving:
                "De kandidaat kan een aantal centrale begrippen en toonaangevende visies uit de kennisleer herkennen, uitleggen en in een filosofische context toepassen en evalueren. Het gaat daarbij om de centrale begrippen: a priori, a posteriori, universeel, particulier, idealisme, objectief, subjectief, intersubjectief; de begrippenparen: zelfbewustzijn en hersenen, schijn en werkelijkheid, begrip en waarneming, waar en vals, feit en fictie, kennis en geloof, kennis en kunde; en toonaangevende visies.",
              begrippen: [
                "a priori", "a posteriori", "universeel", "particulier", "idealisme",
                "objectief", "subjectief", "intersubjectief", "schijn en werkelijkheid",
                "begrip en waarneming", "waar en vals", "feit en fictie", "kennis en geloof",
                "kennis en kunde", "Plato", "Descartes", "Locke", "Hume", "Nagel", "Kant",
                "neokantianisme", "constructivisme", "narrativisme",
              ],
            },
          ],
        },
        {
          id: "sub-e1",
          naam: "E1 — Centrale begrippen en toonaangevende visies (Wetenschapsfilosofie)",
          leerdoelen: [
            {
              id: "e1-1",
              omschrijving:
                "De kandidaat kan een aantal centrale begrippen en toonaangevende visies uit de wetenschapsfilosofie herkennen, uitleggen en in een filosofische context toepassen en evalueren. Het gaat daarbij om de centrale begrippen: theorie, grondslagen, axioma, hypothese, empirische basis, demarcatie, empirische cyclus, paradigma, positivisme; de begrippenparen: wetenschappelijke en common-sense kennis, formele en empirische wetenschappen, feit en theorie, wetmatigheid en toeval, verklaren en verstaan, inductie en deductie, waardevrijheid en waardegebondenheid, techniek en technologie; en toonaangevende visies.",
              begrippen: [
                "theorie", "grondslagen", "axioma", "hypothese", "empirische basis", "demarcatie",
                "empirische cyclus", "paradigma", "positivisme", "common-sense kennis",
                "formele en empirische wetenschappen", "feit en theorie", "wetmatigheid en toeval",
                "verklaren en verstaan", "inductie en deductie", "waardevrijheid en waardegebondenheid",
                "techniek en technologie", "Comte", "Wiener Kreis", "Hempel", "Popper", "Kuhn",
                "Feyerabend", "hermeneutiek", "Latour",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dom-onderwerp",
      naam: "Onderwerp: De vraag naar de mens in relatie tot techniek en wetenschap",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-algemeen",
          naam: "Algemene eindtermen",
          leerdoelen: [
            {
              id: "alg-1",
              omschrijving:
                "De kandidaten kunnen de filosofische vraag naar de mens benaderen vanuit de rol die wetenschap en techniek daarbij spelen. Daarbij kunnen zij betrekken: een uitleg van wat de filosofische vraag naar de mens inhoudt (inleiding); een uitleg, vergelijking en evaluatie van verschillende filosofische antwoorden op de vraag naar de mens (kwestie 1); een uitleg dat en op welke manieren techniek en wetenschap mensbeelden veranderen (kwestie 2); een uitleg dat en op welke manieren het wezen van de mens verandert door de omgang met techniek (kwestie 3); een uitleg en evaluatie van verschillende grensvervagingen omtrent de mens en filosofische implicaties daarvan (kwestie 4); een uitleg en evaluatie van het blijvende belang van de filosofische vraag naar de mens (afsluiting).",
              begrippen: [
                "wezen van de mens", "mensbeeld", "bestaanservaring",
                "eerstepersoonsperspectief", "derdepersoonsperspectief",
                "fenomenologie", "existentialisme", "empirische wetenschappen",
              ],
            },
            {
              id: "alg-2",
              omschrijving:
                "De kandidaten kunnen een begripsanalyse maken van de begrippen 'het wezen van de mens', 'lichaam' en 'techniek'. Daartoe kunnen zij: verschillende definities opstellen; vooronderstellingen bij deze definities aangeven; implicaties van deze definities weergeven.",
              begrippen: ["wezen van de mens", "lichaam", "techniek", "begripsanalyse", "definitie", "vooronderstellingen"],
            },
            {
              id: "alg-3",
              omschrijving:
                "De kandidaten kunnen verschillende manieren waarop wetenschap en techniek de filosofische vraag naar de mens beïnvloeden herkennen, uitleggen, vergelijken, toepassen en evalueren aan de hand van voorbeelden en casussen.",
              begrippen: ["wetenschap", "techniek", "mensbeeld", "historische contingentie"],
            },
            {
              id: "alg-4",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat de vraag naar het wezen van de mens op twee manieren (mensbeeld of bestaanservaring) kan worden opgevat. Daarbij kunnen zij betrekken: de begrippen 'wezen', 'essentie', 'mensbeeld', 'bestaan', 'bestaanservaring'; een uitleg en vergelijking van het eerstepersoonsperspectief en het derdepersoonsperspectief op de vraag naar de mens; een uitleg en vergelijking van de empirisch wetenschappelijke benadering en de fenomenologische en existentialistische benadering van de vraag naar de mens; een uitleg van de ethische dimensie van mensbeelden en bestaanservaringen.",
              begrippen: [
                "wezen", "essentie", "mensbeeld", "bestaan", "bestaanservaring",
                "eerstepersoonsperspectief", "derdepersoonsperspectief",
                "fenomenologie", "existentialisme", "empirisch wetenschappelijke benadering",
                "ethische dimensie",
              ],
            },
          ],
        },
        {
          id: "sub-kwestie1",
          naam: "Kwestie 1 — Filosofische antwoorden op de vraag: wat is de mens?",
          leerdoelen: [
            {
              id: "k1-5",
              omschrijving:
                "De kandidaten kunnen de opvattingen van Descartes, Sheets-Johnstone, Plessner, De Beauvoir en Fanon over de vraag naar de mens, en de verschillende manieren waarop het lichaam daarbij een rol speelt uitleggen, vergelijken, toepassen en evalueren. Daarbij kunnen zij de volgende standpunten betrekken: mensen zijn een denkend bewustzijn met een mechanisch lichaam (Descartes); mensen zijn een reflecterend, bewegend lichaam (Sheets-Johnstone); mensen staan lichamelijk in verhouding tot zichzelf (Plessner); mensen staan lichamelijk in verhouding tot anderen (De Beauvoir, Fanon).",
              begrippen: [
                "Descartes", "Sheets-Johnstone", "Plessner", "De Beauvoir", "Fanon",
                "denkend bewustzijn", "mechanisch lichaam", "reflecterend bewegend lichaam",
                "excentrische positionaliteit", "medewereld", "lichaamsschema",
              ],
            },
            {
              id: "k1-6",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat mensen volgens Sheets-Johnstone een reflecterend, bewegend lichaam zijn. Daarbij kunnen zij betrekken: een uitleg van Sheets-Johnstones fenomenologische benadering van dans en de pre-reflectieve gewaarwording van de ruimtelijkheid en bewegingen van het lichaam; de begrippen 'pre-reflectief' en 'lichaamsschema'; een uitleg met tekstfragment 1 van Sheets-Johnstones argument dat de gewaarwording van het bewegende lichaam in de ruimte voorafgaat aan bewuste reflectie op onszelf; een uitleg met tekstfragment 1 van Sheets-Johnstones argument dat fenomenologie een perspectief biedt op de bestaanservaring.",
              begrippen: [
                "Sheets-Johnstone", "fenomenologie", "pre-reflectief", "lichaamsschema",
                "ruimtelijkheid", "bewegend lichaam", "dans", "gewaarwording", "bestaanservaring",
              ],
            },
            {
              id: "k1-7",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Plessner mensen in een verhouding tot zichzelf staan. Daarbij kunnen zij betrekken: een uitleg van Plessners poging om de biologische benadering van de mens te verenigen met de fenomenologische bestaanservaring en van zijn opvatting dat mensen onbepaalde wezens zijn; het begrip 'excentrische positionaliteit' en de drie antropologische wetten; een uitleg van Plessners eerste antropologische wet (natuurlijke kunstmatigheid) dat mensen van nature kunstmatig zijn; een uitleg van Plessners tweede antropologische wet (bemiddelde onmiddellijkheid) dat mensen hun bestaanservaring willen uitdrukken; een uitleg van Plessners derde antropologische wet (utopische standplaats) dat mensen verlangen boven zichzelf uit te stijgen én vaste grond onder de voeten te hebben; een uitleg met tekstfragment 2 van Plessners opvattingen dat de problematiek van lachen en wenen de dubbelzinnige verhouding van de mens tot het eigen lichaam verduidelijkt en de oorsprong van lachen en wenen de bestaanservaring typeert.",
              begrippen: [
                "Plessner", "excentrische positionaliteit", "onbepaalde wezens",
                "wet van natuurlijke kunstmatigheid", "wet van bemiddelde onmiddellijkheid",
                "wet van de utopische standplaats", "binnenwereld", "buitenwereld", "medewereld",
                "expressiviteit", "lachen en wenen", "dubbelzinnigheid",
              ],
            },
            {
              id: "k1-8",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens De Beauvoir en Fanon mensen lichamelijk in verhouding tot anderen staan. Daarbij kunnen zij betrekken: een uitleg met Plessners begrip 'medewereld' dat mensen expressie geven aan de ervaring van hun verhouding tot andere mensen, en dat die expressie volgens de existentialisten De Beauvoir en Fanon de ervaring mede vormgeeft; de begrippen 'medewereld' en 'lichaamsschema'; een uitleg van De Beauvoirs argument dat de bestaanservaring van vrouwen is gevormd door culturele opvattingen over hoe een vrouw zou moeten zijn; een uitleg met tekstfragment 3 van Fanons argument dat de bestaanservaring van mensen van kleur is gevormd door de blik van anderen.",
              begrippen: [
                "De Beauvoir", "Fanon", "medewereld", "lichaamsschema", "existentialisme",
                "bestaanservaring", "culturele opvattingen", "blik van anderen",
                "object-zijn", "tweede sekse",
              ],
            },
          ],
        },
        {
          id: "sub-kwestie2",
          naam: "Kwestie 2 — Hoe veranderen techniek en wetenschap ons mensbeeld?",
          leerdoelen: [
            {
              id: "k2-9",
              omschrijving:
                "De kandidaten kunnen de opvattingen van Lakoff & Johnson, Vroon & Draaisma, Swaab, Dreyfus, Clark & Chalmers en O'Regan, Myin & Noë (hierna: Noë) over de vraag hoe wetenschap en techniek het mensbeeld veranderen uitleggen, vergelijken, toepassen en evalueren. Daarbij kunnen zij de volgende standpunten betrekken: dat taal uitdrukt hoe we met ons lichaam in de wereld staan (Lakoff & Johnson); dat mensbeelden historisch contingent zijn (Vroon & Draaisma); dat mensen hun brein zijn en het brein als een computer is (functionalistisch cognitivisme, Swaab) en de evaluatie hiervan (Dreyfus, connectionisme); dat mensen niet alleen met hun brein denken, maar ook met hun lichaam in een omgeving (4E-cognitivisme, Clark & Chalmers en Noë).",
              begrippen: [
                "Lakoff", "Johnson", "Vroon", "Draaisma", "Swaab", "Dreyfus",
                "Clark", "Chalmers", "Noë", "O'Regan", "Myin",
                "metafoor", "historische contingentie", "computermetafoor",
                "cognitivisme", "connectionisme", "4E-cognitie",
              ],
            },
            {
              id: "k2-10",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Lakoff & Johnson en Vroon & Draaisma metaforen en ervaringen elkaar wederzijds beïnvloeden. Daarbij kunnen zij betrekken: de begrippen 'oriënterende metaforen', 'ontologische metaforen' en 'historische contingentie'; een uitleg met tekstfragment 4 van Lakoff & Johnsons argument dat taal uitdrukt hoe we met ons lichaam in de wereld staan; een uitleg van het argument dat metaforen uit wetenschap en technologie beïnvloeden hoe we onszelf als mens ervaren.",
              begrippen: [
                "oriënterende metaforen", "ontologische metaforen", "historische contingentie",
                "Lakoff", "Johnson", "Vroon", "Draaisma", "taal en ervaring", "lichamelijke basis van metaforen",
              ],
            },
            {
              id: "k2-11",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens functionalistische cognitivisten (en met name Swaab) mensen hun brein zijn en dat dat brein als een computer is. Daarbij kunnen zij betrekken: dat de computermetafoor het functionalistische mensbeeld versterkt; de begrippen 'cognitivisme', 'connectionisme', 'symboolmanipulatie', 'input en output', 'mentale representatie', 'kunstmatige intelligentie', 'productsimulatie', 'processimulatie' en 'neuraal netwerk'; een uitleg van het argument van Swaab dat mensen hun brein zijn; een uitleg van het functionalistische argument dat mensen net als computers informatie verwerken; een uitleg van het functionalistische argument dat computers het menselijk denkvermogen kunnen simuleren; een evaluatie van dit functionalistische argument met Dreyfus' opvatting dat de functies van ons belichaamde denken niet kunnen worden uitgevoerd op de hardware van een computer en de connectionistische opvatting dat een neuraal netwerk het denkvermogen wel kan simuleren.",
              begrippen: [
                "cognitivisme", "connectionisme", "symboolmanipulatie", "input en output",
                "mentale representatie", "kunstmatige intelligentie", "productsimulatie",
                "processimulatie", "neuraal netwerk", "functionalisme", "Swaab", "Dreyfus",
                "algoritme", "AI", "AGI",
              ],
            },
            {
              id: "k2-12",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens 4E-vertegenwoordigers, Clark & Chalmers en Noë mensen niet alleen denken met hun brein, maar ook met hun lichaam in een omgeving. Daarbij kunnen zij betrekken: de begrippen 'embodied', 'extended', 'embedded', 'enactive', 'cognitieve extensies' en 'sensomotorisch lichaam'; een uitleg van de kritiek van 4E-vertegenwoordigers op de functionalistische cognitivisten; een uitleg van het argument van 4E-vertegenwoordigers dat denken belichaamd is (embodied); een uitleg van het argument van 4E-vertegenwoordigers dat denken is ingebed in de omgeving (embedded); een uitleg met tekstfragment 5 van Clark & Chalmers' argument dat ons denken uitgebreid is buiten ons lichaam (extended); een uitleg met tekstfragment 6 van Noë's argument dat denken een handeling van het bewegende, voelende lichaam in interactie met de omgeving is (enactive).",
              begrippen: [
                "embodied cognition", "embedded cognition", "extended cognition", "enactive cognition",
                "cognitieve extensies", "sensomotorisch lichaam", "4E-cognitie",
                "Clark", "Chalmers", "Noë", "extended mind", "Inga en Otto",
              ],
            },
          ],
        },
        {
          id: "sub-kwestie3",
          naam: "Kwestie 3 — Verandert het wezen van de mens door de omgang met techniek?",
          leerdoelen: [
            {
              id: "k3-13",
              omschrijving:
                "De kandidaten kunnen de opvattingen van Clark, Kockelkoren, Verbeek en De Mul over de vraag of het wezen van de mens verandert door de omgang met techniek en wetenschap uitleggen, vergelijken, toepassen en evalueren. Daarbij kunnen zij de volgende standpunten betrekken: dat mensen van nature al technologische wezens zijn (Clark); dat omgang met techniek de zintuiglijke ervaring verandert (Kockelkoren); dat omgang met techniek het moreel oordeelsvermogen verandert (Verbeek); dat hedendaagse techniek de menselijke identiteit verandert (De Mul).",
              begrippen: [
                "Clark", "Kockelkoren", "Verbeek", "De Mul",
                "cyborg", "natural-born cyborg", "zintuiglijke ervaring",
                "moreel oordeelsvermogen", "identiteit", "humanisme",
              ],
            },
            {
              id: "k3-14",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Clark mensen van nature technologische wezens zijn. Daarbij kunnen zij betrekken: een uitleg van Clarks ontkenning van een wezenlijke verandering van de mens door wetenschap en techniek met zijn opvatting dat mensen natural born cyborgs zijn; de begrippen 'interface', 'cyborg' en 'dynamische apparaten'; een uitleg van Clarks argument dat het brein van nature goed is in het gebruiken van de omgeving; een uitleg met tekstfragmenten 7 en 8 van Clarks argument dat nieuwe technieken makkelijk zijn te incorporeren.",
              begrippen: [
                "Clark", "natural-born cyborg", "cyborg", "interface", "dynamische apparaten",
                "Haraway", "hybride wezen", "transparante technologie", "incorporatie",
                "Ramachandran", "lichaamsschema",
              ],
            },
            {
              id: "k3-15",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Kockelkoren de omgang met techniek de zintuiglijke ervaring verandert. Daarbij kunnen zij betrekken: Kockelkorens historische benadering van de technische bemiddeling van de ervaring; de begrippen 'decentreren' en 'recentreren'; een uitleg met tekstfragment 9 van Kockelkorens argument dat techniek mensen een nieuwe blik geeft en de zintuigen de techniek inlijven.",
              begrippen: [
                "Kockelkoren", "decentreren", "recentreren", "technische bemiddeling",
                "inlijving van techniek", "synesthesie", "zintuiglijke ervaring", "treinziekte",
              ],
            },
            {
              id: "k3-16",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Verbeek techniek het moreel oordeelsvermogen verandert. Daarbij kunnen zij betrekken: een uitleg met tekstfragment 10 van Verbeeks argument dat techniek het moreel handelingsvermogen van de mens transformeert.",
              begrippen: [
                "Verbeek", "moreel handelingsvermogen", "technische bemiddeling",
                "echoscopie", "handelingsvermogen van techniek", "morele verantwoordelijkheid",
                "fetal personhood",
              ],
            },
            {
              id: "k3-17",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens De Mul hedendaagse techniek de menselijke identiteit verandert. Daarbij kunnen zij betrekken: het begrip 'humanisme'; een uitleg van De Muls argument dat de omgang met techniek de menselijke identiteit transformeert; een uitleg met tekstfragment 11 van De Muls argument dat de verandering van de mens zich via verschillende scenario's kan voltrekken.",
              begrippen: [
                "De Mul", "humanisme", "speculatieve antropologie", "identiteit",
                "extrahumanisme", "transhumanisme", "posthumanisme",
                "zwermgeest-scenario", "alien-scenario", "zombie-scenario",
                "neurotechnologie", "biotechnologie", "robotica",
              ],
            },
          ],
        },
        {
          id: "sub-kwestie4",
          naam: "Kwestie 4 — Grensvervagingen",
          leerdoelen: [
            {
              id: "k4-18",
              omschrijving:
                "De kandidaten kunnen de opvattingen van Haraway, Morton, Despret, Latour, Hayles, Barad, Harari en Rasch over de grensvervagingen omtrent de mens uitleggen, vergelijken, toepassen en evalueren. Daarbij kunnen zij de volgende standpunten betrekken: dat door de grensvervagingen de vraag naar het wezen van de mens opnieuw en anders benaderd moet worden (Haraway); dat er bij de grensvervagingen kanttekeningen kunnen worden geplaatst vanuit ethisch, kentheoretisch en wetenschapsfilosofisch perspectief; dat de grens tussen mens en dier is vervaagd (Morton, Despret); dat de grens tussen levend en niet-levend is vervaagd (Latour, Hayles); dat de grens tussen fysiek en niet-fysiek is vervaagd (Barad, Harari, Rasch).",
              begrippen: [
                "Haraway", "Morton", "Despret", "Latour", "Hayles", "Barad", "Harari", "Rasch",
                "grensvervaging", "cyborg", "dualisme", "mens en dier",
                "levend en niet-levend", "fysiek en niet-fysiek",
              ],
            },
            {
              id: "k4-19",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Morton de grens tussen mens en dier is vervaagd. Daarbij kunnen zij betrekken: een uitleg van Haraways opvatting over de grensvervaging tussen mens en dier; de begrippen 'ecologisch denken', 'mesh', 'plantenneurobiologie'; een uitleg met tekstfragment 12 van Mortons argument dat mensen bestaan uit allerlei niet-menselijke wezens; een uitleg van Mortons argument dat ook dieren en planten denk- en handelingsvermogen hebben; een uitleg met tekstfragment 13 van Desprets argument dat de grensvervaging tussen mens en dier impliceert dat er in wetenschappelijk onderzoek anders met dieren moet worden omgegaan.",
              begrippen: [
                "Morton", "ecologisch denken", "mesh", "plantenneurobiologie",
                "Haraway", "Despret", "handelingsvermogen", "mens-dier grens",
                "Darwin", "evolutietheorie", "spiegeltest", "antropocentrisme",
              ],
            },
            {
              id: "k4-20",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Latour en Hayles de grens tussen levend en niet-levend is vervaagd. Daarbij kunnen zij betrekken: de begrippen 'actor', 'actor-netwerktheorie (ANT)', 'handeling (action)', 'niet-bewuste cognitie', 'distributie', 'cognitieve assemblage'; een uitleg met tekstfragment 14 van Latours argument dat ook niet-levende wezens vitaliteit en handelingsvermogen hebben; een uitleg met tekstfragment 15 van Hayles' argument dat de mens, ondanks het handelingsvermogen van niet-levende entiteiten, de verantwoordelijkheid behoudt voor het niet-menselijke; een uitleg met van Latours argument dat de mens verantwoordelijkheid behoudt voor het niet-menselijke.",
              begrippen: [
                "Latour", "Hayles", "actor", "actor-netwerktheorie (ANT)", "handeling (action)",
                "niet-bewuste cognitie", "distributie", "cognitieve assemblage",
                "vitaliteit", "handelingsvermogen", "Berlijnse sleutel",
                "Parlement der Dingen", "autonome drones", "verantwoordelijkheid",
              ],
            },
            {
              id: "k4-21",
              omschrijving:
                "De kandidaten kunnen uitleggen en evalueren dat volgens Barad, Harari en Rasch de grens tussen fysiek en niet-fysiek is vervaagd. Daarbij kunnen zij betrekken: de begrippen 'intra-actie', 'algoritme', 'techno-humanisme', 'dataïsme' en 'het else'; een uitleg van Haraways opvatting over de grensvervaging tussen fysiek en niet-fysiek; een uitleg van Barads argument dat de mens een verstrengeling van materiaal en betekenis is/wordt; een uitleg van Harari's argument dat de mens data wordt; een uitleg met tekstfragment 16 van Rasch' kanttekening dat het dataïsme mensen reduceert tot karikaturale profielen.",
              begrippen: [
                "Barad", "Harari", "Rasch", "intra-actie", "algoritme",
                "techno-humanisme", "dataïsme", "het else", "Haraway",
                "liberaal humanisme", "dataficatie", "kwantumtheorie",
                "cognitieve assemblages", "data", "profiel",
              ],
            },
          ],
        },
        {
          id: "sub-afsluiting",
          naam: "Afsluiting — Het blijvende belang van de filosofische vraag naar de mens",
          leerdoelen: [
            {
              id: "k-22",
              omschrijving:
                "De kandidaten kunnen het blijvende belang van de filosofische vraag naar de mens uitleggen en evalueren. Daarbij kunnen zij betrekken: Plessners wet van de utopische standplaats; hedendaagse grensvervagingen; technologie en wetenschap; het verschil tussen mensbeeld (derdepersoonsperspectief) en bestaanservaring (eerstepersoonsperspectief); de verantwoordelijkheid van mensen om zichzelf vorm te geven en verantwoording af te leggen over hun handelen.",
              begrippen: [
                "Plessner", "wet van de utopische standplaats", "grensvervagingen",
                "mensbeeld", "bestaanservaring", "eerstepersoonsperspectief",
                "derdepersoonsperspectief", "verantwoordelijkheid", "response-ability",
                "Haraway", "staying with the trouble",
              ],
            },
          ],
        },
      ],
    },
  ],
};

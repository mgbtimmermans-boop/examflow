import { VakSyllabus } from "@/types/syllabus";

export const SCHEIKUNDE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "scheikunde-vwo",
  niveau: "VWO",
  domeinen: [
    // ─── DOMEIN A: VAARDIGHEDEN ────────────────────────────────────────────────
    {
      id: "sk-dom-a",
      code: "A",
      titel: "Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        // A1–A4: Algemene vaardigheden — eindterm, niet verder gespecificeerd voor CE
        {
          id: "sk-sub-a1",
          code: "A1",
          titel: "Informatievaardigheden gebruiken",
          leerdoelen: [
            {
              id: "sk-a1-1",
              omschrijving: "De kandidaat kan doelgericht informatie zoeken, beoordelen, selecteren en verwerken.",
            },
          ],
        },
        {
          id: "sk-sub-a2",
          code: "A2",
          titel: "Communiceren",
          leerdoelen: [
            {
              id: "sk-a2-1",
              omschrijving: "De kandidaat kan adequaat schriftelijk, mondeling en digitaal in het publieke domein communiceren over onderwerpen uit het desbetreffende vakgebied.",
            },
          ],
        },
        {
          id: "sk-sub-a3",
          code: "A3",
          titel: "Reflecteren op leren",
          leerdoelen: [
            {
              id: "sk-a3-1",
              omschrijving: "De kandidaat kan bij het verwerven van vakkennis en vakvaardigheden reflecteren op eigen belangstelling, motivatie en leerproces.",
            },
          ],
        },
        {
          id: "sk-sub-a4",
          code: "A4",
          titel: "Studie en beroep",
          leerdoelen: [
            {
              id: "sk-a4-1",
              omschrijving: "De kandidaat kan aangeven op welke wijze natuurwetenschappelijke kennis in studie en beroep wordt gebruikt en kan mede op basis daarvan zijn belangstelling voor studies en beroepen onder woorden brengen.",
            },
          ],
        },
        // A5–A9: Natuurwetenschappelijke, wiskundige en technische vaardigheden
        {
          id: "sk-sub-a5",
          code: "A5",
          titel: "Onderzoeken",
          leerdoelen: [
            {
              id: "sk-a5-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem specificeren.",
            },
            {
              id: "sk-a5-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem herleiden tot een (of meerdere) onderzoeksvra(a)g(en).",
            },
            {
              id: "sk-a5-3",
              omschrijving: "De kandidaat kan verbanden leggen tussen een onderzoeksvraag en natuurwetenschappelijke kennis.",
            },
            {
              id: "sk-a5-4",
              omschrijving: "De kandidaat kan een hypothese opstellen bij een onderzoeksvraag en verwachtingen formuleren.",
            },
            {
              id: "sk-a5-5",
              omschrijving: "De kandidaat kan een werkplan maken voor het uitvoeren van een natuurwetenschappelijk onderzoek ter beantwoording van een (of meerdere) onderzoeksvra(a)g(en).",
            },
            {
              id: "sk-a5-6",
              omschrijving: "De kandidaat kan voor de beantwoording van een onderzoeksvraag relevante waarnemingen verrichten en (meet)gegevens verzamelen.",
            },
            {
              id: "sk-a5-7",
              omschrijving: "De kandidaat kan meetgegevens verwerken en presenteren op een wijze die helpt bij de beantwoording van een onderzoeksvraag.",
            },
            {
              id: "sk-a5-8",
              omschrijving: "De kandidaat kan op grond van verzamelde gegevens van een uitgevoerd onderzoek conclusies trekken die aansluiten bij de onderzoeksvra(a)g(en) van het onderzoek.",
            },
            {
              id: "sk-a5-9",
              omschrijving: "De kandidaat kan de uitvoering en de resultaten van een onderzoek evalueren, gebruik makend van de begrippen nauwkeurigheid, validiteit en betrouwbaarheid.",
              begrippen: ["nauwkeurigheid", "validiteit", "betrouwbaarheid"],
            },
            {
              id: "sk-a5-10",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk onderzoek op geschikte manieren presenteren.",
            },
            {
              id: "sk-a5-11",
              omschrijving: "De kandidaat kan toelichten dat er naast een experimentele onderzoeksaanpak ook andere onderzoeksaanpakken mogelijk zijn.",
            },
            {
              id: "sk-a5-12",
              omschrijving: "De kandidaat kan de aard van de opbrengsten van onderzoek duiden en daarbij de begrippen onzekerheid en waarschijnlijkheid hanteren.",
              begrippen: ["onzekerheid", "waarschijnlijkheid"],
            },
          ],
        },
        {
          id: "sk-sub-a6",
          code: "A6",
          titel: "Ontwerpen",
          leerdoelen: [
            {
              id: "sk-a6-1",
              omschrijving: "De kandidaat kan een ontwerpprobleem specificeren.",
            },
            {
              id: "sk-a6-2",
              omschrijving: "De kandidaat kan een ontwerpprobleem herleiden tot een aantal afzonderlijk uitwerkbare deelproblemen (taken, eigenschappen).",
            },
            {
              id: "sk-a6-3",
              omschrijving: "De kandidaat kan voor een ontwerp een programma van eisen en wensen opstellen: randvoorwaarden, eisen, prioriteiten en wensen.",
            },
            {
              id: "sk-a6-4",
              omschrijving: "De kandidaat kan verbanden leggen tussen natuurwetenschappelijke kennis en taken en eigenschappen van een ontwerp.",
            },
            {
              id: "sk-a6-5",
              omschrijving: "De kandidaat kan meerdere uitwerkingen of oplossingen per deelprobleem geven.",
            },
            {
              id: "sk-a6-6",
              omschrijving: "De kandidaat kan een beargumenteerd ontwerpvoorstel doen voor een ontwerp, rekening houdend met het programma van eisen.",
            },
            {
              id: "sk-a6-7",
              omschrijving: "De kandidaat kan een prototype van een ontwerp realiseren.",
            },
            {
              id: "sk-a6-8",
              omschrijving: "De kandidaat kan een ontwerpproces en -product testen en evalueren, rekening houdend met het programma van eisen.",
            },
            {
              id: "sk-a6-9",
              omschrijving: "De kandidaat kan voorstellen doen voor verbetering van een ontwerp.",
            },
            {
              id: "sk-a6-10",
              omschrijving: "De kandidaat kan een ontwerpproces en -product op geschikte manieren presenteren.",
            },
          ],
        },
        {
          id: "sk-sub-a7",
          code: "A7",
          titel: "Modelvorming",
          leerdoelen: [
            {
              id: "sk-a7-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel specificeren met als doel het te beschrijven, te verklaren of te voorspellen.",
            },
            {
              id: "sk-a7-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel vereenvoudigen en de essentiële kenmerken ervan identificeren.",
            },
            {
              id: "sk-a7-3",
              omschrijving: "De kandidaat kan van een model de overeenkomsten en verschillen met de werkelijkheid benoemen met als doel de geschiktheid en het geldigheidsgebied van het model te bepalen.",
            },
            {
              id: "sk-a7-4",
              omschrijving: "De kandidaat kan van een model beoordelen in hoeverre het aansluit bij het doel waarvoor het ingezet wordt.",
            },
            {
              id: "sk-a7-5",
              omschrijving: "De kandidaat kan voor een model een geschikte fysieke, schematische of wiskundige weergave selecteren en waar nodig kwantificeren.",
            },
            {
              id: "sk-a7-6",
              omschrijving: "De kandidaat kan een adequaat model opstellen of bijstellen.",
            },
            {
              id: "sk-a7-7",
              omschrijving: "De kandidaat kan met een model eigenschappen van een natuurwetenschappelijk verschijnsel beschrijven, verklaren en/of voorspellen.",
            },
            {
              id: "sk-a7-8",
              omschrijving: "De kandidaat kan voorstellen doen voor verbetering en/of uitbreiding van een model.",
            },
            {
              id: "sk-a7-9",
              omschrijving: "De kandidaat kan het tot stand komen, de opbouw of het gebruik van een model presenteren.",
            },
          ],
        },
        {
          id: "sk-sub-a8",
          code: "A8",
          titel: "Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            {
              id: "sk-a8-1",
              omschrijving: "De kandidaat kan informatie verwerven en selecteren uit schriftelijke, mondelinge en audiovisuele bronnen mede met behulp van ICT: gegevens halen uit grafieken, tabellen, tekeningen, simulaties, schema's en diagrammen; grootheden, eenheden, symbolen, formules en gegevens opzoeken in geschikte tabellen.",
            },
            {
              id: "sk-a8-2",
              omschrijving: "De kandidaat kan informatie, gegevens en meetresultaten analyseren, weergeven en structureren in grafieken, tekeningen, schema's, diagrammen en tabellen mede met behulp van ICT.",
            },
            {
              id: "sk-a8-3",
              omschrijving: "De kandidaat kan uitleggen wat bedoeld wordt met de significantie van meetwaardes en uitkomsten van berekeningen weergeven in het juiste aantal significante cijfers.",
              begrippen: ["significante cijfers", "decimalen"],
            },
            {
              id: "sk-a8-4",
              omschrijving: "De kandidaat kan aangeven met welke technieken en apparaten de belangrijkste grootheden uit de natuurwetenschappen worden gemeten.",
            },
            {
              id: "sk-a8-5",
              omschrijving: "De kandidaat kan verantwoord omgaan met materialen, instrumenten, organismen en milieu.",
            },
            {
              id: "sk-a8-6",
              omschrijving: "De kandidaat kan een aantal voor het vak relevante reken-/wiskundige vaardigheden toepassen om natuurwetenschappelijke problemen op te lossen: basisrekenvaardigheden uitvoeren (rekenmachine, verhoudingen, procenten, machten, wortels, gewogen gemiddelde); berekeningen uitvoeren met bekende grootheden en relaties; wiskundige technieken toepassen (omwerken van betrekkingen, lineaire en tweedegraadsvergelijkingen, evenredigheden, logaritmen, twee vergelijkingen met twee onbekenden); afgeleide eenheden herleiden tot SI-eenheden; uitkomsten schatten en beoordelen.",
            },
          ],
        },
        {
          id: "sk-sub-a9",
          code: "A9",
          titel: "Waarderen en oordelen",
          leerdoelen: [
            {
              id: "sk-a9-1",
              omschrijving: "De kandidaat kan een beargumenteerd oordeel geven over een situatie waarin natuurwetenschappelijke kennis een belangrijke rol speelt, dan wel een beargumenteerde keuze maken tussen alternatieven bij vraagstukken van natuurwetenschappelijke aard.",
            },
            {
              id: "sk-a9-2",
              omschrijving: "De kandidaat kan een onderscheid maken tussen wetenschappelijke argumenten, normatieve maatschappelijke overwegingen en persoonlijke opvattingen.",
            },
            {
              id: "sk-a9-3",
              omschrijving: "De kandidaat kan feiten met bronnen verantwoorden.",
            },
            {
              id: "sk-a9-4",
              omschrijving: "De kandidaat kan de betrouwbaarheid beoordelen van informatie en de waarde daarvan vaststellen voor de beantwoording van het betreffende vraagstuk.",
            },
          ],
        },
        // A10–A15: Scheikunde-specifieke vaardigheden
        {
          id: "sk-sub-a10",
          code: "A10",
          titel: "Toepassen van chemische concepten",
          leerdoelen: [
            {
              id: "sk-a10-1",
              omschrijving: "De kandidaat kan chemische concepten en in de chemie gebruikte fysische en biologische concepten herkennen en met elkaar in verband brengen.",
            },
          ],
        },
        {
          id: "sk-sub-a11",
          code: "A11",
          titel: "Redeneren in termen van context-concept",
          leerdoelen: [
            {
              id: "sk-a11-1",
              omschrijving: "De kandidaat kan in contexten afgeleid uit de sferen 'Chemie van het leven' en 'Technologie & Duurzaamheid' de chemische concepten uit de sferen 'Materie', 'Reacties' en '(Chemisch) Rekenen & Analyse' herkennen en gebruiken om een ontwerpprobleem of een natuurwetenschappelijk vraagstuk of natuurwetenschappelijk verschijnsel te specificeren.",
            },
          ],
        },
        {
          id: "sk-sub-a12",
          code: "A12",
          titel: "Redeneren in termen van structuur-eigenschap",
          leerdoelen: [
            {
              id: "sk-a12-1",
              omschrijving: "De kandidaat kan macroscopische eigenschappen in relatie brengen met structuren op meso- en (sub)microniveau, en daarin aspecten van schaal herkennen en kan omgekeerd vanuit structuren voorspellingen doen over die macroscopische eigenschappen.",
              begrippen: ["microniveau", "mesoniveau", "macroniveau"],
            },
          ],
        },
        {
          id: "sk-sub-a13",
          code: "A13",
          titel: "Redeneren over systemen, verandering en energie",
          leerdoelen: [
            {
              id: "sk-a13-1",
              omschrijving: "De kandidaat kan door middel van systeemdenken concepten uit de sferen materie, reacties en rekenen & analyse verbinden met complexe vraagstukken en contexten binnen de sferen chemie van het leven en technologie & duurzaamheid: een systeem en haar grenzen herkennen en daarbinnen de onderdelen en onderlinge interacties benoemen; de hiërarchie van het systeem herkennen aan de hand van de schaal en ordegrootte; de verandering van het systeem, de onderdelen en de interacties over tijd en ruimte beschrijven; de invoer, uitstroom en circulariteit van energie- en materiestromen van een systeem benoemen en gebruiken in redeneringen.",
            },
          ],
        },
        {
          id: "sk-sub-a14",
          code: "A14",
          titel: "Redeneren in termen van duurzaamheid",
          leerdoelen: [
            {
              id: "sk-a14-1",
              omschrijving: "De kandidaat kan in maatschappelijke, beroeps- en wetenschapscontexten aspecten van duurzaamheid aangeven en beschrijven, daarmee samenhangende problemen analyseren en voorstellen formuleren voor een mogelijke oplossing daarvan.",
            },
          ],
        },
        {
          id: "sk-sub-a15",
          code: "A15",
          titel: "Redeneren over ontwikkelen van chemische kennis",
          leerdoelen: [
            {
              id: "sk-a15-1",
              omschrijving: "De kandidaat kan weergeven hoe natuurwetenschappelijke kennis ontstaat, welke vragen natuurwetenschappelijke onderzoekers kunnen stellen en hoe ze aan betrouwbare antwoorden komen (Kennisvorming).",
            },
            {
              id: "sk-a15-2",
              omschrijving: "De kandidaat kan beschrijven hoe natuurwetenschappelijke en technische kennis wordt toegepast en kan aangeven hoe de wisselwerking tussen natuurwetenschap, techniek en samenleving is (Toepassen van kennis).",
            },
            {
              id: "sk-a15-3",
              omschrijving: "De kandidaat kan conclusies trekken met betrekking tot natuurwetenschappelijke vraagstukken en deze relateren aan de betrouwbaarheid van natuurwetenschappelijke kennis (De invloed van natuurwetenschap en techniek).",
            },
          ],
        },
      ],
    },

    // ─── SFEER MATERIE: B1–B4 ─────────────────────────────────────────────────
    {
      id: "sk-dom-b",
      code: "B",
      titel: "Stoffen en materialen in de chemie",
      ceRelevant: true,
      subdomeinen: [
        // B1 / Subsfeer M1: Deeltjesmodellen
        {
          id: "sk-sub-b1",
          code: "B1",
          titel: "Deeltjesmodellen",
          leerdoelen: [
            {
              id: "sk-b1-1",
              omschrijving: "De kandidaat kan het symbool of de (molecuul)formule geven van de volgende stoffen en ionen als de naam is gegeven en omgekeerd: niet-metalen (argon, boor, broom, chloor, fluor, fosfor, helium, jood, koolstof, neon, silicium, stikstof, waterstof, zuurstof, zwavel); metalen (aluminium, barium, cadmium, calcium, chroom, goud, ijzer, kalium, kobalt, koper, kwik, lithium, lood, mangaan, magnesium, natrium, nikkel, platina, tin, uraan, zilver, zink); ammoniak, azijnzuur, fosforzuur, glucose, salpeterzuur, water, waterstofperoxide, zwavelzuur; veelvoorkomende ionen; van koolstofverbindingen met maximaal tien koolstofatomen met onvertakte keten.",
            },
            {
              id: "sk-b1-2",
              omschrijving: "De kandidaat kan de molecuulformule geven van een moleculaire stof opgebouwd uit twee atoomsoorten (binaire moleculaire stof) aan de hand van de systematische IUPAC-naam en omgekeerd.",
            },
            {
              id: "sk-b1-3",
              omschrijving: "De kandidaat kan de volgende begrippen gebruiken: aggregatietoestand/fase (toestandsaanduidingen (s), (l), (g) en (aq)); alcoholen; atomaire massa-eenheid (u); carbonzuren; fase-overgang; index; triviale naam.",
              begrippen: ["aggregatietoestand", "fase", "(s)", "(l)", "(g)", "(aq)", "alcoholen", "atomaire massa-eenheid (u)", "carbonzuren", "fase-overgang", "index", "triviale naam"],
            },
            {
              id: "sk-b1-4",
              omschrijving: "De kandidaat kan met behulp van een atoommodel de bouw van atomen, radicalen en ionen beschrijven en daarbij de volgende begrippen gebruiken: bouw van de kern (isotopen, massagetal, atoomnummer, protonen, neutronen); bouw van de elektronenwolk (elektronen, elektronenconfiguratie van periode 1 t/m 3); lading en massa van elektronen, protonen en neutronen.",
              begrippen: ["isotopen", "massagetal", "atoomnummer", "protonen", "neutronen", "elektronen", "elektronenconfiguratie", "valentie-elektronen"],
            },
            {
              id: "sk-b1-5",
              omschrijving: "De kandidaat kan de opbouw van het periodiek systeem beschrijven, en daarbij: de plaats van aardalkalimetalen, alkalimetalen, halogenen en edelgassen aangeven; de verdeling van metalen en niet-metalen globaal aangeven; het verband aangeven tussen atoomnummer en plaats in het periodiek systeem; het verloop van eigenschappen van elementen in een groep beschrijven.",
              begrippen: ["aardalkalimetalen", "alkalimetalen", "halogenen", "edelgassen"],
            },
            {
              id: "sk-b1-6",
              omschrijving: "De kandidaat kan de opbouw van het periodiek systeem gebruiken om de structuur van de elektronenwolk te beschrijven en kan: aangeven hoe eigenschappen van groepen samenhangen met de structuur van de elektronenwolk; aangeven hoe de valentie van de atoomsoort samenhangt met de structuur van de elektronenwolk (covalentie, elektrovalentie, octetregel, valentie-elektronen).",
              begrippen: ["covalentie", "elektrovalentie", "octetregel", "valentie-elektronen"],
            },
            {
              id: "sk-b1-7",
              omschrijving: "De kandidaat kan op basis van de formule van een stof aangeven tot welke categorie stoffen deze behoort: metalen (legeringen); (macro)moleculaire stoffen; zouten.",
              begrippen: ["metalen", "legeringen", "(macro)moleculaire stoffen", "zouten"],
            },
            {
              id: "sk-b1-8",
              omschrijving: "De kandidaat kan het verschil tussen ontleedbare en niet-ontleedbare stoffen beschrijven op microniveau.",
            },
            {
              id: "sk-b1-9",
              omschrijving: "De kandidaat kan het verschil tussen een moleculaire stof en een zout beschrijven op microniveau.",
            },
            {
              id: "sk-b1-10",
              omschrijving: "De kandidaat kan de verhoudingsformule van een zout geven aan de hand van de ionen en de systematische IUPAC-naam en omgekeerd.",
            },
            {
              id: "sk-b1-11",
              omschrijving: "De kandidaat kan kristalwater herkennen in de gegeven formule van een hydraat (notatie ·nH₂O).",
              begrippen: ["kristalwater", "hydraat"],
            },
            {
              id: "sk-b1-12",
              omschrijving: "De kandidaat kan bij het weergeven van de microstructuur van een verbinding de volgende begrippen gebruiken: lewisstructuur; molecuulformule; structuurformule.",
              begrippen: ["lewisstructuur", "molecuulformule", "structuurformule"],
            },
            {
              id: "sk-b1-13",
              omschrijving: "De kandidaat kan in structuurformules van organische verbindingen functionele/karakteristieke groepen herkennen: C=C; C≡C; OH-groep (hydroxyl); C=O-groep (aldehyde en keton); COOH-groep (carboxyl); NH₂-groep (amino); C-X (X = F, Cl, Br, I); COOC-groep (ester); COC-groep (ether); CONHC-groep (peptide/amide).",
              begrippen: ["C=C", "C≡C", "hydroxylgroep", "carbonylgroep", "carboxylgroep", "aminogroep", "estergroep", "ethergroep", "peptide/amide"],
            },
            {
              id: "sk-b1-14",
              omschrijving: "De kandidaat kan met behulp van de structuurformule van koolstofverbindingen met maximaal tien koolstofatomen met hoogstens twee soorten functionele/karakteristieke groepen de systematische IUPAC-naam aangeven en omgekeerd: alkanen en afgeleide verbindingen; alkenen en afgeleide verbindingen; alkynen en afgeleide verbindingen; cycloalkanen en afgeleide verbindingen; benzeen (fenyl) en afgeleide verbindingen.",
              begrippen: ["alkanen", "alkenen", "alkynen", "cycloalkanen", "benzeen", "fenyl", "IUPAC-naam"],
            },
            {
              id: "sk-b1-15",
              omschrijving: "De kandidaat kan van een gegeven molecuulformule, formule van (samengestelde) ionen/radicalen of structuurformule een lewisstructuur geven en kan daarbij gebruiken: grensstructuren; mesomerie.",
              begrippen: ["lewisstructuur", "grensstructuren", "mesomerie"],
            },
            {
              id: "sk-b1-16",
              omschrijving: "De kandidaat kan met behulp van de Valentie-Schil-Elektronen-Paar-Repulsie-Theorie (VSEPR-theorie) de ruimtelijke bouw van samengestelde ionen en moleculen, of delen daarvan, aangeven: omringingsgetal 2, 3 en 4; 4-omringing: tetraëder, bindingshoek ongeveer 109°; 3-omringing: plat vlak, bindingshoek ongeveer 120°; 2-omringing: lineair, bindingshoek 180°.",
              begrippen: ["VSEPR-theorie", "omringingsgetal", "tetraëder", "bindingshoek"],
            },
            {
              id: "sk-b1-17",
              omschrijving: "De kandidaat kan in een (lewis)structuur de plaats van formele en partiële ladingen aangeven.",
              begrippen: ["formele lading", "partiële lading"],
            },
            {
              id: "sk-b1-18",
              omschrijving: "De kandidaat kan in redeneringen vormen van isomerie beschrijven en met structuurformules weergeven: structuurisomerie; stereo-isomerie (asymmetrisch koolstofatoom, cis/trans isomerie, enantiomeren: spiegelbeeldisomeren).",
              begrippen: ["structuurisomerie", "stereo-isomerie", "asymmetrisch koolstofatoom", "cis/trans isomerie", "enantiomeren"],
            },
          ],
        },
        // B2 / Subsfeer M2: Eigenschappen en modellen
        {
          id: "sk-sub-b2",
          code: "B2",
          titel: "Eigenschappen en modellen",
          leerdoelen: [
            {
              id: "sk-b2-1",
              omschrijving: "De kandidaat kan het verschil tussen zuivere stoffen en mengsels beschrijven: op macroniveau (stofeigenschappen); op microniveau.",
              begrippen: ["zuivere stof", "mengsel", "macroniveau", "microniveau"],
            },
            {
              id: "sk-b2-2",
              omschrijving: "De kandidaat kan een verband leggen tussen: een mengsel en smelttraject/kooktraject; een zuivere stof en smeltpunt/kookpunt.",
              begrippen: ["smelttraject", "kooktraject", "smeltpunt", "kookpunt"],
            },
            {
              id: "sk-b2-3",
              omschrijving: "De kandidaat kan bij redeneringen over mengsels de volgende begrippen gebruiken: emulsie, emulgator; homogeen/heterogeen; legering; oplossing: onverzadigd, verzadigd; suspensie.",
              begrippen: ["emulsie", "emulgator", "homogeen", "heterogeen", "legering", "oplossing", "onverzadigd", "verzadigd", "suspensie"],
            },
          ],
        },
        // B3 / Subsfeer M3: Bindingen en eigenschappen
        {
          id: "sk-sub-b3",
          code: "B3",
          titel: "Bindingen en eigenschappen",
          leerdoelen: [
            {
              id: "sk-b3-1",
              omschrijving: "De kandidaat kan de volgende soorten bindingen beschrijven op microniveau: atoombinding/covalente binding (gemeenschappelijk(e) elektronenpa(a)r(en)); polaire atoombinding (elektronegativiteit); dipool-dipool binding; ionbinding; ion-dipoolbinding, hydratatie; metaalbinding; vanderwaalsbinding/molecuulbinding (molecuulmassa, vorm van de moleculen); waterstofbrug.",
              begrippen: ["atoombinding", "covalente binding", "polaire atoombinding", "elektronegativiteit", "dipool-dipool binding", "ionbinding", "ion-dipoolbinding", "hydratatie", "metaalbinding", "vanderwaalsbinding", "molecuulbinding", "waterstofbrug"],
            },
            {
              id: "sk-b3-2",
              omschrijving: "De kandidaat kan de roosteropbouw van een stof beschrijven op microniveau: atoomrooster; ionrooster; metaalrooster; molecuulrooster.",
              begrippen: ["atoomrooster", "ionrooster", "metaalrooster", "molecuulrooster"],
            },
            {
              id: "sk-b3-3",
              omschrijving: "De kandidaat kan stofeigenschappen in verband brengen met de sterkte van de binding tussen de deeltjes waarmee de betreffende stof wordt voorgesteld: kookpunt; smeltpunt.",
            },
            {
              id: "sk-b3-4",
              omschrijving: "De kandidaat kan voor de volgende processen op microniveau beschrijven welk(e) soort(en) binding(en) verbroken/gevormd worden: condenseren; smelten; stollen; verdampen.",
              begrippen: ["condenseren", "smelten", "stollen", "verdampen"],
            },
            {
              id: "sk-b3-5",
              omschrijving: "De kandidaat kan aangeven of een molecuul een dipool/polair is, en maakt daarbij gebruik van: polaire bindingen; ruimtelijke bouw/symmetrie.",
              begrippen: ["dipool", "polair", "apolair", "symmetrie"],
            },
            {
              id: "sk-b3-6",
              omschrijving: "De kandidaat kan de termen hydrofoob en hydrofiel in verband brengen met verschillen in soorten binding: dipool-dipoolbinding; vanderwaalsbinding/molecuulbinding; waterstofbrug.",
              begrippen: ["hydrofoob", "hydrofiel"],
            },
            {
              id: "sk-b3-7",
              omschrijving: "De kandidaat kan verschillen in oplosbaarheid/mengbaarheid van moleculaire stoffen in verband brengen met de volgende begrippen: apolair/polair; hydrofiel/hydrofoob.",
              begrippen: ["apolair", "polair", "hydrofiel", "hydrofoob", "oplosbaarheid", "mengbaarheid"],
            },
            {
              id: "sk-b3-8",
              omschrijving: "De kandidaat kan de hechting van deeltjes aan een oppervlak in verband brengen met aanwezige soorten deeltjes en kan daarbij de volgende begrippen gebruiken: apolair/polair; hydrofiel/hydrofoob.",
            },
            {
              id: "sk-b3-9",
              omschrijving: "De kandidaat kan beschrijven welke soorten bindingen worden verbroken/gevormd bij het oplossen in water van: moleculaire stoffen; zouten.",
            },
            {
              id: "sk-b3-10",
              omschrijving: "De kandidaat kan een verband leggen tussen de oplosbaarheid van een zout en de toepassing van dat zout: op basis van gegeven oplosbaarheid van zouten, bepalen of een combinatie van ionen goed dan wel slecht oplosbaar is.",
            },
          ],
        },
        // B4 / Subsfeer M4 + M5 + M6: Bindingen, structuren en eigenschappen
        {
          id: "sk-sub-b4",
          code: "B4",
          titel: "Bindingen, structuren en eigenschappen",
          leerdoelen: [
            {
              id: "sk-b4-1",
              omschrijving: "De kandidaat kan een verband leggen tussen de bouw van een stof en corrosiegevoeligheid (aanwezigheid van een beschermende laag, standaardelektrodepotentiaal/edelheid van metalen); elektrisch geleidingsvermogen (aanwezigheid en beweeglijkheid van ladingdragers: elektronen, ionen); uv-lichtgevoeligheid (aanwezigheid van meervoudige atoombindingen, vorming van crosslinks); vervormbaarheid (weekmakers in polymeren, roosteropbouw, structuur van polymere materialen: thermoharders, thermoplasten).",
              begrippen: ["corrosiegevoeligheid", "standaardelektrodepotentiaal", "elektrisch geleidingsvermogen", "ladingdragers", "uv-lichtgevoeligheid", "crosslinks", "vervormbaarheid", "weekmakers", "thermoharder", "thermoplast"],
            },
            {
              id: "sk-b4-2",
              omschrijving: "De kandidaat kan voor composieten, polymeren, legeringen en keramische materialen een verband leggen tussen de structuur/ruimtelijke ordening van bouwstenen en de volgende eigenschappen: brandbaarheid; brosheid; corrosiegevoeligheid; geleidend vermogen; hardheid; uv-lichtgevoeligheid; vervormbaarheid; waterbindend vermogen.",
              begrippen: ["composieten", "polymeren", "legeringen", "keramische materialen", "brandbaarheid", "brosheid", "hardheid", "waterbindend vermogen"],
            },
            {
              id: "sk-b4-3",
              omschrijving: "De kandidaat kan de relatie beschrijven tussen de microstructuur en macroscopische eigenschappen van stoffen/materialen en kan aangeven hoe deze relatie in een beschreven onderzoek gebruikt wordt: beweeglijkheid van ladingsdragers en geleidbaarheid; karakteristieke groepen en reactiviteit (dipool/polaire atoombinding, meervoudige atoombinding, radicaal, niet-bindend elektronenpaar/vrij elektronenpaar); roosters en vervormbaarheid (metaalroosters: invloed van temperatuur, legeringen; rooster/structuur van polymeren: crosslinks, ketenlengte, soorten monomeren, weekmakers; kristalstructuur van keramische materialen: atoomrooster, ionrooster); aanwezigheid van meervoudige bindingen en uv-licht gevoeligheid; soorten metaalatomen en corrosiegevoeligheid (gebonden metaaloxidelaagje, standaardelektrodepotentiaal); moleculaire structuur en oplosbaarheid (hydrofiel/hydrofoob, karakteristieke groepen); moleculaire structuur en waterbindend vermogen; moleculaire structuur en biodegradeerbaarheid van polymeren.",
            },
            {
              id: "sk-b4-4",
              omschrijving: "De kandidaat kan de volgende begrippen herkennen en gebruiken: microstructuur/microniveau (atomen, (functionele) groepen, bindingen, moleculen, ionen); mesostructuur/mesoniveau (structuurniveau gevormd door een aantal groepen/gegroepeerde deeltjes uit het microniveau); macrostructuur/macroniveau (op niveau van stoffen en materialen, stof-/materiaaleigenschappen).",
              begrippen: ["microstructuur", "microniveau", "mesostructuur", "mesoniveau", "macrostructuur", "macroniveau"],
            },
          ],
        },
      ],
    },

    // ─── SFEER REACTIES + REKENEN: C1–C6 ─────────────────────────────────────
    {
      id: "sk-dom-c",
      code: "C",
      titel: "Chemische processen en behoudswetten",
      ceRelevant: true,
      subdomeinen: [
        // C1 / Subsfeer R1: Chemische processen
        {
          id: "sk-sub-c1",
          code: "C1",
          titel: "Chemische processen",
          leerdoelen: [
            {
              id: "sk-c1-1",
              omschrijving: "De kandidaat kan de volgende begrippen gebruiken: coëfficiënt; elementbalans; ladingsbalans.",
              begrippen: ["coëfficiënt", "elementbalans", "ladingsbalans"],
            },
            {
              id: "sk-c1-2",
              omschrijving: "De kandidaat kan van de volgende processen een reactievergelijking geven: processen waarbij maximaal één beginstof of één reactieproduct onbekend is; volledige verbranding van verbindingen van koolstof, waterstof en eventueel zuurstof.",
            },
            {
              id: "sk-c1-3",
              omschrijving: "De kandidaat kan de volgende reactiesoorten herkennen: additie; condensatiereacties (vorming ester/omestering, vorming amide/peptide); donor-acceptor reacties (redoxreacties: overdracht van elektronen; zuur-base reacties: overdracht van H⁺ ionen/protonen); hydrolyse; ontledingsreactie (elektrolyse, fotolyse en thermolyse); substitutie; verbranding (onvolledig, volledig).",
              begrippen: ["additie", "condensatie", "ester", "omestering", "amide", "peptide", "redoxreactie", "zuur-base reactie", "hydrolyse", "elektrolyse", "fotolyse", "thermolyse", "substitutie", "verbranding"],
            },
            {
              id: "sk-c1-4",
              omschrijving: "De kandidaat kan de notatie van de volgende oplossingen geven als de naam is gegeven en omgekeerd: ammonia; natronloog; zoutzuur.",
            },
            {
              id: "sk-c1-5",
              omschrijving: "De kandidaat kan de volgende deeltjes als zuren herkennen: HCl, H₂SO₄, HNO₃, H₂O + CO₂ / 'H₂CO₃', H₃PO₄, CH₃COOH.",
            },
            {
              id: "sk-c1-6",
              omschrijving: "De kandidaat kan de volgende deeltjes als basen herkennen: NH₃, OH⁻, CO₃²⁻, O²⁻, HCO₃⁻.",
            },
            {
              id: "sk-c1-7",
              omschrijving: "De kandidaat kan reacties tussen zuren en basen beschrijven met een reactievergelijking.",
            },
            {
              id: "sk-c1-8",
              omschrijving: "De kandidaat kan het verschil tussen sterke en zwakke zuren aangeven.",
              begrippen: ["sterk zuur", "zwak zuur"],
            },
            {
              id: "sk-c1-9",
              omschrijving: "De kandidaat kan beschrijven wat buffersystemen zijn en kan aangeven hoe deze werken.",
              begrippen: ["buffersysteem", "buffer"],
            },
            {
              id: "sk-c1-10",
              omschrijving: "De kandidaat kan met behulp van de standaardelektrodepotentiaal de relatieve sterkte van een reductor of oxidator aangeven.",
              begrippen: ["standaardelektrodepotentiaal", "reductor", "oxidator"],
            },
            {
              id: "sk-c1-11",
              omschrijving: "De kandidaat kan in een gegeven reactie de oxidator en de reductor aangeven.",
            },
            {
              id: "sk-c1-12",
              omschrijving: "De kandidaat kan de vergelijking van een halfreactie afleiden met behulp van het gegeven redoxkoppel.",
              begrippen: ["halfreactie", "redoxkoppel"],
            },
            {
              id: "sk-c1-13",
              omschrijving: "De kandidaat kan een totaalvergelijking van een redoxreactie afleiden met behulp van gegeven halfreacties.",
            },
            {
              id: "sk-c1-14",
              omschrijving: "De kandidaat kan een elektrochemische cel beschrijven en daarbij de volgende begrippen gebruiken: aanwijzen reductor en oxidator; elektrolyt; elektronenoverdracht via een externe verbinding; halfreactie; ionentransport/elektronentransport; membraan/zoutbrug; positieve en negatieve elektrode; stroomsterkte.",
              begrippen: ["elektrochemische cel", "elektrolyt", "elektronenoverdracht", "ionentransport", "membraan", "zoutbrug", "elektrode", "stroomsterkte"],
            },
            {
              id: "sk-c1-15",
              omschrijving: "De kandidaat kan bij organisch-chemische reacties aangeven welke bindingen verbroken en gevormd worden, en daarbij zo nodig gebruik maken van lewisstructuren: additiereacties aan dubbele binding (C=C; 1,2- en 1,4-additie); condensatiereacties (amide/peptide; ester).",
              begrippen: ["1,2-additie", "1,4-additie"],
            },
            {
              id: "sk-c1-16",
              omschrijving: "De kandidaat kan bij organisch-chemische reacties de reactievergelijking geven in structuurformules en lewisstructuren: additiereacties; condensatiereacties (amide/peptide; ester); hydrolysereacties; substitutiereacties.",
            },
            {
              id: "sk-c1-17",
              omschrijving: "De kandidaat kan aan de hand van een gegeven reactie een reactie met analoge verbindingen beschrijven.",
            },
          ],
        },
        // C2 / Subsfeer R&A1: Chemisch rekenen (grootheden en relaties)
        {
          id: "sk-sub-c2",
          code: "C2",
          titel: "Chemisch rekenen",
          leerdoelen: [
            {
              id: "sk-c2-1",
              omschrijving: "De kandidaat kan de volgende principes gebruiken in berekeningen aan en beschrijvingen van chemische processen: massaverhouding; molverhouding/stoichiometrische verhouding; ondermaat/overmaat; rendement als fractie of percentage van de theoretische opbrengst; volumeverhouding van gassen bij reacties.",
              begrippen: ["massaverhouding", "molverhouding", "stoichiometrische verhouding", "ondermaat", "overmaat", "rendement"],
            },
            {
              id: "sk-c2-2",
              omschrijving: "De kandidaat kan bij berekeningen de volgende begrippen/grootheden en relaties gebruiken: massa (m, kg of g); atoommassa (A, u); molecuulmassa (M, u); molaire massa (M(X), g mol⁻¹); chemische hoeveelheid (n, mol); volume (V, m³ of L); molair volume (Vm, m³ mol⁻¹ of L mol⁻¹); dichtheid (ρ, kg m⁻³ of g L⁻¹); concentratie (c(X) of [X], mol m⁻³ of mol L⁻¹); molariteit; lading (Q, C); molaire lading/constante van Faraday (F, C mol⁻¹); reactiesnelheid (s, mol L⁻¹s⁻¹).",
              begrippen: ["massa", "atoommassa", "molecuulmassa", "molaire massa", "chemische hoeveelheid", "mol", "volume", "molair volume", "dichtheid", "concentratie", "molariteit", "lading", "constante van Faraday", "reactiesnelheid"],
              formules: ["ρ = m / V", "n = m / M", "Vm = V / n", "[X] = n / V", "s = Δc / Δt", "F = Q / n"],
            },
            {
              id: "sk-c2-3",
              omschrijving: "De kandidaat kan bij berekeningen met massa, volume en hoeveelheid de volgende begrippen gebruiken: percentage (%); ppm; ppb.",
              begrippen: ["percentage", "ppm", "ppb"],
            },
            {
              id: "sk-c2-4",
              omschrijving: "De kandidaat kan bij berekeningen van de pH de volgende begrippen en relaties gebruiken: zuurgraad (pH en pOH); pH = –log [H⁺] of pH = –log[H₃O⁺]; pOH = –log [OH⁻]; pH + pOH = 14,00 (bij 298 K); [H⁺] = 10⁻ᵖᴴ; [OH⁻] = 10⁻ᵖᴼᴴ.",
              begrippen: ["pH", "pOH", "zuurgraad"],
              formules: ["pH = -log[H⁺]", "pOH = -log[OH⁻]", "pH + pOH = 14,00 (bij 298 K)", "[H⁺] = 10⁻ᵖᴴ", "[OH⁻] = 10⁻ᵖᴼᴴ"],
            },
            {
              id: "sk-c2-5",
              omschrijving: "De kandidaat kan van een oplossing met bekende concentratie van een zuur of van een base de pH berekenen of omgekeerd uit de pH de concentratie berekenen: sterk zuur; éénwaardig zwak zuur; sterke base; éénwaardige zwakke base.",
            },
            {
              id: "sk-c2-6",
              omschrijving: "De kandidaat kan voor een gegeven evenwicht de evenwichtsvoorwaarde geven en kan berekeningen uitvoeren aan evenwichten: concentratiebreuk Q; evenwichtsconstante K; K = Q bij evenwicht; Ks (oplosbaarheidsproduct); Kv (verdelingsevenwicht); Kz, Kb, Kw.",
              begrippen: ["concentratiebreuk Q", "evenwichtsconstante K", "oplosbaarheidsproduct Ks", "verdelingsevenwicht Kv", "Kz", "Kb", "Kw"],
            },
          ],
        },
        // C3 / Subsfeer R&A3: Behoudswetten en kringlopen
        {
          id: "sk-sub-c3",
          code: "C3",
          titel: "Behoudswetten en kringlopen",
          leerdoelen: [
            {
              id: "sk-c3-1",
              omschrijving: "De kandidaat kan de volgende begrippen gebruiken in redeneringen: elementbehoud; energiebehoud/energiebalans; ladingbehoud/ladingbalans; massabehoud/massabalans.",
              begrippen: ["elementbehoud", "energiebehoud", "energiebalans", "ladingbehoud", "ladingbalans", "massabehoud", "massabalans"],
            },
          ],
        },
        // C4 / Subsfeer R2 + R3: Reactiekinetiek
        {
          id: "sk-sub-c4",
          code: "C4",
          titel: "Reactiekinetiek",
          leerdoelen: [
            {
              id: "sk-c4-1",
              omschrijving: "De kandidaat kan een verband leggen tussen de structuurformule van een (co)polymeer en de structuurformule(s) van het/de monome(e)r(en): additiepolymeren; condensatiepolymeren.",
              begrippen: ["additiepolymeer", "condensatiepolymeer", "monomeer", "polymeer", "copolymeer"],
            },
            {
              id: "sk-c4-2",
              omschrijving: "De kandidaat kan de diverse stappen in het reactiemechanisme van een additiepolymerisatie beschrijven: initiatie, propagatie, terminatie.",
              begrippen: ["initiatie", "propagatie", "terminatie"],
            },
            {
              id: "sk-c4-3",
              omschrijving: "De kandidaat kan bij polymerisatiereacties een verband leggen tussen het reactiemechanisme en: crosslinks; gemiddelde ketenlengte, polymerisatiegraad.",
              begrippen: ["crosslinks", "ketenlengte", "polymerisatiegraad"],
            },
            {
              id: "sk-c4-4",
              omschrijving: "De kandidaat kan aangeven dat reacties vaak in een aantal stappen verlopen: reactiemechanisme; snelheidsbepalende stap.",
              begrippen: ["reactiemechanisme", "snelheidsbepalende stap"],
            },
            {
              id: "sk-c4-5",
              omschrijving: "De kandidaat kan van een gegeven reactiemechanisme een beschrijving geven van de verplaatsing van elektronen/elektronenparen: elektrofiel, nucleofiel; grensstructuren/lewisstructuren; radicalen.",
              begrippen: ["elektrofiel", "nucleofiel", "grensstructuren", "radicalen"],
            },
            {
              id: "sk-c4-6",
              omschrijving: "De kandidaat kan veranderingen in reactiesnelheid verklaren met het botsende deeltjesmodel en daarbij de volgende begrippen gebruiken: concentratie; druk; temperatuur; verdelingsgraad.",
              begrippen: ["botsende deeltjesmodel", "concentratie", "druk", "temperatuur", "verdelingsgraad"],
            },
            {
              id: "sk-c4-7",
              omschrijving: "De kandidaat kan veranderingen in reactiesnelheid verklaren met behulp van de volgende begrippen: activeringsenergie; katalysator.",
              begrippen: ["activeringsenergie", "katalysator"],
            },
          ],
        },
        // C5 / Subsfeer R4: Chemisch evenwicht
        {
          id: "sk-sub-c5",
          code: "C5",
          titel: "Chemisch evenwicht",
          leerdoelen: [
            {
              id: "sk-c5-1",
              omschrijving: "De kandidaat kan bij de beschrijving van chemische processen de volgende begrippen gebruiken: aflopende reactie; evenwicht; omkeerbare reactie.",
              begrippen: ["aflopende reactie", "evenwicht", "omkeerbare reactie"],
            },
            {
              id: "sk-c5-2",
              omschrijving: "De kandidaat kan de beïnvloeding van de ligging/verschuiving van het evenwicht verklaren aan de hand van: verandering in de concentratiebreuk; verandering in de evenwichtsconstante.",
              begrippen: ["concentratiebreuk", "evenwichtsconstante", "evenwichtsverschuiving"],
            },
            {
              id: "sk-c5-3",
              omschrijving: "De kandidaat kan de invloed van een katalysator op een chemisch proces toelichten: insteltijd van een evenwicht; ligging van een evenwicht; reactiesnelheid.",
            },
          ],
        },
        // C6 / Subsfeer R5: Energieberekeningen
        {
          id: "sk-sub-c6",
          code: "C6",
          titel: "Energieberekeningen",
          leerdoelen: [
            {
              id: "sk-c6-1",
              omschrijving: "De kandidaat kan de volgende begrippen gebruiken: activeringsenergie; endotherm, exotherm; energieniveaus; invloed van een katalysator; ontbrandingstemperatuur; overgangstoestand/geactiveerde toestand; reactiewarmte/energie-effect; vormingswarmte.",
              begrippen: ["activeringsenergie", "endotherm", "exotherm", "energieniveaus", "katalysator", "ontbrandingstemperatuur", "overgangstoestand", "geactiveerde toestand", "reactiewarmte", "energie-effect", "vormingswarmte"],
            },
            {
              id: "sk-c6-2",
              omschrijving: "De kandidaat kan een energiediagram geven van een reactie.",
              begrippen: ["energiediagram"],
            },
            {
              id: "sk-c6-3",
              omschrijving: "De kandidaat kan de reactiewarmte van een reactie berekenen met behulp van vormingswarmtes.",
            },
            {
              id: "sk-c6-4",
              omschrijving: "De kandidaat kan de vormingswarmte van een stof berekenen met behulp van de reactiewarmte van een reactie en vormingswarmtes.",
            },
            {
              id: "sk-c6-5",
              omschrijving: "De kandidaat kan bij omzettingen van chemische energie redeneren aan de hand van berekeningen, en maakt daarbij gebruik van de wet van behoud van energie: elektrische energie; warmte.",
              begrippen: ["wet van behoud van energie"],
            },
          ],
        },
      ],
    },

    // ─── DOMEIN D (CE-deel): D1, D3 ───────────────────────────────────────────
    {
      id: "sk-dom-d",
      code: "D",
      titel: "Ontwikkelen van chemische kennis",
      ceRelevant: true,
      subdomeinen: [
        // D1 / Subsfeer R&A2: Chemische vakmethodes (scheiding en analyse)
        {
          id: "sk-sub-d1",
          code: "D1",
          titel: "Chemische vakmethodes",
          leerdoelen: [
            {
              id: "sk-d1-1",
              omschrijving: "De kandidaat kan in redeneringen over analyse- en/of scheidingsmethodes de volgende begrippen gebruiken: adsorberen; bezinken; centrifugeren; destillaat; destilleren; extraheren/wassen; extractiemiddel; filtraat; filtreren; (gas)chromatografie (loopvloeistof, mobiele fase en stationaire fase, piekoppervlak, retentietijd/Rf-waarde); indampen; ijklijn; indicator; massaspectrometrie (isotopen en natuurlijk voorkomen, m/z-verhouding, piekhoogte/relatief voorkomen van een fragment); oplosmiddel; reagens; residu; titratie.",
              begrippen: ["adsorberen", "bezinken", "centrifugeren", "destillaat", "destilleren", "extraheren", "filtreren", "chromatografie", "loopvloeistof", "mobiele fase", "stationaire fase", "piekoppervlak", "retentietijd", "Rf-waarde", "ijklijn", "indicator", "massaspectrometrie", "m/z-verhouding", "titratie"],
            },
            {
              id: "sk-d1-2",
              omschrijving: "De kandidaat kan voor scheidingsmethodes toelichten op welk verschil van (stof)eigenschap ze berusten en beargumenteren waarom ze bij een bepaald proces worden gebruikt.",
            },
            {
              id: "sk-d1-3",
              omschrijving: "De kandidaat kan een (gas)chromatogram interpreteren: kwalitatief (welke stoffen aanwezig zijn in een mengsel); kwantitatief (berekeningen uitvoeren aan gegevens over piekoppervlak).",
            },
            {
              id: "sk-d1-4",
              omschrijving: "De kandidaat kan een massaspectrum interpreteren: kwalitatief (welke kenmerkende patronen voorkomen en aan de hand daarvan stoffen herkennen); kwantitatief (berekeningen uitvoeren aan de hand van relatieve piekhoogten).",
            },
          ],
        },
        // D3 / Subsfeer R2: Chemische synthese (reactiemechanismen)
        {
          id: "sk-sub-d3",
          code: "D3",
          titel: "Chemische synthese",
          leerdoelen: [
            {
              id: "sk-d3-1",
              omschrijving: "De kandidaat kan een verband leggen tussen de structuurformule van een (co)polymeer en de structuurformule(s) van het/de monome(e)r(en): additiepolymeren; condensatiepolymeren.",
            },
            {
              id: "sk-d3-2",
              omschrijving: "De kandidaat kan de diverse stappen in het reactiemechanisme van een additiepolymerisatie beschrijven: initiatie, propagatie, terminatie.",
            },
            {
              id: "sk-d3-3",
              omschrijving: "De kandidaat kan bij polymerisatiereacties een verband leggen tussen het reactiemechanisme en: crosslinks; gemiddelde ketenlengte, polymerisatiegraad.",
            },
            {
              id: "sk-d3-4",
              omschrijving: "De kandidaat kan aangeven dat reacties vaak in een aantal stappen verlopen: reactiemechanisme; snelheidsbepalende stap.",
            },
            {
              id: "sk-d3-5",
              omschrijving: "De kandidaat kan van een gegeven reactiemechanisme een beschrijving geven van de verplaatsing van elektronen/elektronenparen: elektrofiel, nucleofiel; grensstructuren/lewisstructuren; radicalen.",
            },
          ],
        },
      ],
    },

    // ─── DOMEIN E (CE-deel): E1, E2 ───────────────────────────────────────────
    {
      id: "sk-dom-e",
      code: "E",
      titel: "Innovatie en chemisch onderzoek",
      ceRelevant: true,
      subdomeinen: [
        // E1 / Subsfeer M5: Chemisch onderzoek
        {
          id: "sk-sub-e1",
          code: "E1",
          titel: "Chemisch onderzoek",
          leerdoelen: [
            {
              id: "sk-e1-1",
              omschrijving: "De kandidaat kan de relatie beschrijven tussen de microstructuur en macroscopische eigenschappen van stoffen/materialen en kan aangeven hoe deze relatie in een beschreven onderzoek (ten minste in de context van gezondheid, materialen of voedselproductie) gebruikt wordt: beweeglijkheid van ladingsdragers en geleidbaarheid; karakteristieke groepen en reactiviteit (dipool/polaire atoombinding, meervoudige atoombinding, radicaal, niet-bindend elektronenpaar/vrij elektronenpaar); roosters en vervormbaarheid; aanwezigheid van meervoudige bindingen en uv-lichtgevoeligheid; soorten metaalatomen en corrosiegevoeligheid; moleculaire structuur en oplosbaarheid; moleculaire structuur en waterbindend vermogen; moleculaire structuur en biodegradeerbaarheid van polymeren.",
            },
          ],
        },
        // E2 / Subsfeer L2: Selectiviteit en specificiteit
        {
          id: "sk-sub-e2",
          code: "E2",
          titel: "Selectiviteit en specificiteit",
          leerdoelen: [
            {
              id: "sk-e2-1",
              omschrijving: "De kandidaat kan bij de werking van een enzym als biokatalysator de kinetiek van de reactie tussen enzym en substraat kwalitatief verklaren en daarbij de volgende begrippen gebruiken: afsplitsing van een product; vorming van een enzym-substraatcomplex.",
              begrippen: ["enzym", "biokatalysator", "substraat", "enzym-substraatcomplex"],
            },
            {
              id: "sk-e2-2",
              omschrijving: "De kandidaat kan de specificiteit en selectiviteit van een enzym beschrijven aan de hand van de ruimtelijke structuur en de functionele groepen: actieve plaats; pH-optimum; temperatuuroptimum.",
              begrippen: ["specificiteit", "selectiviteit", "actieve plaats", "pH-optimum", "temperatuuroptimum"],
            },
            {
              id: "sk-e2-3",
              omschrijving: "De kandidaat kan aangeven welke factoren een rol spelen bij het transport van stoffen in het lichaam: hydrofiel/hydrofoob; membranen/fosfolipiden; pH.",
              begrippen: ["membranen", "fosfolipiden"],
            },
          ],
        },
      ],
    },

    // ─── DOMEIN F (CE-deel): F1, F2, F3 ──────────────────────────────────────
    {
      id: "sk-dom-f",
      code: "F",
      titel: "Industriële (chemische) processen",
      ceRelevant: true,
      subdomeinen: [
        // F1 / Subsfeer T1: Industriële processen
        {
          id: "sk-sub-f1",
          code: "F1",
          titel: "Industriële processen",
          leerdoelen: [
            {
              id: "sk-f1-1",
              omschrijving: "De kandidaat kan de volgende begrippen gebruiken: afval; batchproces; bulkchemie; continuproces; energiebehoud/energiebalans; energiehuishouding; fijnchemie; groene chemie; reactoren; recirculatie; recycling; scheidingsinstallaties/scheidingsmethodes; stofstromen; warmtewisselaars.",
              begrippen: ["afval", "batchproces", "bulkchemie", "continuproces", "energiebalans", "energiehuishouding", "fijnchemie", "groene chemie", "reactoren", "recirculatie", "recycling", "stofstromen", "warmtewisselaars"],
            },
            {
              id: "sk-f1-2",
              omschrijving: "De kandidaat kan met gegevens over een industrieel proces dit proces met een blokschema beschrijven.",
              begrippen: ["blokschema"],
            },
            {
              id: "sk-f1-3",
              omschrijving: "De kandidaat kan van een industrieel proces de gekozen reactieomstandigheden en scheidingsstappen toelichten.",
            },
          ],
        },
        // F2 / Subsfeer T2: Groene chemie
        {
          id: "sk-sub-f2",
          code: "F2",
          titel: "Groene chemie",
          leerdoelen: [
            {
              id: "sk-f2-1",
              omschrijving: "De kandidaat kan toelichten welke aspecten van groene chemie bij het ontwerpen van industriële processen een rol hebben gespeeld: afval; (keuze voor) batchproces/continuproces; bijproducten; gebruik van water; (hernieuwbare) grondstoffen; kwalitatieve energiebeschouwing; milieueisen; nevenreacties; onvolledige omzetting; overmaat/ondermaat; reactieomstandigheden; recycling; veiligheid.",
              begrippen: ["groene chemie", "bijproducten", "hernieuwbare grondstoffen", "nevenreacties"],
            },
            {
              id: "sk-f2-2",
              omschrijving: "De kandidaat kan aan de hand van formules uit groene chemie berekeningen uitvoeren en conclusies trekken over processen: atoomeconomie; E-factor.",
              begrippen: ["atoomeconomie", "E-factor"],
            },
            {
              id: "sk-f2-3",
              omschrijving: "De kandidaat kan chemische processen relateren aan: cradle-to-cradle; elementkringloop; recycling; stofkringloop.",
              begrippen: ["cradle-to-cradle", "elementkringloop", "stofkringloop"],
            },
          ],
        },
        // F3 / Subsfeer T3 + T5: Energieomzettingen
        {
          id: "sk-sub-f3",
          code: "F3",
          titel: "Energieomzettingen",
          leerdoelen: [
            {
              id: "sk-f3-1",
              omschrijving: "De kandidaat kan met behulp van een beschrijving van chemische technieken voor energieproductie uit biomassa redeneren over deze technieken.",
              begrippen: ["biomassa", "energieproductie"],
            },
            {
              id: "sk-f3-2",
              omschrijving: "De kandidaat kan beschreven processen met elkaar vergelijken op het gebied van duurzaamheid en een keuze voor een proces beargumenteren: afval; energiegebruik (keuze van de energiebron, verhouding energie/massa); grondstofgebruik; milieu-aspecten; recycling; transport van grondstoffen, producten en afvalstoffen.",
            },
            {
              id: "sk-f3-3",
              omschrijving: "De kandidaat kan brandstoffen met elkaar vergelijken, voorstellen voor aanpassing(en) beoordelen en redeneren over aspecten van duurzaamheid die daarbij een rol spelen: C/H-verhouding (relatie hoeveelheid CO₂ per joule); optredende emissies bij verbranding (CO₂, NOₓ, SO₂); verschil in hoeveelheid koolstofdioxide geproduceerd door biobrandstof en fossiele brandstof (koolstofkringloop, (versterkt) broeikaseffect).",
              begrippen: ["C/H-verhouding", "biobrandstof", "fossiele brandstof", "koolstofkringloop", "broeikaseffect", "NOₓ", "SO₂"],
            },
          ],
        },
      ],
    },

    // ─── DOMEIN G (CE-deel): G1, G2, G3 ──────────────────────────────────────
    {
      id: "sk-dom-g",
      code: "G",
      titel: "Maatschappij, chemie en technologie",
      ceRelevant: true,
      subdomeinen: [
        // G1 / Subsfeer L1: Chemie van het leven
        {
          id: "sk-sub-g1",
          code: "G1",
          titel: "Chemie van het leven",
          leerdoelen: [
            {
              id: "sk-g1-1",
              omschrijving: "De kandidaat kan de volgende biologische vakbegrippen herkennen en gebruiken: ademhaling/gaswisseling; bloed; cel; celmembraan; gen; organisme; spijsvertering; transport.",
              begrippen: ["ademhaling", "gaswisseling", "bloed", "cel", "celmembraan", "gen", "organisme", "spijsvertering", "transport"],
            },
            {
              id: "sk-g1-2",
              omschrijving: "De kandidaat kan de fotosynthese van glucose beschrijven als een proces waarbij licht energie wordt omgezet in chemische energie: productie van zuurstof; vastleggen van koolstofdioxide/koolstofassimilatie.",
              begrippen: ["fotosynthese", "koolstofassimilatie"],
            },
            {
              id: "sk-g1-3",
              omschrijving: "De kandidaat kan op microniveau de structuur beschrijven van: eiwitten/enzymen ((essentiële) aminozuren, primaire/secundaire/tertiaire structuur: alfahelix, bètaplaat); koolhydraten (mono-, di- en polysachariden); nucleïnezuren (DNA, RNA, basen A, C, T/U en G); vetten (triglyceriden, (on)verzadigde vetzuren, glycerol).",
              begrippen: ["eiwit", "enzym", "aminozuren", "primaire structuur", "secundaire structuur", "tertiaire structuur", "alfahelix", "bètaplaat", "koolhydraten", "monosaccharide", "disaccharide", "polysaccharide", "nucleïnezuren", "DNA", "RNA", "triglyceriden", "vetzuren", "glycerol"],
            },
            {
              id: "sk-g1-4",
              omschrijving: "De kandidaat kan de afbraak van voedingsstoffen beschrijven als een chemisch proces, waarbij de producten als basis kunnen dienen voor het maken van lichaamseigen stoffen.",
            },
            {
              id: "sk-g1-5",
              omschrijving: "De kandidaat kan de functie van eiwitten, koolhydraten, nucleïnezuren en vetten in de levende natuur benoemen: eiwitten (bouwstof, enzymen); koolhydraten (energieopslag); nucleïnezuren (informatiedrager); vetten (bouwstof in membranen, energieopslag).",
            },
            {
              id: "sk-g1-6",
              omschrijving: "De kandidaat kan de stappen in de eiwitsynthese beschrijven, en maakt daarbij gebruik van: codon; genetische code; translatie; transcriptie; vorming van RNA op DNA-matrijs.",
              begrippen: ["codon", "genetische code", "translatie", "transcriptie", "DNA-matrijs"],
            },
          ],
        },
        // G2 / Subsfeer T4: Milieueffectrapportage
        {
          id: "sk-sub-g2",
          code: "G2",
          titel: "Milieueffectrapportage",
          leerdoelen: [
            {
              id: "sk-g2-1",
              omschrijving: "De kandidaat kan aan de hand van gegevens over een productieproces aangeven wat mogelijke gevolgen voor milieu en gezondheid zijn van dat productieproces: gebruik van (koel)water; risico bij calamiteiten; uitstoot (grenswaarde).",
              begrippen: ["grenswaarde", "uitstoot", "calamiteiten"],
            },
          ],
        },
        // G3 / Subsfeer T5 + T6: Energie en industrie / Duurzaamheid
        {
          id: "sk-sub-g3",
          code: "G3",
          titel: "Energie en industrie",
          leerdoelen: [
            {
              id: "sk-g3-1",
              omschrijving: "De kandidaat kan de rol van levenscycli van stoffen, materialen en producten aangeven in termen van duurzaamheid.",
              begrippen: ["levenscyclus"],
            },
            {
              id: "sk-g3-2",
              omschrijving: "De kandidaat kan met behulp van kennis over levenscycli van stoffen, materialen en producten voorstellen formuleren voor een keuze tussen alternatieven bij gebruik van stoffen, materialen in industriële processen.",
            },
            {
              id: "sk-g3-3",
              omschrijving: "De kandidaat kan in de context van duurzaamheid de maatschappelijke betekenis van de chemie benoemen.",
            },
            {
              id: "sk-g3-4",
              omschrijving: "De kandidaat kan de wereldvraagstukken: wereldvoedselvoorziening, duurzame energievoorziening, (drink)watervoorziening, beschikbaarheid van grondstoffen, opwarming van de aarde en vervuiling van de aarde relateren aan chemische concepten.",
              begrippen: ["wereldvoedselvoorziening", "duurzame energievoorziening", "drinkwatervoorziening", "opwarming van de aarde"],
            },
            {
              id: "sk-g3-5",
              omschrijving: "De kandidaat kan beschrijven dat elektrische energie kan worden gebruikt voor: duurzame productie van stoffen (elektrolyse van water: waterstof); opslag van elektrische energie (opladen accu/batterij).",
              begrippen: ["elektrolyse van water", "waterstof", "accu", "batterij"],
            },
          ],
        },
      ],
    },
  ],
};

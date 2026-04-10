import { VakSyllabus } from "@/types/syllabus";

export const NATUURKUNDE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "natuurkunde-vwo",
  niveau: "VWO",
  domeinen: [
    // ─── DOMEIN A: VAARDIGHEDEN ────────────────────────────────────────────────
    {
      id: "nat-dom-a",
      code: "A",
      titel: "Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        // A1–A4: Algemene vaardigheden (profieloverstijgend niveau)
        {
          id: "nat-sub-a1",
          code: "A1",
          titel: "Informatievaardigheden gebruiken",
          leerdoelen: [
            {
              id: "nat-a1-1",
              omschrijving: "De kandidaat kan doelgericht informatie zoeken, beoordelen, selecteren en verwerken.",
            },
          ],
        },
        {
          id: "nat-sub-a2",
          code: "A2",
          titel: "Communiceren",
          leerdoelen: [
            {
              id: "nat-a2-1",
              omschrijving: "De kandidaat kan adequaat schriftelijk, mondeling en digitaal in het publieke domein communiceren over onderwerpen uit het desbetreffende vakgebied.",
            },
          ],
        },
        {
          id: "nat-sub-a3",
          code: "A3",
          titel: "Reflecteren op leren",
          leerdoelen: [
            {
              id: "nat-a3-1",
              omschrijving: "De kandidaat kan bij het verwerven van vakkennis en vakvaardigheden reflecteren op eigen belangstelling, motivatie en leerproces.",
            },
          ],
        },
        {
          id: "nat-sub-a4",
          code: "A4",
          titel: "Studie en beroep",
          leerdoelen: [
            {
              id: "nat-a4-1",
              omschrijving: "De kandidaat kan aangeven op welke wijze natuurwetenschappelijke kennis in studie en beroep wordt gebruikt en kan mede op basis daarvan zijn belangstelling voor studies en beroepen onder woorden brengen.",
            },
          ],
        },
        // A5–A9: Natuurwetenschappelijke, wiskundige en technische vaardigheden (bètaprofielniveau)
        {
          id: "nat-sub-a5",
          code: "A5",
          titel: "Onderzoeken",
          leerdoelen: [
            {
              id: "nat-a5-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem specificeren.",
            },
            {
              id: "nat-a5-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem herleiden tot een (of meerdere) onderzoeksvra(a)g(en).",
            },
            {
              id: "nat-a5-3",
              omschrijving: "De kandidaat kan verbanden leggen tussen een onderzoeksvraag en natuurwetenschappelijke kennis.",
            },
            {
              id: "nat-a5-4",
              omschrijving: "De kandidaat kan een hypothese opstellen bij een onderzoeksvraag en verwachtingen formuleren.",
            },
            {
              id: "nat-a5-5",
              omschrijving: "De kandidaat kan een werkplan maken voor het uitvoeren van een natuurwetenschappelijk onderzoek ter beantwoording van een (of meerdere) onderzoeksvra(a)g(en).",
            },
            {
              id: "nat-a5-6",
              omschrijving: "De kandidaat kan voor de beantwoording van een onderzoeksvraag relevante waarnemingen verrichten en (meet)gegevens verzamelen.",
            },
            {
              id: "nat-a5-7",
              omschrijving: "De kandidaat kan meetgegevens verwerken en presenteren op een wijze die helpt bij de beantwoording van een onderzoeksvraag.",
            },
            {
              id: "nat-a5-8",
              omschrijving: "De kandidaat kan op grond van verzamelde gegevens van een uitgevoerd onderzoek conclusies trekken die aansluiten bij de onderzoeksvra(a)g(en) van het onderzoek.",
            },
            {
              id: "nat-a5-9",
              omschrijving: "De kandidaat kan de uitvoering en de resultaten van een onderzoek evalueren, gebruik makend van de begrippen nauwkeurigheid, betrouwbaarheid en validiteit.",
            },
            {
              id: "nat-a5-10",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk onderzoek op een geschikte manier presenteren.",
            },
            {
              id: "nat-a5-11",
              omschrijving: "De kandidaat kan toelichten dat er naast een experimentele onderzoeksaanpak ook andere onderzoeksaanpakken mogelijk zijn.",
            },
            {
              id: "nat-a5-12",
              omschrijving: "De kandidaat kan de aard van de opbrengst van onderzoek duiden en daarbij de begrippen onzekerheid en waarschijnlijkheid hanteren.",
            },
          ],
        },
        {
          id: "nat-sub-a6",
          code: "A6",
          titel: "Ontwerpen",
          leerdoelen: [
            {
              id: "nat-a6-1",
              omschrijving: "De kandidaat kan een ontwerpprobleem specificeren.",
            },
            {
              id: "nat-a6-2",
              omschrijving: "De kandidaat kan een ontwerpprobleem herleiden tot een aantal afzonderlijk uitwerkbare deelproblemen (taken, eigenschappen).",
            },
            {
              id: "nat-a6-3",
              omschrijving: "De kandidaat kan voor een ontwerp een programma van eisen en wensen opstellen: randvoorwaarden, eisen, prioriteiten en wensen.",
            },
            {
              id: "nat-a6-4",
              omschrijving: "De kandidaat kan verbanden leggen tussen natuurwetenschappelijke kennis en taken en eigenschappen van een ontwerp.",
            },
            {
              id: "nat-a6-5",
              omschrijving: "De kandidaat kan meerdere uitwerkingen of oplossingen per deelprobleem geven.",
            },
            {
              id: "nat-a6-6",
              omschrijving: "De kandidaat kan een beargumenteerd ontwerpvoorstel doen voor een ontwerp, rekening houdend met het programma van eisen.",
            },
            {
              id: "nat-a6-7",
              omschrijving: "De kandidaat kan een prototype van een ontwerp realiseren.",
            },
            {
              id: "nat-a6-8",
              omschrijving: "De kandidaat kan een ontwerpproces en -product testen en evalueren, rekening houdend met het programma van eisen.",
            },
            {
              id: "nat-a6-9",
              omschrijving: "De kandidaat kan voorstellen doen voor verbetering van een ontwerp.",
            },
            {
              id: "nat-a6-10",
              omschrijving: "De kandidaat kan een ontwerpproces en -product op een geschikte manier presenteren.",
            },
          ],
        },
        {
          id: "nat-sub-a7",
          code: "A7",
          titel: "Modelvorming",
          leerdoelen: [
            {
              id: "nat-a7-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel specificeren met als doel het te beschrijven, te verklaren of te voorspellen.",
            },
            {
              id: "nat-a7-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel vereenvoudigen en de essentiële kenmerken ervan identificeren.",
            },
            {
              id: "nat-a7-3",
              omschrijving: "De kandidaat kan van een model de overeenkomsten en verschillen met de werkelijkheid benoemen met als doel de geschiktheid en het geldigheidsgebied van het model te bepalen.",
            },
            {
              id: "nat-a7-4",
              omschrijving: "De kandidaat kan van een model beoordelen in hoeverre het aansluit bij het doel waarvoor het ingezet wordt.",
            },
            {
              id: "nat-a7-5",
              omschrijving: "De kandidaat kan voor een model een geschikte fysieke, schematische of wiskundige weergave selecteren en waar nodig kwantificeren.",
            },
            {
              id: "nat-a7-6",
              omschrijving: "De kandidaat kan een adequaat model opstellen of bijstellen.",
            },
            {
              id: "nat-a7-7",
              omschrijving: "De kandidaat kan met een model eigenschappen van een natuurwetenschappelijk verschijnsel beschrijven, verklaren en/of voorspellen.",
            },
            {
              id: "nat-a7-8",
              omschrijving: "De kandidaat kan voorstellen doen voor de verbetering en/of uitbreiding van een model.",
            },
            {
              id: "nat-a7-9",
              omschrijving: "De kandidaat kan het tot stand komen, de opbouw of het gebruik van een model presenteren.",
            },
          ],
        },
        {
          id: "nat-sub-a8",
          code: "A8",
          titel: "Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            {
              id: "nat-a8-1",
              omschrijving: "De kandidaat kan informatie verwerven en selecteren uit schriftelijke, mondelinge en audiovisuele bronnen mede met behulp van ICT, waaronder gegevens halen uit grafieken, tabellen, tekeningen, simulaties, schema's en diagrammen, en grootheden, eenheden, symbolen, formules en gegevens opzoeken in geschikte tabellen.",
            },
            {
              id: "nat-a8-2",
              omschrijving: "De kandidaat kan informatie, gegevens en meetresultaten analyseren, weergeven en structureren in grafieken, tekeningen, schema's, diagrammen en tabellen mede met behulp van ICT.",
            },
            {
              id: "nat-a8-3",
              omschrijving: "De kandidaat kan uitleggen wat bedoeld wordt met de significantie van meetwaarden en uitkomsten van berekeningen weergeven in het juiste aantal significante cijfers.",
            },
            {
              id: "nat-a8-4",
              omschrijving: "De kandidaat kan aangeven met welke technieken en apparaten de belangrijkste grootheden uit de natuurwetenschappen worden gemeten.",
            },
            {
              id: "nat-a8-5",
              omschrijving: "De kandidaat kan verantwoord omgaan met materialen, instrumenten, organismen en milieu.",
            },
          ],
        },
        {
          id: "nat-sub-a9",
          code: "A9",
          titel: "Waarderen en oordelen",
          leerdoelen: [
            {
              id: "nat-a9-1",
              omschrijving: "De kandidaat kan een beargumenteerd oordeel geven over een situatie waarin natuurwetenschappelijke kennis een belangrijke rol speelt, dan wel een beargumenteerde keuze maken tussen alternatieven bij vraagstukken van natuurwetenschappelijke aard.",
            },
            {
              id: "nat-a9-2",
              omschrijving: "De kandidaat kan onderscheid maken tussen wetenschappelijke argumenten, normatieve maatschappelijke overwegingen en persoonlijke opvattingen.",
            },
            {
              id: "nat-a9-3",
              omschrijving: "De kandidaat kan feiten met bronnen verantwoorden.",
            },
            {
              id: "nat-a9-4",
              omschrijving: "De kandidaat kan de betrouwbaarheid beoordelen van informatie en de waarde daarvan vaststellen voor de beantwoording van het betreffende vraagstuk.",
            },
          ],
        },
        // A10–A15: Natuurkunde – specifieke vaardigheden
        {
          id: "nat-sub-a10",
          code: "A10",
          titel: "Kennisontwikkeling en -toepassing",
          leerdoelen: [
            {
              id: "nat-a10-1",
              omschrijving: "De kandidaat kan in contexten analyseren op welke wijze natuurkundige en technologische kennis wordt ontwikkeld en toegepast.",
            },
          ],
        },
        {
          id: "nat-sub-a11",
          code: "A11",
          titel: "Technisch-instrumentele vaardigheden",
          leerdoelen: [
            {
              id: "nat-a11-1",
              omschrijving: "De kandidaat kan gebruik maken van kennis over materialen, meetinstrumenten en apparaten voor het in de praktijk uitvoeren van experimenten en technisch ontwerpen met betrekking tot de in de domeinen genoemde vakinhoud, waaronder meetlint, maatglas, stopwatch, weegschaal, stemvork, toongenerator, oscilloscoop, GM-teller, krachtmeter, luchtkussenbaan, stroboscoop, (vloeistof)thermometer, veer, filters, spectroscoop, elektroscoop, voedingsapparaat en regelbare weerstand.",
            },
            {
              id: "nat-a11-2",
              omschrijving: "De kandidaat kan gebruik maken van kennis over ICT-toepassingen voor het uitvoeren van experimenten en modelstudies met betrekking tot de in de domeinen genoemde vakinhoud, waaronder computer met sensoren, lichtpoortje, videometen, meetprogrammatuur, modelleerprogrammatuur en programmatuur voor het verwerken en analyseren van meetgegevens.",
            },
          ],
        },
        {
          id: "nat-sub-a12",
          code: "A12",
          titel: "Rekenkundige en wiskundige vaardigheden",
          leerdoelen: [
            {
              id: "nat-a12-1",
              omschrijving: "De kandidaat kan basisrekenvaardigheden uitvoeren, waaronder rekenen met verhoudingen, procenten, breuken, machten en wortels, de omtrek en oppervlakte berekenen van een cirkel, driehoek en rechthoek, de oppervlakte van een bol en cilinder berekenen, het volume berekenen van een balk, cilinder en bol, en absolute waarde toepassen.",
            },
            {
              id: "nat-a12-2",
              omschrijving: "De kandidaat kan wiskundige technieken toepassen, waaronder herleiden en substitueren van formules, redeneren met evenredigheden, oplossen van lineaire en tweedegraads vergelijkingen, toepassen van log x, ln x, e-ax, eax, ax, xa, sin x en cos x, gebruik van sinus, cosinus, tangens en de stelling van Pythagoras, gelijkvormigheid bij driehoeken, grafisch optellen en ontbinden van vectoren, grafieken tekenen bij een meetserie, coördinatentransformatie, differentiëren van lineaire en kwadratische functies, machtsfuncties, sinusfuncties en cosinusfuncties, het tekenen van de raaklijn aan een kromme en de steilheid bepalen, en de oppervlakte onder een grafiek bepalen.",
            },
          ],
        },
        {
          id: "nat-sub-a13",
          code: "A13",
          titel: "Vaktaal",
          leerdoelen: [
            {
              id: "nat-a13-1",
              omschrijving: "De kandidaat kan in formules de betekenis van de symbolen en notaties aangeven.",
            },
            {
              id: "nat-a13-2",
              omschrijving: "De kandidaat kan in formules onderscheid maken tussen afhankelijke en onafhankelijke variabelen, parameters en constanten, afhankelijk van de situatie.",
            },
          ],
        },
        {
          id: "nat-sub-a14",
          code: "A14",
          titel: "Vakspecifiek gebruik van de computer",
          leerdoelen: [
            {
              id: "nat-a14-1",
              omschrijving: "De kandidaat kan numerieke modellen hanteren in contexten binnen alle subdomeinen, waaronder een numeriek model ontwerpen, een bestaand rekenmodel omzetten naar een numeriek model, een numeriek model interpreteren, analyseren en de onderliggende natuurkunde herkennen, een incompleet numeriek model aanvullen, een numeriek model aanpassen aan een gewijzigde natuurkundige situatie, en een numeriek model evalueren op basis van uitkomsten, verwachtingen en (meet)gegevens.",
              begrippen: ["modelregel", "startwaarde", "stopvoorwaarde", "stapgrootte", "iteratief proces"],
            },
            {
              id: "nat-a14-2",
              omschrijving: "De kandidaat kan de computer gebruiken bij het visualiseren van verschijnselen en processen, en voor het verwerken van gegevens.",
            },
          ],
        },
        {
          id: "nat-sub-a15",
          code: "A15",
          titel: "Kwantificeren en interpreteren",
          leerdoelen: [
            {
              id: "nat-a15-1",
              omschrijving: "De kandidaat kan gebruik maken van beredeneerde schattingen voor onbekende grootheden bij het oplossen van natuurkundige vraagstukken.",
            },
            {
              id: "nat-a15-2",
              omschrijving: "De kandidaat kan met behulp van formules berekeningen uitvoeren met bekende grootheden en daarbij de juiste formules en eenheden hanteren, inclusief het omrekenen, afleiden en controleren van eenheden en het herleiden tot SI-grondeenheden, en vooraf de orde van grootte van een grootheid of uitkomst inschatten en achteraf beoordelen in hoeverre de uitkomst van een vraagstuk juist kan zijn.",
            },
            {
              id: "nat-a15-3",
              omschrijving: "De kandidaat kan van een grafiek op basis van de grootheden op de assen de helling en de oppervlakte onder de grafiek interpreteren als een natuurkundige grootheid.",
            },
            {
              id: "nat-a15-4",
              omschrijving: "De kandidaat kan in formules de invloed van veranderingen van variabelen op elkaar aangeven, eventuele natuurkundige beperkingen bespreken die voor de toepasbaarheid van de formule gelden, en bekende wiskundige patronen herkennen.",
            },
            {
              id: "nat-a15-5",
              omschrijving: "De kandidaat kan verschillen en overeenkomsten herkennen in wiskundige vergelijkingen en natuurwetenschappelijke formules.",
            },
            {
              id: "nat-a15-6",
              omschrijving: "De kandidaat kan een formule herschrijven naar een andere afhankelijke variabele.",
            },
          ],
        },
      ],
    },

    // ─── DOMEIN B: GOLVEN ─────────────────────────────────────────────────────
    {
      id: "nat-dom-b",
      code: "B",
      titel: "Golven",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-b1",
          code: "B1",
          titel: "Informatieoverdracht",
          leerdoelen: [
            {
              id: "nat-b1-1",
              omschrijving: "De kandidaat kan trillingsverschijnselen analyseren en grafisch weergeven, aan de hand van een numeriek model het verband laten zien tussen de natuurkundige voorwaarde van een harmonische trilling (kracht evenredig met en tegengesteld gericht aan de uitwijking) en de wiskundige beschrijving ervan (sinusfunctie).",
              begrippen: ["periode", "gereduceerde fase", "faseverschil"],
            },
            {
              id: "nat-b1-2",
              omschrijving: "De kandidaat kan berekeningen maken aan de eigentrilling van een massa-veersysteem.",
              begrippen: ["eigenfrequentie", "resonantie"],
            },
            {
              id: "nat-b1-3",
              omschrijving: "De kandidaat kan golfverschijnselen analyseren en grafisch weergeven, gebruiken dat geluid een golfverschijnsel is.",
              begrippen: ["gereduceerde fase", "faseverschil", "lopende golf", "voortplantingssnelheid", "geluidsnelheid", "echo", "lichtsnelheid", "transversaal", "longitudinaal"],
            },
            {
              id: "nat-b1-4",
              omschrijving: "De kandidaat kan bij een staande golf het verband tussen de golflengte en de lengte van het trillende medium analyseren, minimaal in de context van muziekinstrumenten.",
              begrippen: ["knoop", "buik", "grondtoon", "boventoon"],
            },
            {
              id: "nat-b1-5",
              omschrijving: "De kandidaat kan uit (u,t) en (u,x)-diagrammen de fysische eigenschappen van de trillingen en golven bepalen, minimaal in de context van cardiogram en oscillogram.",
            },
            {
              id: "nat-b1-6",
              omschrijving: "De kandidaat kan uitleggen hoe de waargenomen golflengte en frequentie van een golf veranderen als bron en ontvanger ten opzichte van elkaar bewegen.",
              begrippen: ["dopplereffect"],
            },
          ],
          formules: [
            "f = 1/T",
            "v = fλ",
            "T = 2π√(m/C)",
            "Δφ = Δt/T",
            "Δφ = Δx/λ",
            "v_max = 2πA/T",
            "u = A·sin(2π/T · t)",
            "l = n·½λ (staande golf, beide uiteinden vast of beide open)",
            "l = (2n−1)·¼λ (staande golf, één uiteinde open)",
          ],
        },
        {
          id: "nat-sub-b2",
          code: "B2",
          titel: "Medische beeldvorming",
          leerdoelen: [
            {
              id: "nat-b2-1",
              omschrijving: "De kandidaat kan uitzending, voortplanting en opname van elektromagnetische straling beschrijven.",
              begrippen: ["absorptie", "emissie", "elektromagnetische golf", "foton"],
            },
            {
              id: "nat-b2-2",
              omschrijving: "De kandidaat kan de verschillende soorten ioniserende straling, hun ontstaan en hun eigenschappen benoemen, evenals de risico's van deze soorten straling voor mens en milieu, en berekeningen maken met (equivalente) dosis. Daarbij kan de kandidaat de activiteit op een bepaald moment berekenen en bepalen uit een (N,t)-diagram, en de vergelijking opstellen van een kernreactie.",
              begrippen: ["stralingsbron", "radioactief verval", "isotoop", "kern", "proton", "neutron", "elektron", "atomaire massaeenheid", "ioniserend en doordringend vermogen", "dracht", "röntgenstraling", "α-straling", "β-straling", "γ-straling", "kosmische straling", "achtergrondstraling", "bestraling", "besmetting", "effectieve totale lichaamsdosis", "dosimeter"],
            },
            {
              id: "nat-b2-3",
              omschrijving: "De kandidaat kan problemen oplossen waarbij de halveringstijd of halveringsdikte een rol speelt, minimaal in de context van medische diagnostiek.",
              begrippen: ["doorlaatkromme", "vervalkromme"],
            },
            {
              id: "nat-b2-4",
              omschrijving: "De kandidaat kan medische beeldvormingstechnieken aan de hand van hun natuurkundige achtergrond beschrijven, voor- en nadelen van deze technieken noemen en op grond daarvan in gegeven situaties een keuze voor een techniek beargumenteren. Beeldvormingstechnieken: röntgenopname, CT-scan, MRI-scan, PET-scan, echografie en nucleaire diagnostiek.",
            },
          ],
          formules: [
            "E = hf",
            "c = fλ",
            "A = −dN/dt",
            "A = (ln2/t½) · N",
            "D = E/m",
            "H = w_R · D",
            "A = N + Z",
            "A(t) = A₀ · (½)^(t/t½)",
            "N(t) = N₀ · (½)^(t/t½)",
            "I(d) = I₀ · (½)^(d/d½)",
          ],
        },
      ],
    },

    // ─── DOMEIN C: BEWEGING EN WISSELWERKING ──────────────────────────────────
    {
      id: "nat-dom-c",
      code: "C",
      titel: "Beweging en wisselwerking",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-c1",
          code: "C1",
          titel: "Kracht en beweging",
          leerdoelen: [
            {
              id: "nat-c1-1",
              omschrijving: "De kandidaat kan berekeningen maken aan eenparige rechtlijnige bewegingen.",
            },
            {
              id: "nat-c1-2",
              omschrijving: "De kandidaat kan eigenschappen van bewegingen bepalen aan de hand van plaats-tijddiagrammen en snelheid-tijddiagrammen, waaronder de volgende bewegingen herkennen: eenparige rechtlijnige beweging, eenparig versnelde / vertraagde beweging, vrije val, valbeweging met wrijving. De kandidaat kan uit een (x,t)-diagram de gemiddelde snelheid en de snelheid op een bepaald moment bepalen, en uit een (v,t)-diagram de (val)versnelling op een bepaald moment en de verplaatsing en gemiddelde snelheid bepalen.",
            },
            {
              id: "nat-c1-3",
              omschrijving: "De kandidaat kan krachten op een systeem analyseren zowel aan de hand van een vectortekening als met behulp van goniometrische relaties, waaronder het samenstellen van en ontbinden in componenten en het bepalen van de grootte en/of richting van krachten. Krachten: zwaartekracht, schuifwrijvingskracht, rolweerstandskracht, luchtweerstandskracht, normaalkracht, spankracht, spierkracht, veerkracht.",
            },
            {
              id: "nat-c1-4",
              omschrijving: "De kandidaat kan de eerste wet van Newton uitleggen en toepassen.",
              begrippen: ["traagheid"],
            },
            {
              id: "nat-c1-5",
              omschrijving: "De kandidaat kan de tweede wet van Newton uitleggen en toepassen.",
            },
            {
              id: "nat-c1-6",
              omschrijving: "De kandidaat kan de derde wet van Newton uitleggen en toepassen.",
              begrippen: ["actiekracht", "reactiekracht", "gewicht"],
            },
          ],
          formules: [
            "s = v·t (v constant)",
            "v_gem = Δx/Δt",
            "a_gem = Δv/Δt",
            "v = dx/dt",
            "a = dv/dt",
            "F_z = mg",
            "F_v = C·u",
            "F_w = ½ρcA·v²",
            "F_s,max = f·F_N",
            "F_res = Σ F_i = m·a",
            "F_AB = −F_BA",
          ],
        },
        {
          id: "nat-sub-c2",
          code: "C2",
          titel: "Energie en wisselwerking",
          leerdoelen: [
            {
              id: "nat-c2-1",
              omschrijving: "De kandidaat kan berekeningen maken met betrekking tot kracht, verplaatsing, arbeid, snelheid en vermogen, waaronder de arbeid bepalen uit een kracht-verplaatsingsdiagram.",
            },
            {
              id: "nat-c2-2",
              omschrijving: "De kandidaat kan energieomzettingen analyseren, de wet van behoud van energie en de relatie tussen arbeid en kinetische energie toepassen. Minimaal de bewegingen: vrije val, valbeweging met wrijving, verticale worp, trilling en stuiterbeweging. Energieën: kinetische energie, zwaarte-energie, veerenergie, chemische energie, elektrische energie, stralingsenergie, warmte. Minimaal in de contexten: energiegebruik en energiebesparing in het verkeer, de bewegende mens.",
              begrippen: ["potentiële energie", "positieve en negatieve arbeid", "wrijvingsarbeid", "periodieke beweging"],
            },
          ],
          formules: [
            "W = F·s·cosα",
            "P = E/t",
            "P = W/t",
            "P = F·v",
            "E_k = ½mv²",
            "E_z = mgh",
            "E_v = ½Cu²",
            "E_ch = r_V · V",
            "E_ch = r_m · m",
            "ΣW = ΔE_k",
            "ΣE_in = ΣE_uit",
            "η = E_nuttig/E_in = P_nuttig/P_in",
          ],
        },
        {
          id: "nat-sub-c3",
          code: "C3",
          titel: "Gravitatie",
          leerdoelen: [
            {
              id: "nat-c3-1",
              omschrijving: "De kandidaat kan cirkelbewegingen met constante baansnelheid analyseren, berekeningen maken aan de middelpuntzoekende kracht alleen in situaties waarin slechts één kracht de rol van middelpuntzoekende kracht heeft.",
              begrippen: ["omlooptijd", "baanstraal", "baansnelheid"],
            },
            {
              id: "nat-c3-2",
              omschrijving: "De kandidaat kan bewegingen van voorwerpen in een gravitatieveld analyseren met behulp van de gravitatiekracht en de gravitatie-energie, het verband toepassen tussen ontsnappingssnelheid en de massa en straal van een hemellichaam, uitleggen hoe de valversnelling aan het planeetoppervlak afhangt van de massa en de straal van de planeet. Minimaal in de contexten: maan, planeet, satelliet.",
              begrippen: ["gravitatiewisselwerking", "geostationaire baan"],
            },
          ],
          formules: [
            "F_g = G·mM/r²",
            "E_g = −G·mM/r",
            "F_mpz = mv²/r",
            "v = 2πr/T",
          ],
        },
      ],
    },

    // ─── DOMEIN D: LADING EN VELD ─────────────────────────────────────────────
    {
      id: "nat-dom-d",
      code: "D",
      titel: "Lading en veld",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-d1",
          code: "D1",
          titel: "Elektrische systemen",
          leerdoelen: [
            {
              id: "nat-d1-1",
              omschrijving: "De kandidaat kan het verschijnsel elektrische stroom uitleggen als verplaatsing van lading ten gevolge van een aangelegde spanning, en de definities van stroomsterkte, spanning en soortelijke weerstand gebruiken.",
              begrippen: ["vrij elektron", "ion", "elementaire lading", "spanningsbron", "batterij", "accu", "geleider", "isolator"],
            },
            {
              id: "nat-d1-2",
              omschrijving: "De kandidaat kan stroomkringen analyseren en daarbij voor serie- en parallelschakelingen berekeningen maken over spanning, stroomsterkte en weerstand. Bij gemengde schakelingen alleen beredeneren en eenvoudige berekeningen maken. De juiste aansluitwijze van stroommeter en spanningsmeter toepassen. De volgende componenten toepassen binnen een schakeling: diode, LDR, NTC, PTC, ohmse weerstand, lamp, motor, verwarmingselement, zekering, aardlekschakelaar. Schakelschema's tekenen en interpreteren.",
              begrippen: ["stroomdeling", "spanningsdeling", "kortsluiting"],
            },
            {
              id: "nat-d1-3",
              omschrijving: "De kandidaat kan het vermogen en het rendement van energieomzettingen in een elektrische stroomkring analyseren, berekeningen aan elektrische energie in joule en in kilowattuur. Minimaal in de contexten: lichtbronnen en apparaten in huis (gloeilamp, spaarlamp, LED, elektromotor, verwarmingselement en kWh-meter), energiegebruik, energiebesparing, opwekking van elektriciteit.",
            },
          ],
          formules: [
            "I = Q/t",
            "U = ΔE/Q",
            "ρ = R·A/l",
            "U = I·R",
            "Serie: U_tot = U₁ + U₂ + ..., I_tot = I₁ = I₂ = ..., R_tot = R₁ + R₂ + ...",
            "Parallel: U_tot = U₁ = U₂ = ..., I_tot = I₁ + I₂ + ..., 1/R_tot = 1/R₁ + 1/R₂ + ...",
            "P = U·I",
            "E = P·t",
            "η = E_nuttig/E_in = P_nuttig/P_in",
          ],
        },
        {
          id: "nat-sub-d2",
          code: "D2",
          titel: "Elektrische en magnetische velden",
          leerdoelen: [
            {
              id: "nat-d2-1",
              omschrijving: "De kandidaat kan een elektrisch veld beschrijven als gevolg van de aanwezigheid van elektrische lading, en de richting van het elektrisch veld bepalen.",
              begrippen: ["afstotende en aantrekkende elektrische kracht", "homogeen en radiaal elektrisch veld", "veldlijn"],
            },
            {
              id: "nat-d2-2",
              omschrijving: "De kandidaat kan het verband tussen spanning en kinetische energie toepassen op een geladen deeltje in een homogeen elektrisch veld, elektrische energie als vorm van potentiële energie gebruiken, en de eenheid elektronvolt uitleggen. Minimaal in de contexten: röntgenbuis, lineaire versneller.",
            },
            {
              id: "nat-d2-3",
              omschrijving: "De kandidaat kan een magnetisch veld beschrijven als gevolg van de aanwezigheid van bewegende elektrische lading, de richting van het magnetisch veld bepalen bij een permanente magneet, een rechte stroomdraad en een spoel. Minimaal in de context: aardmagnetisch veld.",
              begrippen: ["homogeen en inhomogeen magnetisch veld", "veldlijn", "elektromagneet"],
            },
            {
              id: "nat-d2-4",
              omschrijving: "De kandidaat kan het effect van een magnetisch veld op een elektrische stroom en op bewegende lading beschrijven, de grootte en richting van de lorentzkracht bepalen. Minimaal in de contexten: elektromotor, luidspreker.",
            },
            {
              id: "nat-d2-5",
              omschrijving: "De kandidaat kan elektromagnetische inductieverschijnselen in verschillende situaties analyseren, gebruik maken van de definitie van flux, toepassen dat de inductiespanning rechtevenredig is met het aantal windingen en met de fluxverandering per tijdseenheid. Minimaal in de situaties: een bewegende magneet in een spoel en een draaiend draadraam in een homogeen magneetveld. Minimaal in de contexten: dynamo, microfoon.",
            },
          ],
          formules: [
            "F_el = f·qQ/r²",
            "F_el = q·E",
            "ΔE_k = −ΔE_el",
            "ΔE_el = q·U",
            "F_L = B·I·l",
            "F_L = B·q·v",
            "Φ = B_⊥ · A",
            "U_ind ∝ N",
            "U_ind ∝ dΦ/dt",
          ],
        },
      ],
    },

    // ─── DOMEIN E: STRALING EN MATERIE (alleen E2 is CE) ─────────────────────
    {
      id: "nat-dom-e",
      code: "E",
      titel: "Straling en materie",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-e2",
          code: "E2",
          titel: "Elektromagnetische straling en materie",
          leerdoelen: [
            {
              id: "nat-e2-1",
              omschrijving: "De kandidaat kan voor gebonden elektronen uit energieniveauschema's golflengtes en frequenties van spectraallijnen bepalen, en absorptie- en emissiespectra verklaren aan de hand van energieniveauschema's. Minimaal in de context: atomen.",
              begrippen: ["foton", "grondtoestand", "aangeslagen toestand", "ionisatie-energie"],
            },
            {
              id: "nat-e2-2",
              omschrijving: "De kandidaat kan het licht van sterren analyseren, in de context van een Hertzsprung-Russelldiagram temperatuur, totaal stralingsvermogen en straal hanteren als eigenschappen van sterren, met behulp van het dopplereffect de radiale snelheid van sterren analyseren aan de hand van het spectrum, en een uitspraak doen over de aanwezigheid van elementen in sterren aan de hand van het spectrum.",
              begrippen: ["fraunhoferlijn", "roodverschuiving", "blauwverschuiving"],
            },
            {
              id: "nat-e2-3",
              omschrijving: "De kandidaat kan het gegeven dat kernfusie van waterstof de belangrijkste energiebron van sterren is benoemen en toepassen.",
              begrippen: ["massadefect"],
            },
            {
              id: "nat-e2-4",
              omschrijving: "De kandidaat kan het verband tussen de uitgezonden golflengtes en de temperatuur beschrijven en toepassen, de wet van Wien toepassen. Minimaal in de contexten: gloeilampen, sterren.",
              begrippen: ["planck-kromme", "continu spectrum"],
            },
            {
              id: "nat-e2-5",
              omschrijving: "De kandidaat kan verklaren hoe de op aarde waargenomen intensiteit van een ster samenhangt met het totale stralingsvermogen van de ster en de afstand tot de ster, de wet van Stefan-Boltzmann toepassen. Minimaal in de context: zon.",
            },
            {
              id: "nat-e2-6",
              omschrijving: "De kandidaat kan beschrijven hoe in het totale spectrum van elektromagnetische straling waarnemingen aan het heelal worden verricht, aan de hand van geschikte tabellen en andere bronnen de verschillende onderdelen van het elektromagnetisch spectrum en de eigenschappen van deze stralingssoorten beschrijven: gammastraling, röntgenstraling, ultraviolet, (zichtbaar) licht, infrarood, radiogolven, microgolven.",
            },
          ],
          formules: [
            "E_f = hf",
            "E_f = hc/λ",
            "E_f = E_m − E_n",
            "Δv/c = Δλ/λ",
            "E = mc²",
            "λ_max · T = k_W",
            "I = P_bron / (4πr²)",
            "P_bron = σ·A·T⁴",
          ],
        },
      ],
    },

    // ─── DOMEIN F: QUANTUMWERELD EN RELATIVITEIT (alleen F1 is CE) ───────────
    {
      id: "nat-dom-f",
      code: "F",
      titel: "Quantumwereld en relativiteit",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-f1",
          code: "F1",
          titel: "Quantumwereld",
          leerdoelen: [
            {
              id: "nat-f1-1",
              omschrijving: "De kandidaat kan toelichten in hoeverre licht golf- en deeltjesgedrag vertoont, het ontstaan van diffractie toelichten bij een enkelspleet, uitleggen hoe en onder welke voorwaarden maxima en minima ontstaan bij een dubbelspleet, rekenen aan de maxima bij een tralie, interferentiepatronen interpreteren als waarschijnlijkheidsverdelingen voor de detectie van fotonen, en het principe toepassen dat informatie over de genomen weg eventuele interferentie voorkomt, minimaal in de context van het dubbelspleet-experiment met welke-spleetdetectie. Constructieve en destructieve interferentie herleiden tot faseverschillen en weglengteverschillen en vice versa. Ondeelbaarheid hanteren als kenmerkende deeltjeseigenschap, voor een foton minimaal in de context van specificatie E2.1.",
            },
            {
              id: "nat-f1-2",
              omschrijving: "De kandidaat kan toelichten in hoeverre elektronen golf- en deeltjesgedrag vertonen, analoog aan specificatie 1, en berekeningen maken met de debroglie-golflengte. Minimaal in de context: diffractie aan kristalroosters.",
            },
            {
              id: "nat-f1-3",
              omschrijving: "De kandidaat kan quantumverschijnselen beschrijven bij enkele modellen voor opgesloten deeltjes: een deeltje in een oneindig diepe één-dimensionale energieput kwalitatief beschrijven met behulp van knopen en buiken in een golffunctie en de mogelijke energieën berekenen, hanteren dat bij een eindig diepe één-dimensionale energieput de golffunctie exponentieel afnemend doorloopt in de barrière, het energiespectrum van het waterstofatoom hanteren en toelichten dat het discrete karakter samenhangt met het ontstaan van knopen en buiken in de golffunctie voor het elektron, en (het kwadraat van) de plaatsafhankelijke amplitude van een golffunctie interpreteren als een maat voor de waarschijnlijkheid om het deeltje ter plekke aan te treffen.",
              begrippen: ["quantisatie", "grondtoestand", "aangeslagen toestand", "tunnelen"],
            },
            {
              id: "nat-f1-4",
              omschrijving: "De kandidaat kan het principe toepassen dat zich maximaal één elektron in dezelfde toestand kan bevinden, het fenomeen elektronspin hanteren als een magneetje dat met een extern magneetveld mee kan staan of er tegenin, benoemen dat in vaste stoffen de discrete atomaire toestanden combineren tot vrijwel continue energiebanden met daartussen eventuele band gaps, en materialen en elektrische componenten analyseren aan de hand van het concept band gap: bij een zonnecel, bij het onderscheid maken tussen geleiders, halfgeleiders en isolatoren, en bij de werking van een LDR en een NTC.",
              begrippen: ["uitsluitingsprincipe van Pauli"],
            },
          ],
          formules: [
            "λ = h/(mv)",
            "d·sinα_n = n·λ",
            "E_f = hf",
            "E_n = −13,6/n² (in eV)",
            "E_n = n²·h²/(8mL²)",
          ],
        },
      ],
    },

    // ─── DOMEIN H: NATUURWETTEN EN MODELLEN ───────────────────────────────────
    {
      id: "nat-dom-h",
      code: "H",
      titel: "Natuurwetten en modellen",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "nat-sub-h",
          code: "H",
          titel: "Natuurwetten en modellen",
          leerdoelen: [
            {
              id: "nat-h-1",
              omschrijving: "De kandidaat kan in voorbeelden die passen bij de specificaties van de vwo-domeinen fundamentele natuurkundige principes en wetmatigheden herkennen, benoemen en toepassen. Principes: universaliteit, schaalonafhankelijkheid, denken in ordes van grootte, analogie. Wetmatigheden: behoudswetten, wetten van Newton, kwadratenwet.",
              begrippen: ["natuurwet", "natuurconstante", "verband", "vergelijking"],
            },
            {
              id: "nat-h-2",
              omschrijving: "De kandidaat kan voorbeelden die passen bij de specificaties van de vwo-domeinen gebruiken om toe te lichten hoe het begrip model in de natuurkunde wordt gehanteerd en de grenzen van de toepasbaarheid en betrouwbaarheid van een bepaald model voor een fysisch verschijnsel beoordelen. Het inzicht toepassen dat een model een vereenvoudigde weergave van de werkelijkheid is en dit relateren aan de beperkte toepasbaarheid van het model. Onderscheid maken tussen een denkmodel, schaalmodel, numeriek model en computermodel.",
            },
          ],
        },
      ],
    },
  ],
};

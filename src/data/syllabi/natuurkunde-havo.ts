import { VakSyllabus } from "@/types/syllabus";

export const NATUURKUNDE_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "natuurkunde-havo", niveau: "HAVO",
  domeinen: [
    {
      id: "dom-a", naam: "Domein A: Vaardigheden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a5", naam: "A5 — Onderzoeken",
          leerdoelen: [
            {
              id: "nk-ha-a5",
              omschrijving: "instructies voor onderzoek op basis van vraagstellingen uitvoeren en conclusies trekken: (1) probleem herkennen/specificeren; (2) herleiden tot onderzoeksvra(a)g(en); (3) verbanden leggen met kennis; (4) hypothese opstellen; (5) werkplan maken; (6) waarnemingen verrichten en meetgegevens verzamelen; (7) gegevens verwerken en presenteren; (8) conclusies trekken; (9) uitvoering en resultaten evalueren; (10) onderzoek presenteren; (11) herkennen dat er naast experimenteel ook andere onderzoeksaanpakken zijn.",
              begrippen: [],
            },
          ],
        },
        {
          id: "sub-a8", naam: "A8 — Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            {
              id: "nk-ha-a8",
              omschrijving: "informatie verwerven uit schriftelijke, mondelinge en audiovisuele bronnen (grafieken, tabellen, tekeningen, simulaties); gegevens en meetresultaten analyseren en weergeven in grafieken, schema's en tabellen; significantie van meetwaarden toepassen; meetinstrumenten en apparaten voor grootheden benoemen; verantwoord omgaan met materialen en milieu.",
              begrippen: ["significantie", "significante cijfers", "decimalen"],
            },
          ],
        },
        {
          id: "sub-a12", naam: "A12 — Rekenkundige en wiskundige vaardigheden",
          leerdoelen: [
            {
              id: "nk-ha-a12",
              omschrijving: "basisrekenvaardigheden (verhoudingen, procenten, breuken, machten, wortels; omtrek/oppervlak cirkel, driehoek, rechthoek; volume balk, cilinder, bol); wiskundige technieken (herleiden en substitueren van formules; evenredigheden; lineaire en tweedegraadsvergelijkingen; xⁿ; sinus, cosinus, tangens, stelling van Pythagoras; gelijkvormige driehoeken; vectoren grafisch optellen/ontbinden; grafieken tekenen met trendlijn; functieverband lineair; raaklijn aan kromme; oppervlakte onder grafiek).",
              begrippen: [],
            },
          ],
        },
        {
          id: "sub-a15", naam: "A15 — Kwantificeren en interpreteren",
          leerdoelen: [
            {
              id: "nk-ha-a15",
              omschrijving: "beredeneerde schattingen voor onbekende grootheden gebruiken; berekeningen uitvoeren met formules inclusief omrekenen en afleiden van eenheden (SI-grondeenheden); orde van grootte vooraf inschatten en achteraf beoordelen; helling en oppervlakte onder grafiek interpreteren als grootheid; invloed van veranderingen van variabelen op elkaar aangeven; formule herschrijven naar andere afhankelijke variabele.",
              begrippen: ["SI-grondeenheden", "orde van grootte"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-b", naam: "Domein B: Beeld- en geluidstechniek", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b1", naam: "B1 — Informatieoverdracht",
          leerdoelen: [
            {
              id: "nk-ha-b1-1",
              omschrijving: "trillingsverschijnselen analyseren.",
              begrippen: ["uitwijking", "amplitude", "periode", "harmonische trilling"],
            },
            {
              id: "nk-ha-b1-2",
              omschrijving: "berekeningen maken aan de eigentrilling van een massa-veersysteem.",
              begrippen: ["eigenfrequentie", "resonantie"],
              formules: ["f = 1/T", "T = 2π√(m/C)"],
            },
            {
              id: "nk-ha-b1-3",
              omschrijving: "golfverschijnselen analyseren; gebruiken dat geluid een golfverschijnsel is.",
              begrippen: ["lopende golf", "voortplantingssnelheid", "geluidsnelheid", "echo", "lichtsnelheid", "transversaal", "longitudinaal"],
              formules: ["v = f · λ"],
            },
            {
              id: "nk-ha-b1-4",
              omschrijving: "bij een staande golf het verband tussen golflengte en lengte van het trillende medium met behulp van een tekening toelichten. Minimaal in context: muziekinstrumenten.",
              begrippen: ["knoop", "buik", "grondtoon", "boventoon"],
            },
            {
              id: "nk-ha-b1-5",
              omschrijving: "uit (u,t)- en (u,x)-diagrammen de fysische eigenschappen van trillingen en golven bepalen. Minimaal in context: cardiogram, oscillogram.",
              begrippen: [],
            },
          ],
        },
        {
          id: "sub-b2", naam: "B2 — Medische beeldvorming",
          leerdoelen: [
            {
              id: "nk-ha-b2-1",
              omschrijving: "uitzending, voortplanting en opname van elektromagnetische straling beschrijven: verschillende onderdelen van het elektromagnetisch spectrum en de effecten op het menselijk lichaam (gammastraling, röntgenstraling, ultraviolet, zichtbaar licht, infrarood, radiogolven, microgolven).",
              begrippen: ["absorptie", "emissie", "elektromagnetische golf", "foton"],
              formules: ["E = h·f", "c = f·λ"],
            },
            {
              id: "nk-ha-b2-2",
              omschrijving: "de verschillende soorten ioniserende straling, hun ontstaan en eigenschappen benoemen, evenals de risico's; berekeningen maken met (equivalente) dosis; activiteit op een moment bepalen uit een (N,t)-diagram; vergelijking van een vervalreactie opstellen. Minimaal in context: nucleaire diagnostische geneeskunde, stralingsbescherming.",
              begrippen: [
                "stralingsbron", "radioactief verval", "isotoop", "kern", "proton", "neutron", "elektron",
                "atomaire massaeenheid", "ioniserend en doordringend vermogen", "dracht",
                "röntgenstraling", "α-straling", "β⁻-straling", "γ-straling",
                "kosmische straling", "achtergrondstraling",
                "bestraling", "besmetting", "effectieve totale lichaamsdosis",
                "stralingsbeschermingsnormen", "dosimeter", "eV",
              ],
              formules: ["A = ΔN/Δt", "H = w·D", "D = E/m"],
            },
            {
              id: "nk-ha-b2-3",
              omschrijving: "problemen oplossen waarbij de halveringstijd of halveringsdikte een rol speelt (berekeningen alleen bij een geheel aantal halveringstijden of halveringsdiktes). Minimaal in context: medische diagnostiek.",
              begrippen: ["doorlaatkromme", "vervalkromme", "halveringstijd", "halveringsdikte"],
            },
            {
              id: "nk-ha-b2-4",
              omschrijving: "medische beeldvormingstechnieken beschrijven, voor- en nadelen noemen en in gegeven situaties een keuze beargumenteren. Beeldvormingstechnieken: röntgenopname, CT-scan, echografie en nucleaire diagnostiek. Contextuele kennis (niet wendbaar toepasbaar).",
              begrippen: ["halveringsdikte van menselijke weefsels", "ultrasone geluidsgolf", "geluidsnelheid in menselijke weefsels", "transmissie", "terugkaatsing", "tracer"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-c", naam: "Domein C: Beweging en energie", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-c1", naam: "C1 — Kracht en beweging",
          leerdoelen: [
            {
              id: "nk-ha-c1-1",
              omschrijving: "berekeningen maken aan eenparige rechtlijnige bewegingen.",
              begrippen: [],
              formules: ["v_gem = s/t"],
            },
            {
              id: "nk-ha-c1-2",
              omschrijving: "eigenschappen van bewegingen bepalen aan de hand van (x,t)- en (v,t)-diagrammen: eenparige rechtlijnige beweging, eenparig versnelde/vertraagde beweging, vrije val, valbeweging met wrijving; gemiddelde snelheid, momentane snelheid (raaklijn), versnelling (raaklijn), verplaatsing (oppervlakte onder kromme).",
              begrippen: ["eenparige rechtlijnige beweging", "vrije val", "valbeweging met wrijving"],
              formules: ["a_gem = Δv/Δt"],
            },
            {
              id: "nk-ha-c1-3",
              omschrijving: "krachten op een systeem aan de hand van een vectortekening analyseren: samenstellen en ontbinden van krachten (parallellogram); grootte en richting bepalen uit een vectortekening.",
              begrippen: ["zwaartekracht", "schuifwrijvingskracht", "rolweerstandskracht", "luchtweerstandskracht", "normaalkracht", "spankracht", "spierkracht", "veerkracht"],
              formules: ["F_z = m·g", "F = C·u (veerkracht)"],
            },
            {
              id: "nk-ha-c1-4",
              omschrijving: "de eerste wet van Newton uitleggen en toepassen.",
              begrippen: [],
            },
            {
              id: "nk-ha-c1-5",
              omschrijving: "de tweede wet van Newton uitleggen en toepassen.",
              begrippen: [],
              formules: ["F_res = m·a"],
            },
            {
              id: "nk-ha-c1-6",
              omschrijving: "de derde wet van Newton uitleggen en toepassen.",
              begrippen: ["actiekracht", "reactiekracht", "gewicht"],
            },
            {
              id: "nk-ha-c1-7",
              omschrijving: "de momentenwet/hefboomwet toepassen op stilstaande voorwerpen (twee krachten waarvan de werklijnen niet door het draaipunt gaan). Minimaal in context: menselijk lichaam.",
              begrippen: ["zwaartepunt", "aangrijpingspunt", "werklijn", "arm", "moment"],
              formules: ["F₁·r₁ = F₂·r₂"],
            },
          ],
        },
        {
          id: "sub-c2", naam: "C2 — Energieomzettingen",
          leerdoelen: [
            {
              id: "nk-ha-c2-1",
              omschrijving: "berekeningen maken met kracht, verplaatsing, arbeid, snelheid en vermogen (arbeid uit kracht en verplaatsing alleen als richting evenwijdig aan verplaatsing).",
              begrippen: [],
              formules: ["W = F·s", "P = W/t", "P = F·v"],
            },
            {
              id: "nk-ha-c2-2",
              omschrijving: "energieomzettingen analyseren: wet van behoud van energie en relatie arbeid–kinetische energie toepassen; bewegingen: vrije val, valbeweging met wrijving, verticale worp. Minimaal in context: energiegebruik en energiebesparing in het verkeer, de bewegende mens.",
              begrippen: ["kinetische energie", "zwaarte-energie", "chemische energie", "elektrische energie", "stralingsenergie", "warmte", "wrijvingsarbeid"],
              formules: ["E_k = ½·m·v²", "E_z = m·g·h", "E_ch = ρ_V·V (of ρ_m·m)", "W_tot = ΔE_k", "η = E_nuttig / E_in"],
            },
            {
              id: "nk-ha-c2-3",
              omschrijving: "de warmtepomp energetisch beschouwen als een apparaat dat thermische energie verplaatst van koude naar warme plekken en daar een input van energie voor nodig heeft; beargumenteren welke energieën vergeleken moeten worden voor de efficiëntie. Minimaal in context: het verwarmen van een gebouw.",
              begrippen: ["warmtepomp", "efficiëntie"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-d", naam: "Domein D: Materialen", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d1", naam: "D1 — Eigenschappen van stoffen en materialen",
          leerdoelen: [
            {
              id: "nk-ha-d1-1",
              omschrijving: "het moleculaire model van materie gebruiken bij het verklaren van fasen en faseovergangen.",
              begrippen: ["gas", "vloeistof", "vaste stof", "smelten", "stollen", "verdampen", "condenseren", "sublimeren", "rijpen", "molecuul", "atoom"],
            },
            {
              id: "nk-ha-d1-2",
              omschrijving: "warmtetransport verklaren met behulp van materiemodellen; verband tussen warmtestroom en thermische geleidbaarheid uitleggen en eenvoudige berekeningen aan de warmtestroom maken. Minimaal in context: energiebesparing door isolatie.",
              begrippen: ["geleiding", "stroming", "straling"],
              formules: ["P = λ·A·ΔT/d (warmtestroom)"],
            },
            {
              id: "nk-ha-d1-3",
              omschrijving: "temperatuurveranderingen van een stof beschrijven als gevolg van toe- of afvoeren van warmte; temperatuur beschrijven in termen van deeltjesbeweging; absoluut nulpunt uitleggen; soortelijke warmte als stofeigenschap; omrekenen graden Celsius naar kelvin.",
              begrippen: ["soortelijke warmte", "absoluut nulpunt", "kelvin"],
              formules: ["Q = c·m·ΔT", "ρ = m/V"],
            },
            {
              id: "nk-ha-d1-4",
              omschrijving: "debiet hanteren als maat voor de grootte van een gas- of vloeistofstroom. Minimaal in context: stroming door buizen.",
              begrippen: ["debiet"],
              formules: ["Q/Δt = ΔV/Δt = A·v"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-e", naam: "Domein E: Aarde en heelal", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e1", naam: "E1 — Zonnestelsel en heelal",
          leerdoelen: [
            {
              id: "nk-ha-e1-1",
              omschrijving: "de structuur van het zonnestelsel beschrijven; waarnemingen van maanfasen en de hemelbaan van zon, maan en sterren interpreteren.",
              begrippen: ["planeet", "komeet", "meteoriet"],
            },
            {
              id: "nk-ha-e1-2",
              omschrijving: "cirkelbewegingen met constante baansnelheid analyseren; berekeningen aan de middelpuntzoekende kracht (alleen in situaties waarin één kracht de rol van middelpuntzoekende kracht heeft).",
              begrippen: ["omlooptijd", "baanstraal", "baansnelheid"],
              formules: ["F_mpz = m·v²/r", "v = 2π·r/T"],
            },
            {
              id: "nk-ha-e1-3",
              omschrijving: "de baan van planeten om de zon en van maan en satellieten om de aarde analyseren met behulp van de gravitatiekracht; uitleggen hoe de valversnelling aan het planeetoppervlak afhangt van massa en straal van de planeet.",
              begrippen: ["geostationaire baan"],
              formules: ["F_g = G·m·M/r²"],
            },
            {
              id: "nk-ha-e1-4",
              omschrijving: "het ontstaan, de structuur en de ontwikkeling van het heelal beschrijven; uitleggen hoe afstand van een ster en de tijd tussen uitzenden en waarnemen van licht samenhangen; de wet van Wien gebruiken.",
              begrippen: ["oerknal", "uitdijend heelal", "lichtsnelheid", "lichtjaar", "Melkweg", "zonnestelsel", "cluster", "sterrenstelsel", "planetenstelsel"],
              formules: ["T·λ_max = k (wet van Wien)"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-g", naam: "Domein G: Meten en regelen", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-g1", naam: "G1 — Gebruik van elektriciteit",
          leerdoelen: [
            {
              id: "nk-ha-g1-1",
              omschrijving: "het verschijnsel elektrische stroom uitleggen als verplaatsing van lading ten gevolge van een aangelegde spanning; definitie van stroomsterkte en soortelijke weerstand gebruiken.",
              begrippen: ["vrij elektron", "ion", "afstotende en aantrekkende elektrische kracht", "spanningsbron", "geleider", "isolator"],
              formules: ["I = Q/t", "ρ = R·A/L"],
            },
            {
              id: "nk-ha-g1-2",
              omschrijving: "stroomkringen analyseren; berekeningen voor serie- en parallelschakelingen van weerstanden (spanning, stroomsterkte, weerstand); bij gemengde schakelingen beredeneren en eenvoudige berekeningen; schakelschema's tekenen en interpreteren; componenten: diode, LDR, NTC, PTC, ohmse weerstand, lamp, motor, verwarmingselement, zekering, aardlekschakelaar.",
              begrippen: ["stroomdeling", "spanningsdeling", "kortsluiting"],
              formules: [
                "U = I·R",
                "Serieschakeling: U_tot = U₁ + U₂ + ...; I_tot = I₁ = I₂ = ...; R_tot = R₁ + R₂ + ...",
                "Parallelschakeling: U_tot = U₁ = U₂ = ...; I_tot = I₁ + I₂ + ...; 1/R_tot = 1/R₁ + 1/R₂ + ...",
              ],
            },
            {
              id: "nk-ha-g1-3",
              omschrijving: "het vermogen en het rendement van energieomzettingen in een elektrische stroomkring analyseren; berekeningen aan elektrische energie in joule en in kilowattuur. Minimaal in context: lichtbronnen en apparaten in huis (gloeilamp, spaarlamp, LED, elektromotor, verwarmingselement, kWh-meter), energiegebruik, energiebesparing.",
              begrippen: [],
              formules: ["P = U·I", "E = P·t", "η = P_nuttig / P_in"],
            },
            {
              id: "nk-ha-g1-4",
              omschrijving: "de energie-omzetting bij verschillende opwekkingsvormen van elektriciteit beschrijven en vergelijken t.a.v. duurzaamheid en energiedichtheid. Opwekkingsvormen: kerncentrale, conventionele (fossiele brandstof) centrale, waterkrachtcentrale, zonnecel, waterstof-/brandstofcel, windturbine. Apparaat: generator.",
              begrippen: ["energiedichtheid"],
            },
            {
              id: "nk-ha-g1-5",
              omschrijving: "verschillende vormen van transport en opslag van elektriciteit beschrijven; gebruiken dat bij elektrolyse van water elektrische energie gebruikt wordt om waterstof te produceren. Opslagvormen: batterij, accu, waterstof en andere brandstoffen. Vormen van transport: elektriciteitskabels, vervoer van waterstof en andere brandstoffen.",
              begrippen: ["energiedichtheid", "capaciteit"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-h", naam: "Domein H: Natuurkunde en technologie", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-h", naam: "H — Natuurkunde en technologie",
          leerdoelen: [
            {
              id: "nk-ha-h",
              omschrijving: "voorbeelden die passen bij de specificaties van de havo-domeinen gebruiken om de wederzijdse beïnvloeding van technologie en natuurkundige kennis toe te lichten; fysische principes en wetmatigheden toepassen op technologische ontwikkelingen.",
              begrippen: ["model als vereenvoudigde weergave van de werkelijkheid", "analogie", "denken in ordes van grootte", "wet van behoud van energie", "wetten van Newton"],
            },
          ],
        },
      ],
    },
  ],
};

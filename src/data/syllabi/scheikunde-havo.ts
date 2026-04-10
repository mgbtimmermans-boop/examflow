import { VakSyllabus } from "@/types/syllabus";

export const SCHEIKUNDE_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "scheikunde-havo",
  niveau: "HAVO",
  domeinen: [
    {
      id: "dom-a",
      naam: "Domein A: Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a5",
          naam: "A5 — Onderzoeken",
          leerdoelen: [
            { id: "a5-1", omschrijving: "een natuurwetenschappelijk probleem herkennen en specificeren" },
            { id: "a5-2", omschrijving: "een natuurwetenschappelijk probleem herleiden tot een of meerdere onderzoeksvragen" },
            { id: "a5-3", omschrijving: "verbanden leggen tussen een onderzoeksvraag en natuurwetenschappelijke kennis" },
            { id: "a5-4", omschrijving: "een hypothese opstellen bij een onderzoeksvraag en verwachtingen formuleren" },
            { id: "a5-5", omschrijving: "een werkplan maken voor het uitvoeren van een natuurwetenschappelijk onderzoek" },
            { id: "a5-6", omschrijving: "voor de beantwoording van een onderzoeksvraag relevante waarnemingen verrichten en meetgegevens verzamelen" },
            { id: "a5-7", omschrijving: "meetgegevens verwerken en presenteren op een wijze die helpt bij de beantwoording van een onderzoeksvraag" },
            { id: "a5-8", omschrijving: "op grond van verzamelde gegevens conclusies trekken die aansluiten bij de onderzoeksvragen" },
            { id: "a5-9", omschrijving: "de uitkomsten en de resultaten van een onderzoek evalueren" },
            { id: "a5-10", omschrijving: "een natuurwetenschappelijk onderzoek op een geschikte manier presenteren" },
            { id: "a5-11", omschrijving: "herkennen dat er naast een experimentele onderzoeksaanpak ook andere onderzoeksaanpakken zijn" },
          ],
        },
        {
          id: "sub-a8",
          naam: "A8 — Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            { id: "a8-1", omschrijving: "informatie verwerven en selecteren uit schriftelijke, mondelinge en audiovisuele bronnen: gegevens halen uit grafieken, tabellen, tekeningen, simulaties, schema's en diagrammen" },
            { id: "a8-2", omschrijving: "informatie, gegevens en meetresultaten analyseren, weergeven en structureren in grafieken, tekeningen, schema's, diagrammen en tabellen" },
            { id: "a8-3", omschrijving: "uitleggen wat bedoeld wordt met de significantie van meetwaarden en uitkomsten van berekeningen weergeven in het juiste aantal significante cijfers" },
            {
              id: "a8-4",
              omschrijving: "een aantal voor het vak relevante reken- en wiskundige vaardigheden toepassen: rekenen met verhoudingen, procenten, machten; berekeningen uitvoeren met bekende grootheden en relaties; omwerken van wiskundige betrekkingen; rekenen met logaritmen in relatie tot pH en pOH",
              formules: [
                "pH = −log[H⁺]",
                "pOH = −log[OH⁻]",
                "pH + pOH = 14,00 (bij 298 K)",
                "[H⁺] = 10⁻ᵖᴴ",
                "[OH⁻] = 10⁻ᵖᴼᴴ",
              ],
            },
          ],
        },
        {
          id: "sub-a9",
          naam: "A9 — Waarderen en oordelen",
          leerdoelen: [
            { id: "a9-1", omschrijving: "een beargumenteerd oordeel geven over een situatie waarin natuurwetenschappelijke kennis een belangrijke rol speelt, dan wel een beargumenteerde keuze maken tussen alternatieven" },
            { id: "a9-2", omschrijving: "een onderscheid maken tussen wetenschappelijke argumenten, normatieve maatschappelijke overwegingen en persoonlijke opvattingen" },
            { id: "a9-3", omschrijving: "feiten met bronnen verantwoorden" },
            { id: "a9-4", omschrijving: "de betrouwbaarheid beoordelen van informatie en de waarde daarvan vaststellen voor de beantwoording van het vraagstuk" },
          ],
        },
        {
          id: "sub-a11",
          naam: "A11 — Redeneren in termen van context-concept",
          leerdoelen: [
            { id: "a11-1", omschrijving: "in contexten uit Chemie van het leven en Technologie & Duurzaamheid de chemische concepten uit Materie, Reacties en Rekenen & Analyse herkennen en gebruiken om een ontwerpprobleem of een natuurwetenschappelijk vraagstuk te specificeren" },
          ],
        },
        {
          id: "sub-a13",
          naam: "A13 — Redeneren over systemen, verandering en energie",
          leerdoelen: [
            { id: "a13-1", omschrijving: "een systeem en haar grenzen herkennen en daarbinnen de onderdelen en onderlinge interacties benoemen" },
            { id: "a13-2", omschrijving: "de hiërarchie van het systeem herkennen aan de hand van de schaal en ordegrootte" },
            { id: "a13-3", omschrijving: "de verandering van het systeem, de onderdelen en de interacties over tijd en ruimte beschrijven" },
            { id: "a13-4", omschrijving: "de invoer, uitstroom en circulariteit van energie- en materiestromen van een systeem benoemen en gebruiken in redeneringen" },
          ],
        },
        {
          id: "sub-a14",
          naam: "A14 — Redeneren in termen van duurzaamheid",
          leerdoelen: [
            { id: "a14-1", omschrijving: "de rol van levenscycli van stoffen, materialen en producten aangeven in termen van duurzaamheid" },
            { id: "a14-2", omschrijving: "de maatschappelijke betekenis van de chemie toelichten in contexten over wereldvoedselvoorziening, duurzame energievoorziening, drinkwatervoorziening, beschikbaarheid van grondstoffen, opwarming van de aarde en vervuiling" },
          ],
        },
        {
          id: "sub-a15",
          naam: "A15 — Redeneren over ontwikkelen van chemische kennis",
          leerdoelen: [
            { id: "a15-1", omschrijving: "weergeven hoe natuurwetenschappelijke kennis ontstaat, welke vragen onderzoekers kunnen stellen en hoe ze aan betrouwbare antwoorden komen" },
            { id: "a15-2", omschrijving: "beschrijven hoe natuurwetenschappelijke en technische kennis wordt toegepast en de wisselwerking tussen natuurwetenschap, techniek en samenleving aangeven" },
          ],
        },
      ],
    },
    {
      id: "dom-m",
      naam: "Sfeer Materie (B1–B5, E1)",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-m1",
          naam: "M1 — Deeltjesmodellen (B1)",
          leerdoelen: [
            {
              id: "m1-1",
              omschrijving: "het symbool of de molecuulformule geven van gegeven stoffen en ionen (metalen, niet-metalen, zouten, organische verbindingen) en omgekeerd",
              begrippen: [
                "molecuulformule", "structuurformule", "verhoudingsformule",
                "aggregatietoestand (s) (l) (g) (aq)", "triviale naam", "IUPAC-naam",
                "alcoholen", "carbonzuren", "atomaire massa-eenheid (u)",
              ],
            },
            {
              id: "m1-2",
              omschrijving: "met behulp van een atoommodel de bouw van atomen en ionen beschrijven",
              begrippen: [
                "protonen", "neutronen", "elektronen",
                "massagetal", "atoomnummer", "isotopen",
                "elektronenconfiguratie",
              ],
            },
            {
              id: "m1-3",
              omschrijving: "de opbouw van het periodiek systeem beschrijven: aardalkalimetalen, alkalimetalen, halogenen, edelgassen; metalen en niet-metalen; verband atoomnummer en positie; eigenschappen per groep",
            },
            {
              id: "m1-4",
              omschrijving: "covalenties aangeven voor H, F, Cl, I, Br (1); O, S (2); N, P (3); C, Si (4)",
              begrippen: ["covalentie"],
            },
            {
              id: "m1-5",
              omschrijving: "op basis van de formule van een stof aangeven tot welke categorie deze behoort: metalen (legeringen), (macro)moleculaire stoffen, zouten",
            },
            {
              id: "m1-6",
              omschrijving: "het verschil beschrijven tussen ontleedbare en niet-ontleedbare stoffen en tussen moleculaire stoffen en zouten op microniveau",
            },
            {
              id: "m1-7",
              omschrijving: "met behulp van een gegeven molecuulformule en covalenties een structuurformule geven van een moleculaire stof en omgekeerd",
            },
            {
              id: "m1-8",
              omschrijving: "in structuurformules van organische verbindingen functionele/karakteristieke groepen herkennen: C=C, OH (hydroxyl), COOH (carboxyl), NH₂ (amino), C-X (halogeen), COOC (ester), CONHC (amide/peptide)",
              begrippen: ["functionele groep", "karakteristieke groep", "structuurisomerie"],
            },
            {
              id: "m1-9",
              omschrijving: "met behulp van de structuurformule van koolstofverbindingen (max. 6 C, onvertakt) de IUPAC-naam aangeven en omgekeerd: alkanen, alkenen en afgeleiden",
            },
          ],
        },
        {
          id: "sub-m2",
          naam: "M2 — Eigenschappen en modellen (B2)",
          leerdoelen: [
            {
              id: "m2-1",
              omschrijving: "het verschil beschrijven tussen zuivere stoffen en mengsels op macro- en microniveau",
              begrippen: ["zuivere stof", "mengsel", "smeltpunt", "kookpunt", "smelttraject", "kooktraject"],
            },
            {
              id: "m2-2",
              omschrijving: "bij redeneringen over mengsels de begrippen emulsie, emulgator, legering, oplossing (onverzadigd/verzadigd) en suspensie gebruiken",
              begrippen: ["emulsie", "emulgator", "legering", "oplossing", "suspensie"],
            },
          ],
        },
        {
          id: "sub-m3",
          naam: "M3 — Bindingen en eigenschappen (B3)",
          leerdoelen: [
            {
              id: "m3-1",
              omschrijving: "de volgende soorten bindingen beschrijven op microniveau",
              begrippen: [
                "atoombinding", "covalente binding", "gemeenschappelijk elektronenpaar",
                "polaire atoombinding", "O–H binding", "N–H binding",
                "hydratatie", "ionbinding", "metaalbinding",
                "vanderwaalsbinding", "molecuulmassa", "waterstofbrug",
              ],
            },
            {
              id: "m3-2",
              omschrijving: "de roosteropbouw van een stof beschrijven op microniveau: ionrooster, metaalrooster, molecuulrooster",
              begrippen: ["ionrooster", "metaalrooster", "molecuulrooster"],
            },
            {
              id: "m3-3",
              omschrijving: "stofeigenschappen (kookpunt, smeltpunt) in verband brengen met de sterkte van de binding tussen deeltjes",
            },
            {
              id: "m3-4",
              omschrijving: "voor condenseren, smelten, stollen en verdampen op microniveau beschrijven welke soorten bindingen verbroken/gevormd worden",
            },
            {
              id: "m3-5",
              omschrijving: "de termen hydrofoob/hydrofiel in verband brengen met verschillen in soorten binding en daarmee oplosbaarheid/mengbaarheid verklaren",
              begrippen: ["hydrofiel", "hydrofoob"],
            },
            {
              id: "m3-6",
              omschrijving: "beschrijven welke soorten bindingen verbroken en/of gevormd worden bij het oplossen/ioniseren in water van basen, moleculaire stoffen, zouten en zuren",
            },
            {
              id: "m3-7",
              omschrijving: "op basis van gegeven oplosbaarheid van zouten bepalen of een combinatie van ionen goed dan wel slecht oplosbaar is",
            },
          ],
        },
        {
          id: "sub-m4",
          naam: "M4 — Bindingen, structuren en eigenschappen (B4)",
          leerdoelen: [
            {
              id: "m4-1",
              omschrijving: "een verband leggen tussen de bouw van een stof en corrosiegevoeligheid (edelheid metalen, beschermende laag), elektrisch geleidingsvermogen (ladingdragers), uv-lichtgevoeligheid (C=C, crosslinks) en vervormbaarheid (weekmakers, roosteropbouw, thermoplasten/thermoharders)",
              begrippen: [
                "corrosiegevoeligheid", "edelheid van metalen", "beschermende laag",
                "elektrisch geleidingsvermogen", "ladingdragers",
                "uv-lichtgevoeligheid", "C=C bindingen", "crosslinks",
                "vervormbaarheid", "weekmakers", "thermoplast", "thermoharder",
              ],
            },
          ],
        },
        {
          id: "sub-m5",
          naam: "M5 — Macroscopische eigenschappen (B5)",
          leerdoelen: [
            {
              id: "m5-1",
              omschrijving: "voor composieten, polymeren en legeringen een verband leggen tussen de structuur en eigenschappen als brandbaarheid, brosheid, corrosiegevoeligheid, geleidend vermogen, hardheid, uv-lichtgevoeligheid, vervormbaarheid en waterbindend vermogen",
              begrippen: ["composiet", "polymeer", "legering"],
            },
          ],
        },
        {
          id: "sub-m6",
          naam: "M6 — Kenmerken van innovatieve processen (E1)",
          leerdoelen: [
            {
              id: "m6-1",
              omschrijving: "de relatie beschrijven tussen microstructuur en macroscopische eigenschappen van stoffen: geleidbaarheid, reactiviteit, vervormbaarheid, uv-lichtgevoeligheid, corrosiegevoeligheid, oplosbaarheid en biodegradeerbaarheid",
              begrippen: [
                "microstructuur", "mesostructuur", "macrostructuur",
                "crosslinks", "vulkaniseren", "ketenlengte", "monomeer",
                "polyester", "polyamide", "polypeptide", "polysacharide",
                "edel metaal", "onedel metaal",
              ],
            },
            {
              id: "m6-2",
              omschrijving: "een gegeven keuze voor een bepaald materiaal toelichten aan de hand van structuur-eigenschap-relaties",
            },
          ],
        },
      ],
    },
    {
      id: "dom-r",
      naam: "Sfeer Reacties (C1, C6, C8, D3, C3)",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-r1",
          naam: "R1 — Chemische processen (C1)",
          leerdoelen: [
            {
              id: "r1-1",
              omschrijving: "bij het opstellen van reactievergelijkingen de begrippen coëfficiënt, elementbalans en ladingsbalans gebruiken",
              begrippen: ["coëfficiënt", "elementbalans", "ladingsbalans"],
            },
            {
              id: "r1-2",
              omschrijving: "van de volgende processen een reactievergelijking geven: beginstoffen en reactieproducten zijn gegeven; volledige verbranding van C, H, O-verbindingen; oplossen/ioniseren in water van basen, moleculaire stoffen, zouten en zuren",
            },
            {
              id: "r1-3",
              omschrijving: "de volgende reactietypen herkennen: donor-acceptor reacties (redox, zuur-base), ontledingsreacties (elektrolyse, fotolyse, thermolyse), substitutie, verbranding (onvolledig/volledig)",
              begrippen: [
                "redoxreactie", "elektronenoverdracht", "zuur-base reactie", "protonenoverdracht",
                "ontledingsreactie", "elektrolyse", "fotolyse", "thermolyse",
                "substitutie", "verbranding",
              ],
            },
            {
              id: "r1-4",
              omschrijving: "de volgende deeltjes als zuren herkennen: HCl, H₂SO₄, HNO₃, H₂O + CO₂, H₃PO₄, CH₃COOH; als basen: NH₃, OH⁻, CO₃²⁻, O²⁻, HCO₃⁻",
              begrippen: ["zuur", "base", "donor", "acceptor"],
            },
            {
              id: "r1-5",
              omschrijving: "een redoxreactie beschrijven als reactie waarbij elektronen worden overgedragen: halfreacties, reductor/oxidator aanwijzen; de totale vergelijking afleiden uit gegeven halfreacties",
              begrippen: ["halfreactie", "reductor", "oxidator"],
            },
            {
              id: "r1-6",
              omschrijving: "een elektrochemische cel beschrijven: reductor/oxidator aanwijzen, elektrolyt, elektronenoverdracht via externe verbinding, positieve en negatieve elektrode, stroomsterkte",
              begrippen: ["elektrochemische cel", "elektrolyt", "elektrode", "stroomsterkte"],
            },
            {
              id: "r1-7",
              omschrijving: "bij organisch-chemische reacties de reactievergelijking weergeven: additiereacties, condensatiereacties (estervorming, amide/peptidevorming), hydrolysereacties (koolhydraten, esters, amiden, vetten), kraken, polymerisatie van alkenen en gesubstitueerde alkenen, polymerisatie tot polyesters en polyamiden, substitutiereacties (alkanen met halogenen)",
              begrippen: [
                "additiereactie", "condensatiereactie", "hydrolyse",
                "ester", "amide", "peptide", "polymerisatie",
                "kraken",
              ],
            },
          ],
        },
        {
          id: "sub-r2",
          naam: "R2 — Classificatie van reacties (C8)",
          leerdoelen: [
            {
              id: "r2-1",
              omschrijving: "een aantal typen reacties classificeren en de kenmerken aangeven: additiereactie, condensatiereactie, hydrolyse, polymerisatiereactie",
            },
            {
              id: "r2-2",
              omschrijving: "van poly-additie en polycondensatie de kenmerken aangeven en aan de hand van de structuurformule van een (co)polymeer de structuurformule van de monomeren geven",
              begrippen: ["poly-additie", "polycondensatie", "monomeer", "polymeer", "copolymeer"],
            },
          ],
        },
        {
          id: "sub-r3",
          naam: "R3 — Reactiesnelheid en katalyse (C6)",
          leerdoelen: [
            {
              id: "r3-1",
              omschrijving: "veranderingen in reactiesnelheid verklaren met het botsende-deeltjes-model: concentratie, druk, temperatuur, verdelingsgraad",
              begrippen: ["botsende-deeltjes-model", "concentratie", "druk", "temperatuur", "verdelingsgraad"],
              formules: ["s = Δc / Δt"],
            },
            {
              id: "r3-2",
              omschrijving: "veranderingen in reactiesnelheid verklaren met behulp van activeringsenergie en katalysator",
              begrippen: ["activeringsenergie", "katalysator"],
            },
          ],
        },
        {
          id: "sub-r4",
          naam: "R4 — Chemische procesontwerpen (D3)",
          leerdoelen: [
            {
              id: "r4-1",
              omschrijving: "aangeven dat voor de vorming van additiepolymeren een initiatiestap nodig is (initiator, uv-licht)",
              begrippen: ["initiator"],
            },
            {
              id: "r4-2",
              omschrijving: "een verband leggen tussen macroscopische eigenschappen, het productieproces en de manier van verwerken: metalen (persen, gieten, walsen), thermoharders (polymeriseren in mal), thermoplasten (spuitgieten, extruderen, blazen)",
            },
          ],
        },
        {
          id: "sub-r5",
          naam: "R5 — Energie (C3)",
          leerdoelen: [
            {
              id: "r5-1",
              omschrijving: "de begrippen activeringsenergie, endotherm, exotherm, energieniveaus, overgangstoestand, reactiewarmte en vormingswarmte gebruiken",
              begrippen: [
                "activeringsenergie", "endotherm", "exotherm", "energieniveaus",
                "invloed van een katalysator", "ontbrandingstemperatuur",
                "overgangstoestand", "reactiewarmte", "vormingswarmte",
              ],
            },
            {
              id: "r5-2",
              omschrijving: "een energiediagram geven van een reactie",
            },
            {
              id: "r5-3",
              omschrijving: "de reactiewarmte van een proces berekenen met behulp van vormingswarmtes",
            },
            {
              id: "r5-4",
              omschrijving: "bij omzettingen van chemische energie redeneren aan de hand van berekeningen en de wet van behoud van energie (elektrische energie, warmte)",
            },
            {
              id: "r5-5",
              omschrijving: "aangeven dat bij omzettingen van energie er minstens een deel wordt omgezet in warmte; het begrip kwaliteit van energie gebruiken in redeneringen",
              begrippen: ["kwaliteit van energie"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-ra",
      naam: "Sfeer Rekenen & Analyse (C2, D1, C7)",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-ra1",
          naam: "R&A1 — Grootheden en relaties (C2)",
          leerdoelen: [
            {
              id: "ra1-1",
              omschrijving: "de volgende principes gebruiken bij het rekenen aan chemische processen: massaverhouding, molverhouding/stoichiometrische verhouding, ondermaat/overmaat, rendement",
              begrippen: ["massaverhouding", "molverhouding", "stoichiometrische verhouding", "ondermaat", "overmaat", "rendement"],
            },
            {
              id: "ra1-2",
              omschrijving: "bij berekeningen de volgende begrippen, grootheden en relaties gebruiken: massa (m, kg/g), atoommassa (A, u), molecuulmassa (M, u), molaire massa (M(X), g·mol⁻¹), chemische hoeveelheid (n, mol), volume (V, m³/L), dichtheid (ρ, kg·m⁻³), concentratie (c(X), mol·L⁻¹), reactiesnelheid (s, mol·L⁻¹·s⁻¹)",
              begrippen: [
                "massa", "atoommassa", "molecuulmassa", "molaire massa",
                "chemische hoeveelheid", "mol", "volume", "dichtheid", "concentratie", "molariteit", "reactiesnelheid",
                "percentage", "ppm", "ppb",
              ],
              formules: [
                "ρ = m / V",
                "n = m / M",
                "c = n / V",
                "s = Δc / Δt",
              ],
            },
            {
              id: "ra1-3",
              omschrijving: "bij berekeningen van de pH de begrippen en relaties voor zuurgraad, pH, pOH gebruiken",
              formules: [
                "pH = −log[H⁺]",
                "pOH = −log[OH⁻]",
                "pH + pOH = 14,00 (bij 298 K)",
              ],
            },
          ],
        },
        {
          id: "sub-ra2",
          naam: "R&A2 — Chemische vakmethodes (D1)",
          leerdoelen: [
            {
              id: "ra2-1",
              omschrijving: "in redeneringen over analyse- en/of scheidingsmethodes de volgende begrippen gebruiken: adsorberen, bezinken, centrifugeren, chromatografie (DLC, papierchromatografie, loopvloeistof), destilleren, extraheren, filtreren, indampen, ijklijn, indicator, oplosmiddel, reagens, residu, titratie",
              begrippen: [
                "adsorberen", "bezinken", "centrifugeren",
                "dunnelaagchromatografie", "papierchromatografie", "loopvloeistof",
                "destillaat", "destilleren", "extraheren", "extractiemiddel",
                "filtraat", "filtreren", "indampen", "ijklijn", "indicator",
                "oplosmiddel", "reagens", "residu", "titratie",
              ],
            },
            {
              id: "ra2-2",
              omschrijving: "voor scheidingsmethodes toelichten op welk verschil van (stof)eigenschap ze berusten en beargumenteren waarom ze bij een bepaald proces worden gebruikt",
            },
            {
              id: "ra2-3",
              omschrijving: "aan de hand van een chromatogram een uitspraak doen over de aanwezigheid van bepaalde stoffen",
            },
          ],
        },
        {
          id: "sub-ra3",
          naam: "R&A3 — Behoudswetten en kringlopen (C7)",
          leerdoelen: [
            {
              id: "ra3-1",
              omschrijving: "de begrippen elementbehoud, energiebehoud/energiebalans, ladingbehoud en massabehoud/massabalans gebruiken in redeneringen",
              begrippen: ["elementbehoud", "energiebehoud", "ladingbehoud", "massabehoud"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-t",
      naam: "Sfeer Technologie & Duurzaamheid (F1, F3, G2)",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-t1",
          naam: "T1 — Industriële processen en groene chemie (F1)",
          leerdoelen: [
            {
              id: "t1-1",
              omschrijving: "de begrippen afval, batchproces, bulkchemie, continuproces, energiehuishouding, fijnchemie, groene chemie, reactoren, recirculatie, recycling, scheidingsinstallaties, stofstromen en warmtewisselaars gebruiken",
              begrippen: [
                "batchproces", "continuproces", "bulkchemie", "fijnchemie",
                "groene chemie", "reactor", "recirculatie", "recycling",
                "scheidingsinstallaties", "stofstromen", "warmtewisselaar",
              ],
            },
            {
              id: "t1-2",
              omschrijving: "met gegevens over een industrieel proces dit proces met een blokschema beschrijven",
            },
            {
              id: "t1-3",
              omschrijving: "van een industrieel proces de gekozen reactieomstandigheden en scheidingsstappen toelichten",
            },
            {
              id: "t1-4",
              omschrijving: "toelichten welke aspecten van groene chemie bij het ontwerpen van industriële processen een rol spelen: afval, bijproducten, gebruik van water, grondstoffen, nevenreacties, onvolledige omzetting, recycling, veiligheid",
            },
            {
              id: "t1-5",
              omschrijving: "aan de hand van formules uit groene chemie berekeningen uitvoeren aan processen: atoomeconomie en E-factor",
              begrippen: ["atoomeconomie", "E-factor"],
            },
            {
              id: "t1-6",
              omschrijving: "chemische processen relateren aan cradle-to-cradle, elementkringloop, recycling en stofkringloop",
              begrippen: ["cradle-to-cradle", "elementkringloop", "stofkringloop"],
            },
          ],
        },
        {
          id: "sub-t2",
          naam: "T2 — Energieomzettingen (F3)",
          leerdoelen: [
            {
              id: "t2-1",
              omschrijving: "met behulp van een beschrijving van chemische technieken voor energieproductie uit biomassa redeneren over deze technieken",
            },
            {
              id: "t2-2",
              omschrijving: "brandstoffen met elkaar vergelijken, voorstellen voor aanpassingen beoordelen en redeneren over duurzaamheid: C/H-verhouding, emissies (CO₂, NOₓ, SO₂), verschil biobrandstof en fossiele brandstof, olieraffinage (gefractioneerde destillatie, kraken)",
              begrippen: [
                "C/H-verhouding", "CO₂-emissie", "NOₓ", "SO₂",
                "biobrandstof", "fossiele brandstof", "koolstofkringloop",
                "broeikaseffect", "olieraffinage", "gefractioneerde destillatie", "kraken",
              ],
            },
            {
              id: "t2-3",
              omschrijving: "beschrijven dat elektrische energie kan worden gebruikt voor duurzame productie van stoffen (elektrolyse van water → waterstof) en voor omzetting van chemische energie in elektrische energie (brandstofcel, accu/batterij)",
              begrippen: ["elektrolyse", "brandstofcel", "elektrochemische cel", "batterij", "accu"],
            },
          ],
        },
        {
          id: "sub-t3",
          naam: "T3 — Milieueisen (G2)",
          leerdoelen: [
            {
              id: "t3-1",
              omschrijving: "bij een risico-inventarisatie van een experiment of toepassing een verband leggen tussen gemaakte keuzes en ADI-waarde, gevaarsymbolen, GHS-systeem, grenswaarde, LD-50",
              begrippen: ["ADI-waarde", "GHS-systeem", "gevaarsymbolen", "grenswaarde", "LD-50"],
            },
            {
              id: "t3-2",
              omschrijving: "ongewenste effecten van het gebruik van koolstofhoudende brandstoffen in verband brengen met de kwaliteit van lucht, water en bodem: zure depositie (SO₂, NOₓ), smogvorming (roet, CO, fijnstof)",
              begrippen: ["zure depositie", "smogvorming", "fijnstof"],
            },
            {
              id: "t3-3",
              omschrijving: "effecten van het gebruik van (kunst)mest in verband brengen met de kwaliteit van lucht, water en bodem: mineraalbalans, eutrofiëring, uitspoelen",
              begrippen: ["mineraalbalans", "eutrofiëring", "uitspoelen"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-l",
      naam: "Sfeer Chemie van het leven (G1)",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-l1",
          naam: "L1 — Structuur en functie (G1)",
          leerdoelen: [
            {
              id: "l1-1",
              omschrijving: "biologische begrippen als ademhaling/gaswisseling, bloed, cel, celmembraan, organisme, spijsvertering en transport herkennen en gebruiken in scheikundige context",
            },
            {
              id: "l1-2",
              omschrijving: "de fotosynthese van glucose beschrijven als een proces waarbij lichtenergie wordt omgezet in chemische energie: productie van zuurstof, vastleggen van koolstofdioxide",
              begrippen: ["fotosynthese", "koolstofassimilatie"],
            },
            {
              id: "l1-3",
              omschrijving: "op microniveau de structuur beschrijven van eiwitten/enzymen (aminozuren, primaire structuur), koolhydraten (mono-, di-, polysachariden) en vetten (glycerol, triglyceriden, (on)verzadigde vetzuren)",
              begrippen: [
                "aminozuur", "essentieel aminozuur", "primaire structuur", "eiwit",
                "monosaccharide", "disaccharide", "polysaccharide",
                "glycerol", "triglyceride", "verzadigd vetzuur", "onverzadigd vetzuur",
              ],
            },
            {
              id: "l1-4",
              omschrijving: "de afbraak van voedingsstoffen beschrijven als een chemisch proces waarbij de producten als basis kunnen dienen voor het maken van lichaamseigen stoffen",
            },
            {
              id: "l1-5",
              omschrijving: "de functie van eiwitten (bouwstof, enzymen), koolhydraten (energieopslag) en vetten (bouwstof in membranen, energieopslag) benoemen",
            },
            {
              id: "l1-6",
              omschrijving: "de functie van enzymen beschrijven: biokatalysator, pH-optimum, specificiteit, temperatuuroptimum",
              begrippen: ["biokatalysator", "pH-optimum", "specificiteit", "temperatuuroptimum"],
            },
          ],
        },
      ],
    },
  ],
};

import { VakSyllabus } from "@/types/syllabus";

export const AARDRIJKSKUNDE_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "aardrijkskunde-havo", niveau: "HAVO",
  domeinen: [
    {
      id: "dom-a", naam: "Domein A: Vaardigheden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a1", naam: "A1 — Geografische benadering",
          leerdoelen: [
            {
              id: "a1-1a1",
              omschrijving: "kaarten selecteren, lezen, analyseren, interpreteren en produceren bij het beantwoorden van geografische vragen. Kaarten selecteren (geografische informatiewaarde en cartografische geschiktheid beoordelen: projectie, schaal, generalisatie, symbolisatie). Kaarten lezen (elementen identificeren en benoemen). Kaarten analyseren (patronen en correlaties herkennen). Kaarten interpreteren (verklaringen geven, voorspellingen doen). Kaarten maken (geschikte projectie, schaal, elementtype, klassenindeling, cartografische variabelen kiezen).",
              begrippen: ["geografische informatiewaarde", "cartografische geschiktheid", "projectie", "schaal", "generalisatie", "symbolisatie", "spreidingen en geledingen", "correlaties"],
            },
            {
              id: "a1-1a2",
              omschrijving: "Geo-ICT applicaties gebruiken bij het beantwoorden van geografische vragen: virtuele globes, educatieve web-atlassen, web GIS applicaties; GPS applicaties gebruiken om locaties te vinden en geografische gegevens te verzamelen; eenvoudige GIS software hanteren bij het werken met digitale kaarten.",
              begrippen: ["virtuele globes", "web GIS", "GPS", "GIS software"],
            },
            {
              id: "a1-1a3",
              omschrijving: "informatie in teksten, beelden en cijfers hanteren bij het beantwoorden van geografische vragen: relevante informatie selecteren, analyseren, interpreteren en produceren (teksten, beelden, video, foto's, tabellen, grafieken, diagrammen, cartoons).",
              begrippen: [],
            },
            {
              id: "a1-1b",
              omschrijving: "geografische vragen herkennen en zelf formuleren. Typen geografische vragen: beschrijvende vragen (weergave van locatie, kenmerk, proces of patroon); verklarende vragen (oorzaak-gevolgrelaties); voorspellende vragen (onderbouwd toekomstbeeld); waarderende vragen (onderbouwd oordeel over keuze/beslissing); vragen gericht op het maken van keuzes en het oplossen van problemen.",
              begrippen: ["beschrijvende vragen", "verklarende vragen", "voorspellende vragen", "waarderende vragen"],
            },
            {
              id: "a1-1c",
              omschrijving: "de geografische werkwijzen toepassen bij het formuleren en beantwoorden van geografische vragen: (1) verschijnselen en gebieden vergelijken in ruimte en tijd; (2) relaties leggen binnen een gebied en tussen gebieden (verticaal en horizontaal); (3) verschijnselen en gebieden vanuit verschillende dimensies beschrijven en analyseren (natuur, economie, politiek, sociaal-cultureel, demografie); (4) verschijnselen en gebieden in hun geografische context plaatsen; (5) verschijnselen en gebieden op verschillende ruimtelijke schalen beschrijven en analyseren; (6) verschijnselen en gebieden beschrijven door relaties te leggen tussen het bijzondere en het algemene (inductief en deductief redeneren).",
              begrippen: ["verticale relaties", "horizontale relaties", "ruimtelijke schaal", "inductief redeneren", "deductief redeneren"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-b", naam: "Domein B: Wereld", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b2", naam: "B2 — Samenhangen en verschillen in de wereld",
          leerdoelen: [
            {
              id: "b2-4a1",
              omschrijving: "economische, demografische en sociaal-culturele indicatoren voor het vergelijken van landen benoemen en de beperkingen aangeven van gemiddelde nationale waarden voor die indicatoren.",
              begrippen: [
                "bnp / bbp / brp (per hoofd)",
                "koopkracht",
                "(samenstelling van) beroepsbevolking",
                "bevolkingsdichtheid",
                "bevolkingsspreiding",
                "bevolkingsgroei",
                "leeftijdsopbouw",
                "taal",
                "godsdienst",
                "verstedelijking",
                "analfabetisme",
                "VN-ontwikkelingsindex / Human Development Index",
              ],
            },
            {
              id: "b2-4a2",
              omschrijving: "mondiale economische, demografische en sociaal-culturele spreidingspatronen, alsmede de meest opvallende veranderingen hierin sinds de jaren 1980 beschrijven en in hoofdlijnen verklaren. Aandachtspunten: wereldsysteem met centrum, semiperiferie en periferie; demografisch transitiemodel; cultuurgebieden.",
              begrippen: [
                "wereldsysteem", "centrum", "semi-periferie", "periferie",
                "kolonialisme", "vestigingskolonie", "exploitatiekolonie", "dekolonisatie",
                "internationale arbeidsverdeling", "industrialisatie", "de-industrialisatie",
                "demografisch transitiemodel", "demografische druk",
                "cultuurgebied", "culturele diffusie",
              ],
            },
            {
              id: "b2-4a3",
              omschrijving: "mondiale spreidingspatronen van handel, investeringen en migratie beschrijven en in hoofdlijnen verklaren.",
              begrippen: [
                "vrijhandel", "ruilvoet", "handelsbelemmeringen",
                "multinationale onderneming (MNO)",
                "migratienetwerken", "selectieve migratie", "push en pull factoren",
              ],
            },
            {
              id: "b2-4b1",
              omschrijving: "het proces van mondialisering/globalisering in economisch en sociaal-cultureel opzicht beschrijven, herkennen en verklaren.",
              begrippen: [
                "tijdruimtecompressie", "transporttechnologie",
                "informatie- en communicatietechnologie (ict)",
                "productieketen", "global shift", "offshoring", "reshoring",
                "afwenteling in ruimte en tijd", "regionale en sociale ongelijkheid",
                "Wereldhandelsorganisatie (WTO)",
                "amerikanisering", "lingua franca", "culturele identiteit",
                "mondiale netwerken", "wereldstad",
              ],
            },
            {
              id: "b2-4b2",
              omschrijving: "de positie in het wereldsysteem van en onderlinge relaties tussen een centrumgebied en een (semi)perifeer gebied herkennen en verklaren; de effecten van globalisering op deze gebieden en hun onderlinge relatie herkennen en verklaren.",
              begrippen: [],
            },
          ],
        },
      ],
    },
    {
      id: "dom-c", naam: "Domein C: Aarde", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-c2", naam: "C2 — Samenhangen en verschillen op aarde",
          leerdoelen: [
            {
              id: "c2-7a1",
              omschrijving: "endogene processen die samenhangen met de platentektoniek beschrijven en verklaren (platentektoniek: slab pull en ridge push; plaatbewegingen vormen gebergten door compressie en rek; aardbevingen; vulkanisme).",
              begrippen: [
                "actualiteitsprincipe", "geologische tijdschaal",
                "mantel", "aardkorst",
                "divergente plaatgrens", "convergente plaatgrens", "transforme plaatgrens",
                "(mid)oceanische rug", "subductie", "trog", "slab pull", "ridge push",
                "viscositeit", "explosieve eruptie", "effusieve eruptie",
                "stratovulkaan", "schildvulkaan", "caldera", "hotspot",
                "momentmagnitudeschaal", "tsunami",
                "plooiingsgebergte", "rek en compressie", "horst en slenk", "bekken",
              ],
            },
            {
              id: "c2-7a2",
              omschrijving: "de werking van belangrijke exogene processen beschrijven en hun invloed op de vorming van het aardoppervlak verklaren (verwering, erosie, transport, sedimentatie, massabeweging).",
              begrippen: [
                "mechanische / fysische verwering", "chemische verwering",
                "erosie", "transport",
                "sedimentatie", "delta", "morene", "puinwaaier",
                "massabeweging", "aardverschuiving", "puinhelling",
              ],
            },
            {
              id: "c2-7a3",
              omschrijving: "de interactie tussen endogene en exogene processen beschrijven en verklaren (gesteentekringloop en hydrologische kringloop; stollingsgesteenten, sedimentgesteenten en metamorfe gesteenten).",
              begrippen: [
                "hydrologische kringloop", "gesteentekringloop",
                "graniet", "basalt", "zandsteen", "kalksteen", "marmer", "leisteen",
              ],
            },
            {
              id: "c2-7a4",
              omschrijving: "de mondiale windsystemen en zeestromen beschrijven en verklaren hoe deze van invloed zijn op de klimaatzones.",
              begrippen: [
                "atmosferische circulatie",
                "hoge en lage luchtdrukgebieden",
                "Intertropische convergentie zone (ITCZ)",
                "wet van Buys Ballot",
                "passaat", "moesson",
                "warme zeestromen", "koude zeestromen",
                "klimaten volgens Köppen",
              ],
            },
            {
              id: "c2-7b1",
              omschrijving: "het landschap herkennen als het resultaat van een dynamisch systeem; de voor een landschapszone relevante geofactoren met elkaar in verband brengen.",
              begrippen: [
                "geofactoren: gesteente en reliëf, klimaat en lucht, bodem, water, plantenwereld, dierenwereld, de mens",
                "polaire zone", "boreale zone", "gematigde zone",
                "subtropische zone", "aride zone", "tropische zone",
              ],
            },
            {
              id: "c2-7b2",
              omschrijving: "de invloed van menselijke activiteiten op natuur en milieu in verschillende landschapszones beschrijven en verklaren (landdegradatie, duurzaam landgebruik, klimaatverandering).",
              begrippen: [
                "(versnelde) bodemerosie", "verzilting", "verwoestijning",
                "overbeweiding", "ontbossing", "irrigatie", "drainage",
                "duurzaam landgebruik",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dom-d", naam: "Domein D: Ontwikkelingsland (Brazilië)", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d1", naam: "D1 — Gebiedskenmerken Brazilië",
          leerdoelen: [
            {
              id: "d1-9a1",
              omschrijving: "stereotiepe beelden van Brazilië beschrijven, aangeven hoe die beelden tot stand komen en kritisch beoordelen (culturele dimensie: muziek, dans, sport, kleding, religie; natuur: tropisch regenwoud, biodiversiteit; tegenstellingen: gated communities naast favelas, regenwoud naast landbouwgebieden).",
              begrippen: ["perceptie", "mental map", "stereotiep beeld", "geografisch beeld"],
            },
            {
              id: "d1-9a2",
              omschrijving: "economische, sociaal-culturele, demografische en politieke spreidingspatronen en processen van Brazilië beschrijven en aan elkaar relateren; regionale verschillen binnen Brazilië beschrijven en verklaren; toekomstscenario's van Brazilië beschrijven en onderbouwen.",
              begrippen: [
                "Gini-coëfficiënt / Lorenzcurve", "informele sector", "grootgrondbezit",
                "etniciteit", "racisme",
                "verstedelijkingsgraad", "verstedelijkingstempo",
                "politieke polarisatie", "good governance", "sociale mobiliteit",
                "stedelijk netwerk", "zelfbouwwijken (favelas)", "ommuurde woonwijken (gated communities)",
              ],
            },
            {
              id: "d1-9a3",
              omschrijving: "de klimaten, landschappen en vegetatietypen in Brazilië beschrijven en verklaren; het ontstaan en de ruimtelijke spreiding van natuurlijke hulpbronnen beschrijven; de ecologische draagkracht van verschillende landschappen en de overschrijding daarvan beschrijven en verklaren. Aandachtspunten: Amazonegebied, Hoogland van Brazilië, Hoogland van Guyana; ITCZ en zeestromingen; selvas, caatinga, cerrado.",
              begrippen: [
                "tropisch regenwoud (selva)", "savanne en steppe (cerrado en caatinga)", "mangrove",
                "ertsen / ertsvorming", "fossiele energiebron", "mijnbouw",
                "biodiversiteit", "ontbossing", "landroof (landgrabbing)",
              ],
            },
            {
              id: "d1-9b1",
              omschrijving: "de economische en politieke positie van Brazilië binnen Zuid-Amerika op hoofdlijnen beschrijven en verklaren.",
              begrippen: [],
            },
            {
              id: "d1-9b2",
              omschrijving: "de veranderende economische, culturele en politieke relaties van Brazilië met andere grootmachten in de wereld beschrijven; de effecten van globalisering op de Braziliaanse samenleving beschrijven en verklaren; toekomstscenario's voor de positie van Brazilië in de wereld beschrijven en onderbouwen.",
              begrippen: [
                "import- en exportpakket", "handelsbalans",
                "buitenlandse investeringen / Foreign Direct Investments",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dom-e", naam: "Domein E: Leefomgeving", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e1", naam: "E1 — Nationale en regionale vraagstukken",
          leerdoelen: [
            {
              id: "e1-11a1",
              omschrijving: "kenmerken van de stroomgebieden van de Rijn en de Maas beschrijven; de invloed van klimaatverandering en menselijk ingrijpen relateren aan de waterafvoer van de Nederlandse rivieren; overstromingsrisico's relateren aan ruimtelijke inrichting; oorzaken en gevolgen van watertekorten in Nederland analyseren.",
              begrippen: [
                "stroomgebied", "stroomstelsel", "waterscheiding",
                "debiet", "regiem", "verhoogde en versnelde piekafvoer", "vertragingstijd", "verval", "verhang",
                "uiterwaard", "zomerbed", "winterbed", "binnendijks", "buitendijks",
                "bovenloop", "middenloop", "benedenloop",
                "zeespiegelstijging", "temperatuurstijging", "onregelmatiger neerslagregiem",
                "verstening van het oppervlak", "ontbossing", "kanalisatie", "stuw", "krib",
                "dijk (verzwaring)", "waterkering", "ontwatering en grondwateronttrekking",
              ],
            },
            {
              id: "e1-11a2",
              omschrijving: "het rivierenbeleid uit het recente verleden op hoofdlijnen beschrijven; het huidige beleid ten aanzien van overstromingen, wateroverlast en watertekorten beschrijven en evalueren.",
              begrippen: [
                "Deltaprogramma", "Hoogwaterbeschermingsprogramma",
                "toekomstscenario's IPCC en KNMI",
                "Rijkswaterstaat", "Waterschappen", "dijkring",
                "Ruimte voor de Rivier",
                "integraal waterbeheer: vasthouden (retentie), afvoeren bevorderen, bergen / opslaan, sparen, aanvoeren",
                "overstromingsrisicobewustzijn", "acceptatie en adaptatie",
              ],
            },
            {
              id: "e1-11b1",
              omschrijving: "ruimtelijke vraagstukken in stedelijke gebieden analyseren en de gevolgen daarvan in landelijke gebieden evalueren.",
              begrippen: [
                "grootstedelijke functies", "voorzieningenniveau", "drempelwaarde", "reikwijdte", "verzorgingsgebied",
                "ruimtelijke ordening", "groeikern", "VINEX",
                "kenniseconomie", "circulaire economie", "belevingseconomie",
                "duurzame stad", "science parks", "creatieve stad", "smart city",
                "energietransitie", "landschapsvervuiling", "milieuvervuiling", "(demografische) krimp",
              ],
            },
            {
              id: "e1-11b2",
              omschrijving: "aan de hand van de inrichting van de openbare ruimte, woningkenmerken en bewonerskenmerken een buurt- en wijkprofiel opstellen en beargumenteerde uitspraken doen over leefbaarheid; beleid gericht op wijken en buurten beschrijven en evalueren.",
              begrippen: [
                "wijk- en buurtprofiel",
                "openbare ruimte: onderhoud, overzichtelijkheid, toezicht, toegankelijkheid",
                "woningkenmerken: naar ouderdom, naar eigendom, naar woningtype",
                "bewonerskenmerken: naar huishoudenstype, naar inkomen, naar leeftijd",
                "sociale cohesie", "objectieve veiligheid", "subjectieve veiligheid",
                "stadsvernieuwing", "herstructurering", "transformatie", "gentrificatie",
              ],
            },
          ],
        },
      ],
    },
  ],
};

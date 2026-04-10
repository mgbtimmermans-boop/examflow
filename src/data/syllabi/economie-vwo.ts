import { VakSyllabus } from "@/types/syllabus";

export const ECONOMIE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "economie-vwo", niveau: "VWO",
  domeinen: [
    {
      id: "dom-a", naam: "Domein A: Vaardigheden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a1", naam: "A1 — Informatievaardigheden", leerdoelen: [
            { id: "a1-1", omschrijving: "De benodigde informatie halen uit bronnen zoals tekst, tabellen, grafieken en afbeeldingen" },
            { id: "a1-2", omschrijving: "De aangeboden bronnen beoordelen op bruikbaarheid en relevantie" },
            { id: "a1-3", omschrijving: "Feiten van meningen onderscheiden" },
            { id: "a1-4", omschrijving: "Gegeven bronnen interpreteren en in combinatie met economische kennis komen tot antwoorden op economische vragen" },
            { id: "a1-5", omschrijving: "Randvoorwaarden en vooronderstellingen van een economisch model onderscheiden van gegevens uit realistische contexten" },
            { id: "a1-6", omschrijving: "Rekenen en redeneren binnen de randvoorwaarden en vooronderstellingen van een model" },
            { id: "a1-7", omschrijving: "Redeneren buiten de kaders van een economisch model, indien de context daartoe aanleiding geeft" },
            { id: "a1-8", omschrijving: "Economische concepten herkennen, beschrijven en toepassen in contexten (transfer)" },
          ],
        },
        {
          id: "sub-a2", naam: "A2 — Rekenkundig en/of grafisch onderbouwen", leerdoelen: [
            { id: "a2-1", omschrijving: "Basisrekenvaardigheden toepassen in economische vraagstukken: optellen, aftrekken, vermenigvuldigen, delen, positieve en negatieve getallen, breuken, decimalen" },
            { id: "a2-2", omschrijving: "Procenten, promillen en perunages berekenen; onderscheid procentuele mutatie en procentpunt verandering" },
            { id: "a2-3", omschrijving: "Werken met eerstegraads- en tweedegraadsvergelijkingen; oplossen van een stelsel van vergelijkingen via substitutie", formules: ["afgeleide van tweedegraadsvergelijking bepalen als eerstegraadsvergelijking"] },
            { id: "a2-4", omschrijving: "Werken met assenstelsels (X en Y) en kwadranten; waardes bepalen en grafieken tekenen en/of bewerken" },
            { id: "a2-5", omschrijving: "Oppervlaktes arceren en berekenen (alléén driehoek en rechthoek); berekeningen maken op basis van grafieken bij domein D" },
            { id: "a2-6", omschrijving: "Indexcijfers berekenen: partieel, samengesteld (gewogen), basisjaar verleggen" },
            { id: "a2-7", omschrijving: "Diagrammen interpreteren: lijn, staaf, cirkel; enkelvoudig en samengesteld; tabellen met rijen/kolommen, indeling in klassen (percentielen, decielen), cumuleren" },
            { id: "a2-8", omschrijving: "Gemiddeldes berekenen: gewogen en ongewogen" },
            { id: "a2-9", omschrijving: "Contante waarde en eindwaarde berekenen (geen reeksen)", formules: ["contante waarde = eindwaarde / (1 + r)^n", "eindwaarde = contante waarde × (1 + r)^n"] },
          ],
        },
        {
          id: "sub-a3", naam: "A3 — Standpuntbepaling", leerdoelen: [
            { id: "a3-1", omschrijving: "De rol en de perspectieven van de verschillende actoren herkennen: consumenten, producenten, werkgevers, werknemers, burgers, overheid, bankwezen" },
            { id: "a3-2", omschrijving: "Een eventuele botsing van belangen en oplossingen voor mogelijk ongewenst gedrag beschrijven" },
            { id: "a3-3", omschrijving: "Een standpunt bepalen en onderbouwen of een gegeven standpunt onderbouwen (argumenten pro)" },
            { id: "a3-4", omschrijving: "Een standpunt relativeren / weerleggen (argumenten contra); afwegingsvraagstukken beschrijven" },
          ],
        },
        {
          id: "sub-a4", naam: "A4 — Strategisch inzicht", leerdoelen: [
            { id: "a4-1", omschrijving: "Relevante economische aspecten (concepten) herkennen bij het analyseren van concrete maatschappelijke vraagstukken (contexten)" },
            { id: "a4-2", omschrijving: "Een economische denkwijze hanteren: redeneren binnen vooronderstellingen / een model" },
            { id: "a4-3", omschrijving: "Oorzaak en gevolg onderscheiden; probleem en oplossing onderscheiden; korte en lange termijn onderscheiden; evenwichtige en onevenwichtige situaties onderscheiden" },
          ],
        },
      ],
    },
    {
      id: "dom-d", naam: "Domein D: Concept Markt", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d1", naam: "D1 — Vraag en Aanbod", leerdoelen: [
            { id: "d1-1", omschrijving: "Betalingsbereidheid als de maximale prijs die een vrager bereid is te betalen voor één eenheid van een goed", begrippen: ["betalingsbereidheid"] },
            { id: "d1-2", omschrijving: "De individuele vraaglijn die het verband weergeeft tussen de gevraagde hoeveelheid van één vrager bij uiteenlopende prijzen", begrippen: ["individuele vraaglijn"] },
            { id: "d1-3", omschrijving: "Het verband tussen de individuele vraaglijn en de collectieve vraaglijn", begrippen: ["collectieve vraaglijn"] },
            { id: "d1-4", omschrijving: "Het verband tussen de betalingsbereidheid van alle vragers en het verloop van de collectieve vraaglijn (alleen grafisch onderbouwen)" },
            { id: "d1-5", omschrijving: "Parallelle verschuiving van de collectieve vraaglijn als gevolg van verandering van het inkomen, de behoeften, prijzen van andere goederen en het aantal vragers (alleen grafisch onderbouwen)" },
            { id: "d1-6", omschrijving: "Prijselasticiteit (alleen segmentelasticiteit) als een maat voor de relatieve verandering van de gevraagde hoeveelheid als gevolg van een relatieve prijsverandering", begrippen: ["prijselasticiteit", "segmentelasticiteit"], formules: ["Ep = (ΔQ/Q) / (ΔP/P)"] },
            { id: "d1-7", omschrijving: "Het onderscheid tussen een prijselastische en een prijsinelastische vraag", begrippen: ["prijselastisch", "prijsinelastisch"] },
            { id: "d1-8", omschrijving: "Inkomenselasticiteit (alleen segmentelasticiteit) als een maat voor de relatieve verandering van de gevraagde hoeveelheid als gevolg van een relatieve inkomensverandering (alleen rekenkundig onderbouwen)", formules: ["Ei = (ΔQ/Q) / (ΔY/Y)"] },
            { id: "d1-9", omschrijving: "Het onderscheid tussen inferieure, normale en luxe goederen, in relatie met de waarde van de inkomenselasticiteit", begrippen: ["inferieur goed", "normaal goed", "luxe goed"] },
            { id: "d1-10", omschrijving: "Substitueerbaarheid en complementariteit van goederen, in relatie tot de vraag naar een (ander) goed; kruislingse elasticiteit", begrippen: ["substituutgoed", "complementair goed", "kruislingse elasticiteit"] },
            { id: "d1-11", omschrijving: "De individuele aanbodlijn die het verband weergeeft tussen de aangeboden hoeveelheid van één aanbieder bij uiteenlopende prijzen", begrippen: ["individuele aanbodlijn"] },
            { id: "d1-12", omschrijving: "Het verband tussen de individuele aanbodlijn en de collectieve aanbodlijn (alleen grafisch onderbouwen)", begrippen: ["collectieve aanbodlijn"] },
            { id: "d1-13", omschrijving: "De verschuiving van de collectieve aanbodlijn als gevolg van een verandering van de prijzen van productiefactoren, technische ontwikkeling en aantal aanbieders (alleen grafisch onderbouwen)" },
            { id: "d1-14", omschrijving: "De verschuiving van de collectieve aanbodlijn als gevolg van heffingen of subsidies" },
            { id: "d1-15", omschrijving: "De samenhang tussen prijs (p of GO), afzet (q of Q) en totale opbrengst (omzet, TO)", begrippen: ["totale opbrengst", "omzet"], formules: ["TO = p × q"] },
            { id: "d1-16", omschrijving: "De betekenis van de prijselasticiteit van de vraag voor de verandering van de totale opbrengst (omzet) bij prijsveranderingen" },
            { id: "d1-17", omschrijving: "De onderverdeling van totale kosten (TK) in vaste/constante kosten (TCK) en variabele kosten (TVK)", begrippen: ["totale kosten", "vaste kosten", "variabele kosten"], formules: ["TK = TCK + TVK"] },
            { id: "d1-18", omschrijving: "Het onderscheid en de samenhang tussen totale, gemiddelde totale (GTK) en marginale kosten (MK)", begrippen: ["gemiddelde totale kosten", "marginale kosten"], formules: ["GTK = TK / Q", "MK = ΔTK / ΔQ"] },
            { id: "d1-19", omschrijving: "Het verband tussen de individuele aanbodlijn en het verloop van de marginale kosten(lijn) bij hoeveelheidsaanpassing" },
            { id: "d1-20", omschrijving: "De invloed van het verloop van opbrengst en kosten voor de omvang van de winst, zowel gemiddeld als totaal", formules: ["Winst = TO - TK"] },
            { id: "d1-21", omschrijving: "De bepaling van de break-even-afzet bij een gelijkheid van totale / gemiddeld totale kosten en totale / gemiddeld totale opbrengsten", begrippen: ["break-even-afzet"] },
            { id: "d1-22", omschrijving: "De invloed van marginale opbrengsten en marginale kosten op de (maximale) winst", begrippen: ["marginale opbrengst"], formules: ["maximale winst: MO = MK"] },
            { id: "d1-23", omschrijving: "De betekenis van de markt als coördinatiemechanisme van vraag en aanbod", begrippen: ["coördinatiemechanisme"] },
            { id: "d1-24", omschrijving: "Marktevenwicht als zijnde de gelijkheid van de gevraagde en aangeboden hoeveelheid bij de evenwichtsprijs", begrippen: ["marktevenwicht", "evenwichtsprijs", "evenwichtshoeveelheid"] },
            { id: "d1-25", omschrijving: "De invloed van veranderingen in vraag en aanbod op de evenwichtsprijs, de evenwichtshoeveelheid en de totale evenwichtsopbrengst (omzet)" },
          ],
        },
        {
          id: "sub-d2", naam: "D2 — Marktstructuur", leerdoelen: [
            { id: "d2-1", omschrijving: "Het onderscheid tussen de marktvormen op basis van het aantal marktpartijen, heterogeniteit van de goederen en toetredingsmogelijkheden (alleen grafisch onderbouwen)", begrippen: ["volkomen concurrentie", "monopolistische concurrentie", "oligopolie", "monopolie", "homogeen goed", "heterogeen goed", "vrije toetreding"] },
            { id: "d2-2", omschrijving: "Het bepalen van de prijs en afzet die bij volkomen concurrentie, monopolistische concurrentie, oligopolie of monopolie maximale totale winst opleveren" },
            { id: "d2-3", omschrijving: "De mogelijkheden voor en gevolgen van prijsdiscriminatie voor de prijzen, afzet en winst bij monopolie", begrippen: ["prijsdiscriminatie"] },
          ],
        },
        {
          id: "sub-d3", naam: "D3 — Doelmatigheid en economische politiek", leerdoelen: [
            { id: "d3-1", omschrijving: "Consumentensurplus als het verschil tussen de marktprijs en de betalingsbereidheid van vragers die bereid zijn meer te betalen dan die marktprijs", begrippen: ["consumentensurplus"] },
            { id: "d3-2", omschrijving: "Producentensurplus als het verschil tussen de marktprijs en de prijs waartegen alle producenten bereid zijn aan te bieden", begrippen: ["producentensurplus"] },
            { id: "d3-3", omschrijving: "Het totale surplus als de optelsom van het consumentensurplus en het producentensurplus", begrippen: ["totaal surplus"] },
            { id: "d3-4", omschrijving: "De omvang van het totale surplus als maatstaf voor de economische doelmatigheid van de economische uitkomst", begrippen: ["economische doelmatigheid"] },
            { id: "d3-5", omschrijving: "Bij een maximaal totaal surplus (som van consumenten- en producentensurplus) is de uitkomst Pareto-efficiënt", begrippen: ["Pareto-efficiënt"] },
            { id: "d3-6", omschrijving: "De invloed van marktmacht op de omvang van het totale surplus en het verloren surplus / Harberger-driehoek (dead weight loss)", begrippen: ["marktmacht", "Harberger-driehoek", "dead weight loss"] },
            { id: "d3-7", omschrijving: "De invloed van marktmacht op de verdeling van het totale surplus tussen aanbieders en vragers" },
            { id: "d3-8", omschrijving: "De manier waarop een monopolist via prijsdiscriminatie een deel van het consumentensurplus kan afromen" },
            { id: "d3-9", omschrijving: "De invloed van overheidsingrijpen via heffingen of subsidies op het marktresultaat en daardoor op de omvang en de verdeling van het totale surplus" },
            { id: "d3-10", omschrijving: "De invloed van prijsregulering door middel van minimumprijzen of maximumprijzen op het marktresultaat en daardoor op de omvang en verdeling van het totale surplus", begrippen: ["minimumprijs", "maximumprijs"] },
            { id: "d3-11", omschrijving: "Effecten van octrooien/patenten op marktgedrag en marktresultaat", begrippen: ["octrooi", "patent"] },
          ],
        },
      ],
    },
    {
      id: "dom-e", naam: "Domein E: Concept Ruilen over de tijd", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e1", naam: "E1 — Intertemporele ruil", leerdoelen: [
            { id: "e1-1", omschrijving: "De intertemporele ruil waarbij niet in de tijd samenvallende rendementen worden vergeleken: afweging tussen individuele prijs van tijd en marktprijs van tijd", begrippen: ["intertemporele ruil"] },
            { id: "e1-2", omschrijving: "Lenen en sparen door deelnemers aan intertemporele ruil als schuiven met koopkracht / bestedingen in de tijd", begrippen: ["lenen", "sparen", "koopkracht"] },
            { id: "e1-3", omschrijving: "De keuze om al dan niet vermogen te vragen of aan te bieden met daarbij argumenten als tijdsvoorkeur en risico-aversie", begrippen: ["tijdsvoorkeur", "risico-aversie"] },
            { id: "e1-4", omschrijving: "Rente als beloning voor het uitstellen van consumptie (sparen) en het dragen van risico (lenen) en als compensatie voor inflatie; verschillende rentes door bijvoorbeeld verschillen in looptijd, risico en liquiditeit", begrippen: ["rente", "nominale rente", "reële rente", "staatsobligatie"] },
            { id: "e1-5", omschrijving: "De financiële sector bemiddelt tussen spaarders en investeerders en verschuift risico; de invloed van risico's als (dreiging van) wanbetaling en informatieasymmetrie; het risico omtrent inflatie op het gedrag van aanbieders en/of vragers van vermogen", begrippen: ["financiële sector", "wanbetaling", "informatieasymmetrie"] },
            { id: "e1-6", omschrijving: "Het onderscheid en de samenhang tussen nominale en reële grootheden", begrippen: ["nominale grootheid", "reële grootheid"] },
            { id: "e1-7", omschrijving: "Het belang van investeringen bij de vorming van publiek kapitaal zoals infrastructuur, of privaat kapitaal zoals menselijk kapitaal of kapitaalgoederen van bedrijven", begrippen: ["publiek kapitaal", "privaat kapitaal", "menselijk kapitaal"] },
            { id: "e1-8", omschrijving: "Het verschil tussen voorraad- en stroomgrootheden en hun onderlinge verband", begrippen: ["voorraadgrootheid", "stroomgrootheid"] },
            { id: "e1-9", omschrijving: "Intertemporele ruil door de overheid vergelijken met een dergelijke ruil in de private sector gelet op de staatsschuld en de bijzondere positie van het overheidstekort als uitgestelde belastingheffing", begrippen: ["staatsschuld", "overheidstekort"] },
            { id: "e1-10", omschrijving: "Belastingspreiding in de tijd als methode om welvaartsverliezen als gevolg van belastingheffing te spreiden in de tijd", begrippen: ["belastingspreiding"] },
          ],
        },
        {
          id: "sub-e2", naam: "E2 — Registratie intertemporele ruil", leerdoelen: [
            { id: "e2-1", omschrijving: "De levensloop binnen gezinshuishoudingen en de rol van de overheid: welvaartsvaste of waardevaste pensioenen/inkomens; het omslagstelsel en het kapitaaldekkingsstelsel als het gaat om de financiering van het pensioen; intergenerationele ruil", begrippen: ["omslagstelsel", "kapitaaldekkingsstelsel", "intergenerationele ruil", "welvaartsvast pensioen", "waardevast pensioen"] },
            { id: "e2-2", omschrijving: "De vermogenspositie van de overheid: de staatsschuld; het begrotingssaldo (tekort/overschot); de eisen van het Stabiliteits- en groeipact (begrotingstekort max. 3% bbp; staatsschuldquote max. 60% bbp)", begrippen: ["begrotingssaldo", "begrotingstekort", "staatsschuldquote", "Stabiliteits- en groeipact"] },
          ],
        },
      ],
    },
    {
      id: "dom-f", naam: "Domein F: Concept Samenwerken en onderhandelen", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-f1", naam: "F1 — Speltheorie", leerdoelen: [
            { id: "f1-1", omschrijving: "Het belang van voldoende en van gelijke informatie voor de spelers", begrippen: ["speltheorie", "speler", "informatie"] },
            { id: "f1-2", omschrijving: "De weergave van het spel in een pay-off matrix of een spelboom (beslisboom)", begrippen: ["pay-off matrix", "spelboom", "beslisboom"] },
            { id: "f1-3", omschrijving: "Het onderscheid tussen een simultaan, een sequentieel spel en een herhaald (simultaan) spel", begrippen: ["simultaan spel", "sequentieel spel", "herhaald spel"] },
            { id: "f1-4", omschrijving: "Het optreden van een Nash-evenwicht", begrippen: ["Nash-evenwicht"] },
            { id: "f1-5", omschrijving: "Het optreden van een gevangenendilemma waarin sprake is van een dominante strategie voor de spelers met daarbij het suboptimale Nash-evenwicht", begrippen: ["gevangenendilemma", "dominante strategie", "suboptimaal Nash-evenwicht"] },
            { id: "f1-6", omschrijving: "Een spelsituatie waarbij niet altijd een dominante strategie aanwezig is" },
            { id: "f1-7", omschrijving: "Zelfbinding als alternatief voor de eigen dominante strategie indien zelfbinding een lagere pay-off oplevert en het effect hiervan op de keuze die één of meerdere spelers gedurende het verdere verloop van het spel maken", begrippen: ["zelfbinding"] },
            { id: "f1-8", omschrijving: "De invloed van sociale normen op de pay-offs in de matrix en het effect hiervan op de keuze die één of meerdere spelers gedurende het verdere verloop van het spel maken", begrippen: ["sociale normen"] },
            { id: "f1-9", omschrijving: "Het effect van de reputatie die de spelers gedurende het spel hebben opgebouwd op de pay-offs en het effect hiervan op de keuzes gedurende het verloop van het spel", begrippen: ["reputatie"] },
            { id: "f1-10", omschrijving: "De invloed van het herhalen van een simultaan spel op de mogelijke evenwichten" },
            { id: "f1-11", omschrijving: "De invloed van zelfbinding op de geloofwaardigheid van een dreiging, bijvoorbeeld de dreiging van een prijzenoorlog bij toetreding", begrippen: ["geloofwaardige dreiging", "prijzenoorlog"] },
            { id: "f1-12", omschrijving: "De afruil tussen binding en flexibiliteit bij langdurige relaties, bijvoorbeeld arbeidsrelaties, kartelafspraken en internationale handel", begrippen: ["binding", "flexibiliteit", "kartelafspraak"] },
          ],
        },
        {
          id: "sub-f2", naam: "F2 — Suboptimale situaties", leerdoelen: [
            { id: "f2-1", omschrijving: "Het optreden van een berovingsprobleem indien er sprake is van verzonken kosten: kosten die al gemaakt zijn en niet kunnen worden teruggedraaid vanwege het specifieke karakter van de investering", begrippen: ["berovingsprobleem", "verzonken kosten"] },
            { id: "f2-2", omschrijving: "Het optreden van een tegenstelling tussen individueel en collectief belang bij collectieve goederen", begrippen: ["collectief goed", "individueel belang", "collectief belang"] },
            { id: "f2-3", omschrijving: "Het optreden van meeliftersgedrag indien er sprake is van een dominante strategie van niet bijdragen aan een collectief goed", begrippen: ["meeliftersgedrag", "free rider"] },
            { id: "f2-4", omschrijving: "Het optreden en internaliseren van positieve of negatieve externe effecten", begrippen: ["extern effect", "positief extern effect", "negatief extern effect", "internaliseren"] },
          ],
        },
      ],
    },
    {
      id: "dom-g", naam: "Domein G: Concept Risico en informatie", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-g1", naam: "G1 — Risico", leerdoelen: [
            { id: "g1-1", omschrijving: "De aard en de omvang van het risico dat ontstaat bij het nemen van een beslissing in een situatie van onzekerheid (onzeker voorval)", begrippen: ["risico", "onzekerheid"] },
            { id: "g1-2", omschrijving: "Risicoaversie en verschillen daarin tussen transactiepartners", begrippen: ["risicoaversie", "risiconeutraal", "risicozoekend"] },
          ],
        },
        {
          id: "sub-g2", naam: "G2 — Asymmetrische informatie", leerdoelen: [
            { id: "g2-1", omschrijving: "Onvolledige informatie leidt in een ruilsituatie tot transactiekosten", begrippen: ["transactiekosten"] },
            { id: "g2-2", omschrijving: "Informatieasymmetrie: informatieachterstand of informatievoorsprong van de ene transactiepartij ten opzichte van de andere partij", begrippen: ["informatieasymmetrie", "informatieachterstand", "informatievoorsprong"] },
          ],
        },
        {
          id: "sub-g3", naam: "G3 — Asymmetrische informatie in bedrijf", leerdoelen: [
            { id: "g3-1", omschrijving: "De keuze die een ondernemer maakt bij het verkrijgen van vermogen en de functie van onderpand bij het verkrijgen van krediet", begrippen: ["onderpand", "krediet"] },
            { id: "g3-2", omschrijving: "Principaal-agentrelaties, het risico op averechtse selectie en moral hazard: bij een principaal-agentrelatie is er sprake van een principaal, een agent, asymmetrische informatie en tegengestelde belangen", begrippen: ["principaal", "agent", "principaal-agentrelatie", "averechtse selectie", "moral hazard"] },
            { id: "g3-3", omschrijving: "Het hanteren van contracten in een principaal-agentrelatie en het inzetten van prikkels", begrippen: ["contract", "prikkel"] },
            { id: "g3-4", omschrijving: "De rol van toezichthouders op financiële en op andere markten", begrippen: ["toezichthouder"] },
          ],
        },
        {
          id: "sub-g4", naam: "G4 — Risico verzekeren", leerdoelen: [
            { id: "g4-1", omschrijving: "De betekenis van risicoaversie met betrekking tot het afsluiten van een verzekering" },
            { id: "g4-2", omschrijving: "De afweging tussen kosten en risico bij verzekeren door beide transactiepartijen" },
            { id: "g4-3", omschrijving: "Het effect dat (verplichte) solidariteit kan hebben op risicomanagement van verzekerden", begrippen: ["solidariteit", "verplichte verzekering"] },
            { id: "g4-4", omschrijving: "Averechtse selectie en middelen om dit te beperken: het verplicht voorschrijven van een verzekering; het instellen van een collectieve verzekering", begrippen: ["averechtse selectie", "collectieve verzekering"] },
            { id: "g4-5", omschrijving: "Moral hazard en middelen om dit te beperken: bijvoorbeeld eigen risico, bonus-malussysteem", begrippen: ["moral hazard", "eigen risico", "bonus-malussysteem"] },
          ],
        },
        {
          id: "sub-g5", naam: "G5 — Beleggen", leerdoelen: [
            { id: "g5-1", omschrijving: "De relatie tussen de hoogte van het risico en het te verwachten rendement bij beleggingen", begrippen: ["rendement", "belegging"] },
            { id: "g5-2", omschrijving: "Het verschil tussen obligaties en aandelen ten aanzien van de mate van risico en het te verwachten rendement", begrippen: ["obligatie", "aandeel"] },
          ],
        },
      ],
    },
    {
      id: "dom-h", naam: "Domein H: Concept Welvaart en groei", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-h1", naam: "H1 — Macro-economische kringloop", leerdoelen: [
            { id: "h1-1", omschrijving: "Macro-economische begrippen: vorming van het bbp via de bestedingsmethode, objectieve methode en subjectieve methode; categoriale inkomensverdeling; loonkosten per eenheid product en de arbeidsinkomensquote (AIQ)", begrippen: ["bbp", "bruto binnenlands product", "bestedingsmethode", "objectieve methode", "subjectieve methode", "categoriale inkomensverdeling", "arbeidsinkomensquote", "AIQ"], formules: ["Y = C + I + O + E – M (bestedingsmethode)", "AIQ = arbeidsinkomen / nationaal inkomen"] },
            { id: "h1-2", omschrijving: "De economische kringloop, reëel en financieel: reële kringloop (Y = C + I + O + E – M); financiële kringloop (S = I + (O – B) + (E – M)); betalingsbalans, lopende rekening en financiële rekening", begrippen: ["reële kringloop", "financiële kringloop", "betalingsbalans", "lopende rekening", "financiële rekening", "spaarsaldo"], formules: ["Y = C + I + O + E – M", "S = I + (O – B) + (E – M)", "saldo lopende rekening = nationaal spaarsaldo = particulier spaarsaldo + overheidssaldo"] },
          ],
        },
        {
          id: "sub-h2", naam: "H2 — Structurele groei", leerdoelen: [
            { id: "h2-1", omschrijving: "Op lange termijn wordt de economische groei bepaald door de groei van de productiefactoren en technologie (het aanbod) in de economie" },
            { id: "h2-2", omschrijving: "De productiefunctie Y = Af(K, L) (alleen grafisch onderbouwen): potentiële productie Y stijgt/daalt door meer/minder kapitaal (K), meer/minder arbeid (L), hogere/lagere totale factorproductiviteit (A); positieve maar afnemende meeropbrengsten van K en L; constante schaalopbrengsten", begrippen: ["productiefunctie", "totale factorproductiviteit", "kapitaal", "arbeid", "afnemende meeropbrengsten", "constante schaalopbrengsten"], formules: ["Y = Af(K, L)"] },
            { id: "h2-3", omschrijving: "Factoren die de totale factorproductiviteit bepalen: innovatie (proces- en product-), R&D, learning-by-doing, onderwijs, onderzoek, handel, betere instituties, betere infrastructuur, beter milieu, gunstige geografische ligging, politieke stabiliteit", begrippen: ["innovatie", "R&D", "learning-by-doing", "institutie"] },
            { id: "h2-4", omschrijving: "Structureel of groeibevorderend beleid: beleid dat A, K, of L verhoogt", begrippen: ["groeibevorderend beleid", "structureel beleid"] },
          ],
        },
        {
          id: "sub-h3", naam: "H3 — Inkomen, welvaart en welzijn", leerdoelen: [
            { id: "h3-1", omschrijving: "Welvaart van een huishouden: de (brede) welvaart van een gezinshuishouden is waarde van behoeftebevrediging van schaarse goederen zoals consumptie, vrije tijd, milieu, leefomgeving, collectieve goederen, infrastructuur, risico (negatief), ongelijkheid (negatief), veiligheid", begrippen: ["brede welvaart", "behoeftebevrediging"] },
            { id: "h3-2", omschrijving: "Maatschappelijke welvaart als optelsom van (brede) welvaart van alle huishoudens; maatschappelijke welvaart houdt politieke waardeoordelen in over ongelijkheid; verschil tussen welvaart en bbp", begrippen: ["maatschappelijke welvaart"] },
            { id: "h3-3", omschrijving: "Maximale maatschappelijke welvaart is niet gelijk aan Pareto-optimum: maatschappelijke welvaart neemt toe als de maatschappelijke winst van de een groter is dan het maatschappelijke verlies van de ander", begrippen: ["Pareto-optimum"] },
            { id: "h3-4", omschrijving: "Welzijn gaat over de behoeftebevrediging ontleend aan schaarse en niet-schaarse goederen; brede welvaart gaat alleen over behoeftebevrediging ontleend aan schaarse goederen", begrippen: ["welzijn", "welvaart"] },
            { id: "h3-5", omschrijving: "Groen bbp per hoofd: groen bbp = bbp minus geschatte (monetaire) waarde van schade aan milieu plus geschatte (monetaire) waarde van verbetering aan milieu", begrippen: ["groen bbp"], formules: ["groen bbp = bbp – milieuschade + milieuverbetering"] },
          ],
        },
        {
          id: "sub-h4", naam: "H4 — Ongelijkheid en herverdeling", leerdoelen: [
            { id: "h4-1", omschrijving: "Gini-coëfficiënt en percentielenratio als maatstaven voor inkomensongelijkheid", begrippen: ["Gini-coëfficiënt", "percentielenratio", "inkomensongelijkheid"] },
            { id: "h4-2", omschrijving: "Maatstaven voor inkomen kunnen verschillen: huishouden vs. individu; arbeidsinkomen vs. totaal inkomen; primair en secundair inkomen", begrippen: ["primair inkomen", "secundair inkomen", "arbeidsinkomen", "kapitaalinkomen"] },
            { id: "h4-3", omschrijving: "Ongelijkheid van vermogen", begrippen: ["vermogensongelijkheid"] },
            { id: "h4-4", omschrijving: "Nivelleren en denivelleren: met beleid verkleinen of vergroten van de relatieve inkomensverschillen tussen huishoudens", begrippen: ["nivelleren", "denivelleren"] },
            { id: "h4-5", omschrijving: "Er kan een afruil zijn tussen doelmatigheid en rechtvaardigheid als herverdeling van inkomen en vermogen leidt tot minder prikkels voor economische activiteiten (werken, sparen, scholen, ondernemen) en tot meer prikkels om te migreren of belasting te ontwijken", begrippen: ["afruil doelmatigheid-rechtvaardigheid", "prikkel", "belastingontwijking"] },
            { id: "h4-6", omschrijving: "Belasting: gemiddeld en marginaal tarief; belastingwig; progressief/degressief belastingstelsel; vlaktaks; belasting op inkomen uit arbeid, op vermogen; heffingskortingen; aftrekposten en bijtellingen; vennootschapsbelasting; indirecte belastingen (btw, accijnzen)", begrippen: ["gemiddeld tarief", "marginaal tarief", "belastingwig", "progressief belasting", "degressief belasting", "vlaktaks", "heffingskorting", "vennootschapsbelasting", "btw", "accijns"] },
            { id: "h4-7", omschrijving: "Uitkeringen en toeslagen als instrumenten voor herverdeling en verzekering", begrippen: ["uitkering", "toeslag"] },
          ],
        },
        {
          id: "sub-h5", naam: "H5 — Arbeidsmarkt en werkloosheid", leerdoelen: [
            { id: "h5-1", omschrijving: "Begrippen voor de beschrijving van de arbeidsmarkt: arbeidsaanbod (beroepsbevolking), arbeidsvraag (werkgelegenheid + openstaande vacatures), werkloosheid, vacatures, loonontwikkeling, flexwerk en zzp", begrippen: ["arbeidsaanbod", "beroepsbevolking", "arbeidsvraag", "werkgelegenheid", "vacature", "loonontwikkeling", "flexwerk", "zzp"] },
            { id: "h5-2", omschrijving: "Verschillende soorten werkloosheid: structurele werkloosheid (waaronder frictiewerkloosheid) en conjuncturele werkloosheid", begrippen: ["structurele werkloosheid", "frictiewerkloosheid", "conjuncturele werkloosheid"] },
            { id: "h5-3", omschrijving: "Verklaringen voor structurele werkloosheid en frictiewerkloosheid" },
          ],
        },
      ],
    },
    {
      id: "dom-i", naam: "Domein I: Concept Goede tijden, slechte tijden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-i1", naam: "I1 — Conjunctuur", leerdoelen: [
            { id: "i1-1", omschrijving: "Begrippen voor de beschrijving van de conjunctuur: bbp-groei & niveau; output gap; werkloosheid en werkgelegenheid; inflatie en prijspeil (consumentenprijsindex); nominale rente centrale bank; reële rente", begrippen: ["output gap", "consumentenprijsindex", "nominale rente", "reële rente"], formules: ["output gap = feitelijke productie (Y) – potentiële productie (Y*)"] },
            { id: "i1-2", omschrijving: "Conjunctuur, output gap en werkloosheid: structureel aanbod op lange termijn = potentiële productie Y*; geaggregeerde vraag = feitelijke productie Y; natuurlijke werkloosheid; hoogconjunctuur (output gap > 0); laagconjunctuur (output gap < 0)", begrippen: ["potentiële productie", "natuurlijke werkloosheid", "hoogconjunctuur", "laagconjunctuur", "overbesteding", "onderbesteding"] },
            { id: "i1-3", omschrijving: "Conjunctuur en welvaart: schommelingen in de inflatie, het inkomen en werkloosheid veroorzaken welvaartsverliezen", begrippen: ["welvaartsverlies"] },
            { id: "i1-4", omschrijving: "Reële versus nominale grootheden: koopkracht en inflatie; de relatie tussen het prijsindexcijfer, koopkracht en inflatie/deflatie; reële rente; geldillusie", begrippen: ["koopkracht", "inflatie", "deflatie", "geldillusie"], formules: ["reële rente = (1 + nominale rente) / (1 + verwachte inflatie) – 1"] },
            { id: "i1-5", omschrijving: "Conjunctuurpolitiek: het beïnvloeden van de conjunctuur door middel van monetair of begrotingsbeleid; timing en dosering van actieve begrotingspolitiek en monetair beleid", begrippen: ["conjunctuurpolitiek", "monetair beleid", "begrotingsbeleid"] },
          ],
        },
        {
          id: "sub-i2", naam: "I2 — Begrotingsbeleid", leerdoelen: [
            { id: "i2-1", omschrijving: "Anticyclisch / procyclisch begrotingsbeleid: stimulerend begrotingsbeleid (hogere uitgaven of lagere belastingen) bij laagconjunctuur en verkrappend begrotingsbeleid bij hoogconjunctuur", begrippen: ["anticyclisch beleid", "procyclisch beleid", "stimulerend beleid", "verkrappend beleid"] },
            { id: "i2-2", omschrijving: "Automatische stabilisatoren bij hoogconjunctuur en laagconjunctuur: sociale uitkeringen en belastingen", begrippen: ["automatische stabilisator"] },
            { id: "i2-3", omschrijving: "Inverdieneffecten bij het begrotingsbeleid: hogere belastinginkomsten en lagere uitgaven aan uitkeringen doordat economie wordt gestimuleerd; omgekeerde geldt bij uitverdieneffecten", begrippen: ["inverdieneffect", "uitverdieneffect"] },
          ],
        },
        {
          id: "sub-i3", naam: "I3 — Monetair beleid en de centrale bank", leerdoelen: [
            { id: "i3-1", omschrijving: "De Europese Centrale Bank (ECB) voert monetair beleid en houdt financieel toezicht", begrippen: ["ECB", "Europese Centrale Bank"] },
            { id: "i3-2", omschrijving: "De geldhoeveelheid: geld in handen van publiek in omloop; M1 als maatstaf van de maatschappelijke geldhoeveelheid", begrippen: ["geldhoeveelheid", "M1"] },
            { id: "i3-3", omschrijving: "Doelstelling monetair beleid centrale bank: enkelvoudig mandaat (prijsstabiliteit, ECB); duaal mandaat (prijsstabiliteit en economische groei, FED)", begrippen: ["enkelvoudig mandaat", "duaal mandaat", "prijsstabiliteit", "FED"] },
            { id: "i3-4", omschrijving: "Geldschepping: proces van geldschepping via simultane kredietverlening en creatie van bankdeposito's en vice versa voor geldvernietiging; hogere rente centrale bank remt kredietverlening af", begrippen: ["geldschepping", "geldvernietiging", "bankdeposito", "kredietverlening"] },
            { id: "i3-5", omschrijving: "Monetair beleid (rentebeleid): de rente van de centrale bank (ECB: refi-rente) bepaalt uiteindelijk de geldhoeveelheid; hogere rente → minder kredietverlening → lagere geldhoeveelheid", begrippen: ["refi-rente", "rentebeleid"] },
            { id: "i3-6", omschrijving: "Effectieve ondergrens nominale rente: zodra de nominale rente negatief wordt, ontstaan prikkels om vermogen contant aan te houden; in een geldeconomie kan de rente enigszins negatief worden", begrippen: ["effectieve ondergrens"] },
            { id: "i3-7", omschrijving: "Banken en financieel toezicht: bankrun kan ontstaan doordat langlopende bezittingen niet op korte termijn verkocht kunnen worden; depositogarantiestelsel vermindert kans op bankruns; ECB treedt op als lener-in-laatste-instantie", begrippen: ["bankrun", "depositogarantiestelsel", "lener-in-laatste-instantie"] },
            { id: "i3-8", omschrijving: "Rente, wisselkoersen en kapitaalverkeer: wisselkoers als prijs van een munt in termen van een andere munt; internationale concurrentiepositie; depreciatie/appreciatie; hogere rente leidt tot appreciatie; wisselkoersregimes (vast/zwevend)", begrippen: ["wisselkoers", "depreciatie", "appreciatie", "vaste wisselkoers", "zwevende wisselkoers"] },
            { id: "i3-9", omschrijving: "EMU: voordelen (voorkomen wisselkoersschommelingen); nadelen (geen aanpassing via wisselkoers); theorie optimale valutagebieden; trilemma monetair beleid (vrij kapitaalverkeer, zelfstandig monetair beleid, vaste wisselkoers: slechts twee van drie mogelijk)", begrippen: ["EMU", "muntunie", "trilemma monetair beleid", "optimaal valutagebied"] },
          ],
        },
        {
          id: "sub-i4", naam: "I4 — Conjunctuuranalyse (IS-MB-GA-model)", leerdoelen: [
            { id: "i4-1", omschrijving: "Het Keynesiaanse kruis: consumptie stijgt als besteedbaar inkomen toeneemt; investeringen zijn autonoom; evenwicht tussen bestedingen en inkomen bij gegeven rente en inflatie; bestedingen van de een zijn het inkomen van de ander; mechanisme van aanpassing van inkomen Y; effecten van consumentenvertrouwen, overheidsuitgaven en belastingen; multipliereffect", begrippen: ["Keynesiaans kruis", "autonome consumptie", "autonome investeringen", "multiplier", "marginale consumptiequote", "marginale spaarquote", "spaarlek", "belastinglek"] },
            { id: "i4-2", omschrijving: "IS-curve: geeft combinaties van inkomen en reële rente waarbij de goederenmarkt in evenwicht is; dalend verband tussen rente en inkomen; stijging autonome bestedingen verschuift IS-curve naar rechts", begrippen: ["IS-curve", "goederenmarktevenwicht"] },
            { id: "i4-3", omschrijving: "MB-curve: geeft de monetaire beleidsregel van de Centrale Bank; horizontaal verband tussen reële rente en inkomen; MB-curve schuift omhoog/omlaag als inflatie stijgt/daalt; sterkere inflatieafkeer → grotere aanpassing rente", begrippen: ["MB-curve", "monetaire beleidsregel"] },
            { id: "i4-4", omschrijving: "GA-curve: geeft het geaggregeerde aanbod bij ieder inflatieniveau; stijgend in de inflatie door loon- en prijsrigiditeit; mechanisme van verschuiving GA over de tijd via aanpassing inflatieverwachtingen", begrippen: ["GA-curve", "geaggregeerd aanbod", "loonrigiditeit", "prijsrigiditeit", "inflatieverwachting"] },
            { id: "i4-5", omschrijving: "Conjuncturele werkloosheid treedt op bij een negatieve output gap en neemt toe als de output gap negatiever wordt" },
            { id: "i4-6", omschrijving: "Economische scholen en IS-MB-GA: Keynesianen (begrotingsbeleid krachtig, IS steil, MB verschuift weinig); Monetaristen (monetair beleid krachtig, IS vlak, MB verschuift veel); Neo- en Nieuw klassieken (GA verticaal, vraagstimulering niet effectief)", begrippen: ["Keynesianen", "Monetaristen", "Neo-klassieken", "Nieuw-klassieken", "perfecte loon- en prijsflexibiliteit"] },
          ],
        },
      ],
    },
  ],
};

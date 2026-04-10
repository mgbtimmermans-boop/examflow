import { VakSyllabus } from "@/types/syllabus";

export const BIOLOGIE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "biologie-vwo",
  niveau: "VWO",
  domeinen: [
    // ─── DOMEIN A: VAARDIGHEDEN ───────────────────────────────────────────────
    {
      id: "bio-dom-a",
      code: "A",
      titel: "Vaardigheden",
      ceRelevant: true,
      subdomeinen: [
        // A1–A4: Algemene vaardigheden — alleen eindterm, niet verder gespecificeerd voor CE
        {
          id: "bio-sub-a1",
          code: "A1",
          titel: "Informatievaardigheden gebruiken",
          leerdoelen: [
            {
              id: "bio-a1-1",
              omschrijving: "De kandidaat kan doelgericht informatie zoeken, beoordelen, selecteren en verwerken.",
            },
          ],
        },
        {
          id: "bio-sub-a2",
          code: "A2",
          titel: "Communiceren",
          leerdoelen: [
            {
              id: "bio-a2-1",
              omschrijving: "De kandidaat kan adequaat schriftelijk, mondeling en digitaal in het publieke domein communiceren over onderwerpen uit het desbetreffende vakgebied.",
            },
          ],
        },
        {
          id: "bio-sub-a3",
          code: "A3",
          titel: "Reflecteren op leren",
          leerdoelen: [
            {
              id: "bio-a3-1",
              omschrijving: "De kandidaat kan bij het verwerven van vakkennis en vakvaardigheden reflecteren op eigen belangstelling, motivatie en leerproces.",
            },
          ],
        },
        {
          id: "bio-sub-a4",
          code: "A4",
          titel: "Studie en beroep",
          leerdoelen: [
            {
              id: "bio-a4-1",
              omschrijving: "De kandidaat kan aangeven op welke wijze natuurwetenschappelijke kennis in studie en beroep wordt gebruikt en kan mede op basis daarvan zijn belangstelling voor studies en beroepen onder woorden brengen.",
            },
          ],
        },
        // A5–A9: Natuurwetenschappelijke, wiskundige en technische vaardigheden
        {
          id: "bio-sub-a5",
          code: "A5",
          titel: "Onderzoeken",
          leerdoelen: [
            {
              id: "bio-a5-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem herkennen/specificeren.",
              begrippen: ["onderzoeksvraag"],
            },
            {
              id: "bio-a5-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk probleem herleiden tot een (of meerdere) onderzoeksvra(a)g(en).",
            },
            {
              id: "bio-a5-3",
              omschrijving: "De kandidaat kan verbanden leggen tussen een onderzoeksvraag en natuurwetenschappelijke kennis.",
            },
            {
              id: "bio-a5-4",
              omschrijving: "De kandidaat kan een hypothese opstellen bij een onderzoeksvraag en verwachtingen formuleren.",
              begrippen: ["hypothese"],
            },
            {
              id: "bio-a5-5",
              omschrijving: "De kandidaat kan een werkplan maken voor het uitvoeren van een natuurwetenschappelijk onderzoek ter beantwoording van een (of meerdere) onderzoeksvra(a)g(en).",
              begrippen: ["variabele", "controle-experiment"],
            },
            {
              id: "bio-a5-6",
              omschrijving: "De kandidaat kan voor de beantwoording van een onderzoeksvraag relevante waarnemingen verrichten en (meet)gegevens verzamelen.",
            },
            {
              id: "bio-a5-7",
              omschrijving: "De kandidaat kan meetgegevens verwerken en presenteren op een wijze die helpt bij de beantwoording van een onderzoeksvraag.",
            },
            {
              id: "bio-a5-8",
              omschrijving: "De kandidaat kan op grond van verzamelde gegevens van een uitgevoerd onderzoek conclusies trekken die aansluiten bij de onderzoeksvra(a)g(en) van het onderzoek.",
            },
            {
              id: "bio-a5-9",
              omschrijving: "De kandidaat kan de uitvoering en de uitkomsten van een onderzoek evalueren gebruik makend van de begrippen nauwkeurigheid, validiteit en betrouwbaarheid.",
              begrippen: ["nauwkeurigheid", "validiteit", "betrouwbaarheid"],
            },
            {
              id: "bio-a5-10",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk onderzoek op een geschikte manier presenteren.",
            },
            {
              id: "bio-a5-11",
              omschrijving: "De kandidaat kan toelichten dat er naast een experimentele onderzoeksaanpak ook andere onderzoeksaanpakken zijn.",
            },
            {
              id: "bio-a5-12",
              omschrijving: "De kandidaat kan de aard van de opbrengst van onderzoek duiden en daarbij de begrippen onzekerheid en waarschijnlijkheid hanteren.",
              begrippen: ["onzekerheid", "waarschijnlijkheid"],
            },
          ],
        },
        {
          id: "bio-sub-a6",
          code: "A6",
          titel: "Ontwerpen",
          leerdoelen: [
            {
              id: "bio-a6-1",
              omschrijving: "De kandidaat kan een ontwerpprobleem specificeren.",
            },
            {
              id: "bio-a6-2",
              omschrijving: "De kandidaat kan een ontwerpprobleem herleiden tot een aantal afzonderlijk uitwerkbare deelproblemen (taken, eigenschappen).",
            },
            {
              id: "bio-a6-3",
              omschrijving: "De kandidaat kan voor een ontwerp een programma van eisen opstellen: randvoorwaarden, eisen, prioriteiten en wensen.",
            },
            {
              id: "bio-a6-4",
              omschrijving: "De kandidaat kan verbanden leggen tussen natuurwetenschappelijke kennis en taken en eigenschappen van een ontwerp.",
            },
            {
              id: "bio-a6-5",
              omschrijving: "De kandidaat kan meerdere uitwerkingen of oplossingen per deelprobleem geven.",
            },
            {
              id: "bio-a6-6",
              omschrijving: "De kandidaat kan een beargumenteerd ontwerpvoorstel doen voor een ontwerp, rekening houdend met het programma van eisen.",
            },
            {
              id: "bio-a6-7",
              omschrijving: "De kandidaat kan een prototype van een ontwerp realiseren.",
            },
            {
              id: "bio-a6-8",
              omschrijving: "De kandidaat kan een ontwerpproces en -product testen en evalueren, rekening houdend met het programma van eisen.",
            },
            {
              id: "bio-a6-9",
              omschrijving: "De kandidaat kan voorstellen doen voor verbetering van een ontwerp.",
            },
            {
              id: "bio-a6-10",
              omschrijving: "De kandidaat kan een ontwerpproces en -product op een geschikte manier presenteren.",
            },
          ],
        },
        {
          id: "bio-sub-a7",
          code: "A7",
          titel: "Modelvorming",
          leerdoelen: [
            {
              id: "bio-a7-1",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel specificeren met als doel het te beschrijven, te verklaren of te voorspellen.",
            },
            {
              id: "bio-a7-2",
              omschrijving: "De kandidaat kan een natuurwetenschappelijk verschijnsel vereenvoudigen en de essentiële kenmerken ervan identificeren.",
              begrippen: ["model", "vereenvoudigen"],
            },
            {
              id: "bio-a7-3",
              omschrijving: "De kandidaat kan van een model de overeenkomsten en verschillen met de werkelijkheid benoemen met als doel de geschiktheid en het geldigheidsgebied van het model te bepalen.",
              begrippen: ["geldigheidsgebied"],
            },
            {
              id: "bio-a7-4",
              omschrijving: "De kandidaat kan van een model beoordelen in hoeverre het aansluit bij het doel waarvoor het ingezet wordt.",
            },
            {
              id: "bio-a7-5",
              omschrijving: "De kandidaat kan voor een model een geschikte fysieke, schematische of wiskundige weergave selecteren.",
            },
            {
              id: "bio-a7-6",
              omschrijving: "De kandidaat kan een adequaat model opstellen of bijstellen.",
            },
            {
              id: "bio-a7-7",
              omschrijving: "De kandidaat kan met een model eigenschappen van een natuurwetenschappelijk verschijnsel beschrijven, verklaren en/of voorspellen.",
            },
            {
              id: "bio-a7-8",
              omschrijving: "De kandidaat kan voorstellen doen voor de verbetering en/of uitbreiding van een model.",
            },
            {
              id: "bio-a7-9",
              omschrijving: "De kandidaat kan het tot stand komen, de opbouw of het gebruik van een model presenteren.",
            },
          ],
        },
        {
          id: "bio-sub-a8",
          code: "A8",
          titel: "Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            {
              id: "bio-a8-1",
              omschrijving: "De kandidaat kan informatie verwerven en selecteren uit schriftelijke, mondelinge en audiovisuele bronnen mede met behulp van ICT: gegevens halen uit grafieken, tabellen, tekeningen, simulaties, schema's en diagrammen; grootheden, eenheden, symbolen, formules en gegevens opzoeken in geschikte tabellen.",
            },
            {
              id: "bio-a8-2",
              omschrijving: "De kandidaat kan informatie, gegevens en meetresultaten analyseren, weergeven en structureren in grafieken, tekeningen, schema's, diagrammen en tabellen mede met behulp van ICT.",
            },
            {
              id: "bio-a8-3",
              omschrijving: "De kandidaat kan de volgende grootheden en eenheden gebruiken, daarbij gebruik makend van de prefixen van nano (n) tot en met giga (G): lengte, oppervlakte, inhoud (m, m², m³, L); massa (kg); dichtheid (kg·m⁻³); concentratie (mol·L⁻¹, g·L⁻¹, massapercentage, volumepercentage, ppm); snelheid (m·s⁻¹); diffusiesnelheid (mol·m⁻²·s⁻¹ of g·m⁻²·s⁻¹); temperatuur (°C, K); energie (J, kcal); spanning (V); druk (Pa, mmHg).",
            },
            {
              id: "bio-a8-4",
              omschrijving: "De kandidaat kan aangeven met welke technieken en apparaten de belangrijkste grootheden uit de natuurwetenschappen worden gemeten.",
            },
            {
              id: "bio-a8-5",
              omschrijving: "De kandidaat kan verantwoord omgaan met materialen, instrumenten, organismen en milieu.",
            },
            {
              id: "bio-a8-6",
              omschrijving: "De kandidaat kan een aantal voor het vak relevante reken-/wiskundige vaardigheden toepassen om natuurwetenschappelijke problemen op te lossen: rekenen met getallen in breuken en machten; rekenen met verhoudingen, percentages en gemiddelden; rekenen met oppervlakte en volume; rekenen met kansen; grafieken opstellen en daarbij rekening houden met de plaats van de afhankelijke en de onafhankelijke variabele; lineaire en exponentiële verbanden herkennen in grafieken; grafieken lezen (formuleloos), gericht op grafisch verloop en trends.",
            },
            {
              id: "bio-a8-7",
              omschrijving: "De kandidaat kan verbanden leggen op basis van tabel- en grafiekgegevens.",
            },
            {
              id: "bio-a8-8",
              omschrijving: "De kandidaat kan toelichten wat de invloed is van de verschillende variabelen in een gegeven formule op het daarmee beschreven biologische proces.",
            },
          ],
        },
        {
          id: "bio-sub-a9",
          code: "A9",
          titel: "Waarderen en oordelen",
          leerdoelen: [
            {
              id: "bio-a9-1",
              omschrijving: "De kandidaat kan een beargumenteerd oordeel geven over een situatie waarin natuurwetenschappelijke kennis een belangrijke rol speelt, dan wel een beargumenteerde keuze maken tussen alternatieven bij vraagstukken van natuurwetenschappelijke aard.",
            },
            {
              id: "bio-a9-2",
              omschrijving: "De kandidaat kan een onderscheid maken tussen wetenschappelijke argumenten, normatieve maatschappelijke overwegingen en persoonlijke opvattingen.",
            },
            {
              id: "bio-a9-3",
              omschrijving: "De kandidaat kan feiten met bronnen verantwoorden.",
            },
            {
              id: "bio-a9-4",
              omschrijving: "De kandidaat kan de betrouwbaarheid beoordelen van informatie en de waarde daarvan vaststellen voor de beantwoording van het betreffende vraagstuk.",
            },
          ],
        },
        // A11–A16: Biologie-specifieke vaardigheden (A10 Beleven is SE-only)
        {
          id: "bio-sub-a11",
          code: "A11",
          titel: "Vorm functie denken",
          leerdoelen: [
            {
              id: "bio-a11-1",
              omschrijving: "De kandidaat kan beschrijven hoe een gegeven vorm van onderdelen in een bepaald systeem (ruimtelijke vorm, materiaal, constructie en/of proces) kan leiden tot een functie.",
              begrippen: ["vorm", "functie", "organisatieniveau"],
            },
            {
              id: "bio-a11-2",
              omschrijving: "De kandidaat kan beschrijven hoe een gegeven biologische functie eisen stelt aan de vorm van de onderdelen binnen een systeem (waar dient het geheel voor? wat is daar aan vorm van onderdelen voor nodig?).",
            },
            {
              id: "bio-a11-3",
              omschrijving: "De kandidaat kan beschrijven wat de relatie is tussen bouw en werking van een systeem en de functie van dat systeem, soms over meerdere organisatieniveaus.",
              begrippen: ["bouw en werking"],
            },
          ],
        },
        {
          id: "bio-sub-a12",
          code: "A12",
          titel: "Ecologisch denken",
          leerdoelen: [
            {
              id: "bio-a12-1",
              omschrijving: "De kandidaat kan benoemen dat een ecosysteem bestaat uit een complex samenhangend geheel van componenten en interacties daartussen die samen de instandhouding, ontwikkeling en soortensamenstelling van een ecosysteem reguleren.",
              begrippen: ["ecosysteem", "levensgemeenschap"],
            },
            {
              id: "bio-a12-2",
              omschrijving: "De kandidaat kan beschrijven dat een ecosysteem wordt gereguleerd en georganiseerd vanuit kringlopen van elementen (koolstof en stikstof), energiestromen en complexe voedselrelaties over meerdere trofische niveaus.",
              begrippen: ["kringloop", "energiestroom"],
            },
            {
              id: "bio-a12-3",
              omschrijving: "De kandidaat kan verklaren hoe menselijk handelen binnen een ecosysteem op lager organisatieniveau kan leiden tot grote veranderingen op hogere organisatieniveaus.",
            },
          ],
        },
        {
          id: "bio-sub-a13",
          code: "A13",
          titel: "Evolutionair denken",
          leerdoelen: [
            {
              id: "bio-a13-1",
              omschrijving: "De kandidaat kan toelichten hoe genetische variatie in een populatie kan ontstaan.",
              begrippen: ["genetische variatie", "adaptatie", "selectiedruk"],
            },
            {
              id: "bio-a13-2",
              omschrijving: "De kandidaat kan toelichten hoe selectiedruk in populaties adaptaties bijeenbrengt die het voortplantingssucces van de soort vergroten.",
            },
            {
              id: "bio-a13-3",
              omschrijving: "De kandidaat kan verklaren hoe reproductieve isolatie kan leiden tot soortvorming.",
              begrippen: ["reproductieve isolatie", "soortvorming"],
            },
          ],
        },
        {
          id: "bio-sub-a14",
          code: "A14",
          titel: "Systeemdenken",
          leerdoelen: [
            {
              id: "bio-a14-1",
              omschrijving: "De kandidaat kan uitleggen hoe binnen één organisatieniveau de onderdelen van een biologisch systeem en de relaties daartussen (bouw en werking) samen de functie bepalen en zichzelf in stand houden.",
              begrippen: ["organisatieniveau", "molecuul", "cel", "orgaan", "organisme", "populatie", "ecosysteem", "emergente eigenschap"],
            },
            {
              id: "bio-a14-2",
              omschrijving: "De kandidaat kan toelichten hoe de werking van een biologisch systeem binnen een organisatieniveau wordt beïnvloed door onderliggende of bovenliggende organisatieniveaus.",
            },
            {
              id: "bio-a14-3",
              omschrijving: "De kandidaat kan uitleggen dat een biologisch systeem op een bepaald organisatieniveau eigenschappen kan hebben die onderliggende organisatieniveaus niet hebben.",
            },
          ],
        },
        {
          id: "bio-sub-a15",
          code: "A15",
          titel: "Kennisontwikkeling en -toepassing",
          leerdoelen: [
            {
              id: "bio-a15-1",
              omschrijving: "De kandidaat kan in contexten analyseren op welke wijze natuurwetenschappelijke en technologische kennis wordt ontwikkeld en toegepast.",
            },
          ],
        },
        {
          id: "bio-sub-a16",
          code: "A16",
          titel: "Contexten",
          leerdoelen: [
            {
              id: "bio-a16-1",
              omschrijving: "De kandidaat kan biologische vaardigheden en concepten gebruiken in verschillende leefwereldcontexten, beroepscontexten en wetenschappelijke contexten.",
            },
            {
              id: "bio-a16-2",
              omschrijving: "De kandidaat kan herkennen dat biologische concepten in verschillende contexten een verschillende betekenis kunnen hebben.",
            },
            {
              id: "bio-a16-3",
              omschrijving: "De kandidaat kan relaties leggen tussen biologische concepten en begrippen in de context.",
            },
          ],
        },
      ],
    },

    // ─── DOMEIN M: MOLECUUL- EN CELNIVEAU ────────────────────────────────────
    {
      id: "bio-dom-m",
      code: "M",
      titel: "Molecuul- en celniveau",
      ceRelevant: true,
      subdomeinen: [
        // M1: Eiwitsynthese (subdomein B1)
        {
          id: "bio-sub-m1",
          code: "M1",
          titel: "Eiwitsynthese (subdomein B1)",
          leerdoelen: [
            // M1.1 DNA
            {
              id: "bio-m1-1",
              omschrijving: "De kandidaat kan beschrijven wat de bouw is van DNA en RNA.",
              begrippen: ["nucleïnezuur", "helixstructuur", "basenparing", "nucleotide", "enkelstrengs DNA", "dubbelstrengs DNA", "chromosoom", "histon", "RNA", "waterstofbrug"],
            },
            {
              id: "bio-m1-2",
              omschrijving: "De kandidaat kan benoemen wat de verschillen zijn in de bouw van DNA en RNA.",
              begrippen: ["atoom", "molecuul", "ion", "molecuulformule", "structuurformule"],
            },
            {
              id: "bio-m1-3",
              omschrijving: "De kandidaat kan benoemen wat de functies zijn van DNA, mRNA, tRNA en rRNA.",
              begrippen: ["mRNA", "tRNA", "rRNA"],
            },
            {
              id: "bio-m1-4",
              omschrijving: "De kandidaat kan toelichten wat het verband is tussen molecuulstructuur en functie van DNA, mRNA, tRNA en rRNA.",
              begrippen: ["kern DNA", "mitochondriaal DNA", "chloroplast DNA"],
            },
            {
              id: "bio-m1-5",
              omschrijving: "De kandidaat kan beschrijven op welke manieren de basenvolgorde in het DNA bepaald kan worden.",
              begrippen: ["basenvolgorde", "genetische code", "plasmide", "primer", "PCR", "sequencen", "restrictie-enzym"],
            },
            // M1.2 Eiwitsynthese
            {
              id: "bio-m1-6",
              omschrijving: "De kandidaat kan toelichten hoe eiwitten gevormd worden op basis van de relatie tussen codon en aminozuur.",
              begrippen: ["aminozuur", "eiwit", "proteïne", "codon", "startcodon", "stopcodon", "tripletcode"],
            },
            {
              id: "bio-m1-7",
              omschrijving: "De kandidaat kan beschrijven hoe de processen van transcriptie en translatie verlopen.",
              begrippen: ["transcriptie", "translatie", "cytoplasma", "ribosoom", "golgi-systeem", "endoplasmatisch reticulum", "anticodon", "coderende streng", "afleesrichting", "template/matrijsstreng", "DNA-polymerase", "plasmide"],
            },
            {
              id: "bio-m1-8",
              omschrijving: "De kandidaat kan toelichten hoe de aminozuurvolgorde (primaire structuur) van een eiwit de bouw en werking van het eiwit bepaalt.",
              begrippen: ["primaire structuur", "secundaire structuur", "tertiaire structuur", "quaternaire structuur", "peptidebinding", "zwavelbrug"],
            },
            {
              id: "bio-m1-9",
              omschrijving: "De kandidaat kan toelichten hoe eiwitten de bouw en werking van biologische eenheden bepalen.",
            },
          ],
        },

        // M2: Stofwisseling van de cel (subdomein B2)
        {
          id: "bio-sub-m2",
          code: "M2",
          titel: "Stofwisseling van de cel (subdomein B2)",
          leerdoelen: [
            // M2.1 Homeostase
            {
              id: "bio-m2-1",
              omschrijving: "De kandidaat kan benoemen wat de kenmerken zijn van bacteriën.",
              begrippen: ["prokaryoot", "bacterie", "plasmide", "celwand", "cirkelvormig chromosoom"],
            },
            {
              id: "bio-m2-2",
              omschrijving: "De kandidaat kan benoemen wat de kenmerken zijn van virussen.",
              begrippen: ["virus", "eiwitmantel", "DNA-virus", "RNA-virus"],
            },
            {
              id: "bio-m2-3",
              omschrijving: "De kandidaat kan beschrijven hoe een eukaryote cel functioneert als een zelfstandige eenheid.",
              begrippen: ["eukaryoot", "endosymbiose", "celkern", "kernlichaampje", "kernporie", "chromosoom", "celwand", "celmembraan", "vacuole", "cytoplasma", "grondplasma", "cytoskelet", "centriolen", "mitochondrie", "endoplasmatisch reticulum", "golgi-systeem", "ribosoom", "lysosoom", "chloroplast", "chlorofyl", "plastide", "ciliën", "flagel"],
            },
            {
              id: "bio-m2-4",
              omschrijving: "De kandidaat kan benoemen wat de onderdelen zijn van eukaryote cellen.",
            },
            {
              id: "bio-m2-5",
              omschrijving: "De kandidaat kan beschrijven wat de functies zijn van de onderdelen van eukaryote cellen.",
            },
            {
              id: "bio-m2-6",
              omschrijving: "De kandidaat kan toelichten dat het dynamisch evenwicht in de cel in stand wordt gehouden in een complex netwerk van celprocessen.",
              begrippen: ["dynamisch evenwicht", "ionenpomp"],
            },
            {
              id: "bio-m2-7",
              omschrijving: "De kandidaat kan uitleggen hoe door het principe van terugkoppeling homeostase in de cel gerealiseerd wordt.",
              begrippen: ["homeostase", "terugkoppeling", "receptoreiwit", "effector", "cascade"],
            },
            // M2.2 Transport
            {
              id: "bio-m2-8",
              omschrijving: "De kandidaat kan beschrijven welke vormen er zijn van actief en passief transport.",
              begrippen: ["diffusie", "osmose", "actief transport", "passief transport", "endocytose", "exocytose", "receptoreiwit", "ionentransport", "ionenpomp"],
            },
            {
              id: "bio-m2-9",
              omschrijving: "De kandidaat kan toelichten wat de relatie is tussen de eigenschappen van de getransporteerde stoffen en de bouw en eigenschappen van membranen.",
              begrippen: ["fosfolipiden", "wateroplosbaar", "vetoplosbaar", "hydrofiel/polair", "hydrofoob/apolair"],
            },
            {
              id: "bio-m2-10",
              omschrijving: "De kandidaat kan toelichten dat effecten van osmotische werking verschillen bij plantaardige en dierlijke cellen.",
              begrippen: ["plasmolyse", "turgor"],
            },
            {
              id: "bio-m2-11",
              omschrijving: "De kandidaat kan uitleggen dat door de aanwezigheid van een selectief doorlaatbaar celmembraan de celinhoud permanent verschilt van de celomgeving.",
              begrippen: ["semipermeabel membraan", "selectief permeabel", "isotonisch", "hypotonisch", "hypertonisch", "osmotische druk", "osmotische waarde", "waterpotentiaal"],
            },
            {
              id: "bio-m2-12",
              omschrijving: "De kandidaat kan beschrijven wat de rol is van het cytoskelet bij transportprocessen.",
              begrippen: ["motoreiwit", "cytoskelet"],
            },
            // M2.3 Assimilatie en dissimilatie
            {
              id: "bio-m2-13",
              omschrijving: "De kandidaat kan beschrijven dat cellen stoffen opnemen en afgeven.",
              begrippen: ["autotroof", "heterotroof", "assimilatie", "dissimilatie"],
            },
            {
              id: "bio-m2-14",
              omschrijving: "De kandidaat kan beschrijven dat in cellen chemische reacties plaatsvinden, gekatalyseerd door enzymen.",
              begrippen: ["chemische reactie", "katalyseren", "enzym", "evenwichtsreacties"],
            },
            {
              id: "bio-m2-15",
              omschrijving: "De kandidaat kan beschrijven dat er verschillende vormen van energie zijn.",
              begrippen: ["chemische energie", "lichtenergie", "kinetische energie", "warmte", "ADP", "ATP", "NAD+", "NADH", "NADP+", "NADPH"],
            },
            {
              id: "bio-m2-16",
              omschrijving: "De kandidaat kan beschrijven dat de verschillende vormen van energie in elkaar kunnen overgaan.",
            },
            {
              id: "bio-m2-17",
              omschrijving: "De kandidaat kan beschrijven hoe fotosynthese verloopt in cellen met chloroplasten.",
              begrippen: ["fotosynthese", "C-assimilatie", "chloroplast", "lichtreactie", "donkerreactie", "elektromagnetisch spectrum"],
            },
            {
              id: "bio-m2-18",
              omschrijving: "De kandidaat kan beschrijven dat assimilatieprocessen plaatsvinden in planten en dieren.",
              begrippen: ["voortgezette assimilatie", "bouwstof", "brandstof", "reservestof", "koolhydraat", "monosacharide", "disacharide", "polysacharide", "zetmeel", "glycogeen", "cellulose", "vet", "vetzuur", "glycerol", "eiwit", "aminozuur", "essentieel aminozuur", "niet-essentieel aminozuur", "DNA", "enzym", "fosfolipide", "tussencelstof"],
            },
            {
              id: "bio-m2-19",
              omschrijving: "De kandidaat kan toelichten dat assimilatieprocessen leiden tot de aanmaak van bouwstoffen, brandstoffen, reservestoffen en enzymen.",
            },
            {
              id: "bio-m2-20",
              omschrijving: "De kandidaat kan toelichten hoe anaerobe dissimilatie plaatsvindt.",
              begrippen: ["anaeroob", "glycolyse", "gisting", "alcohol", "melkzuur", "methaan"],
            },
            {
              id: "bio-m2-21",
              omschrijving: "De kandidaat kan toelichten hoe aerobe dissimilatie plaatsvindt.",
              begrippen: ["aeroob", "verbranding", "citroenzuurcyclus", "oxidatieve fosforylering", "oxidator", "reductor"],
              formules: ["Fotosynthese: 6CO₂ + 6H₂O + lichtenergie → C₆H₁₂O₆ + 6O₂", "Aerobe dissimilatie: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie"],
            },
            {
              id: "bio-m2-22",
              omschrijving: "De kandidaat kan toelichten met behulp van reactievergelijkingen hoe assimilatieprocessen en dissimilatieprocessen (en ook de deelreacties daarvan) verlopen.",
              begrippen: ["reactievergelijking", "molecuulformule", "structuurformule"],
            },
            {
              id: "bio-m2-23",
              omschrijving: "De kandidaat kan toelichten waar en hoe enzymen reacties katalyseren.",
              begrippen: ["enzymwerking", "katalyseren", "substraat", "enzym-substraatcomplex", "indicator"],
            },
            {
              id: "bio-m2-24",
              omschrijving: "De kandidaat kan toelichten hoe temperatuur en pH enzymwerking beïnvloeden.",
              begrippen: ["pH", "denaturatie", "optimumkromme"],
            },
            {
              id: "bio-m2-25",
              omschrijving: "De kandidaat kan toelichten hoe in de biotechnologie gebruik gemaakt wordt van het metabolisme van micro-organismen.",
              begrippen: ["fermentatie", "recombinant-DNA-technologie", "micro-organismen"],
            },
            {
              id: "bio-m2-26",
              omschrijving: "De kandidaat kan uitleggen wat de verschillen zijn tussen fotosynthese en chemosynthese.",
              begrippen: ["fotosynthese", "chemosynthese"],
            },
          ],
        },

        // M3: Zelforganisatie van cellen (subdomein C1)
        {
          id: "bio-sub-m3",
          code: "M3",
          titel: "Zelforganisatie van cellen (subdomein C1)",
          leerdoelen: [
            // M3.1 Genexpressie
            {
              id: "bio-m3-1",
              omschrijving: "De kandidaat kan beschrijven dat DNA bij eukaryoten voor het grootste deel niet coderend is.",
              begrippen: ["DNA", "niet-coderend DNA", "genetische code"],
            },
            {
              id: "bio-m3-2",
              omschrijving: "De kandidaat kan beschrijven dat genen bij eukaryoten voor een groot gedeelte uit introns bestaan.",
              begrippen: ["introns", "exons", "cDNA"],
            },
            {
              id: "bio-m3-3",
              omschrijving: "De kandidaat kan beschrijven hoe het proces van genexpressie tot en met eiwitsynthese verloopt.",
              begrippen: ["genexpressie", "chromosoom", "gen", "RNA", "eiwit", "startcodon", "stopcodon", "RNA-polymerase", "splicing"],
            },
            {
              id: "bio-m3-4",
              omschrijving: "De kandidaat kan toelichten dat genen afhankelijk van de omstandigheden tot expressie komen.",
            },
            {
              id: "bio-m3-5",
              omschrijving: "De kandidaat kan toelichten dat in verschillende typen cellen verschillende eiwitten gemaakt worden.",
              begrippen: ["enzym", "receptor", "membraaneiwit", "transporteiwit", "eiwithormoon", "structuureiwit", "antistof", "motoreiwit"],
            },
            {
              id: "bio-m3-6",
              omschrijving: "De kandidaat kan beredeneren hoe genexpressie het functioneren van een organisme beïnvloedt.",
              begrippen: ["knock-out-gen", "fenotype"],
            },
            // M3.2 Celdifferentiatie
            {
              id: "bio-m3-7",
              omschrijving: "De kandidaat kan beschrijven dat vrijwel alle cellen van een meercellig organisme hetzelfde genotype hebben.",
              begrippen: ["genotype"],
            },
            {
              id: "bio-m3-8",
              omschrijving: "De kandidaat kan beschrijven hoe door differentiatie cellen ontstaan met een verschillende vorm en functie.",
              begrippen: ["celtype", "celdifferentiatie", "specialisatie"],
            },
            {
              id: "bio-m3-9",
              omschrijving: "De kandidaat kan beschrijven dat celdifferentiatie tot stand komt door het aan- en/of uitschakelen van genen.",
            },
            {
              id: "bio-m3-10",
              omschrijving: "De kandidaat kan beschrijven welke eigenschappen stamcellen hebben.",
              begrippen: ["stamcel", "typen stamcellen"],
            },
            {
              id: "bio-m3-11",
              omschrijving: "De kandidaat kan toelichten voor welke doelen stamcellen gebruikt kunnen worden.",
              begrippen: ["stamcelonderzoek", "stamceltransplantatie"],
            },
            {
              id: "bio-m3-12",
              omschrijving: "De kandidaat kan toelichten dat een cel in staat is tot apoptose.",
              begrippen: ["apoptose", "lysosoom", "kanker"],
            },
            {
              id: "bio-m3-13",
              omschrijving: "De kandidaat kan toelichten dat apoptose een rol kan spelen tijdens de ontwikkeling van een meercellig organisme.",
            },
          ],
        },

        // M4: Moleculaire en cellulaire interactie (subdomeinen D1 en D2)
        {
          id: "bio-sub-m4",
          code: "M4",
          titel: "Moleculaire en cellulaire interactie (subdomeinen D1 en D2)",
          leerdoelen: [
            // M4.1 Genregulatie
            {
              id: "bio-m4-1",
              omschrijving: "De kandidaat kan uitleggen wat het belang is van genregulatie.",
              begrippen: ["genregulatie"],
            },
            {
              id: "bio-m4-2",
              omschrijving: "De kandidaat kan beschrijven hoe de genregulatie bij prokaryoten plaatsvindt.",
              begrippen: ["structuurgen", "regulatorgen", "promotor", "operator", "repressor"],
            },
            {
              id: "bio-m4-3",
              omschrijving: "De kandidaat kan beschrijven hoe de genregulatie bij eukaryoten plaatsvindt.",
              begrippen: ["promotor", "transcriptiefactor", "activator"],
            },
            {
              id: "bio-m4-4",
              omschrijving: "De kandidaat kan toelichten dat genexpressie een dynamisch proces is dat geregeld wordt door verschillende factoren.",
              begrippen: ["nucleosoom", "methylering", "epigenetica", "RNAi"],
            },
            {
              id: "bio-m4-5",
              omschrijving: "De kandidaat kan uitleggen dat mutagene factoren de genregulatie verstoren.",
              begrippen: ["mutagene factor", "proto-oncogen", "tumorsuppressorgen"],
            },
            // M4.2 Celcommunicatie
            {
              id: "bio-m4-6",
              omschrijving: "De kandidaat kan beschrijven hoe cellen signalen ontvangen, verwerken en er op reageren.",
              begrippen: ["signaalstof", "receptor", "respons", "second messenger", "signaalcascade"],
            },
            {
              id: "bio-m4-7",
              omschrijving: "De kandidaat kan beschrijven hoe de signaalverwerking verloopt.",
              begrippen: ["synaps", "natrium/kalium-pomp", "impulsgeleiding", "sprongsgewijze impulsgeleiding", "neurotransmitter", "rustpotentiaal", "actiepotentiaal", "prikkeldrempel", "refractaire periode", "exciterend", "inhiberend"],
            },
            {
              id: "bio-m4-8",
              omschrijving: "De kandidaat kan herkennen hoe cellen met elkaar communiceren over korte en over lange afstand via zenuwcellen en via hormonen.",
              begrippen: ["zenuwcel", "cell junctions", "neurotransmitter", "hormoon", "cytokine"],
            },
            {
              id: "bio-m4-9",
              omschrijving: "De kandidaat kan onderscheiden dat er responsen in het cytoplasma zijn en dat er responsen zijn die genexpressie bevorderen.",
              begrippen: ["steroïdhormoon", "peptidehormoon", "receptor in celmembraan", "receptor in het cytoplasma"],
            },
            {
              id: "bio-m4-10",
              omschrijving: "De kandidaat kan afleiden welke effecten celcommunicatie op andere organisatieniveaus teweegbrengt.",
              begrippen: ["celcommunicatie"],
            },
          ],
        },

        // M7: Reproductie van het organisme (subdomein E3.2) — Erfelijke eigenschap
        {
          id: "bio-sub-m7",
          code: "M7",
          titel: "Reproductie van het organisme — Erfelijke eigenschap (subdomein E3.2)",
          leerdoelen: [
            {
              id: "bio-m7-1",
              omschrijving: "De kandidaat kan uitleggen dat een fenotype ontstaat onder invloed van een combinatie van genotype en milieufactoren.",
              begrippen: ["gen", "allel", "genoom", "genotype", "fenotype", "milieufactor"],
            },
            {
              id: "bio-m7-2",
              omschrijving: "De kandidaat kan benoemen dat de genen zijn verdeeld over autosomen en geslachtschromosomen.",
              begrippen: ["chromosoom", "autosoom", "geslachtschromosoom", "X-chromosoom", "Y-chromosoom"],
            },
            {
              id: "bio-m7-3",
              omschrijving: "De kandidaat kan toelichten dat bij de mens de geslachtschromosomen (meestal) het geslacht bepalen.",
            },
            {
              id: "bio-m7-4",
              omschrijving: "De kandidaat kan bepalen aan de hand van stambomen of kruisingsschema's wat de kans is op een bepaald genotype en een bepaald fenotype bij monohybride en dihybride kruisingen.",
              begrippen: ["monohybride kruising", "dihybride kruising", "dominant", "onvolledig dominant", "recessief", "intermediair", "stamboom", "kruisingsschema", "homozygoot", "heterozygoot", "X-chromosomaal", "multipele allelen", "letale factor", "gekoppelde genen"],
            },
            {
              id: "bio-m7-5",
              omschrijving: "De kandidaat kan verklaren dat mitochondriale overerving en epigenetica kunnen leiden tot een ander overervingspatroon (dan volgens de wetten van Mendel).",
              begrippen: ["mitochondriaal DNA", "epigenetica"],
            },
            {
              id: "bio-m7-6",
              omschrijving: "De kandidaat kan toelichten met behulp van ethische en biologische argumenten dat er verschillende standpunten zijn over het ingrijpen in de erfelijkheid van prokaryote en eukaryote organismen.",
              begrippen: ["ethisch argument", "biologisch argument"],
            },
          ],
        },

        // M8: Selectie (subdomein F1)
        {
          id: "bio-sub-m8",
          code: "M8",
          titel: "Selectie (subdomein F1)",
          leerdoelen: [
            // M8.1 DNA
            {
              id: "bio-m8-1",
              omschrijving: "De kandidaat kan benoemen dat DNA functioneert als universele drager van genetische informatie.",
              begrippen: ["DNA", "genetische informatie", "genetische code", "genoom"],
            },
            {
              id: "bio-m8-2",
              omschrijving: "De kandidaat kan toelichten dat dezelfde genetische informatie in verschillende organismen voor kan komen.",
            },
            {
              id: "bio-m8-3",
              omschrijving: "De kandidaat kan toelichten hoe met gegevens verkregen door DNA-analyse de graad van verwantschap van soorten kan worden vastgesteld.",
              begrippen: ["DNA-analyse", "verwantschap"],
            },
            // M8.2 Mutatie
            {
              id: "bio-m8-4",
              omschrijving: "De kandidaat kan beschrijven welke typen mutatie er zijn.",
              begrippen: ["chromosoom", "gen", "allel", "puntmutatie", "deletie", "insertie", "genoommutatie", "leesraamverschuiving/frame shift mutatie"],
            },
            {
              id: "bio-m8-5",
              omschrijving: "De kandidaat kan beschrijven waardoor mutaties veroorzaakt kunnen worden.",
              begrippen: ["mutagene stof", "mutagene straling", "DNA-repairsysteem", "genetische modificatie"],
            },
            {
              id: "bio-m8-6",
              omschrijving: "De kandidaat kan uitleggen dat mutaties het fenotype kunnen beïnvloeden.",
              begrippen: ["genotype", "fenotype"],
            },
            {
              id: "bio-m8-7",
              omschrijving: "De kandidaat kan toelichten dat mutaties per toeval plaatsvinden.",
              begrippen: ["overlevingskans"],
            },
            // M8.3 Recombinatie
            {
              id: "bio-m8-8",
              omschrijving: "De kandidaat kan uitleggen hoe bij geslachtelijke voortplanting voortplantingscellen met een unieke combinatie van genen ontstaan door recombinatie van chromosomen en delen daarvan.",
              begrippen: ["geslachtelijke voortplanting", "meiose", "haplotype", "homologe chromosomen", "autosoom", "geslachtschromosoom", "genoom", "gekoppelde genen", "crossing-over"],
            },
            // M8.4 Genetische variatie
            {
              id: "bio-m8-9",
              omschrijving: "De kandidaat kan uitleggen hoe genetische variatie in een populatie in stand wordt gehouden door mutatie en recombinatie.",
              begrippen: ["genetische variatie", "mutatie", "recombinatie", "fenotype", "genotype", "genenpool", "aanpassing", "inteelt"],
            },
            {
              id: "bio-m8-10",
              omschrijving: "De kandidaat kan uitleggen hoe door de mens gewenste genencombinaties verkregen worden door genetische modificatie.",
              begrippen: ["genetische modificatie"],
            },
            {
              id: "bio-m8-11",
              omschrijving: "De kandidaat kan herkennen dat wetenschappers genetische modificatietechnieken gebruiken.",
              begrippen: ["recombinant-DNA-technologie", "cisgeen", "transgeen"],
            },
          ],
        },
      ],
    },

    // ─── DOMEIN O: ORGAAN- EN ORGANISMENIVEAU ────────────────────────────────
    {
      id: "bio-dom-o",
      code: "O",
      titel: "Orgaan- en organismeniveau",
      ceRelevant: true,
      subdomeinen: [
        // O1: Stofwisseling van het organisme (subdomein B3)
        {
          id: "bio-sub-o1",
          code: "O1",
          titel: "Stofwisseling van het organisme (subdomein B3)",
          leerdoelen: [
            // O1.1 Orgaan
            {
              id: "bio-o1-1",
              omschrijving: "De kandidaat kan beschrijven hoe groepen van cellen door hun rangschikking in een weefsel, orgaan of orgaanstelsel een gezamenlijke functie uitoefenen.",
              begrippen: ["cel", "weefsel", "orgaan", "orgaanstelsel"],
            },
            {
              id: "bio-o1-2",
              omschrijving: "De kandidaat kan herkennen wat de verschillen en overeenkomsten zijn tussen organen en orgaanstelsels van de mens en verschillende diersoorten.",
            },
            {
              id: "bio-o1-3",
              omschrijving: "De kandidaat kan uitleggen hoe orgaanstelsels met elkaar samenhangen.",
            },
            {
              id: "bio-o1-4",
              omschrijving: "De kandidaat kan beargumenteren hoe verstoring in het functioneren van een orgaan de samenwerking tussen organen beïnvloedt.",
            },
            {
              id: "bio-o1-5",
              omschrijving: "De kandidaat kan toelichten welke verschillen er zijn in ademhaling, vertering, uitscheiding en transport bij prokaryoten, planten en dieren.",
              begrippen: ["gaswisseling", "vertering", "uitscheiding", "transport"],
            },
            // O1.2 Fotosynthese
            {
              id: "bio-o1-6",
              omschrijving: "De kandidaat kan beschrijven dat organismen door fotosynthese autotroof zijn.",
              begrippen: ["fotosynthese", "koolstofassimilatie", "anorganische stof", "organische stof", "autotroof", "heterotroof"],
            },
            {
              id: "bio-o1-7",
              omschrijving: "De kandidaat kan benoemen wat voorwaarden zijn voor fotosynthese in planten.",
              begrippen: ["beperkende factor", "chloroplast"],
            },
            {
              id: "bio-o1-8",
              omschrijving: "De kandidaat kan beschrijven wat het belang is van fotosynthese als basis voor de voortgezette assimilatie en dissimilatie van het organisme.",
              begrippen: ["voortgezette assimilatie", "dissimilatie"],
            },
            // O1.3 Ademhaling
            {
              id: "bio-o1-9",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van gaswisselingsorganen van eukaryoten, in het bijzonder van de mens.",
              begrippen: ["gaswisseling", "longen", "luchtpijp", "bronchie", "longblaasje"],
            },
            {
              id: "bio-o1-10",
              omschrijving: "De kandidaat kan uitleggen wat de relatie is tussen de bouw van gaswisselingsorganen, hun werking en hun functie.",
            },
            {
              id: "bio-o1-11",
              omschrijving: "De kandidaat kan uitleggen op welke wijze longventilatie tot stand komt en wordt geregeld.",
              begrippen: ["ademhalingsspieren", "ventilatiebewegingen", "longcapaciteit", "vitale capaciteit", "restvolume", "interpleurale ruimte", "dode ruimte", "chemoreceptor", "ademhalingscentrum"],
            },
            {
              id: "bio-o1-12",
              omschrijving: "De kandidaat kan uitleggen hoe opname, transport en afgifte van zuurstof en koolstofdioxide plaatsvinden en wat de rol van hemoglobine en myoglobine daarbij is.",
              begrippen: ["diffusie", "gaswisseling", "wet van Fick", "zuurstofconcentratie/zuurstofdruk", "zuurstoftransport", "hemoglobine", "myoglobine", "Bohr-effect", "koolstofdioxideconcentratie/koolstofdioxidedruk", "koolstofdioxidetransport", "verzadigingscurve"],
            },
            {
              id: "bio-o1-13",
              omschrijving: "De kandidaat kan beschrijven wat bij planten de relatie is tussen enerzijds gaswisseling en anderzijds fotosynthese en dissimilatie.",
              begrippen: ["huidmondje"],
            },
            // O1.4 Vertering
            {
              id: "bio-o1-14",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van (spijs)verteringsorganen van dieren, in het bijzonder van de mens.",
              begrippen: ["(spijs)vertering", "speekselklier", "slokdarm", "maag", "twaalfvingerige darm", "alvleesklier", "lever", "galblaas", "dunne darm", "dikke darm", "endeldarm", "kringspier", "lengtespier", "darmperistaltiek"],
            },
            {
              id: "bio-o1-15",
              omschrijving: "De kandidaat kan uitleggen wat de relatie is tussen de bouw van (spijs)verteringsorganen, hun werking en hun functie.",
            },
            {
              id: "bio-o1-16",
              omschrijving: "De kandidaat kan beschrijven waar en op welke wijze voedingsstoffen verteerd worden en welke factoren dit kunnen beïnvloeden.",
              begrippen: ["voedingsstof", "voedingsvezel", "mechanische vertering", "chemische vertering", "verteringssap", "enzymen voor koolhydraatvertering", "pro-enzymen en enzymen voor eiwitvertering", "enzymen voor vetvertering", "emulgeren", "gal", "verteringsproduct"],
            },
            {
              id: "bio-o1-17",
              omschrijving: "De kandidaat kan beschrijven waar en op welke wijze voedingsstoffen opgenomen worden en welke factoren dit kunnen beïnvloeden.",
              begrippen: ["resorptie", "darmvlok", "darmbacterie"],
            },
            // O1.5 Uitscheiding
            {
              id: "bio-o1-18",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van uitscheidingsorganen van eukaryoten, in het bijzonder van de mens.",
              begrippen: ["uitscheiding", "lever", "leverlobje", "nier", "niereenheid", "niermerg", "nierschors", "kapsel van Bowman", "glomerulus", "nierbuisjes", "urineblaas", "long", "huid", "zweetklier"],
            },
            {
              id: "bio-o1-19",
              omschrijving: "De kandidaat kan uitleggen wat de relatie is tussen de bouw van uitscheidingsorganen, hun werking en hun functie.",
            },
            {
              id: "bio-o1-20",
              omschrijving: "De kandidaat kan toelichten wat de rol is van de lever, de nieren, de longen en de huid bij uitscheidingprocessen.",
              begrippen: ["gal", "galzouten", "galkleurstof", "ureum", "waterhuishouding", "osmotische waarde", "ultrafiltratie", "reabsorptie/terugresorptie", "voorurine", "urine", "ADH", "zweet"],
            },
            // O1.6 Transport
            {
              id: "bio-o1-21",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van de bloedsomloop van dieren, in het bijzonder van de mens.",
              begrippen: ["open circulatiesysteem", "gesloten bloedsomloop", "enkele bloedsomloop", "dubbele bloedsomloop", "grote bloedsomloop", "kleine bloedsomloop", "hart", "hartklep", "sinusknoop", "AV-knoop", "bundel van His", "diastole", "systole", "hartslagfrequentie", "slagvolume", "slagader", "ader", "haarvat", "bloeddruk", "bovendruk", "onderdruk", "tegenstroomprincipe"],
            },
            {
              id: "bio-o1-22",
              omschrijving: "De kandidaat kan beschrijven wat de relatie is tussen de bouw van hart en bloedvaten, hun werking en hun functie.",
            },
            {
              id: "bio-o1-23",
              omschrijving: "De kandidaat kan toelichten welke verschillen en overeenkomsten er bestaan tussen de embryonale bloedsomloop van de mens en de bloedsomloop na de geboorte.",
              begrippen: ["embryonale bloedsomloop", "navelstrengslagader", "navelstrengader", "foramen ovale", "ductus Botalli"],
            },
            {
              id: "bio-o1-24",
              omschrijving: "De kandidaat kan beschrijven wat de functie is van de bestanddelen van bloed, bloedplasma, weefselvloeistof en lymfe.",
              begrippen: ["bloedsamenstelling", "bloedplasma", "voedingsstoffen", "afvalstoffen", "cholesterol", "rode bloedcel", "witte bloedcel", "bloedplaatje", "beenmerg", "zuurstoftransport", "hemoglobine", "koolstofdioxidetransport", "bloedstolling", "weefselvloeistof", "lymfe"],
            },
            {
              id: "bio-o1-25",
              omschrijving: "De kandidaat kan toelichten hoe weefselvloeistof en lymfe worden gevormd.",
              begrippen: ["bloedvatenstelsel", "lymfesysteem", "lymfevat", "filtratiedruk", "colloïd-osmotische druk", "oedeem", "borstbuis"],
            },
            {
              id: "bio-o1-26",
              omschrijving: "De kandidaat kan beschrijven wat het verband is tussen het bloedvatenstelsel en het lymfevatenstelsel.",
            },
            {
              id: "bio-o1-27",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van het transportstelsel in planten.",
              begrippen: ["wortelhaar", "houtvat", "worteldruk", "cohesiekracht", "adhesiekracht", "verdamping", "bastvat", "assimilatieproduct", "organische sapstroom", "anorganische sapstroom"],
            },
          ],
        },

        // O2: Zelfregulatie van het organisme (subdomein B4)
        {
          id: "bio-sub-o2",
          code: "O2",
          titel: "Zelfregulatie van het organisme (subdomein B4)",
          leerdoelen: [
            // O2.1 Homeostase
            {
              id: "bio-o2-1",
              omschrijving: "De kandidaat kan beschrijven hoe longen, lever, nieren, huid, zenuwstelsel en hormoonstelsel bijdragen aan de homeostase bij de mens.",
              begrippen: ["zenuwstelsel", "zintuigen", "hormoonstelsel", "receptor", "inwendig milieu", "uitwendig milieu", "osmotische waarde", "pH", "temperatuurregulatie", "zuurstofconcentratie", "koolstofdioxideconcentratie", "glucoseconcentratie", "waterhuishouding"],
            },
            {
              id: "bio-o2-2",
              omschrijving: "De kandidaat kan beschrijven wat de relatie is tussen de bouw van de lever, longen, huid en nieren en de homeostase.",
              begrippen: ["bufferende werking van hemoglobine en HCO₃⁻", "chemische receptoren", "drukreceptoren in de aorta"],
            },
            {
              id: "bio-o2-3",
              omschrijving: "De kandidaat kan toelichten wat de principes van een regelkring zijn.",
              begrippen: ["regelkring", "positieve terugkoppeling", "negatieve terugkoppeling"],
            },
            {
              id: "bio-o2-4",
              omschrijving: "De kandidaat kan afleiden hoe een regelkring verloopt aan de hand van een beschrijving van de regulatie van lichaamsprocessen.",
            },
            {
              id: "bio-o2-5",
              omschrijving: "De kandidaat kan beschrijven wat de samenhang is van de regeling van lichaamsprocessen.",
              begrippen: ["inwendig milieu", "uitwendig milieu"],
            },
            {
              id: "bio-o2-6",
              omschrijving: "De kandidaat kan beargumenteren op welke wijze verstoring van het dynamisch evenwicht kan ontstaan en kan worden tegengegaan.",
              begrippen: ["dynamisch evenwicht"],
            },
            // O2.2 Hormonale regulatie
            {
              id: "bio-o2-7",
              omschrijving: "De kandidaat kan beargumenteren hoe de werking is van een regelkring in het hormoonstelsel.",
              begrippen: ["hormoon", "hormoonklier", "exocrien", "endocrien", "hormoonstelsel", "hormoonconcentratie", "doelwitorgaan", "hormoonreceptor", "releasing hormoon", "positieve terugkoppeling", "negatieve terugkoppeling"],
            },
            {
              id: "bio-o2-8",
              omschrijving: "De kandidaat kan afleiden hoe de doelwitorganen op de hormonen reageren.",
            },
            {
              id: "bio-o2-9",
              omschrijving: "De kandidaat kan beschrijven hoe hormoonklieren en hun specifieke hormonen werken.",
              begrippen: ["hypothalamus", "hypofyse", "schildklier", "nier", "bijnier", "eierstok", "teelbal", "eilandje van Langerhans", "insuline", "glucagon", "adrenaline", "schildklierhormoon", "(spijs)verteringshormoon", "EPO", "geslachtshormoon", "receptor in celmembraan", "receptor in cytoplasma"],
            },
            {
              id: "bio-o2-10",
              omschrijving: "De kandidaat kan beschrijven wat het verband is tussen hormonale regulatie en het handhaven van homeostase.",
            },
            // O2.3 Neurale regulatie
            {
              id: "bio-o2-11",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van het zenuwstelsel.",
              begrippen: ["centraal zenuwstelsel", "perifeer zenuwstelsel", "grote hersenen", "kleine hersenen", "centra in de hersenschors", "witte stof", "grijze stof", "hersenstam", "ruggenmerg", "autonoom zenuwstelsel", "animaal zenuwstelsel", "orthosympatisch zenuwstelsel", "parasympatisch zenuwstelsel", "sensorisch neuron", "schakelneuron", "motorisch neuron", "cel van Schwann", "myelineschede", "prikkel", "impuls", "temperatuurreceptor", "lichtreceptor", "tastreceptor", "pijnzenuw"],
            },
            {
              id: "bio-o2-12",
              omschrijving: "De kandidaat kan beschrijven hoe signaalverwerking tot stand komt.",
            },
            {
              id: "bio-o2-13",
              omschrijving: "De kandidaat kan toelichten hoe een regelkring in het zenuwstelsel werkt.",
              begrippen: ["regelkring", "reflexboog", "exciterend", "inhiberend"],
            },
            {
              id: "bio-o2-14",
              omschrijving: "De kandidaat kan beschrijven wat het verband is tussen de werking van het zenuwstelsel en het functioneren van een organisme.",
            },
          ],
        },

        // O3: Afweer van het organisme (subdomein B5)
        {
          id: "bio-sub-o3",
          code: "O3",
          titel: "Afweer van het organisme (subdomein B5)",
          leerdoelen: [
            {
              id: "bio-o3-1",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van organen en cellen betrokken bij de afweer van de mens.",
              begrippen: ["huid", "slijmvliezen", "bloed", "lymfe", "beenmerg", "lymfeknoop", "macrofagen", "T-helpercel", "cytotoxische T-cel", "B-cel", "plasmacel", "geheugencel", "mestcel"],
            },
            {
              id: "bio-o3-2",
              omschrijving: "De kandidaat kan toelichten wat de onderlinge relatie is tussen de organen en cellen die betrokken zijn bij de afweer van de mens.",
            },
            {
              id: "bio-o3-3",
              omschrijving: "De kandidaat kan beschrijven wat de werking van de aangeboren (niet-specifieke) afweer is.",
              begrippen: ["aangeboren afweer", "verworven afweer", "natuurlijke immuniteit", "kunstmatige immuniteit", "actieve immuniteit", "passieve immuniteit", "lichaamseigen", "lichaamsvreemd"],
            },
            {
              id: "bio-o3-4",
              omschrijving: "De kandidaat kan beschrijven wat de werking van de verworven (specifieke) afweer is.",
              begrippen: ["humorale respons", "cellulaire respons", "antigeen", "antistof", "MHC-I-receptor", "MHC-II-receptor", "vaccinatie", "transplantatie", "allergie", "bloedtransfusie", "AB0-systeem", "resusfactor", "donor", "acceptor"],
            },
            {
              id: "bio-o3-5",
              omschrijving: "De kandidaat kan toelichten wat de reactie op lichaamseigen en lichaamsvreemde stoffen en cellen is.",
            },
            {
              id: "bio-o3-6",
              omschrijving: "De kandidaat kan benoemen wat de verschillen zijn tussen verschillende typen ziekteverwekkers.",
              begrippen: ["virus", "bacterie", "schimmel", "parasiet", "antibioticum", "resistentie"],
            },
            {
              id: "bio-o3-7",
              omschrijving: "De kandidaat kan herkennen wat de afweermechanismen van planten zijn.",
              begrippen: ["mechanische afweer", "chemische afweer", "resistentie"],
            },
          ],
        },

        // O9: Reproductie van het organisme (subdomein E3.1) — Voortplanting
        {
          id: "bio-sub-o9",
          code: "O9",
          titel: "Reproductie van het organisme — Voortplanting (subdomein E3.1)",
          leerdoelen: [
            {
              id: "bio-o9-1",
              omschrijving: "De kandidaat kan beschrijven wat de overeenkomsten en verschillen zijn tussen geslachtelijke en ongeslachtelijke voortplanting.",
              begrippen: ["levenscyclus", "geslachtelijke voortplanting", "ongeslachtelijke voortplanting"],
            },
            {
              id: "bio-o9-2",
              omschrijving: "De kandidaat kan verklaren hoe geslachtelijke en ongeslachtelijke voortplanting leidt tot de genetische variatie bij prokaryoten en eukaryoten.",
              begrippen: ["genetische variatie"],
            },
            {
              id: "bio-o9-3",
              omschrijving: "De kandidaat kan beschrijven wat de bouw en functie van gameten en zygote zijn.",
              begrippen: ["gameten", "spore", "mitose", "meiose", "haploïd", "diploïd", "polyploïd", "eicel", "spermacel", "poollichaampje", "follikel", "geel lichaam", "bevruchting", "klievingsdeling", "zygote"],
            },
            {
              id: "bio-o9-4",
              omschrijving: "De kandidaat kan beschrijven hoe gameten en zygote gevormd worden en zich ontwikkelen.",
            },
            {
              id: "bio-o9-5",
              omschrijving: "De kandidaat kan beschrijven hoe embryo en foetus van de mens zich ontwikkelen.",
              begrippen: ["placenta", "embryo", "embryonale ontwikkeling", "foetus"],
            },
            {
              id: "bio-o9-6",
              omschrijving: "De kandidaat kan beschrijven wat de bouw, werking en functie zijn van de voortplantingsorganen van de mens.",
              begrippen: ["voortplantingsorganen van de mens", "primair geslachtskenmerk", "eierstok", "eileider", "baarmoeder", "vagina", "clitoris", "teelbal", "penis"],
            },
            {
              id: "bio-o9-7",
              omschrijving: "De kandidaat kan toelichten wat de rol van hormonen is bij de voortplanting van de mens.",
              begrippen: ["geslachtshormoon", "FSH", "LH", "oestrogeen", "progesteron", "testosteron", "HCG", "secundair geslachtskenmerk", "menstruatiecyclus", "anticonceptie"],
            },
            {
              id: "bio-o9-8",
              omschrijving: "De kandidaat kan toelichten met behulp van ethische en biologische argumenten dat er verschillende standpunten zijn over het ingrijpen van de mens in het voortplantingsproces van organismen.",
              begrippen: ["kunstmatige inseminatie", "in vitro fertilisatie", "ICSI", "klonen", "ethisch argument", "biologisch argument"],
            },
          ],
        },
      ],
    },

    // ─── DOMEIN P: POPULATIE- EN ECOSYSTEEMNIVEAU ─────────────────────────────
    {
      id: "bio-dom-p",
      code: "P",
      titel: "Populatie- en ecosysteemniveau",
      ceRelevant: true,
      subdomeinen: [
        // P1: Regulatie van ecosystemen (subdomein B8)
        {
          id: "bio-sub-p1",
          code: "P1",
          titel: "Regulatie van ecosystemen (subdomein B8)",
          leerdoelen: [
            // P1.1 Energiestroom
            {
              id: "bio-p1-1",
              omschrijving: "De kandidaat kan energiestromen in een ecosysteem (modelmatig) beschrijven.",
              begrippen: ["energiestroom", "producent", "consument", "reducent", "trofisch niveau"],
            },
            {
              id: "bio-p1-2",
              omschrijving: "De kandidaat kan toelichten welke processen en organismen van invloed zijn op energiestromen in een ecosysteem.",
              begrippen: ["foto-autotroof", "chemo-autotroof", "heterotroof", "organische stof", "anorganische stof", "BPP", "NPP", "productiviteit"],
            },
            {
              id: "bio-p1-3",
              omschrijving: "De kandidaat kan uitleggen wat oorzaken en gevolgen zijn van verstoring van energiestromen in een ecosysteem.",
              begrippen: ["effect van klimaatverandering", "overbevissing", "ontbossing"],
            },
            {
              id: "bio-p1-4",
              omschrijving: "De kandidaat kan beredeneren hoe de mens ecosystemen positief of negatief kan beïnvloeden met keuzes op het gebied van energiegebruik.",
              begrippen: ["fossiele brandstof", "biobrandstof", "biomassa", "energietransitie"],
            },
            // P1.2 Kringloop
            {
              id: "bio-p1-5",
              omschrijving: "De kandidaat kan toelichten wat de rol is van producenten, consumenten en reducenten in kringlopen van elementen.",
              begrippen: ["kringloop", "fotosynthese", "dissimilatie", "koolstofkringloop", "stikstofkringloop", "organische stof", "anorganische stof"],
            },
            {
              id: "bio-p1-6",
              omschrijving: "De kandidaat kan stromen van elementen in een ecosysteem kwantitatief beschrijven.",
            },
            {
              id: "bio-p1-7",
              omschrijving: "De kandidaat kan toelichten welke processen van invloed zijn op kringlopen van elementen in een ecosysteem.",
              begrippen: ["denitrificatie", "nitrificatie", "ammonificatie", "stikstofbinding", "aeroob", "anaeroob", "ammoniak", "ammonium", "nitraat", "nitriet", "methaan", "stikstofgas"],
            },
            {
              id: "bio-p1-8",
              omschrijving: "De kandidaat kan uitleggen wat oorzaken en gevolgen zijn van verstoring van kringlopen.",
              begrippen: ["uitspoeling", "eutrofiering", "broeikaseffect", "broeikasgassen"],
            },
            {
              id: "bio-p1-9",
              omschrijving: "De kandidaat kan beargumenteren hoe maatregelen van de mens kringlopen van elementen in een ecosysteem en daarmee het systeem Aarde beïnvloeden.",
              begrippen: ["hergebruik", "recyclen", "gevolgen voor de biodiversiteit"],
            },
            // P1.3 Dynamiek en evenwicht
            {
              id: "bio-p1-10",
              omschrijving: "De kandidaat kan beschrijven wat onder een ecosysteem wordt verstaan en welke componenten daarvan deel uitmaken.",
              begrippen: ["ecosysteem", "habitat", "niche", "levensgemeenschap", "soortensamenstelling"],
            },
            {
              id: "bio-p1-11",
              omschrijving: "De kandidaat kan benoemen wat de verschillen zijn tussen ecosystemen op basis van verschillen in biotische en abiotische factoren.",
              begrippen: ["populatie", "indicatorsoort", "biotische factor", "abiotische factor"],
            },
            {
              id: "bio-p1-12",
              omschrijving: "De kandidaat kan uitleggen welke rol biotische en abiotische factoren spelen bij de dynamiek binnen een ecosysteem.",
              begrippen: ["dynamiek", "geboorte", "sterfte", "migratie", "microklimaat", "beperkende factor", "tolerantie", "optimum", "eilandtheorie"],
            },
            {
              id: "bio-p1-13",
              omschrijving: "De kandidaat kan uitleggen welke rol concurrentie binnen en tussen populaties speelt bij de dynamiek (instandhouding en ontwikkeling) van een ecosysteem.",
              begrippen: ["concurrentie"],
            },
            {
              id: "bio-p1-14",
              omschrijving: "De kandidaat kan beargumenteren hoe de mens de instandhouding van ecosystemen beïnvloedt.",
              begrippen: ["exoot", "natuurbeheer"],
            },
          ],
        },

        // P2: Zelforganisatie van ecosystemen (subdomein C3)
        {
          id: "bio-sub-p2",
          code: "P2",
          titel: "Zelforganisatie van ecosystemen (subdomein C3)",
          leerdoelen: [
            {
              id: "bio-p2-1",
              omschrijving: "De kandidaat kan beschrijven welke opeenvolgende veranderingen er zijn in een ecosysteem.",
              begrippen: ["successie", "pioniersoort", "climaxecosysteem"],
            },
            {
              id: "bio-p2-2",
              omschrijving: "De kandidaat kan verklaren hoe overgangen in de ontwikkeling van ecosystemen tot stand komen.",
              begrippen: ["gradiëntecosysteem", "concurrentie", "groeicurve"],
            },
            {
              id: "bio-p2-3",
              omschrijving: "De kandidaat kan beschrijven dat een ecosysteem in verschillende evenwichtssituaties kan verkeren.",
              begrippen: ["draagkracht", "tolerantiegrenzen", "omslagpunt"],
            },
            {
              id: "bio-p2-4",
              omschrijving: "De kandidaat kan beargumenteren hoe de mens de ontwikkeling van ecosystemen en het systeem Aarde beïnvloedt.",
              begrippen: ["exoot", "natuurbeheer", "klimaatverandering"],
            },
          ],
        },

        // P3: Interactie in ecosystemen (subdomein D5)
        {
          id: "bio-sub-p3",
          code: "P3",
          titel: "Interactie in ecosystemen (subdomein D5)",
          leerdoelen: [
            // P3.1 Voedselrelatie
            {
              id: "bio-p3-1",
              omschrijving: "De kandidaat kan beschrijven welke voedselrelaties tussen organismen bestaan.",
              begrippen: ["voedselrelatie", "trofisch niveau", "predatie", "vraat", "signaalstof"],
            },
            {
              id: "bio-p3-2",
              omschrijving: "De kandidaat kan benoemen welke relaties in een voedselketen voorkomen.",
              begrippen: ["voedselketen", "producent", "consument", "reducent", "symbiose", "parasitisme", "mutualisme", "commensalisme"],
            },
            {
              id: "bio-p3-3",
              omschrijving: "De kandidaat kan beschrijven welke voedselketens er zijn in een voedselweb.",
              begrippen: ["voedselweb"],
            },
            // P3.2 Duurzame ontwikkeling
            {
              id: "bio-p3-4",
              omschrijving: "De kandidaat kan beschrijven wat onder duurzame ontwikkeling wordt verstaan.",
              begrippen: ["duurzame ontwikkeling", "biologisch afbreekbaar", "open kringloop", "gesloten kringloop", "biodiversiteit"],
            },
            {
              id: "bio-p3-5",
              omschrijving: "De kandidaat kan uitleggen hoe bij energieproductie rekening gehouden kan worden met duurzame ontwikkeling.",
              begrippen: ["energieproductie", "hernieuwbare energiebron", "energiebesparing"],
            },
            {
              id: "bio-p3-6",
              omschrijving: "De kandidaat kan uitleggen hoe bij voedselproductie rekening gehouden kan worden met duurzame ontwikkeling.",
              begrippen: ["voedselproductie", "bestrijdingsmiddel", "biologische landbouw"],
            },
            {
              id: "bio-p3-7",
              omschrijving: "De kandidaat kan uitleggen dat in een voedselketen accumulatie van schadelijke stoffen kan optreden en wat de gevolgen daarvan zijn.",
              begrippen: ["accumulatie", "persistent", "resistent", "microplastic", "milieuvervuiling"],
            },
          ],
        },

        // P4: Soortvorming (subdomein F2)
        {
          id: "bio-sub-p4",
          code: "P4",
          titel: "Soortvorming (subdomein F2)",
          leerdoelen: [
            // P4.1 Populatie
            {
              id: "bio-p4-1",
              omschrijving: "De kandidaat kan beschrijven wat onder een soort en wat onder een populatie wordt verstaan.",
              begrippen: ["soort", "populatie"],
            },
            {
              id: "bio-p4-2",
              omschrijving: "De kandidaat kan uitleggen hoe frequenties van genotypen en fenotypen in populaties in tijd en ruimte veranderen.",
              begrippen: ["genotype", "fenotype"],
            },
            {
              id: "bio-p4-3",
              omschrijving: "De kandidaat kan uitleggen dat populaties emergente eigenschappen hebben.",
              begrippen: ["emergente eigenschap"],
            },
            // P4.2 Variatie
            {
              id: "bio-p4-4",
              omschrijving: "De kandidaat kan uitleggen hoe genetische variatie in een populatie kan veranderen door willekeurige mutaties, genetic drift en gene flow.",
              begrippen: ["genetische variatie", "adaptatie", "fitness", "genetic drift", "gene flow", "allelfrequentie", "divergentie", "convergentie"],
            },
            {
              id: "bio-p4-5",
              omschrijving: "De kandidaat kan uitleggen hoe isolatie, stichtereffect en flessenhalseffect de genetische variatie in een populatie kunnen veranderen.",
              begrippen: ["stichtereffect/founder effect", "flessenhalseffect/bottleneck effect"],
            },
            {
              id: "bio-p4-6",
              omschrijving: "De kandidaat kan bepalen wat het verband is tussen de genetische variatie van opeenvolgende generaties met gebruik van de regel van Hardy-Weinberg.",
              begrippen: ["Hardy-Weinberg evenwicht"],
              formules: ["p + q = 1", "p² + 2pq + q² = 1  (p²=homozygoot dominant, 2pq=heterozygoot, q²=homozygoot recessief)"],
            },
            // P4.3 Selectie
            {
              id: "bio-p4-7",
              omschrijving: "De kandidaat kan uitleggen dat adaptatie van populaties tot stand komt door selectie van organismen.",
              begrippen: ["adaptatie", "natuurlijke selectie", "fitness"],
            },
            {
              id: "bio-p4-8",
              omschrijving: "De kandidaat kan uitleggen dat selectiedruk adaptaties bijeenbrengt die het voortplantingssucces van de soort vergroten.",
              begrippen: ["selectiedruk", "soort", "homologie", "analogie", "voortplantingssucces"],
            },
            {
              id: "bio-p4-9",
              omschrijving: "De kandidaat kan beschrijven wat overeenkomsten en verschillen zijn tussen natuurlijke en kunstmatige selectie.",
              begrippen: ["kunstmatige selectie", "seksuele selectie", "veredeling", "fokken", "inteelt"],
            },
            // P4.4 Soortvorming
            {
              id: "bio-p4-10",
              omschrijving: "De kandidaat kan uitleggen dat soorten ontstaan door verschillende vormen van reproductieve isolatie.",
              begrippen: ["soort", "geslacht (genus)", "reproductieve isolatie", "co-evolutie", "sympatrische soortvorming", "allopatrische soortvorming"],
            },
            {
              id: "bio-p4-11",
              omschrijving: "De kandidaat kan uitleggen hoe verwantschap en afstamming van soorten weergegeven kan worden in de vorm van een cladogram.",
              begrippen: ["verwantschap", "afstamming", "cladogram", "clade", "(radioactieve) isotoop"],
            },
          ],
        },
      ],
    },
  ],

  formuleblad: {
    vakId: "biologie-vwo",
    secties: [
      {
        titel: "Fotosynthese & celademhaling",
        formules: [
          {
            naam: "Fotosynthese (globaal)",
            formule: "6CO₂ + 6H₂O + lichtenergie → C₆H₁₂O₆ + 6O₂",
            uitleg: "Autotroof organisme: omzetting lichtenergie naar chemische energie",
          },
          {
            naam: "Aerobe celademhaling (globaal)",
            formule: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energie (ATP)",
          },
        ],
      },
      {
        titel: "Genetica (Hardy-Weinberg)",
        formules: [
          {
            naam: "Allelfrequenties",
            formule: "p + q = 1",
            uitleg: "p = frequentie dominant allel, q = frequentie recessief allel",
          },
          {
            naam: "Genotypefrequenties (Hardy-Weinberg)",
            formule: "p² + 2pq + q² = 1",
            uitleg: "p² = homozygoot dominant, 2pq = heterozygoot, q² = homozygoot recessief",
          },
        ],
      },
    ],
  },
};

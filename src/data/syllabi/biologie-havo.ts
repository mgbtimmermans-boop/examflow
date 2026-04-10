import { VakSyllabus } from "@/types/syllabus";

export const BIOLOGIE_HAVO_SYLLABUS: VakSyllabus = {
  vakId: "biologie-havo",
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
            { id: "a5-9", omschrijving: "de uitvoering en de uitkomsten van een onderzoek evalueren" },
            { id: "a5-10", omschrijving: "een natuurwetenschappelijk onderzoek op een geschikte manier presenteren" },
            { id: "a5-11", omschrijving: "herkennen dat er naast een experimentele onderzoeksaanpak ook andere onderzoeksaanpakken zijn" },
          ],
        },
        {
          id: "sub-a7",
          naam: "A7 — Modelvorming",
          leerdoelen: [
            { id: "a7-1", omschrijving: "een natuurwetenschappelijk verschijnsel specificeren met als doel het te beschrijven, te verklaren of te voorspellen" },
            { id: "a7-2", omschrijving: "een natuurwetenschappelijk verschijnsel vereenvoudigen en de essentiële kenmerken ervan identificeren" },
            { id: "a7-3", omschrijving: "van een model de overeenkomsten en verschillen met de werkelijkheid benoemen met als doel de geschiktheid en het geldigheidsgebied te bepalen" },
            { id: "a7-4", omschrijving: "van een model beoordelen in hoeverre het aansluit bij het doel waarvoor het ingezet wordt" },
            { id: "a7-5", omschrijving: "voor een model een geschikte fysieke, schematische of wiskundige weergave selecteren" },
            { id: "a7-6", omschrijving: "met een model eigenschappen van een natuurwetenschappelijk verschijnsel beschrijven, verklaren en/of voorspellen" },
          ],
        },
        {
          id: "sub-a8",
          naam: "A8 — Natuurwetenschappelijk instrumentarium",
          leerdoelen: [
            { id: "a8-1", omschrijving: "informatie verwerven en selecteren uit schriftelijke, mondelinge en audiovisuele bronnen: gegevens halen uit grafieken, tabellen, tekeningen, simulaties, schema's en diagrammen" },
            { id: "a8-2", omschrijving: "informatie, gegevens en meetresultaten analyseren, weergeven en structureren in grafieken, tekeningen, schema's, diagrammen en tabellen" },
            { id: "a8-3", omschrijving: "de volgende grootheden en eenheden gebruiken: lengte, oppervlakte, inhoud, massa, dichtheid, concentratie, snelheid, diffusiesnelheid, temperatuur, energie, spanning, druk" },
            { id: "a8-4", omschrijving: "een aantal voor het vak relevante reken- en wiskundige vaardigheden toepassen: rekenen met getallen in breuken en machten, verhoudingen, percentages, gemiddelden, oppervlakte en volume, kansen; grafieken opstellen en lezen; lineaire en exponentiële verbanden herkennen" },
            { id: "a8-5", omschrijving: "verbanden leggen op basis van tabel- en grafiekgegevens" },
            { id: "a8-6", omschrijving: "toelichten wat de invloed is van de verschillende variabelen in een gegeven formule op het daarmee beschreven biologische proces" },
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
          naam: "A11 — Vorm-functie denken",
          leerdoelen: [
            { id: "a11-1", omschrijving: "herkennen hoe een gegeven vorm van onderdelen in een bepaald systeem kan leiden naar een functie" },
            { id: "a11-2", omschrijving: "herkennen hoe een gegeven biologische functie eisen stelt aan de vorm van de onderdelen binnen een systeem" },
            { id: "a11-3", omschrijving: "herkennen wat de relatie is tussen bouw en werking van een systeem en de functie van dat systeem, soms over meerdere organisatieniveaus" },
          ],
        },
        {
          id: "sub-a12",
          naam: "A12 — Ecologisch denken",
          leerdoelen: [
            { id: "a12-1", omschrijving: "benoemen dat een ecosysteem bestaat uit een complex samenhangend geheel van componenten en interacties daartussen die samen de instandhouding en ontwikkeling van een ecosysteem reguleren" },
            { id: "a12-2", omschrijving: "beschrijven dat een ecosysteem wordt gereguleerd vanuit kringlopen van elementen (koolstof en stikstof), energiestromen en voedselwebben" },
            { id: "a12-3", omschrijving: "verklaren hoe menselijk handelen binnen een ecosysteem op een lager organisatieniveau kan leiden tot grote veranderingen op hogere organisatieniveaus" },
          ],
        },
        {
          id: "sub-a13",
          naam: "A13 — Evolutionair denken",
          leerdoelen: [
            { id: "a13-1", omschrijving: "beschrijven dat er genetische variatie in een populatie ontstaat" },
            { id: "a13-2", omschrijving: "beschrijven hoe door selectiedruk bepaalde adaptaties in populaties over meerdere generaties meer gaan voorkomen" },
            { id: "a13-3", omschrijving: "beschrijven hoe reproductieve isolatie kan leiden tot soortvorming" },
          ],
        },
        {
          id: "sub-a14",
          naam: "A14 — Systeemdenken",
          leerdoelen: [
            { id: "a14-1", omschrijving: "herkennen hoe binnen één organisatieniveau de onderdelen van een biologisch systeem en de relaties daartussen samen de functie bepalen en zichzelf in stand houden" },
            { id: "a14-2", omschrijving: "beschrijven hoe de werking van een biologisch systeem binnen een organisatieniveau wordt beïnvloed door onderliggende of bovenliggende organisatieniveaus" },
            { id: "a14-3", omschrijving: "beschrijven dat een biologisch systeem op een bepaald organisatieniveau eigenschappen kan hebben die onderliggende organisatieniveaus niet hebben" },
          ],
        },
      ],
    },
    {
      id: "dom-m",
      naam: "M — Molecuul- en celniveau",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-m2-1",
          naam: "M2.1 — Homeostase van de cel (B2.1)",
          leerdoelen: [
            {
              id: "m2-1-1",
              omschrijving: "benoemen wat de kenmerken van bacteriën zijn",
              begrippen: ["prokaryoot", "bacterie", "plasmide", "celwand", "cirkelvormig chromosoom"],
            },
            {
              id: "m2-1-2",
              omschrijving: "benoemen wat de kenmerken van virussen zijn",
              begrippen: ["virus", "eiwitmantel", "DNA-virus", "RNA-virus"],
            },
            {
              id: "m2-1-3",
              omschrijving: "benoemen wat de onderdelen zijn van eukaryote cellen en de functies ervan beschrijven",
              begrippen: [
                "eukaryoot", "celkern", "chromosoom", "celwand", "celmembraan", "vacuole",
                "cytoplasma", "mitochondrie", "endoplasmatisch reticulum", "golgi-systeem",
                "plastiden", "ribosoom", "lysosoom", "bladgroenkorrel", "bladgroen", "trilharen",
              ],
            },
            {
              id: "m2-1-4",
              omschrijving: "herkennen dat cellen zichzelf reguleren waardoor homeostase in de cel gerealiseerd wordt",
              begrippen: ["homeostase"],
            },
          ],
        },
        {
          id: "sub-m2-2",
          naam: "M2.2 — Transport (B2.2)",
          leerdoelen: [
            {
              id: "m2-2-1",
              omschrijving: "uitleggen dat bepaalde stoffen door passief transport en andere door actief transport membranen kunnen passeren",
              begrippen: [
                "diffusie", "osmose", "semi-permeabel membraan", "selectief permeabel",
                "receptoreiwit", "ionentransport", "actief transport", "passief transport",
                "endocytose", "exocytose",
              ],
            },
            {
              id: "m2-2-2",
              omschrijving: "toelichten wat de relatie is tussen de osmotische waarde binnen een cel en die daarbuiten",
              begrippen: ["isotonisch", "hypotonisch", "hypertonisch", "osmotische waarde"],
            },
            {
              id: "m2-2-3",
              omschrijving: "uitleggen wat de invloed is van de osmotische waarde van een cel op de stevigheid",
              begrippen: ["plasmolyse", "turgor"],
            },
          ],
        },
        {
          id: "sub-m2-3",
          naam: "M2.3 — Assimilatie en dissimilatie (B2.3)",
          leerdoelen: [
            {
              id: "m2-3-1",
              omschrijving: "beschrijven dat cellen stoffen opnemen, transporteren, omzetten en afgeven met behulp van energie, gekatalyseerd door enzymen",
              begrippen: ["atoom", "molecuul", "ion", "energie", "autotroof", "heterotroof", "assimilatie", "dissimilatie"],
            },
            {
              id: "m2-3-2",
              omschrijving: "benoemen dat er verschillende vormen van energie zijn",
              begrippen: ["chemische energie", "lichtenergie", "kinetische energie", "warmte", "ADP", "ATP", "fosfaat"],
            },
            {
              id: "m2-3-3",
              omschrijving: "beschrijven dat verschillende vormen van energie in elkaar kunnen overgaan",
            },
            {
              id: "m2-3-4",
              omschrijving: "beschrijven hoe fotosynthese in cellen met bladgroenkorrels verloopt",
              begrippen: ["fotosynthese", "bladgroenkorrel", "glucose", "zuurstof", "koolstofdioxide"],
            },
            {
              id: "m2-3-5",
              omschrijving: "beschrijven hoe assimilatieprocessen in planten en dieren leiden tot de aanmaak van bouwstoffen, brandstoffen, reservestoffen en enzymen",
              begrippen: [
                "bouwstof", "brandstof", "reservestof",
                "koolhydraat", "monosacharide", "disacharide", "polysacharide", "zetmeel", "glycogeen", "cellulose",
                "vet", "vetzuur", "glycerol", "eiwit", "aminozuur", "essentieel aminozuur", "enzym", "fosfolipide",
              ],
            },
            {
              id: "m2-3-6",
              omschrijving: "beschrijven hoe anaerobe en aerobe dissimilatie bijdragen aan de energievoorziening",
              begrippen: [
                "energievoorziening", "verbranding", "aeroob", "anaeroob",
                "gisting", "alcohol", "melkzuur",
              ],
            },
            {
              id: "m2-3-7",
              omschrijving: "assimilatieprocessen en dissimilatieprocessen herkennen in de vorm van reactievergelijkingen",
              begrippen: [
                "reactievergelijking", "molecuulformule",
                "glucose (C₆H₁₂O₆)", "koolstofdioxide (CO₂)", "water (H₂O)", "zuurstofgas (O₂)",
                "fosfaat (PO₄³⁻)", "ammoniak (NH₃)", "nitraat (NO₃⁻)", "nitriet (NO₂⁻)",
              ],
            },
            {
              id: "m2-3-8",
              omschrijving: "beschrijven waar en hoe enzymen reacties katalyseren",
              begrippen: ["enzymwerking", "katalyseren", "substraat", "enzym-substraatcomplex"],
            },
            {
              id: "m2-3-9",
              omschrijving: "beschrijven hoe temperatuur en pH enzymwerking beïnvloeden",
              begrippen: ["pH", "optimumkromme", "indicator"],
            },
            {
              id: "m2-3-10",
              omschrijving: "beschrijven hoe in de biotechnologie gebruikgemaakt wordt van het metabolisme van micro-organismen",
              begrippen: ["biotechnologie", "metabolisme", "recombinant-DNA", "micro-organisme"],
            },
          ],
        },
        {
          id: "sub-m3-1",
          naam: "M3.1 — Genexpressie (C1.1)",
          leerdoelen: [
            {
              id: "m3-1-1",
              omschrijving: "benoemen wat de relatie is tussen DNA, RNA en eiwit",
              begrippen: ["DNA", "RNA", "eiwit", "genetische code", "nucleotidenvolgorde", "gen", "startcodon", "stopcodon", "niet-coderend DNA"],
            },
            {
              id: "m3-1-2",
              omschrijving: "beschrijven dat in verschillende typen cellen verschillende eiwitten gemaakt worden",
              begrippen: ["genexpressie"],
            },
            {
              id: "m3-1-3",
              omschrijving: "beschrijven dat eiwitten verschillende functies hebben",
              begrippen: ["enzym", "receptor", "membraaneiwit", "transporteiwit", "eiwithormoon", "structuureiwit", "antistof"],
            },
            {
              id: "m3-1-4",
              omschrijving: "beschrijven dat door eiwitten het fenotype bepaald wordt",
              begrippen: ["fenotype"],
            },
          ],
        },
        {
          id: "sub-m3-2",
          naam: "M3.2 — Celdifferentiatie (C1.2)",
          leerdoelen: [
            {
              id: "m3-2-1",
              omschrijving: "benoemen dat vrijwel alle cellen van een meercellig organisme hetzelfde genoom hebben",
              begrippen: ["genoom"],
            },
            {
              id: "m3-2-2",
              omschrijving: "beschrijven dat differentiatie leidt tot cellen met verschillende vorm en functie",
              begrippen: ["celdifferentiatie"],
            },
            {
              id: "m3-2-3",
              omschrijving: "beschrijven dat celdifferentiatie ontstaat door expressie van specifieke genen",
              begrippen: ["genexpressie", "celtype"],
            },
            {
              id: "m3-2-4",
              omschrijving: "eigenschappen van stamcellen beschrijven",
              begrippen: ["stamcel"],
            },
            {
              id: "m3-2-5",
              omschrijving: "benoemen voor welke doelen stamcellen gebruikt kunnen worden",
              begrippen: ["stamcelonderzoek", "stamceltransplantatie"],
            },
          ],
        },
        {
          id: "sub-m7-1",
          naam: "M7.1 — Erfelijke eigenschap (E4.1)",
          leerdoelen: [
            {
              id: "m7-1-1",
              omschrijving: "toelichten dat een fenotype ontstaat onder invloed van een combinatie van genotype en milieufactoren",
              begrippen: ["gen", "allel", "genoom", "genotype", "fenotype", "milieufactor"],
            },
            {
              id: "m7-1-2",
              omschrijving: "benoemen dat de genen zijn verdeeld over autosomen en geslachtschromosomen",
              begrippen: ["chromosoom", "autosoom", "geslachtschromosoom", "X-chromosoom", "Y-chromosoom"],
            },
            {
              id: "m7-1-3",
              omschrijving: "toelichten dat de geslachtschromosomen (meestal) het geslacht bepalen",
            },
            {
              id: "m7-1-4",
              omschrijving: "bepalen aan de hand van stambomen of kruisingsschema's wat de kans is op een bepaald genotype of fenotype bij monohybride kruisingen",
              begrippen: [
                "monohybride kruising", "dominant", "onvolledig dominant", "recessief", "intermediair",
                "stamboom", "kruisingsschema", "homozygoot", "heterozygoot", "X-chromosomaal",
                "multipele allelen", "letale factor",
              ],
            },
            {
              id: "m7-1-5",
              omschrijving: "benoemen wat ethische en biologische argumenten zijn bij het ingrijpen van de mens in de erfelijkheid",
              begrippen: ["ethisch argument", "biologisch argument"],
            },
          ],
        },
        {
          id: "sub-m8-1",
          naam: "M8.1 — DNA (F1.1)",
          leerdoelen: [
            {
              id: "m8-1-1",
              omschrijving: "beschrijven dat DNA functioneert als universele drager van genetische informatie",
              begrippen: ["DNA", "genetische informatie", "genetische code"],
            },
            {
              id: "m8-1-2",
              omschrijving: "toelichten dat dezelfde genetische informatie in verschillende organismen voor kan komen",
            },
            {
              id: "m8-1-3",
              omschrijving: "toelichten dat met gegevens verkregen door DNA-analyse de graad van verwantschap van soorten kan worden vastgesteld",
              begrippen: ["DNA-analyse", "verwantschap"],
            },
          ],
        },
        {
          id: "sub-m8-2",
          naam: "M8.2 — Mutatie (F1.2)",
          leerdoelen: [
            {
              id: "m8-2-1",
              omschrijving: "beschrijven welke typen mutatie er zijn",
              begrippen: ["chromosoom", "gen", "allel", "mutagene stof", "mutagene straling", "puntmutatie", "genoommutatie"],
            },
            {
              id: "m8-2-2",
              omschrijving: "beschrijven door welke factoren mutaties veroorzaakt kunnen worden",
            },
            {
              id: "m8-2-3",
              omschrijving: "uitleggen dat mutatie het fenotype kan beïnvloeden",
              begrippen: ["genotype", "fenotype"],
            },
            {
              id: "m8-2-4",
              omschrijving: "toelichten dat mutaties per toeval plaatsvinden",
              begrippen: ["overlevingskans"],
            },
          ],
        },
        {
          id: "sub-m8-3",
          naam: "M8.3 — Recombinatie (F1.3)",
          leerdoelen: [
            {
              id: "m8-3-1",
              omschrijving: "beschrijven dat bij geslachtelijke voortplanting voortplantingscellen met elk een unieke combinatie van genen ontstaan door recombinatie van chromosomen",
              begrippen: [
                "geslachtelijke voortplanting", "meiose", "homologe chromosomen",
                "autosoom", "geslachtschromosoom", "genoom", "gekoppelde genen",
              ],
            },
          ],
        },
        {
          id: "sub-m8-4",
          naam: "M8.4 — Variatie (F1.4)",
          leerdoelen: [
            {
              id: "m8-4-1",
              omschrijving: "beschrijven dat genetische variatie in een populatie vergroot wordt door mutatie en recombinatie",
              begrippen: ["genetische variatie", "mutatie", "recombinatie", "fenotype", "genotype", "genenpool"],
            },
            {
              id: "m8-4-2",
              omschrijving: "beschrijven hoe door de mens gewenste genencombinaties verkregen worden door genetische modificatie",
              begrippen: ["genetische modificatie", "transgeen"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-o",
      naam: "O — Orgaan- en organismeniveau",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-o1-1",
          naam: "O1.1 — Orgaan (B3.1)",
          leerdoelen: [
            {
              id: "o1-1-1",
              omschrijving: "beschrijven dat groepen van cellen door hun rangschikking in een weefsel, orgaan of orgaanstelsel een gezamenlijke functie uitoefenen",
              begrippen: ["cel", "weefsel", "orgaan", "orgaanstelsel"],
            },
            {
              id: "o1-1-2",
              omschrijving: "herkennen wat verschillen en overeenkomsten zijn tussen organen en orgaanstelsels van de mens en verschillende diersoorten",
            },
            {
              id: "o1-1-3",
              omschrijving: "beschrijven dat orgaanstelsels met elkaar samenhangen",
            },
            {
              id: "o1-1-4",
              omschrijving: "benoemen hoe verstoring in het functioneren van een orgaan de samenwerking tussen organen beïnvloedt",
            },
          ],
        },
        {
          id: "sub-o1-2",
          naam: "O1.2 — Fotosynthese (B3.2)",
          leerdoelen: [
            {
              id: "o1-2-1",
              omschrijving: "het belang van fotosynthese als basis voor de voortgezette assimilatie en dissimilatie van het organisme beschrijven",
              begrippen: ["fotosynthese", "koolstofassimilatie", "voortgezette assimilatie", "dissimilatie"],
            },
          ],
        },
        {
          id: "sub-o1-3",
          naam: "O1.3 — Ademhaling (B3.3)",
          leerdoelen: [
            {
              id: "o1-3-1",
              omschrijving: "beschrijven wat de bouw, werking en functie zijn van gaswisselingsorganen van de mens",
              begrippen: ["gaswisseling", "longen", "luchtpijp", "bronchie", "longblaasje"],
            },
            {
              id: "o1-3-2",
              omschrijving: "herkennen wat de relatie is tussen de bouw en functie van de gaswisselingsorganen van de mens",
            },
            {
              id: "o1-3-3",
              omschrijving: "beschrijven op welke wijze longventilatie tot stand komt",
              begrippen: ["ademhalingsspieren", "ventilatiebewegingen", "longcapaciteit", "vitale capaciteit", "restvolume", "dode ruimte"],
            },
            {
              id: "o1-3-4",
              omschrijving: "beschrijven hoe opname, transport en afgifte van zuurstof en koolstofdioxide plaatsvinden en wat de rol van hemoglobine daarbij is",
              begrippen: ["diffusie", "zuurstofconcentratie", "zuurstoftransport", "hemoglobine", "koolstofdioxideconcentratie", "koolstofdioxidetransport"],
            },
          ],
        },
        {
          id: "sub-o1-4",
          naam: "O1.4 — Vertering (B3.4)",
          leerdoelen: [
            {
              id: "o1-4-1",
              omschrijving: "beschrijven wat de bouw, werking en functie zijn van (spijs)verteringsorganen van de mens",
              begrippen: [
                "spijsvertering", "speekselklier", "slokdarm", "maag", "twaalfvingerige darm",
                "alvleesklier", "lever", "galblaas", "dunne darm", "dikke darm", "endeldarm",
                "kringspier", "lengtespier", "darmperistaltiek",
              ],
            },
            {
              id: "o1-4-2",
              omschrijving: "herkennen wat de relatie is tussen de bouw en functie van de (spijs)verteringsorganen",
            },
            {
              id: "o1-4-3",
              omschrijving: "beschrijven waar en op welke wijze voedingsstoffen verteerd worden en welke factoren dit kunnen beïnvloeden",
              begrippen: [
                "voedingsstof", "mechanische vertering", "chemische vertering", "verteringssap",
                "enzymen voor koolhydraatvertering", "enzymen voor eiwitvertering", "enzymen voor vetvertering",
                "emulgeren", "gal", "verteringsproduct",
              ],
            },
            {
              id: "o1-4-4",
              omschrijving: "beschrijven waar en op welke wijze voedingsstoffen opgenomen worden en welke factoren dit kunnen beïnvloeden",
              begrippen: ["resorptie", "darmvlok", "darmbacterie"],
            },
          ],
        },
        {
          id: "sub-o1-5",
          naam: "O1.5 — Uitscheiding (B3.5)",
          leerdoelen: [
            {
              id: "o1-5-1",
              omschrijving: "beschrijven wat de bouw, werking en functie zijn van uitscheidingsorganen van de mens",
              begrippen: [
                "uitscheiding", "lever", "leverlobje", "nier", "niereenheid",
                "niermerg", "nierschors", "kapsel van Bowman", "glomerulus", "nierbuisjes",
                "urineblaas", "long", "huid", "zweetklier",
              ],
            },
            {
              id: "o1-5-2",
              omschrijving: "herkennen wat de relatie is tussen de bouw en functie van uitscheidingsorganen van de mens",
            },
            {
              id: "o1-5-3",
              omschrijving: "benoemen wat de rol is van de lever, de nieren, de longen en de huid bij uitscheidingsprocessen",
              begrippen: ["gal", "ureum", "waterhuishouding", "ultrafiltratie", "reabsorptie", "urine", "ADH", "zweet"],
            },
          ],
        },
        {
          id: "sub-o1-6",
          naam: "O1.6 — Transport (B3.6)",
          leerdoelen: [
            {
              id: "o1-6-1",
              omschrijving: "beschrijven wat de bouw, werking en functie zijn van de bloedsomloop met hart en bloedvaten van de mens",
              begrippen: [
                "grote bloedsomloop", "kleine bloedsomloop", "hart", "hartklep", "sinusknoop",
                "hartslagfrequentie", "slagvolume", "slagader", "ader", "haarvat",
                "bloeddruk", "bovendruk", "onderdruk",
              ],
            },
            {
              id: "o1-6-2",
              omschrijving: "herkennen wat de relatie is tussen de bouw en functie van de bloedsomloop met hart en bloedvaten",
            },
            {
              id: "o1-6-3",
              omschrijving: "beschrijven wat de functie is van de bestanddelen van bloed, bloedplasma, weefselvloeistof en lymfe",
              begrippen: [
                "bloedsamenstelling", "bloedplasma", "voedingsstof", "afvalstof", "cholesterol",
                "rode bloedcel", "witte bloedcel", "bloedplaatje", "beenmerg",
                "zuurstoftransport", "hemoglobine", "koolstofdioxidetransport", "bloedstolling",
                "weefselvloeistof", "lymfe",
              ],
            },
            {
              id: "o1-6-4",
              omschrijving: "beschrijven hoe weefselvloeistof en lymfe worden gevormd",
              begrippen: ["bloedvatenstelsel", "lymfesysteem", "lymfevat"],
            },
            {
              id: "o1-6-5",
              omschrijving: "herkennen wat het verband is tussen het bloedvatenstelsel en het lymfevatenstelsel",
            },
          ],
        },
        {
          id: "sub-o2-1",
          naam: "O2.1 — Homeostase van het organisme (B4.1)",
          leerdoelen: [
            {
              id: "o2-1-1",
              omschrijving: "beschrijven hoe longen, lever, nieren, huid, zenuwstelsel en hormoonstelsel bijdragen aan de homeostase bij de mens",
              begrippen: [
                "zenuwstelsel", "zintuigen", "hormoonstelsel", "receptor",
                "inwendig milieu", "uitwendig milieu", "pH", "temperatuurregulatie",
                "koolstofdioxideconcentratie", "zuurstofconcentratie", "glucoseconcentratie",
              ],
            },
            {
              id: "o2-1-2",
              omschrijving: "beschrijven wat de relatie is tussen de bouw van de longen, lever, nieren en huid en de homeostase",
            },
            {
              id: "o2-1-3",
              omschrijving: "toelichten wat de principes van een regelkring zijn",
              begrippen: ["regelkring", "positieve terugkoppeling", "negatieve terugkoppeling"],
            },
            {
              id: "o2-1-4",
              omschrijving: "benoemen waar regelkringen in het lichaam plaatsvinden",
            },
          ],
        },
        {
          id: "sub-o2-2",
          naam: "O2.2 — Hormonale regulatie (B4.2)",
          leerdoelen: [
            {
              id: "o2-2-1",
              omschrijving: "uitleggen wat de principes van een regelkring in het hormoonstelsel zijn",
              begrippen: [
                "hormoon", "hormoonklier", "exocrien", "endocrien", "hormoonstelsel",
                "hormoonconcentratie", "positieve terugkoppeling", "negatieve terugkoppeling",
              ],
            },
            {
              id: "o2-2-2",
              omschrijving: "beschrijven dat de doelorganen op de hormonen reageren",
              begrippen: ["doelwitorgaan", "hormoonreceptor"],
            },
            {
              id: "o2-2-3",
              omschrijving: "beschrijven wat de werking van hormoonklieren en hun specifieke hormonen is",
              begrippen: [
                "hypothalamus", "hypofyse", "schildklier", "nier", "bijnier",
                "eierstok", "teelbal", "eilandje van Langerhans",
                "insuline", "glucagon", "adrenaline", "schildklierhormoon", "EPO",
              ],
            },
          ],
        },
        {
          id: "sub-o2-3",
          naam: "O2.3 — Neurale regulatie (B4.3)",
          leerdoelen: [
            {
              id: "o2-3-1",
              omschrijving: "beschrijven wat de bouw en werking zijn van het zenuwstelsel",
              begrippen: [
                "centraal zenuwstelsel", "perifeer zenuwstelsel", "grote hersenen", "kleine hersenen",
                "hersenschors", "centra in de hersenschors", "hersenstam", "ruggenmerg",
                "autonoom zenuwstelsel", "animaal zenuwstelsel",
                "gevoelszenuwcel", "schakelzenuwcel", "bewegingszenuwcel",
                "signaalverwerking", "prikkel", "impuls", "cel van Schwann", "myelineschede", "synaps",
              ],
            },
            {
              id: "o2-3-2",
              omschrijving: "beschrijven hoe signaalverwerking tot stand komt",
              begrippen: [
                "impulsgeleiding", "sprongsgewijze impulsgeleiding", "neurotransmitter",
                "temperatuurreceptor", "lichtreceptor", "tastreceptor", "pijnreceptor",
              ],
            },
            {
              id: "o2-3-3",
              omschrijving: "toelichten hoe een regelkring in het zenuwstelsel werkt",
              begrippen: ["regelkring", "reflexboog"],
            },
            {
              id: "o2-3-4",
              omschrijving: "beschrijven wat het verband is tussen de werking van het zenuwstelsel en het functioneren van een organisme",
            },
          ],
        },
        {
          id: "sub-o3-1",
          naam: "O3.1 — Afweer (B5.1)",
          leerdoelen: [
            {
              id: "o3-1-1",
              omschrijving: "beschrijven wat de bouw, werking en functie zijn van organen en cellen betrokken bij de afweer van de mens",
              begrippen: [
                "huid", "slijmvliezen", "bloed", "lymfe", "beenmerg", "lymfeknoop",
                "macrofagen", "T-helpercel", "cytotoxische T-cel", "B-cel", "plasmacel", "geheugencel", "mestcel",
              ],
            },
            {
              id: "o3-1-2",
              omschrijving: "beschrijven wat de werking van de aangeboren (niet-specifieke) afweer is",
              begrippen: [
                "aangeboren afweer", "verworven afweer",
                "natuurlijke immuniteit", "kunstmatige immuniteit",
                "actieve immuniteit", "passieve immuniteit",
              ],
            },
            {
              id: "o3-1-3",
              omschrijving: "beschrijven wat de werking van de verworven (specifieke) afweer is",
              begrippen: [
                "lichaamseigen", "lichaamsvreemd", "antigeen", "antistof", "receptor",
                "vaccinatie", "transplantatie", "bloedtransfusie", "AB0-systeem", "resusfactor", "donor", "acceptor",
              ],
            },
            {
              id: "o3-1-4",
              omschrijving: "beschrijven wat de reactie op lichaamseigen en lichaamsvreemde stoffen en cellen is",
            },
            {
              id: "o3-1-5",
              omschrijving: "benoemen dat er verschillen zijn tussen verschillende typen ziekteverwekkers",
              begrippen: ["virus", "bacterie", "antibioticum", "resistentie"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-p",
      naam: "P — Populatie- en ecosysteemniveau",
      ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-p1-1",
          naam: "P1.1 — Energiestroom (B8.1)",
          leerdoelen: [
            {
              id: "p1-1-1",
              omschrijving: "energiestromen in een ecosysteem beschrijven",
              begrippen: ["energiestroom", "ecosysteem", "producent", "consument", "reducent"],
            },
            {
              id: "p1-1-2",
              omschrijving: "beschrijven welke processen en organismen van invloed zijn op energiestromen in een ecosysteem",
              begrippen: ["autotroof", "heterotroof", "organische stof", "anorganische stof"],
            },
            {
              id: "p1-1-3",
              omschrijving: "uitleggen wat oorzaken en gevolgen zijn van verstoring van energiestromen in een ecosysteem",
            },
            {
              id: "p1-1-4",
              omschrijving: "uitleggen hoe maatregelen van de mens energiestromen in ecosystemen beïnvloeden",
              begrippen: ["fossiele brandstof", "biobrandstof", "biomassa", "energiebesparing"],
            },
          ],
        },
        {
          id: "sub-p1-2",
          naam: "P1.2 — Kringloop (B8.2)",
          leerdoelen: [
            {
              id: "p1-2-1",
              omschrijving: "beschrijven hoe kringlopen van elementen in een ecosysteem verlopen",
              begrippen: [
                "kringloop", "fotosynthese", "dissimilatie",
                "koolstofkringloop", "stikstofkringloop",
                "organische stof", "anorganische stof", "aeroob", "anaeroob",
                "koolstof", "ammoniak", "ammonium", "nitraat", "nitriet", "methaan", "stikstofgas",
              ],
            },
            {
              id: "p1-2-2",
              omschrijving: "benoemen welke processen van invloed zijn op kringlopen van elementen in een ecosysteem",
              begrippen: ["uitspoeling", "eutrofiering"],
            },
            {
              id: "p1-2-3",
              omschrijving: "beargumenteren hoe maatregelen van de mens kringlopen van elementen in een ecosysteem en daarmee het systeem Aarde beïnvloeden",
              begrippen: ["hergebruik", "recyclen", "broeikaseffect", "gevolgen voor de biodiversiteit"],
            },
          ],
        },
        {
          id: "sub-p1-3",
          naam: "P1.3 — Dynamiek en evenwicht (B8.3)",
          leerdoelen: [
            {
              id: "p1-3-1",
              omschrijving: "beschrijven wat onder een ecosysteem wordt verstaan en welke componenten daarvan deel uitmaken",
              begrippen: ["ecosysteem", "habitat", "levensgemeenschap", "soortensamenstelling"],
            },
            {
              id: "p1-3-2",
              omschrijving: "uitleggen welke rol biotische en abiotische factoren spelen bij de dynamiek binnen een ecosysteem",
              begrippen: ["biotische factor", "abiotische factor", "dynamiek", "geboorte", "sterfte", "migratie", "beperkende factor", "tolerantie", "optimum"],
            },
            {
              id: "p1-3-3",
              omschrijving: "uitleggen welke rol concurrentie binnen en tussen populaties speelt bij de dynamiek van een ecosysteem",
              begrippen: ["concurrentie", "populatie"],
            },
            {
              id: "p1-3-4",
              omschrijving: "beargumenteren hoe de mens de zelfregulatie van ecosystemen beïnvloedt",
              begrippen: ["exoot", "natuurbeheer"],
            },
          ],
        },
        {
          id: "sub-p3-1",
          naam: "P3.1 — Voedselrelatie (D4.1)",
          leerdoelen: [
            {
              id: "p3-1-1",
              omschrijving: "beschrijven welke voedselrelaties tussen organismen er zijn",
              begrippen: ["voedselrelatie", "trofisch niveau", "predatie", "vraat"],
            },
            {
              id: "p3-1-2",
              omschrijving: "toelichten welke relaties in een voedselketen kunnen voorkomen",
              begrippen: ["voedselketen", "producent", "consument", "reducent", "symbiose", "parasitisme", "mutualisme", "commensalisme"],
            },
            {
              id: "p3-1-3",
              omschrijving: "herkennen dat een voedselweb voedselketens bevat",
              begrippen: ["voedselweb"],
            },
          ],
        },
        {
          id: "sub-p3-2",
          naam: "P3.2 — Duurzame ontwikkeling (D4.2)",
          leerdoelen: [
            {
              id: "p3-2-1",
              omschrijving: "beschrijven wat onder duurzame ontwikkeling wordt verstaan",
              begrippen: ["duurzaamheid", "duurzame ontwikkeling", "biologisch afbreekbaar"],
            },
            {
              id: "p3-2-2",
              omschrijving: "uitleggen hoe bij energieproductie rekening gehouden kan worden met duurzame ontwikkeling",
              begrippen: ["energieproductie", "hernieuwbare energiebron", "energiebesparing"],
            },
            {
              id: "p3-2-3",
              omschrijving: "uitleggen hoe bij voedselproductie rekening gehouden kan worden met duurzame ontwikkeling",
              begrippen: ["voedselproductie", "bestrijdingsmiddel", "biologische landbouw"],
            },
            {
              id: "p3-2-4",
              omschrijving: "uitleggen dat schadelijke stoffen in de voedselketen kunnen accumuleren",
              begrippen: ["accumulatie", "persistent", "resistent"],
            },
          ],
        },
        {
          id: "sub-p4-1",
          naam: "P4.1 — Populatie (F2.1)",
          leerdoelen: [
            {
              id: "p4-1-1",
              omschrijving: "omschrijven wat onder een soort en wat onder een populatie wordt verstaan",
              begrippen: ["soort", "populatie"],
            },
            {
              id: "p4-1-2",
              omschrijving: "uitleggen dat frequenties van genotypen en fenotypen in populaties in tijd en ruimte veranderen",
              begrippen: ["genotype", "fenotype"],
            },
          ],
        },
        {
          id: "sub-p4-2",
          naam: "P4.2 — Variatie (F2.2)",
          leerdoelen: [
            {
              id: "p4-2-1",
              omschrijving: "uitleggen dat genetische variatie in een populatie ontstaat door willekeurige mutatie",
              begrippen: ["genetische variatie", "mutatie", "allelfrequentie", "genenpool"],
            },
          ],
        },
        {
          id: "sub-p4-3",
          naam: "P4.3 — Selectie (F2.3)",
          leerdoelen: [
            {
              id: "p4-3-1",
              omschrijving: "uitleggen dat adaptaties van populaties door selectie van organismen tot stand komen",
              begrippen: ["adaptatie", "natuurlijke selectie", "fitness", "selectiedruk", "homologie", "analogie"],
            },
            {
              id: "p4-3-2",
              omschrijving: "beschrijven wat de overeenkomsten en verschillen zijn tussen natuurlijke en kunstmatige selectie",
              begrippen: ["kunstmatige selectie", "veredeling"],
            },
          ],
        },
        {
          id: "sub-p4-4",
          naam: "P4.4 — Soortvorming (F2.4)",
          leerdoelen: [
            {
              id: "p4-4-1",
              omschrijving: "uitleggen dat soorten ontstaan door reproductieve isolatie",
              begrippen: ["soort", "geslacht (genus)", "reproductieve isolatie"],
            },
            {
              id: "p4-4-2",
              omschrijving: "uitleggen dat verwantschap en afstamming van soorten weergegeven kan worden in de vorm van een evolutionaire stamboom",
              begrippen: ["verwantschap", "afstamming", "evolutionaire stamboom"],
            },
          ],
        },
      ],
    },
  ],
};

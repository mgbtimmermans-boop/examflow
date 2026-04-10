import { VakSyllabus } from "@/types/syllabus";

export const BEDRIJFSECONOMIE_VWO_SYLLABUS: VakSyllabus = {
  vakId: "bedrijfseconomie-vwo", niveau: "VWO",
  domeinen: [
    {
      id: "dom-a", naam: "Domein A: Vaardigheden", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-a1", naam: "A1 — Informatievaardigheden gebruiken",
          leerdoelen: [
            {
              id: "a1-1",
              omschrijving: "De kandidaat kan doelgericht informatie zoeken, interpreteren, selecteren en verwerken.",
              begrippen: [],
            },
            {
              id: "a1-1a",
              omschrijving: "1.1 in relatie tot een gegeven (onderzoeks)vraag informatie beoordelen en daarbij: (a) de informatiebehoefte noemen",
              begrippen: [],
            },
            {
              id: "a1-1b",
              omschrijving: "1.1 in relatie tot een gegeven (onderzoeks)vraag informatie beoordelen en daarbij: (b) beschikbare en relevante informatiebronnen analyseren",
              begrippen: [],
            },
            {
              id: "a1-2a",
              omschrijving: "1.2 verworven en/of gegeven informatie vanuit een gegeven (onderzoeks)vraag analyseren en daarbij: (a) informatie beoordelen op bruikbaarheid, betrouwbaarheid en representativiteit",
              begrippen: [],
            },
            {
              id: "a1-2b",
              omschrijving: "1.2 verworven en/of gegeven informatie vanuit een gegeven (onderzoeks)vraag analyseren en daarbij: (b) informatie analyseren (eventueel rekenkundig), mede met behulp van ICT.",
              begrippen: [],
            },
          ],
        },
        {
          id: "sub-a5", naam: "A5 — Onderzoeken",
          leerdoelen: [
            {
              id: "a5-0",
              omschrijving: "5. De kandidaat kan in gespecificeerde contexten onderzoek op basis van vraagstellingen uitvoeren en conclusies trekken uit de onderzoeksresultaten. De kandidaat maakt daarbij gebruik van consistente redeneringen en relevante rekenkundige en wiskundige vaardigheden.",
              begrippen: [],
            },
            {
              id: "a5-1",
              omschrijving: "5.1 verschillende typen (onderzoeks)vragen noemen en zelfstandig (onderzoeks)vragen opstellen en daarbij onderscheid maken tussen: beschrijvende/beeldvormende (onderzoeks)vragen; analytisch/verklarende (onderzoeks)vragen; (onderzoeks)vragen met het oog op waardering/standpuntbepaling.",
              begrippen: ["beschrijvende/beeldvormende (onderzoeks)vragen", "analytisch/verklarende (onderzoeks)vragen", "(onderzoeks)vragen met het oog op waardering/standpuntbepaling"],
            },
            {
              id: "a5-2",
              omschrijving: "5.2 op basis van consistente redeneringen: (a) conclusies opstellen ten aanzien van een (onderzoeks)vraag en deze uitleggen. (b) een advies uitbrengen en dit uitleggen en daarbij: onderscheid maken tussen gegevens (data) en informatie, feiten en meningen, oorzaak en gevolg, probleem en oplossing; in het geding zijnde waarden noemen; eigen opvattingen analyseren; mogelijke consequenties van een standpunt beoordelen; een beargumenteerd standpunt opstellen.",
              begrippen: ["gegevens (data) en informatie", "feiten en meningen", "oorzaak en gevolg", "probleem en oplossing"],
            },
            {
              id: "a5-3",
              omschrijving: "5.3 berekeningen maken met behulp van relevante rekenkundige en grafische vaardigheden, rekening houdend met: (a) verbale, grafische tabellarische en wiskundige/rekenkundige gegevens analyseren, mede met gebruikmaking van ICT. (b) de gegevens rekenkundig en/of grafisch uitleggen: basisrekenvaardigheden in bedrijfseconomische vraagstukken zoals: rekenregels optellen, aftrekken, vermenigvuldigen, delen; positieve en negatieve getallen/breuken/decimalen; procenten, promillen en percentages; onderscheid procentuele verandering en procentpunt verandering; vergelijkingen, beschrijvende statistiek en grafieken in bedrijfseconomische vraagstukken zoals: werken met eerstegraadsvergelijkingen; werken met assenstelsels (X en Y); waarden bepalen en grafieken tekenen en/of bewerken; berekeningen maken op basis van grafieken; indexcijfers; diagrammen; tabellen: rijen/kolommen; machten; gemiddelden: gewogen en ongewogen.",
              begrippen: ["procentuele verandering", "procentpunt verandering", "eerstegraadsvergelijkingen", "assenstelsels", "indexcijfers", "gemiddelden: gewogen en ongewogen"],
            },
          ],
        },
        {
          id: "sub-a6", naam: "A6 — Benaderingswijzen",
          leerdoelen: [
            {
              id: "a6-6",
              omschrijving: "6. De kandidaat kan relevante bedrijfseconomische en organisatorische aspecten van een probleem herkennen, zowel binnen een organisatie als in het persoonlijk leven.",
              begrippen: [],
            },
            {
              id: "a6-7",
              omschrijving: "7. De kandidaat kan bij de oplossing van een bedrijfseconomisch of organisatorisch probleem een bedrijfseconomische denkwijze gebruiken.",
              begrippen: [],
            },
            {
              id: "a6-8",
              omschrijving: "8. De kandidaat kan bij veel voorkomende vraagstukken binnen een organisatie op het gebied van: de interne organisatie en personeelsbeleid; de investeringen en financiering; het marketingbeleid; het financieel beleid; de verslaggeving — de bedrijfseconomische en organisatorische dimensie vanuit het perspectief van het management toepassen en analyseren.",
              begrippen: [],
            },
            {
              id: "a6-9",
              omschrijving: "9. De kandidaat kan bedrijfseconomische en organisatorische perspectieven en daaruit voortvloeiende belangen onderkennen van de diverse betrokkenen bij de organisatie.",
              begrippen: [],
            },
            {
              id: "a6-9-1",
              omschrijving: "9.1 bedrijfseconomische perspectieven noemen die de diverse betrokkenen bij de organisatie kunnen hebben.",
              begrippen: [],
            },
            {
              id: "a6-9-2",
              omschrijving: "9.2 bedrijfseconomische belangen noemen die uit de verschillende perspectieven kunnen voortvloeien.",
              begrippen: [],
            },
            {
              id: "a6-10",
              omschrijving: "10. De kandidaat kan: bedrijfseconomische werkwijzen toepassen; bedrijfseconomische begrippen gebruiken; bedrijfseconomische grootheden gebruiken; bedrijfseconomische relaties analyseren.",
              begrippen: [],
            },
          ],
        },
      ],
    },
    {
      id: "dom-b", naam: "Domein B: Van persoon naar rechtspersoon", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-b1", naam: "B1 — Persoonlijke financiële zelfredzaamheid",
          leerdoelen: [
            {
              id: "b1-11",
              omschrijving: "11. De kandidaat kan vraagstukken met persoonlijke financiële consequenties herkennen en analyseren en (financieel) onderbouwde keuzes maken.",
              begrippen: [],
            },
            {
              id: "b1-11-1",
              omschrijving: "11.1 bij de keuze voor een opleiding (niet-)financiële overwegingen als: een opleiding is een investeringsvraagstuk; het belang van een opleiding voor het individu en voor de samenleving — uitleggen.",
              begrippen: [],
            },
            {
              id: "b1-11-2",
              omschrijving: "11.2 Adviseren over financiële keuzes met betrekking tot verzekeren, lenen, sparen en beleggen.",
              begrippen: ["verzekeren", "lenen", "sparen", "beleggen"],
            },
            {
              id: "b1-11-2-1",
              omschrijving: "11.2.1 de voor- en nadelen van zich wel of niet verzekeren uitleggen.",
              begrippen: [],
            },
            {
              id: "b1-11-2-2",
              omschrijving: "11.2.2 het onderscheid tussen een levensverzekering en een schadeverzekering noemen.",
              begrippen: ["levensverzekering", "schadeverzekering"],
            },
            {
              id: "b1-11-2-3",
              omschrijving: "11.2.3 de verschillen tussen consumptief krediet en hypothecair krediet noemen.",
              begrippen: ["consumptief krediet", "hypothecair krediet"],
            },
            {
              id: "b1-11-2-4",
              omschrijving: "11.2.4 de financiële gevolgen van krediet voor de kredietnemer, noemen.",
              begrippen: ["interest- en aflossingsverplichtingen", "financiële gevolgen"],
            },
            {
              id: "b1-11-2-5",
              omschrijving: "11.2.5 de periodieke interestbedragen, de periodieke aflossingsbedragen en de schuldrest bij de vormen van consumptief krediet en hypothecair krediet berekenen.",
              begrippen: [],
              formules: ["periodieke interestbedragen", "periodieke aflossingsbedragen", "schuldrest"],
            },
            {
              id: "b1-11-2-6",
              omschrijving: "11.2.6 het verschil tussen enkelvoudige en samengestelde interest uitleggen.",
              begrippen: ["enkelvoudige interest", "samengestelde interest"],
            },
            {
              id: "b1-11-2-7",
              omschrijving: "11.2.7 de interest op basis van enkelvoudige interest berekenen.",
              begrippen: [],
            },
            {
              id: "b1-11-2-8",
              omschrijving: "11.2.8 de contante waarde en de eindwaarde van een kapitaal berekenen op basis van samengestelde interest.",
              begrippen: ["contante waarde", "eindwaarde"],
            },
            {
              id: "b1-11-2-9",
              omschrijving: "11.2.9 de contante waarde en de eindwaarde van een reeks gelijke bedragen berekenen op basis van samengestelde interest.",
              begrippen: [],
            },
            {
              id: "b1-11-2-10",
              omschrijving: "11.2.10 de voor- en nadelen van vrijwillig sparen en verplicht sparen uitleggen.",
              begrippen: [],
            },
            {
              id: "b1-11-2-11",
              omschrijving: "11.2.11 de verplichte spaarvorm van het bedrijfspensioen noemen.",
              begrippen: ["bedrijfspensioen als een vorm van verplicht sparen"],
            },
            {
              id: "b1-11-2-12",
              omschrijving: "11.2.12 de voor- en nadelen van vrij opneembare en niet-vrij opneembare spaarvormen uitleggen.",
              begrippen: ["direct opneembare en niet-direct opneembare spaartegoeden"],
            },
            {
              id: "b1-11-2-13",
              omschrijving: "11.2.13 de vermogenstitels waarin belegd kan worden noemen.",
              begrippen: ["vermogenstitels", "aandelen", "obligaties", "beleggingsfondsen", "effectenbeurs", "call-opties en put-opties"],
            },
            {
              id: "b1-11-2-14",
              omschrijving: "11.2.14 de verschillen in risico en rendement tussen de vermogenstitels analyseren.",
              begrippen: [],
            },
            {
              id: "b1-11-3",
              omschrijving: "11.3 de keuze voor het huren of kopen van een woonhuis financieel analyseren.",
              begrippen: ["huren", "kopen"],
            },
            {
              id: "b1-11-3-1",
              omschrijving: "11.3.1 de verplichtingen van de huurder noemen en de financiële gevolgen ervan voor de huurder uitleggen.",
              begrippen: [],
            },
            {
              id: "b1-11-3-2",
              omschrijving: "11.3.2 de functie van de verschillende partijen op de hypotheekmarkt noemen.",
              begrippen: ["bank", "hypotheekadviseur", "makelaar", "notaris", "taxateur"],
            },
            {
              id: "b1-11-3-3",
              omschrijving: "11.3.3 de vormen van hypothecair krediet: lineaire hypotheek en annuïteitenhypotheek noemen.",
              begrippen: ["lineaire hypotheek", "annuïteitenhypotheek"],
            },
            {
              id: "b1-11-3-4",
              omschrijving: "11.3.4 de voor- en nadelen van de genoemde hypotheekvormen noemen en berekenen met betrekking tot de interest- en aflossingsverplichting voor de hypotheekgever.",
              begrippen: [],
            },
            {
              id: "b1-11-3-5",
              omschrijving: "11.3.5 de financiële gevolgen, inclusief de fiscale, van de genoemde hypotheekvormen voor de hypotheekgever analyseren.",
              begrippen: [],
            },
            {
              id: "b1-11-4",
              omschrijving: "11.4 de financiële en wettelijke consequenties van samenwonen, trouwen, scheiden, schenken en erven noemen en berekenen.",
              begrippen: [],
            },
            {
              id: "b1-11-4-1",
              omschrijving: "11.4.1 de verschillende registratievormen voor samenwonen noemen.",
              begrippen: ["samenwonen zonder samenlevingscontract", "samenwonen met samenlevingscontract"],
            },
            {
              id: "b1-11-4-2",
              omschrijving: "11.4.2 de verschillen tussen \"huwelijkse voorwaarden\" en \"in beperkte gemeenschap van goederen\" noemen.",
              begrippen: ["in beperkte gemeenschap van goederen", "op huwelijkse voorwaarden/partnerschapsvoorwaarden", "trouwen", "geregistreerd partnerschap"],
            },
            {
              id: "b1-11-4-3",
              omschrijving: "11.4.3 de financiële consequenties van scheiden op het gebied van scheidingsprocedure, partnerpensioenrechten kinderalimentatie en partneralimentatie noemen en berekenen, gegeven de inhoud van de wet.",
              begrippen: ["partnerpensioenrechten", "alimentatie"],
            },
            {
              id: "b1-11-4-4",
              omschrijving: "11.4.4 de wettelijke en fiscale consequenties inzake schenking als gevolg van de schenkovereenkomst noemen en berekenen.",
              begrippen: ["overeenkomst om niet", "schenkbelasting", "belastingvrijstelling", "vrijstellingen bij schenkingen aan ANBI"],
            },
            {
              id: "b1-11-4-5",
              omschrijving: "11.4.5 de wettelijke en fiscale consequenties van erven noemen en berekenen.",
              begrippen: ["testament", "erfgenamen", "onterven", "legitieme portie", "verwerpen", "aanvaarding onder voorrecht van boedelbeschrijving / beneficiair aanvaarden", "zuiver aanvaarden", "erfbelastingen en vrijstellingen"],
            },
          ],
        },
        {
          id: "sub-b2", naam: "B2 — De oprichting van een eenmanszaak",
          leerdoelen: [
            {
              id: "b2-12",
              omschrijving: "12. De kandidaat kan het proces voor en rond de oprichting van een eenmanszaak beschrijven, in de rol van ondernemer toepassen en analyseren.",
              begrippen: [],
            },
            {
              id: "b2-12-1",
              omschrijving: "12.1 de voor- en nadelen van een arbeidsrelatie versus zelfstandig ondernemerschap beoordelen.",
              begrippen: [],
            },
            {
              id: "b2-12-2",
              omschrijving: "12.2 in de rol van ondernemer het (creatieve) proces voor de oprichting van een eenmanszaak beoordelen.",
              begrippen: [],
            },
            {
              id: "b2-12-2-1",
              omschrijving: "12.2.1 de benaderingswijzen van ondernemerschap volgens essenties van causation en effectuation noemen.",
              begrippen: ["causation", "effectuation"],
            },
            {
              id: "b2-12-2-2",
              omschrijving: "12.2.2 de verschillende fasen noemen bij het proces van causation: marktdefinitie, segmentatie/richten en positioneren.",
              begrippen: ["marktdefinitie", "segmentatie/richten", "positioneren"],
            },
            {
              id: "b2-12-2-3",
              omschrijving: "12.2.3 de verschillende fasen noemen bij het proces van effectuation: nieuwe markten, strategische partners toevoegen en stakeholders betrekken.",
              begrippen: ["nieuwe markten en uitgaan van beschikbare middelen", "strategische partners", "stakeholders"],
            },
            {
              id: "b2-12-2-4",
              omschrijving: "12.2.4 beoordelen in hoeverre de uitvoering van causation en effectuation bijdragen aan de realisatie van de ondernemersdoelstelling.",
              begrippen: [],
            },
            {
              id: "b2-12-3",
              omschrijving: "12.3 in de rol van ondernemer de verschillende onderdelen van een ondernemingsplan opstellen.",
              begrippen: [],
            },
            {
              id: "b2-12-3-1",
              omschrijving: "12.3.1 een persoonlijk plan opstellen.",
              begrippen: ["persoonlijke gegevens", "persoonlijke motieven", "persoonlijke kwaliteiten"],
            },
            {
              id: "b2-12-3-2",
              omschrijving: "12.3.2 een marketingplan opstellen.",
              begrippen: ["het idee", "trends en ontwikkelingen", "doelgroepen", "concurrentie", "SWOT analyse", "product", "prijs", "promotie", "plaats/distributie", "doelstellingen"],
            },
            {
              id: "b2-12-3-3",
              omschrijving: "12.3.3 een financieel plan opstellen.",
              begrippen: ["investeringsbegroting", "financieringsbegroting", "exploitatiebegroting", "liquiditeitsbegroting"],
            },
            {
              id: "b2-12-4",
              omschrijving: "12.4 de verschillende verplichtingen met betrekking tot de oprichting van een eenmanszaak door een ondernemer uitleggen.",
              begrippen: ["inschrijving bij Kamer van Koophandel", "registratie bij de Belastingdienst", "vergunningen"],
            },
          ],
        },
        {
          id: "sub-b3", naam: "B3 — Van eenmanszaak naar rechtspersoon",
          leerdoelen: [
            {
              id: "b3-13",
              omschrijving: "13. De kandidaat kan de belangrijkste kenmerken van verschillende rechtsvormen beschrijven.",
              begrippen: [],
            },
            {
              id: "b3-13-1",
              omschrijving: "13.1 in de rol van ondernemer en/of bestuurder uitleggen wat een geschikte rechtsvorm voor de eigen organisatie is.",
              begrippen: [],
            },
            {
              id: "b3-13-1-1",
              omschrijving: "13.1.1 het begrip rechtsvorm noemen.",
              begrippen: ["rechtsvorm"],
            },
            {
              id: "b3-13-1-2",
              omschrijving: "13.1.2 het verschil tussen natuurlijk persoon en rechtspersoon uitleggen.",
              begrippen: ["natuurlijk persoon", "rechtspersoon"],
            },
            {
              id: "b3-13-1-3",
              omschrijving: "13.1.3 de kenmerken van de rechtsvormen eenmanszaak, vennootschap onder firma (openbare vennootschap), besloten vennootschap, naamloze vennootschap, stichting en vereniging noemen met betrekking tot continuïteit, financiering, juridische aansprakelijkheid, belastingen, leiding, besluitvorming en zeggenschap.",
              begrippen: ["eenmanszaak", "vennootschap onder firma (openbare vennootschap)", "besloten vennootschap", "naamloze vennootschap", "stichting", "vereniging"],
            },
            {
              id: "b3-13-1-4",
              omschrijving: "13.1.4 de keuze voor een bepaalde rechtsvorm uitleggen.",
              begrippen: [],
            },
            {
              id: "b3-13-1-5",
              omschrijving: "13.1.5 de belangrijkste bevoegdheden van de organen binnen een organisatie: bestuur, raad van commissarissen, algemene ledenvergadering en algemene vergadering van aandeelhouders noemen.",
              begrippen: ["bestuur", "raad van commissarissen", "algemene ledenvergadering", "algemene vergadering van aandeelhouders"],
            },
            {
              id: "b3-13-1-6",
              omschrijving: "13.1.6 de redenen tot het beëindigen van een organisatie uitleggen.",
              begrippen: ["zonder bedrijfsopvolging/verkoop"],
            },
            {
              id: "b3-13-1-7",
              omschrijving: "13.1.7 de begrippen surseance van betaling en faillissement uitleggen.",
              begrippen: ["surseance van betaling", "faillissement"],
            },
            {
              id: "b3-13-1-8",
              omschrijving: "13.1.8 de gevolgen van een surseance van betaling voor de stakeholders uitleggen.",
              begrippen: ["stakeholders"],
            },
            {
              id: "b3-13-1-9",
              omschrijving: "13.1.9 de gevolgen van een faillissement voor de stakeholders uitleggen.",
              begrippen: [],
            },
          ],
        },
        {
          id: "sub-b4", naam: "B4 — Perspectief op de organisatie",
          leerdoelen: [
            {
              id: "b4-14",
              omschrijving: "14. De kandidaat kan de rol en plaats van de organisatie in de maatschappij beschrijven.",
              begrippen: [],
            },
            {
              id: "b4-14-1",
              omschrijving: "14.1 de verschillende indelingscriteria voor een organisatie uitleggen.",
              begrippen: [],
            },
            {
              id: "b4-14-1-1",
              omschrijving: "14.1.1 de absolute omvang en de relatieve omvang van een organisatie uitleggen en berekenen.",
              begrippen: ["absolute omvang", "relatieve omvang", "marktaandeel (afzet en omzet)"],
            },
            {
              id: "b4-14-1-2",
              omschrijving: "14.1.2 het onderscheid uitleggen tussen een organisatie met een commerciële doelstelling en een organisatie met een niet-commerciële doelstelling.",
              begrippen: ["commercieel", "niet-commercieel"],
            },
            {
              id: "b4-14-2",
              omschrijving: "14.2 het bestaansrecht van een organisatie uitleggen.",
              begrippen: [],
            },
            {
              id: "b4-14-2-1",
              omschrijving: "14.2.1 uitleggen in welke maatschappelijke behoeften de organisatie voorziet.",
              begrippen: ["product of dienst", "werkgelegenheid", "innovatie", "belastingopbrengsten", "inkomen"],
            },
            {
              id: "b4-14-2-2",
              omschrijving: "14.2.2 uitleggen welke kansen en bedreigingen vanuit de maatschappij op een organisatie afkomen.",
              begrippen: [],
            },
            {
              id: "b4-14-2-3",
              omschrijving: "14.2.3 de betekenis van de controleverklaring en de rol van de externe accountant in het maatschappelijk verkeer uitleggen.",
              begrippen: ["controleverklaring", "verslaggeving"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-c", naam: "Domein C: Interne organisatie en personeelsbeleid", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-c2", naam: "C2 — Personeelsbeleid",
          leerdoelen: [
            {
              id: "c2-17",
              omschrijving: "17. De kandidaat kan personeelsbeleid/HRM beschrijven en daarbij de relatie leggen met de doelstelling en de aard van de organisatie.",
              begrippen: [],
            },
            {
              id: "c2-17-1",
              omschrijving: "17.1 de verschillende vormen van een arbeidsrelatie voor een organisatie noemen.",
              begrippen: ["individuele arbeidsovereenkomst", "zzp"],
            },
            {
              id: "c2-17-2",
              omschrijving: "17.2 uitleggen dat het personeel tot het human capital van de organisatie hoort.",
              begrippen: [],
            },
            {
              id: "c2-17-3",
              omschrijving: "17.3 de wettelijke eisen noemen opdat er sprake is van een individuele arbeidsovereenkomst.",
              begrippen: ["gezagsverhouding", "arbeidsverplichting", "loon"],
            },
            {
              id: "c2-17-4",
              omschrijving: "17.4 de verschillen tussen de overeenkomst van een ZZP'er en een individuele arbeidsovereenkomst uitleggen.",
              begrippen: [],
            },
            {
              id: "c2-17-5",
              omschrijving: "17.5 de belangrijkste vormen van een individuele arbeidsovereenkomst noemen.",
              begrippen: ["voor onbepaalde tijd", "voor bepaalde tijd", "oproep", "nul-uren"],
            },
            {
              id: "c2-17-6",
              omschrijving: "17.6 de verschillen tussen een cao en individuele arbeidsovereenkomst noemen.",
              begrippen: [],
            },
            {
              id: "c2-17-7",
              omschrijving: "17.7 de gevolgen van wetgeving met betrekking tot ontslagrecht en Arbo voor de organisatie uitleggen.",
              begrippen: ["ontslagrecht", "arbowetgeving"],
            },
            {
              id: "c2-17-8",
              omschrijving: "17.8 de bevoegdheden van de ondernemingsraad en van de vakbond noemen en de gevolgen ervan voor de organisatie uitleggen.",
              begrippen: ["ondernemingsraad", "vakbond"],
            },
            {
              id: "c2-17-9",
              omschrijving: "17.9 beloningsvormen noemen.",
              begrippen: ["in geld", "in aandelen", "carrièreperspectief", "mogelijk tot professionele ontwikkeling"],
            },
            {
              id: "c2-17-10",
              omschrijving: "17.10 de onderdelen van het personeelsbeleid uitleggen.",
              begrippen: ["functieprofielen", "functiewaardering", "personeelsplanning", "werving en selectie", "opstellen arbeidscontracten", "functioneringsgesprek", "beoordelingsgesprek"],
            },
            {
              id: "c2-17-11",
              omschrijving: "17.11 de ontwikkeling van de loonkosten van de organisatie uitleggen met betrekking tot de concurrentie of een interne doelstelling.",
              begrippen: [],
            },
            {
              id: "c2-17-12",
              omschrijving: "17.12 de ontwikkeling van de kwaliteit, omvang en samenstelling van het personeelsbestand van de organisatie uitleggen met betrekking tot de concurrentie of een interne doelstelling.",
              begrippen: [],
            },
            {
              id: "c2-17-13",
              omschrijving: "17.13 uitleggen in hoeverre de kernwaarden van de organisatie tot uiting komen in het personeelsbeleid en wordt gedragen en/of uitgedragen door het personeel.",
              begrippen: ["individuele beloningen", "ontslagzaken", "werkvergunningen", "Arbo", "Onderzoek personeelstevredenheid"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-d", naam: "Domein D: Investeren en financieren", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-d2", naam: "D2 — Financieren",
          leerdoelen: [
            {
              id: "d2-20",
              omschrijving: "20. De kandidaat kan vanuit het perspectief van een organisatie de werking van de vermogensmarkt beschrijven.",
              begrippen: [],
            },
            {
              id: "d2-20-1",
              omschrijving: "20-1. de verschillende financieringsmogelijkheden voor een startende eenmanszaak analyseren.",
              begrippen: [],
            },
            {
              id: "d2-20-1-1",
              omschrijving: "20.1.1 verschillende financieringswijzen noemen.",
              begrippen: ["banken", "overige vermogensverschaffers, inclusief leasemaatschappijen", "eigen inbreng"],
            },
            {
              id: "d2-20-1-2",
              omschrijving: "20.1.2 de voorwaarden die de financiers stellen, analyseren.",
              begrippen: [],
            },
            {
              id: "d2-20-2",
              omschrijving: "20-2. vanuit het perspectief van een organisatie de werking van de vermogensmarkt analyseren.",
              begrippen: [],
            },
            {
              id: "d2-20-2-1",
              omschrijving: "20.2.1 het belang van de vermogensmarkt voor een onderneming uitleggen.",
              begrippen: ["openbaar en onderhands vermogen"],
            },
            {
              id: "d2-20-2-2",
              omschrijving: "20.2.2 de verschillen tussen de vermogenstitels noemen.",
              begrippen: ["aandelen", "obligaties", "beleggingsfondsen", "koersverloop en volatiliteit"],
            },
            {
              id: "d2-20-2-3",
              omschrijving: "20.2.3 de belangrijkste toezichthouders op de vermogensmarkt noemen en hun rol uitleggen.",
              begrippen: ["Autoriteit Financiële Markten (AFM)", "De Nederlandse Bank (DNB)", "Autoriteit Consument en Markt (ACM)"],
            },
            {
              id: "d2-20-2-4",
              omschrijving: "20.2.4 het koersverloop van obligaties in relatie tot veranderingen in de marktrente analyseren.",
              begrippen: ["marktrente"],
            },
            {
              id: "d2-20-2-5",
              omschrijving: "20.2.5 het begrip marktefficiëntie uitleggen ten aanzien van de beurskoersen en de wijze waarop informatie in de koersen wordt verwerkt.",
              begrippen: ["marktefficiëntie", "bedrijfsnieuws (financieel en niet-financieel)", "beursklimaat", "marktsentiment"],
            },
            {
              id: "d2-20-2-6",
              omschrijving: "20.2.6 de invloed van de netto contante waarde van nieuwe projecten op de marktwaarde van de organisatie analyseren.",
              begrippen: ["netto contante waarde"],
            },
            {
              id: "d2-21",
              omschrijving: "21. De kandidaat kan in de context van een financieringsvraagstuk de redenen voor het aantrekken van verschillende types vermogen onderscheiden.",
              begrippen: [],
            },
            {
              id: "d2-21-1",
              omschrijving: "21.1 het verschil tussen het maatschappelijk aandelenkapitaal en het geplaatst aandelenkapitaal berekenen.",
              begrippen: ["maatschappelijk aandelenkapitaal", "geplaatst aandelenkapitaal"],
            },
            {
              id: "d2-21-2",
              omschrijving: "21.2 het onderscheid tussen de nominale waarde, beurskoers, emissiekoers en intrinsieke waarde van een aandeel uitleggen.",
              begrippen: ["nominale waarde", "intrinsieke waarde", "emissiekoers", "agio op aandelen", "beurskoers"],
            },
            {
              id: "d2-21-3",
              omschrijving: "21.3 de invloed van het beursklimaat, de beurskoers en de toekomstverwachting op de emissiekoers uitleggen.",
              begrippen: [],
            },
            {
              id: "d2-21-4",
              omschrijving: "21.4 het agio op aandelen berekenen.",
              begrippen: [],
            },
            {
              id: "d2-21-5",
              omschrijving: "21.5 de verschillen tussen de vormen van lang vreemd vermogen, i.c. hypothecaire lening, gewone obligatielening, converteerbare obligatielening en onderhandse lening noemen.",
              begrippen: ["hypothecaire lening", "onderhandse lening", "gewone obligatielening", "converteerbare obligatielening", "langlopende leaseverplichtingen"],
            },
            {
              id: "d2-21-6",
              omschrijving: "21.6 de voor- en nadelen van een converteerbare obligatielening vergelijken met die van een gewone obligatielening.",
              begrippen: [],
            },
            {
              id: "d2-21-7",
              omschrijving: "21.7 het onderscheid tussen de nominale waarde, beurskoers, emissiekoers van een obligatie uitleggen.",
              begrippen: ["agio op obligaties", "disagio op obligaties", "interbancaire interest"],
            },
            {
              id: "d2-21-8",
              omschrijving: "21.8 het agio en disagio op obligaties berekenen.",
              begrippen: [],
            },
            {
              id: "d2-21-9",
              omschrijving: "21.9 de verschillen tussen vormen van kort vreemd vermogen, i.c. rekening-courant krediet, leverancierskrediet en afnemerskrediet noemen.",
              begrippen: ["bankkrediet (rekening-courantkrediet)", "leverancierskrediet", "afnemerskrediet"],
            },
            {
              id: "d2-21-10",
              omschrijving: "21.10 risico's noemen van de financieringskeuze.",
              begrippen: [],
            },
            {
              id: "d2-21-11",
              omschrijving: "21.11 de betekenis van off-balance-sheet risico's / off-balance-financiering uitleggen en aan de hand van een voorbeeld de aard en impact is van dit soort risico's analyseren.",
              begrippen: ["off-balance-sheet/off-balance-financiering"],
            },
            {
              id: "d2-21-12",
              omschrijving: "21.12 uitleggen dat door middel van opties en/of termijncontracten risico-hedging (risico afdekking) plaats vindt.",
              begrippen: ["hedgen/afdekken risico", "opties (call en put)"],
            },
            {
              id: "d2-21-13",
              omschrijving: "21.13 de risico's van opties en termijncontracten analyseren in relatie tot short posities en long posities.",
              begrippen: [],
            },
            {
              id: "d2-21-wv",
              omschrijving: "Winstverdeling: resultaat voor winstbelasting, vennootschapsbelasting, dividend en dividendbelasting, reservering.",
              begrippen: ["resultaat voor winstbelasting", "vennootschapsbelasting", "dividend (stock, cash, gewoon en preferent) in euro's", "dividendbelasting", "reservering"],
            },
            {
              id: "d2-22",
              omschrijving: "22. De kandidaat kan aangeven welke invloed de wijze van financieren heeft op het risico en geëist rendement van het eigen en vreemd vermogen.",
              begrippen: [],
            },
            {
              id: "d2-22-1",
              omschrijving: "22.1 de gevolgen van de verhouding tussen eigen vermogen/vreemd vermogen voor het interestpercentage op vreemd vermogen en het faillissementsrisico analyseren.",
              begrippen: ["verhouding tussen vreemd vermogen en eigen vermogen (risicodragend vermogen) / vermogensstructuur", "faillissementsrisico", "hefboomwerking/hefboomformule", "geëist rendement / vermogenskostenvoet"],
              formules: ["REV = RTV + (RTV - IVV) × vreemd vermogen / eigen vermogen (voor belasting)"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-e", naam: "Domein E: Marketing", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-e2", naam: "E2 — Marketingbeleid",
          leerdoelen: [
            {
              id: "e2-25",
              omschrijving: "25. De kandidaat kan het marketingbeleid van een organisatie beschrijven, analyseren en alternatieven op hoofdpunten afwegen.",
              begrippen: [],
            },
            {
              id: "e2-25-1",
              omschrijving: "25.1 De vier onderdelen van de marketingmix noemen.",
              begrippen: ["productbeleid (merk, garantie, service, kwaliteit)", "prijsbeleid (psychologische prijs, afroomprijspolitiek, prijspenetratiepolitiek)", "plaatsbeleid (push- en pullstrategie, distributiekanaal)", "promotiebeleid (sponsoring, reclame)"],
            },
            {
              id: "e2-25-2",
              omschrijving: "25.2 op basis van de samenhang tussen de marketinginstrumenten, het marketingbeleid beoordelen.",
              begrippen: ["waardestrategie, klantwaarde", "vijfkrachtenmodel van Porter"],
            },
            {
              id: "e2-25-3",
              omschrijving: "25.3 de voor- en nadelen van sponsoring door een organisatie analyseren.",
              begrippen: [],
            },
            {
              id: "e2-25-4",
              omschrijving: "25.4 het marketingbeleid op basis van de keuze tussen push- en pull-strategie beoordelen.",
              begrippen: ["push-strategie", "pull-strategie", "affiliatie"],
            },
            {
              id: "e2-25-5",
              omschrijving: "25.5 de verschillen tussen B2C-, B2B-, C2B- en C2C-marketing noemen en uitleggen.",
              begrippen: ["B2C (Business to Consumer)", "B2B (Business to Business)", "C2B (Consumer to Business)", "C2C (Consumer to Consumer)", "e-marketing en social media"],
            },
          ],
        },
      ],
    },
    {
      id: "dom-f", naam: "Domein F: Financieel beleid", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-f1", naam: "F1 — Vastleggen van financiële en niet-financiële informatie",
          leerdoelen: [
            {
              id: "f1-28",
              omschrijving: "28. De kandidaat kan financiële feiten inventariseren en verwerken tot financiële overzichten.",
              begrippen: [],
            },
            {
              id: "f1-28-1",
              omschrijving: "28.1 de gevolgen van financiële feiten, in de context van een eenmanszaak, voor de balans en winst- en verliesrekening analyseren. NB De kandidaat hoeft geen journaalposten op te stellen.",
              begrippen: ["inkoop (en ontvangst) van goederen en diensten (contant en op rekening)", "verkoop (en aflevering) van goederen en diensten (contant en op rekening)", "aflossen van schulden", "afschrijving (op basis van aanschafwaarde)", "btw aangifte", "privéontvangsten en -uitgaven", "overige ontvangsten per kas en bank", "overige uitgaven per kas en bank"],
            },
            {
              id: "f1-28-2",
              omschrijving: "28.2 de kosten op basis van gegeven uitgaven en de opbrengsten op basis van gegeven ontvangsten en vice versa, berekenen.",
              begrippen: [],
            },
            {
              id: "f1-28-3",
              omschrijving: "28.3 de samenhang uitleggen tussen een beginbalans, een liquiditeitsbegroting, een exploitatiebegroting en een geprognosticeerde eindbalans ten dienste van de interne verslaggeving opstellen.",
              begrippen: ["beginbalans", "eindbalans", "liquiditeitsbegroting", "exploitatiebegroting", "geprognosticeerde eindbalans", "winst- en verliesrekening", "afzet", "verkoopprijs", "omzet", "kosten", "bedrijfsresultaat", "financieringsresultaat", "incidentele resultaat", "resultaat voor winstbelasting", "vennootschapsbelasting", "inkomstenbelasting", "resultaat na winstbelasting", "eigen vermogen", "verandering liquide middelen", "liquide middelen", "gerealiseerde balans", "voorraadgrootheden", "stroomgrootheden"],
            },
            {
              id: "f1-28-4",
              omschrijving: "28.4 de samenhang uitleggen tussen een exploitatiebegroting, een geprognosticeerde eindbalans en een liquiditeitsbegroting gegeven de beginbalans.",
              begrippen: ["nog te betalen bedragen", "nog te ontvangen bedragen", "vooruitbetaalde bedragen", "vooruitontvangen bedragen"],
            },
            {
              id: "f1-29",
              omschrijving: "29. De kandidaat kan financiële en niet-financiële informatie onderscheiden en het belang van beide uitleggen voor het besturen van de organisatie.",
              begrippen: [],
            },
            {
              id: "f1-29-1",
              omschrijving: "29.1 het onderscheid tussen financiële informatie en niet-financiële informatie uitleggen.",
              begrippen: ["niet-financiële informatie"],
            },
            {
              id: "f1-29-2",
              omschrijving: "29.2 uitleggen welke niet-financiële informatie als managementinformatie relevant is op het terrein van marktontwikkelingen, innovatie, klanten, efficiency en de kwaliteit van processen.",
              begrippen: [],
            },
            {
              id: "f1-29-3",
              omschrijving: "29.3 kritische succesfactoren noemen aan de hand van prestatie-indicatoren.",
              begrippen: ["kritische succesfactoren / prestatie-indicator", "assortiment", "innovatiekracht", "leveringstermijn", "efficiency", "kwaliteit processen / trainingsdagen", "klanttevredenheid / klachten", "communicatie / frequentie interne communicatie"],
            },
          ],
        },
        {
          id: "sub-f2", naam: "F2 — Kosten- en winstvraagstukken",
          leerdoelen: [
            {
              id: "f2-30",
              omschrijving: "30. De kandidaat kan met behulp van diverse methoden de kostprijs berekenen en de verkoopprijs vaststellen.",
              begrippen: [],
            },
            {
              id: "f2-30-1",
              omschrijving: "30.1 in de context van een kostenvraagstuk de verschillende kostensoorten uitleggen.",
              begrippen: [],
            },
            {
              id: "f2-30-1-1",
              omschrijving: "30.1.1 de verschillende categoriale kostensoorten kunnen noemen.",
              begrippen: [],
            },
            {
              id: "f2-30-1-2",
              omschrijving: "30.1.2 uitleggen wat het verschil is tussen constante en (proportioneel) variabele kosten.",
              begrippen: ["constante/Variabele Kosten", "proportionele kosten"],
            },
            {
              id: "f2-30-1-3",
              omschrijving: "30.1.3 uitleggen wat het verschil is tussen de toegerekende kosten van een dienst en periodekosten.",
              begrippen: ["toegerekende kosten en periodekosten"],
            },
            {
              id: "f2-30-2",
              omschrijving: "30.2 in de context van een kostenvraagstuk volgens diverse methoden de kosten per geleverde dienst berekenen.",
              begrippen: [],
            },
            {
              id: "f2-30-2-1",
              omschrijving: "30.2.1 het tarief/de tarieven berekenen van een dienstverlenende organisatie waarbij alleen de variabele kosten verbijzonderd worden en de constante kosten via een opslag per activiteit worden doorberekend.",
              begrippen: ["variabele kostencalculatiemethode", "winstopslag", "winstmarge"],
            },
            {
              id: "f2-30-2-2",
              omschrijving: "30.2.2 het resultaat van een dienstverlenende onderneming over een periode berekenen waarbij de variabele kosten worden toegerekend aan de in die periode verleende diensten en de constante kosten direct ten laste van de winst- en verliesrekening worden gebracht (de variabele kostencalculatiemethode).",
              begrippen: [],
            },
            {
              id: "f2-30-3",
              omschrijving: "30.3 De kandidaat kan de verkoopprijs berekenen.",
              begrippen: [],
            },
            {
              id: "f2-30-3-1",
              omschrijving: "30.3.1 de grootte van de verkoopprijs inclusief btw als de verkoopprijs exclusief btw bekend is (en vice versa).",
              begrippen: ["te vorderen btw", "te betalen btw", "af te dragen btw"],
            },
            {
              id: "f2-30-3-2",
              omschrijving: "30.3.2 op basis van de kostprijs via een winstopslag de verkoopprijs berekenen.",
              begrippen: [],
            },
            {
              id: "f2-30-3-3",
              omschrijving: "30.3.3 uitleggen wat transfer pricing is en uitleggen hoe dit binnen een bedrijf gebruikt kan worden om door middel van kostenallocatie de winst te beïnvloeden.",
              begrippen: ["transfer pricing"],
            },
            {
              id: "f2-30-4",
              omschrijving: "30.4 een break-even analyse opstellen.",
              begrippen: [],
            },
            {
              id: "f2-30-4-1",
              omschrijving: "30.4.1 de break-even afzet en break-even omzet berekenen op basis van de dekkingsbijdrage in euro's per uur en in procenten van de omzet.",
              begrippen: ["break even omzet", "break even afzet", "dekkingsbijdrage"],
              formules: [
                "breakeven-omzet = totale constante kosten / dekkingsbijdrage in perunage van de omzet",
                "perunage = percentage / 100",
                "breakeven-afzet = totale constante kosten / dekkingsbijdrage per product",
              ],
            },
            {
              id: "f2-30-4-2",
              omschrijving: "30.4.2 de totale opbrengsten, de totale kosten en het totale resultaat grafisch kunnen opstellen.",
              begrippen: [],
            },
            {
              id: "f2-30-4-3",
              omschrijving: "30.4.3 een grafische weergave van een break-even analyse kunnen uitleggen.",
              begrippen: [],
            },
            {
              id: "f2-30-5",
              omschrijving: "30.5 de winstverdeling opstellen.",
              begrippen: ["winst", "cashflow"],
            },
            {
              id: "f2-31",
              omschrijving: "31. De kandidaat kan voor niet-industriële organisatie de voorcalculatorische en de nacalculatorische resultatenrekening opstellen, verschillen verklaren en passende beheermaatregelen afleiden.",
              begrippen: [],
            },
            {
              id: "f2-31-1",
              omschrijving: "31.1 de voorcalculatorische- en nacalculatorische winst- en verliesrekening opstellen en de verschillen uitleggen.",
              begrippen: [],
            },
            {
              id: "f2-31-1-1",
              omschrijving: "31.1.1 het verschil tussen voorcalculatorische (toegestane) grootheden en nacalculatorische (gerealiseerde) grootheden uitleggen.",
              begrippen: [],
            },
            {
              id: "f2-31-1-2",
              omschrijving: "31.1.2 het verschil tussen het voorcalculatorische en het gerealiseerde resultaat berekenen en uitleggen door middel van een verschillenanalyse.",
              begrippen: ["verschillenanalyse"],
            },
            {
              id: "f2-31-1-3",
              omschrijving: "31.1.3 de verschillenanalyse opstellen op basis van verkoopresultaat en budgetresultaat (prijsresultaat, efficiencyresultaat en bezettingsresultaat).",
              begrippen: ["verkoopresultaat", "budgetresultaat", "prijsresultaat", "efficiencyresultaat", "bezettingsresultaat"],
              formules: [
                "Verkoopresultaat = afzet × (verkoopprijs – kostprijs)",
                "Budgetresultaat = gerealiseerde afzet × kostprijs – werkelijke kosten",
                "efficiencyresultaat = (sh – wh) × sp",
                "prijsresultaat = (sp – wp) × wh",
                "gerealiseerd bezettingsresultaat = (W - N) × C/N",
                "begroot bezettingsresultaat = (B - N) × C/N",
                "prijsresultaat constante kosten = Cb – Cw",
              ],
            },
            {
              id: "f2-31-1-4",
              omschrijving: "31.1.4 De kandidaat kan het verschil tussen winst en cashflow uitleggen.",
              begrippen: [],
              formules: ["cashflow = resultaat + afschrijvingen"],
            },
            {
              id: "f2-31-1-5",
              omschrijving: "31.1.5 De kandidaat kan uitleggen dat de winst wordt beïnvloed door het gekozen afschrijvingssysteem en de gekozen waarderingsgrondslag van de activa.",
              begrippen: ["afschrijvingssystemen vaste activa: vast percentage aanschafwaarde", "waarderingsgrondslag activa: historische kosten", "actuele waarde", "herwaardering zonder inhaalafschrijving"],
            },
            {
              id: "f2-31-2",
              omschrijving: "31.2 de voorraadwaardering kunnen analyseren.",
              begrippen: ["voorraad goederen waardering: vaste verrekenprijs", "prijsverschil bij inkoop"],
            },
            {
              id: "f2-31-3",
              omschrijving: "31.3 uitleggen welke beleidsbeslissingen het management kan koppelen aan de behaalde resultaten per financiële en niet-financiële informatiecategorie.",
              begrippen: [],
            },
            {
              id: "f2-31-3-1",
              omschrijving: "31.3.1 uitleggen wat bedoeld wordt met niet-financiële informatie en het belang van social accounting verklaren.",
              begrippen: [],
            },
            {
              id: "f2-31-3-2",
              omschrijving: "31.3.2 uitleggen dat niet-financiële informatie een belangrijk onderdeel is van risicomanagement en dat het de ondernemingsresultaten kan beïnvloeden.",
              begrippen: [],
            },
            {
              id: "f2-31-3-3",
              omschrijving: "31.3.3 uitleggen dat niet-financiële informatie gebruikt kan worden om de waarde van immateriële activa duidelijk te maken voor stakeholders.",
              begrippen: [],
            },
          ],
        },
      ],
    },
    {
      id: "dom-g", naam: "Domein G: Verslaggeving", ceRelevant: true,
      subdomeinen: [
        {
          id: "sub-g", naam: "G — Verslaggeving",
          leerdoelen: [
            {
              id: "g-32",
              omschrijving: "32. De kandidaat kan de jaarrekening van een organisatie (zoals een MKB-bedrijf) analyseren en evalueren.",
              begrippen: [],
            },
            {
              id: "g-32-1",
              omschrijving: "32.1 uitleggen wat de verschillende posten op de balans en winst- en verliesrekening van de jaarrekening inhouden.",
              begrippen: ["bestuursverslag", "balans", "winst- en verliesrekening", "immateriële vaste activa", "materiële vaste activa", "financiële vaste activa", "voorraad", "debiteuren", "effecten", "overlopende posten", "liquide middelen", "eigen vermogen", "reserves", "resultaat", "hypothecaire lening", "onderhandse lening", "crediteuren", "rekening-courantkrediet", "overlopende posten/transitorische posten", "onderhoudsvoorziening", "garantievoorziening", "pensioenvoorziening"],
            },
            {
              id: "g-32-2",
              omschrijving: "32.2 uitleggen wat de relevantie is van \"niet uit de balans blijkende verplichtingen en risico's\".",
              begrippen: ["niet uit de balans blijkende verplichtingen en risico's"],
            },
            {
              id: "g-32-3",
              omschrijving: "32.3 kengetallen ter beoordeling van de onderneming berekenen: liquiditeitsratio's: current ratio, quick ratio; solvabiliteitsratio's: elk verhoudingsgetal EV/VV/TV; rentabiliteitsratio's: resultaat per aandeel, REV, RTV, IVV, cash flow per aandeel.",
              begrippen: ["current ratio", "quick ratio", "solvabiliteitsratio's EV/VV/TV", "resultaat per aandeel", "cash flow per aandeel", "REV", "RTV", "IVV", "dividendrendement", "beleggersrendement", "hefboomwerking en interestmarge"],
              formules: [
                "quick ratio = vlottende activa exclusief voorraden / kort vreemd vermogen",
                "current ratio = vlottende activa / kort vreemd vermogen",
                "solvabiliteit = eigen vermogen / vreemd vermogen × 100% of vreemd vermogen / totale vermogen × 100%",
                "rentabiliteit van het totale vermogen = (resultaat + interestkosten) / het gemiddelde totale vermogen × 100%",
                "rentabiliteit van het eigen vermogen = resultaat / het gemiddelde eigen vermogen × 100%",
                "interestkosten van het vreemd vermogen = interestkosten / gemiddeld vreemd vermogen × 100%",
                "cashflow = resultaat + afschrijvingen",
                "dividendrendement = dividend per aandeel / gemiddelde beurskoers × 100%",
                "beleggersrendement = opbrengst en koersresultaat van de belegging in een jaar / gemiddeld belegd vermogen in dat jaar × 100%",
              ],
            },
            {
              id: "g-32-4",
              omschrijving: "32.4 uitleggen welke voor- en nadelen zijn verbonden aan het hanteren van kengetallen.",
              begrippen: [],
            },
            {
              id: "g-32-5",
              omschrijving: "32.5 aan de hand van (kengetallen van) twee opeenvolgende balansen en/of winst- en verliesrekeningen de ontwikkeling analyseren van de organisatie op het terrein van de financiële structuur, liquiditeit, solvabiliteit, rentabiliteit en cashflow.",
              begrippen: ["omzet", "kosten", "EBIT(DA), resultaat voor interest, belastingen (afschrijving en amortisatie)", "actuele waarde", "herwaardering en afwaardering"],
            },
            {
              id: "g-32-6",
              omschrijving: "32.6 het DuPont schema kunnen analyseren.",
              begrippen: ["omloopsnelheid", "resultaatmarge"],
              formules: [
                "omloopsnelheid van het gemiddeld totale vermogen = omzet / gemiddeld totale vermogen",
                "resultaatmarge = resultaat EBIT / omzet",
              ],
            },
            {
              id: "g-32-7",
              omschrijving: "32.7 de invloed van verschillende wet- en regelgevingen op de jaarrekening noemen.",
              begrippen: ["wet- en regelgeving"],
            },
            {
              id: "g-32-8",
              omschrijving: "32.8 de relatie tussen financiële en niet-financiële verslaggeving uitleggen.",
              begrippen: [],
            },
          ],
        },
      ],
    },
  ],
};

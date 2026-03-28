import { Vak } from "@/types";

export const ALLE_VAKKEN: Vak[] = [
  // ── VWO ───────────────────────────────────────────────────────────────────
  {
    id: "bedrijfseconomie-vwo",
    naam: "Bedrijfseconomie",
    examDatum: "2026-05-08", tijd: "13:30", datum: "8 mei", examDuur: 180,
    kleur: "#f59e0b",
    niveaus: ["VWO"],
    profielen: ["EM"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "bedrijfseconomie",
    syllabus: ["Rechtsvormen (BV/NV)","Investeringsselectie (NCW)","Marketingbeleid","Break-even analyse","Liquiditeitskengetallen","Solvabiliteitskengetallen","Rentabiliteitskengetallen","Verslaggeving & jaarrekening"]
  },
  {
    id: "geschiedenis-vwo",
    naam: "Geschiedenis",
    examDatum: "2026-05-11", tijd: "09:00", datum: "11 mei", examDuur: 180,
    kleur: "#7c3aed",
    niveaus: ["VWO"],
    profielen: ["CM","EM"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "geschiedenis",
    syllabus: ["49 Kenmerkende Aspecten (KA)","Context: Steden & Burgers","Context: Verlichting & Revoluties","Context: Duitsland (1918–1991)","Context: Koude Oorlog","Historisch redeneren","Tijdvakken 1–10"]
  },
  {
    id: "natuurkunde-vwo",
    naam: "Natuurkunde",
    examDatum: "2026-05-11", tijd: "13:30", datum: "11 mei", examDuur: 180,
    kleur: "#2563eb",
    niveaus: ["VWO"],
    profielen: ["NG","NT"],
    hulpmiddelen: ["Binas","GR"],
    alleExamensSlug: "natuurkunde",
    syllabus: ["Mechanica (krachten & beweging)","Energie & arbeid","Elektriciteit & magnetisme","Golven & trillingen","Stralingsleer (atoomkern)","Quantummechanica (basis)","Optica"]
  },
  {
    id: "nederlands-vwo",
    naam: "Nederlands",
    examDatum: "2026-05-12", tijd: "13:30", datum: "12 mei", examDuur: 180,
    kleur: "#06b6d4",
    niveaus: ["VWO"],
    profielen: ["CM","EM","NG","NT"],
    verplicht: true,
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "nederlands",
    syllabus: ["Leesvaardigheid","Argumentatiestructuren herkennen","Drogredenen herkennen","Samenvatten","Tekstdoelen bepalen","Nuancering & modaliteit herkennen"]
  },
  {
    id: "filosofie-vwo",
    naam: "Filosofie",
    examDatum: "2026-05-13", tijd: "09:00", datum: "13 mei", examDuur: 180,
    kleur: "#a78bfa",
    niveaus: ["VWO"],
    profielen: ["CM"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "filosofie",
    syllabus: ["Kennisleer (epistemologie)","Ethiek & moraalfilosofie","Politieke filosofie","Metafysica","Argumentatieleer","Filosofische stromingen"]
  },
  {
    id: "wiskunde-a-vwo",
    naam: "Wiskunde A",
    examDatum: "2026-05-13", tijd: "13:30", datum: "13 mei", examDuur: 180,
    kleur: "#10b981",
    niveaus: ["VWO"],
    profielen: ["CM","EM","NG"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-a",
    syllabus: ["Algebraïsche vaardigheden","Exponentiële verbanden","Logaritmische verbanden","Differentiëren","Kansrekening (Binomiaal)","Combinaties & permutaties","Statistiek & spreidingsmaten","Hypothesetoetsen"]
  },
  {
    id: "wiskunde-b-vwo",
    naam: "Wiskunde B",
    examDatum: "2026-05-13", tijd: "13:30", datum: "13 mei", examDuur: 180,
    kleur: "#047857",
    niveaus: ["VWO"],
    profielen: ["NG","NT"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-b",
    syllabus: ["Goniometrie & periodieke functies","Differentiaalrekening (ketting/product)","Integraalrekening","Vectorrekening","Meetkunde & transformaties","Complexe getallen (basis)","Rijen & reeksen"]
  },
  {
    id: "wiskunde-c-vwo",
    naam: "Wiskunde C",
    examDatum: "2026-05-13", tijd: "13:30", datum: "13 mei", examDuur: 180,
    kleur: "#0d9488",
    niveaus: ["VWO"],
    profielen: ["CM"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-c",
    syllabus: ["Redeneren & bewijzen","Kansrekening & statistiek","Grafen & netwerken","Cryptografie","Numerieke methoden","Modelleren met functies"]
  },
  {
    id: "duits-vwo",
    naam: "Duits",
    examDatum: "2026-05-18", tijd: "09:00", datum: "18 mei", examDuur: 150,
    kleur: "#f43f5e",
    niveaus: ["VWO"],
    profielen: ["CM","EM"],
    hulpmiddelen: ["WBK-DU-NL"],
    alleExamensSlug: "duits",
    syllabus: ["Leesvaardigheid (B2/C1)","Signaalwoorden: Tegenstelling","Signaalwoorden: Oorzaak & Gevolg","Examenteksten analyseren","Tekstverklaring & woordbetekenis"]
  },
  {
    id: "aardrijkskunde-vwo",
    naam: "Aardrijkskunde",
    examDatum: "2026-05-18", tijd: "13:30", datum: "18 mei", examDuur: 180,
    kleur: "#059669",
    niveaus: ["VWO"],
    profielen: ["CM","EM","NG"],
    hulpmiddelen: ["Atlas"],
    alleExamensSlug: "aardrijkskunde",
    syllabus: ["Stedelijke gebieden","Ruimtelijke spreiding bevolking","Klimaat & klimaatverandering","Globalisering","Ontwikkeling & armoede","Gebiedsanalyse Nederland","Geografisch onderzoek"]
  },
  {
    id: "latijn-vwo",
    naam: "Latijn",
    examDatum: "2026-05-19", tijd: "09:00", datum: "19 mei", examDuur: 180,
    kleur: "#f59e0b",
    niveaus: ["VWO"],
    profielen: ["CM"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "latijn",
    syllabus: ["Vertaalvaardigheid","Grammatica (naamvallen)","Syntaxis","Cultuur & mythologie","Teksten: Cicero","Teksten: Caesar"]
  },
  {
    id: "scheikunde-vwo",
    naam: "Scheikunde",
    examDatum: "2026-05-19", tijd: "13:30", datum: "19 mei", examDuur: 180,
    kleur: "#d97706",
    niveaus: ["VWO"],
    profielen: ["NG","NT"],
    hulpmiddelen: ["Binas","GR"],
    alleExamensSlug: "scheikunde",
    syllabus: ["Atoombouw & periodiek systeem","Chemische bindingen","Reactievergelijkingen & stoichiometrie","Zuren & basen (pH)","Redoxreacties & elektrochemie","Organische chemie","Reactiekinetiek & evenwicht"]
  },
  {
    id: "engels-vwo",
    naam: "Engels",
    examDatum: "2026-05-20", tijd: "13:30", datum: "20 mei", examDuur: 150,
    kleur: "#3b82f6",
    niveaus: ["VWO"],
    profielen: ["CM","EM","NG","NT"],
    verplicht: true,
    hulpmiddelen: ["WBK-EN-NL"],
    alleExamensSlug: "engels",
    syllabus: ["Reading comprehension (C1/B2)","Gap-fill vragen","Tone & attitude herkennen","Core vocabulary","Signaalwoorden: Contrast & Addition"]
  },
  {
    id: "economie-vwo",
    naam: "Economie",
    examDatum: "2026-05-21", tijd: "13:30", datum: "21 mei", examDuur: 180,
    kleur: "#f97316",
    niveaus: ["VWO"],
    profielen: ["EM"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "economie",
    syllabus: ["Speltheorie (Nash-evenwicht)","Prisoner's Dilemma","Markt & Overheidsbeleid","Risico & Informatieasymmetrie","Welvaart & Economische Groei","Conjunctuurbeleid (ECB & rente)"]
  },
  {
    id: "grieks-vwo",
    naam: "Grieks",
    examDatum: "2026-05-22", tijd: "09:00", datum: "22 mei", examDuur: 180,
    kleur: "#f97316",
    niveaus: ["VWO"],
    profielen: ["CM"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "grieks",
    syllabus: ["Vertaalvaardigheid","Grammatica","Griekse cultuur & geschiedenis","Teksten: Plato","Teksten: Homerus"]
  },
  {
    id: "biologie-vwo",
    naam: "Biologie",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 180,
    kleur: "#16a34a",
    niveaus: ["VWO"],
    profielen: ["NG","NT"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "biologie",
    syllabus: ["Cellen & celdelingen","Genetica & erfelijkheid","Evolutie & natuurlijke selectie","Stofwisseling & fotosynthese","Zenuwstelsel & hormonen","Ecologie & ecosystemen","Afweer & immuniteit"]
  },
  {
    id: "frans-vwo",
    naam: "Frans",
    examDatum: "2026-05-26", tijd: "13:30", datum: "26 mei", examDuur: 150,
    kleur: "#ec4899",
    niveaus: ["VWO"],
    profielen: ["CM","EM"],
    hulpmiddelen: ["WBK-FR-NL"],
    alleExamensSlug: "frans",
    syllabus: ["Leesvaardigheid (B2)","Luistervaardigheid","Tekstbegrip & analyse","Woordenschat","Signaalwoorden Frans"]
  },
  {
    id: "wiskunde-d-vwo",
    naam: "Wiskunde D",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 180,
    kleur: "#065f46",
    niveaus: ["VWO"],
    profielen: ["NT"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-d",
    syllabus: ["Lineaire algebra","Differentiaalvergelijkingen","Numerieke methoden","Graaftheorie","Logica & bewijzen"]
  },
  {
    id: "informatica-vwo",
    naam: "Informatica",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 180,
    kleur: "#6366f1",
    niveaus: ["VWO"],
    profielen: ["NT"],
    hulpmiddelen: ["GR"],
    alleExamensSlug: "informatica",
    syllabus: ["Algoritmisch denken","Datastructuren","Databases & SQL","Netwerken & protocollen","Computationeel denken","Privacy & beveiliging"]
  },

  // ── HAVO ──────────────────────────────────────────────────────────────────
  {
    id: "filosofie-havo",
    naam: "Filosofie",
    examDatum: "2026-05-08", tijd: "09:00", datum: "8 mei", examDuur: 180,
    kleur: "#a78bfa",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "filosofie",
    syllabus: ["Kennisleer (basis)","Ethiek & moraalfilosofie","Politieke filosofie","Argumentatieleer","Filosofische stromingen (HAVO)"]
  },
  {
    id: "nederlands-havo",
    naam: "Nederlands",
    examDatum: "2026-05-08", tijd: "13:30", datum: "8 mei", examDuur: 180,
    kleur: "#06b6d4",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO","NG_HAVO","NT_HAVO"],
    verplicht: true,
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "nederlands",
    syllabus: ["Leesvaardigheid","Argumentatiestructuren herkennen","Drogredenen herkennen","Samenvatten","Tekstdoelen bepalen","Nuancering & modaliteit herkennen"]
  },
  {
    id: "economie-havo",
    naam: "Economie",
    examDatum: "2026-05-11", tijd: "13:30", datum: "11 mei", examDuur: 180,
    kleur: "#f97316",
    niveaus: ["HAVO"],
    profielen: ["EM_HAVO","CM_HAVO"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "economie",
    syllabus: ["Vraag & aanbod","Marktvormen","Overheidsbeleid","Conjunctuur & werkloosheid","Internationale handel","Geld & inflatie"]
  },
  {
    id: "geschiedenis-havo",
    naam: "Geschiedenis",
    examDatum: "2026-05-12", tijd: "09:00", datum: "12 mei", examDuur: 180,
    kleur: "#7c3aed",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "geschiedenis",
    syllabus: ["Kenmerkende Aspecten (vereenvoudigd)","Context: Industrialisatie","Context: Wereldoorlogen","Context: Dekolonisatie","Historisch redeneren HAVO-niveau"]
  },
  {
    id: "scheikunde-havo",
    naam: "Scheikunde",
    examDatum: "2026-05-12", tijd: "13:30", datum: "12 mei", examDuur: 180,
    kleur: "#d97706",
    niveaus: ["HAVO"],
    profielen: ["NG_HAVO","NT_HAVO"],
    hulpmiddelen: ["Binas","GR"],
    alleExamensSlug: "scheikunde",
    syllabus: ["Atoombouw & bindingen","Reactievergelijkingen","Zuren & basen","Organische chemie (basis)","Reactiekinetiek (basis)"]
  },
  {
    id: "frans-havo",
    naam: "Frans",
    examDatum: "2026-05-13", tijd: "13:30", datum: "13 mei", examDuur: 150,
    kleur: "#ec4899",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO"],
    hulpmiddelen: ["WBK-FR-NL"],
    alleExamensSlug: "frans",
    syllabus: ["Leesvaardigheid (B1/B2)","Luistervaardigheid","Tekstbegrip","Basiswoordenschat Frans","Signaalwoorden Frans"]
  },
  {
    id: "engels-havo",
    naam: "Engels",
    examDatum: "2026-05-18", tijd: "13:30", datum: "18 mei", examDuur: 150,
    kleur: "#3b82f6",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO","NG_HAVO","NT_HAVO"],
    verplicht: true,
    hulpmiddelen: ["WBK-EN-NL"],
    alleExamensSlug: "engels",
    syllabus: ["Reading comprehension (B2)","Gap-fill vragen","Tone & attitude herkennen","Core vocabulary","Signaalwoorden: Contrast & Addition"]
  },
  {
    id: "wiskunde-a-havo",
    naam: "Wiskunde A",
    examDatum: "2026-05-19", tijd: "13:30", datum: "19 mei", examDuur: 180,
    kleur: "#10b981",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO","NG_HAVO"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-a",
    syllabus: ["Verbanden & grafieken","Exponentiële functies","Statistiek & kansrekening","Differentiëren (basis)","Financiële rekenkunde"]
  },
  {
    id: "wiskunde-b-havo",
    naam: "Wiskunde B",
    examDatum: "2026-05-19", tijd: "13:30", datum: "19 mei", examDuur: 180,
    kleur: "#047857",
    niveaus: ["HAVO"],
    profielen: ["NG_HAVO","NT_HAVO"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "wiskunde-b",
    syllabus: ["Goniometrie","Differentiëren & integreren","Vectoren (2D)","Meetkunde","Rijen & reeksen (basis)"]
  },
  {
    id: "duits-havo",
    naam: "Duits",
    examDatum: "2026-05-20", tijd: "09:00", datum: "20 mei", examDuur: 150,
    kleur: "#f43f5e",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO"],
    hulpmiddelen: ["WBK-DU-NL"],
    alleExamensSlug: "duits",
    syllabus: ["Leesvaardigheid (B1/B2)","Tekstbegrip","Woordenschat","Signaalwoorden"]
  },
  {
    id: "biologie-havo",
    naam: "Biologie",
    examDatum: "2026-05-20", tijd: "13:30", datum: "20 mei", examDuur: 180,
    kleur: "#16a34a",
    niveaus: ["HAVO"],
    profielen: ["NG_HAVO","NT_HAVO"],
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "biologie",
    syllabus: ["Cellen & erfelijkheid","Evolutie","Stofwisseling","Ecologie","Voortplanting & ontwikkeling"]
  },
  {
    id: "aardrijkskunde-havo",
    naam: "Aardrijkskunde",
    examDatum: "2026-05-21", tijd: "13:30", datum: "21 mei", examDuur: 180,
    kleur: "#059669",
    niveaus: ["HAVO"],
    profielen: ["CM_HAVO","EM_HAVO","NG_HAVO"],
    hulpmiddelen: ["Atlas"],
    alleExamensSlug: "aardrijkskunde",
    syllabus: ["Bevolking & migratie","Stedelijke ontwikkeling","Klimaatzones","Economische ontwikkeling","Globalisering (basis)"]
  },
  {
    id: "bedrijfseconomie-havo",
    naam: "Bedrijfseconomie",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 180,
    kleur: "#f59e0b",
    niveaus: ["HAVO"],
    profielen: ["EM_HAVO"],
    hulpmiddelen: ["GR","WBK-NL"],
    alleExamensSlug: "bedrijfseconomie",
    syllabus: ["Rechtsvormen","Break-even analyse","Marketingmix","Kengetallen (basis)","Investeringsberekeningen","Begroting & jaarrekening"]
  },
  {
    id: "natuurkunde-havo",
    naam: "Natuurkunde",
    examDatum: "2026-05-26", tijd: "13:30", datum: "26 mei", examDuur: 180,
    kleur: "#2563eb",
    niveaus: ["HAVO"],
    profielen: ["NG_HAVO","NT_HAVO"],
    hulpmiddelen: ["Binas","GR"],
    alleExamensSlug: "natuurkunde",
    syllabus: ["Krachten & beweging","Energie","Elektriciteit","Golven & geluid","Licht & optica"]
  },
  {
    id: "informatica-havo",
    naam: "Informatica",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 180,
    kleur: "#6366f1",
    niveaus: ["HAVO"],
    profielen: ["NT_HAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "informatica",
    syllabus: ["Algoritmisch denken","Programmeren (basis)","Databases","Netwerken"]
  },

  // ── MAVO ──────────────────────────────────────────────────────────────────
  {
    id: "wiskunde-mavo",
    naam: "Wiskunde",
    examDatum: "2026-05-08", tijd: "13:30", datum: "8 mei", examDuur: 120,
    kleur: "#10b981",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: ["GR"],
    alleExamensSlug: "wiskunde",
    syllabus: ["Getallen & bewerkingen","Verbanden & grafieken","Meetkunde","Statistiek & kansrekening","Algebraïsche vaardigheden (basis)"]
  },
  {
    id: "nederlands-mavo",
    naam: "Nederlands",
    examDatum: "2026-05-11", tijd: "13:30", datum: "11 mei", examDuur: 120,
    kleur: "#06b6d4",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    verplicht: true,
    hulpmiddelen: ["WBK-NL"],
    alleExamensSlug: "nederlands",
    syllabus: ["Leesvaardigheid","Argumentatiestructuren herkennen","Drogredenen herkennen","Samenvatten","Tekstdoelen bepalen","Nuancering & modaliteit herkennen"]
  },
  {
    id: "aardrijkskunde-mavo",
    naam: "Aardrijkskunde",
    examDatum: "2026-05-12", tijd: "09:00", datum: "12 mei", examDuur: 120,
    kleur: "#059669",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: ["Atlas"],
    alleExamensSlug: "aardrijkskunde",
    syllabus: ["Klimaat & landschappen","Bevolking","Armoede & ontwikkeling","Nederland & Europa"]
  },
  {
    id: "frans-mavo",
    naam: "Frans",
    examDatum: "2026-05-12", tijd: "13:30", datum: "12 mei", examDuur: 120,
    kleur: "#ec4899",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: ["WBK-FR-NL"],
    alleExamensSlug: "frans",
    syllabus: ["Leesvaardigheid (A2/B1)","Luistervaardigheid","Basiswoordenschat Frans"]
  },
  {
    id: "economie-mavo",
    naam: "Economie",
    examDatum: "2026-05-13", tijd: "13:30", datum: "13 mei", examDuur: 120,
    kleur: "#f97316",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "economie",
    syllabus: ["Vraag & aanbod (basis)","Inkomen & arbeid","Overheid & belasting","Sparen & lenen"]
  },
  {
    id: "duits-mavo",
    naam: "Duits",
    examDatum: "2026-05-18", tijd: "09:00", datum: "18 mei", examDuur: 120,
    kleur: "#f43f5e",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: ["WBK-DU-NL"],
    alleExamensSlug: "duits",
    syllabus: ["Leesvaardigheid (A2/B1)","Luistervaardigheid","Basiswoordenschat Duits"]
  },
  {
    id: "nask1-mavo",
    naam: "NaSk 1 (Natuurkunde)",
    examDatum: "2026-05-18", tijd: "13:30", datum: "18 mei", examDuur: 120,
    kleur: "#2563eb",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "nask-1",
    syllabus: ["Krachten & beweging (basis)","Elektriciteit (basis)","Licht & geluid","Energie & warmte"]
  },
  {
    id: "engels-mavo",
    naam: "Engels",
    examDatum: "2026-05-19", tijd: "13:30", datum: "19 mei", examDuur: 120,
    kleur: "#3b82f6",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    verplicht: true,
    hulpmiddelen: ["WBK-EN-NL"],
    alleExamensSlug: "engels",
    syllabus: ["Reading comprehension (B1)","Gap-fill vragen","Tone & attitude herkennen","Core vocabulary","Signaalwoorden: Contrast & Addition"]
  },
  {
    id: "biologie-mavo",
    naam: "Biologie",
    examDatum: "2026-05-20", tijd: "13:30", datum: "20 mei", examDuur: 120,
    kleur: "#16a34a",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "biologie",
    syllabus: ["Cellen & lichaamsprocessen","Erfelijkheid (basis)","Evolutie (basis)","Ecologie"]
  },
  {
    id: "nask2-mavo",
    naam: "NaSk 2 (Scheikunde)",
    examDatum: "2026-05-21", tijd: "13:30", datum: "21 mei", examDuur: 120,
    kleur: "#d97706",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "nask-2",
    syllabus: ["Stoffen & eigenschappen","Chemische reacties (basis)","Zuren & basen (basis)","Materialen"]
  },
  {
    id: "geschiedenis-mavo",
    naam: "Geschiedenis",
    examDatum: "2026-05-22", tijd: "13:30", datum: "22 mei", examDuur: 120,
    kleur: "#7c3aed",
    niveaus: ["MAVO"],
    profielen: ["MAVO"],
    hulpmiddelen: [],
    alleExamensSlug: "geschiedenis",
    syllabus: ["Industrialisatie","Eerste Wereldoorlog","Tweede Wereldoorlog","Dekolonisatie","Nederland na 1945"]
  },
];

export const VAKKEN = ALLE_VAKKEN;

export function getVakkenVoorProfiel(niveau: string, profiel: string): Vak[] {
  return ALLE_VAKKEN.filter(v =>
    v.niveaus.includes(niveau as never) &&
    v.profielen.includes(profiel as never)
  );
}

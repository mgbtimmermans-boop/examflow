export type WizardModus = "open" | "reken";
export type VakType = "taal" | "zaak" | "exact";

export interface ExamenVraag {
  id: string;
  vakId: string;
  syllabusItem: string;
  modus: WizardModus;
  vraag: string;
  bron?: string;
  maxPunten: number;
  correctieVoorschrift: NakijkCriterium[];
  rekenSjabloon?: RekenSjabloonType;
  jaar?: number;
}

export interface NakijkCriterium {
  id: string;
  omschrijving: string;
  punten: number;
  verplicht: boolean;
  checkVraag: string;
}

export type RekenSjabloonType =
  | "hypothesetoets"
  | "kansrekening-binomiaal"
  | "differentieren"
  | "exponentieel-verband"
  | "nash-evenwicht"
  | "prijselasticiteit"
  | "conjunctuurbeleid"
  | "break-even"
  | "ncw"
  | "liquiditeitsratio"
  | "krachtenberekening"
  | "wet-van-ohm"
  | "stoichiometrie"
  | "ph-berekening"
  | "generiek";

export interface RekenStap {
  id: string;
  label: string;
  placeholder: string;
  hint?: string;
  waarde: string;
  eenheid?: boolean;
}

export interface OpenAntwoord {
  kern: string;
  verbinding: string;
  context: string;
}

export interface RekenAntwoord {
  stappen: Record<string, string>;
  eenheden: Record<string, string>;
}

export interface ZelfBeoordeling {
  criteriumId: string;
  antwoord: boolean;
}

export interface WizardResultaat {
  vraagId: string;
  vakId: string;
  syllabusItem: string;
  behaaldePunten: number;
  maxPunten: number;
  zelfBeoordeling: ZelfBeoordeling[];
  openAntwoord?: OpenAntwoord;
  rekenAntwoord?: RekenAntwoord;
  datum: string;
}

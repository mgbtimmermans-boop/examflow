export interface Leerdoel {
  id: string;
  omschrijving: string;
  begrippen?: string[];
  formules?: string[];
}

export interface Subdomein {
  id: string;
  /** New-style label (e.g. "M1 — Eiwitsynthese"). Use naam ?? titel for display. */
  naam?: string;
  /** Legacy: short code badge (e.g. "B1") */
  code?: string;
  /** Legacy: display title */
  titel?: string;
  leerdoelen: Leerdoel[];
}

export interface Domein {
  id: string;
  /** New-style full name (e.g. "Domein M: Molecuul- en celniveau"). Use naam ?? titel for display. */
  naam?: string;
  /** Legacy: short code badge (e.g. "B") */
  code?: string;
  /** Legacy: display title */
  titel?: string;
  /** Whether this domain appears on the CE */
  ceRelevant?: boolean;
  subdomeinen: Subdomein[];
}

export interface FormuleItem {
  naam: string;
  formule: string;
  uitleg?: string;
}

export interface FormuleBlad {
  vakId: string;
  secties: { titel: string; formules: FormuleItem[] }[];
}

export interface VakSyllabus {
  vakId: string;
  niveau: string;
  domeinen: Domein[];
  formuleblad?: FormuleBlad;
}

export interface SyllabusVoortgang {
  [leerdoelId: string]: boolean;
}

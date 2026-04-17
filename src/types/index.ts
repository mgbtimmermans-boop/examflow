import { Timestamp } from "firebase/firestore";

export type Onderwijsniveau = "VWO" | "HAVO" | "MAVO";
export type Profiel = "CM" | "EM" | "NG" | "NT" | "EM_HAVO" | "CM_HAVO" | "NG_HAVO" | "NT_HAVO" | "MAVO";

export interface Vak {
  id: string;
  naam: string;
  examDatum?: string;
  tijd?: string;
  datum?: string; // display string e.g. "8 mei"
  examDuur: number; // duur in minuten
  kleur: string;
  syllabus: string[];
  hulpmiddelen: string[];
  alleExamensSlug: string;
  isSchoolexamen?: boolean;
  profielen: Profiel[];
  verplicht?: boolean;
  niveaus: Onderwijsniveau[];
}

export interface PlanningVoorkeuren {
  voorkeurTijden: string[];  // ["ochtend", "middag", "avond"]
  standaardDuur: number;     // minutes, e.g. 60
  pauzeMinuten: number;      // e.g. 15
  dagEindTijd: string;       // e.g. "18:00"
}

export interface GebruikerInstellingen {
  niveau: Onderwijsniveau;
  profiel: Profiel;
  gekozenVakken: string[];
  hasCompletedOnboarding: boolean;
  hasSeenTour?: boolean;
  hasSeenSeCijferPopup?: boolean;
  hasFilledSeCijfers?: boolean;
  seCijfers?: Record<string, number>;
  streefCijfers?: Record<string, number>;
  planning?: PlanningVoorkeuren;
  displayName?: string;
  bedtijd?: string; // e.g. "23:00"
  wektijd?: string; // e.g. "07:00"
}

export interface VakData {
  checks: Record<number, boolean>;
  notes: string;
  confidenceScore: number;
  seGrade: string;
  lastUpdated: Timestamp | null;
}

// Keep backward compat alias
export type VakUserData = VakData;

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface OefenExamen {
  id: string;
  datum: string; // YYYY-MM-DD
  cijfer: number; // 1-10
  jaar: number; // examenjaar bijv. 2023
  tijdvak: "I" | "II";
  zwakeDomeinen: string[]; // domein ids
  notities?: string;
  zwakPuntOmschrijving?: string;
  vakId: string;
  aangemaakt: string;
}

export interface TrackerData {
  oefenExamens: OefenExamen[];
  streefCijfer: number;
}

export interface HerhaalItem {
  id?: string;                         // Firestore document ID (populated on load)
  leerdoelId: string;
  vakId: string;
  vakNaam: string;
  leerdoelOmschrijving: string;        // eerste 80 tekens
  afgevinktOp: string;                 // ISO datum string YYYY-MM-DD
  volgendeHerhaling: string;           // ISO datum string YYYY-MM-DD
  intervalDagen: number;               // 3, 7, of 14
  status: "gepland" | "klaar";
  pogingen: {
    datum: string;
    beoordeling: "ja" | "twijfel" | "nee";
  }[];
}

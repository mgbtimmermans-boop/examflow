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

export interface GebruikerInstellingen {
  niveau: Onderwijsniveau;
  profiel: Profiel;
  gekozenVakken: string[];
  hasCompletedOnboarding: boolean;
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

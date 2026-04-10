export interface StudieSessie {
  id: string;
  vakId: string;               // koppeling aan Vak
  syllabusItem: string | null; // null = eigen onderwerp
  eigenTitel: string | null;   // eigen onderwerp als syllabusItem null is
  doel?: string | null;        // studiedoel voor deze sessie (max 100 chars)
  datum: string;               // "2026-05-05"
  startTijd: string;           // "14:00"
  duurMinuten: number;         // 30, 45, 60, 90, 120
  notitie: string;
  voltooid: boolean;
  aangemaaktOp: string;        // ISO timestamp
}

export interface PlanningBlok {
  id: string;
  vakId: string;
  kleur: string;
  titel: string;
  datum: string;
  startTijd: string;
  eindTijd: string;
  duurMinuten: number;
  doel: string;
  notitie: string;
  prioriteit: 1 | 2 | 3;
  voltooid: boolean;
  werkelijkeDuur?: number;
}

export interface DagPlanning {
  datum: string;
  eindTijd: string;
  blokken: PlanningBlok[];
  pauzeMinuten: number;
}

export interface AgendaStats {
  vakId: string;
  totaalIngeplandMinuten: number;
  totaalSessies: number;
  voltooideItems: string[];     // syllabus items voltooid via agenda
}

export type AgendaView = "week" | "dag";

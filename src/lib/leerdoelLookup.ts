import { BIOLOGIE_VWO_SYLLABUS } from "@/data/syllabi/biologie-vwo"
import { BIOLOGIE_HAVO_SYLLABUS } from "@/data/syllabi/biologie-havo"
import { SCHEIKUNDE_VWO_SYLLABUS } from "@/data/syllabi/scheikunde-vwo"
import { SCHEIKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/scheikunde-havo"
import { NATUURKUNDE_VWO_SYLLABUS } from "@/data/syllabi/natuurkunde-vwo"
import { NATUURKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/natuurkunde-havo"
import { ECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/economie-vwo"
import { ECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/economie-havo"
import { BEDRIJFSECONOMIE_VWO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-vwo"
import { BEDRIJFSECONOMIE_HAVO_SYLLABUS } from "@/data/syllabi/bedrijfseconomie-havo"
import { WISKUNDE_A_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-a-vwo"
import { WISKUNDE_A_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-a-havo"
import { WISKUNDE_B_VWO_SYLLABUS } from "@/data/syllabi/wiskunde-b-vwo"
import { WISKUNDE_B_HAVO_SYLLABUS } from "@/data/syllabi/wiskunde-b-havo"
import { GESCHIEDENIS_VWO_SYLLABUS } from "@/data/syllabi/geschiedenis-vwo"
import { GESCHIEDENIS_HAVO_SYLLABUS } from "@/data/syllabi/geschiedenis-havo"
import { AARDRIJKSKUNDE_VWO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-vwo"
import { AARDRIJKSKUNDE_HAVO_SYLLABUS } from "@/data/syllabi/aardrijkskunde-havo"
import { NEDERLANDS_VWO_SYLLABUS } from "@/data/syllabi/nederlands-vwo"
import { NEDERLANDS_HAVO_SYLLABUS } from "@/data/syllabi/nederlands-havo"
import { ENGELS_VWO_SYLLABUS } from "@/data/syllabi/engels-vwo"
import { ENGELS_HAVO_SYLLABUS } from "@/data/syllabi/engels-havo"
import { DUITS_VWO_SYLLABUS } from "@/data/syllabi/duits-vwo"
import { DUITS_HAVO_SYLLABUS } from "@/data/syllabi/duits-havo"
import { FRANS_VWO_SYLLABUS } from "@/data/syllabi/frans-vwo"
import { FRANS_HAVO_SYLLABUS } from "@/data/syllabi/frans-havo"
import { FILOSOFIE_VWO_SYLLABUS } from "@/data/syllabi/filosofie-vwo"
import { FILOSOFIE_HAVO_SYLLABUS } from "@/data/syllabi/filosofie-havo"
import { LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/latijnse-taal-en-cultuur-vwo"
import { GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "@/data/syllabi/griekse-taal-en-cultuur-vwo"
import { VakSyllabus, Leerdoel } from "@/types/syllabus"

const alleSyllabi: VakSyllabus[] = [
  BIOLOGIE_VWO_SYLLABUS, BIOLOGIE_HAVO_SYLLABUS,
  SCHEIKUNDE_VWO_SYLLABUS, SCHEIKUNDE_HAVO_SYLLABUS,
  NATUURKUNDE_VWO_SYLLABUS, NATUURKUNDE_HAVO_SYLLABUS,
  ECONOMIE_VWO_SYLLABUS, ECONOMIE_HAVO_SYLLABUS,
  BEDRIJFSECONOMIE_VWO_SYLLABUS, BEDRIJFSECONOMIE_HAVO_SYLLABUS,
  WISKUNDE_A_VWO_SYLLABUS, WISKUNDE_A_HAVO_SYLLABUS,
  WISKUNDE_B_VWO_SYLLABUS, WISKUNDE_B_HAVO_SYLLABUS,
  GESCHIEDENIS_VWO_SYLLABUS, GESCHIEDENIS_HAVO_SYLLABUS,
  AARDRIJKSKUNDE_VWO_SYLLABUS, AARDRIJKSKUNDE_HAVO_SYLLABUS,
  NEDERLANDS_VWO_SYLLABUS, NEDERLANDS_HAVO_SYLLABUS,
  ENGELS_VWO_SYLLABUS, ENGELS_HAVO_SYLLABUS,
  DUITS_VWO_SYLLABUS, DUITS_HAVO_SYLLABUS,
  FRANS_VWO_SYLLABUS, FRANS_HAVO_SYLLABUS,
  FILOSOFIE_VWO_SYLLABUS, FILOSOFIE_HAVO_SYLLABUS,
  LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS, GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
]

// Bouw een lookup map: leerdoelId → Leerdoel object
const leerdoelMap = new Map<string, Leerdoel>()

for (const syllabus of alleSyllabi) {
  for (const domein of syllabus.domeinen) {
    for (const subdomein of domein.subdomeinen) {
      for (const leerdoel of subdomein.leerdoelen) {
        leerdoelMap.set(leerdoel.id, leerdoel)
        // ook subleerdoelen als die bestaan
        if (leerdoel.subleerdoelen) {
          for (const sub of leerdoel.subleerdoelen) {
            leerdoelMap.set(sub.id, sub)
          }
        }
      }
    }
  }
}

export function getLeerdoel(id: string): Leerdoel | undefined {
  return leerdoelMap.get(id)
}

export function getBegrippenVanLeerdoel(id: string): string[] {
  const leerdoel = leerdoelMap.get(id)
  return leerdoel?.begrippen ?? []
}

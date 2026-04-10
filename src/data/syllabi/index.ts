import { VakSyllabus } from "@/types/syllabus";
import { ECONOMIE_VWO_SYLLABUS } from "./economie-vwo";
import { ECONOMIE_HAVO_SYLLABUS } from "./economie-havo";
import { WISKUNDE_A_VWO_SYLLABUS } from "./wiskunde-a-vwo";
import { WISKUNDE_A_HAVO_SYLLABUS } from "./wiskunde-a-havo";
import { WISKUNDE_B_HAVO_SYLLABUS } from "./wiskunde-b-havo";
import { BIOLOGIE_HAVO_SYLLABUS } from "./biologie-havo";
import { SCHEIKUNDE_HAVO_SYLLABUS } from "./scheikunde-havo";
import { BEDRIJFSECONOMIE_HAVO_SYLLABUS } from "./bedrijfseconomie-havo";
import { GESCHIEDENIS_HAVO_SYLLABUS } from "./geschiedenis-havo";
import { NEDERLANDS_HAVO_SYLLABUS } from "./nederlands-havo";
import { AARDRIJKSKUNDE_HAVO_SYLLABUS } from "./aardrijkskunde-havo";
import { NATUURKUNDE_HAVO_SYLLABUS } from "./natuurkunde-havo";
import { FILOSOFIE_HAVO_SYLLABUS } from "./filosofie-havo";
import { ENGELS_HAVO_SYLLABUS } from "./engels-havo";
import { DUITS_HAVO_SYLLABUS } from "./duits-havo";
import { FRANS_HAVO_SYLLABUS } from "./frans-havo";
import { NEDERLANDS_VWO_SYLLABUS } from "./nederlands-vwo";
import { BIOLOGIE_VWO_SYLLABUS } from "./biologie-vwo";
import { SCHEIKUNDE_VWO_SYLLABUS } from "./scheikunde-vwo";
import { BEDRIJFSECONOMIE_VWO_SYLLABUS } from "./bedrijfseconomie-vwo";
import { GESCHIEDENIS_VWO_SYLLABUS } from "./geschiedenis-vwo";
import { WISKUNDE_B_VWO_SYLLABUS } from "./wiskunde-b-vwo";
import { AARDRIJKSKUNDE_VWO_SYLLABUS } from "./aardrijkskunde-vwo";
import { NATUURKUNDE_VWO_SYLLABUS } from "./natuurkunde-vwo";
import { GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "./griekse-taal-en-cultuur-vwo";
import { LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS } from "./latijnse-taal-en-cultuur-vwo";
import { ENGELS_VWO_SYLLABUS } from "./engels-vwo";
import { DUITS_VWO_SYLLABUS } from "./duits-vwo";
import { FRANS_VWO_SYLLABUS } from "./frans-vwo";

export const SYLLABI: Record<string, VakSyllabus> = {
  "economie-vwo": ECONOMIE_VWO_SYLLABUS,
  "economie-havo": ECONOMIE_HAVO_SYLLABUS,
  "wiskunde-a-vwo": WISKUNDE_A_VWO_SYLLABUS,
  "wiskunde-a-havo": WISKUNDE_A_HAVO_SYLLABUS,
  "wiskunde-b-havo": WISKUNDE_B_HAVO_SYLLABUS,
  "biologie-havo": BIOLOGIE_HAVO_SYLLABUS,
  "scheikunde-havo": SCHEIKUNDE_HAVO_SYLLABUS,
  "bedrijfseconomie-havo": BEDRIJFSECONOMIE_HAVO_SYLLABUS,
  "geschiedenis-havo": GESCHIEDENIS_HAVO_SYLLABUS,
  "nederlands-havo": NEDERLANDS_HAVO_SYLLABUS,
  "aardrijkskunde-havo": AARDRIJKSKUNDE_HAVO_SYLLABUS,
  "natuurkunde-havo": NATUURKUNDE_HAVO_SYLLABUS,
  "filosofie-havo": FILOSOFIE_HAVO_SYLLABUS,
  "engels-havo": ENGELS_HAVO_SYLLABUS,
  "duits-havo": DUITS_HAVO_SYLLABUS,
  "frans-havo": FRANS_HAVO_SYLLABUS,
  "nederlands-vwo": NEDERLANDS_VWO_SYLLABUS,
  "biologie-vwo": BIOLOGIE_VWO_SYLLABUS,
  "scheikunde-vwo": SCHEIKUNDE_VWO_SYLLABUS,
  "bedrijfseconomie-vwo": BEDRIJFSECONOMIE_VWO_SYLLABUS,
  "geschiedenis-vwo": GESCHIEDENIS_VWO_SYLLABUS,
  "wiskunde-b-vwo": WISKUNDE_B_VWO_SYLLABUS,
  "aardrijkskunde-vwo": AARDRIJKSKUNDE_VWO_SYLLABUS,
  "natuurkunde-vwo": NATUURKUNDE_VWO_SYLLABUS,
  "grieks-vwo": GRIEKSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "latijn-vwo": LATIJNSE_TAAL_EN_CULTUUR_VWO_SYLLABUS,
  "engels-vwo": ENGELS_VWO_SYLLABUS,
  "duits-vwo": DUITS_VWO_SYLLABUS,
  "frans-vwo": FRANS_VWO_SYLLABUS,
};

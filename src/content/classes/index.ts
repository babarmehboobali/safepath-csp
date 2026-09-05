import type { ClassPack } from "./types";
import { classFields as f01, items as i01 } from "./01-ptd";
import { classFields as f02, items as i02 } from "./02-hierarchy";
import { classFields as f03, items as i03 } from "./03-process-safety";
import { classFields as f04, items as i04 } from "./04-electrical";
import { classFields as f05, items as i05 } from "./05-loto";
import { classFields as f06, items as i06 } from "./06-falls";
import { classFields as f07, items as i07 } from "./07-excavation";
import { classFields as f08, items as i08 } from "./08-caught-struck";
import { classFields as f09, items as i09 } from "./09-confined-space";
import { classFields as f10, items as i10 } from "./10-water";
import { classFields as f11, items as i11 } from "./11-life-safety";
import { classFields as f12, items as i12 } from "./12-fleet";
import { classFields as f13, items as i13 } from "./13-pit-aerial";
import { classFields as f14, items as i14 } from "./14-cranes-rigging";
import { classFields as f15, items as i15 } from "./15-manual-drones";
import { classFields as f16, items as i16 } from "./16-tools-machines";
import { classFields as f17, items as i17 } from "./17-gap-analysis";
import { classFields as f18, items as i18 } from "./18-standards-to-plan";
import { classFields as f19, items as i19 } from "./19-culture";
import { classFields as f20, items as i20 } from "./20-investigation";
import { classFields as f21, items as i21 } from "./21-capa";
import { classFields as f22, items as i22 } from "./22-moc";
import { classFields as f23, items as i23 } from "./23-fta";
import { classFields as f24, items as i24 } from "./24-fmea";
import { classFields as f25, items as i25 } from "./25-safety-case";
import { classFields as f26, items as i26 } from "./26-leading-lagging";
import { classFields as f27, items as i27 } from "./27-iso-45001";
import { classFields as f28, items as i28 } from "./28-z10";
import { classFields as f29, items as i29 } from "./29-iso-14001";
import { classFields as f30, items as i30 } from "./30-iso-19011";
import { classFields as f31, items as i31 } from "./31-plans-policies";
import { classFields as f32, items as i32 } from "./32-retention-privacy";
import { classFields as f33, items as i33 } from "./33-budget-roi";
import { classFields as f34, items as i34 } from "./34-leadership";
import { classFields as f35, items as i35 } from "./35-raci";
import { classFields as f36, items as i36 } from "./36-descriptive-stats";
import { classFields as f37, items as i37 } from "./37-ci-probability";
import { classFields as f38, items as i38 } from "./38-pareto";
import { classFields as f39, items as i39 } from "./39-risk-process";
import { classFields as f40, items as i40 } from "./40-jha";
import { classFields as f41, items as i41 } from "./41-pha";
import { classFields as f42, items as i42 } from "./42-hierarchy-in-risk";
import { classFields as f43, items as i43 } from "./43-registers";
import { classFields as f44, items as i44 } from "./44-financial-four";
import { classFields as f45, items as i45 } from "./45-loss-prevention-vs-reduction";
import { classFields as f46, items as i46 } from "./46-monitoring";
import { classFields as f47, items as i47 } from "./47-erp-contents";
import { classFields as f48, items as i48 } from "./48-ics";
import { classFields as f49, items as i49 } from "./49-bcp";
import { classFields as f50, items as i50 } from "./50-fire-prevention";
import { classFields as f51, items as i51 } from "./51-fire-protection";
import { classFields as f52, items as i52 } from "./52-hazmat-transport-security";
import { classFields as f53, items as i53 } from "./53-workplace-violence";
import { classFields as f54, items as i54 } from "./54-drills";
import { classFields as f55, items as i55 } from "./55-p2-spills";
import { classFields as f56, items as i56 } from "./56-ghs-storage";
import { classFields as f57, items as i57 } from "./57-hazardous-waste";
import { classFields as f58, items as i58 } from "./58-universal-waste";
import { classFields as f59, items as i59 } from "./59-sustainability";
import { classFields as f60, items as i60 } from "./60-esg-air-asbestos";
import { classFields as f61, items as i61 } from "./61-arec";
import { classFields as f62, items as i62 } from "./62-sampling";
import { classFields as f63, items as i63 } from "./63-chemical-sds-silica";
import { classFields as f64, items as i64 } from "./64-noise";
import { classFields as f65, items as i65 } from "./65-radiation";
import { classFields as f66, items as i66 } from "./66-heat-cold-iaq";
import { classFields as f67, items as i67 } from "./67-bio";
import { classFields as f68, items as i68 } from "./68-toxicology";
import { classFields as f69, items as i69 } from "./69-exposure-plans";
import { classFields as f70, items as i70 } from "./70-ergonomics";
import { classFields as f71, items as i71 } from "./71-containment-calc";
import { classFields as f72, items as i72 } from "./72-physics-formula-gym";
import { classFields as f73, items as i73 } from "./73-needs-assessment";
import { classFields as f74, items as i74 } from "./74-adult-learning";
import { classFields as f75, items as i75 } from "./75-delivery-incl-ai";
import { classFields as f76, items as i76 } from "./76-improve-training";
import { classFields as f77, items as i77 } from "./77-effectiveness";
import { classFields as f78, items as i78 } from "./78-competency";
import { classFields as f79, items as i79 } from "./79-robotics-deep";
import { classFields as f80, items as i80 } from "./80-combustible-dust";
import { classFields as f81, items as i81 } from "./81-ventilation";
import { classFields as f82, items as i82 } from "./82-hot-work-molten-pressure";
import { classFields as f83, items as i83 } from "./83-osha-niosh-noise";
import { classFields as f84, items as i84 } from "./84-pel-tlv-rel";
import { classFields as f85, items as i85 } from "./85-1904-clocks";
import { classFields as f86, items as i86 } from "./86-tool-choice";
import { classFields as f87, items as i87 } from "./87-psm-14";
import { classFields as f88, items as i88 } from "./88-cyber-in-erp";
import { classFields as f89, items as i89 } from "./89-z490-1";
import { classFields as f90, items as i90 } from "./90-exam-attack-calculator";
import { classFields as f91, items as i91 } from "./91-system-reliability";
import { classFields as f92, items as i92 } from "./92-ih-sampling-stats";

import { classFields as f93, items as i93 } from "./93-arc-flash-engineering";
import { classFields as f94, items as i94 } from "./94-process-safety-engineering";
import { classFields as f95, items as i95 } from "./95-fire-protection-engineering";
import { classFields as f96, items as i96 } from "./96-ethics-professional-judgment";
import { classFields as f97, items as i97 } from "./97-benchmarking-performance";
import { classFields as f98, items as i98 } from "./98-cost-economics";
import { classFields as f99, items as i99 } from "./99-public-health-epidemiology";
import { classFields as f100, items as i100 } from "./100-training-program-design";

import { classFields as f101, items as i101 } from "./101-ventilation-engineering";
import { classFields as f102, items as i102 } from "./102-life-safety-occupant-egress";
import { classFields as f103, items as i103 } from "./103-hazen-williams-fire-pump";
import { classFields as f104, items as i104 } from "./104-standby-availability";
import { classFields as f105, items as i105 } from "./105-mort-barrier-analysis";
import { classFields as f106, items as i106 } from "./106-trir-dart-emr";
import { classFields as f107, items as i107 } from "./107-spcc-freeboard";
import { classFields as f108, items as i108 } from "./108-le-chatelier-lfl";
import { classFields as f109, items as i109 } from "./109-niosh-rnle";
import { classFields as f110, items as i110 } from "./110-machine-guard-stop-distance";
import { classFields as f111, items as i111 } from "./111-swppp-epcra";
import { classFields as f112, items as i112 } from "./112-vpp-z10-iso45001";
import { classFields as f113, items as i113 } from "./113-eta-boolean";
import { classFields as f114, items as i114 } from "./114-pit-stability-moment";
import { classFields as f115, items as i115 } from "./115-iso22301-bia-bcp";
import { classFields as f116, items as i116 } from "./116-hierarchy-discrimination-lab";
import { classFields as f117, items as i117 } from "./117-loto-verification-group-shift";
import { classFields as f118, items as i118 } from "./118-psm-moc-pssr-integration";
import { classFields as f119, items as i119 } from "./119-investigation-mort-barrier-vs-5why";
import { classFields as f120, items as i120 } from "./120-fta-eta-reliability-decision-lab";
import { classFields as f121, items as i121 } from "./121-financial-four-strategies-scenarios";
import { classFields as f122, items as i122 } from "./122-fire-hydraulics-mixture-lfl-lab";
import { classFields as f123, items as i123 } from "./123-rcra-spcc-epcra-triage";
import { classFields as f124, items as i124 } from "./124-ventilation-capture-dilution-vp-lab";
import { classFields as f125, items as i125 } from "./125-noise-dose-osha5-niosh3-lab";
import { classFields as f126, items as i126 } from "./126-niosh-rnle-full-multiplier-walkthrough";
import { classFields as f127, items as i127 } from "./127-adult-learning-kirkpatrick-evaluation";
import { classFields as f128, items as i128 } from "./128-z490-1-training-program-design-drill";
import { classFields as f129, items as i129 } from "./129-ethics-professional-judgment-scenarios";
import { classFields as f130, items as i130 } from "./130-exam-day-calculator-pacing-attack-lab";
import { classFields as f131, items as i131 } from "./131-emerging-tech";
import { classFields as f132, items as i132 } from "./132-epi-public-health";
export const CLASS_PACKS: Record<number, ClassPack> = {
  1: { classFields: f01, items: i01 },
  2: { classFields: f02, items: i02 },
  3: { classFields: f03, items: i03 },
  4: { classFields: f04, items: i04 },
  5: { classFields: f05, items: i05 },
  6: { classFields: f06, items: i06 },
  7: { classFields: f07, items: i07 },
  8: { classFields: f08, items: i08 },
  9: { classFields: f09, items: i09 },
  10: { classFields: f10, items: i10 },
  11: { classFields: f11, items: i11 },
  12: { classFields: f12, items: i12 },
  13: { classFields: f13, items: i13 },
  14: { classFields: f14, items: i14 },
  15: { classFields: f15, items: i15 },
  16: { classFields: f16, items: i16 },
  17: { classFields: f17, items: i17 },
  18: { classFields: f18, items: i18 },
  19: { classFields: f19, items: i19 },
  20: { classFields: f20, items: i20 },
  21: { classFields: f21, items: i21 },
  22: { classFields: f22, items: i22 },
  23: { classFields: f23, items: i23 },
  24: { classFields: f24, items: i24 },
  25: { classFields: f25, items: i25 },
  26: { classFields: f26, items: i26 },
  27: { classFields: f27, items: i27 },
  28: { classFields: f28, items: i28 },
  29: { classFields: f29, items: i29 },
  30: { classFields: f30, items: i30 },
  31: { classFields: f31, items: i31 },
  32: { classFields: f32, items: i32 },
  33: { classFields: f33, items: i33 },
  34: { classFields: f34, items: i34 },
  35: { classFields: f35, items: i35 },
  36: { classFields: f36, items: i36 },
  37: { classFields: f37, items: i37 },
  38: { classFields: f38, items: i38 },
  39: { classFields: f39, items: i39 },
  40: { classFields: f40, items: i40 },
  41: { classFields: f41, items: i41 },
  42: { classFields: f42, items: i42 },
  43: { classFields: f43, items: i43 },
  44: { classFields: f44, items: i44 },
  45: { classFields: f45, items: i45 },
  46: { classFields: f46, items: i46 },
  47: { classFields: f47, items: i47 },
  48: { classFields: f48, items: i48 },
  49: { classFields: f49, items: i49 },
  50: { classFields: f50, items: i50 },
  51: { classFields: f51, items: i51 },
  52: { classFields: f52, items: i52 },
  53: { classFields: f53, items: i53 },
  54: { classFields: f54, items: i54 },
  55: { classFields: f55, items: i55 },
  56: { classFields: f56, items: i56 },
  57: { classFields: f57, items: i57 },
  58: { classFields: f58, items: i58 },
  59: { classFields: f59, items: i59 },
  60: { classFields: f60, items: i60 },
  61: { classFields: f61, items: i61 },
  62: { classFields: f62, items: i62 },
  63: { classFields: f63, items: i63 },
  64: { classFields: f64, items: i64 },
  65: { classFields: f65, items: i65 },
  66: { classFields: f66, items: i66 },
  67: { classFields: f67, items: i67 },
  68: { classFields: f68, items: i68 },
  69: { classFields: f69, items: i69 },
  70: { classFields: f70, items: i70 },
  71: { classFields: f71, items: i71 },
  72: { classFields: f72, items: i72 },
  73: { classFields: f73, items: i73 },
  74: { classFields: f74, items: i74 },
  75: { classFields: f75, items: i75 },
  76: { classFields: f76, items: i76 },
  77: { classFields: f77, items: i77 },
  78: { classFields: f78, items: i78 },
  79: { classFields: f79, items: i79 },
  80: { classFields: f80, items: i80 },
  81: { classFields: f81, items: i81 },
  82: { classFields: f82, items: i82 },
  83: { classFields: f83, items: i83 },
  84: { classFields: f84, items: i84 },
  85: { classFields: f85, items: i85 },
  86: { classFields: f86, items: i86 },
  87: { classFields: f87, items: i87 },
  88: { classFields: f88, items: i88 },
  89: { classFields: f89, items: i89 },
  90: { classFields: f90, items: i90 },
  91: { classFields: f91, items: i91 },
  92: { classFields: f92, items: i92 },
  93: { classFields: f93, items: i93 },
  94: { classFields: f94, items: i94 },
  95: { classFields: f95, items: i95 },
  96: { classFields: f96, items: i96 },
  97: { classFields: f97, items: i97 },
  98: { classFields: f98, items: i98 },
  99: { classFields: f99, items: i99 },
  100: { classFields: f100, items: i100 },
  101: { classFields: f101, items: i101 },
  102: { classFields: f102, items: i102 },
  103: { classFields: f103, items: i103 },
  104: { classFields: f104, items: i104 },
  105: { classFields: f105, items: i105 },
  106: { classFields: f106, items: i106 },
  107: { classFields: f107, items: i107 },
  108: { classFields: f108, items: i108 },
  109: { classFields: f109, items: i109 },
  110: { classFields: f110, items: i110 },
  111: { classFields: f111, items: i111 },
  112: { classFields: f112, items: i112 },
  113: { classFields: f113, items: i113 },
  114: { classFields: f114, items: i114 },
  115: { classFields: f115, items: i115 },
  116: { classFields: f116, items: i116 },
  117: { classFields: f117, items: i117 },
  118: { classFields: f118, items: i118 },
  119: { classFields: f119, items: i119 },
  120: { classFields: f120, items: i120 },
  121: { classFields: f121, items: i121 },
  122: { classFields: f122, items: i122 },
  123: { classFields: f123, items: i123 },
  124: { classFields: f124, items: i124 },
  125: { classFields: f125, items: i125 },
  126: { classFields: f126, items: i126 },
  127: { classFields: f127, items: i127 },
  128: { classFields: f128, items: i128 },
  129: { classFields: f129, items: i129 },
  130: { classFields: f130, items: i130 },
  131: { classFields: f131, items: i131 },
  132: { classFields: f132, items: i132 },
};

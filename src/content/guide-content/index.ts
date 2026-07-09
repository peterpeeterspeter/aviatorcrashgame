// Static import map for all guide content - needed for Next.js SSG
export { guideContent as howToPlayAviator } from "./how-to-play-aviator";
export { guideContent as aviatorStrategyTips } from "./aviator-strategy-tips";
export { guideContent as aviatorPredictorAppsTruth } from "./aviator-predictor-apps-truth";
export { guideContent as aviatorPatternsExplained } from "./aviator-patterns-explained";
export { guideContent as aviatorMultiplierGuide } from "./aviator-multiplier-guide";
export { guideContent as aviatorSignalsExplained } from "./aviator-signals-explained";
export { guideContent as aviatorProvablyFair } from "./aviator-provably-fair";
export { guideContent as aviatorRtpHouseEdge } from "./aviator-rtp-house-edge";
export { guideContent as aviatorCommonMistakes } from "./aviator-common-mistakes";
export { guideContent as aviatorBankrollManagement } from "./aviator-bankroll-management";
export { guideContent as aviatorGlossary } from "./aviator-glossary";
export { guideContent as aviatorVsJetxVsSpaceman } from "./aviator-vs-jetx-vs-spaceman";

import { howToPlayAviator } from "./how-to-play-aviator";
import { aviatorStrategyTips } from "./aviator-strategy-tips";
import { aviatorPredictorAppsTruth } from "./aviator-predictor-apps-truth";
import { aviatorPatternsExplained } from "./aviator-patterns-explained";
import { aviatorMultiplierGuide } from "./aviator-multiplier-guide";
import { aviatorSignalsExplained } from "./aviator-signals-explained";
import { aviatorProvablyFair } from "./aviator-provably-fair";
import { aviatorRtpHouseEdge } from "./aviator-rtp-house-edge";
import { aviatorCommonMistakes } from "./aviator-common-mistakes";
import { aviatorBankrollManagement } from "./aviator-bankroll-management";
import { aviatorGlossary } from "./aviator-glossary";
import { aviatorVsJetxVsSpaceman } from "./aviator-vs-jetx-vs-spaceman";

export interface GuideContent {
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const guideContentMap: Record<string, GuideContent> = {
  "how-to-play-aviator": howToPlayAviator,
  "aviator-strategy-tips": aviatorStrategyTips,
  "aviator-predictor-apps-truth": aviatorPredictorAppsTruth,
  "aviator-patterns-explained": aviatorPatternsExplained,
  "aviator-multiplier-guide": aviatorMultiplierGuide,
  "aviator-signals-explained": aviatorSignalsExplained,
  "aviator-provably-fair": aviatorProvablyFair,
  "aviator-rtp-house-edge": aviatorRtpHouseEdge,
  "aviator-common-mistakes": aviatorCommonMistakes,
  "aviator-bankroll-management": aviatorBankrollManagement,
  "aviator-glossary": aviatorGlossary,
  "aviator-vs-jetx-vs-spaceman": aviatorVsJetxVsSpaceman,
};

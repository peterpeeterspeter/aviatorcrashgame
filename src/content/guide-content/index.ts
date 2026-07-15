// Static import map for all guide content - needed for Next.js SSG
import { guideContent as howToPlayAviator } from "./how-to-play-aviator";
import { guideContent as aviatorStrategyTips } from "./aviator-strategy-tips";
import { guideContent as aviatorPredictorAppsTruth } from "./aviator-predictor-apps-truth";
import { guideContent as aviatorPatternsExplained } from "./aviator-patterns-explained";
import { guideContent as aviatorMultiplierGuide } from "./aviator-multiplier-guide";
import { guideContent as aviatorSignalsExplained } from "./aviator-signals-explained";
import { guideContent as aviatorProvablyFair } from "./aviator-provably-fair";
import { guideContent as aviatorRtpHouseEdge } from "./aviator-rtp-house-edge";
import { guideContent as aviatorCommonMistakes } from "./aviator-common-mistakes";
import { guideContent as aviatorBankrollManagement } from "./aviator-bankroll-management";
import { guideContent as aviatorGlossary } from "./aviator-glossary";
import { guideContent as aviatorDualBetStrategy } from "./aviator-dual-bet-strategy";
import { guideContent as aviatorVsJetxVsSpaceman } from "./aviator-vs-jetx-vs-spaceman";
import { guideContent as aviatorBonusWagering } from "./aviator-bonus-wagering";

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
  "aviator-dual-bet-strategy": aviatorDualBetStrategy,
  "aviator-vs-jetx-vs-spaceman": aviatorVsJetxVsSpaceman,
  "aviator-bonus-wagering": aviatorBonusWagering,
};

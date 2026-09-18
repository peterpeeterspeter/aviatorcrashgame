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
import { guideContent as bestAviatorCasinos } from "./best-aviator-casinos";
import { guideContent as aviatorAutoCashoutGuide } from "./aviator-auto-cashout-guide";
import { guideContent as aviatorPaymentsDepositsWithdrawals } from "./aviator-payments-deposits-withdrawals";
import { guideContent as aviatorVsLuckyJetVsCrashX } from "./aviator-vs-lucky-jet-vs-crash-x";
import { guideContent as aviatorLegalCountries } from "./aviator-legal-countries";
import { guideContent as aviatorMobileGuide } from "./aviator-mobile-guide";
import { guideContent as aviatorNoDepositBonus } from "./aviator-no-deposit-bonus";
import { guideContent as aviatorNetherlandsBelgiumGuide } from "./aviator-netherlands-belgium-guide";
import { guideContent as aviatorDemoVsRealMoney } from "./aviator-demo-vs-real-money";
import { guideContent as aviatorBettingSystemsTested } from "./aviator-betting-systems-tested";
import { guideContent as aviatorVsSlots } from "./aviator-vs-slots";
import { guideContent as aviatorHighRollersVip } from "./aviator-high-rollers-vip";
import { guideContent as aviatorTournaments } from "./aviator-tournaments";
import { guideContent as aviatorIndia } from "./aviator-india";
import { guideContent as aviatorAutoplay } from "./aviator-autoplay";
import { aviatorNotWorkingContent } from "./aviator-not-working";
import { guideContent as aviatorRain } from "./aviator-rain";
import { guideContent as aviatorKycVerification } from "./aviator-kyc-verification";
import { guideContent as aviatorAccountBlocked } from "./aviator-account-blocked";

export interface GuideContent {
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const guideContentMap: Record<string, GuideContent> = {
  "aviator-account-blocked": aviatorAccountBlocked,
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
  "best-aviator-casinos": bestAviatorCasinos,
  "aviator-auto-cashout-guide": aviatorAutoCashoutGuide,
  "aviator-payments-deposits-withdrawals": aviatorPaymentsDepositsWithdrawals,
  "aviator-vs-lucky-jet-vs-crash-x": aviatorVsLuckyJetVsCrashX,
  "aviator-legal-countries": aviatorLegalCountries,
  "aviator-mobile-guide": aviatorMobileGuide,
  "aviator-no-deposit-bonus": aviatorNoDepositBonus,
  "aviator-netherlands-belgium-guide": aviatorNetherlandsBelgiumGuide,
  "aviator-demo-vs-real-money": aviatorDemoVsRealMoney,
  "aviator-betting-systems-tested": aviatorBettingSystemsTested,
  "aviator-vs-slots": aviatorVsSlots,
  "aviator-high-rollers-vip": aviatorHighRollersVip,
  "aviator-tournaments": aviatorTournaments,
  "aviator-india": aviatorIndia,
  "aviator-autoplay": aviatorAutoplay,
  "aviator-not-working": aviatorNotWorkingContent,
  "aviator-rain": aviatorRain,
  "aviator-kyc-verification": aviatorKycVerification,
};

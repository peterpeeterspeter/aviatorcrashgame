export const guideContent = {
  sections: [
    {
      heading: `What "provably fair" actually means`,
      paragraphs: [
        `"Provably fair" is a cryptographic method that lets you verify a gambling result was not tampered with, after the fact, using nothing but a calculator. Traditional online casinos ask you to trust their software. A provably fair game hands you the receipts so you can check the math yourself. Aviator, built by Spribe, is one of the most widely played provably fair crash games, and its fairness system is the backbone of its credibility.`,
        `The phrase gets thrown around in marketing, so it is worth being precise: provably fair does not mean the game is in your favour. The house still holds a 3% edge. What it means is that neither the operator nor a third party can secretly alter a round after it has started, and you can prove that with certainty. The outcome is locked in before you bet, and you can confirm it afterwards.`,
        `This matters in crash games more than in most casino products, because a crash game looks opaque. A multiplier climbs, then suddenly stops. It is natural to wonder whether the operator cut the round short to hit your cashout target. Provably fair exists to settle exactly that suspicion, permanently.`,
      ],
    },
    {
      heading: `The core idea: committed in advance, checkable afterwards`,
      paragraphs: [
        `Every provably fair system rests on two properties. The first is commitment. Before a round begins, the game generates a secret value, called the server seed, and publishes a cryptographic hash of it. A hash is a fixed-length fingerprint: the same input always produces the same fingerprint, but the fingerprint cannot be reversed to recover the input, and changing one character of the input produces a completely different fingerprint. Publishing the hash before the round means the seed cannot be swapped later without the fingerprint failing to match.`,
        `The second property is mixed input. The round's outcome is derived from the server seed combined with random input generated on the players' side. Because part of the input is outside the operator's control, no single party can determine the outcome on its own, and neither the operator nor the provider knows the result when betting opens.`,
        `After the round ends, the secret values are revealed. Anyone can then recompute the hash and the result from the published values and confirm that the round was generated from the committed inputs. The process is deterministic: the same inputs always produce the same result, so a genuine round reproduces exactly.`,
        `One honest limitation of this guide: Spribe does not publish the full algorithmic detail of Aviator's fairness system on its public website, so we deliberately explain the properties you can rely on rather than repeating technical claims we cannot verify at the source. The game's own fairness information inside Aviator is the authoritative reference for the exact steps.`,
      ],
    },
    {
      heading: `What verification establishes, and what it stays silent on`,
      paragraphs: [
        `Recomputing a finished round proves the integrity of that round: the result was fixed before it played out, it came from the committed inputs, and it was not altered afterwards. That is a strong guarantee, and it applies retroactively to any round whose values you can still open.`,
        `Verification says nothing about the future. Before an upcoming round, only the fingerprint of its server input is public, and a fingerprint cannot be reversed. Past rounds reveal nothing about coming ones either, because each round is generated independently from fresh secret values. No pattern reading, seed analysis, or software can turn provably fair data into a prediction, and any product that claims otherwise misuses the term.`,
        `Verification also says nothing about money. A verified round still carries the built-in house edge, and a successful check does not tell you whether an operator pays out withdrawals, which is a separate question of licensing and reputation.`,
      ],
    },
    {
      heading: `Why this prevents manipulation`,
      paragraphs: [
        `Provably fair defeats manipulation by removing every party's ability to change the outcome unnoticed. The operator commits to its server input before the round, so swapping it after bets are placed would break the published fingerprint and be caught on recomputation.`,
        `Nor can the operator choose an input that produces a bad round for you, because the outcome also depends on player-side input that does not exist when the commitment is published. When the fingerprint appeared, nobody could know the combined input, so nobody could aim the result at a chosen multiplier.`,
        `The system is designed so that cheating is either impossible or trivially detectable. There is no middle ground where an operator can nudge results in its favour without leaving proof.`,
      ],
    },
    {
      heading: `Provably fair versus traditional casino RNG`,
      paragraphs: [
        `Traditional online casino games rely on a Random Number Generator (RNG) that is certified by independent testing labs like eCOGRA, iTech Labs, or GLI. The casino generates a random result, you trust the lab's certificate, and you have no way to check an individual round yourself. The trust is real but it is delegated.`,
        `Provably fair moves the verification to you. You do not need a lab or a regulator to be confident a round was honest, because you can recompute it. The trade-off is that provably fair applies most cleanly to simple games like crash, dice, and mines, where a single random value determines the outcome. Complex slot games with elaborate animations are harder to express in a fully transparent seed system.`,
        `The two systems are not mutually exclusive. Reputable Spribe Aviator integrations are both provably fair and RNG-certified. Provably fair gives you the per-round receipt; certification gives you assurance about the overall game parameters and payout behaviour.`,
      ],
    },
    {
      heading: `What provably fair does and does not prove`,
      paragraphs: [
        `It is worth being honest about the limits. Provably fair proves that a specific round was generated honestly from its committed inputs and was not altered. It proves the crash multiplier was locked in before the round started and could not be changed.`,
        `It does not prove the game is profitable for you. Spribe publishes Aviator's return to player as 97%, so the 3% house edge is fully present in every provably fair round. It does not make future rounds predictable. It does not prove the operator pays out withdrawals, which is a separate matter of licensing and reputation. And it does not protect you from your own decisions; a fair game can still drain a poorly managed bankroll.`,
        `Treat provably fair as exactly what it is: a strong, checkable guarantee that the round itself was not rigged. Pair it with a licensed operator and sound money management, and you have done everything a player reasonably can to play on honest terms.`,
      ],
    },
  ],
  faqs: [
    {
      question: `Can provably fair data help me predict the next round?`,
      answer: `No. Before a round starts, only a cryptographic fingerprint of its server input is public, and a fingerprint cannot be reversed to reveal the input. Each round is generated independently, so past results carry no information about future ones. Any tool or service claiming to predict crash points from provably fair data misuses the term.`,
    },
    {
      question: `Does provably fair mean Aviator is a good bet?`,
      answer: `It means the round is honest, not that it favours you. Aviator's published RTP is 97%, so the expected return over many rounds is 97% of total wagers. Provably fair confirms fairness; it does not remove the built-in advantage.`,
    },
    {
      question: `Do I need to know how to code to check a round?`,
      answer: `No. The game shows each finished round's fairness values in its own panel, and independent verifier tools can recompute them for you. Coding is only needed if you want to build your own verifier from scratch.`,
    },
    {
      question: `What should I do if a verification check fails?`,
      answer: `Stop playing immediately, screenshot everything, and contact the operator's support. A failed check is strong evidence of tampering. If the operator is licensed, report it to the regulator.`,
    },
  ],
};

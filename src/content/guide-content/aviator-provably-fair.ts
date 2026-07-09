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
      heading: `The three ingredients: server seed, client seed, and nonce`,
      paragraphs: [
        `Every provably fair round in Aviator is generated from three values. Understanding them is the whole game.`,
        `The first is the server seed. Before a round begins, the operator's server generates a long random string and keeps it secret. It then publishes a hash of that seed (more on hashing below) so you can see a fingerprint of it without seeing the seed itself. Because the hash is published before the round, the server cannot change the seed later without producing a different hash. The seed is committed in advance.`,
        `The second is the client seed. This is a random value contributed by you, the player. Most casinos let you set or rotate your own client seed, or assign one to your account that you can change at will. The point is that the client seed is outside the operator's control, which means the server cannot predict the final outcome even though it chose its own seed first.`,
        `The third is the nonce, short for "number used once." It is a simple counter that increments by one for each round played with the current server seed. Round one uses nonce 1, round two uses nonce 2, and so on. The nonce guarantees that each round produces a distinct result even though the two seeds stay the same for a while.`,
        `Together, these three values form a tamper-evident chain. The operator committed to the server seed in advance, you controlled the client seed, and the nonce makes sure every round is unique. No single party can rig the outcome on its own.`,
      ],
    },
    {
      heading: `SHA-256: the cryptographic glue`,
      paragraphs: [
        `The hash you see is produced by SHA-256, a widely used cryptographic hash function. A hash function takes any input and produces a fixed-length 64-character fingerprint. The same input always produces the same output, but the output looks completely random and cannot be reversed to recover the input. A single character change in the input produces a totally different hash.`,
        `This is why hashing is perfect for committing to a secret. The casino publishes the SHA-256 hash of its server seed before the round. You cannot reverse the hash to learn the seed, so the secret is safe. But once the seed is revealed after the round, you hash it yourself and check that it matches the fingerprint you were shown. If they match, the casino used exactly the seed it promised. If they do not match, you have caught tampering.`,
        `SHA-256 is not proprietary casino technology. It is the same algorithm that secures Bitcoin and countless other systems, and it is freely available in every programming language and in free online tools. You do not have to trust the casino's implementation. You can recompute the hash in any tool you choose.`,
      ],
    },
    {
      heading: `How a round result is computed`,
      paragraphs: [
        `Once the three values are fixed, the crash point for the round is derived from them deterministically. The standard approach in crash games is to concatenate the server seed, client seed, and nonce, hash that combined input, and convert the resulting hash bytes into a number. That number is then mapped to a crash multiplier using the game's distribution formula.`,
        `For Aviator, the cumulative probability is straightforward: the chance that a round reaches at least a multiplier M is approximately 0.97 divided by M. So the chance of reaching 2x is about 48.5%, the chance of reaching 10x is about 9.7%, and the chance of reaching 100x is about 0.97%. That 0.97 is not a coincidence; it is the RTP, and it is built directly into how the random number maps to a multiplier. The remaining 3% is the house edge.`,
        `The key property is determinism. For a given server seed, client seed, and nonce, there is exactly one possible crash point. There is no second chance, no fudge factor, no "adjust the result to beat the player" step. The math either produces the number you saw or it does not.`,
      ],
    },
    {
      heading: `How to verify a round yourself, step by step`,
      paragraphs: [
        `Verifying a round is not complicated, and you do not need to be a programmer. Here is the process.`,
        `Step 1: Before you rotate your server seed, find the current server seed hash. Most provably fair casinos display it in a "Fairness" or "Provably fair" panel, often accessible from the game's menu. Copy that hash string and save it somewhere.`,
        `Step 2: Note your client seed and the nonce of the specific round you want to check. The nonce is usually shown in your bet history alongside the round result.`,
        `Step 3: Rotate, or "unseed," the server seed. This is the crucial step. The casino will not reveal the raw server seed while you are still playing rounds on it, because doing so would let you predict future rounds. When you rotate the seed, the old raw seed is revealed and a new hashed seed takes over for future rounds.`,
        `Step 4: Hash the revealed server seed with SHA-256. Paste it into any free SHA-256 tool online, or run a single command locally. Compare the output to the hash you saved in step 1. If they match, the casino used the seed it committed to. This confirms the seed was not swapped after the round.`,
        `Step 5: Recompute the round result from the seed, client seed, and nonce. The casino's fairness page usually provides a built-in verifier for this, or you can use an independent third-party verifier tool. Enter the server seed, client seed, and nonce, and it will output the crash multiplier. If that number matches the actual round result, the round was fair.`,
        `If either check fails, the round was provably not fair. In practice, with licensed Spribe Aviator integrations, the checks always pass, which is the entire point.`,
      ],
    },
    {
      heading: `Why this prevents manipulation`,
      paragraphs: [
        `Provably fair defeats manipulation by removing every party's ability to change the outcome unnoticed. For the operator to rig a round against you, it would need to know your client seed in advance and then pick a server seed that produces a bad result. But the operator commits its server seed hash before the round and before your client seed is applied to that round, so it cannot search for a favourable seed after the fact without breaking the hash it already published.`,
        `If the operator tried to change the server seed after seeing your bet, the revealed seed would no longer hash to the committed value, and step 4 of verification would catch it instantly. If the operator tried to alter the client seed or nonce, the recomputed result in step 5 would not match the displayed multiplier, and you would catch that too.`,
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
        `It is worth being honest about the limits. Provably fair proves that a specific round was generated honestly from its seeds and was not altered. It proves the crash multiplier was locked in before the round started and could not be changed. It proves the seed was committed in advance.`,
        `It does not prove the game is profitable for you. The 3% house edge is fully present in every provably fair round. It does not prove the operator pays out withdrawals, which is a separate matter of licensing and reputation. And it does not protect you from your own decisions; a fair game can still drain a poorly managed bankroll.`,
        `Treat provably fair as exactly what it is: a strong, checkable guarantee that the round itself was not rigged. Pair it with a licensed operator and sound money management, and you have done everything a player reasonably can to play on honest terms.`,
      ],
    },
  ],
  faqs: [
    {
      question: `Can I verify a round while I am still playing on that server seed?`,
      answer: `No, and that is by design. The raw server seed is only revealed when you rotate to a new one, otherwise you could predict future rounds. You can still save the seed hash before each session and verify any past round after you rotate the seed.`,
    },
    {
      question: `Does provably fair mean Aviator is a good bet?`,
      answer: `It means the round is honest, not that it favours you. Aviator still carries a 3% house edge, so the expected return over many rounds is 97% of total wagers. Provably fair confirms fairness; it does not remove the built-in advantage.`,
    },
    {
      question: `Do I need to know how to code to verify a round?`,
      answer: `Not at all. You can paste the server seed into any free online SHA-256 tool, and most casinos offer a built-in verifier where you enter the seed, client seed, and nonce to see the recomputed multiplier. Coding is only needed if you want to build your own verifier from scratch.`,
    },
    {
      question: `What should I do if a verification check fails?`,
      answer: `Stop playing immediately, screenshot everything, and contact the operator's support. A failed check is strong evidence of tampering. If the operator is licensed, report it to the regulator. In practice, genuine failures on licensed Spribe integrations are extremely rare.`,
    },
  ],
};

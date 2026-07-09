export const guideContent = {
  sections: [
    {
      heading: "How Aviator Multipliers Are Generated",
      paragraphs: [
        "Every Aviator round produces a single crash multiplier, and that multiplier is drawn from a fixed probability distribution that is baked into the game's design. The distribution is not a secret: it is implied by the published 97 percent return to player, and it can be derived from the way the provably fair hash output is converted into a crash point. Once you understand the shape of this distribution, you can read off the exact probability of any multiplier you care about and reason clearly about the trade-offs between different cashout targets.",
        "The simplest mental model is this: the probability that a round reaches a given multiplier M is approximately 0.97 divided by M. This comes straight from the definition of RTP, which says that the average payout across all rounds equals 97 percent of the money wagered. If you always cashed out at exactly multiplier M, your expected return would be M times the probability of reaching M, and setting that equal to 0.97 gives probability equals 0.97 over M. We will use this formula throughout the guide and show that it matches the published and observed crash data closely.",
      ],
    },
    {
      heading: "Exact Odds at Every Multiplier Level",
      paragraphs: [
        "Using the probability equals 0.97 over M relationship, here are the approximate chances of a round reaching each common cashout target. For 1.5x, the probability is about 64.7 percent, meaning roughly two out of every three rounds will let you cash out at 1.5x or higher. For 2x it is about 48.5 percent, so just under half of all rounds. For 3x it is about 32.3 percent, or roughly one in three. For 5x it falls to about 19.4 percent, or roughly one in five rounds.",
        "As the target climbs, the odds drop fast. For 10x, the probability is about 9.7 percent, or slightly less than one round in ten. For 50x it is about 1.94 percent, roughly one round in fifty. For 100x it is about 0.97 percent, or one round in a hundred. For an ambitious 500x target, the probability is about 0.19 percent, or one round in five hundred, and for 1000x it is about 0.097 percent, or one round in a thousand. These numbers match the empirical data from thousands of real rounds within normal sampling noise, which is strong evidence that the game behaves exactly as the RTP implies.",
        "Notice how steeply the curve falls. Doubling your target from 2x to 4x more than halves your hit rate, and the same is true at every level. This steep falloff is the mathematical reason why high-multiplier strategies feel exciting but perform terribly in practice: the rare wins are large, but they are so rare that the long stretches of total losses between them grind down your bankroll faster than most players expect.",
      ],
    },
    {
      heading: "Expected Value and Why Every Target Has the Same Edge",
      paragraphs: [
        "Expected value is the average amount you would win or lose per round if you played the same way forever. For a cashout at multiplier M, the expected value per unit wagered is the payout (M) times the probability of hitting it (0.97 over M), minus the probability of losing (1 minus 0.97 over M) times your stake of 1. Working through the algebra, this simplifies to negative 0.03, or a loss of 0.03 units per unit wagered, no matter what M you choose.",
        "This is a profound and often misunderstood result. It means that from a pure expected-value standpoint, every cashout target is identical. A player auto-cashing at 1.5x and a player auto-cashing at 100x both face the same 3 percent house edge per unit wagered over the long run. The difference between them is not in expected value but in variance: the low-target player experiences many small wins and small losses, while the high-target player experiences long strings of total losses punctuated by rare large payouts. Same expected return, vastly different ride.",
        "The practical implication is that choosing a cashout target is not about finding a multiplier with better odds. It is about choosing the variance profile you can psychologically and financially tolerate. If you have a small bankroll and limited patience for losing streaks, low targets are safer. If you have a larger bankroll and enjoy the lottery-ticket dynamic of rare big wins, higher targets are viable, as long as you size your bets so the inevitable dry spells do not bust you first.",
      ],
    },
    {
      heading: "Why High-Multiplier Strategies Lose Faster in Practice",
      paragraphs: [
        "If every target has the same expected value, why do we say high-multiplier strategies tend to lose faster in practice? The answer is bankroll friction, which is the gap between mathematical expectation and what actually happens to a finite bankroll over a finite session. A player targeting 100x loses their full stake on roughly 99 out of every 100 rounds. To survive the typical gap between wins, which can easily stretch to several hundred rounds, they need either a very large bankroll or very small bets relative to it.",
        "Most players do not have either. They target high multipliers with bets sized for low-multiplier play, and the result is that they bust out during a normal-length dry spell before the rare big win ever arrives. The expected value calculation assumes you can keep playing indefinitely through the downswings, but a finite bankroll cannot. Once you are broke, you stop playing, and the theoretical long-run average never gets a chance to assert itself. This is why high-multiplier strategies feel worse than their expected value suggests: they require a financial cushion that most players do not bring to the table.",
        "The lesson is not that high targets are forbidden. It is that the choice of target must be matched to the choice of bet size. If you want to chase 50x or 100x multipliers, your per-round bet should be tiny relative to your bankroll, small enough that a run of 200 or 300 losing rounds is survivable. If you cannot afford to bet that small, you cannot afford to chase high multipliers, and a lower target will give you a longer, less stressful session for the same money.",
      ],
    },
  ],
  faqs: [
    {
      question: "What are the exact odds of hitting 2x in Aviator?",
      answer:
        "Approximately 48.5 percent, or just under one round in two. This follows directly from the 97 percent RTP using the formula probability equals 0.97 divided by the multiplier, and it matches observed data from thousands of real rounds.",
    },
    {
      question: "What are the odds of hitting 10x or 100x?",
      answer:
        "About 9.7 percent for 10x, or roughly one round in ten, and about 0.97 percent for 100x, or roughly one round in a hundred. The probability drops steeply as the target rises, roughly halving each time you double the multiplier.",
    },
    {
      question: "Does a higher cashout target give better expected value?",
      answer:
        "No. Because of how the probability distribution is tied to the 97 percent RTP, every cashout target has the same expected value of negative 3 percent per unit wagered. Higher targets simply have higher variance, with rarer but larger wins.",
    },
    {
      question: "Why do high-multiplier strategies lose money faster in practice?",
      answer:
        "Because they produce long strings of total losses between rare wins, which requires either a very large bankroll or very small bets to survive. Most players bet too large for high targets and bust out during a normal dry spell before the rare big win arrives.",
    },
  ],
};

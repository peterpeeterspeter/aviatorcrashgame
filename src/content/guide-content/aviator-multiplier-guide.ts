export const guideContent = {
  sections: [
    {
      heading: "How Aviator Multipliers Are Generated",
      paragraphs: [
        "Every Aviator round produces a single crash multiplier, drawn from a fixed probability distribution baked into the game's design. Spribe publishes the game's return to player, 97 percent, but not the distribution itself. That matters: RTP alone does not determine the hit probability of any multiplier, because many different distributions can produce the same 97 percent average. What this guide can honestly do is work through one hypothetical distribution that is consistent with the published RTP, to make the trade-offs between cashout targets concrete. Every probability below is an illustration of that model, not verified Aviator odds.",
        "The hypothetical model is this: the probability that a round reaches a given multiplier M is 0.97 divided by M. It comes from adding one extra assumption to the RTP: that always cashing out at exactly multiplier M returns 97 percent on average, so M times the probability of reaching M equals 0.97. That extra assumption is not published or verified for Aviator; it simply produces the simplest curve consistent with the RTP. We use it as a teaching model throughout the guide, and it ignores operator payout caps that can truncate very large multipliers.",
      ],
    },
    {
      heading: "Hypothetical Odds at Every Multiplier Level",
      paragraphs: [
        "Using the 0.97 over M model, here are the chances it would assign to each common cashout target. For 1.5x, the model says about 64.7 percent, meaning roughly two out of every three rounds would let you cash out at 1.5x or higher. For 2x it is about 48.5 percent, so just under half of all rounds. For 3x it is about 32.3 percent, or roughly one in three. For 5x it falls to about 19.4 percent, or roughly one in five rounds.",
        "As the target climbs, the model's odds drop fast. For 10x it gives about 9.7 percent, or slightly less than one round in ten. For 50x it is about 1.94 percent, roughly one round in fifty. For 100x it is about 0.97 percent, or one round in a hundred. For an ambitious 500x target, the model says about 0.19 percent, or one round in five hundred, and for 1000x it is about 0.097 percent, or one round in a thousand. These are model figures, not measurements: the true Aviator distribution is unpublished, and real sessions vary through ordinary sampling noise.",
        "Notice how steeply the model's curve falls: doubling the target from 2x to 4x halves the hit rate exactly, and the same holds at every level because the model's probability is inversely proportional to the target. Whether the real curve falls at exactly this rate is unverified. What does follow from the published RTP alone is that high multipliers must be rare, which is the mathematical reason high-multiplier strategies feel exciting but perform terribly in practice: the rare wins are large, but the long stretches of total losses between them grind down a bankroll faster than most players expect.",
      ],
    },
    {
      heading: "Expected Value and Why Every Target Has the Same Edge",
      paragraphs: [
        "Expected value is the average amount you would win or lose per round if you played the same way forever. In the hypothetical model, the calculation is short. For a cashout at multiplier M, your expected return per unit wagered is the payout M times the probability of reaching it, 0.97 over M, which is exactly 0.97. Subtract the unit you staked and the expected value is negative 0.03 units per unit wagered, no matter what M you choose.",
        "This is a widely misunderstood result, and it holds within the model: from a pure expected-value standpoint, every cashout target is identical. In the model, a player auto-cashing at 1.5x and a player auto-cashing at 100x both face the same 3 percent house edge per unit wagered over the long run. For the real game only the overall 97 percent average is published, so per-target edges cannot be computed exactly. The difference between targets is not in expected value but in variance: the low-target player experiences many small wins and small losses, while the high-target player experiences long strings of total losses punctuated by rare large payouts. Same expected return, vastly different ride.",
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
        "There are no published exact odds. In the guide's hypothetical model the figure is approximately 48.5 percent, or just under one round in two, but that is a model illustration: Spribe publishes the 97 percent RTP and no per-multiplier odds, and RTP alone does not determine the distribution.",
    },
    {
      question: "What are the odds of hitting 10x or 100x?",
      answer:
        "In the same hypothetical model, about 9.7 percent for 10x, or roughly one round in ten, and about 0.97 percent for 100x, or roughly one round in a hundred, with the probability halving each time the multiplier doubles. Real per-multiplier odds are not published.",
    },
    {
      question: "Does a higher cashout target give better expected value?",
      answer:
        "In the hypothetical model, no: every cashout target has the same expected value of negative 3 percent per unit wagered, because the model ties the distribution directly to the 97 percent RTP. For the real game, only the overall 97 percent average is published, so per-target expected values cannot be computed from public information.",
    },
    {
      question: "Why do high-multiplier strategies lose money faster in practice?",
      answer:
        "Because they produce long strings of total losses between rare wins, which requires either a very large bankroll or very small bets to survive. Most players bet too large for high targets and bust out during a normal dry spell before the rare big win arrives.",
    },
  ],
};

export const guideContent = {
  sections: [
    {
      heading: `What dual betting actually is`,
      paragraphs: [
        `Aviator lets you place two independent bets in the same round. You see two bet panels side by side on the game screen, and each one has its own stake, its own auto-cashout target, and its own cash-out button. When the round starts, both bets are live simultaneously against the same crash point. When the plane flies away, each bet is settled independently based on whether you cashed out before the crash.`,
        `This is a built-in feature of the game, not a trick or an exploit. Spribe designed Aviator with dual betting from the start, and every casino that offers Aviator supports it. The feature exists because it opens up strategic options that a single bet does not. You can hedge by cashing out one bet early while letting the other ride toward a higher multiplier. You can run two identical bets to double your volume per round. Or you can use one bet for steady small wins and the other for occasional large payouts.`,
        `The important thing to understand before we get into strategy is what dual betting does not do. It does not increase your chances of winning. It does not reduce the house edge. It does not protect you from losing. Two bets are simply two bets, and each one carries the same 3% mathematical disadvantage as a single bet. What changes is the shape of your results, not the long-run average. We will get into exactly how and why in the math section below.`,
      ],
    },
    {
      heading: `How to set up a dual bet, step by step`,
      paragraphs: [
        `During the betting window between rounds, you will see two bet panels labeled Bet 1 and Bet 2. For each panel, you set three things: the stake amount, whether to use auto-cashout, and if so, the target multiplier. Type your stake into the input field or use the plus and minus buttons to adjust it. Set the auto-cashout target by typing a number into the auto-cashout field on that panel. Then click the Bet button on each panel you want to activate.`,
        `A common configuration for a first attempt is Bet 1 at your base stake with auto-cashout at 1.5x, and Bet 2 at the same stake with auto-cashout at 3x. This gives you a 64.7% chance of getting half your money back on Bet 1 and a 32.3% chance of a larger win on Bet 2. When the round reaches 1.5x, Bet 1 cashes out automatically. If the round continues to 3x, Bet 2 also cashes out. If the round crashes before 1.5x, both bets lose.`,
        `You can also run one bet on auto-cashout and the other on manual. This lets you lock in a guaranteed exit on one side while making a real-time decision on the other. Some players prefer this because it keeps them engaged with the round. The downside is that manual cashout is where most timing mistakes happen, so if you are new, put both bets on auto-cashout until the mechanics feel automatic.`,
      ],
    },
    {
      heading: `The math: why splitting bets does not change your expected value`,
      paragraphs: [
        `Every bet in Aviator has the same expected value: negative 3% of the amount wagered. This is true regardless of your cashout target, your bet size, or how many bets you place in a round. The reason is that the crash point distribution is engineered so that the probability of reaching any multiplier M is approximately 0.97 divided by M. The 0.97 factor is the RTP, baked directly into the probability formula, which means every cashout target returns 97% of what you wager over the long run.`,
        `When you place two bets, each one independently has this same negative 3% expectation. If you wager 1 unit on Bet 1 and 1 unit on Bet 2, your total expected loss is 0.06 units per round, which is exactly 3% of the 2 units you wagered. Compare this to a single bet of 2 units at any target: the expected loss is also 0.06 units. The dual bet does not save you money in expectation. You can verify this yourself with a simple calculation we will walk through next.`,
        `Here are the actual numbers for a dual bet of 1 unit at 1.5x and 1 unit at 5x. There are three possible outcomes. The round reaches 5x or higher 19.4% of the time, and both bets win, returning 6.5 units total. The round reaches 1.5x but crashes before 5x in 45.3% of rounds, so only Bet 1 wins, returning 1.5 units. And the round crashes before 1.5x in 35.3% of rounds, and both bets lose. The expected return across all outcomes is 0.194 times 6.5 plus 0.453 times 1.5 plus 0.353 times 0, which equals 1.94 units. You wagered 2 units, so your expected loss is 0.06 units, or 3%. Identical to a single bet.`,
      ],
    },
    {
      heading: `The cover bet myth and what dual betting really does to your variance`,
      paragraphs: [
        `Many strategy guides describe dual betting as a way to reduce risk. The pitch goes like this: place a safe bet at 1.5x to cover your stake, then use a second bet to chase a higher multiplier. The safe bet allegedly protects you. This framing is misleading, and the math shows why. Your 1.5x bet wins 64.7% of the time, which sounds reassuring, but the remaining 35.3% of rounds wipe out both bets entirely. The safe bet does not protect the growth bet. They are independent wagers on the same random event.`,
        `What dual betting actually changes is the distribution of your per-round outcomes, also called variance. Whether this helps or hurts depends entirely on which targets you choose. A conservative configuration like 1 unit at 1.5x plus 1 unit at 2x has lower variance than a single 2-unit bet at 2x, because both targets are close together and the payout range is narrow. But an aggressive configuration like 1 unit at 1.5x plus 1 unit at 5x has higher variance than that same single bet, because the 5x payout creates a much wider spread of possible returns despite the frequent small wins on the 1.5x side.`,
        `The practical implication is that you should choose your dual bet configuration based on the variance profile you want, not based on an illusion of protection. If your goal is to grind out many small wins and extend your session, use two bets with close, low targets like 1.5x and 2x. If your goal is to chase occasional large payouts while maintaining frequent small returns, the asymmetric setup works, but understand that you are increasing your overall variance, not reducing it. Either way, your expected loss per unit wagered is 3%.`,
      ],
    },
    {
      heading: `When dual betting helps and when single betting is better`,
      paragraphs: [
        `Dual betting genuinely helps in two situations. First, when you want finer control over your risk profile per round. Two bets give you two exit points, which means two guaranteed cashout moments instead of one. If you want part of your stake exiting at 1.5x and part at 3x, the only way to do that within a single round is the dual bet feature. Second, when you want to reduce the all-or-nothing feeling that makes Aviator emotionally difficult. Losing every bet on a round feels worse than losing one and winning the other, even if the financial outcome is similar.`,
        `Single betting is the better choice when you want to minimize the total amount you wager per round. This is a point most guides gloss over: two bets means you are putting more money into action each round, which means your bankroll burns faster relative to the number of rounds you survive. If your bankroll is 100 units and you bet 1 unit per round, you can expect roughly 100 to 200 rounds before going broke, depending on your target. If you switch to two 1-unit bets per round, that range drops to roughly 50 to 100 rounds. You are not losing more per unit wagered, but you are wagering more units per round.`,
        `Single betting is also better when your goal is simplicity. Managing two bets adds cognitive load. You have to set two stakes, two auto-cashout targets, and track two positions during the round. For players who want to relax and play at a measured pace, one bet per round with a pre-set auto-cashout is the lowest-friction approach. The dual bet feature is a tool, not an obligation. Use it when the added control is worth the added complexity and the faster bankroll consumption.`,
      ],
    },
    {
      heading: `Bankroll considerations specific to dual betting`,
      paragraphs: [
        `The 5% rule from our bankroll management guide applies to your total stake per round, not per bet. If your bankroll is 100 units and you follow the 5% rule, your maximum total stake per round is 5 units. With dual betting, that 5 units is split across both bets. You might put 3 units on Bet 1 and 2 units on Bet 2, or split it evenly at 2.5 each. The key is that the combined stake stays at or below your per-round limit.`,
        `A common mistake is treating each bet panel independently for bankroll purposes. A player with a 100-unit bankroll might bet 5 units on Bet 1 and 5 units on Bet 2, thinking each one follows the 5% rule. In reality, they are wagering 10 units per round, which is 10% of their bankroll. At that rate, a short losing streak can wipe out a third of the bankroll in minutes. Always calculate your bankroll percentage based on the combined stake of all active bets in the round.`,
        `If you are using an asymmetric split where Bet 1 is larger and targets a low multiplier while Bet 2 is smaller and targets a high multiplier, the math works in your favor for session length. The larger low-target bet wins more often, which means more of your per-round stake is coming back to you on most rounds. This extends your session compared to putting the same total amount on a single high-target bet. But remember: the expected loss is still 3% of total wagered. You are extending the session, not improving the outcome.`,
      ],
    },
    {
      heading: `Mistakes to avoid with dual betting`,
      paragraphs: [
        `The most common mistake is increasing total stake per round when switching from single to dual betting. If you were betting 2 units per round as a single bet and then start placing two 2-unit bets, you have doubled your wagering volume without changing your strategy. Your bankroll will deplete twice as fast. When you adopt dual betting, reduce each individual bet so the combined stake matches what you were wagering before, or matches your bankroll management limit.`,
        `A second mistake is chasing losses on the growth bet while treating the safety bet wins as house money. When Bet 1 wins at 1.5x and returns 1.5 units, that is real money, not bonus money. Some players mentally categorize those small wins as free chips and use them to justify larger stakes on Bet 2. This is how a structured dual bet strategy devolves into uncontrolled chasing. Track your net position for the session, not per bet, and stick to your stop-loss regardless of how many times Bet 1 has cashed out.`,
        `The third mistake is assuming dual betting is inherently more sophisticated or advanced than single betting. It is not. The house edge is the same. The RTP is the same. The feature gives you more options for shaping your per-round outcomes, but it does not give you an edge. Players who feel they have graduated to a higher level of play because they use two bets instead of one are engaging with the game emotionally, not strategically. Use dual betting because it fits your bankroll plan and your tolerance for complexity, not because it feels more advanced.`,
      ],
    },
  ],
  faqs: [
    {
      question: `Does placing two bets in Aviator increase your chances of winning?`,
      answer: `No. Each bet in Aviator has a 97% RTP regardless of target or number of bets. Placing two bets simply means you have two independent wagers, each with the same negative 3% expected value. Your total expected loss per round is 3% of the combined amount wagered on both bets. Dual betting changes the distribution of your outcomes, not the long-run average.`,
    },
    {
      question: `What is the best dual bet configuration for beginners?`,
      answer: `Start with equal stakes on both bets and conservative targets close together, such as 1.5x on Bet 1 and 2x on Bet 2. This gives you a high hit rate on both bets and the lowest variance of any dual bet setup. Once you are comfortable with the mechanics, you can experiment with wider target spreads, but keep the combined stake within your bankroll management limit.`,
    },
    {
      question: `Can you place different bet sizes on each bet panel?`,
      answer: `Yes. Each bet panel accepts its own stake independently. A common approach is to place a larger stake on the lower-target bet and a smaller stake on the higher-target bet. For example, 3 units at 1.5x and 1 unit at 5x. This weights your wagering toward the higher-probability outcome while keeping a small position open for a larger payout.`,
    },
    {
      question: `Do all casinos that offer Aviator support dual betting?`,
      answer: `Yes. Dual betting is a core feature of Aviator built by Spribe, not a casino-side addition. Every casino that runs the standard Aviator game provides both bet panels. There is no need to check whether a specific casino supports it. If the casino offers Aviator, dual betting is available.`,
    },
    {
      question: `Should I use auto-cashout on both bets?`,
      answer: `For most players, yes. Auto-cashout removes reaction time and emotion from the cashout decision, which is where the majority of timing errors occur. Running both bets on auto-cashout lets you set your strategy before the round starts and then simply watch the result. You can always switch one bet to manual if you want real-time control, but the default recommendation is full automation.`,
    },
  ],
};

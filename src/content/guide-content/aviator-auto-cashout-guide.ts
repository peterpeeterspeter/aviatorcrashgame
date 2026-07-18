export const guideContent = {
  sections: [
    {
      heading: `What auto-cashout actually does, and what it does not`,
      paragraphs: [
        `Auto-cashout is a feature built into Aviator by Spribe. You set a target multiplier before the round starts. When the round begins and the multiplier climbs from 1.00x, your bet settles automatically the instant the multiplier reaches your target. If the round crashes first, the bet loses. No click required on the way up.`,
        `The feature is part of the game itself, not a casino-side add-on. That means it works identically at every casino that runs the standard Aviator game. You do not need to check whether a specific casino supports it. If the casino offers Aviator, auto-cashout is there.`,
        `What auto-cashout does is remove timing errors. It removes the half-second of hesitation that costs you a cashout when the multiplier crashes a moment after you decided to press the button. It removes the temptation to hold on for a slightly bigger multiplier when you see the number climbing past your target. Both of those failure modes are where most Aviator players bleed money, and auto-cashout eliminates both.`,
        `What auto-cashout does not do is change your expected return. The crash point distribution is engineered so that the probability of reaching any multiplier M is approximately 0.97 divided by M, which is derived from the 97% RTP. We walk through the full math in our <a href="/guides/aviator-rtp-house-edge">Aviator RTP and house edge guide</a>, but the short version: every cashout target, from 1.5x to 100x, has the same negative 3% expected value per unit wagered. Auto-cashout is a discipline tool, not an edge tool.`,
      ],
    },
    {
      heading: `How to set up auto-cashout, and the auto-bet distinction most guides blur`,
      paragraphs: [
        `The setup is the same at every casino. During the betting window between rounds, look at the bet panel where you would normally type your stake. Next to or above the stake field there is a smaller input labeled Auto or Auto Cash Out with a toggle. Type your target multiplier into that field, toggle it on, enter your stake, and click Bet. The entire configuration takes under 30 seconds.`,
        `When the round starts, the bet panel shows your auto-cashout target alongside a live Cash Out button. You can ignore the button. If the round reaches your target, the cashout executes automatically and the winnings land in your balance before the next round begins. You can change the target between rounds at any time. You cannot change it during a round, which is the point. If you could change it mid-round, you would be back to manual cashout with all its timing problems.`,
        `One thing worth checking before your first session: many casinos also offer an auto-bet toggle that places the bet for you each round without clicking Bet. Auto-cashout and auto-bet are separate features that do different things. Auto-cashout controls when your bet exits a round. Auto-bet controls whether a new bet is placed at the start of the next round. You can use either without the other.`,
        `Running auto-cashout alone is the setup most players should start with. You click Bet each round, the bet auto-cashes at your target if reached, and you decide whether to bet again next round. This keeps you actively engaged with the decision to bet. Running both together turns the game into fully unattended auto-play, which is risky. Aviator rounds run every 10 to 15 seconds, so an unattended auto-bet plus auto-cashout setup can burn through 100 rounds in under 25 minutes. If you use auto-bet, set a hard round limit and stay in front of the screen.`,
      ],
    },
    {
      heading: `Hit rates at every common multiplier`,
      paragraphs: [
        `The probability of a round reaching any multiplier M is approximately 0.97 divided by M. This is derived directly from Aviator's 97% RTP, and it matches the observed data from thousands of real rounds. We cover the full derivation in our <a href="/guides/aviator-multiplier-guide">multiplier guide</a>. Here are the numbers you will actually use when picking a target.`,
        `<table style="border-collapse:collapse;width:100%;font-size:0.95rem;margin:1rem 0"><thead><tr style="background:hsl(var(--muted));text-align:left"><th style="padding:8px;border:1px solid hsl(var(--border))">Target</th><th style="padding:8px;border:1px solid hsl(var(--border))">Hit rate</th><th style="padding:8px;border:1px solid hsl(var(--border))">Frequency</th><th style="padding:8px;border:1px solid hsl(var(--border))">Payout on hit</th></tr></thead><tbody>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">1.2x</td><td style="padding:8px;border:1px solid hsl(var(--border))">80.8%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 4 in 5 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">0.2x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">1.5x</td><td style="padding:8px;border:1px solid hsl(var(--border))">64.7%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 2 in 3 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">0.5x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">2x</td><td style="padding:8px;border:1px solid hsl(var(--border))">48.5%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 2 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">1x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">3x</td><td style="padding:8px;border:1px solid hsl(var(--border))">32.3%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 3 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">2x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">5x</td><td style="padding:8px;border:1px solid hsl(var(--border))">19.4%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 5 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">4x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">10x</td><td style="padding:8px;border:1px solid hsl(var(--border))">9.7%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 10 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">9x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">50x</td><td style="padding:8px;border:1px solid hsl(var(--border))">1.94%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 50 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">49x profit</td></tr>
<tr><td style="padding:8px;border:1px solid hsl(var(--border))">100x</td><td style="padding:8px;border:1px solid hsl(var(--border))">0.97%</td><td style="padding:8px;border:1px solid hsl(var(--border))">about 1 in 103 rounds</td><td style="padding:8px;border:1px solid hsl(var(--border))">99x profit</td></tr>
</tbody></table>`,
        `The hit rate drops fast as the target climbs. Doubling your target roughly halves your chance of hitting it. The jump from 1.5x to 2x looks modest, but the jump from 10x to 20x is where most players underestimate how dry the dry spells get. At 100x, you wait an average of 103 rounds between hits, and the variance around that average is wide.`,
        `Here is the counterintuitive part. Lower targets do not just hit more often; they produce more stable bankroll curves. A player auto-cashing at 1.5x sees their balance bounce inside a tight band, because two-thirds of rounds return a small profit. A player auto-cashing at 10x sees their balance march steadily downward, punctuated by occasional spikes that may or may not recover the losses. Same expected return, very different ride.`,
      ],
    },
    {
      heading: `Why every target has the same negative 3% expected value`,
      paragraphs: [
        `Run the math at 1.5x. You win 1.5 times your stake 64.7% of the time and lose your stake 35.3% of the time. Expected value per unit wagered is payout-on-win times probability-of-win minus stake times probability-of-loss. That gives 0.5 times 0.647 minus 1 times 0.353, which equals minus 0.03. About a 3% loss per unit wagered.`,
        `Run the same math at 10x. You win 9 times your stake 9.7% of the time and lose your stake 90.3% of the time. Expected value: 9 times 0.097 minus 1 times 0.903, which equals 0.873 minus 0.903, which equals minus 0.03. Same answer. At 100x: 99 times 0.0097 minus 1 times 0.9903, which equals 0.9603 minus 0.9903, which equals minus 0.03. Same answer again.`,
        `This is not a coincidence. The 0.97 factor is built into the probability distribution itself, so every target produces the same expected return of minus 3% per unit wagered. The choice of target changes your variance, not your edge.`,
        `Worth saying plainly because a lot of marketing implies otherwise. "Play smart, target low, grind out a profit" is not true. "Wait for the big multipliers, that's where the money is" is also not true. Both styles lose 3% of wagered money over the long run. The difference is whether you lose it in small frequent amounts or large occasional chunks.`,
      ],
    },
    {
      heading: `The override: how auto-cashout strategies actually fail`,
      paragraphs: [
        `Here is the failure mode almost no competitor talks about. A player sets auto-cashout at 2x, plays a few rounds, and watches the multiplier climb past 2x, past 3x, past 5x, and then crash at 8x. They feel like they missed a big win. The next round, when the multiplier climbs past 2x again, they click Cancel Auto and hold for higher. The round crashes at 2.1x. They lose what would have been a winning bet.`,
        `This is the override. It is the single most common way auto-cashout strategies fall apart, and it is entirely psychological. The auto-cashout did exactly what it was supposed to do. The player broke their own system, because watching a multiplier climb past your target feels like leaving money on the table.`,
        `The math says the override is a mistake. The rounds where the multiplier climbs to 8x or higher are rare (about 12% of rounds), and you have no way to know in advance which rounds those will be. By cancelling auto-cashout to chase the occasional big multiplier, you expose yourself to the far more common outcome: the round crashes shortly after your original target, and you lose. The rounds you remember are the 8x crashes you missed. The rounds you forget are the 2.1x crashes you ate because you cancelled. Over time, the latter outnumber the former.`,
        `The fix is mechanical. Once you set auto-cashout, do not touch it during the round. If you find yourself reaching for the Cancel button regularly, that is the signal to close the game for the session. The override is tilt wearing a rationalization costume. We cover the broader tilt pattern in our <a href="/guides/aviator-common-mistakes">common mistakes guide</a>, and it is the pattern that turns a structured auto-cashout strategy into an unstructured losing one.`,
      ],
    },
    {
      heading: `Picking a target that matches your bankroll`,
      paragraphs: [
        `Your auto-cashout target should be tied to your bankroll size and your session goals, not to a gut feeling about today's multiplier. The principle is simple: lower targets produce smaller, more frequent swings that a modest bankroll can absorb. Higher targets produce larger, rarer swings that require a bigger bankroll to survive the dry spells.`,
        `If your session bankroll is 100 units and you bet 1 unit per round, a 1.5x auto-cashout target lets you play for a long time. Two-thirds of your rounds return a small profit, so your bankroll drifts down slowly rather than cratering. The same bankroll at a 10x target is usually gone inside 100 rounds, because you lose roughly 90% of rounds outright and the rare 10x hit only returns 9 units of profit.`,
        `The honest recommendation for most players: target 1.5x to 2x. This is not because those targets are luckier. It is because they produce a hit rate high enough that your session lasts long enough to be entertaining, and the swings are small enough that tilt does not take over. If you want to chase higher multipliers, our <a href="/guides/aviator-dual-bet-strategy">dual bet strategy guide</a> explains how to do that with a small side bet while keeping most of your stake on a safer target. The bankroll management guide has the broader framework for sizing bets and setting stop-losses.`,
        `For the actual bankroll sizing, the standard rule is 1 to 2% of your session bankroll per round. That is small enough to survive normal losing streaks, which at a 1.5x target means streaks of 5 to 10 rounds and occasionally longer. Bet more than that and a single bad streak ends the session before the math has a chance to play out.`,
      ],
    },
    {
      heading: `Does auto-cashout work the same at every casino?`,
      paragraphs: [
        `Yes. Auto-cashout is implemented by Spribe inside the Aviator game itself, not by the casino. The casino provides the bet handling and the wallet, but the auto-cashout trigger is part of the game's code. It executes identically at <a href="/go/bitstarz">BitStarz</a>, <a href="/go/cybet">Cybet</a>, <a href="/go/mirax">Mirax</a>, <a href="/go/trustdice">TrustDice</a>, and everywhere else Aviator is offered.`,
        `What does differ between casinos is everything around the game. Payout speed varies, sometimes dramatically. Bonus contribution rate varies, and at most casinos crash games contribute only 5% toward wagering, which we break down casino by casino in our <a href="/guides/aviator-bonus-wagering">bonus wagering guide</a>. Whether the casino offers a separate auto-bet configuration alongside auto-cashout varies. The game-level auto-cashout mechanic does not vary.`,
        `If you are choosing where to play, the two things that actually matter are how fast withdrawals arrive and whether the welcome bonus is worth taking for crash game play. In our testing, BitStarz consistently delivered crypto withdrawals in under 10 minutes, which is faster than every other casino on our list. Cybet is the only casino where we verified crash games contribute 100% toward wagering, which makes it the one place where taking the bonus actually works for Aviator players. TrustDice is the pick for provably fair, crypto-native play without KYC friction. The full rankings are in our <a href="/guides/best-aviator-casinos">best Aviator casinos guide</a>.`,
      ],
    },
    {
      heading: `When manual cashout makes sense (the narrow case)`,
      paragraphs: [
        `Auto-cashout is the right default for almost everyone. There is one narrow case where manual cashout genuinely makes sense, and it involves the dual bet feature.`,
        `Aviator lets you place two independent bets per round. A common setup is to put one bet on auto-cashout at 1.5x as a safety net, and let the second bet ride with a manual cashout decision based on how the round develops. This works because the auto-cashout bet guarantees you exit at your safe target regardless of what happens, while the manual bet lets you react to the actual multiplier behavior. The guaranteed floor keeps the round from being a total loss; the manual bet gives you upside if the multiplier runs.`,
        `Outside of this specific setup, manual cashout is almost always worse than auto-cashout. The reason is reaction time. The Aviator multiplier updates several times per second, and the gap between "I should cash out" and actually clicking the button is long enough that the multiplier can crash in between. Auto-cashout has no reaction time; it triggers the instant the target is reached.`,
        `If you are new, ignore manual cashout entirely. Set auto-cashout on both bet panels if you are using dual bets, pick modest targets, and let the game execute your plan. Our <a href="/guides/how-to-play-aviator">how to play Aviator guide</a> walks through the basic mechanics, and our <a href="/guides/aviator-strategy-tips">strategy tips guide</a> covers the broader framework. Once you have played several hundred rounds and the mechanics feel automatic, you can experiment with one manual bet alongside an auto-cashout bet. Until then, manual cashout is mostly a way to lose money slightly faster than you need to.`,
      ],
    },
  ],
  faqs: [
    {
      question: `What is the best auto-cashout target for beginners?`,
      answer: `1.5x to 2x. A 1.5x target wins roughly 65% of rounds, and a 2x target wins roughly 48%. Both produce enough hits to keep your bankroll relatively stable and give you a long session. Higher targets sound more exciting but drain your bankroll faster between rare wins. Start at 1.5x, and only move up once you are comfortable with the mechanics and your bankroll management is solid.`,
    },
    {
      question: `Does auto-cashout improve your RTP?`,
      answer: `No. Aviator's 97% RTP applies to every cashout target equally, whether automated or manual. Auto-cashout does not change the math; it removes the timing errors and emotional overrides that cause players to lose money faster than the math predicts. The expected return per unit wagered is minus 3% no matter how you cash out.`,
    },
    {
      question: `Can you cancel auto-cashout mid-round?`,
      answer: `Yes, the casino interface includes a Cancel button that disables auto-cashout for the current round. Doing this is almost always a mistake. The urge to cancel usually appears when the multiplier is climbing past your target, which is exactly when the math says to stick with your plan. If you find yourself cancelling regularly, treat it as a tilt signal and end the session.`,
    },
    {
      question: `What is the difference between auto-cashout and auto-bet?`,
      answer: `Auto-cashout controls when your bet exits the round, automatically paying out when the multiplier reaches your target. Auto-bet controls whether a new bet is placed automatically at the start of each round. They are independent features; you can use either without the other. Combining both turns the game into fully unattended auto-play, which is risky because rounds are fast and your bankroll can drain quickly while you are not watching.`,
    },
    {
      question: `Is auto-cashout available at every casino that offers Aviator?`,
      answer: `Yes. Auto-cashout is built into Aviator by Spribe and is part of the game itself, not a casino-side feature. Every casino that runs standard Aviator provides the auto-cashout function. You do not need to verify whether a specific casino supports it before signing up.`,
    },
  ],
};

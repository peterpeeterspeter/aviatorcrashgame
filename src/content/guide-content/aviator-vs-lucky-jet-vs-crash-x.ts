export const guideContent = {
  sections: [
    {
      heading: `Three crash games, one provably fair mechanic`,
      paragraphs: [
        `Aviator, Lucky Jet, and Crash X all do the same thing. A multiplier climbs from 1.00x. You place a bet, you watch the number rise, and you cash out before it crashes. Cash out in time and you win your stake times the multiplier. Wait too long and the round ends and you lose the bet. If you have played one of these, the basic loop of the other two takes about thirty seconds to learn.`,
        `All three also return 97% to players over the long run, which means a 3% house edge on each. That is the single most important number here, and it is identical across the three. So the question is not really which game gives you better odds, because on paper they are tied. The question is how the details around that 97% change what a session actually costs you and how the games feel to play.`,
        `Those details matter more than people assume. Round length differs, the maximum multipliers differ in ways the marketing never quite explains, and one of the three is hard to find outside a single operator. We cover the shared mechanics in our broader <a href="/guides/aviator-vs-jetx-vs-spaceman">crash game comparison</a>, so this guide focuses on what is specific to these three and on the one number that decides your hourly cost.`,
      ],
    },
    {
      heading: `The specs at a glance`,
      paragraphs: [
        `Here are the verified figures. A note on the numbers: RTP and core mechanics are set by the game provider, but maximum bets, payout caps, and even availability are set by the operator. Always confirm the table limits at your specific casino.`,
        `<div style="overflow-x:auto;margin:24px 0"><table style="border-collapse:collapse;width:100%;font-size:0.95rem"><thead><tr style="background:hsl(var(--muted))"><th style="padding:10px;border:1px solid hsl(var(--border));text-align:left">Spec</th><th style="padding:10px;border:1px solid hsl(var(--border));text-align:left">Aviator</th><th style="padding:10px;border:1px solid hsl(var(--border));text-align:left">Lucky Jet</th><th style="padding:10px;border:1px solid hsl(var(--border));text-align:left">Crash X</th></tr></thead><tbody><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Developer</td><td style="padding:10px;border:1px solid hsl(var(--border))"><a href="https://spribe.co/games/aviator" target="_blank" rel="noopener noreferrer">Spribe</a></td><td style="padding:10px;border:1px solid hsl(var(--border))">1Win Games</td><td style="padding:10px;border:1px solid hsl(var(--border))"><a href="https://turbogames.io/game/crash" target="_blank" rel="noopener noreferrer">Turbo Games</a></td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">RTP / house edge</td><td style="padding:10px;border:1px solid hsl(var(--border))">97% / 3%</td><td style="padding:10px;border:1px solid hsl(var(--border))">97% / 3%</td><td style="padding:10px;border:1px solid hsl(var(--border))">97% / 3%</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Max multiplier</td><td style="padding:10px;border:1px solid hsl(var(--border))">Effectively uncapped (operator-set)</td><td style="padding:10px;border:1px solid hsl(var(--border))">~5,072x</td><td style="padding:10px;border:1px solid hsl(var(--border))">Up to ~999,999x (theoretical)</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Typical round length</td><td style="padding:10px;border:1px solid hsl(var(--border))">~10-15s</td><td style="padding:10px;border:1px solid hsl(var(--border))">~10-15s</td><td style="padding:10px;border:1px solid hsl(var(--border))">~5s</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Provably fair</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes (SHA-256)</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes (SHA-256)</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes (SHA-256 two-seed)</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Dual bet</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Auto-cashout</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td><td style="padding:10px;border:1px solid hsl(var(--border))">Yes</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Signature feature</td><td style="padding:10px;border:1px solid hsl(var(--border))">Live in-game chat</td><td style="padding:10px;border:1px solid hsl(var(--border))">Lucky Joe character</td><td style="padding:10px;border:1px solid hsl(var(--border))">Military rank system</td></tr><tr><td style="padding:10px;border:1px solid hsl(var(--border))">Released</td><td style="padding:10px;border:1px solid hsl(var(--border))">2019</td><td style="padding:10px;border:1px solid hsl(var(--border))">December 2021</td><td style="padding:10px;border:1px solid hsl(var(--border))">2021</td></tr></tbody></table></div>`,
        `The row to pay attention to is round length, not max multiplier. The headline max multipliers sound dramatically different, but they are mostly marketing. A 999,999x cap and a 5,072x cap both describe outcomes you will almost certainly never see. The round length, on the other hand, changes your cost every single session, and we break down exactly how below.`,
      ],
    },
    {
      heading: `Aviator: the reference standard`,
      paragraphs: [
        `Aviator is the crash game most people are actually looking for, and there is a reason for that. Spribe released it in 2019, it is carried by almost every casino that stocks crash games at all, and the 97% return is fixed rather than depending on how the operator configures it. The provably fair verification is straightforward and you can check any round yourself, which we walk through in our <a href="/guides/aviator-provably-fair">provably fair guide</a>.`,
        `The dual-bet system is genuinely useful for managing how volatile a session feels. You can run one safe low cashout and one speculative high target in the same round, which is a real option rather than a gimmick. We cover the math behind that in the <a href="/guides/aviator-dual-bet-strategy">dual bet strategy guide</a>. The live chat gives it a social energy that keeps the loop from feeling sterile.`,
        `The honest drawback is not the game. Aviator's popularity makes it the primary target for predictor apps, fake hacks, and signal groups. None of those work, and we show why in our <a href="/guides/aviator-predictor-apps-truth">predictor apps investigation</a>. The game itself is solid, you just have to tune out the scams aimed at its player base.`,
      ],
    },
    {
      heading: `Lucky Jet: the 1Win exclusive`,
      paragraphs: [
        `Lucky Jet is built by 1Win Games and built around a character called Lucky Joe, a jetpack pilot who climbs as the multiplier rises. The math is a close match for Aviator: 97% RTP, a 3% house edge, dual bets, auto-cashout, and SHA-256 provably fair rounds. Released in December 2021, it is the newer of the two and it is the game most associated with the 1Win brand.`,
        `The catch is availability. Lucky Jet is effectively locked to the 1Win ecosystem, so if your casino does not carry 1Win Games titles you cannot play it. Of the operators we recommend, <a href="/go/1xpartners">1xBet</a> is the one that stocks Lucky Jet and the wider set of 1Win-style crash titles. That lock-in is the main reason to pick Lucky Jet over Aviator only if you already play at a 1Win-family operator and want a change of scenery.`,
        `One thing worth saying clearly, because a lot of comparison pages get it wrong: Lucky Jet is not the same game as Jet Lucky or Jet Lucky 2. Those are made by Gaming Corps, a different studio, and they are separate titles. If you read that Lucky Jet is a Gaming Corps game, that source has confused two different releases. Lucky Jet is a 1Win Games product.`,
      ],
    },
    {
      heading: `Crash X: fast rounds, flashy, and pricier per hour`,
      paragraphs: [
        `Crash X comes from Turbo Games and leans into a space-ship aesthetic with a multiplayer feel and a military ranking system that rewards repeat play. The numbers look competitive on the surface: 97% RTP, dual betting, auto-cashout, and a stated maximum multiplier up to roughly 999,999x. The provably fair system uses a standard two-seed SHA-256 setup.`,
        `The headline max multiplier is worth treating with skepticism. A 999,999x cap is a theoretical ceiling, not something you will encounter in normal play. The probability of hitting even a fraction of that is vanishingly small, so it should not factor into which game you choose. We explain why multiplier ceilings mislead players in our <a href="/guides/aviator-multiplier-guide">multiplier and odds guide</a>.`,
        `What actually distinguishes Crash X is speed. Rounds run about five seconds, noticeably faster than the ten-to-fifteen-second pace of Aviator and Lucky Jet. That makes the game feel snappier and more intense, which some players prefer. It also means you expose your bankroll to the house edge far more often per hour, and that has a concrete cost we can calculate.`,
      ],
    },
    {
      heading: `The number nobody else shows: cost per hour`,
      paragraphs: [
        `Hourly expected loss is the figure that decides what a session costs, and almost no comparison page computes it. The math is simple: multiply the number of rounds you play in an hour by your bet size by the house edge. Two games with identical 97% RTP can cost very different amounts per hour if one runs twice as many rounds.`,
        `Take a flat $1 bet as an example. Aviator and Lucky Jet run roughly 250 to 300 rounds an hour at their normal pace. At a 3% house edge, that is $1 times 0.03 times roughly 275 rounds, or about $8.25 expected loss per hour. Crash X, with its roughly five-second rounds, runs 700 to 900 rounds an hour. At the same $1 bet and 3% edge, that is $1 times 0.03 times roughly 800 rounds, or about $24 expected loss per hour. Same return to player, same stake, but Crash X costs around three times as much per hour simply because you play more rounds.`,
        `This is not an argument against Crash X. It is an argument for scaling your bet to the round speed. If you want your hourly cost on Crash X to match Aviator, bet roughly a third as much per round. The faster game is not worse value per round, it just hands you more rounds, and most players bet the same amount without adjusting. We cover the broader budgeting logic in our <a href="/guides/aviator-bankroll-management">bankroll management guide</a>.`,
      ],
    },
    {
      heading: `Where to play each one`,
      paragraphs: [
        `Availability is the practical filter here, because the three games are not equally distributed across casinos. Aviator is the easy one: it is carried by nearly every casino in our reviews, including <a href="/go/cybet">Cybet</a>, <a href="/go/bitstarz">BitStarz</a>, <a href="/go/mirax">Mirax</a>, and <a href="/go/7bit">7Bit</a>. If a casino stocks any crash game, it almost always stocks Aviator.`,
        `Lucky Jet is the hardest to find outside its home ecosystem. It is a 1Win Games title, so you mainly find it at operators carrying that catalogue. <a href="/go/1xpartners">1xBet</a> is the carrier we recommend for Lucky Jet and the related 1Win-style crash variants. If your current casino does not have 1Win Games titles, Lucky Jet will not be there.`,
        `Crash X, as a Turbo Games release, turns up at crypto-focused casinos more often than at mainstream ones. <a href="/go/7bit">7Bit</a> and <a href="/go/betfury">Betfury</a> both carry Turbo Games crash titles alongside Aviator, which lets you try both without opening a new account. Our full operator breakdown is in the <a href="/guides/best-aviator-casinos">best Aviator casinos</a> guide, including the bonus contribution rates that matter if you plan to clear a welcome offer on crash games.`,
      ],
    },
    {
      heading: `How to choose between them`,
      paragraphs: [
        `If availability is your main constraint, Aviator wins by default. It is everywhere, it is well documented, and you will not need to open a specific operator just to play it. For most players, especially newer ones, that makes it the sensible pick. Our <a href="/guides/how-to-play-aviator">how to play Aviator</a> guide covers the basics if you are starting fresh.`,
        `If you want a near-identical alternative to Aviator and you already play at a 1Win-family operator, Lucky Jet is a fair swap. The math is the same and the Lucky Joe character gives it a different feel, but do not switch casinos solely to chase it, because the experience is not different enough to justify the move.`,
        `If you want the fastest, most intense rounds, Crash X is the pick, with one condition: bet down. Halve or third your usual stake to keep your hourly cost in line with the slower games, because the round speed is the real cost driver here. Whatever you choose, the 97% RTP and 3% house edge are the same, so no game makes you a long-term winner. Set a bankroll, use <a href="/guides/aviator-auto-cashout-guide">auto-cashout</a> to remove timing errors, and treat the choice as one of feel and availability rather than odds.`,
      ],
    },
    {
      heading: `A word on risk`,
      paragraphs: [
        `All three of these are negative-expectation games. The 3% house edge is built in, and over enough rounds your results drift toward it regardless of which title you pick or which cashout strategy you use. Faster rounds simply get you there sooner. If gambling stops being fun, or you find yourself chasing losses or raising stakes to recover, that is the signal to stop. <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware</a> offers free, confidential support, and most licensed casinos let you set deposit and session limits in your account settings.`,
      ],
    },
  ],
  faqs: [
    {
      question: `Which of the three has the best odds?`,
      answer: `On paper they are tied. Aviator, Lucky Jet, and Crash X all run at 97% RTP with a 3% house edge. The odds per round are effectively identical. What differs is round speed, which changes your hourly cost rather than your per-round chance. Crash X runs roughly three times as many rounds per hour as Aviator or Lucky Jet, so it costs more per hour at the same stake.`,
    },
    {
      question: `Is Lucky Jet the same as Jet Lucky or Jet Lucky 2?`,
      answer: `No. Lucky Jet is made by 1Win Games and centres on the Lucky Joe jetpack character. Jet Lucky and Jet Lucky 2 are separate titles made by Gaming Corps. A number of comparison pages conflate them, but they are different games from different studios.`,
    },
    {
      question: `Can I play Lucky Jet anywhere other than 1Win?`,
      answer: `Lucky Jet is a 1Win Games title, so it is effectively locked to operators that carry the 1Win Games catalogue. Of the casinos we recommend, 1xBet is the one that stocks Lucky Jet and the related 1Win-style crash titles. If your casino does not carry 1Win Games, Lucky Jet will not be available there.`,
    },
    {
      question: `Which game is cheapest to play per hour?`,
      answer: `At the same bet size, Aviator and Lucky Jet are the cheapest because their rounds run roughly ten to fifteen seconds. Crash X runs about five-second rounds, so you play far more of them per hour and your expected loss is around three times higher on the same stake. To match Aviator's hourly cost on Crash X, bet roughly a third as much per round.`,
    },
    {
      question: `Are all three games provably fair?`,
      answer: `Yes. Aviator, Lucky Jet, and Crash X all use SHA-256 provably fair systems, meaning each round outcome is determined by a hashed server seed and client seed that you can verify after the fact. The verification method is similar across the three, though the exact interface differs by operator.`,
    },
    {
      question: `Does the maximum multiplier matter when choosing?`,
      answer: `Very little. Aviator is effectively uncapped at the game level, Lucky Jet caps near 5,072x, and Crash X advertises up to roughly 999,999x. But these are theoretical ceilings. The probability of reaching even a small fraction of them is extremely low, so a higher cap does not translate into a better expected return or a better choice.`,
    },
  ],
};

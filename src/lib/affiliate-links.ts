export const AFFILIATE_LINKS: Record<string, string> = {
  cybet: "https://cybetplay.com/tluy6cbpp",
  bitstarz: "https://bzstarz1.com/b196c322b",
  "7bit": "https://7bit.partners/p4i4w1udu",
  mirax: "https://mirax.partners/p4fp2iusj",
  trustdice: "https://trustdice.win/?ref=u_peterp",
  betfury: "https://betfury.bet/df1865703",
  "1xpartners": "https://reffpa.com/L?tag=d_4381452m_97c_&site=4381452&ad=97",
};

export function getAffiliateUrl(slug: string): string | null {
  return AFFILIATE_LINKS[slug] ?? null;
}

export function affiliateHref(slug: string): string {
  return `/go/${slug}`;
}

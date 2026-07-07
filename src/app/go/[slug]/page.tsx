import { redirect } from "next/navigation";
import { getAffiliateUrl } from "@/lib/affiliate-links";

export default async function GoRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const url = getAffiliateUrl(slug);

  if (!url) {
    redirect("/casinos");
  }

  redirect(url);
}

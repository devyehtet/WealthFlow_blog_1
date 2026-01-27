import { guides } from "@/content/guides";
import { blogs } from "@/content/blogs";
import { absoluteUrl, siteUrl } from "@/lib/siteUrl";

type FeedItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string; // RFC-2822 string
  guid: string;
};

function escapeXml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const base = siteUrl();

  // Combine guides + blogs into one feed
  const items: FeedItem[] = [
    ...guides.map((g) => ({
      title: g.title,
      link: absoluteUrl(`/guides/${g.slug}`),
      description: g.excerpt,
      pubDate: new Date(g.updatedAt).toUTCString(),
      guid: absoluteUrl(`/guides/${g.slug}`),
    })),
    ...blogs.map((p) => ({
      title: p.title,
      link: absoluteUrl(`/blog/${p.slug}`),
      description: p.excerpt,
      pubDate: new Date(p.updatedAt).toUTCString(),
      guid: absoluteUrl(`/blog/${p.slug}`),
    })),
  ]
    // sort newest first
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    // keep last 50
    .slice(0, 50);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml("WealthFlow")}</title>
    <link>${escapeXml(base)}</link>
    <description>${escapeXml("Personal finance guides, calculators, and money insights.")}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items
      .map(
        (it) => `
    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${escapeXml(it.link)}</link>
      <guid isPermaLink="true">${escapeXml(it.guid)}</guid>
      <pubDate>${escapeXml(it.pubDate)}</pubDate>
      <description>${escapeXml(it.description)}</description>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

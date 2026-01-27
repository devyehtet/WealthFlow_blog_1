export type AffiliateOffer = {
  id: string;
  product: string;
  provider: string;
  country: "US" | "UK" | "Global";
  bestFor: string;
  highlights: string[];
  disclaimer: string;
  ctaLabel: string;
  ctaHref: string; // your outbound tracking link later
  updatedAt: string;
};

export type AffiliateCategory = {
  slug: string;              // page slug
  title: string;             // H1
  excerpt: string;           // intro
  updatedAt: string;
  offers: AffiliateOffer[];
};

export const affiliateCategories: AffiliateCategory[] = [
  {
    slug: "best-savings-accounts",
    title: "Best Savings Accounts (Comparison Guide)",
    excerpt:
      "Compare savings account options by best use case, key benefits, and eligibility. Always verify rates and terms on the provider site.",
    updatedAt: "2026-01-27",
    offers: [
      {
        id: "sav-1",
        product: "High-Yield Savings Account",
        provider: "Provider A",
        country: "US",
        bestFor: "Emergency fund + short-term goals",
        highlights: ["FDIC-insured (if eligible)", "No monthly fees (typical)", "Good for stable savings"],
        disclaimer: "Rates and terms can change. Confirm eligibility and fees on the provider site.",
        ctaLabel: "Check rates",
        ctaHref: "/out/provider-a-savings",
        updatedAt: "2026-01-27",
      },
      {
        id: "sav-2",
        product: "Easy Access Saver",
        provider: "Provider B",
        country: "UK",
        bestFor: "Flexible access without locking funds",
        highlights: ["FSCS protection (if eligible)", "Instant access (typical)", "Simple account setup"],
        disclaimer: "Always confirm AER and access rules on the provider site.",
        ctaLabel: "See details",
        ctaHref: "/out/provider-b-saver",
        updatedAt: "2026-01-27",
      },
    ],
  },
];

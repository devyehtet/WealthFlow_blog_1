import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { absUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absUrl("/"),
  };

  return (
    <html lang={site.language}>
      <body className="min-h-screen text-neutral-900 antialiased">
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

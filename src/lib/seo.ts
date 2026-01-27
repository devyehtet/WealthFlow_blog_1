import { site } from "@/content/site";

export function absUrl(path: string) {
  const base = site.domain.startsWith("http") ? site.domain : `https://${site.domain}`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

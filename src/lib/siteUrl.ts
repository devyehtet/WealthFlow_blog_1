export function siteUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return env.replace(/\/+$/, ""); // remove trailing slash
  // fallback for local dev
  return "http://localhost:3000";
}

export function absoluteUrl(path: string) {
  const base = siteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

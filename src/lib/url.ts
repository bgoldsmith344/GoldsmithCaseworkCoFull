// Internal links are authored as absolute paths ("/quote/"), but the site can
// be deployed under a sub-path (e.g. the GitHub Pages preview at
// /GoldsmithCaseworkCoFull/) as well as at the root (the real domain, via
// Vercel). withBase() prepends whatever base Astro was built with
// (import.meta.env.BASE_URL) so links resolve correctly either way.
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${path}`;
}

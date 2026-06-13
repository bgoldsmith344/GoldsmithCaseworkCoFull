/**
 * Base-aware URL helper.
 *
 * The production site (Netlify, custom domain) is served from the root, so
 * `base` is "/". A GitHub Pages *project* preview is served from a sub-path
 * (e.g. "/GoldsmithCaseworkCoFull/"), so every internal link and asset path
 * must be prefixed with Astro's configured base. Wrap internal paths in
 * `link()` and they work correctly in both places.
 */
const raw = import.meta.env.BASE_URL; // "/" or "/repo/"
const prefix = raw.replace(/\/$/, ''); // "" or "/repo"

export function link(path?: string): string {
  if (!path) return path ?? '';
  // Leave external / protocol / fragment-only links untouched.
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${p}` || '/';
}

/** True if the current pathname matches (or is under) the given internal href. */
export function isActive(pathname: string, href: string): boolean {
  const target = link(href);
  const home = link('/');
  if (target === home) return pathname === home || pathname === `${home}`.replace(/\/$/, '');
  return pathname.startsWith(target);
}

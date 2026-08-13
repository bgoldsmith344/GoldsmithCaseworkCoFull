# CLAUDE.md — Goldsmith Casework Website

> Claude Code reads this at the start of every session.

---

## WHY — what this is

The marketing site for **Goldsmith Casework**, a custom CNC fabrication shop in Petoskey, Michigan (run by Brandon Goldsmith), serving Northern Michigan contractors, builders, and cabinet shops.

**The core pitch:** a contractor sends an architect's drawing or a rough sketch; Goldsmith Casework returns a dimensioned shop drawing for approval; then cuts finished parts that drop straight into place. The competitive moat is the drafting and CAD translation — turning design intent into buildable geometry — not the ownership of a CNC machine.

**Primary audience (~70% of the site's weight):** general contractors, framers, remodelers, and cabinet shops within roughly a 90-minute drive of Petoskey. Often on a phone at a job site — the phone number is reachable in one tap from every screen.

**Secondary audience (~30%):** shop owners and CNC operators nationwide who want consulting on Microvellum, Fusion 360 CAM, nesting strategy, and CAD/CAM workflow. This has its own page (`/consulting/`) and a homepage teaser, but doesn't compete with the fabrication-forward hero.

This supersedes an earlier version of this project (a Microvellum-drafting-only service under the name "Goldsmith Casework Co."). That direction was replaced — the current business fabricates parts, not just drawings.

---

## Source of truth for content

**Do not hardcode business facts into pages or components.** Everything reads from:

- `src/config/site.ts` — phone, email, address, service area, machine specs, materials, file formats, form endpoint. Fields left `null` are genuinely unconfirmed; the convention throughout the codebase is to render a dev-only `[TODO: ...]` marker and omit the element entirely in production — **never fabricate a phone number, address, certification, or years-in-business claim.** See `src/lib/placeholder.ts`.
- `src/content/services/*.md` — the six services (Radius & Curved Components, Cabinet & Casework Parts, Wall Paneling & Millwork, Duct Chases & Enclosures, Templates/Jigs & One-Offs, Shop Drawings). Schema in `src/content/config.ts`. Adding a file adds a page and a card automatically.
- `src/content/projects/*.md` — project gallery entries. Currently empty; the `/projects/` page has a graceful "coming soon" state for this, by design.

**Never write:** testimonials, client names, years in business, project counts, certifications, or awards — none have been supplied. `src/pages/index.astro` has a commented placeholder marking where testimonials go once real ones exist.

---

## Design system

The visual identity is drawn from the subject's own material: the shop drawing. Dimension lines, radius callouts, extension lines, centerlines, mono-spaced annotation.

**Palette** (`src/styles/global.css`, four values used with discipline):
```
--ink       #14181A   near-black graphite, body text and dark sections
--paper     #F3F5F4   cool paper white, default background
--spruce    #1B3A31   deep Northern Michigan pine, dark section fills
--blueline  #3E86A8   drawing-annotation blue — graphics, large elements, focus rings
--amber     #C9992B   plywood edge amber, primary CTAs only — used sparingly
```
`--color-blueline-ink` is a derived, darkened shade of blueline used for **text** (links, spec-tag labels) on light backgrounds — the literal `--blueline` hex is ~3.7:1 on `--paper`, which fails WCAG AA for normal text. Graphics (the arc, centerlines, focus rings, borders) keep the true `--blueline`; anything readable uses `--blueline-ink`. Keep this distinction when adding new text.

**Type:** Archivo (display/headings, self-hosted via Fontsource), IBM Plex Sans (body), IBM Plex Mono (all dimensions, tolerances, file formats, spec tags — the `.spec-tag` utility class). Border radius stays near zero.

**Signature element:** the dimensioned arc (`src/components/Arc.astro`) — an SVG drawn like a page from a shop drawing set, draws in once via `stroke-dashoffset` on load (~900ms), fully rendered immediately under `prefers-reduced-motion`. Used on the homepage hero and the featured Radius & Curved Components service page. Resist adding more orchestrated animation elsewhere — this is the one deliberate moment.

---

## Routes

```
/                                          Home
/services/                                 Services overview
/services/[slug]/                          One per src/content/services entry
  radius-and-curved-components/            The single most commercially important
                                            page — gets extra landing-page treatment
                                            (featured: true in its frontmatter)
/capabilities/                             Machine specs, materials, file formats
/projects/                                 Gallery (thin — survives zero photos)
/consulting/                               Microvellum / Fusion 360 / CNC workflow
/about/
/quote/                                    Primary conversion page — file upload
/contact/
/privacy/  /terms/
```

## The quote form

`src/components/QuoteForm.astro` + `src/lib/forms.ts`. Submits to `site.formEndpoint` (Web3Forms or Formspree — both accept a POSTed `FormData` at a plain URL, no server needed). Real client-side validation with inline errors, honeypot field, visible on-page success state (never a redirect to a blank thank-you page, never a bare form submit that loses input on failure). Swapping providers means changing `site.formEndpoint` and, if needed, `src/lib/forms.ts` — not the form markup.

---

## Stack

Astro 5 (static output) + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`, CSS-first `@theme` config in `src/styles/global.css`) + content collections + `@astrojs/sitemap`. No component library, no animation library, no CMS. Deploy target is Vercel (static); the build output is host-agnostic.

---

## Acceptance criteria (ongoing)

- [x] Multi-page: Home, Services (+ 6 service pages), Capabilities, Projects, Consulting, About, Quote, Contact, Privacy, Terms — persistent Request-a-Quote CTA and tap-to-call phone.
- [x] Fully responsive (360px → desktop); accessible (keyboard nav, visible focus, semantic landmarks, alt text, AA contrast, reduced-motion respected).
- [x] Fonts self-hosted (Fontsource); display weight preloaded; minimal JS.
- [x] All business facts in `src/config/site.ts`; services data-driven from content collections.
- [x] Working, validated quote form with file upload, honeypot, and on-page success state.
- [x] `LocalBusiness`/`Service`/`BreadcrumbList` JSON-LD, sitemap, robots.txt, per-page SEO.
- [ ] Lighthouse ≥ 95 across Performance, Accessibility, Best Practices, SEO — not yet run in this environment (no Lighthouse CLI available); spot-checked manually (contrast, landmarks, alt text, focus states).
- [ ] Real business facts filled into `site.ts` (phone, email, domain, machine specs, form endpoint) — see the checklist in `README.md`.

---

## Environment — Claude Code on the web (browser)

This project is built via Claude Code on the web (cloud sandbox, GitHub-based). Account for that:
- **Repo:** work happens against a connected GitHub repo.
- **Setup commands:** `npm install`, `npm run build` — configure as the repo's SessionStart hook so the sandbox is ready before work begins.
- **Output:** Claude pushes to a branch and opens a pull request — it does not edit `main` directly.
- **Previews:** `.github/workflows/deploy-pages.yml` publishes a GitHub Pages preview on push so the PR's build can be reviewed at a live URL before merging.

## Workflow

Explore → Plan → Implement → Commit. Work in small commits. When a request materially changes the business described here (as happened once already), flag the conflict with the existing site/CLAUDE.md before scaffolding over it, rather than silently overwriting established work.

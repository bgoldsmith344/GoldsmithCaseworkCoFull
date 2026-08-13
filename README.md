# Goldsmith Casework — Website

Marketing site for **Goldsmith Casework** — custom CNC fabrication and shop drawings for builders in Northern Michigan, plus CNC/CAD workflow consulting nationwide. Built with [Astro](https://astro.build) and Tailwind CSS: a fast, multi-page static site that ships almost no JavaScript.

---

## Editing content (no coding needed)

**Every business fact on the site lives in one file:**

```
src/config/site.ts
```

Open it and edit the values. It holds:

- Business name, tagline
- **Contact details** — phone, email, address, hours, service area, insurance
- **Machine specs** — cutting area, material thickness, tolerance
- Materials and file formats the shop accepts
- The form submission endpoint (see "The quote form" below)

Fields left as `null` are things nobody has confirmed yet (a real phone number, for instance). The site is written to **never guess** at these — while a field is `null`, the site quietly hides whatever depends on it (or shows a `[TODO: ...]` marker, but only when you run it locally in dev mode; that marker never appears on the live site). Fill in a value and it appears everywhere automatically — header, footer, every page that mentions it.

### Editing the services

The six service pages (Radius & Curved Components, Cabinet & Casework Parts, etc.) are Markdown files in:

```
src/content/services/
```

Each file has a block of details at the top (`whoFor`, `problem`, `whatToSend`, etc.) and the main description as plain text below. Edit either. To add a new service, copy one of these files, give it a new filename (that becomes its URL), and fill in its details — it'll show up on the Services page and homepage automatically.

### Adding project photos

```
src/content/projects/
```

is currently empty — the Projects page shows a "coming soon" message until files are added here. To add a project, create a Markdown file with a title and short summary (follow the pattern in `src/content/config.ts`).

---

## Running it on your computer

You need [Node.js](https://nodejs.org) (version 22 or newer) installed once.

```bash
npm install        # first time only — downloads dependencies
npm run dev        # start a live preview at http://localhost:4321
```

Leave `npm run dev` running and edit files; the browser updates automatically. Press `Ctrl+C` to stop.

```bash
npm run build      # produce the final site in the dist/ folder
npm run preview    # preview that finished build locally
```

---

## Before this goes live — a checklist

Everything below is a placeholder in `src/config/site.ts` today. None of it is guessed — confirm each one before launch:

- [ ] **Phone number** (`phone` / `phoneHref`) — the primary audience is on job sites; this needs to be real and correct.
- [ ] **Email** (`email`)
- [ ] **Domain** (`domain`) — also update `astro.config.mjs`'s fallback and `public/robots.txt`.
- [ ] **Address details** (`address.zip`, `address.street` if it should be public)
- [ ] **Hours** (`hours`)
- [ ] **Insurance status** (`insured`) — matters to GCs
- [ ] **Machine specs** (`machine.*`) — cutting area, max thickness, tolerance, make/model
- [ ] **Quote form endpoint** (`formEndpoint`) — see below
- [ ] Real Open Graph / social share image (currently a placeholder SVG at `public/images/og-default.svg`)
- [ ] A real logo (currently a text wordmark)

## The quote form

The `/quote/` and other forms POST to whatever URL is set as `formEndpoint` in `src/config/site.ts`. Until that's set, forms still render and validate, but show a message asking visitors to email you directly instead of failing silently.

Two services work with zero backend, and either is a straightforward account signup:

- **[Web3Forms](https://web3forms.com)** — free, supports file uploads, no account needed beyond an access key sent to your email. Set `formEndpoint` to `https://api.web3forms.com/submit` and add your access key as a hidden field in `src/components/QuoteForm.astro`, or follow Web3Forms' docs for passing the key another way.
- **[Formspree](https://formspree.io)** — free tier, supports file uploads. Set `formEndpoint` to the form URL Formspree gives you (`https://formspree.io/f/xxxxxxx`).

The integration point is a single function in `src/lib/forms.ts` — swapping providers, or moving to a custom backend later, means changing that one file.

A honeypot field filters basic spam automatically.

---

## Deploying

Built for **[Vercel](https://vercel.com)**, but the output is a plain static site (`npm run build` → `dist/`) that works on any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.) with no server runtime required.

### Vercel
1. Sign in to Vercel and **Import Project** from this GitHub repository.
2. Vercel auto-detects Astro — build command `astro build`, output directory `dist`. Click **Deploy**.
3. **Settings → Domains** → add your domain and follow the DNS steps Vercel shows you.
4. Every push to the production branch redeploys automatically.

### GitHub Pages preview
`.github/workflows/deploy-pages.yml` builds and publishes a preview to GitHub Pages on push, so a pull request's changes can be reviewed at a live URL before merging to `main`. This is a preview convenience only — the real deploy target is Vercel (or whatever static host you choose).

---

## Project structure (for reference)

```
src/
  config/site.ts       ← all business facts (start here)
  content/
    services/           ← one Markdown file per service
    projects/            ← project gallery entries (empty until photos exist)
    posts/                ← blog, scaffolded and empty
    config.ts            ← content collection schemas
  styles/global.css    ← design tokens (palette, type scale), Tailwind config
  components/          ← reusable building blocks (header, footer, arc graphic, form…)
  layouts/Base.astro   ← the page shell (head tags, header, footer)
  lib/                 ← shared helpers (nav links, JSON-LD schema, form submission)
  pages/                ← one file/folder per route
public/                 ← favicon, robots.txt, placeholder images (served as-is)
```

---

## Notes

- Fonts (Archivo, IBM Plex Sans, IBM Plex Mono) are **self-hosted** via Fontsource — no Google Fonts request.
- The site is fully responsive (360px and up), keyboard-accessible, and respects "reduce motion" settings.
- SEO: per-page titles/descriptions, a sitemap (`sitemap-index.xml`, generated automatically), and `LocalBusiness`/`Service`/`BreadcrumbList` structured data are wired up — all populated from `src/config/site.ts`.
- No testimonials, client names, project counts, or years-in-business claims appear anywhere — none were supplied, and the site doesn't invent them. A commented placeholder in `src/pages/index.astro` marks where testimonials can go once there are real ones.

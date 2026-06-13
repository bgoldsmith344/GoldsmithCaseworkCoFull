# Goldsmith Casework Co. — Website

Marketing site for **Goldsmith Casework Co. LLC** — Microvellum drafting & engineering for cabinet and millwork shops. Built with [Astro](https://astro.build): a fast, multi-page static site that ships almost no JavaScript.

---

## Editing content (no coding needed)

**Almost everything you'll want to change lives in one file:**

```
src/content/site.ts
```

Open it and edit the text between the quotes. It holds:

- Business name, tagline, and SEO description
- **Contact details** — email, phone, location, software stack line
- The **services** list (add/reorder by editing the array)
- The **"How it works"** steps and **"Why Goldsmith"** points
- The **Work / portfolio** items
- The **FAQ** questions and answers
- The quote-form dropdown options
- Empty slots for **testimonials, client logos, and credentials** — add items and those sections appear automatically

After editing, save the file. If the preview is running you'll see changes instantly.

### Things marked PLACEHOLDER — confirm before launch
Search the project for the word `PLACEHOLDER`. The main ones:
- **Email** `brandon@goldsmithcasework.com` — confirm or change in `src/content/site.ts`.
- **Phone** `(000) 000-0000` — put a real number, or set `phone` to `null` to hide it everywhere.
- **Domain** `goldsmithcasework.com` — set in `src/content/site.ts` and `astro.config.mjs`.

### Swapping the placeholder images
The diagonal-striped images are placeholders in `public/images/` (and `public/images/work/`).
To use a real photo or drawing:
1. Drop your image file into `public/images/` (e.g. `hero.jpg`).
2. Update the matching path — hero/portrait paths are in the page files (`src/components/Hero.astro`, `src/pages/about.astro`); work images are in `src/content/site.ts`.
JPG, PNG, WebP, AVIF, and SVG all work. Keep the descriptive `alt` text accurate.

The favicon and social-share image are `public/favicon.svg` and `public/images/og-placeholder.svg` — replace these once final artwork exists.

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

## Publishing it (Netlify)

The site is set up to deploy on **Netlify**, connected to this GitHub repository.

1. Sign in to [Netlify](https://www.netlify.com) and choose **Add new site → Import an existing project**.
2. Connect this GitHub repository.
3. Netlify reads `netlify.toml` automatically — build command `npm run build`, publish directory `dist`. Just click **Deploy**.
4. Every time changes are pushed to the production branch, Netlify rebuilds and publishes automatically.

### Custom domain
In Netlify: **Domain settings → Add a domain** → enter `goldsmithcasework.com` and follow the DNS steps Netlify shows you.

### The contact / quote form
The form uses **Netlify Forms** — no extra setup or account needed. Once the site is live on Netlify:
- Submissions appear under **Forms** in your Netlify dashboard (the form is named `quote`).
- Turn on email notifications: **Site settings → Forms → Form notifications → Add notification → Email**, and enter the address that should receive leads.
- A hidden honeypot field filters basic spam automatically.

Submitting the form sends visitors to the **Thank-you** page (`/thanks`).

---

## Project structure (for reference)

```
src/
  content/site.ts     ← all editable text & data (start here)
  styles/             ← colors, fonts, spacing (tokens.css) and base styles
  components/         ← reusable building blocks (header, footer, cards, form…)
  layouts/Base.astro  ← the page shell (head tags, header, footer)
  pages/              ← one file per page: index, services, work, about, faq, contact
public/               ← images, favicon, robots.txt (served as-is)
```

---

## Notes
- Fonts (Inter + Sora) are **self-hosted** — no Google Fonts request, faster and private.
- The site is fully responsive, keyboard-accessible, and respects "reduce motion" settings.
- SEO: per-page titles/descriptions, a sitemap, and structured data are generated automatically.

# CLAUDE.md — Goldsmith Casework Co. Website

> Drop this in the project root as `CLAUDE.md`. Claude Code reads it at the start of every session.

---

## WHY — what this is

The marketing website for **Goldsmith Casework Co. LLC** — a Microvellum drafting & engineering service run by Brandon Goldsmith out of Petoskey, Michigan. The business produces shop drawings, CNC programming/nesting, and Microvellum product libraries for cabinet and millwork shops doing high-end residential and commercial casework.

**Job of the site:** get shop owners and millwork firms to request a quote / make contact. It must read as an established, trustworthy specialist partner — the kind of outfit a shop hands its overflow to without worrying.

**Audience:** owners and project managers at cabinet & millwork shops, commercial millwork firms needing drafting/engineering capacity, GCs.

---

## VISUAL REFERENCE — match this site

Brandon wants the look and feel to closely follow **https://customwoodmachining.com/**.

**Before designing anything, open that URL and study it directly.** Sample and reproduce, adapted to Brandon's brand:
- The **color palette** (pull the actual hex values from the live CSS).
- The **typography** — font families, weights, heading scale, body size/line-height.
- The **section rhythm and spacing** — how it stacks hero → what-we-do → services → about → expertise → reassurance → contact.
- The **clean, professional, photo-forward feel.** It's calm and corporate, not flashy. Generous whitespace, full-width section bands, simple iconography, the animated service tiles.
- The **partnership tone** in its copy — reassuring and plain-spoken, e.g. "we take care of the drafting process for you," "looks as if your team produced it." Brandon's copy below is written in that same register.

Match the *feel and structure*, not the content. Do **not** copy CWM's text, images, or logo — it's a competitor. Brandon's brand and copy are below and must stay distinct.

**If the reference site is unreachable** (the cloud sandbox blocks the domain, or fetch fails): do NOT stall. Fall back to this direction and tell Brandon you used it because the reference couldn't be loaded — a deep professional blue or charcoal primary with a warm wood-tone accent; a clean humanist sans for body; a slightly heavier sans for headings; generous whitespace; calm, corporate, photo-forward. Confirm with Brandon at the plan stage.

---

## WHAT — the build

A clean, **multi-page** static marketing site mirroring the reference's structure:

**Pages:** Home · Services · About · FAQ · Contact (with a prominent "Request a Quote" CTA throughout, like the reference).

Requirements:
- Component-based, easy to edit, responsive, accessible, fast.
- All **copy and contact details** in one editable content/config file so non-code edits are trivial.
- **Services** and **expertise/sectors** are data-driven (array → cards), so items can be added or reordered without touching markup.
- Any imagery is a clearly-marked placeholder with an easy swap path (Brandon will supply real drawings/photos later).

### Recommended stack
**Astro** — ideal for a multi-page, content-driven static site; ships almost no JS; trivial to deploy. Plain **Vite + vanilla** is acceptable. No heavy SPA framework. Confirm the choice with Brandon before scaffolding.

### Deploy
**Cloudflare Pages** or **Netlify**, Git-connected, custom domain `goldsmithcasework.com`, redeploy on push to `main`. Include a `README.md` with run/build/deploy steps written for a non-developer.

---

## Page-by-page content (authoritative — use this copy)

### Home
- **Hero headline:** Expert Microvellum Drafting & Engineering for Casework Shops
- **Hero subline:** Goldsmith Casework Co. delivers production-ready shop drawings, CNC programming, and Microvellum libraries — built to your standards, ready for the floor.
- **Primary CTA:** Request a Quote
- **What We Do:** We take the drafting and engineering off your plate so your team can keep building. Send us your Microvellum data, templates, and methods, and we deliver drawings that look like your own shop produced them — submittals, redlines, and field-verified adjustments included. Want your drawings to run cleaner on the machine? We help with that too. *(button: Get Started)*
- **Services teaser (3 tiles, link to Services):** Microvellum Drafting · Microvellum Engineering · Library & Template Setup
- **About teaser:** Nine years across the full casework lifecycle — drafting, engineering, library development, and CNC production. Brandon has run the saw, the edgebander, and the machine, not just the software, so the drawings account for how a shop actually builds. *(button: About Goldsmith)*
- **"You can count on us for" checklist:** On-time delivery · Production-ready shop drawings · Deep Microvellum knowledge · Tips to improve your drafting process · High-end residential precision · US-based, real-time communication
- **Contact band:** Let's talk about your next run. *(button: Contact Us)*

### Services
Intro line + three detailed blocks:
1. **Microvellum Drafting** — AWI premium-grade submittal and production shop drawings produced from your templates and standards. Submittals, redlines, field-verify adjustments.
2. **Microvellum Engineering** — CNC programming and optimized nesting tuned to your machine, tooling, and material; cut lists and machining generated from one parametric source.
3. **Library & Template Setup** — product library development, standardization, template setup, post-processor work, cleanup, and migration (incl. INNERGY integration) so your data flows end to end.
Also mention: **fractional/retainer capacity** for ongoing overflow, and **one-off project support** on the client's deadline. Page ends with a Request a Quote CTA.

### About
Brandon Goldsmith founded Goldsmith Casework Co. to give cabinet and millwork shops a US-based drafting and engineering partner they can trust with high-end work. With nine years across the full lifecycle — drafting, engineering, library development, and hands-on CNC production — he brings both the software fluency and the shop-floor reality most drafting services lack. Based in Petoskey, Michigan; working with shops nationwide. Emphasize: high-end residential eye, native-English/real-time communication, quality over offshore price.

### FAQ
Seed with: What software do you work in? (Microvellum/Toolbox, AutoCAD, BricsCAD) · Do you work in our templates and standards? (yes) · How do we send you our data? · What's your turnaround? · Do you do submittals and redlines? (yes) · Do you offer ongoing/retainer capacity? (yes) · Where are you located? (Petoskey, MI — US-based, work nationwide). Brandon to refine answers.

### Contact
Name, email, phone, project description; prominent "Request a Quote." Show studio location (Petoskey, Michigan — US) and the stack line: Microvellum / Toolbox · AutoCAD · BricsCAD.

---

## PLACEHOLDERS — flag these, don't invent values
- Email -> `brandon@goldsmithcasework.com` (confirm before launch)
- Phone -> `(000) 000-0000` (real number, or omit)
- Logo -> text-based wordmark placeholder until a real logo exists
- Service tile imagery + any photos -> placeholders with an easy swap path
- Real `<meta>`/Open Graph tags, favicon, OG image once assets exist
- Contact form: wire to a simple handler (Formspree, Netlify Forms, or Cloudflare) — confirm which with Brandon

---

## Acceptance criteria
- [ ] Look and feel clearly match the reference site's direction (palette, type, spacing, section rhythm sampled from the live site).
- [ ] Multi-page: Home, Services, About, FAQ, Contact, with persistent Request-a-Quote CTA.
- [ ] Fully responsive (360px -> desktop); accessible (keyboard nav, visible focus, semantic landmarks, alt text, AA contrast, reduced-motion respected).
- [ ] Lighthouse >= 95 across Performance, Accessibility, Best Practices, SEO.
- [ ] Fonts self-hosted; minimal JS; no render-blocking.
- [ ] Copy + contact details + services/sectors data in one editable place.
- [ ] Working contact form.
- [ ] `README.md` explains run / build / deploy for a non-developer.
- [ ] Deploys to Cloudflare Pages or Netlify on push to `main`.
- [ ] No CWM text, images, or logo reused — brand and copy are distinct.

## Environment — Claude Code on the web (browser)

This project is built via Claude Code on the web (cloud sandbox, GitHub-based), not a local terminal. Account for that:
- **Repo:** the work happens against a connected GitHub repo. This file and any reference assets live in that repo.
- **Network access:** the sandbox restricts outbound network by default. For this build, the following must be allowed in the environment's network/trusted-domains config: `customwoodmachining.com` (to sample the reference design), the chosen framework's package registry (npm), and any font sources. If a domain isn't allowed, work from the fallback direction in the Visual Reference section rather than stalling.
- **Setup commands:** define the project's install/build steps (e.g. `npm install`, `npm run build`) as the repo's setup/SessionStart configuration so the sandbox is ready before work begins.
- **Output:** Claude pushes to a new branch and opens a pull request — it does not edit `main` directly. Review the PR, then merge.
- **Previews:** enable GitHub Pages or Cloudflare Pages on the branch/repo so the built site can be previewed from the PR before merging.

## Workflow
Follow Explore -> Plan -> Implement -> Commit. First, open the reference URL and the content above, then propose stack + file structure + the palette/type you extracted, and wait for Brandon's approval before scaffolding. Work in small commits.

/**
 * site.ts — SINGLE EDITABLE SOURCE OF TRUTH
 * ------------------------------------------------------------------
 * All copy, contact details, and data-driven lists live here so that
 * non-code edits are trivial. Change text or add/reorder array items
 * and the pages update automatically — no markup changes required.
 *
 * Items marked PLACEHOLDER must be confirmed before launch.
 */

export const site = {
  name: 'Goldsmith Casework Co.',
  legalName: 'Goldsmith Casework Co. LLC',
  shortName: 'Goldsmith Casework',
  tagline: 'Expert Microvellum Drafting & Engineering for Casework Shops',
  description:
    'Goldsmith Casework Co. delivers production-ready Microvellum shop drawings, CNC programming, and product libraries for cabinet and millwork shops — built to your standards, ready for the floor.',
  domain: 'https://goldsmithcasework.com', // PLACEHOLDER: confirm final domain

  contact: {
    // PLACEHOLDER: confirm before launch
    email: 'brandon@goldsmithcasework.com',
    // PLACEHOLDER: real number, or set to null to hide phone everywhere
    phone: '(000) 000-0000',
    location: 'Petoskey, Michigan — US',
    region: 'MI',
    locality: 'Petoskey',
    country: 'US',
    // The software stack line shown on Contact + Footer
    stack: 'Microvellum / Toolbox · AutoCAD · BricsCAD',
    // Reassurance shown near the quote form
    responseTime: 'We typically reply within one business day.',
    confidentiality:
      'Your data, templates, and standards stay confidential. NDAs are welcome.',
  },

  owner: {
    name: 'Brandon Goldsmith',
    role: 'Founder & Lead Drafter / Engineer',
    yearsExperience: 9,
  },
} as const;

/** Primary navigation. The CTA is rendered persistently in the header/footer. */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const cta = {
  label: 'Request a Quote',
  href: '/contact',
};

/** ---------------------------------------------------------------- HOME */
export const home = {
  hero: {
    headline: 'Expert Microvellum Drafting & Engineering for Casework Shops',
    subline:
      'Goldsmith Casework Co. delivers production-ready shop drawings, CNC programming, and Microvellum libraries — built to your standards, ready for the floor.',
    primaryCta: cta,
    secondaryCta: { label: 'See our work', href: '/work' },
  },
  whatWeDo: {
    title: 'What we do',
    body: 'We take the drafting and engineering off your plate so your team can keep building. Send us your Microvellum data, templates, and methods, and we deliver drawings that look like your own shop produced them — submittals, redlines, and field-verified adjustments included. Want your drawings to run cleaner on the machine? We help with that too.',
    cta: { label: 'Get Started', href: '/contact' },
  },
  servicesTeaser: {
    title: 'How we help your shop',
    intro: 'Three ways we plug into your production — pick one, or hand us the whole pipeline.',
  },
  aboutTeaser: {
    title: 'Built by someone who has run the machine',
    body: 'Nine years across the full casework lifecycle — drafting, engineering, library development, and CNC production. Brandon has run the saw, the edgebander, and the machine, not just the software, so the drawings account for how a shop actually builds.',
    cta: { label: 'About Goldsmith', href: '/about' },
  },
  checklist: {
    title: 'You can count on us for',
    items: [
      'On-time delivery',
      'Production-ready shop drawings',
      'Deep Microvellum knowledge',
      'Tips to improve your drafting process',
      'High-end residential precision',
      'US-based, real-time communication',
    ],
  },
  contactBand: {
    title: "Let's talk about your next run.",
    cta: { label: 'Contact Us', href: '/contact' },
  },
};

/** ---------------------------------------------------------------- SERVICES
 * Drives both the Home teaser tiles and the detailed Services page blocks.
 */
export const services = [
  {
    slug: 'microvellum-drafting',
    title: 'Microvellum Drafting',
    icon: 'drafting',
    summary:
      'AWI premium-grade submittal and production shop drawings, produced in your templates and standards.',
    details:
      'AWI premium-grade submittal and production shop drawings produced from your templates and standards. We handle submittals, redlines, and field-verify adjustments — delivered so they read as if your own team drew them.',
  },
  {
    slug: 'microvellum-engineering',
    title: 'Microvellum Engineering',
    icon: 'engineering',
    summary:
      'CNC programming and optimized nesting tuned to your machine, tooling, and material.',
    details:
      'CNC programming and optimized nesting tuned to your machine, tooling, and material. Cut lists and machining are generated from one parametric source, so what gets drawn is what runs on the floor.',
  },
  {
    slug: 'library-template-setup',
    title: 'Library & Template Setup',
    icon: 'library',
    summary:
      'Product library development, standardization, templates, post-processors, cleanup, and migration.',
    details:
      'Product library development, standardization, template setup, post-processor work, cleanup, and migration (including INNERGY integration) so your data flows end to end — from order to optimized output.',
  },
];

export const servicesPage = {
  intro:
    'Whether you need overflow capacity for a busy season or a long-term drafting and engineering partner, we work in your standards and on your deadline.',
  engagement: {
    title: 'Flexible engagement',
    body: 'Need steady help? We offer fractional / retainer capacity for ongoing overflow. Have a single deadline to hit? We take on one-off project support and deliver on your timeline.',
  },
};

/** ---------------------------------------------------------------- HOW IT WORKS */
export const process = [
  {
    step: 1,
    title: 'Send your data & standards',
    blurb:
      'Share your Microvellum data, templates, and methods — plus any submittal standards or shop preferences.',
  },
  {
    step: 2,
    title: 'We draft in your templates',
    blurb:
      'We produce drawings and engineering in your style, so the output looks like it came from your own shop.',
  },
  {
    step: 3,
    title: 'Review, redlines & field-verify',
    blurb:
      'You review; we fold in redlines and field-verified adjustments quickly, with real-time US-based communication.',
  },
  {
    step: 4,
    title: 'Production-ready files',
    blurb:
      'You get clean submittals and machining that run on your floor — on time and to spec.',
  },
];

/** ---------------------------------------------------------------- WHY GOLDSMITH */
export const differentiators = [
  {
    title: 'Shop-floor reality, not just software',
    blurb:
      'Brandon has run the saw, the edgebander, and the CNC. The drawings account for how a shop actually builds — not just how the model looks.',
  },
  {
    title: 'US-based, real-time communication',
    blurb:
      'Native-English, same-workday turnaround on questions and redlines. No overnight lag, no lost-in-translation rework.',
  },
  {
    title: 'High-end residential precision',
    blurb:
      'An eye trained on premium casework. Tight tolerances and clean detailing where it counts.',
  },
  {
    title: 'Quality over offshore price',
    blurb:
      'We compete on getting it right the first time, so your team spends less time fixing drawings and more time building.',
  },
];

/** ---------------------------------------------------------------- ABOUT */
export const about = {
  title: 'About Goldsmith Casework Co.',
  lead: 'A US-based Microvellum drafting and engineering partner cabinet and millwork shops can trust with high-end work.',
  body: [
    'Brandon Goldsmith founded Goldsmith Casework Co. to give cabinet and millwork shops a US-based drafting and engineering partner they can trust with high-end work.',
    'With nine years across the full lifecycle — drafting, engineering, library development, and hands-on CNC production — he brings both the software fluency and the shop-floor reality most drafting services lack.',
    'Based in Petoskey, Michigan, and working with shops nationwide. The focus is a high-end residential eye, native-English and real-time communication, and quality over offshore price.',
  ],
};

/** ---------------------------------------------------------------- FAQ
 * Seeded from the brief — Brandon to refine answers.
 */
export const faq = [
  {
    q: 'What software do you work in?',
    a: 'Microvellum / Toolbox, AutoCAD, and BricsCAD.',
  },
  {
    q: 'Do you work in our templates and standards?',
    a: 'Yes. We draft in your templates and to your standards so the output reads as if your own shop produced it.',
  },
  {
    q: 'How do we send you our data?',
    a: 'Send us your Microvellum data, templates, and methods however is easiest for your team — we will confirm a secure, simple handoff that fits your workflow.',
  },
  {
    q: "What's your turnaround?",
    a: 'It depends on scope, but we work to your deadline and communicate in real time so there are no surprises. Tell us your timeline and we will confirm what we can hit.',
  },
  {
    q: 'Do you do submittals and redlines?',
    a: 'Yes — submittals, redlines, and field-verified adjustments are all part of what we deliver.',
  },
  {
    q: 'Do you offer ongoing or retainer capacity?',
    a: 'Yes. We offer fractional / retainer capacity for ongoing overflow, as well as one-off project support.',
  },
  {
    q: 'Where are you located?',
    a: 'Petoskey, Michigan. We are US-based and work with shops nationwide.',
  },
];

/** ---------------------------------------------------------------- WORK / PORTFOLIO
 * Placeholder items now — swap `image` for real drawing exports later
 * (drop files in /public/images/work/ and update the path + alt text).
 */
export const work = {
  intro:
    'A sampling of the kind of drawings and engineering we deliver. Real project files coming soon — these are placeholders.',
  items: [
    {
      title: 'Premium residential kitchen — submittal set',
      category: 'Drafting',
      image: '/images/work/placeholder-1.svg',
      alt: 'Placeholder for a residential kitchen submittal drawing set',
      caption: 'Full submittal package produced in the client’s templates.',
    },
    {
      title: 'Commercial casework — production drawings',
      category: 'Drafting',
      image: '/images/work/placeholder-2.svg',
      alt: 'Placeholder for a commercial casework production drawing',
      caption: 'Production-ready shop drawings for a millwork firm.',
    },
    {
      title: 'CNC nesting & machining',
      category: 'Engineering',
      image: '/images/work/placeholder-3.svg',
      alt: 'Placeholder for an optimized CNC nesting layout',
      caption: 'Optimized nesting tuned to the shop’s machine and material.',
    },
    {
      title: 'Microvellum product library',
      category: 'Library',
      image: '/images/work/placeholder-4.svg',
      alt: 'Placeholder for a Microvellum product library setup',
      caption: 'Standardized parametric library for repeatable output.',
    },
  ],
};

/** ---------------------------------------------------------------- TRUST SLOTS
 * Empty for now. Add items and the sections appear automatically.
 */
export const testimonials: { quote: string; author: string; company?: string }[] = [];
export const clients: { name: string; logo?: string }[] = [];
export const credentials: { label: string; detail?: string }[] = [];

/** ---------------------------------------------------------------- QUOTE FORM */
export const quoteForm = {
  title: 'Request a Quote',
  intro:
    'Tell us about your shop and your next run. The more detail you share, the faster we can give you a useful answer.',
  fields: {
    software: ['Microvellum / Toolbox', 'AutoCAD', 'BricsCAD', 'Other / not sure'],
    projectType: ['High-end residential', 'Commercial millwork', 'Mixed', 'Other'],
    timeline: ['ASAP / rush', 'Within 2 weeks', 'This month', 'Ongoing / retainer', 'Just exploring'],
    scope: ['Drafting', 'Engineering / CNC', 'Library & templates', 'Not sure yet'],
  },
};

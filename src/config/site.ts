// Every business fact on the site reads from this file. Update values here —
// never hardcode a phone number, address, or spec into a page or component.
//
// Fields left `null` are unconfirmed. Don't guess at them. Components that
// render a null field should show a dev-only placeholder (see
// `src/lib/placeholder.ts`) and omit the element entirely in production.

export interface SiteConfig {
  legalName: string | null;
  displayName: string;
  tagline: string;
  phone: string | null;
  phoneHref: string | null;
  email: string | null;
  domain: string;
  address: {
    city: string;
    state: string;
    zip: string | null;
    street: string | null;
    showStreetAddress: boolean;
  };
  serviceArea: readonly string[];
  serviceRadiusNote: string;
  hours: string | null;
  insured: boolean | null;
  machine: {
    make: string | null;
    model: string | null;
    cuttingArea: string | null;
    maxMaterialThickness: string | null;
    spindle: string | null;
    tolerance: string | null;
  };
  materials: readonly string[];
  fileFormats: readonly string[];
  showPricing: boolean;
  social: Readonly<Record<string, string>>;
  formEndpoint: string | null;
}

export const site: SiteConfig = {
  // TODO: confirm exact LLC name as registered before this goes live in legal
  // copy (Terms/Privacy) or LocalBusiness schema.
  legalName: null,
  displayName: "Goldsmith's Casework",
  tagline: "Custom CNC cutting and shop drawings for builders in Northern Michigan.",

  // TODO: real phone number. Must be reachable in one tap from every screen
  // once set — do not launch without it.
  phone: null,
  phoneHref: null,

  // TODO: confirm inbox before launch.
  email: null,

  // TODO: confirm registered domain.
  domain: "goldsmithscasework.com",

  address: {
    city: "Petoskey",
    state: "MI",
    zip: null, // TODO
    street: null, // TODO — leave null if home-based / not public
    showStreetAddress: false,
  },

  serviceArea: [
    "Petoskey",
    "Harbor Springs",
    "Charlevoix",
    "Boyne City",
    "Gaylord",
    "Traverse City",
    "Cheboygan",
  ],

  // The brief describes the primary audience as "within roughly a 90-minute
  // drive" rather than a fixed mile radius — kept as prose, not a fabricated
  // mileage figure, until Brandon gives an exact number.
  serviceRadiusNote: "within about a 90-minute drive of Petoskey",

  hours: null, // TODO
  insured: null, // TODO — set true/false once confirmed; it matters to GCs

  machine: {
    make: null, // TODO
    model: null, // TODO
    cuttingArea: null, // TODO — e.g. 5' x 10'
    maxMaterialThickness: null, // TODO
    spindle: null, // TODO
    tolerance: null, // TODO — e.g. ±0.010"
  },

  materials: ["Plywood", "MDF", "Hardwood", "HDPE", "Acrylic"],
  fileFormats: ["DXF", "DWG", "STEP", "PDF", "SKP", "Microvellum", "F3D"],

  showPricing: false,

  social: {},

  // TODO: Web3Forms access key or Formspree endpoint. See src/lib/forms.ts.
  formEndpoint: null,
};

import { site } from "@/config/site";

const siteUrl = (path: string) => `https://${site.domain}${path}`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.legalName ?? site.displayName,
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    url: siteUrl("/"),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      ...(site.address.showStreetAddress && site.address.street
        ? { streetAddress: site.address.street }
        : {}),
      ...(site.address.zip ? { postalCode: site.address.zip } : {}),
      addressCountry: "US",
    },
    areaServed: site.serviceArea.map((town) => ({
      "@type": "City",
      name: town,
    })),
    description: site.tagline,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: siteUrl(opts.path),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.legalName ?? site.displayName,
    },
    areaServed: site.serviceArea.map((town) => ({
      "@type": "City",
      name: town,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  };
}

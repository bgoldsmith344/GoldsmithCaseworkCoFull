import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    // Short line used on cards and <select> options.
    summary: z.string(),
    // Mono spec tag shown on the card, e.g. "SVC-01" or "R 6\"–96\"".
    specTag: z.string(),
    order: z.number(),
    // The single most commercially important page gets extra landing-page
    // sections (see src/pages/services/[slug].astro).
    featured: z.boolean().default(false),
    whoFor: z.array(z.string()),
    problem: z.string(),
    whatToSend: z.array(z.string()),
    related: z.array(z.string()).default([]),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    service: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { services, projects, posts };

import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["devops", "flutter"]),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
  }),
});

// Standalone pages listed under the silent /pages route.
const custom = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    icon: z.string().optional(),
    hero: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          icon: z.string().optional(),
        })
      )
      .optional(),
    screenshots: z.array(z.string()).optional(),
  }),
});

export const collections = {
  project,
  custom,
};

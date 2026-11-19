import { defineCollection, z } from "astro:content";

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    category: z.enum(["devops", "flutter"]),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    video: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    storeUrl: z.string().url().optional(),
    status: z.string().optional(),
    diagram: z
      .object({
        src: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      })
      .optional(),
  }),
});

// Content collections for project case studies and writing.
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  project,
  blog,
};

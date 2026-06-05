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


export const collections = {
  project, 
};

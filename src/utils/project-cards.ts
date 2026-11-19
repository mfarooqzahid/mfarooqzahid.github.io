import type { CollectionEntry } from "astro:content";
import type { Project } from "../data/projects";

export function toProjectCard(entry: CollectionEntry<"project">): Project {
  return {
    title: entry.data.title,
    type: entry.data.category === "devops" ? "DevOps" : "Mobile",
    description: entry.data.description,
    stack: entry.data.technologies.join(", "),
    status: entry.data.status,
    detailUrl: `/projects/${entry.slug}/`,
  };
}

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every Markdown file in src/content/projects/ becomes a project card + its own page.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one or two sentences shown on the card
      category: z.enum(["Project", "Course Project"]).default("Project"),
      period: z.string().optional(), // e.g. "Aug – Nov 2024"
      course: z.string().optional(), // e.g. "Artificial Intelligence (CSL3090)"
      tags: z.array(z.string()).default([]),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      image: image().optional(), // path relative to the .md file
      featured: z.boolean().default(false), // show on the home page
      order: z.number().default(100), // lower = shown first
      draft: z.boolean().default(false), // true = hidden from the site
    }),
});

export const collections = { projects };

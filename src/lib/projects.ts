import { getCollection } from "astro:content";

/** All published projects, sorted by `order` (then title). */
export async function getProjects() {
  const all = await getCollection("projects", ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

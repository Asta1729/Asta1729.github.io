# asta1729.github.io

Personal portfolio of Nirupam Punna, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
```

## Add a project

1. Create a Markdown file in `src/content/projects/`, e.g. `my-project.md`. The file name becomes the URL
   (`/projects/my-project`).
2. Fill in the front matter and write the details below it:

```md
---
title: "My Project"
summary: "One or two sentences shown on the card."
category: Project            # or: Course Project
period: "Jan – Mar 2026"     # optional
course: "Course Name (CODE)" # optional
tags: [Python, PyTorch]
github: https://github.com/Asta1729/my-project   # optional
demo: https://example.com                         # optional
image: ./my-project.png      # optional, file placed next to the .md
featured: true               # show on the home page (top 3 by order)
order: 5                     # lower numbers appear first
draft: false                 # true hides it from the site
---

## Overview
Longer write-up, results, tables, screenshots…
```

3. Commit and push to `main`. GitHub Actions rebuilds and publishes the site in about a minute.

## Edit other content

| What                                     | Where                        |
| ---------------------------------------- | ---------------------------- |
| Bio, links, education, skills, awards    | `src/data/site.ts`           |
| Profile photo                            | `src/assets/profile.jpg`     |
| Résumé PDF                               | `public/Nirupam_Punna_Resume.pdf` |
| Résumé preview image (on /resume)        | `src/assets/resume.png`      |

When you replace the résumé PDF, also replace `src/assets/resume.png` with a fresh screenshot/export of page 1
so the preview matches.

`node_modules/`, `dist/` and `.astro/` are generated locally by `npm install` / `npm run build` and are not committed.
You can delete them any time; GitHub Actions installs and builds everything on its own.
| Colours, fonts, spacing                  | `src/styles/global.css`      |

# kim-portfolio

Personal portfolio website for **Ngoc Thien Kim Nguyen** — an AI Engineer researching applied LLMs at the intersection of AI and hardware. Built as a static, academic-style single page covering About, Research & Experience, Publications, Education, and Skills.

🔗 **Live site:** https://tkim-061203.github.io

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export via `output: 'export'`)
- [Tailwind CSS 4](https://tailwindcss.com/) (alpha) + PostCSS
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for MDX content
- [Geist](https://vercel.com/font) font and [lucide-react](https://lucide.dev/) icons
- Vercel [Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site to `out/` |
| `npm run start` | Serve the production build |

## Project structure

```
app/
  components/       # Nav, Footer, Experience, Skills, MDX, theme provider
  layout.tsx        # Root layout, metadata, critical CSS
  page.tsx          # Home page (profile sidebar + content sections)
  global.css        # Tailwind + global styles
  sitemap.ts        # Sitemap + base URL resolution
  robots.ts         # robots.txt
public/             # Portrait images, CV, favicons
.github/workflows/  # GitHub Pages deploy workflow
next.config.js      # Static export + GitHub Pages base path
```

## Deployment

The site is deployed to **GitHub Pages** via the [`Deploy GitHub Pages`](.github/workflows/pages.yml) workflow, which runs on every push to `main`. It builds the static export, disables Jekyll, and publishes the `out/` directory.

The base path is resolved automatically: when built in GitHub Actions for a project repository it is prefixed with the repo name, and left empty for a `*.github.io` user/org site. The resolved value is exposed to the app through `NEXT_PUBLIC_BASE_PATH` so that asset and link URLs work in both cases.

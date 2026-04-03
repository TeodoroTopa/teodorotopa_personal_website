# CLAUDE.md

## Project Overview
Personal portfolio website for Teodoro Topa (Data Scientist / Conservationist). Live at teodorotopa.com, deployed on Vercel with automatic CI/CD from GitHub pushes.

## Tech Stack
- **Framework:** Next.js (Pages Router, not App Router)
- **React:** 18.2.0
- **Styling:** Tailwind CSS 3.2 (JIT mode, dark mode via `class` strategy)
- **Theming:** next-themes (dark/light toggle)
- **Typography:** @tailwindcss/typography (prose classes for markdown rendering)
- **Markdown:** gray-matter (frontmatter parsing), react-markdown (rendering)
- **HTTP:** axios (GitHub API)
- **Animations:** react-rough-notation (hero section highlights)

## Directory Structure
```
pages/              # Next.js Pages Router
  _app.js           # App wrapper with ThemeProvider
  index.js          # Home page (uses getServerSideProps for GitHub repos)
  about.js          # About page
  projects.js       # Projects page
  experience.js     # Experience page
  contact.js        # Contact page
  energy/
    index.js        # Energy Intelligence listing page (getStaticProps)
    [slug].js       # Individual energy brief (getStaticProps/getStaticPaths)
components/         # React components
  ContainerBlock.js # Layout wrapper — all pages use this (provides Head, Navbar, Footer)
  Navbar.js         # Nav bar with theme toggle (desktop + mobile sections)
  Hero.js           # Hero section on landing page
  Footer.js         # Site footer
  AboutMe.js, Experience.js, Projects.js, Contact.js, FavouriteProjects.js, LatestCode.js
constants/
  data.js           # Single source of truth for personal data (projects, experience, social links, etc.)
lib/
  getLatestRepos.js # Fetches latest GitHub repos via API
  energy.js         # Utilities for reading/parsing energy blog markdown files
content/
  energy/           # Markdown posts from green-context-engine pipeline
styles/
  globals.css       # Global styles
  fonts.css         # Custom font definitions
  Home.module.css   # Module-scoped home styles
fonts/              # Font files (Poppins, Roboto Mono, Inter, TenorSans)
```

## Path Aliases (jsconfig.json)
- `@components/*`, `@constants/*`, `@lib/*`, `@styles/*`, `@data/*`, `@utils/*`, `@layouts/*`, `@hooks/*`

## Key Patterns
- Every page wraps its content in `<ContainerBlock title="..." description="...">` which provides `<Head>` meta tags, `<Navbar>`, and `<Footer>`.
- Only `index.js` uses `getServerSideProps` (for GitHub API). Other pages are static or use `getStaticProps`.
- Navbar links are hardcoded in `components/Navbar.js` in two places: desktop (hidden md:block) and mobile (block md:hidden).
- All personal data (projects, experience, social links, resume URL) lives in `constants/data.js`.

## Energy Blog Section
Markdown posts are pushed to `content/energy/` by an external Python pipeline ([green-context-engine](https://github.com/TeodoroTopa/green-context-engine)). Files arrive named `YYYY-MM-DD_slugified-title.md` with YAML frontmatter (title, date, sources, status). The website reads these at build time via `lib/energy.js` and renders them at `/energy` (listing) and `/energy/[slug]` (individual posts). New pushes trigger Vercel rebuild automatically.

## Commands
- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — serve production build locally

## Environment Variables
- `GITHUB_AUTH_TOKEN` — GitHub API token for fetching latest repos (see `.env.example`)

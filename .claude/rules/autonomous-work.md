# Autonomous Work Rules — Website

These rules apply whenever Claude is working autonomously on the website.
Edit this file to adjust the boundaries.

## Branch Discipline

- NEVER commit to or push to main. Always work on a dev or feature branch.
- Branch naming: `dev/{feature-area}` for local work.
- Open a PR when work is complete. Do not merge PRs without human review.

## Self-Contained Work Only

- Only install npm packages that are free, open-source, and well-maintained.
- Do not add packages that require API keys or paid services.
- Do not modify .env, .env.example, or any secrets/credentials files.
- Do not modify deployment configuration (Vercel settings, etc.).

## Quality Gates

- Run `npm run build` after every change. Build must succeed before committing.
- Test dark mode (next-themes) for every new component.
- Commit at every working checkpoint with descriptive commit messages.

## Visualization Prototyping Rules

- Use sample/hardcoded data when prototyping new components. Do not depend
  on live pipeline data — that integration comes later with human review.
- Create new components in `components/energy/` — do not modify existing
  page components without human review.
- Follow existing patterns: Tailwind for styling, functional React components,
  `@components/*` path aliases.
- Ensure all components work in both light and dark mode.

## What NOT to Do Autonomously

- Do not modify existing page layouts or navigation.
- Do not delete existing components or content.
- Do not change `constants/data.js` (source of truth for personal data).
- Do not push to main or merge PRs.
- Do not modify this rules file.

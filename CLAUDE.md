# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio/CV site for Daniele Vaccari, deployed at vaccaridaniele.com. A single-page React 19 + TypeScript app bundled with webpack 5 and Babel (no CRA/Vite). Package manager is **yarn** (v1, `yarn.lock`). Node >= 22.18 is required (`package.json` `engines`, `.nvmrc`).

## Commands

```bash
yarn start       # webpack-dev-server on http://localhost:8080 (serves public/ statically)
yarn build       # production build into build/ (hashed filenames, copies public/ except index.html)
yarn typecheck   # tsc (noEmit) — Babel strips types, so this is the only type check
yarn lint        # eslint . (flat config: eslint.config.mjs)
yarn format      # prettier on src/
```

There is no test suite.

## Architecture

The site is a deliberately minimal, text-only, single-column CV page (no images, no router).

- **Content vs. presentation:** all site copy (profile, experience, skills, projects, education, languages) lives in `src/content.ts`, mirroring the owner's PDF CV. `src/components.tsx` holds small presentational section components that only render that data; `src/App.tsx` sets section order. Optional fields (`profile.links`, `project.link`, `project.stack`) render nothing when absent.
- **Public-safe content:** this is a public site. Never add the phone number, email or home address from the CV to `content.ts` or any other file — only public links (GitHub, live project URLs, thesis URN).
- **Styling:** one global stylesheet, `src/styles.css`, BEM-ish class names, no CSS-in-JS or UI library. Light/dark theming via CSS custom properties on `:root` and `:root[data-theme="dark"]`. Mobile-first: sections stack on narrow screens and become a label column + content grid at `min-width: 640px`.
- **Theme flow:** an inline script in `public/index.html` sets `document.documentElement.dataset.theme` before first paint (from `localStorage["theme"]`, else `prefers-color-scheme`) to avoid a flash. `src/useTheme.ts` reads that initial value and persists changes. Keep the storage key and attribute in sync between the two.
- JSX uses the automatic runtime (`react-jsx`), so components don't import React. `public/_redirects` is a Netlify SPA fallback.

## Dependency pins

- `typescript` is pinned to `~6.0` because `typescript-eslint` does not yet support TypeScript 7.
- `eslint-plugin-react` was removed: it crashes on ESLint 10. Lint uses `@eslint/js`, `typescript-eslint` and `eslint-plugin-react-hooks`.

## Backend

`backend/` is a separate, unfinished ASP.NET Core (.NET 6) API ("visitor information"). It is not used by the frontend and does not currently compile (`SystemInformationController.cs`). Its `.vs/` and `obj/` folders are committed by mistake; ignore their diffs.

## Style

Prettier: 4-space indent, 100-char lines, double quotes, `arrowParens: "avoid"`, `bracketSameLine: true`.

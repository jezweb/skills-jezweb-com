# skills.jezweb.com — project guide

Static catalogue of Jezweb's open-source agent skills for Claude Code.
Forked from the jezweb.com codebase for its look; stripped to a pure static site.

## Stack
- **Astro 6** (static output, no adapter) → `dist/`
- **Cloudflare Workers static assets** (`wrangler.jsonc`), account `jez@jezweb.au`, domain `skills.jezweb.com`
- Tailwind v4 via PostCSS, but most styling is CSS variables in `src/styles/global.css`
- Inherited from jezweb.com: Oxanium + Share Tech Mono fonts, the grid floor, and the
  red/cyan/amber "colour world" system (set per page via Layout's `accent="R, G, B"` prop,
  or per section via inline `--c`).

## The data model is the whole site
`src/data/skills.ts` is the single source of truth: an array of categories, each with an
`accent` and a list of skills. Driven off it:
- `src/pages/index.astro` — hero + one colour-world section per category
- `src/pages/skills/[slug].astro` — a detail page per skill (`getStaticPaths`)
- `src/components/Footer.astro` — category columns
- the sitemap

**Add a skill:** one entry in `src/data/skills.ts`, then `npm run deploy`. Everything else
is generated. Taglines are lifted verbatim from each skill repo's `.claude-plugin/plugin.json`
description; blurbs/goodFor/triggers are editorial.

## What was removed from the fork
The corporate Worker (D1, AI, voice Durable Object, lead capture, redirects), the 117 BPM
soundtrack + AudioPlayer, BootGate, Glitch, Search, arcade/easter eggs, and all corporate
pages/data. Kept: Layout, Header, Footer, Logo, GridFloor, and `global.css`.

## Voice
Confident, technical, Australian. No em dashes in anything a visitor reads. Skill names are
lowercase (brainstrust, shipwright) — match the repos.

## Commands
```bash
npm run dev      # localhost:4321
npm run build    # → dist/
npm run deploy   # astro build && wrangler deploy
```

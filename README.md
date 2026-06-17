# skills.jezweb.com

Catalogue of the agent skills Jezweb builds and open-sources for Claude Code.
Static Astro site on Cloudflare, forked from the jezweb.com codebase so it shares
the same look (Oxanium + Share Tech Mono, the grid floor, the red/cyan/amber colour
worlds) without the corporate site's runtime (no soundtrack, search, or Worker).

## Stack

- **Astro 6**, static output. No SSR, no adapter — every page is built at deploy time.
- **Cloudflare Workers static assets** (`wrangler.jsonc` serves `dist/`). No D1, AI or
  Durable Objects.
- Tailwind v4 via PostCSS (`postcss.config.mjs`), though most styling lives in
  `src/styles/global.css` as CSS variables.

## The catalogue is one file

Every skill lives in `src/data/skills.ts` as a typed entry inside a category. The
landing page, the per-skill pages (`/skills/<slug>`), the footer and the sitemap all
read that array.

**To add a skill:** add an entry to the right category in `src/data/skills.ts`, then
deploy. A new `/skills/<slug>` page, a landing card, a footer link and a sitemap entry
all appear automatically — no new files, no routing.

```ts
{
  slug: 'my-skill',
  name: 'my-skill',
  tagline: 'One line, lifted from the repo plugin.json description.',
  blurb: 'A sentence or two on what it is, in plain terms.',
  goodFor: 'When you reach for it.',
  triggers: ['How you invoke it once installed', '...'],
  repo: 'https://github.com/jezweb/my-skill',
}
```

Categories carry an `accent` ("R, G, B") — the colour world that section renders in.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
```

## Deploy

```bash
npm run deploy   # astro build && wrangler deploy
```

Served as Cloudflare Workers static assets at **skills.jezweb.com** on the
`jez@jezweb.au` account.

## Skills in the catalogue

Each is its own open-source repo and installs as a Claude Code plugin
(`/plugin marketplace add jezweb/<slug>`, then `/plugin install <slug>`):
[shipwright](https://github.com/jezweb/shipwright),
[brainstrust](https://github.com/jezweb/brainstrust),
[honesty](https://github.com/jezweb/honesty),
[decisions](https://github.com/jezweb/decisions),
[fixer](https://github.com/jezweb/fixer),
[walkabout](https://github.com/jezweb/walkabout),
[perfection](https://github.com/jezweb/perfection),
[dotjez](https://github.com/jezweb/dotjez).

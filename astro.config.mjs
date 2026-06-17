// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Pure static output — deployed to Cloudflare Workers as static assets.
// Tailwind v4 runs via PostCSS (postcss.config.mjs) rather than the Vite
// plugin, which has a binding incompatibility with Astro 6's rolldown-vite.
// When a route needs server rendering (e.g. a form handler), add the
// @astrojs/cloudflare adapter and mark that route `export const prerender = false`.
export default defineConfig({
  site: 'https://skills.jezweb.com',
  integrations: [sitemap()],
});

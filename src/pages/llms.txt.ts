import type { APIRoute } from 'astro';
import { skillCategories, installLines } from '../data/skills';

// llms.txt — a single plain-text index for AI agents (and the people building them).
// Generated from src/data/skills.ts so it never drifts from the site. Follows the
// emerging llms.txt convention: title, summary, then sections of links + context.

const SITE = 'https://skills.jezweb.com';

export const GET: APIRoute = () => {
  const out: string[] = [];
  out.push('# Jezweb Skills');
  out.push('');
  out.push(
    '> Open-source agent skills for Claude Code, built and maintained by Jezweb. ' +
      'Each skill is a Claude Code plugin in its own public GitHub repo. This file ' +
      'lists every skill with what it does, its page, its repo, and how to install it.',
  );
  out.push('');
  out.push('Install pattern for any skill: `/plugin marketplace add jezweb/<slug>`, then `/plugin install <slug>`.');
  out.push('');

  for (const cat of skillCategories) {
    out.push(`## ${cat.name}`);
    out.push('');
    out.push(cat.tagline);
    out.push('');
    for (const s of cat.skills) {
      const inst = installLines(s.slug);
      out.push(`### ${s.name}`);
      out.push(`- Page: ${SITE}/skills/${s.slug}`);
      out.push(`- Repo: ${s.repo}`);
      out.push(`- Tagline: ${s.tagline}`);
      out.push(`- What it is: ${s.blurb}`);
      out.push(`- Good for: ${s.goodFor}`);
      out.push(`- Install: ${inst[0]} ; then ${inst[1]}`);
      if (s.alsoCli) out.push(`- Also runs as a CLI: ${s.alsoCli}`);
      out.push('');
    }
  }

  out.push('---');
  out.push('More skills are added over time. Site source: https://github.com/jezweb/skills-jezweb-com');
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

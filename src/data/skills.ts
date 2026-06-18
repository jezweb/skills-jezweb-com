// The skills catalogue. Each skill is a Claude Code plugin published from its own
// jezweb repo (.claude-plugin/plugin.json), installed via /plugin marketplace add.
// Taglines are lifted from each repo's plugin.json description; blurbs are editorial.
// Add a skill: drop an entry in the right category. The index + /skills/[slug] pages
// and the sitemap pick it up automatically. Accents are the division colour worlds.

export interface Skill {
  slug: string;
  name: string;
  /** one-line, from plugin.json */
  tagline: string;
  /** editorial: what it is, in plain terms */
  blurb: string;
  /** when you reach for it */
  goodFor: string;
  /** how you trigger it once installed */
  triggers: string[];
  repo: string;
  /** extra, e.g. brainstrust's CLI */
  alsoCli?: string;
}

export interface SkillCategory {
  name: string;
  /** "R, G, B" — the colour world this category lives in */
  accent: string;
  tagline: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'The method',
    accent: '139, 92, 246', // violet — the keystone (site signature)
    tagline: 'The doctrine that runs while you use everything else.',
    skills: [
      {
        slug: 'shipwright',
        name: 'shipwright',
        tagline:
          'The operating doctrine for autonomous build-and-ship work: the loop, the sibling skills, and the disciplines that keep it honest.',
        blurb:
          'shipwright is the method that runs while you build. It defines the loop to run, which sibling skill to reach for and how they chain, and the disciplines that keep the work honest, so a whole fleet of agents ships the same way. It sits above fixer, perfection, walkabout, honesty, decisions and brainstrust: not a router, the method itself.',
        goodFor:
          'Giving an agent, or a whole fleet, one consistent and honest way to build and ship instead of improvising the process every time.',
        triggers: [
          'Loads when an agent is about to build, code or ship, or run a self-directed work loop',
          'Chains the siblings: fixer, perfection, walkabout, honesty, decisions, brainstrust',
        ],
        repo: 'https://github.com/jezweb/shipwright',
      },
    ],
  },
  {
    name: 'Review & truth',
    accent: '34, 211, 238', // cyan
    tagline: 'Get a second opinion, keep the docs honest, and make clean decisions.',
    skills: [
      {
        slug: 'brainstrust',
        name: 'brainstrust',
        tagline: 'A second opinion grounded in your actual codebase — the model reads the repo itself.',
        blurb:
          'Instead of hand-feeding files to a reviewer, brainstrust lets the consulted model explore your repo on its own with read, grep and find. Claude consults ride your subscription through subagents at no extra cost; non-Anthropic voices go through an OpenRouter agent loop, so you get a genuinely diverse panel.',
        goodFor:
          'A grounded review, an architecture sounding board, or a devil’s advocate before you commit to a direction.',
        triggers: [
          'Built-in methodologies: review, architecture, debug, security, devil’s advocate, strategy, explore, ideate',
          'The panel is input, not verdict: you synthesise and decide',
        ],
        repo: 'https://github.com/jezweb/brainstrust',
        alsoCli: 'npx tsx src/consult.ts',
      },
      {
        slug: 'honesty',
        name: 'honesty',
        tagline: 'Audit a codebase so every comment, docstring and doc tells the truth about the code.',
        blurb:
          'Comments rot. honesty walks a codebase module by module and finds the comments, docstrings, READMEs and architecture notes that no longer match what the code does. It ships the safe fixes through a confidence and blast-radius gate, and queues the risky ones for a human.',
        goodFor:
          'Making a codebase trustworthy for the next agent or developer who reads it before changing anything.',
        triggers: [
          'Say "run honesty" or "do the comments match the code"',
          'Splits findings into auto-fix vs human-review by confidence and blast radius',
        ],
        repo: 'https://github.com/jezweb/honesty',
      },
      {
        slug: 'decisions',
        name: 'decisions',
        tagline: 'Ask a human coworker for ONE decision, cleanly.',
        blurb:
          'When an agent is blocked on a person’s call, decisions reduces it to the single load-bearing choice, carries the context so the human does not have to go looking, shows a grounded visual, and makes answering a single tap. It replaces the overloaded wall of ten questions with one well-formed ask.',
        goodFor:
          'Unblocking on a stakeholder’s call without bouncing "what did you mean?" back and forth.',
        triggers: [
          'Reach for it when a question is about to become a wall of asks',
          'Frames the choice, carries context, makes the answer one tap',
        ],
        repo: 'https://github.com/jezweb/decisions',
      },
    ],
  },
  {
    name: 'Prove it works',
    accent: '255, 168, 26', // amber
    tagline: 'Catch bugs on camera and let an app demo itself.',
    skills: [
      {
        slug: 'fixer',
        name: 'fixer',
        tagline: 'Prove a bug exists on camera, fix it, then prove it’s gone on the same camera.',
        blurb:
          'fixer treats a bug as fixed only when the same viewport and the same steps show corrected behaviour, not when a test goes green. It records the defect, applies the fix, re-records the identical scenario, and returns before/after evidence plus a written verdict for each issue.',
        goodFor:
          'Visual and UI bugs where "the test passes" is not the same as "the user sees it work".',
        triggers: [
          'Returns screenshots, a GIF or video, and a verdict per issue',
          'A closed loop: capture → diagnose → fix → re-capture → verdict',
        ],
        repo: 'https://github.com/jezweb/fixer',
      },
      {
        slug: 'walkabout',
        name: 'walkabout',
        tagline: 'Add a guided voice tour that walks the real pages, plus one-command demo videos.',
        blurb:
          'walkabout adds three connected things to any web app: a hands-free voice tour that walks the real pages with a narration-synced moving spotlight, an ask-the-app AI guide that logs every question, and one-command narrated demo videos. Onboarding, in-app help and training footage from the same source.',
        goodFor:
          'Onboarding tours, in-app help, and demo or training videos without a separate screen-recording session.',
        triggers: [
          'Walks real pages with a narration-synced spotlight',
          'The ask-the-app guide logs every question users ask',
        ],
        repo: 'https://github.com/jezweb/walkabout',
      },
    ],
  },
  {
    name: 'Keep improving',
    accent: '139, 92, 246', // violet
    tagline: 'Drive an app toward 10/10, and work well alongside an agent.',
    skills: [
      {
        slug: 'perfection',
        name: 'perfection',
        tagline: 'A self-improving loop that drives an app toward a 10/10 product instead of grinding tasks.',
        blurb:
          'perfection adds a background work loop with a per-app fitness function, an adversarial critic, and a floor and a ceiling so it never coasts. Rather than working down a task list, it keeps asking what would make the product better and acts on it.',
        goodFor:
          'When you want an app to keep improving itself rather than stop at "the tickets are closed".',
        triggers: [
          'Say "set up a perfection loop" or "drive this toward perfection"',
          'Fitness function + adversarial critic keep every tick honest',
        ],
        repo: 'https://github.com/jezweb/perfection',
      },
      {
        slug: 'dotjez',
        name: 'dotjez',
        tagline: 'Cross-cutting skills for working well with an AI agent: the thinking, not just the filing.',
        blurb:
          'dotjez is a set of skills for the work around the work: planning and stress-testing ideas, prompt-writing for text and images, do-not-trust-memory verification of facts and tooling and visuals, reasoning over images, stranger-testing docs before they ship, delegation and multi-agent orchestration, and the occasional step-back reflection.',
        goodFor:
          'Sharpening how you and an agent think together, across any project.',
        triggers: [
          'Install the skills once and they travel everywhere',
          'Or clone the repo as a markdown workspace your agent opens into',
        ],
        repo: 'https://github.com/jezweb/dotjez',
      },
    ],
  },
];

export const slugify = (n: string) =>
  n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const allSkills = skillCategories.flatMap((c) =>
  c.skills.map((s) => ({ ...s, category: c.name, accent: c.accent })),
);

export const skillCount = allSkills.length;

/** the two-line install every plugin uses */
export const installLines = (slug: string) => [
  `/plugin marketplace add jezweb/${slug}`,
  `/plugin install ${slug}`,
];

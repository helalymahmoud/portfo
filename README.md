# Mahmoud Helaly — Portfolio

A professional personal portfolio for **Mahmoud Hisham Helaly**, a Backend Engineer
specialising in Node.js. It is a static, single-page React application — no backend, no
database, no external API dependency.

The site is **light-first**: a white canvas, a soft lavender section background, charcoal
text and a single restrained purple accent. It presents projects as short case studies
rather than as a converted CV.

---

## Design direction

| Decision        | Choice                                                               |
| --------------- | -------------------------------------------------------------------- |
| Background      | White `#ffffff`                                                      |
| Section bands   | Soft lavender `#f7f5fc`                                              |
| Surfaces        | White cards, borders `#e8e5f0` / `#d8d3e6`                           |
| Text            | Charcoal `#252333`, secondary `#666477`, tertiary `#6f6c80`          |
| Accent          | Purple `#7047eb` (with `#f2eefe` tint and `#5533c9` deep)            |
| Type            | System sans stack for UI/body, system mono for labels and metadata   |
| Signature moves | A custom API request-flow diagram in the hero; a code-drawn, clearly |
|                 | labelled “Conceptual” product mock for each project; editorial,      |
|                 | numbered capability and service lists instead of badge walls         |

All tokens live in `src/styles/index.css` (Tailwind v4 `@theme`), so the palette can be
re-themed from one place.

The page follows a single narrative: **who I am → selected work → technical depth →
experience → what I can build for you → contact**.

---

## Tech stack

| Layer      | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | React 19 + TypeScript (strict)                      |
| Build tool | Vite 8                                              |
| Styling    | Tailwind CSS v4 (design tokens in `src/styles/index.css`) |
| Icons      | `lucide-react` + two inline brand SVGs              |
| Motion     | `framer-motion` (used in one wrapper, `Reveal`)     |
| Linting    | `oxlint`                                            |

Versions were checked for mutual compatibility before installing. `tsconfig.app.json`
enables `strict` plus `noImplicitOverride`, `noUnusedLocals`, `noUnusedParameters`
and `forceConsistentCasingInFileNames`. No TypeScript or lint rules were disabled.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) create your local env file
cp .env.example .env      # then set VITE_SITE_URL to your domain

# 3. Start the dev server (http://localhost:5173)
npm run dev

# 4. Type-check the project
npm run typecheck

# 5. Lint
npm run lint

# 6. Production build (type-checks, then bundles to dist/)
npm run build

# 7. Preview the production build locally
npm run preview
```

Requires Node.js 20.19+ (or 22.12+).

`.env` is git-ignored on purpose. If it is missing, `vite.config.ts` falls back to the
placeholder `https://portfolio.example.com` so a fresh clone still builds valid
canonical / Open Graph URLs instead of a literal `%VITE_SITE_URL%`.

---

## Project structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Work, Expertise, Experience, Services, Contact
    ui/         Reusable primitives and visuals:
                  Button, Badge, Chip, DetailLabel, Eyebrow, Section,
                  SectionHeading, Container, Reveal, CvDownloadButton,
                  BrandIcons, FlowDiagram, ProjectMock, CaseStudy, ProjectCard
  data/         All personal content — edit here, not in the components
    profile.ts      name, contact, about copy, principles, CV path, nav, socials
    projects.ts     project case studies (order, hide, links, visuals)
    skills.ts       expertise groups
    experience.ts   work history + education
    services.ts     client services
  hooks/        useScrollSpy, useAssetAvailability
  lib/          small helpers (class names, button styles, project status tones)
  styles/       Tailwind entry + design tokens
  types/        shared TypeScript types
  App.tsx       page composition
```

Everything personal lives in `src/data/*`, so layout components never need editing
to update content.

---

## Editing content

### Add, edit, reorder or hide a project

Open `src/data/projects.ts` and edit the array. Each entry supports:

```ts
{
  id: 'my-project',            // unique, used for React keys and the #project-<id> anchor
  name: 'My Project',
  tagline: 'One-line summary.',
  category: 'SaaS Platform',   // short chip shown above the name
  description: 'What the product is.',
  problem: 'The problem it solves.',   // shown as a short callout
  contribution: ['What you did', '…'],
  challenges: ['Optional engineering challenges'],
  technologies: ['Node.js', 'PostgreSQL'],
  status: 'live' | 'in-progress' | 'prototype' | 'internal' | 'unverified',
  statusLabel: 'Live · Production',    // text shown in the badge
  statusNote: 'Optional honest clarification shown in small text',
  context: 'Production platform at …', // optionally omitted
  independent: true,                    // true = shown in the personal-projects group
  repoUrl: undefined,          // only set once a URL is verified
  demoUrl: undefined,          // only set once a URL is verified
  order: 50,                   // higher numbers render first
  hidden: false,               // true = keep it but don't show it
  visual: 'platform',          // platform | catering | recruitment | gym | restaurant | generic
}
```

- **Reorder** with `order` (bigger = higher on the page).
- **Hide** with `hidden: true`.
- The highest-`order` non-independent project is rendered as the large featured case
  study; the next two alternate left/right. Projects with `independent: true` appear in
  the compact “Independent projects” group.
- Links only appear when `repoUrl` / `demoUrl` are set, so nothing dead is shown.
- `visual` chooses a code-drawn product mock in `src/components/ui/ProjectMock.tsx`.
  Every mock is labelled **Conceptual** so it is never mistaken for a real screenshot.

> Two projects (`Caterk`, `Interview & Job Application Module`) intentionally have an
> empty `technologies` array because the CV does not state their stack. Add the real
> stack there when you have it — the technology row is simply hidden while empty.

### Replace the CV

The download is driven by `profile.cv` in `src/data/profile.ts`:

```ts
cv: {
  path: '/cv/Mahmoud-Helaly-Backend-Engineer-CV.pdf',
  fileName: 'Mahmoud-Helaly-Backend-Engineer-CV.pdf',
}
```

1. Drop your real PDF into `public/cv/`.
2. Name it exactly `Mahmoud-Helaly-Backend-Engineer-CV.pdf` (or update `path`).
3. Rebuild.

The UI performs a cached `HEAD` request and checks the content type. If the file is
missing, the button renders as a disabled "CV file will be added soon" state instead of
a broken link — no fake CV is shipped.

### Add GitHub / LinkedIn / other links

Edit `socialLinks` in `src/data/profile.ts`. Any entry with an empty `href` is not
rendered at all, so you never publish a dead link:

```ts
export const socialLinks = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/your-handle' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
]
```

`id` also selects the icon (see `SOCIAL_ICONS` in `src/components/sections/Contact.tsx`).

### Set your domain (SEO)

Canonical and social URLs come from `VITE_SITE_URL`:

1. Edit `.env` and set `VITE_SITE_URL=https://your-domain.com`.
2. Update the domain in `public/robots.txt` and `public/sitemap.xml` (clearly marked
   `TODO` comments).

---

## Deployment

The build output in `dist/` is fully static. Any static host works.

**Netlify**

- Build command: `npm run build`
- Publish directory: `dist`
- Set the env var `VITE_SITE_URL` to your domain in site settings.

**Vercel**

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_SITE_URL` under Environment Variables.

**GitHub Pages / Cloudflare Pages**

- Build: `npm run build`, publish `dist`.
- For GitHub Pages under a sub-path, set Vite's `base` in `vite.config.ts`, e.g.
  `base: '/<repo-name>/'`, and rebuild.

This is a single-page site using in-page anchor links, so **no SPA rewrite rules are
required**. After deploying, confirm the canonical tag and `og:image` point at the
real domain.

---

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `<h1>`, and a logical
  heading order (`h2 → h3 → h4`) with no skipped levels.
- A "Skip to content" link is the first focusable element.
- Visible keyboard focus rings via `:focus-visible`, real `<button>`/`<a>` elements
  (no clickable divs), `aria-expanded`/`aria-controls` on the mobile menu, and
  Escape-to-close.
- Reduced motion is respected twice: a global `prefers-reduced-motion` CSS rule and a
  JavaScript check in the `Reveal` wrapper.
- Measured contrast (high to low): body text **5.75:1**, accent text **5.12:1**,
  primary CTA **5.54:1**, CTA text on the purple panel **4.86:1**, smallest muted
  label **5.08:1** — all exceed WCAG 2.2 AA (4.5:1). Meaning is never carried by colour
  alone (status uses text labels, not just tinted pills).
- Fonts use a system stack (no external font requests → no font-driven layout shift).
- Conceptual visuals are drawn in CSS/SVG, so there are no large image downloads and
  no broken-image states.

**Bundle note:** the production JS is ~126 kB gzip, most of it React + Framer Motion.
Motion is isolated to `src/components/ui/Reveal.tsx`; if you ever want to trim the
bundle, that single component can be reimplemented with an `IntersectionObserver` and
a CSS transition, and Framer Motion removed, without touching anything else.

---

## Verified checks (testing report)

Run on macOS, Node v20.20.2, npm 10.8.2, Vite 8.3.4, React 19.2.8.

| #  | Command / check | Result |
| -- | --------------- | ------ |
| 1  | `npm run typecheck` (strict) | Passed, 0 errors |
| 2  | `npm run lint` (oxlint) | Passed, **0 warnings / 0 errors** |
| 3  | `npm run build` | Success — `index.html` 2.40 kB, CSS 32.88 kB (6.95 gzip), JS 402.56 kB (126.30 gzip) |
| 4  | `%VITE_SITE_URL%` substitution in `dist/index.html` | Replaced correctly (canonical + OG), with and without a local `.env` |
| 5  | Static assets in `dist/` | favicon.svg, og-image.png, og-image.svg, robots.txt, sitemap.xml present |
| 6  | Headless Chrome, 320 / 375 / 390 / 430 / 768 / 1024 / 1366 / 1920 px | **No horizontal overflow at any width** |
| 7  | Browser console + page errors | **0 errors, 0 warnings** |
| 8  | Failed network requests (excluding the intentional CV probe) | **0** |
| 9  | Anchor links vs section ids | All resolve (`#home #about #work #expertise #experience #services #contact`), no broken links, no empty `href` |
| 10 | `target="_blank"` links | All include `rel="noopener noreferrer"` |
| 11 | Mobile menu (390 px) | Toggles `aria-expanded`, panel appears with 7 links, Escape closes it and returns focus |
| 12 | Reduced-motion emulation | Page renders, all content visible (opacity 1) |
| 13 | Heading structure | Single `h1`; `h2`/`h3` hierarchy with no skipped levels |
| 14 | CV **missing** file | Degrades to 3 disabled buttons + "CV file will be added soon." |
| 15 | CV **present** file (temporary test) | Renders 3 real `download` links, 0 disabled buttons — the temporary test PDF was removed afterwards |
| 16 | Measured contrast (9 samples) | Minimum **4.86:1**, all ≥ AA |
| 17 | Scroll-reveal behaviour | Content animates in on scroll and is never left permanently hidden |

Checks that could **not** be automated in this environment (please confirm manually):

- Visual review of rendered screenshots and of `public/og-image.png` (the design was
  verified through DOM/layout/contrast measurements, not by viewing pixels).
- Real-device and screen-reader testing, iOS Safari rendering, and Lighthouse scores.
- `og-image.png` is generated from `public/og-image.svg`; regenerate it if you edit the
  SVG (render the SVG at 1200×630 and overwrite the PNG).

---

## University assignment (Task 1: Professional Portfolio / Electronic CV)

The assignment asks for a professional site presenting the CV, technical skills and
programming projects, with responsive design, clean source code and a GitHub-hosted
result. This project satisfies all of that, and deliberately goes further by treating
the projects as engineering case studies.

**Technology compatibility — please read and confirm with your instructor.**

The assignment names HTML/CSS fundamentals as the permitted technologies and explicitly
recommends Bootstrap for responsiveness. This project uses **React + TypeScript + Vite +
Tailwind CSS** instead. That stack:

- compiles to plain, static HTML/CSS/JS (the `dist/` output is ordinary HTML + CSS +
  JavaScript — genuinely responsive via CSS Grid/Flexbox, with no server required);
- keeps the source cleanly organised (typed data files, one component per concern,
  no duplicated markup);
- is a superset of the requirement in capability, but it is **not** plain HTML/CSS, and
  Tailwind's utility classes are not the same as hand-written CSS or Bootstrap classes.

**No instructor approval of React/Tailwind has been obtained or assumed.** Before the
deadline you should do one of the following:

1. **Confirm** that the instructor accepts React + Tailwind (show that the built output
   is static HTML/CSS/JS and that the design is responsive). If accepted, submit as is.
2. If the instructor requires plain HTML/CSS (with or without Bootstrap), the safest
   compliant route is a hand-written static version: one `index.html`, one `styles.css`
   (optionally Bootstrap via CDN), and a small amount of vanilla JS for the mobile menu
   and smooth scrolling. The content lives in `src/data/*` and can be copied across
   directly; the layout is already simple (hero, sections, case-study cards, contact).

Do not present the React/Tailwind implementation as “plain HTML/CSS” to the instructor.

---

## Uploading to GitHub (submission step 2)

This directory is **not yet a Git repository** and has **no remote configured**. Nothing
has been committed or pushed. To create the repository and upload it yourself:

```bash
cd ~/mahmoud-helaly-portfolio

# 1. Initialise and make the first commit
git init -b main
git add .
git commit -m "Portfolio: light-first white/purple redesign"

# 2. Create an empty repo on github.com first (do NOT add a README there),
#    then connect it (replace <your-username> and <repo-name>):
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Then submit the repository URL through the assignment form:
`https://forms.gle/15qzygvKSq1Rjba78`.

`.gitignore` already excludes `node_modules/`, `dist/`, logs, editor folders and local
`.env` files, so only source is uploaded. After pushing, open the repository on GitHub
and confirm `README.md`, `src/`, `public/`, `index.html`, `package.json` and the config
files are present.

---

## Outstanding items for the owner

These are intentionally left blank or marked `TODO` because they are not verified:

1. **CV PDF** — add `public/cv/Mahmoud-Helaly-Backend-Engineer-CV.pdf`.
2. **GitHub URL** — `socialLinks` in `src/data/profile.ts`.
3. **LinkedIn URL** — `socialLinks` in `src/data/profile.ts`.
4. **Repo / live-demo URLs** — per project in `src/data/projects.ts`.
5. **Project stacks** — confirm the technology lists for `Gymtics` and `Foodics-sys`,
   and fill in `Caterk` and `Interview & Job Application Module`.
6. **Production domain** — `.env`, `public/robots.txt`, `public/sitemap.xml`.
7. **OG image** — review `public/og-image.png` and replace if desired
   (`public/og-image.svg` is the editable source).
8. **Independent-project status** — confirm deployment status for `Gymtics` and
   `Foodics-sys`, then update `status` / `statusLabel` / `statusNote`.
9. **Instructor confirmation** — confirm React/Tailwind is acceptable (see above).

---

## Content-integrity guarantees

This project does **not** contain and does **not** render:

- Invented employers, dates, education, awards or certifications.
- Fake clients, testimonials, ratings, revenue, user counts or GitHub statistics.
- Fabricated screenshots or dashboards (project visuals are abstract, code-drawn and
  labelled “Conceptual”).
- Skill percentage bars or invented proficiency levels.
- Invented social, repository or demo URLs (empty values are hidden, not rendered).
- A fake contact form (contact is via real `mailto:` / `tel:` / WhatsApp links).
- Any implication that `Foodics-sys` is affiliated with, or a product of, the Foodics
  company — it is an independent personal project.

The reported 30–40% query-performance improvement from the CV is quoted only in its
original context (the affected queries), never generalised to all APIs.

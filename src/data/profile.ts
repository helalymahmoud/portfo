import type { LanguageProficiency, NavItem, SocialLink } from '../types'

/**
 * ------------------------------------------------------------------
 *  OWNER-CONFIGURED VALUES
 * ------------------------------------------------------------------
 *  Everything personal lives here. Values marked `TODO` are not yet
 *  verified and are intentionally left blank so no dead links or
 *  invented profiles are ever rendered.
 */
export const profile = {
  name: 'Mahmoud Hisham Helaly',
  /** Shorter form used by the logo and footer. */
  displayName: 'Mahmoud Helaly',
  initials: 'MH',
  role: 'Backend Engineer',
  title: 'Backend Engineer | Node.js',
  location: 'Cairo, Egypt',

  email: 'mahmoud.hisham.7370gmail.com',
  phone: '+201028727462',
  phoneDisplay: '+20 102 872 7462',

  /** Hero eyebrow. */
  eyebrow: 'Backend Engineer · Node.js',
  headline: 'Building reliable backends for real-world products.',
  /** Words inside the headline to emphasise in the accent colour. */
  headlineAccent: 'reliable backends',
  heroCopy:
    'I design and build Node.js systems that hold up in production: clear APIs, well-modelled databases, secure authentication, subscription billing and real-time features.',

  /** What I focus on — shown as a short list in the hero. */
  focusAreas: [
    'Scalable backend systems',
    'API design & architecture',
    'Database design & optimization',
    'Subscriptions & payments',
    'Real-time applications',
  ],

  /** Core stack shown compactly in the hero. Verified only. */
  coreStack: [
    'Node.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'GraphQL',
    'Stripe',
    'Docker',
  ],

  about: {
    lead: 'I am a backend engineer with 2+ years of experience designing, building and shipping Node.js systems that behave well under real production conditions.',
    paragraphs: [
      'My work centres on API architecture — designing REST and GraphQL services with clear boundaries, predictable contracts and modular structure that stays maintainable as a product grows. On the data side, I model PostgreSQL and MySQL schemas, write migrations, add indexes and tune slow queries so the database keeps up with the application.',
      'I take authentication and authorization seriously: JWT-based authentication, role-based access control, input validation and centralized error handling are part of how I build a service rather than an afterthought. I have also integrated Stripe subscriptions end to end — billing cycles, plan changes and webhook handling — and built real-time features such as chat and live updates over WebSockets.',
      'Beyond features, I care about the parts users never see: consistent error responses, sane environment configuration, Docker-based workflows and supporting deployments so changes reach production safely.',
    ],
  } satisfies { lead: string; paragraphs: string[] },

  /** Short statements of engineering approach, shown in the About section. */
  principles: [
    {
      title: 'Correctness before cleverness',
      text: 'Clear contracts and explicit behaviour beat shortcuts that are hard to reason about later.',
    },
    {
      title: 'Model the data first',
      text: 'A well-shaped schema and sensible indexes prevent most performance problems before they appear.',
    },
    {
      title: 'Measure, then optimize',
      text: 'Tune the queries that actually matter, with the original context kept intact.',
    },
  ] satisfies { title: string; text: string }[],

  languages: [
    { name: 'Arabic', level: 'Native or bilingual proficiency' },
    { name: 'English', level: 'Professional working proficiency' },
  ] satisfies LanguageProficiency[],

  /**
   * CV download.
   * Place the real PDF at the `path` below (see README / public/cv).
   * The UI checks that the file actually exists before offering it, so
   * an absent file shows an honest "coming soon" state instead of a
   * broken download.
   */
  cv: {
    path: '/cv/Mahmoud-Helaly-Backend-Engineer-CV.pdf',
    fileName: 'Mahmoud-Helaly-Backend-Engineer-CV.pdf',
  },
} as const

/**
 * Social profiles.
 * TODO: set the real `href` values (including the https:// scheme) once
 * verified. Any entry left blank is simply not rendered.
 */
export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: '' },
  { id: 'linkedin', label: 'LinkedIn', href: '' },
]

/** Six primary sections. The logo returns to the top, so "Home" is omitted. */
export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

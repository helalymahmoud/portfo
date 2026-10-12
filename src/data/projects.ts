import type { Project } from '../types'

/**
 * ------------------------------------------------------------------
 *  PROJECTS
 * ------------------------------------------------------------------
 *  Manage this list to change, reorder, hide or add projects.
 *  - `order`  : higher numbers render first.
 *  - `hidden` : set to true to keep a project but remove it from the page.
 *  - `repoUrl` / `demoUrl`: leave undefined until a URL is actually verified;
 *    the UI only renders a link when a value is present.
 *
 *  Integrity notes:
 *  - Baiitna, Caterk and the Interview & Job Application module are
 *    production work delivered at Baianat and are described as such.
 *  - Gymtics and Foodics-sys are independent personal projects. Their
 *    stacks are the intended architectures and are flagged as pending
 *    confirmation - adjust once verified against each repository.
 */
export const projects: Project[] = [
  {
    id: 'baiitna',
    name: 'Baiitna Platform',
    tagline: 'Company registration and service management platform.',
    category: 'SaaS Platform',
    description:
      'A multi-service platform where companies register and manage the services they subscribe to. I worked across the backend — from the core architecture and data model through to billing, analytics and production deployment.',
    problem:
      'Companies needed a single place to register and manage the services they subscribe to, with billing that stayed correct as plans changed and volume grew.',
    contribution: [
      'Backend architecture',
      'Subscription & billing workflows',
      'Stripe webhooks',
      'Company onboarding',
      'Analytics & reporting',
      'Authentication & roles',
      'Query optimization',
      'Production deployment',
    ],
    challenges: [
      'Keeping subscription and billing state consistent across Stripe webhooks and the application database',
      'Indexing and ordering queries so the platform stayed responsive as data volume grew',
      'Structuring the backend so new services could be added without disturbing existing modules',
    ],
    technologies: [
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Stripe',
      'Docker',
      'WebSockets',
    ],
    status: 'live',
    statusLabel: 'Live · Production',
    context: 'Production platform at Baianat',
    order: 50,
    visual: 'platform',
  },
  {
    id: 'caterk',
    name: 'Caterk Platform',
    tagline: 'Catering management platform.',
    category: 'Hospitality Operations',
    description:
      'A catering management platform I contributed to as a backend developer. I worked on core platform APIs and delivered dedicated modules while helping the team keep the product stable.',
    problem:
      'Catering operations needed reusable building blocks — modifiers and locations — added to a live platform without destabilising what already shipped.',
    contribution: [
      'Backend API development',
      'Modifier Group module',
      'Location module',
      'Bug fixes',
      'Performance improvements',
      'Team collaboration',
    ],
    technologies: [],
    status: 'live',
    statusLabel: 'Live · Production',
    context: 'Production platform at Baianat',
    order: 40,
    visual: 'catering',
  },
  {
    id: 'interview-module',
    name: 'Interview & Job Application Module',
    tagline: 'Recruitment workflow inside a company platform.',
    category: 'Recruitment Workflow',
    description:
      'A recruitment module built within a larger company platform, covering the journey from a candidate applying for a role through to an HR decision. It is an internal product rather than a standalone public site.',
    problem:
      'Hiring had no structured flow from application to decision — every step was handled manually and candidates had no consistent experience.',
    contribution: [
      'Job applications & CV submission',
      'Structured interview questions',
      'HR review workflows',
      'Candidate decisions',
      'Automated email notifications',
    ],
    challenges: [
      'Modelling a multi-stage recruitment workflow with clear state transitions',
      'Reliable automated notifications tied to each decision point',
    ],
    technologies: [],
    status: 'internal',
    statusLabel: 'Internal · Not public',
    context: 'Module within a company platform',
    order: 30,
    visual: 'recruitment',
  },
  {
    id: 'gymtics',
    name: 'Gymtics',
    tagline: 'Multi-tenant gym management SaaS.',
    category: 'Independent SaaS',
    description:
      'An independent project exploring multi-tenant gym management: memberships, classes and the operational data a gym needs. Built on my own time as a way to work through multi-tenancy and GraphQL design.',
    problem:
      'A gym’s memberships, classes and staff had to stay isolated per tenant while sharing one backend and one database.',
    contribution: [
      'Multi-tenant architecture',
      'Tenant isolation',
      'GraphQL API design',
      'Database schema',
      'Backend features',
    ],
    technologies: ['NestJS', 'GraphQL', 'PostgreSQL', 'TypeORM', 'React'],
    status: 'unverified',
    statusLabel: 'Independent project',
    statusNote: 'Stack and deployment status are being verified against the repository.',
    context: 'Independent personal project',
    independent: true,
    order: 20,
    visual: 'gym',
  },
  {
    id: 'foodics-sys',
    name: 'Foodics-sys',
    tagline: 'Restaurant and café management SaaS.',
    category: 'Independent SaaS',
    description:
      'A separate independent project for restaurant and café operations, with a focus on queues and background processing for the asynchronous parts of the workflow. Unrelated to the Foodics company.',
    problem:
      'Restaurant workflows include slow, asynchronous work that should not block a request — the queueing and background-job design had to be clean and reliable.',
    contribution: [
      'Restaurant & café backend services',
      'GraphQL API design',
      'Background jobs & queues',
      'Database modeling',
    ],
    technologies: ['NestJS', 'GraphQL', 'PostgreSQL', 'Redis', 'BullMQ'],
    status: 'unverified',
    statusLabel: 'Independent project',
    statusNote: 'Stack and deployment status are being verified against the repository.',
    context: 'Independent personal project',
    independent: true,
    order: 10,
    visual: 'restaurant',
  },
]

/** Visible projects, strongest first. */
export const visibleProjects = [...projects]
  .filter((project) => !project.hidden)
  .sort((a, b) => (b.order ?? 0) - (a.order ?? 0))

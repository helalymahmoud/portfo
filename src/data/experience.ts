import type { ExperienceItem } from '../types'

/**
 * Professional experience. Dates and facts are taken from the CV and
 * must not be altered. `impact` is a curated, outcome-focused summary —
 * the full CV bullet list is intentionally not reproduced on the site.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'baianat',
    company: 'Baianat',
    role: 'Backend Developer',
    start: '2024-02',
    end: '2026-02',
    period: 'February 2024 – February 2026',
    location: 'Cairo, Egypt',
    summary:
      'Backend developer on production platforms, owning services end to end — API design, data modelling, authentication, billing, real-time features and deployment support.',
    impact: [
      'Designed and deployed backend systems for production products, from architecture through to release.',
      'Built REST and GraphQL APIs consumed by front-end and client applications.',
      'Modelled and tuned PostgreSQL and MySQL schemas; indexing and query work improved the performance of the affected queries by a reported 30–40%.',
      'Implemented JWT authentication and role-based access control across services.',
      'Integrated Stripe subscriptions and webhooks, including billing cycles and subscription state.',
      'Built WebSocket real-time features such as chat and live updates.',
      'Added analytics and reporting modules, and hardened reliability with input validation and centralized error handling.',
    ],
    stack: ['Node.js', 'NestJS', 'PostgreSQL', 'MySQL', 'Stripe', 'WebSockets', 'Docker'],
  },
]

export const education = {
  institution: 'Delta Higher Institute for Computers and Information',
  degree: 'Bachelor of Information Systems',
  period: '2023 – Present',
}

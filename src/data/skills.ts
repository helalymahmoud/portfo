import type { SkillGroup } from '../types'

/**
 * Skills grouped by discipline. Deliberately rendered as text groups /
 * compact badges - no proficiency percentages, no invented ratings.
 * Only technologies supported by the CV or verified project work.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    summary: 'Service and API architecture for Node.js products.',
    skills: [
      'Node.js',
      'NestJS',
      'REST APIs',
      'GraphQL APIs',
      'Backend architecture',
      'Modular architecture',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORMs',
    summary: 'Schema design and query performance.',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Prisma',
      'TypeORM',
      'Database modeling',
      'Migrations',
      'Indexing',
      'Query optimization',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    summary: 'Authentication, authorization and safe API design.',
    skills: [
      'JWT authentication',
      'Role-based access control',
      'Secure API design',
      'Input validation',
      'Centralized error handling',
    ],
  },
  {
    id: 'payments',
    title: 'Payments',
    summary: 'Subscription and billing workflows.',
    skills: ['Stripe integration', 'Subscriptions', 'Billing cycles', 'Webhook handling'],
  },
  {
    id: 'realtime',
    title: 'Real-Time Systems',
    summary: 'Live, event-driven features.',
    skills: ['WebSockets', 'Real-time chat', 'Live updates'],
  },
  {
    id: 'devops',
    title: 'DevOps & Engineering Practices',
    summary: 'Shipping and keeping systems healthy.',
    skills: [
      'Docker',
      'CI/CD fundamentals',
      'Environment configuration',
      'Git',
      'GitHub',
      'Debugging',
      'Refactoring',
      'Monitoring',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    summary: 'Turning product activity into useful signals.',
    skills: ['Analytics systems', 'Reporting', 'Business metrics'],
  },
]

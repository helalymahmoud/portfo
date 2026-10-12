import type { Service } from '../types'

/**
 * Services offered to potential clients. Written around outcomes without
 * promising specific results. No prices, no testimonials.
 */
export const services: Service[] = [
  {
    id: 'api-development',
    title: 'Backend API Development',
    description:
      'Design and implementation of REST or GraphQL APIs that are predictable to consume, documented and built to evolve.',
    outcomes: ['Clear API contracts', 'Modular service structure', 'Consistent error handling'],
  },
  {
    id: 'saas-backend',
    title: 'Custom SaaS Backend Development',
    description:
      'Backend foundations for subscription products: accounts, plans, permissions and the services behind the core feature set.',
    outcomes: ['Multi-tenant ready', 'Subscription-aware', 'Built to extend'],
  },
  {
    id: 'database',
    title: 'Database Design & Optimization',
    description:
      'Schema design, relationships, migrations and query tuning so your data layer stays correct and responsive as it grows.',
    outcomes: ['Sane schema design', 'Indexing & migrations', 'Faster slow queries'],
  },
  {
    id: 'auth',
    title: 'Authentication & Role-Based Access Control',
    description:
      'Secure sign-in and permission systems so the right people reach the right resources — and only those.',
    outcomes: ['JWT authentication', 'Role & permission models', 'Validated inputs'],
  },
  {
    id: 'payments',
    title: 'Payment & Subscription Integrations',
    description:
      'Stripe subscriptions, billing cycles and webhook handling wired reliably into your application logic.',
    outcomes: ['Stripe subscriptions', 'Webhook handling', 'Consistent billing state'],
  },
  {
    id: 'realtime',
    title: 'Real-Time Features',
    description:
      'WebSocket-powered chat, notifications and live updates for products that need to feel immediate.',
    outcomes: ['WebSocket services', 'Live updates', 'Chat & notifications'],
  },
  {
    id: 'maintenance',
    title: 'Backend Maintenance & Refactoring',
    description:
      'Untangling and stabilising existing code: fixing bugs, improving structure and raising reliability without a rewrite.',
    outcomes: ['Bug fixing', 'Refactoring', 'Improved reliability'],
  },
  {
    id: 'integrations',
    title: 'Third-Party API Integrations',
    description:
      'Connecting external services securely into your backend, with sensible handling of failures and retries.',
    outcomes: ['Secure integration', 'Failure handling', 'Cleaner data flow'],
  },
]

/**
 * Shared domain types for the portfolio.
 *
 * Personal content lives in `src/data/*` and is typed against these
 * definitions so the owner can safely edit content without touching
 * layout components.
 */

/** Lifecycle status of a project, used to drive the status badge. */
export type ProjectStatus =
  | 'live'
  | 'in-progress'
  | 'prototype'
  | 'internal'
  | 'unverified'

/** Abstract CSS visual variants - no fabricated screenshots. */
export type ProjectVisual =
  | 'platform'
  | 'catering'
  | 'recruitment'
  | 'gym'
  | 'restaurant'
  | 'generic'

export interface Project {
  /** Stable identifier used for keys and in-page anchors. */
  id: string
  name: string
  /** One-line summary shown on the card. */
  tagline: string
  /** Short category label, e.g. "SaaS Platform". */
  category: string
  /** Short paragraph grounded in the CV — what the product is. */
  description: string
  /** The problem the product solves, in one or two sentences. */
  problem: string
  /** Concrete things I did on the project. */
  contribution: string[]
  /** Engineering challenges / what was non-trivial. */
  challenges?: string[]
  technologies: string[]
  status: ProjectStatus
  /** Human-readable status text rendered in the badge. */
  statusLabel: string
  /**
   * Optional muted clarification shown under the badge, used to disclose
   * anything that is not yet verified without overstating it.
   */
  statusNote?: string
  /** Optional links - only set once a URL has been verified. */
  repoUrl?: string
  demoUrl?: string
  /** Whole-project context, e.g. employer platform vs independent project. */
  context?: string
  /** True for self-directed personal projects; absent for professional work. */
  independent?: boolean
  /** Higher number renders first. */
  order?: number
  /** Set to true to hide a project without deleting it. */
  hidden?: boolean
  visual: ProjectVisual
}

export interface SkillGroup {
  id: string
  title: string
  summary: string
  skills: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  start: string
  end: string
  /** Human readable period, e.g. "February 2024 – February 2026". */
  period: string
  location?: string
  summary: string
  /** Curated, outcome-focused points — not a copy of the CV bullet list. */
  impact: string[]
  /** Technologies used in the role, shown as a compact line. */
  stack?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  outcomes: string[]
}

export interface LanguageProficiency {
  name: string
  level: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

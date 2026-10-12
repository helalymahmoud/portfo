import type { BadgeTone } from '../components/ui/Badge'
import type { ProjectStatus } from '../types'

/** Single source of truth mapping a project status to a badge tone. */
export const PROJECT_STATUS_TONE: Record<ProjectStatus, BadgeTone> = {
  live: 'strong',
  'in-progress': 'accent',
  prototype: 'accent',
  internal: 'neutral',
  unverified: 'muted',
}

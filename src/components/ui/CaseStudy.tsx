import { ArrowUpRight, Info } from 'lucide-react'
import { PROJECT_STATUS_TONE } from '../../lib/projectStatus'
import { cn } from '../../lib/utils'
import type { Project } from '../../types'
import { Badge } from './Badge'
import { GitHubIcon } from './BrandIcons'
import { ButtonLink } from './Button'
import { Chip } from './Chip'
import { DetailLabel } from './DetailLabel'
import { ProjectMock } from './ProjectMock'

interface CaseStudyProps {
  project: Project
  /** Which side the visual sits on in the desktop two-column layout. */
  orientation?: 'left' | 'right'
  /** Featured studies get a larger heading and a two-column detail area. */
  featured?: boolean
}

/**
 * A project presented as a short case study: what it is, the problem it
 * addresses, concrete contributions, engineering focus and stack.
 * Only verified information from `src/data/projects.ts` is rendered.
 */
export function CaseStudy({ project, orientation = 'left', featured = false }: CaseStudyProps) {
  const challenges = project.challenges ?? []
  const hasLinks = Boolean(project.repoUrl || project.demoUrl)

  return (
    <article
      id={`project-${project.id}`}
      className={cn(
        'scroll-mt-24 rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-7',
        featured && 'lg:p-9',
      )}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <ProjectMock
          variant={project.visual}
          className={orientation === 'right' ? 'lg:order-2' : undefined}
        />

        <div className={cn('min-w-0', orientation === 'right' && 'lg:order-1')}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="neutral">{project.category}</Badge>
            <Badge tone={PROJECT_STATUS_TONE[project.status]}>{project.statusLabel}</Badge>
          </div>

          <h3
            className={cn(
              'mt-4 font-semibold text-ink',
              featured ? 'text-2xl sm:text-[1.9rem]' : 'text-2xl',
            )}
          >
            {project.name}
          </h3>

          {project.context ? (
            <p className="mt-2 font-mono text-[0.7rem] tracking-wide text-ink-faint">
              {project.context}
            </p>
          ) : null}

          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{project.tagline}</p>

          <div className={cn('mt-6 grid gap-6', featured && 'sm:grid-cols-2')}>
            <div>
              <DetailLabel>What it is</DetailLabel>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
            </div>

            <div>
              <DetailLabel>The problem</DetailLabel>
              <p className="mt-2 border-l-2 border-accent pl-3 text-sm leading-relaxed text-ink-muted">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <DetailLabel>What I did</DetailLabel>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {project.contribution.map((item) => (
                <li key={item}>
                  <Chip>{item}</Chip>
                </li>
              ))}
            </ul>
          </div>

          {challenges.length > 0 ? (
            <div className="mt-6">
              <DetailLabel>Engineering focus</DetailLabel>
              <ul className="mt-2.5 space-y-2">
                {challenges.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-accent/70"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.technologies.length > 0 ? (
            <p className="mt-6 font-mono text-xs text-ink-faint">
              {project.technologies.join('  ·  ')}
            </p>
          ) : null}

          {project.statusNote ? (
            <p className="mt-3 flex items-start gap-2 text-xs text-ink-faint">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              {project.statusNote}
            </p>
          ) : null}

          {hasLinks ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <ButtonLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live demo
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              ) : null}
              {project.repoUrl ? (
                <ButtonLink
                  href={project.repoUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="size-4" />
                  Repository
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

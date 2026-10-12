import { ArrowUpRight, Info } from 'lucide-react'
import { PROJECT_STATUS_TONE } from '../../lib/projectStatus'
import type { Project } from '../../types'
import { Badge } from './Badge'
import { GitHubIcon } from './BrandIcons'
import { ButtonLink } from './Button'
import { Chip } from './Chip'
import { ProjectMock } from './ProjectMock'

/** Compact card used for the independent / personal projects group. */
export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.repoUrl || project.demoUrl)

  return (
    <article
      id={`project-${project.id}`}
      className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-surface p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
    >
      <ProjectMock variant={project.visual} />

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge tone="neutral">{project.category}</Badge>
        <Badge tone={PROJECT_STATUS_TONE[project.status]}>{project.statusLabel}</Badge>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-ink">{project.name}</h3>
      <p className="mt-1.5 text-sm text-ink-muted">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.contribution.map((item) => (
          <li key={item}>
            <Chip>{item}</Chip>
          </li>
        ))}
      </ul>

      {project.technologies.length > 0 ? (
        <p className="mt-4 font-mono text-xs text-ink-faint">
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
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.demoUrl ? (
            <ButtonLink href={project.demoUrl} size="md" target="_blank" rel="noopener noreferrer">
              Live demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          ) : null}
          {project.repoUrl ? (
            <ButtonLink
              href={project.repoUrl}
              variant="secondary"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="size-4" />
              Repository
            </ButtonLink>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

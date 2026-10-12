import { visibleProjects } from '../../data/projects'
import { CaseStudy } from '../ui/CaseStudy'
import { Container } from '../ui/Container'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const professional = visibleProjects.filter((project) => !project.independent)
const independent = visibleProjects.filter((project) => project.independent)
const [featured, ...rest] = professional

export function Work() {
  return (
    <Section id="work" labelledBy="work-title" className="bg-surface-muted">
      <Container>
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Systems I designed and shipped."
          description="Each project below is described honestly — what the product does, the problem it solves and the part I actually built. Visuals are conceptual illustrations, not screenshots of live systems."
        />

        <div className="mt-12 space-y-8 lg:space-y-12">
          {featured ? (
            <Reveal>
              <CaseStudy project={featured} featured />
            </Reveal>
          ) : null}

          {rest.map((project, index) => (
            <Reveal key={project.id}>
              <CaseStudy project={project} orientation={index % 2 === 0 ? 'right' : 'left'} />
            </Reveal>
          ))}
        </div>

        {independent.length > 0 ? (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-ink">Independent projects</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
              Personal projects built on my own time, separate from client work. Anything that still
              needs confirmation is marked rather than padded with guesses.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {independent.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  )
}

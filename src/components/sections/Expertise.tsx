import { skillGroups } from '../../data/skills'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Expertise() {
  return (
    <Section id="expertise" labelledBy="expertise-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              id="expertise-title"
              eyebrow="Expertise"
              title="Depth where it matters."
              description="Grouped by discipline rather than scored with progress bars — these are the areas I work in day to day, backed by the projects and experience above."
            />
            <p className="mt-6 border-l-2 border-accent pl-4 font-mono text-xs leading-relaxed text-ink-faint">
              No proficiency percentages. Tools I have not used in production are not listed.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={(index % 2) * 0.05}>
                <div className="border-t border-line pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-semibold text-ink">{group.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{group.summary}</p>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-ink-faint">
                    {group.skills.join('  ·  ')}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

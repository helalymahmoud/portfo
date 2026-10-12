import { GraduationCap, MapPin } from 'lucide-react'
import { education, experience } from '../../data/experience'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { DetailLabel } from '../ui/DetailLabel'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" className="bg-surface-muted">
      <Container>
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I have done the work."
          description="A summary of the contributions that matter, not a copy of the CV. Dates and facts are taken directly from it."
        />

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <Reveal key={item.id}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                      <h3 className="text-xl font-semibold text-ink">{item.company}</h3>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent">{item.role}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-xs tracking-wide text-ink-muted">{item.period}</p>
                    {item.location ? (
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink-faint">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {item.location}
                      </p>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-muted">{item.summary}</p>

                <div className="mt-6">
                  <DetailLabel>Impact &amp; contributions</DetailLabel>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {item.impact.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-ink-muted">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent/70"
                        />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {item.stack && item.stack.length > 0 ? (
                  <p className="mt-6 border-t border-line pt-5 font-mono text-xs text-ink-faint">
                    {item.stack.join('  ·  ')}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                <DetailLabel>Education</DetailLabel>
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink">{education.degree}</h3>
              <p className="mt-1 text-sm text-ink-muted">{education.institution}</p>
              <p className="mt-3 font-mono text-xs text-ink-faint">{education.period}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card">
              <DetailLabel>Core toolbox</DetailLabel>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {profile.coreStack.join('  ·  ')}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

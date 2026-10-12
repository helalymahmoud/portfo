import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              id="about-title"
              eyebrow="About"
              title="Backend work is mostly invisible — that is the point."
              description={profile.about.lead}
            />

            <div className="mt-8 space-y-5">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
              {profile.principles.map((principle, index) => (
                <div key={principle.title}>
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{principle.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-accent font-mono text-lg font-semibold text-accent-ink shadow-accent">
                  {profile.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-ink">{profile.name}</p>
                  <p className="text-sm text-ink-muted">Backend Engineer · Node.js</p>
                </div>
              </div>

              <dl className="mt-6 space-y-4 border-t border-line pt-6">
                <div>
                  <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{profile.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
                    Languages
                  </dt>
                  <dd className="mt-1 space-y-0.5">
                    {profile.languages.map((language) => (
                      <p key={language.name} className="text-sm text-ink">
                        {language.name}
                        <span className="ml-2 text-xs text-ink-faint">{language.level}</span>
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <figure
              aria-hidden="true"
              className="mt-4 rounded-2xl border border-line bg-surface-muted p-5"
            >
              <figcaption className="font-mono text-[0.6rem] tracking-[0.16em] text-ink-faint uppercase">
                profile.ts
              </figcaption>
              <pre className="mt-3 max-w-full overflow-x-auto font-mono text-[0.72rem] leading-relaxed text-ink-muted">
                <code>{`const engineer = {
  role: 'Backend Engineer',
  stack: ['Node.js', 'PostgreSQL'],
  focus: ['apis', 'data', 'realtime'],
}`}</code>
              </pre>
            </figure>
          </aside>
        </div>
      </Container>
    </Section>
  )
}

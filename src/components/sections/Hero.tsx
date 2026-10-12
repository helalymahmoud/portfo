import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { CvDownloadButton } from '../ui/CvDownloadButton'
import { Eyebrow } from '../ui/Eyebrow'
import { FlowDiagram } from '../ui/FlowDiagram'
import { Reveal } from '../ui/Reveal'

const SIGNALS = [
  { label: 'Experience', value: '2+ years building Node.js backends' },
  { label: 'Worked on', value: 'Production SaaS platforms' },
  { label: 'APIs', value: 'REST & GraphQL' },
  { label: 'Based in', value: profile.location },
]

/** Emphasise part of the headline in the accent colour. */
function withAccent(headline: string, accent: string): ReactNode {
  const index = headline.toLowerCase().indexOf(accent.toLowerCase())
  if (index === -1) return headline

  return (
    <>
      {headline.slice(0, index)}
      <span className="text-accent">{headline.slice(index, index + accent.length)}</span>
      {headline.slice(index + accent.length)}
    </>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-glow pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(78%_58%_at_50%_0%,black,transparent_78%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <Reveal>
              <Eyebrow>{profile.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]">
                {withAccent(profile.headline, profile.headlineAccent)}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                {profile.heroCopy}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="#work" size="lg">
                  Explore selected work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  Get in touch
                </ButtonLink>
                <CvDownloadButton variant="ghost" size="lg" />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-faint uppercase">
                  Focus
                </p>
                <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {profile.focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2.5 text-sm text-ink-muted">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-xs text-ink-faint">
                  {profile.coreStack.join('  ·  ')}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="min-w-0">
            <FlowDiagram />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SIGNALS.map((signal) => (
              <div key={signal.label} className="bg-surface px-5 py-4">
                <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
                  {signal.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-ink">{signal.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

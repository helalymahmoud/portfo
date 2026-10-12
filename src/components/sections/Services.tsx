import { ArrowRight, Check } from 'lucide-react'
import { services } from '../../data/services'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="How I can help."
          description="The kind of backend work I take on for teams and clients — scoped honestly and built on the same foundations as the projects above."
        />

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal>
                <div className="grid gap-4 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start lg:gap-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-semibold text-ink">{service.title}</h3>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>

                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 lg:justify-end">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-center gap-1.5 text-xs text-ink-faint"
                      >
                        <Check className="size-3.5 text-accent" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl bg-accent p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-accent-ink">
                  Have a backend to build or fix?
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-accent-tint">
                  Tell me what you are working on and where it is getting stuck — I will reply with
                  an honest read on whether I can help.
                </p>
              </div>
              <ButtonLink href="#contact" variant="inverse" size="lg" className="shrink-0">
                Start a conversation
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}

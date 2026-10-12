import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { ComponentType, ReactNode, SVGProps } from 'react'
import { profile, socialLinks } from '../../data/profile'
import { ButtonLink } from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import { Container } from '../ui/Container'
import { CvDownloadButton } from '../ui/CvDownloadButton'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const WHATSAPP_URL = 'https://wa.me/201028727462'
const TEL_URL = 'tel:+201028727462'

const SOCIAL_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

const configuredSocials = socialLinks.filter((link) => link.href.trim().length > 0)

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm text-ink">{children}</dd>
    </div>
  )
}

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              id="contact-title"
              eyebrow="Contact"
              title="Let’s build something reliable."
              description="Have a backend role, a project in mind or a technical question? Email is the fastest way to reach me — I read every message."
            />

            <Reveal className="mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="group flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold tracking-tight text-ink sm:text-[1.75rem]"
              >
                <span className="min-w-0 border-b-2 border-accent/30 pb-0.5 break-all transition-colors group-hover:border-accent">
                  {profile.email}
                </span>
                <ArrowUpRight
                  className="size-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`} size="lg">
                <Mail className="size-4" aria-hidden="true" />
                Email me
              </ButtonLink>
              <ButtonLink
                href={WHATSAPP_URL}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </ButtonLink>
            </Reveal>

            <Reveal className="mt-6">
              <CvDownloadButton
                variant="ghost"
                size="lg"
                statusPlacement="inline"
                label="Download CV (PDF)"
              />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0">
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
              <dl className="divide-y divide-line">
                <ContactRow label="Email">
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-all transition-colors hover:text-accent"
                  >
                    {profile.email}
                  </a>
                </ContactRow>

                <ContactRow label="Phone">
                  <a
                    href={TEL_URL}
                    className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <Phone className="size-3.5" aria-hidden="true" />
                    {profile.phoneDisplay}
                  </a>
                </ContactRow>

                <ContactRow label="Location">
                  <span className="inline-flex items-center gap-2 text-ink-muted">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {profile.location}
                  </span>
                </ContactRow>

                <ContactRow label="Languages">
                  <ul className="space-y-1 text-ink-muted">
                    {profile.languages.map((language) => (
                      <li key={language.name}>
                        {language.name} — {language.level}
                      </li>
                    ))}
                  </ul>
                </ContactRow>

                {configuredSocials.length > 0 ? (
                  <ContactRow label="Profiles">
                    <ul className="flex flex-wrap gap-4">
                      {configuredSocials.map((link) => {
                        const Icon = SOCIAL_ICONS[link.id]
                        return (
                          <li key={link.id}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                            >
                              {Icon ? <Icon className="size-3.5" /> : null}
                              {link.label}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </ContactRow>
                ) : null}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

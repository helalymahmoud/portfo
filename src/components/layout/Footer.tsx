import { Mail } from 'lucide-react'
import { navItems, profile, socialLinks } from '../../data/profile'
import { Container } from '../ui/Container'

const configuredSocials = socialLinks.filter((link) => link.href.trim().length > 0)

/** Computed once when the module loads rather than on every render. */
const COPYRIGHT_YEAR = new Date().getFullYear()

export function Footer() {
  const year = COPYRIGHT_YEAR

  return (
    <footer className="border-t border-line bg-surface-muted">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-accent font-mono text-sm font-semibold text-accent-ink">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink">
                {profile.displayName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              {profile.role} · {profile.title.split('|')[1]?.trim() ?? 'Node.js'}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
            >
              <Mail className="size-4" aria-hidden="true" />
              {profile.email}
            </a>
          </div>

          <div className="sm:justify-self-end">
            <h2 className="font-mono text-[0.62rem] tracking-[0.16em] text-ink-faint uppercase">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {configuredSocials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {configuredSocials.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {year} {profile.displayName}. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">
            {profile.location} · Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}

import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Expertise } from './components/sections/Expertise'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Work } from './components/sections/Work'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Work />
        <Expertise />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

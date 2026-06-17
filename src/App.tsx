import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="guri-rule" />
        <About />
        <Work />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <footer className="footer">
        <span className="footer-copy">© 2026 José Armas · Caracas, Venezuela</span>
        <span className="footer-copy">armasjose606@gmail.com</span>
      </footer>
    </>
  )
}

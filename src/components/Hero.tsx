import { KineticStripes } from './KineticStripes'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="hero-name">
          JOSÉ<br />ARMAS
        </h1>
        <p className="hero-role">Backend Engineer</p>
        <p className="hero-location">Caracas, Venezuela · 2026</p>
        <a href="#about" className="hero-cta" aria-label="Jump to About">
          <span className="hero-cta-line" />
          ↓
        </a>
      </div>
      <KineticStripes />
    </section>
  )
}

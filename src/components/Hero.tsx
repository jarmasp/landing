import { KineticStripes } from './KineticStripes'

export function Hero() {
  return (
    <section className="hero">
      <KineticStripes />
      <div className="hero-body">
        <h1 className="hero-name">
          JOSÉ<br />ARMAS
        </h1>
        <p className="hero-role">Backend Engineer</p>
        <p className="hero-location">Caracas, Venezuela · 2026</p>
        <span className="hero-cta">
          <span className="hero-cta-line" />
          Scroll
        </span>
      </div>
    </section>
  )
}

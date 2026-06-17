export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <div className="about-grid">
          <div className="about-photo-frame">
            <img
              src="./me.jpg"
              alt="José Armas"
              className="about-photo"
            />
            <div className="about-photo-overlay" />
            <p className="about-photo-caption">Caracas, Venezuela</p>
          </div>
          <div className="about-body">
            <p>
              Venezuelan engineer based in Caracas. I build backend systems — the kind that have to work
              at scale, under pressure, in domains where a bug means money lost or access exposed.
            </p>
            <p>
              I'm drawn to the point where complexity starts to make sense. There's an order underneath
              distributed systems, cryptographic primitives, and fintech flows — finding it is what keeps
              me interested. Precision is a form of respect for the problem.
            </p>
            <p>
              Currently helping build <strong>Cashea</strong>, Venezuela's BNPL platform — Buy Now, Pay Later
              infrastructure operating across merchant verticals at real scale. The backend stack is NestJS
              on GCP, with gRPC between services and Firebase for auth.
            </p>
            <p>
              On the side: <strong>Void Foundry</strong> — my personal lab for crypto primitives. HD wallets,
              secp256k1 math, transaction indexers, EVM contracts. The kind of thing you build when you want
              to understand how something actually works, not just use the library.
            </p>
            <p>
              Fan of tea at any hour, coffee in the morning, and music at every other moment.
            </p>
            <div className="about-links">
              <a
                href="https://github.com/jarmasp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                ↗ GitHub
              </a>
              <a href="mailto:armasjose606@gmail.com" className="btn-outline">
                → Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

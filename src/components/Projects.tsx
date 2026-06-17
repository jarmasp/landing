interface VFModule {
  name: string
  desc: string
  url: string
}

const VF_MODULES: VFModule[] = [
  { name: 'crypto-utils',   url: 'https://github.com/void-foundry/crypto-utils',   desc: 'secp256k1 elliptic curve primitives, Ethereum canonical signing, key-to-address derivation. Published as @void-foundry/crypto-utils.' },
  { name: 'hd-wallet-core', url: 'https://github.com/void-foundry/hd-wallet-core', desc: 'BIP-32/44 hierarchical deterministic wallets from scratch, cross-validated against MetaMask. xpub watch-only, safe derive CLI.' },
  { name: 'tx-indexer',     url: 'https://github.com/void-foundry/tx-indexer',     desc: 'NestJS blockchain indexer. TypeORM entities, RabbitMQ event bus, migration-ready DataSource, full Docker Compose dev stack.' },
  { name: 'smart-wallet',   url: 'https://github.com/void-foundry/smart-wallet',   desc: 'EVM smart wallet contracts on Hardhat. On-chain verification, contract test harness, semver-exposed version view.' },
  { name: 'observability',  url: 'https://github.com/void-foundry',                desc: 'Self-hosted Grafana + Prometheus + Loki + Tempo. Zero SaaS cost. OTLP receiver, smoke tests, governance tooling.' },
]

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <div className="projects-mosaic">
          <a
            href="https://github.com/void-foundry"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-void"
          >
            <div className="project-header">
              <span className="project-name">Void Foundry</span>
              <span className="project-arrow">↗</span>
            </div>
            <p className="project-desc">
              Personal crypto infrastructure lab. Real implementations from the math up: elliptic curve primitives,
              HD wallet derivation, EVM contracts, transaction indexing, and a full self-hosted observability stack.
              No shortcuts, no black boxes.
            </p>
            <div className="void-modules">
              {VF_MODULES.map((m) => (
                <div key={m.name} className="void-module">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="void-module-name"
                    onClick={e => e.stopPropagation()}
                  >
                    {m.name}
                  </a>
                  <span className="void-module-desc">{m.desc}</span>
                </div>
              ))}
            </div>
            <div className="tags" style={{ marginTop: '1rem' }}>
              {['TypeScript', 'Solidity', 'secp256k1', 'NestJS', 'Hardhat', 'Docker'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </a>

          <a
            href="https://github.com/jarmasp/mobility-inc"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-header">
              <span className="project-name">mobility-inc</span>
              <span className="project-arrow">↗</span>
            </div>
            <p className="project-desc">
              Multi-language microservices demo — NestJS, Spring Boot, and Go communicating over gRPC.
              PostgreSQL backend, JWT auth, riders/drivers/payments domains, Flyway migrations,
              full Testcontainers e2e suite.
            </p>
            <div className="tags">
              {['NestJS', 'Go', 'Spring Boot', 'gRPC', 'Testcontainers'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

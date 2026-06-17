interface Project {
  name: string
  sub?: string
  desc: string
  tags: string[]
  href: string
  wide?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Void Foundry',
    desc: 'Personal crypto infrastructure lab. Real implementations from the math up: elliptic curve primitives, HD wallet derivation, EVM contracts, transaction indexing, and full observability stack. No shortcuts, no black boxes.',
    tags: ['TypeScript', 'Solidity', 'secp256k1', 'NestJS'],
    href: 'https://github.com/jarmasp',
    wide: true,
  },
  {
    name: 'crypto-utils',
    sub: 'Void Foundry',
    desc: 'secp256k1 elliptic curve primitives. Ethereum canonical signature scheme (v=27/28), key-to-address derivation, and message signing. Published as @void-foundry/crypto-utils. 98% test coverage via TDD.',
    tags: ['TypeScript', 'secp256k1', 'Ethereum', 'TDD'],
    href: 'https://github.com/jarmasp',
  },
  {
    name: 'hd-wallet-core',
    sub: 'Void Foundry',
    desc: 'BIP-32/44 hierarchical deterministic wallets from scratch. Real key derivation cross-validated against MetaMask. xpub watch-only wallet support, safe derive CLI, mnemonic validation.',
    tags: ['TypeScript', 'BIP-32', 'BIP-44', 'Cryptography'],
    href: 'https://github.com/jarmasp',
  },
  {
    name: 'tx-indexer',
    sub: 'Void Foundry',
    desc: 'NestJS blockchain transaction indexer. TypeORM entities (Block, Transaction, TokenTransfer, OutboxEvent), RabbitMQ event bus, migration-ready DataSource, full Docker Compose dev stack.',
    tags: ['NestJS', 'TypeORM', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    href: 'https://github.com/jarmasp',
  },
  {
    name: 'smart-wallet',
    sub: 'Void Foundry',
    desc: 'EVM smart wallet contracts on Hardhat. On-chain verification, contract test harness, semver-exposed version view.',
    tags: ['Solidity', 'Hardhat', 'EVM', 'TypeScript'],
    href: 'https://github.com/jarmasp',
  },
  {
    name: 'observability',
    sub: 'Void Foundry',
    desc: 'Self-hosted Grafana + Prometheus + Loki + Tempo stack. Zero SaaS cost. Datasource UIDs, Loki ring kvstore, OTLP receiver, smoke tests, governance tooling.',
    tags: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'Docker'],
    href: 'https://github.com/jarmasp',
  },
  {
    name: 'mobility-inc',
    desc: 'Multi-language microservices (NestJS + Spring Boot + Go) communicating over gRPC. PostgreSQL backend, JWT auth, riders/drivers/payments domains, Flyway migrations, full Testcontainers e2e suite.',
    tags: ['NestJS', 'Go', 'Spring Boot', 'gRPC', 'Testcontainers'],
    href: 'https://github.com/jarmasp',
  },
]

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 — Projects</span>
          <div className="section-rule" />
        </div>
        <div className="projects-mosaic">
          {PROJECTS.map((p) => (
            <a
              key={p.name + (p.sub ?? '')}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card${p.wide ? ' project-void' : ''}`}
            >
              <div className="project-header">
                <span className="project-name">{p.name}</span>
                <span className="project-arrow">↗</span>
              </div>
              {p.sub && <span className="project-sub">{p.sub}</span>}
              <p className="project-desc">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

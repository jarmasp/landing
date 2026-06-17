interface Tier {
  label: string
  items: string[]
}

const TIERS: Tier[] = [
  {
    label: 'Core',
    items: ['NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'gRPC', 'Docker', 'GCP'],
  },
  {
    label: 'Working',
    items: ['TypeORM', 'RabbitMQ', 'Firebase', 'Apigee', 'LaunchDarkly', 'Jest', 'Testcontainers', 'Pino', 'OpenTelemetry'],
  },
  {
    label: 'Exploring',
    items: ['Go', 'Solidity', 'secp256k1', 'Grafana', 'Prometheus', 'Loki'],
  },
]

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <p className="section-label">Stack</p>
        <div className="stack-tiers">
          {TIERS.map(({ label, items }) => (
            <div key={label} className="stack-tier">
              <span className="stack-tier-label">{label}</span>
              <div className="stack-tier-items">
                {items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

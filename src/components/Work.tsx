interface Job {
  company: string
  role: string
  period: string
  context: string
  bullets: string[]
  tags: string[]
}

const WORK: Job[] = [
  {
    company: 'Cashea',
    role: 'Backend Engineer',
    period: 'Aug 2023 – Present',
    context:
      "Venezuela's BNPL fintech — Buy Now, Pay Later infrastructure across multiple merchant verticals, running at production scale on GCP.",
    bullets: [
      'Closed a token-revocation gap in employee auth across 2 production services — 7-day inactivity expiration, Firebase refresh-token revocation, and decorator-driven re-auth recovery paths on top of the team\'s shared auth infrastructure.',
      'Delivered the employee CRUD vertical slice end-to-end: gRPC service contracts, Apigee proxy configuration across dev/staging/prod, and a Redis-backed reusable @RateLimit decorator replacing per-endpoint in-memory interceptors.',
      'Migrated business logic out of the monolith into dedicated microservices, wiring inter-service communication over gRPC through Apigee.',
      'Overhauled ally-experience-api testing infrastructure: Jest 30 migration, Testcontainers integration harness, pre-commit lint/unit hooks, and PR-blocking CI workflows — raising the confidence floor across the team.',
      'Shipped multiple LaunchDarkly-gated rollouts across payment, order, and auth domains — including zero-down-payment confirmation and forced user password rotation.',
      'Built Retool-facing endpoints for real-time financial operations consumed by internal audit and collections teams.',
      'Maintained GitHub Actions pipelines with unit and integration test stages; supervised production deploys via platform metrics.',
    ],
    tags: ['TypeScript', 'NestJS', 'gRPC', 'Redis', 'PostgreSQL', 'Firebase', 'GCP', 'LaunchDarkly', 'Testcontainers', 'Apigee'],
  },
  {
    company: 'Applaudo',
    role: 'Software Developer',
    period: 'Nov 2022 – Jun 2023',
    context: 'Remote, cross-functional product team delivering internal tooling across multiple products.',
    bullets: [
      'Built first-party IT and HR tooling that replaced a third-party service dependency with a first-party owned solution.',
      'Delivered ticket-driven features across multiple internal products in an agile, cross-functional environment.',
    ],
    tags: ['TypeScript', 'Node.js', 'REST', 'Agile'],
  },
]

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <p className="section-label">Experience</p>
        {WORK.map((job) => (
          <div key={job.company} className="work-entry">
            <div className="work-top">
              <span className="work-company">{job.company}</span>
              <span className="work-period">{job.period}</span>
            </div>
            <p className="work-role">{job.role}</p>
            <p className="work-context">{job.context}</p>
            <ul className="work-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="tags">
              {job.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

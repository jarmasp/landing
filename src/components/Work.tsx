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
      'Designed the employee session security layer across 3 production microservices: 7-day inactivity expiration, Firebase refresh-token revocation, and decorator-driven re-auth recovery paths — closing a token-revocation gap at merchant scale.',
      'Shipped the employee management vertical slice end-to-end: gRPC service contracts, identity-auth SDK integration, Apigee proxy configuration across dev/staging/prod, and a Redis-backed reusable @RateLimit decorator replacing per-endpoint in-memory interceptors.',
      'Overhauled ally-experience-api testing infrastructure: Jest 30 migration, Testcontainers integration harness, pre-commit lint/unit hooks, and PR-blocking CI workflows — raising the confidence floor across the team.',
      'Integrated Pino structured logging and GCP Secret Manager lazy-init into the NestJS observability bootstrap; wired into the shared @cashea-bnpl/observability package.',
      'Delivered zero-down-payment confirmation behind a LaunchDarkly feature flag, coordinating rollout across the payment and order domains.',
      'Built Retool-facing endpoints for real-time financial operations consumed by internal audit and collections teams.',
    ],
    tags: ['TypeScript', 'NestJS', 'gRPC', 'Redis', 'PostgreSQL', 'Firebase', 'GCP', 'LaunchDarkly', 'Testcontainers', 'Apigee', 'Pino'],
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

interface StackItem { name: string; cat: string }

const STACK: StackItem[] = [
  { name: 'TypeScript',      cat: 'Language'     },
  { name: 'Node.js',         cat: 'Runtime'      },
  { name: 'NestJS',          cat: 'Framework'    },
  { name: 'Express.js',      cat: 'Framework'    },
  { name: 'PostgreSQL',      cat: 'Database'     },
  { name: 'Redis',           cat: 'Cache'        },
  { name: 'MongoDB',         cat: 'Database'     },
  { name: 'TypeORM',         cat: 'ORM'          },
  { name: 'gRPC',            cat: 'Protocol'     },
  { name: 'REST',            cat: 'Protocol'     },
  { name: 'RabbitMQ',        cat: 'Messaging'    },
  { name: 'Docker',          cat: 'Infra'        },
  { name: 'GCP',             cat: 'Cloud'        },
  { name: 'Firebase',        cat: 'Cloud'        },
  { name: 'Apigee',          cat: 'API Gateway'  },
  { name: 'LaunchDarkly',    cat: 'Feature Flags'},
  { name: 'Jest',            cat: 'Testing'      },
  { name: 'Testcontainers',  cat: 'Testing'      },
  { name: 'Biome',           cat: 'Tooling'      },
  { name: 'OpenTelemetry',   cat: 'Observability'},
  { name: 'Grafana',         cat: 'Observability'},
  { name: 'Prometheus',      cat: 'Observability'},
  { name: 'Go',              cat: 'Language'     },
  { name: 'Solidity',        cat: 'Language'     },
]

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 — Stack</span>
          <div className="section-rule" />
        </div>
        <div className="stack-grid">
          {STACK.map((s) => (
            <div key={s.name} className="stack-cell">
              <span className="stack-name">{s.name}</span>
              <span className="stack-cat">{s.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

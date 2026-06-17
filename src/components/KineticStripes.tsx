import { CSSProperties } from 'react'

const COUNT = 24

export function KineticStripes() {
  return (
    <div className="kinetic" role="presentation" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, i) => (
        <div
          key={i}
          className="kinetic-stripe"
          style={{ '--i': i } as CSSProperties}
        />
      ))}
    </div>
  )
}

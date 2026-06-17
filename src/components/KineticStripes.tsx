import { CSSProperties, useEffect, useState } from 'react'

const COLORS = [
  '#0C0A08', // deep black
  '#9A0E1E', // crimson
  '#C82020', // red
  '#D84E10', // vermilion
  '#DC7010', // orange
  '#C89A10', // amber / gold — from the Chromosaturation murals
  '#1A4AAA', // cobalt blue — Cruz-Diez blue
  '#5A1A50', // dark mauve
]

const COUNT = 16

export function KineticStripes() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % COLORS.length), 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="kinetic" role="presentation" aria-hidden="true">
      {Array.from({ length: COUNT }, (_, i) => (
        <div
          key={i}
          className="kinetic-stripe"
          style={{
            '--i': i,
            backgroundColor: COLORS[(i + phase) % COLORS.length],
          } as CSSProperties}
        />
      ))}
    </div>
  )
}

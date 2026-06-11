import { useCountUp } from '@/hooks/useScrollReveal'

interface StatItem {
  value: number
  suffix: string
  label: string
  static?: boolean
  staticDisplay?: string
}

const stats: StatItem[] = [
  { value: 3, suffix: '', label: 'Brokers (MT5 · Alpaca · Binance)' },
  { value: 0, suffix: '', label: 'Autonomous Uptime', static: true, staticDisplay: '24/7' },
  { value: 0, suffix: '', label: 'Unvalidated strategies traded live', static: true, staticDisplay: '0' },
  { value: 0, suffix: '', label: 'Default mode', static: true, staticDisplay: 'Paper' },
]

function AnimatedStat({
  stat,
  isLast,
}: {
  stat: StatItem
  isLast: boolean
}) {
  const { count, ref } = useCountUp(stat.value, 2200, true)

  return (
    <div
      ref={ref}
      className={`text-center py-6 ${
        !isLast ? 'md:border-r md:border-white/[0.04]' : ''
      }`}
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
        {stat.static ? stat.staticDisplay : count}
        {!stat.static && (
          <span className="text-gradient-gold">{stat.suffix}</span>
        )}
      </div>
      <p className="font-mono text-xs tracking-[0.2em] text-octopus-muted uppercase mt-3">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 px-6 lg:px-12">
      {/* Top and bottom rules */}
      <div className="absolute inset-x-0 top-0 border-t border-white/[0.04]" />
      <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.04]" />

      {/* Faint radial glow */}
      <div
        className="absolute inset-0 bg-radial-fade pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Typographic statement */}
        <h2 className="font-display text-display-md font-bold text-octopus-cream/90 text-center leading-tight">
          Honest about what works
        </h2>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-12">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Check, X, ShieldCheck, Eye, KeyRound, Scale } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type Cell = string | boolean

type Row = {
  feature: string
  octopus: Cell
  bots: Cell
  copy: Cell
}

const rows: Row[] = [
  // The differentiators that matter come first.
  { feature: 'Strategies validated against a random-entry control (out-of-sample)', octopus: true, bots: false, copy: false },
  { feature: 'Shows you its LOSING strategies, not just the winners', octopus: true, bots: false, copy: false },
  { feature: 'Watch the AI agents debate every decision (no black box)', octopus: true, bots: false, copy: false },
  { feature: 'Paper-first by default; live needs your explicit confirmation', octopus: true, bots: false, copy: 'Limited' },
  { feature: 'One-tap kill switch halts everything (even on a VPS)', octopus: true, bots: false, copy: false },
  { feature: 'No performance promises · no "while you sleep" claims', octopus: true, bots: false, copy: false },

  // Table stakes / mechanics.
  { feature: 'Non-custodial — your broker, your keys, your machine', octopus: true, bots: false, copy: false },
  { feature: 'Risk governor: per-trade risk % + daily-loss cap', octopus: true, bots: 'Limited', copy: 'Limited' },
  { feature: 'Self-improving — but every new idea is re-validated first', octopus: true, bots: false, copy: false },
  { feature: 'Live terminal deck + web dashboard', octopus: true, bots: 'Limited', copy: 'Limited' },
  { feature: 'Self-hosted & open — you run it, nothing phones home', octopus: true, bots: false, copy: false },
  { feature: 'Brokers supported (MT5 / Alpaca / Binance)', octopus: '3', bots: 'Varies', copy: '1' },
]

const headlines = [
  {
    icon: ShieldCheck,
    title: 'Validated, or it doesn’t trade',
    body: 'Every strategy must beat a random-entry control out-of-sample before it risks a cent. Most ideas fail that test — and Octopus tells you so instead of hiding it.',
  },
  {
    icon: Eye,
    title: 'Radically transparent',
    body: 'You watch the bull and bear argue, see the judge’s verdict, and read the audit. The losing strategies are on the scoreboard right next to the winners.',
  },
  {
    icon: KeyRound,
    title: 'You hold the keys',
    body: 'Non-custodial and paper-first. It runs on your machine, trades your broker, and never goes live without you typing the confirmation. Kill switch always one tap away.',
  },
  {
    icon: Scale,
    title: 'No promises — just evidence',
    body: 'No “turn $X into $Y”. The honest result is that most strategies have no edge; Octopus is built to find the rare ones that hold up, and prove it on paper first.',
  },
]

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="w-5 h-5 text-octopus-gold mx-auto" strokeWidth={2.5} />
  if (value === false) return <X className="w-5 h-5 text-octopus-cream/30 mx-auto" strokeWidth={2} />
  return <span className="text-octopus-cream/80 text-xs font-mono">{value}</span>
}

export default function WhyOctopus() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="why-octopus" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(40px)',
          }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            WHY OCTOPUS
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-light tracking-tight">
            Four things a trading bot won’t tell you.
          </h2>
          <p className="mt-4 text-octopus-cream/70 max-w-2xl">
            Most “AI trading” products sell a dream and hide the losses. Octopus does the
            opposite: it proves what works, shows what doesn’t, and never trades real money
            without you — the discipline that actually protects an account.
          </p>
        </div>

        {/* Headline differentiators */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(30px)',
            transitionDelay: '120ms',
          }}
        >
          {headlines.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.title} className="border border-octopus-cream/10 rounded-lg p-6">
                <Icon className="w-6 h-6 text-octopus-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium mb-2">{h.title}</h3>
                <p className="text-sm text-octopus-cream/65 leading-relaxed">{h.body}</p>
              </div>
            )
          })}
        </div>

        {/* Comparison table */}
        <div
          className="border border-octopus-cream/10 rounded-lg overflow-hidden transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(30px)',
            transitionDelay: '240ms',
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-octopus-cream/10 bg-octopus-cream/[0.02]">
                  <th className="text-left px-5 py-4 font-medium text-octopus-cream/80">Feature</th>
                  <th className="px-5 py-4 text-center font-medium text-octopus-gold">Octopus</th>
                  <th className="px-5 py-4 text-center font-medium text-octopus-cream/60">Typical trading bots</th>
                  <th className="px-5 py-4 text-center font-medium text-octopus-cream/60">Copy-trading services</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature}
                      className={`border-b border-octopus-cream/5 ${i < 6 ? 'bg-octopus-gold/[0.02]' : ''}`}>
                    <td className="px-5 py-3 text-octopus-cream/85">{r.feature}</td>
                    <td className="px-5 py-3 text-center"><CellValue value={r.octopus} /></td>
                    <td className="px-5 py-3 text-center"><CellValue value={r.bots} /></td>
                    <td className="px-5 py-3 text-center"><CellValue value={r.copy} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 text-xs text-octopus-cream/45 font-mono bg-octopus-cream/[0.02]">
            Highlighted rows are why traders who&rsquo;ve been burned by hype trust Octopus.
          </div>
        </div>
      </div>
    </section>
  )
}

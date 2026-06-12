import { useScrollReveal } from '@/hooks/useScrollReveal'
import { CandlestickChart, Bitcoin, LineChart, KeyRound, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

type Platform = {
  name: string
  blurb: string
  icon: typeof CandlestickChart
  tag: string
}

const PLATFORMS: Platform[] = [
  {
    name: 'MetaTrader 5',
    blurb: 'Any MT5 broker — Exness, FBS, IC Markets, Pepperstone & hundreds more. Free local terminal, keys never leave your machine.',
    icon: CandlestickChart,
    tag: 'Forex · Metals · Indices',
  },
  {
    name: 'Alpaca',
    blurb: 'US stocks and options, paper or live. The Wheel and trend strategies run here.',
    icon: LineChart,
    tag: 'Stocks · Options',
  },
  {
    name: 'Binance',
    blurb: 'Crypto spot, testnet-first — plus many more exchanges through the same connector.',
    icon: Bitcoin,
    tag: 'Crypto',
  },
]

export default function Download() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="platforms" className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            Connect anywhere
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Your broker. Your keys. Your call.
          </h2>
          <p className="font-body text-lg text-octopus-muted max-w-2xl mx-auto mt-6">
            Octopus runs validated strategies on the accounts you already have — paper-first, and the
            broker credentials stay encrypted on your own machine. No custody, no handing over the keys.
          </p>
        </div>

        {/* platform cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl bg-octopus-ink border border-white/[0.08] p-7 hover:border-octopus-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-octopus-void border border-white/[0.08] flex items-center justify-center text-octopus-gold group-hover:text-octopus-amber transition-colors">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-octopus-cream leading-none">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-octopus-muted uppercase">
                    {p.tag}
                  </span>
                </div>
              </div>
              <p className="font-body text-sm text-octopus-muted mt-4 leading-relaxed">{p.blurb}</p>
            </div>
          ))}
        </div>

        {/* trust + roadmap row */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="rounded-xl border border-white/[0.06] bg-octopus-ink/50 p-5 flex items-start gap-3">
            <ShieldCheck size={18} className="text-octopus-teal mt-0.5 shrink-0" />
            <p className="font-body text-sm text-octopus-muted">
              <span className="text-octopus-cream">Encrypted vault.</span> Keys are encrypted at rest and
              never sent to us or the LLM.
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-octopus-ink/50 p-5 flex items-start gap-3">
            <KeyRound size={18} className="text-octopus-teal mt-0.5 shrink-0" />
            <p className="font-body text-sm text-octopus-muted">
              <span className="text-octopus-cream">You stay in control.</span> Paper-first everywhere, with a
              global kill switch.
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-octopus-ink/50 p-5 flex items-start gap-3">
            <Sparkles size={18} className="text-octopus-gold mt-0.5 shrink-0" />
            <p className="font-body text-sm text-octopus-muted">
              <span className="text-octopus-cream">More on the way.</span> TradingView signal-in and additional
              brokers are on the roadmap.
            </p>
          </div>
        </div>

        {/* CTA → waitlist */}
        <div className="mt-12 text-center">
          <a
            href="#signup"
            className="inline-flex items-center gap-2 bg-octopus-gold text-octopus-void font-body font-semibold px-8 py-3.5 rounded-full hover:bg-octopus-amber transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,165,116,0.3)]"
          >
            Join the waitlist
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

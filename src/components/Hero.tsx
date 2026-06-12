import { Zap, Brain, ShieldCheck } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { InteractiveSpotlight } from '@/components/ui/interactive-spotlight'
import { Card } from '@/components/ui/card'

const stats = [
  { icon: Zap, label: '24/7 Autonomous' },
  { icon: Brain, label: 'Multi-Agent Desk' },
  { icon: ShieldCheck, label: 'Validated or it doesn’t trade' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-grid-pattern bg-grid"
    >
      {/* Warm radial fade overlay */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Spotlight beam */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4A574" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center pt-28 md:pt-32 pb-8 px-6">
        {/* Eyebrow badge */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <span className="inline-block w-1.5 h-1.5 bg-octopus-gold rounded-full animate-pulse-slow" />
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/80 uppercase">
            Autonomous Trading Lab
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-display-xl font-extrabold text-gradient-gold animate-slide-up">
          OCTOPUS
        </h1>

        {/* Subline */}
        <p
          className="font-display text-display-md font-light text-octopus-cream/60 mt-2 animate-slide-up"
          style={{ animationDelay: '0.12s', animationFillMode: 'both' }}
        >
          The autonomous trading desk that&rsquo;s honest about the odds
        </p>

        {/* Description */}
        <p
          className="font-body text-lg md:text-xl text-octopus-muted max-w-2xl mx-auto mt-8 animate-slide-up"
          style={{ animationDelay: '0.24s', animationFillMode: 'both' }}
        >
          AI agents research strategies, debate them, and trade only what beats a
          random-entry control out-of-sample &mdash; paper-first, risk-capped, and
          fully under your control.
        </p>

        {/* CTA row */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-12 animate-slide-up"
          style={{ animationDelay: '0.36s', animationFillMode: 'both' }}
        >
          <a
            href="#signup"
            className="bg-octopus-gold text-octopus-void font-body font-semibold px-8 py-3.5 rounded-full hover:bg-octopus-amber transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,165,116,0.3)]"
          >
            Join the waitlist
          </a>
          <a
            href="#how-it-works"
            className="border border-white/10 text-octopus-cream/80 font-body px-8 py-3.5 rounded-full hover:border-octopus-gold/30 hover:text-octopus-cream transition-all duration-300"
          >
            How it works
          </a>
        </div>

        {/* Stat pills */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 animate-slide-up"
          style={{ animationDelay: '0.48s', animationFillMode: 'both' }}
        >
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 font-mono text-xs text-octopus-muted/60 tracking-wide"
            >
              <Icon size={14} strokeWidth={1.5} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live dashboard preview — the real product, served locally (no external CDN) */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 pb-16 animate-slide-up"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        <Card className="w-full bg-octopus-ink/80 border-white/[0.06] relative overflow-hidden rounded-2xl">
          <InteractiveSpotlight className="z-[1]" size={350} springOptions={{ bounce: 0, duration: 0.3 }} />
          <div className="relative z-10 p-3 md:p-4">
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="w-3 h-3 rounded-full bg-octopus-gold/40" />
              <span className="w-3 h-3 rounded-full bg-octopus-cream/15" />
              <span className="w-3 h-3 rounded-full bg-octopus-cream/15" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-octopus-muted/50 uppercase ml-2">
                octopus web &mdash; live
              </span>
            </div>
            <img
              src="/web-dashboard.png"
              alt="Octopus live trading dashboard — equity, open positions, strategies, audit"
              className="w-full rounded-xl border border-white/[0.05]"
              loading="lazy"
            />
          </div>
        </Card>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8">
        <div className="w-px h-12 bg-gradient-to-b from-octopus-gold/30 to-transparent mx-auto animate-float" />
      </div>
    </section>
  )
}

import { Users, ShieldCheck, Bot, CircleDollarSign, Sparkles, MonitorSmartphone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    icon: Users,
    title: 'Multi-Agent Hedge Desk',
    description:
      'A bull and a bear argue the chart, news, and indicators across rounds; a judge rules and a risk committee sizes it. You watch the whole debate happen live \u2014 nothing hidden behind a black box.',
    hero: true,
  },
  {
    icon: ShieldCheck,
    title: 'The Validation Gate',
    description:
      'Every strategy must beat a random-entry control out-of-sample before it trades a cent. Strategies that fail are shown, not buried.',
  },
  {
    icon: Bot,
    title: 'Autopilot, 24/7',
    description:
      'Paper-first autonomous trading across MT5, Alpaca and Binance \u2014 with a daily-loss governor and a one-key kill switch that stops everything.',
  },
  {
    icon: CircleDollarSign,
    title: 'The Wheel',
    description:
      'An options-income engine \u2014 sell cash-secured puts, get assigned, sell covered calls \u2014 with break-even management and clear state tracking.',
  },
  {
    icon: Sparkles,
    title: 'Self-Improving, Safely',
    description:
      'A daily Risk/Ops auditor finds the chinks; a research agent proposes new ideas \u2014 but every idea is gated by the same validation before it ever touches paper.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Two Faces',
    description:
      'A live terminal deck and a web dashboard \u2014 ticking prices, equity curves, the debate stream, and the kill switch, wherever you are.',
  },
]

export default function Features() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="features" className="py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="mb-20 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(40px)',
          }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            CAPABILITIES
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Built to trade only
            <br />
            what&rsquo;s proven
          </h2>
          <p className="font-body text-lg text-octopus-muted max-w-xl mt-6">
            Research, debate, validate, paper-trade, audit &mdash; a full desk that
            earns its trust on evidence, and hands the live-money decision to you.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-reveal ${
            isVisible ? 'visible' : ''
          }`}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isHero = feature.hero

            return (
              <div
                key={i}
                className={`
                  group relative overflow-hidden rounded-2xl p-8
                  bg-octopus-ink/50 border border-white/[0.04]
                  border-glow transition-all duration-500
                  hover:-translate-y-1
                  ${isHero ? 'lg:col-span-2 lg:row-span-2 flex flex-col justify-between' : ''}
                `}
              >
                {/* Hero card ambient orb */}
                {isHero && (
                  <div
                    className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full
                      bg-octopus-gold/[0.03] blur-3xl
                      group-hover:bg-octopus-gold/[0.06] transition-all duration-700
                      pointer-events-none"
                  />
                )}

                <div className={isHero ? 'relative z-10' : ''}>
                  <Icon
                    className="text-octopus-gold/60 mb-5"
                    size={isHero ? 40 : 24}
                    strokeWidth={1.5}
                  />

                  <h3
                    className={`font-display font-semibold text-octopus-cream ${
                      isHero ? 'text-2xl' : 'text-lg'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`font-body text-octopus-muted mt-3 ${
                      isHero ? 'text-base max-w-md' : 'text-sm'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Hero card decorative line */}
                {isHero && (
                  <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-octopus-gold/40 animate-pulse" />
                      <span className="font-mono text-xs tracking-wider text-octopus-muted/60 uppercase">
                        Debate streaming live
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

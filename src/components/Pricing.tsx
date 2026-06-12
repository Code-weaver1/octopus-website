import { Check } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type Tier = {
  name: string
  price: string
  unit?: string
  description: string
  recommended: boolean
  features: string[]
  cta: string
  href: string
  style: 'filled' | 'outline'
}

const tiers: Tier[] = [
  {
    name: 'Self-Hosted',
    price: 'Free',
    description: 'The whole lab, on your machine. You hold the keys.',
    recommended: true,
    features: [
      'Everything — hedge desk, autopilot, the Wheel, auditor, research',
      'MT5 · Alpaca · Binance (paper, testnet, demo, or live)',
      'Live terminal deck + web dashboard',
      'Validation harness, risk governor, kill switch',
      'Non-custodial — your broker, your keys, your data',
      'You pay only: your broker’s normal fees + your own LLM usage (often cents/day)',
    ],
    cta: 'Join the waitlist',
    href: '#signup',
    style: 'filled',
  },
  {
    name: 'Managed Cloud',
    price: 'Soon',
    description: 'Hosted 24/7, one-click setup, alerts — without the VPS.',
    recommended: false,
    features: [
      'We run the 24/7 loop for you on a hardened host',
      'One-click broker connect + Telegram alerts',
      'Same honest, paper-first, validation-gated engine',
      'Same kill switch — you’re always in control',
      'Pricing announced at launch (no lock-in, no custody)',
    ],
    cta: 'Join the waitlist',
    href: '#signup',
    style: 'outline',
  },
]

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="pricing" className="py-32 px-6 lg:px-12">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            PRICING
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Yours to run
          </h2>
          <p className="font-body text-lg text-octopus-muted max-w-xl mx-auto mt-6">
            Octopus is self-hosted and free. No subscription, no custody, no lock-in —
            you pay only your broker and your own LLM usage.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-octopus-ink/30 ${
                tier.recommended ? 'border border-octopus-gold/30' : 'border border-white/[0.04]'
              } rounded-2xl p-8 relative overflow-hidden hover:border-glow transition-all duration-300`}
            >
              {tier.recommended && (
                <span className="absolute top-0 right-0 font-mono text-[10px] tracking-widest text-octopus-gold bg-octopus-gold/10 px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                  AVAILABLE NOW
                </span>
              )}

              <h3 className="font-display text-lg font-semibold text-octopus-cream">{tier.name}</h3>

              <div className="mt-4 flex items-baseline">
                <span className="font-display text-5xl font-bold text-octopus-cream">{tier.price}</span>
                {tier.unit && <span className="text-sm text-octopus-muted font-body ml-1">{tier.unit}</span>}
              </div>

              <p className="font-body text-sm text-octopus-muted mt-4">{tier.description}</p>
              <div className="border-t border-white/[0.04] my-6" />

              <ul className="flex flex-col gap-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-octopus-gold/60 shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-octopus-silver">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-8 w-full py-3 rounded-full text-sm font-body transition-all duration-300 block text-center ${
                  tier.style === 'filled'
                    ? 'bg-octopus-gold text-octopus-void font-semibold hover:bg-octopus-amber hover:shadow-[0_0_30px_rgba(212,165,116,0.3)]'
                    : 'border border-white/10 text-octopus-cream/80 hover:border-octopus-gold/30 hover:text-octopus-cream'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-10 text-xs text-octopus-muted/70 max-w-2xl mx-auto">
          Octopus is software — not a fund, broker, or financial advisor — and never takes
          custody of your money. Trading involves real risk of loss. Only strategies you
          validate and explicitly approve ever trade live, and only you can flip that switch.
        </p>
      </div>
    </section>
  )
}

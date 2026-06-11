import { Search, Activity, Map, Play, RefreshCw, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'PROPOSE',
    icon: Search,
    description:
      'AI agents brainstorm strategies and debate them — bull versus bear, with a judge ruling on the evidence.',
  },
  {
    number: '02',
    title: 'VALIDATE',
    icon: Activity,
    description:
      'Every idea must beat a random-entry control out-of-sample. Most don’t — and Octopus says so plainly.',
  },
  {
    number: '03',
    title: 'PAPER',
    icon: Play,
    description:
      'Survivors auto-trade on paper, 24/7, across your brokers — risk-capped, always bracketed with a stop.',
  },
  {
    number: '04',
    title: 'GRADUATE',
    icon: RefreshCw,
    description:
      'Stay profitable on paper for weeks and a candidate is flagged “ready to consider” — never auto-promoted.',
  },
  {
    number: '05',
    title: 'LIVE',
    icon: Map,
    description:
      'You approve, set a tiny size, and arm it. You hold the keys; the kill switch is always one tap away.',
  },
]

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const Icon = step.icon

  return (
    <div className="relative flex-1 min-w-0">
      {/* Big faded number */}
      <span className="font-mono text-6xl font-bold text-octopus-gold/10 absolute -top-4 -left-2 select-none pointer-events-none">
        {step.number}
      </span>

      <div className="relative z-10 pt-8">
        {/* Icon circle */}
        <div className="w-12 h-12 rounded-full border border-octopus-gold/20 bg-octopus-ink flex items-center justify-center mb-5">
          <Icon className="w-5 h-5 text-octopus-gold" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-octopus-cream text-lg tracking-wide">
          {step.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-octopus-muted mt-2 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-12 pt-12">
      <div className="relative w-full flex items-center">
        <div className="w-full border-t border-dashed border-octopus-gold/10" />
        <ChevronRight
          className="absolute -right-1.5 w-3.5 h-3.5 text-octopus-gold/20"
          strokeWidth={2}
        />
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="how-it-works" className="relative py-32 px-6 lg:px-12">
      {/* Section header */}
      <div className="text-center mb-24">
        <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
          The Loop
        </span>
        <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
          From idea to live &mdash; gated every step
        </h2>
        <p className="font-body text-lg text-octopus-muted max-w-xl mx-auto mt-6">
          Five stages, and the two that matter most &mdash; beating random
          out-of-sample, and the live-money decision &mdash; are exactly where
          overfitting and ruin can&rsquo;t sneak through.
        </p>
      </div>

      {/* Process steps */}
      <div
        ref={ref}
        className={`stagger-reveal max-w-5xl mx-auto ${isVisible ? 'visible' : ''}`}
      >
        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start">
          {steps.map((step, i) => (
            <div key={step.number} className="contents">
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical with left line */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px border-l border-dashed border-octopus-gold/10" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative pl-16">
                  {/* Icon on the line */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full border border-octopus-gold/20 bg-octopus-ink flex items-center justify-center z-10">
                    <Icon
                      className="w-5 h-5 text-octopus-gold"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Big faded number */}
                  <span className="font-mono text-5xl font-bold text-octopus-gold/10 absolute -top-3 left-14 select-none pointer-events-none">
                    {step.number}
                  </span>

                  <div className="pt-1">
                    <h3 className="font-display font-semibold text-octopus-cream text-lg tracking-wide">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-octopus-muted mt-2 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

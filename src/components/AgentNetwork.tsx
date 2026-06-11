import { useScrollReveal } from '@/hooks/useScrollReveal'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'
import type { TimelineItem } from '@/components/ui/radial-orbital-timeline'
import {
  Gavel,
  Radar,
  LineChart,
  Newspaper,
  TrendingUp,
  TrendingDown,
  Scale,
  FlaskConical,
} from 'lucide-react'

const agentData: TimelineItem[] = [
  {
    id: 1,
    title: 'The Judge',
    date: 'Verdict',
    content: 'Weighs the bull–bear debate against the validated systematic prior, then rules: take the trade, or stand aside.',
    category: 'core',
    icon: Gavel,
    relatedIds: [2, 3, 4, 5, 6, 7, 8],
    status: 'completed',
    energy: 97,
  },
  {
    id: 2,
    title: 'Scout',
    date: 'Input',
    content: 'Ranks which markets are actually worth trading right now — before a single token is spent on debate.',
    category: 'input',
    icon: Radar,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 90,
  },
  {
    id: 3,
    title: 'Technical Analyst',
    date: 'Analysis',
    content: 'Reads price structure, trend, momentum and volatility straight from the raw bars — no vibes.',
    category: 'processing',
    icon: LineChart,
    relatedIds: [1, 2, 5, 6],
    status: 'completed',
    energy: 88,
  },
  {
    id: 4,
    title: 'News & Macro',
    date: 'Analysis',
    content: 'Pulls real headlines and macro context so the debate is never blind to what the world is doing.',
    category: 'processing',
    icon: Newspaper,
    relatedIds: [1, 5, 6],
    status: 'completed',
    energy: 84,
  },
  {
    id: 5,
    title: 'The Bull',
    date: 'Debate',
    content: 'Argues the case to buy — and must defend it against the bear, round after round.',
    category: 'debate',
    icon: TrendingUp,
    relatedIds: [1, 3, 4, 6],
    status: 'in-progress',
    energy: 80,
  },
  {
    id: 6,
    title: 'The Bear',
    date: 'Debate',
    content: 'Argues the case to sell or stand aside. The stronger argument — not the louder one — wins.',
    category: 'debate',
    icon: TrendingDown,
    relatedIds: [1, 3, 4, 5],
    status: 'in-progress',
    energy: 80,
  },
  {
    id: 7,
    title: 'Risk Committee',
    date: 'Sizing',
    content: 'Aggressive, conservative and neutral voices size the trade; the portfolio manager sets the final, mandate-capped risk.',
    category: 'risk',
    icon: Scale,
    relatedIds: [1],
    status: 'completed',
    energy: 92,
  },
  {
    id: 8,
    title: 'The Validator',
    date: 'Veto',
    content: 'The skeptic with the veto: nothing trades unless it beats a random-entry control out-of-sample.',
    category: 'security',
    icon: FlaskConical,
    relatedIds: [1],
    status: 'completed',
    energy: 99,
  },
]

export default function AgentNetwork() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-4 sm:mb-8">
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            The Desk
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Inside the hedge desk
          </h2>
          <p className="font-body text-base sm:text-lg text-octopus-muted max-w-xl mx-auto mt-4 sm:mt-6">
            A scout, analysts, a bull and a bear, a judge, a risk committee — and a validator
            that holds the veto. Click any node to see its role and how they connect.
          </p>
        </div>

        {/* Desktop: full orbital */}
        <div className="hidden md:block">
          <RadialOrbitalTimeline timelineData={agentData} />
        </div>

        {/* Mobile: simplified list view */}
        <div className="md:hidden max-w-sm mx-auto mt-8">
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-octopus-gold/40 via-octopus-gold/20 to-transparent" />

            {agentData.map((agent, i) => {
              const Icon = agent.icon
              return (
                <div
                  key={agent.id}
                  className="relative pl-14 pb-8 last:pb-0"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Node dot */}
                  <div
                    className={`absolute left-2.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      agent.status === 'completed'
                        ? 'border-octopus-gold bg-octopus-gold/20'
                        : agent.status === 'in-progress'
                        ? 'border-octopus-amber bg-octopus-amber/20'
                        : 'border-octopus-muted/40 bg-octopus-ash/20'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        agent.status === 'completed'
                          ? 'bg-octopus-gold'
                          : agent.status === 'in-progress'
                          ? 'bg-octopus-amber'
                          : 'bg-octopus-muted/40'
                      }`}
                    />
                  </div>

                  <div className="bg-octopus-ink/30 border border-white/[0.04] rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={16} className="text-octopus-gold/60" />
                      <h3 className="font-display font-semibold text-sm text-octopus-cream">
                        {agent.title}
                      </h3>
                      <span
                        className={`ml-auto font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded ${
                          agent.status === 'completed'
                            ? 'text-octopus-gold bg-octopus-gold/10'
                            : agent.status === 'in-progress'
                            ? 'text-octopus-amber bg-octopus-amber/10'
                            : 'text-octopus-muted bg-octopus-ash'
                        }`}
                      >
                        {agent.status === 'completed' ? 'Active' : agent.status === 'in-progress' ? 'Processing' : 'Standby'}
                      </span>
                    </div>
                    <p className="font-body text-xs text-octopus-muted leading-relaxed">
                      {agent.content}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="font-mono text-[10px] text-octopus-muted/50">Efficiency</span>
                      <div className="flex-1 h-1 bg-octopus-ash rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-octopus-gold to-octopus-amber"
                          style={{ width: `${agent.energy}%` }}
                        />
                      </div>
                      <span className="font-mono text-[10px] text-octopus-gold">{agent.energy}%</span>
                    </div>
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

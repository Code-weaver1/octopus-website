import { useScrollReveal } from '@/hooks/useScrollReveal'
import { TerminalSquare, Globe, Server, Download as DownloadIcon, Github } from 'lucide-react'

const REPO = 'https://github.com/Code-weaver1/octopus'
const ZIP = `${REPO}/archive/refs/heads/main.zip`

const runWays = [
  {
    icon: TerminalSquare,
    name: 'Terminal deck',
    cmd: 'octopus deck',
    desc: 'Nine live tabs — autopilot, the agent debate, ticking prices, scoreboard, audit.',
  },
  {
    icon: Globe,
    name: 'Web dashboard',
    cmd: 'octopus web',
    desc: 'The browser cockpit at localhost:8899 — equity, open positions, kill switch.',
  },
  {
    icon: Server,
    name: '24/7 on a VPS',
    cmd: 'octopus trade run',
    desc: 'Run it unattended behind systemd or cron. See VPS_RUNBOOK.md.',
  },
]

export default function Download() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="download" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div ref={ref} className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            Get it
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Self-hosted, one command
          </h2>
          <p className="font-body text-base sm:text-lg text-octopus-muted max-w-xl mx-auto mt-4 sm:mt-6">
            Runs on your machine — Linux, macOS, or a $5 VPS. Paper-first by default;
            connect a live broker only when you decide to.
          </p>

          {/* Real download + source buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={ZIP}
              className="inline-flex items-center justify-center gap-2 bg-octopus-gold text-octopus-void font-body font-semibold px-7 py-3.5 rounded-full hover:bg-octopus-amber transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,165,116,0.3)]"
            >
              <DownloadIcon size={17} /> Download (.zip)
            </a>
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-octopus-cream/80 font-body px-7 py-3.5 rounded-full hover:border-octopus-gold/30 hover:text-octopus-cream transition-all duration-300"
            >
              <Github size={17} /> View on GitHub
            </a>
          </div>
          <p className="font-mono text-[11px] text-octopus-muted/40 mt-3">
            unzip → <span className="text-octopus-gold/70">cd octopus-main &amp;&amp; ./install.sh</span> &nbsp;·&nbsp; or clone it below
          </p>
        </div>

        {/* Install — terminal card */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="rounded-2xl border border-white/[0.06] bg-octopus-ink/60 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
              <span className="w-3 h-3 rounded-full bg-octopus-gold/40" />
              <span className="w-3 h-3 rounded-full bg-octopus-cream/15" />
              <span className="w-3 h-3 rounded-full bg-octopus-cream/15" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-octopus-muted/50 uppercase ml-2">
                install
              </span>
            </div>
            <pre className="font-mono text-sm leading-relaxed p-5 sm:p-6 overflow-x-auto text-octopus-cream/90">
<span className="text-octopus-muted/50"># 1 · clone &amp; install</span>{'\n'}
<span className="text-octopus-gold">git clone</span> https://github.com/Code-weaver1/octopus.git{'\n'}
<span className="text-octopus-gold">cd</span> octopus &amp;&amp; ./install.sh{'\n\n'}
<span className="text-octopus-muted/50"># 2 · guided setup (profile · key · brokers — paper first)</span>{'\n'}
octopus setup{'\n\n'}
<span className="text-octopus-muted/50"># 3 · launch</span>{'\n'}
octopus deck    <span className="text-octopus-muted/50">  # live terminal dashboard</span>{'\n'}
octopus web     <span className="text-octopus-muted/50">  # browser → localhost:8899</span>
            </pre>
          </div>
          <p className="font-mono text-xs text-octopus-muted/40 text-center mt-3">
            Requires Python 3.11+. On first launch, <span className="text-octopus-gold/70">octopus</span> walks you through setup automatically.
          </p>
        </div>

        {/* Ways to run */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-14">
          {runWays.map((w, i) => {
            const Icon = w.icon
            return (
              <div
                key={w.name}
                className="border-glow bg-octopus-ink/30 border border-white/[0.04] rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-octopus-ash/50 border border-white/[0.04] flex items-center justify-center group-hover:border-octopus-gold/20 transition-colors">
                  <Icon size={20} className="text-octopus-cream/50 group-hover:text-octopus-gold transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-octopus-cream mt-4">{w.name}</h3>
                <code className="font-mono text-xs text-octopus-gold/80 mt-2 block">$ {w.cmd}</code>
                <p className="font-body text-sm text-octopus-muted mt-3 leading-relaxed">{w.desc}</p>
              </div>
            )
          })}
        </div>

        <p className="font-body text-xs sm:text-sm text-octopus-muted/30 text-center mt-12 px-4 max-w-2xl mx-auto">
          Octopus runs on your hardware and trades your broker directly — it never holds your funds.
          A desktop build is in the works; for now the CLI is the way in.
        </p>
      </div>
    </section>
  )
}

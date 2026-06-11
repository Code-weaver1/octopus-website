import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { TerminalSquare, Globe, Server, Download as DownloadIcon, Github, Apple, Monitor } from 'lucide-react'

const REPO = 'https://github.com/Code-weaver1/octopus'
const ZIP = `${REPO}/archive/refs/heads/main.zip`

type OSKey = 'macos' | 'linux' | 'windows'

const INSTALL: Record<OSKey, { label: string; icon: typeof Apple; shell: string; lines: { c?: string; g?: string; t?: string }[] }> = {
  macos: {
    label: 'macOS', icon: Apple, shell: 'Terminal',
    lines: [
      { c: '# 1 · clone & install' },
      { g: 'git clone', t: ' https://github.com/Code-weaver1/octopus.git' },
      { g: 'cd', t: ' octopus && ./install.sh' },
      { c: '\n# 2 · guided setup (profile · key · brokers — paper first)' },
      { t: 'octopus setup' },
      { c: '\n# 3 · launch' },
      { t: 'octopus deck', c: '   # live terminal dashboard' },
      { t: 'octopus web', c: '    # browser → localhost:8899' },
    ],
  },
  linux: {
    label: 'Linux', icon: Monitor, shell: 'bash',
    lines: [
      { c: '# 1 · clone & install' },
      { g: 'git clone', t: ' https://github.com/Code-weaver1/octopus.git' },
      { g: 'cd', t: ' octopus && ./install.sh' },
      { c: '\n# 2 · guided setup (profile · key · brokers — paper first)' },
      { t: 'octopus setup' },
      { c: '\n# 3 · launch' },
      { t: 'octopus deck', c: '   # live terminal dashboard' },
      { t: 'octopus web', c: '    # browser → localhost:8899' },
    ],
  },
  windows: {
    label: 'Windows', icon: Monitor, shell: 'PowerShell',
    lines: [
      { c: '# 1 · clone (use PowerShell, not cmd)' },
      { g: 'git clone', t: ' https://github.com/Code-weaver1/octopus.git' },
      { g: 'cd', t: ' octopus' },
      { c: '\n# 2 · install (venv + deps + adds octopus to PATH)' },
      { t: 'powershell -ExecutionPolicy Bypass -File install.ps1' },
      { c: '\n# 3 · open a NEW terminal, then setup + launch' },
      { t: 'octopus setup' },
      { t: 'octopus deck', c: '   # or: octopus web' },
    ],
  },
}

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
  const [os, setOS] = useState<OSKey>(
    typeof navigator !== 'undefined' && /Win/i.test(navigator.platform) ? 'windows'
      : typeof navigator !== 'undefined' && /Linux/i.test(navigator.platform) ? 'linux'
      : 'macos'
  )
  const active = INSTALL[os]

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
            Runs on your machine — macOS, Linux, Windows, or a $5 VPS. Paper-first by
            default; connect a live broker only when you decide to.
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
            &nbsp;·&nbsp; new here? <a href="/guide" className="text-octopus-gold/80 hover:text-octopus-gold">read the User Guide →</a>
          </p>
        </div>

        {/* Install — OS-tabbed terminal card */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="rounded-2xl border border-white/[0.06] bg-octopus-ink/60 overflow-hidden">
            <div className="flex items-center gap-1 px-3 py-2.5 border-b border-white/[0.05]">
              {(Object.keys(INSTALL) as OSKey[]).map((key) => {
                const Icon = INSTALL[key].icon
                const sel = key === os
                return (
                  <button
                    key={key}
                    onClick={() => setOS(key)}
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-lg transition-all duration-300 ${
                      sel
                        ? 'bg-octopus-gold/10 text-octopus-gold border border-octopus-gold/20'
                        : 'text-octopus-muted/50 hover:text-octopus-cream/80 border border-transparent'
                    }`}
                  >
                    <Icon size={13} /> {INSTALL[key].label}
                  </button>
                )
              })}
              <span className="font-mono text-[10px] tracking-[0.25em] text-octopus-muted/30 uppercase ml-auto pr-1">
                {active.shell}
              </span>
            </div>
            <pre className="font-mono text-sm leading-relaxed p-5 sm:p-6 overflow-x-auto text-octopus-cream/90">
{active.lines.map((ln, i) => (
  <span key={i}>
    {ln.c && !ln.t && !ln.g && <span className="text-octopus-muted/50">{ln.c}</span>}
    {ln.g && <span className="text-octopus-gold">{ln.g}</span>}
    {ln.t && <span>{ln.t}</span>}
    {ln.c && (ln.t || ln.g) && <span className="text-octopus-muted/50">{ln.c}</span>}
    {'\n'}
  </span>
))}
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

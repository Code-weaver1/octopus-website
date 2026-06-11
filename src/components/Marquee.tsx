const row1Items = [
  'MULTI-AGENT HEDGE DESK',
  'RANDOM-ENTRY CONTROL',
  'WALK-FORWARD VALIDATION',
  'PAPER-FIRST',
  'RISK GOVERNOR',
  'KILL SWITCH',
  'YOU HOLD THE KEYS',
]

const row2Items = [
  'BULL VS BEAR DEBATE',
  'TREND ENSEMBLE',
  'THE WHEEL',
  'MT5 · ALPACA · BINANCE',
  'DAILY SELF-AUDIT',
  'GATED RESEARCH',
  'NO PERFORMANCE PROMISES',
]

function MarqueeRow({
  items,
  reverse = false,
  colorClass,
}: {
  items: string[]
  reverse?: boolean
  colorClass: string
}) {
  const content = items.map((item, i) => (
    <span key={i}>
      <span>{item}</span>
      <span className="mx-6 opacity-40">{'\u25C6'}</span>
    </span>
  ))

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-flex animate-marquee"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        <span className={`inline-flex items-center font-display text-sm tracking-[0.25em] uppercase ${colorClass}`}>
          {content}
        </span>
        <span className={`inline-flex items-center font-display text-sm tracking-[0.25em] uppercase ${colorClass}`}>
          {content}
        </span>
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="py-5 border-y border-white/[0.04] bg-octopus-ink/50">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1Items} colorClass="text-octopus-gold/20" />
        <MarqueeRow items={row2Items} reverse colorClass="text-octopus-muted/20" />
      </div>
    </div>
  )
}

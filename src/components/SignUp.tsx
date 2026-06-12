import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Same-origin Cloudflare Pages Function (functions/api/waitlist.ts)
const WAITLIST_URL = '/api/waitlist'

export default function SignUp() {
  const { ref, isVisible } = useScrollReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setError('')
    setLoading(true)
    try {
      const res = await fetch(WAITLIST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Something went wrong')
      }
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Could not connect. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="signup" className="py-32 px-6 lg:px-12 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
          Private Beta · Invite Only
        </span>
        <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
          Join the waitlist
        </h2>
        <p className="font-body text-lg text-octopus-muted max-w-lg mx-auto mt-6">
          Octopus is going invite-only while we build a <span className="text-octopus-cream">forward-proven</span>,
          validated-or-it-doesn&rsquo;t-trade strategy service. Get on the list and we&rsquo;ll bring you in as
          spots open — paper-first, you hold the keys.
        </p>

        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-octopus-ink border border-white/[0.08] text-octopus-cream font-body text-sm placeholder:text-octopus-muted/40 focus:outline-none focus:border-octopus-gold/30 focus:ring-1 focus:ring-octopus-gold/20 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-octopus-gold text-octopus-void font-body font-semibold px-7 py-3.5 rounded-full hover:bg-octopus-amber transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,165,116,0.3)] flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60"
              >
                {loading ? 'Joining...' : 'Join the waitlist'}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
            {error && (
              <p className="font-body text-sm text-red-400 mt-3">{error}</p>
            )}
          </>
        ) : (
          <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in">
            <CheckCircle2 size={20} className="text-emerald-400" />
            <span className="font-body text-octopus-cream">
              You're on the list. We'll reach out at <span className="text-octopus-gold">{email}</span> as spots open.
            </span>
          </div>
        )}

        <p className="font-body text-xs text-octopus-muted/30 mt-6">
          No spam, no credit card. We email you once — when your invite is ready.
        </p>
      </div>
    </section>
  )
}

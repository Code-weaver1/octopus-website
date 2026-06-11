import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowUpRight } from 'lucide-react'

const positions = [
  { role: 'Senior AI/ML Engineer', dept: 'ENGINEERING', location: 'Remote', type: 'Full-time' },
  { role: 'Full-Stack Developer', dept: 'ENGINEERING', location: 'Remote', type: 'Full-time' },
  { role: 'DevOps & Infrastructure Lead', dept: 'ENGINEERING', location: 'Remote', type: 'Full-time' },
  { role: 'Growth Marketing Strategist', dept: 'MARKETING', location: 'Remote', type: 'Full-time' },
  { role: 'Product Designer', dept: 'DESIGN', location: 'Remote', type: 'Contract' },
  { role: 'Community Manager', dept: 'OPERATIONS', location: 'Remote', type: 'Part-time' },
]

export default function Careers() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="careers" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-12">
      <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-octopus-gold/60 uppercase">
            Careers
          </span>
          <h2 className="font-display text-display-lg font-bold text-octopus-cream mt-4">
            Build the future with us
          </h2>
          <p className="font-body text-lg text-octopus-muted max-w-xl mt-6">
            We're assembling a team of unconventional thinkers. Remote-first. Results-driven. No bureaucracy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-t border-white/[0.04]">
            {positions.map((job, i) => (
              <div
                key={i}
                className="flex justify-between items-start sm:items-center py-5 sm:py-6 border-b border-white/[0.04] group cursor-pointer hover:pl-2 sm:hover:pl-3 transition-all duration-300"
              >
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-octopus-cream group-hover:text-octopus-gold transition-colors duration-300">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 items-center mt-1.5">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-octopus-muted bg-octopus-ash px-2 py-0.5 rounded">
                      {job.dept}
                    </span>
                    <span className="font-body text-xs sm:text-sm text-octopus-muted">{job.location}</span>
                    <span className="font-body text-xs sm:text-sm text-octopus-muted/50">{job.type}</span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-octopus-muted/20 group-hover:text-octopus-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-4"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-octopus-muted">Don't see your role?</p>
            <a
              href="mailto:careers@theoctopusapp.com"
              className="font-body text-octopus-gold hover:text-octopus-amber transition-colors mt-1 inline-block"
            >
              Send us your story →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

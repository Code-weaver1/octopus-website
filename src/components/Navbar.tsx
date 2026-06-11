import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why Octopus', href: '#why-octopus' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Get it', href: '#download' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-octopus-void/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-octopus-gold transition-transform duration-500 group-hover:rotate-12"
          >
            {/* Octopus head */}
            <ellipse cx="16" cy="10" rx="7" ry="6" fill="currentColor" opacity="0.9" />
            {/* Tentacle 1 — left sweep */}
            <path
              d="M9 14 C6 18, 3 22, 5 27"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            {/* Tentacle 2 — left-center curl */}
            <path
              d="M12 15 C10 20, 8 25, 10 29"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Tentacle 3 — right-center curl */}
            <path
              d="M20 15 C22 20, 24 25, 22 29"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Tentacle 4 — right sweep */}
            <path
              d="M23 14 C26 18, 29 22, 27 27"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </svg>
          <span className="font-display font-bold tracking-widest text-sm uppercase text-octopus-cream">
            OCTOPUS
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm text-octopus-muted hover:text-octopus-cream transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, '#download')}
            className="font-body text-sm font-semibold bg-octopus-gold text-octopus-void px-5 py-2 rounded-full hover:bg-octopus-amber transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,165,116,0.25)]"
          >
            Get Octopus
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden relative z-50 p-1 text-octopus-cream"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 bg-octopus-void/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="pt-20 pb-8 px-6 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-lg text-octopus-muted hover:text-octopus-cream py-3 border-b border-white/5 transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={(e) => handleNavClick(e, '#download')}
            className="mt-4 inline-flex justify-center font-body text-sm font-semibold bg-octopus-gold text-octopus-void px-6 py-3 rounded-full hover:bg-octopus-amber transition-all duration-300"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

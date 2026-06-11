const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
    { label: 'Get Started', href: '#signup' },
  ],
  Company: [
    { label: 'About', href: '#hero' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '/contact.html' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-octopus-gold">
                <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M10 18 C6 22 4 28 6 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M13 18 C11 24 10 28 12 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M16 18 C16 24 16 28 16 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M19 18 C21 24 22 28 20 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M22 18 C26 22 28 28 26 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <circle cx="14" cy="11" r="1" fill="currentColor" />
                <circle cx="18" cy="11" r="1" fill="currentColor" />
              </svg>
              <span className="font-display font-bold tracking-widest text-sm text-octopus-cream">
                OCTOPUS
              </span>
            </div>
            <p className="font-body text-sm text-octopus-muted leading-relaxed mt-4">
              An autonomous trading lab that earns its trust on evidence &mdash;
              paper-first, validated, and always in your hands.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-mono text-xs tracking-widest uppercase text-octopus-muted/40 mb-4">
                  {category}
                </h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-body text-sm text-octopus-muted hover:text-octopus-cream transition-colors block mt-2.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-octopus-muted/40">
            &copy; 2026 Octopus &middot; ✦ created by Solo-J ✦ &middot; not financial advice
          </p>
          <div className="flex gap-6">
            {[
              { label: 'X', href: 'https://x.com' },
              { label: 'GitHub', href: 'https://github.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-octopus-muted/40 hover:text-octopus-gold transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

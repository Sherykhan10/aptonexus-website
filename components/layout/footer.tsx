import { BrandMark } from "./brand-mark";
import Link from "next/link";
import { navigation } from "@/content/pages";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer-flowforge">
      <div className="container">

        {/* Top Row: Brand · Nav · Socials */}
        <div className="footer-top-row">

          {/* Brand */}
          <Link className="footer-brand" href="/" aria-label={`${site.name} home`}>
            <BrandMark />
            <span>{site.name}</span>
          </Link>

          {/* Nav */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
            <nav className="footer-nav flex flex-wrap justify-center md:justify-start items-center md:items-start text-center md:text-left mx-auto md:mx-0" aria-label="Footer navigation">
              {navigation.map((n) => (
                <Link key={n.href} href={n.href}>{n.label}</Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="footer-socials" aria-label="Social links">

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/sherykhan10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Sherykhan10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* Fiverr – pill badge */}
            <a href="https://fiverr.com/sheheryar_03" target="_blank" rel="noopener noreferrer" aria-label="Fiverr" className="footer-social-badge footer-social-pill">
              <span>Fiverr</span>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/aptonexus.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/aptonexus" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Row: Copyright · Legal */}
        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

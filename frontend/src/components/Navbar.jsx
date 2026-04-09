import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Curriculum', to: '/#curriculum' },
    { label: 'Software Taught', to: '/#software' },
    { label: 'Reviews', to: '/#reviews' },
    { label: 'FAQ', to: '/#faq' },
  ]

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash
    if (!to.includes('#')) return location.pathname === to
    return location.hash === to.replace('/', '')
  }

  return (
    <>
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 9999px;
          background: #fa4616;
          transition: width 0.3s ease, left 0.3s ease;
        }
        .nav-link.active::after, .nav-link:hover::after {
          width: 100%;
          left: 0;
        }
      `}</style>
      <header className="fixed top-12 left-0 right-0 z-[100] flex justify-center px-4 w-full">
      <nav
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem 0 2rem',
          height: '68px',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(15, 15, 26, 0.75)'
            : 'rgba(15, 15, 26, 0.55)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)'
            : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)',
          transition: 'all 0.3s ease',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
          <img src={Logo} alt="Fyd Academy" style={{ height: '100px', width: 'auto' }} />
        </Link>

        {/* Desktop Links — absolutely centered */}
        <ul style={{
          display: 'none',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          gap: '2.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}
          className="nav-desktop-links"
        >
          {navLinks.map(link => (
            <li key={link.label} style={{ position: 'relative' }}>
              <a
                href={link.to}
                className={`nav-link ${isActive(link.to) ? 'active' : ''}`}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: isActive(link.to) ? '#fa4616' : '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://whop.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem 1.6rem',
            background: '#ffffff',
            color: '#0f0f1a',
            fontSize: '0.88rem',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '700',
            borderRadius: '9999px',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(255,255,255,0.1)',
            transition: 'all 0.25s ease',
            flexShrink: 0,
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(250,70,22,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(250,70,22,0.45)'
          }}
        >
          Join Academy
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#ffffff',
            padding: '0.4rem',
            display: 'none',
          }}
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '90px',
          left: '1rem',
          right: '1rem',
          background: 'rgba(15, 15, 26, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '1.5rem',
          padding: '1.5rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '500',
                fontSize: '1rem',
                color: isActive(link.to) ? '#fa4616' : '#ffffff',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://whop.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '1rem',
              textAlign: 'center',
              padding: '0.85rem',
              background: '#ffffff',
              color: '#0f0f1a',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            Join Academy
          </a>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop-links { display: flex !important; }
          .nav-cta-btn { display: inline-flex !important; }
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
    </>
  )
}
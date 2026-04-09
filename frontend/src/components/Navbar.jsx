import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(15, 15, 26, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(108,99,255,0.2)' : 'none',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #6c63ff, #f59e0b)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1rem',
            color: 'white',
          }}>F</div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '700', fontSize: '1.25rem' }}>
            Fyd<span style={{ color: '#6c63ff' }}>Academy</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
            className="hidden md:flex">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? '#6c63ff' : '#e2e8f0',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'color 0.2s',
                  fontSize: '0.95rem',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="btn-primary hidden md:inline-flex" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Get Started
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e2e8f0' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="glass" style={{ marginTop: '1rem', borderRadius: '1rem', padding: '1.5rem' }}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', color: '#e2e8f0', borderBottom: '1px solid rgba(108,99,255,0.1)' }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}

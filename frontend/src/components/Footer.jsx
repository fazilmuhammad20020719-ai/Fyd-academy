import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #6c63ff, #f59e0b)',
                borderRadius: '6px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontWeight: '800', color: 'white',
              }}>F</div>
              <span style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '1.1rem' }}>
                Fyd<span style={{ color: '#6c63ff' }}>Academy</span>
              </span>
            </div>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Empowering learners with modern skills for the digital world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600', color: '#6c63ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
            {[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }].map(l => (
              <Link key={l.to} to={l.to} style={{ display: 'block', color: 'var(--color-muted)', marginBottom: '0.5rem', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#6c63ff'}
                onMouseLeave={e => e.target.style.color = 'var(--color-muted)'}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600', color: '#6c63ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>hello@fydacademy.com</p>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>+1 (800) 123-4567</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--color-muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} FydAcademy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

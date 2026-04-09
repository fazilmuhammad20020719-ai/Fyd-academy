import { Link } from 'react-router-dom'

const features = [
  { icon: '🚀', title: 'Fast Learning', desc: 'Accelerated curricula designed for real-world results in record time.' },
  { icon: '🎯', title: 'Expert Mentors', desc: 'Learn directly from industry professionals with years of experience.' },
  { icon: '💡', title: 'Modern Skills', desc: 'Stay ahead with cutting-edge technologies and methodologies.' },
  { icon: '🏆', title: 'Certifications', desc: 'Earn industry-recognized credentials to boost your career.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        background: 'radial-gradient(ellipse at top left, rgba(108,99,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(245,158,11,0.1) 0%, transparent 60%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '15%', left: '10%', width: '300px', height: '300px',
          background: 'rgba(108,99,255,0.08)', borderRadius: '50%', filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '10%', width: '250px', height: '250px',
          background: 'rgba(245,158,11,0.08)', borderRadius: '50%', filter: 'blur(80px)',
        }} />

        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div className="glass" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem',
            fontSize: '0.85rem', color: '#6c63ff', fontWeight: '500',
          }}>
            <span>✨</span> Welcome to FydAcademy
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Learn. Grow. <span className="gradient-text">Succeed.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Discover world-class courses crafted by industry experts. Transform your career with skills that matter most in today's digital world.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn-primary">Explore Courses →</Link>
            <Link to="/contact" className="btn-secondary">Talk to Us</Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
            {[['10K+', 'Students'], ['50+', 'Courses'], ['95%', 'Success Rate']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>{num}</div>
                <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Why Choose <span className="gradient-text">FydAcademy?</span>
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '500px', margin: '0 auto' }}>
              We combine expertise, technology, and community to deliver an unmatched learning experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={i} className="glass" style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

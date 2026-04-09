export default function About() {
  return (
    <section style={{ padding: '8rem 2rem 6rem', minHeight: '100vh', background: 'radial-gradient(ellipse at top, rgba(108,99,255,0.1) 0%, transparent 60%)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
          About <span className="gradient-text">FydAcademy</span>
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 3rem' }}>
          We are a forward-thinking digital academy passionate about making high-quality education accessible to everyone. Our mission is to bridge the gap between ambition and achievement.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {[
            { title: 'Our Vision', icon: '🌟', desc: 'To become the world\'s most impactful digital learning platform.' },
            { title: 'Our Mission', icon: '🎯', desc: 'Deliver expert-led, practical education that transforms careers.' },
            { title: 'Our Values', icon: '💎', desc: 'Excellence, innovation, inclusivity, and community at our core.' },
          ].map(card => (
            <div key={card.title} className="glass animate-float" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{card.title}</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

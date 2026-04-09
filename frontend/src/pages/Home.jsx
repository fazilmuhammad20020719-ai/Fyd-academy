import { Link } from 'react-router-dom'

const modules = [
  { moduleNumber: '01', title: 'Video Editing Fundamentals', desc: 'Master the core mechanics of Premiere Pro and DaVinci Resolve, from timeline management to basic storytelling.', software: ['Premiere Pro', 'DaVinci Resolve'] },
  { moduleNumber: '02', title: 'Film Editing Mastery', desc: 'Move beyond the basics. Learn cinematic pacing, multi-cam workflows, and how to edit for pure emotional impact.', software: ['Premiere Pro'] },
  { moduleNumber: '03', title: 'Advanced Color Grading', desc: 'Uncover the secrets of the Hollywood look. Master color theory, skin tone correction, and advanced DaVinci Resolve tools.', software: ['DaVinci Resolve'] },
  { moduleNumber: '04', title: 'Advanced Sound Design', desc: 'Create immersive audio experiences using noise reduction, SFX layering, and professional voice enhancement.', software: ['Fairlight', 'Audition'] },
  { moduleNumber: '05', title: 'Visual Effects (VFX)', desc: 'Bring the impossible to life. Learn green screen compositing, tracking, masking, and real-world After Effects projects.', software: ['After Effects'] },
  { moduleNumber: '06', title: 'Advanced Motion Graphics', desc: 'Make your work pop. Master typography animation, logo design, and high-level After Effects techniques for social media.', software: ['After Effects'] },
]

export default function Home() {
  return (
    <div>
      {/* ─── Hero Section with Showreel ───────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        background: 'radial-gradient(ellipse at top left, rgba(108,99,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(245,158,11,0.1) 0%, transparent 60%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '300px', height: '300px', background: 'rgba(108,99,255,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '250px', height: '250px', background: 'rgba(245,158,11,0.08)', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="glass animate-fade-in-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem', borderRadius: '9999px', marginBottom: '1.5rem',
            fontSize: '0.85rem', color: '#6c63ff', fontWeight: '600', letterSpacing: '0.05em'
          }}>
            <span>🎬</span> The Ultimate Creator Program
          </div>

          <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: '1.1', animationDelay: '0.1s' }}>
            Master the Art of <br/><span className="gradient-text">Post-Production.</span>
          </h1>

          <p className="animate-fade-in-up" style={{ fontSize: '1.2rem', color: 'var(--color-muted)', maxWidth: '600px', margin: '0 auto 3rem', animationDelay: '0.2s' }}>
            Elevate your storytelling. Learn industry-standard tools and techniques to create breathtaking video content that commands attention.
          </p>

          <div className="animate-fade-in-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem', animationDelay: '0.3s' }}>
            <a href="#curriculum" className="btn-primary">View Curriculum</a>
            <a href="#pricing" className="btn-secondary">Enroll Now</a>
          </div>

          {/* Cinematic Showreel Placeholder */}
          <div className="animate-fade-in-up shadow-glow" style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            animationDelay: '0.4s'
          }}>
            <div style={{ 
              position: 'absolute', inset: 0, 
              background: 'linear-gradient(45deg, rgba(108,99,255,0.1), rgba(245,158,11,0.1))',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)' }} className="glow">
                  <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: '8px' }} />
                </div>
                <span style={{ fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Watch Showreel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Curriculum Section ────────────────────────────────────── */}
      <section id="curriculum" style={{ padding: '6rem 2rem', background: 'var(--color-surface-2)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              The <span className="gradient-text">Curriculum</span>
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Six comprehensive modules designed to take you from absolute beginner to industry-ready post-production specialist.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {modules.map((m, i) => (
              <div key={i} className="glass" style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                }}
              >
                <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'Outfit', color: 'rgba(108,99,255,0.2)', position: 'absolute', top: '1.5rem', right: '2rem', lineHeight: '1' }}>
                  {m.moduleNumber}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', paddingRight: '3rem', color: '#fff' }}>{m.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{m.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {m.software.map(sw => (
                    <span key={sw} style={{ background: 'rgba(108,99,255,0.1)', color: '#a5a0ff', fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: '500' }}>
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instructor Section ────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div className="glass glow" style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--color-surface)' }}>
              {/* Placeholder for Instructor Image */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)', fontSize: '4rem' }}>
                👤
              </div>
            </div>
            <div className="glass" style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', padding: '1.5rem', borderRadius: '1rem', maxWidth: '250px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#10b981', marginBottom: '0.25rem' }}>10+ Years</div>
              <div style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>Industry Experience in Hollywood Films & Commercials</div>
            </div>
          </div>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Learn from an <span className="gradient-text">Industry Pro.</span>
            </h2>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Instructor Name</h4>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              "I've spent the last decade grading, cutting, and shaping stories for top-tier brands and studios. I built this academy to teach you the exact frameworks and technical secrets that took me years to figure out."
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Certified Blackmagic Design Expert',
                'Worked with Netflix, HBO, & Nike',
                'Passionate educator helping 500+ students'
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text)' }}>
                  <span style={{ color: '#10b981' }}>✓</span> {item}
                </li>
              ))}
            </ul>
             <Link to="/about" className="btn-secondary">Read Full Bio</Link>
          </div>
        </div>
      </section>

      {/* ─── Student Work / Testimonials ───────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            See What Our <span className="gradient-text">Students Create</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
            Don't just take our word for it. Look at the caliber of work our alumni are producing after completing the academy.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3].map(item => (
              <div key={item} className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--color-bg)', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)' }}>
                  ▶ Student Project
                </div>
                <div style={{ display: 'flex', gap: '0.2rem', color: '#f59e0b', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: 'var(--color-text)', fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  "This course completely changed my workflow. The color grading module alone is worth the price of admission. Highly recommended!"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-border)', borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Student Name</div>
                    <div style={{ color: 'var(--color-muted)', fontSize: '0.8rem' }}>Freelance Videographer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Section ───────────────────────────────────────── */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: 'var(--color-bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Invest In Your <span className="gradient-text">Future</span>
          </h2>
          <p style={{ color: 'var(--color-muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
            Choose the path that fits your goals. Start leveling up your editing skills today.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {/* Single Module */}
            <div className="glass" style={{ flex: '1 1 300px', maxWidth: '400px', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Single Module</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Perfect for targeting a specific skill.</p>
              <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--color-text)', marginBottom: '2rem' }}>
                $XX<span style={{ fontSize: '1rem', color: 'var(--color-muted)', fontWeight: '400' }}>/module</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ color: 'var(--color-muted)' }}>✓ Access to 1 specific module</li>
                <li style={{ color: 'var(--color-muted)' }}>✓ Project files included</li>
                <li style={{ color: 'var(--color-muted)' }}>✓ Lifetime access</li>
              </ul>
              <Link to="/contact" className="btn-secondary" style={{ width: '100%' }}>Choose Module</Link>
            </div>

            {/* Full Academy */}
            <div className="glass glow" style={{ flex: '1 1 300px', maxWidth: '400px', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', textAlign: 'left', border: '1px solid var(--color-primary)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #6c63ff, #f59e0b)', color: 'white', padding: '0.25rem 1rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.05em' }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Full Academy Access</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>The complete path to mastery.</p>
              <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--color-text)', marginBottom: '2rem' }}>
                $XXX<span style={{ fontSize: '1rem', color: 'var(--color-muted)', fontWeight: '400' }}>/one-time</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ color: 'var(--color-text)' }}>✓ <strong style={{ color: '#fff' }}>All 6 Premium Modules</strong></li>
                <li style={{ color: 'var(--color-text)' }}>✓ Raw footage & practice assets</li>
                <li style={{ color: 'var(--color-text)' }}>✓ Private Discord community access</li>
                <li style={{ color: 'var(--color-text)' }}>✓ Weekly Q&A sessions</li>
                <li style={{ color: 'var(--color-text)' }}>✓ Certification of completion</li>
              </ul>
              <Link to="/contact" className="btn-primary" style={{ width: '100%' }}>Enroll Full Setup</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

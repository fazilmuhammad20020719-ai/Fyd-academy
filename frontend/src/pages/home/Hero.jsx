import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PremiereIcon from '../../assets/Adobe_Premiere_icon.png'
import DaVinciIcon from '../../assets/DaVinci_Resolve_Studio.png'
import AfterEffectsIcon from '../../assets/Adobe_After_Effe_icon.png'
import BGVideo from '../../assets/video.mp4'

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <>
      <style>{`
        .hero-wrapper {
          padding: 1.5rem; /* uniform margin around the box */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--color-bg); /* Match the app background */
        }

        .hero-box {
          flex: 1;
          border-radius: 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          color: #ffffff;
          padding: 2rem;
          /* Subtle shadow to make it pop like a card without a hard bottom line */
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          overflow: hidden; /* prevents the video from escaping the rounded corners */
        }

        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          border-radius: inherit; /* matches the 2.5rem layout */
          opacity: 0.8; /* Dim it slightly if needed for text readability, or adjust container bg */
        }

        /* The Notch Cutout Illusion */
        .hero-notch {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          height: 45px;
          background-color: var(--color-bg);
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .hero-notch::before,
        .hero-notch::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 30px;
          height: 30px;
          background: transparent;
        }

        .hero-notch::before {
          left: -30px;
          border-bottom-right-radius: 20px;
          box-shadow: 10px 10px 0 10px var(--color-bg);
        }

        .hero-notch::after {
          right: -30px;
          border-bottom-left-radius: 20px;
          box-shadow: -10px 10px 0 10px var(--color-bg);
        }
        
        .scroll-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          animation: scrollBob 2.5s ease-in-out infinite;
        }

        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        @keyframes playPulse {
          0% {
            box-shadow: 0 8px 64px rgba(0,0,0,0.3), 0 0 0 0 rgba(500, 150, 22, 0.4);
          }
          70% {
            box-shadow: 0 8px 64px rgba(0,0,0,0.3), 0 0 0 20px rgba(500, 150, 22, 0);
          }
          100% {
            box-shadow: 0 8px 64px rgba(0,0,0,0.3), 0 0 0 0 rgba(500, 150, 22, 0);
          }
        }
      `}</style>

      <div className="hero-wrapper">
        <section className="hero-box" style={{ backgroundColor: '#0f0f1a', position: 'relative' }}>

          {/* Background Video element covering the box */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-bg"
            style={{ opacity: 0.7, pointerEvents: 'none' }}
          >
            <source src={BGVideo} type="video/mp4" />
          </video>

          {/* Floating Settings Icon (Left Center) */}
          <div style={{
            position: 'absolute',
            left: '3rem',
            top: '40%',
            width: '48px',
            height: '48px',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>

          <div style={{ maxWidth: '1000px', position: 'relative', zIndex: 1, width: '100%' }}>

            {/* Main Title Group with Intentionally Positioned Floating 3D Icons */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '3rem' }}>
              <h1 className="animate-fade-in-up" style={{
                fontSize: 'clamp(3rem, 5vw, 5rem)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '300',
                lineHeight: '1.05',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                animationDelay: '0.1s',
              }}>
                Turn Raw Footage Into <br /> Cinematic <span style={{
                  fontStyle: 'italic',
                  fontWeight: '800',
                  background: 'linear-gradient(90deg, #ffffff 20%, #fa4616 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))'
                }}>Masterpieces</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="animate-fade-in-up" style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              animationDelay: '0.2s',
              fontWeight: '400',
              lineHeight: '1.5'
            }}>
              Master industry-standard video editing, Hollywood color grading, sound design, and VFX. <br /> Learn the exact workflows used by professionals to elevate your content.
            </p>

            {/* Buttons */}
            <div className="animate-fade-in-up" style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animationDelay: '0.3s',
              position: 'relative'
            }}>
              <a href="#curriculum" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '220px', boxSizing: 'border-box',
                padding: '0.8rem 1rem', background: '#ffffff', color: '#0f0f1a',
                borderRadius: '9999px', fontWeight: '700', fontSize: '0.95rem',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 12px 35px rgba(255, 255, 255, 0.25), 0 4px 10px rgba(255, 255, 255, 0.1)', transition: 'transform 0.2s, box-shadow 0.2s',
                textDecoration: 'none'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                View Curriculum
              </a>
              <a href="https://whop.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '220px', boxSizing: 'border-box',
                padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.1)',
                color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '9999px', fontWeight: '600', fontSize: '0.95rem',
                backdropFilter: 'blur(10px)', transition: 'all 0.2s',
                textDecoration: 'none'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Learn More
              </a>

              {/* Absolute Play Button */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  animation: 'playPulse 2s infinite'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fa4616" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Indicator Cutout */}
          <div className="hero-notch" style={{ animationDelay: '0.5s' }}>
            <div className="scroll-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              <span style={{ margin: '0 0.2rem' }}>SCROLL ME</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

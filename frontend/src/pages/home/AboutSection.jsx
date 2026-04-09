import { useEffect, useRef } from 'react';
import GlobeImg from '../../assets/globe.png';
import AvatarImg from '../../assets/avatar.png';

export default function AboutSection() {
  return (
    <>
      <style>{`
        .bento-container {
          padding: 6rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          background-color: var(--color-bg);
          color: #ffffff;
        }

        .bento-header {
          margin-bottom: 4rem;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 165, 0, 0.1);
          border: 1px solid rgba(255, 165, 0, 0.2);
          border-radius: 9999px;
          color: #ffa500;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .about-badge i {
          width: 6px;
          height: 6px;
          background: #ffa500;
          border-radius: 50%;
        }

        .bento-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          max-width: 800px;
        }

        .bento-title span {
          color: rgba(255, 255, 255, 0.4);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-template-rows: auto auto;
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
        }

        .bento-card {
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
          padding: 2.5rem;
        }

        /* Large Card (Globe) */
        .card-large {
          grid-row: span 2;
          background: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          min-height: 600px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .card-large .globe-bg {
          position: absolute;
          bottom: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: auto;
          opacity: 0.8;
          pointer-events: none;
        }

        .card-large .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .card-large .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9999px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          color: rgba(255,255,255,0.7);
        }

        .card-large .status-badge .dot {
          width: 6px;
          height: 6px;
          background: #ffa500;
          border-radius: 50%;
          box-shadow: 0 0 10px #ffa500;
        }

        .card-large h3 {
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .card-large h3 span {
          color: #ffa500;
        }

        .card-large .cta-btn {
          padding: 0.8rem 2rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9999px;
          color: #ffffff;
          font-weight: 600;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .card-large .cta-btn:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* Stats Card (White Top) */
        .card-stats {
          background: #f8f9fa;
          color: #000000;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-stats .info {
          max-width: 250px;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 500;
          color: #333333;
        }

        .card-stats .rating {
          margin-top: 2rem;
        }

        .card-stats .rating .stars {
          display: flex;
          gap: 2px;
          margin-top: 0.5rem;
        }

        .card-stats .rating .star-box {
          background: #00b67a;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-stats .rating .trustpilot {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .card-stats .big-number {
          position: absolute;
          right: -10%;
          bottom: 10%;
          font-size: 8rem;
          font-weight: 800;
          color: rgba(0,0,0,0.03);
          line-height: 1;
        }

        /* Testimonial Card (White Bottom) */
        .card-quote {
          background: #f8f9fa;
          color: #000000;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 600px) {
          .card-quote {
            flex-direction: column;
            text-align: center;
          }
        }

        .card-quote .avatar {
          width: 140px;
          height: 180px;
          border-radius: 1.5rem;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .card-quote .quote-content {
          flex: 1;
        }

        .card-quote .quote-content i {
          font-size: 2rem;
          color: rgba(0,0,0,0.1);
          display: block;
          margin-bottom: 0.5rem;
        }

        .card-quote .quote-text {
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.4;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .card-quote .author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .card-quote .author .name {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .card-quote .author .title {
          font-size: 0.85rem;
          color: #666666;
        }

      `}</style>

      <section className="bento-container">
        <div className="bento-header animate-fade-in-up">
          <div className="about-badge">
            <i />
            About Us
          </div>
          <h2 className="bento-title">
            Human-Centered AI,<br />
            <span>Built for Production</span>
          </h2>
        </div>

        <div className="bento-grid">
          {/* Large Globe Card */}
          <div className="bento-card card-large animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="content">
              <div className="status-badge">
                <span className="dot" />
                Available for worldwide project
              </div>
              <h3>Based in <span>Montréal, Canada</span></h3>
              <button className="cta-btn">Start a Project</button>
            </div>
            <img src={GlobeImg} alt="Globe" className="globe-bg" />
          </div>

          {/* Stats Card */}
          <div className="bento-card card-stats animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="info">
              Trusted by 120+ clients across 4 industries - shipping AI from idea to production in 8-10 weeks
            </div>
            <div className="rating">
              <div className="trustpilot">
                <svg width="24" height="24" viewBox="0 0 45 44" fill="#00b67a" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.471 16.516H27.568L22.28 0L17 16.516H0L13.753 26.65L8.52 43.166L22.28 33.15L36.04 43.166L30.8 26.65L44.471 16.516Z" />
                </svg>
                Trustpilot
              </div>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="star-box">
                    <svg width="12" height="12" viewBox="0 0 45 44" fill="#ffffff">
                      <path d="M44.471 16.516H27.568L22.28 0L17 16.516H0L13.753 26.65L8.52 43.166L22.28 33.15L36.04 43.166L30.8 26.65L44.471 16.516Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="big-number">120+</div>
          </div>

          {/* Quote Card */}
          <div className="bento-card card-quote animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img src={AvatarImg} alt="Ava Collins" className="avatar" />
            <div className="quote-content">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(0,0,0,0.05)">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V12M3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 15.1046 10 14V9C10 7.89543 9.10457 7 8 7H5C3.89543 7 3 7.89543 3 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="quote-text">
                "Good AI feels obvious—because the hard work is hidden."
              </p>
              <div className="author">
                <span className="name">Ava Collins</span>
                <span className="title">Aigocy's Design Lead</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

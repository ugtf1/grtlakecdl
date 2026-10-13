import logo from "../assets/logo.webp";
import "./ComingSoon.css";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  delay: `${(i * 0.31) % 6}s`,
  x: `${(i * 17) % 100}%`,
  size: `${4 + (i % 4) * 2}px`,
  duration: `${6 + ((i % 6) + 1) * 1.5}s`,
}));

export default function ComingSoon() {
  return (
    <div className="cs-page cs-loaded">
      {/* Animated background particles */}
      <div className="cs-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="cs-particle"
            style={{
              "--delay": particle.delay,
              "--x": particle.x,
              "--size": particle.size,
              "--duration": particle.duration,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="cs-orb cs-orb-1"></div>
      <div className="cs-orb cs-orb-2"></div>
      <div className="cs-orb cs-orb-3"></div>

      {/* Main content */}
      <div className="cs-content">
        {/* Logo */}
        <div className="cs-logo-wrapper">
          <img src={logo} alt="Great Lakes CDL Academy" className="cs-logo" />
          <div className="cs-logo-ring"></div>
        </div>

        {/* School Name */}
        <h1 className="cs-school-name">
          <span className="cs-name-great">Great Lakes</span>
          <span className="cs-name-cdl">CDL Academy</span>
        </h1>

        {/* Tagline */}
        <p className="cs-tagline">
          Your pathway to a <span className="cs-highlight">high-paying career</span> in commercial driving
        </p>

        {/* Divider */}
        <div className="cs-divider">
          <span className="cs-divider-line"></span>
          <span className="cs-divider-dot"></span>
          <span className="cs-divider-line"></span>
        </div>

        {/* Coming Soon */}
        <div className="cs-coming-soon">
          <h2 className="cs-coming-text">Coming Soon!</h2>
          <p className="cs-coming-sub">
            Application for enrolment will commence soon!
          </p>
        </div>

        {/* Contact Section */}
        {/* <div className="cs-contact">
          <p className="cs-contact-label">Get in touch with us</p>
          <div className="cs-contact-items">
            <a href="tel:+13134749777" className="cs-contact-item">
              <span className="cs-contact-icon">📞</span>
              <span className="cs-contact-detail">
                <strong>Call Us</strong>
                (313) 474-9777
              </span>
            </a>
            <a href="mailto:info@greatlakescdl.com" className="cs-contact-item">
              <span className="cs-contact-icon">✉️</span>
              <span className="cs-contact-detail">
                <strong>Email Us</strong>
                info@gl-cdl.com
              </span>
            </a>
            <div className="cs-contact-item">
              <span className="cs-contact-icon">📍</span>
              <span className="cs-contact-detail">
                <strong>Location</strong>
                Detroit, Michigan
              </span>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <p className="cs-footer">
          © {new Date().getFullYear()} Great Lakes CDL Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}

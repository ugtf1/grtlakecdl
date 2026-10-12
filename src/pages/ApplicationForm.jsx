import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Application() {
  // ============================================================
  // ENROLMENT OVERLAY CONTROL
  // Set this to false when you're ready to accept applications.
  // That single change removes the overlay and opens the form.
  // ============================================================
  const [enrolmentPaused] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      {/* The actual form renders underneath so it's ready when you flip the flag */}
      <ApplicationForm />

      {/* ========== ENROLMENT COMING SOON OVERLAY ========== */}
      {enrolmentPaused && (
        <div className="enrolment-overlay">
          <div className="enrolment-overlay-card">
            <div className="enrolment-overlay-icon">🎓</div>
            <h2 className="enrolment-overlay-title">Enrolment Opening Soon!</h2>
            <p className="enrolment-overlay-subtitle">
              Great Lakes CDL Academy is preparing to welcome its next class of students.
            </p>
            <div className="enrolment-overlay-divider"></div>
            <p className="enrolment-overlay-body">
              Our application portal is currently being set up. We will begin accepting
              applications very soon. Please check back shortly or contact us for more information.
            </p>
            <div className="enrolment-overlay-actions">
              <a href="tel:+13134749777" className="enrolment-overlay-btn call">
                📞 Call Us Now
              </a>
              <Link to="/" className="enrolment-overlay-btn home">
                ← Back to Home
              </Link>
            </div>
            <p className="enrolment-overlay-footer">
              📧 For enquiries, call <strong>(313) 474-9777</strong>
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
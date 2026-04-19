import React from "react";
import "./AboutFounder.css";
import founderImg from "../assets/ffo1.avif";

export default function AboutFounder() {
  return (
    <section className="about-founder-section">
      <div className="about-founder-container">
        <h2 className="about-founder-title">Meet the Founder</h2>
        <div className="about-founder-grid">
          {/* Left Card */}
          <div className="about-founder-card about-founder-text-card">
            <h3 className="about-founder-subtitle">Leadership & Expertise</h3>
            <p>
              Vern Fuller is an award-winning workforce development executive and
              nationally recognized leader in employment outcomes. As the recipient
              of the 2024 Workforce Development Award, he has built and led
              high-performing training programs that consistently rank among the
              most successful in the nation for job placement—particularly for
              individuals facing significant barriers to employment.
            </p>
            <p>
              Throughout his career, Vern has established data-driven,
              results-oriented models that have achieved up to 98% job placement
              success, while maintaining strong partnerships with employers,
              government agencies, and community organizations. His work has
              directly contributed to reduced recidivism, increased workforce
              participation, and measurable economic impact across the communities
              he serves.
            </p>
            <h3 className="about-founder-subtitle">Accountability. Opportunity. Results.</h3>
            <p>
              With a foundation rooted in accountability, opportunity, and measurable
              outcomes, Vern leads Great Lakes CDL Academy with a clear mission: to
              deliver career pathways that create lasting financial stability and
              transform lives at scale.
            </p>
          </div>

          {/* Right Card */}
          <div className="about-founder-card about-founder-image-card">
            <img className="about-founder-image" src={founderImg} alt="Founder Vern Fuller" />
          </div>
        </div>
      </div>
    </section>
  );
}

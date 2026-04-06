import React from "react";
import "./WhyChooseUs.css";

// Import icons
import recordIcon from "../assets/record.webp";
import instructorIcon from "../assets/instructor.webp";
import truckIcon from "../assets/truck.webp";
import partnershipIcon from "../assets/partnership.webp";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2 className="wcu-heading">Why Choose Us</h2>
      <p className="wcu-subheading">
        Most schools chase tuition. We focus on your success.
      </p>

      <div className="wcu-cards">
        <div className="wcu-card">
          <img src={recordIcon} alt="Training Records" className="wcu-icon" />
          <h3>5 National Training Records</h3>
          <p>We’re recognized nationally for excellence in CDL training.</p>
        </div>

        <div className="wcu-card">
          <img src={instructorIcon} alt="Experienced Instructors" className="wcu-icon" />
          <h3>Experienced Instructors</h3>
          <p>Learn from seasoned professionals who know the industry inside out.</p>
        </div>

        <div className="wcu-card">
          <img src={truckIcon} alt="Modern Training Truck" className="wcu-icon" />
          <h3>Modern Training Truck</h3>
          <p>Train with up-to-date equipment that prepares you for real-world driving.</p>
        </div>

        <div className="wcu-card">
          <img src={partnershipIcon} alt="Strong Hiring Partnerships" className="wcu-icon" />
          <h3>Strong Hiring Partnerships</h3>
          <p>Benefit from our network of employers ready to hire CDL graduates.</p>
        </div>
      </div>
    </section>
  );
}

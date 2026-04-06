import React from "react";
import "./AcademySection.css";

// Import images
import img1 from "../assets/community.webp";
import img2 from "../assets/guidance.webp";
import img3 from "../assets/future.webp";
import { Link } from "react-router-dom";

export default function AcademySection() {
  return (
    <section className="academy-section">
      <div className="academy-card left-card">
        <h2>An Academy for real people like you.</h2>
        <p>
          Join a diverse community focused on growth, confidence, and financial
          progress.
        </p>
        <Link to="/Contact" className="academy-btn">
          Contact Us Now
        </Link>

        <div className="academy-subcards">
          <div className="subcard">
            <img src={img1} alt="Community" />
            <p>Learning together. Moving forward together.</p>
          </div>
          <div className="subcard">
            <img src={img3} alt="Guidance" />
            <p>Guidance you understand. Support you can trust.</p>
          </div>
        </div>
      </div>

      <div className="academy-card right-card">
        <img src={img2} alt="Future" />
        <p>Your future income is one decision away.</p>
        {/* <button className="academy-btn">Apply Now</button> */}
      </div>
    </section>
  );
}

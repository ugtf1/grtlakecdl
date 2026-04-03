import React from "react";
import "./WhatWeOffer.css";
import { Link } from "react-router-dom";

// Import images
import trainingImg from "../assets/training-program.png";
import careerImg from "../assets/career-support.png";

export default function WhatWeOffer() {
  return (
    <section className="what-we-offer">
      <h2 className="wwo-heading">What We Offer</h2>

    
      <div className="wwo-card wwo-card-split">
        <div className="wwo-content">
          <h3>CDL Skills Training Program</h3>
          <p>
            Hands-on driving lessons designed to prepare you for real road
            conditions and licensing success.
          </p>
          <ul className="wwo-list">
            <li>Real-world driving experience</li>
            <li>Step-by-step instructor guidance</li>
            <li>Job-ready practical skills</li>
          </ul>
        </div>
        <img
          src={trainingImg}
          alt="CDL Skills Training"
          className="wwo-image-split"
        />
      </div>

      {/* Job Placement & Career Support */}
      <div className="wwo-card wwo-card-split">
        <img
          src={careerImg}
          alt="Career Support"
          className="wwo-image-split"
        />
        <div className="wwo-content">
          <h3>Job Placement & Career Support</h3>
          <p>
            We help you secure stable job opportunities that support long-term
            financial growth.
          </p>
          <div className="wwo-buttons">
            <Link to="/Application-Form" className="wwo-btn enroll">
              Enroll Now
            </Link>
            <button className="wwo-btn call">Call Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

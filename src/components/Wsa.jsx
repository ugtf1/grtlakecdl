import React from "react";
import "./Wsa.css";

// Import your images
import jobImg from "../assets/job-results.webp";
import industryImg from "../assets/industry-connection.webp";
import trainingImg from "../assets/hands-on-training.webp";
import supportImg from "../assets/full-support.webp";
import fastTrackImg from "../assets/fast-track.webp";
import opportunitiesImg from "../assets/job-opportunities.webp";

export default function Wsa() {
  // Reusable arrow icon
  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const cards = [
    { img: jobImg, title: "Job Results", points: [
      "We deliver top placement rates nationwide",
      "No experience required; training starts day 1."
      // "Others offer no clear job outcomes"
    ]},
    { img: industryImg, title: "Industry Connection", points: [
      "We connect you directly with employers",
      "Others have little or no connection"
    ]},
    { img: trainingImg, title: "Hands-on Training", points: [
      "We provide real driving experience",
      "Others offer limited practice time",
      "Refresher courses availability"
    ]},
    { img: supportImg, title: "Full Support", points: [
      "We guide you from start to job placement",
      "Call us for financing support",
      "Others leave you on your own after training"
    ]},
    { img: fastTrackImg, title: "Fast-Track Program", points: [
      "Job ready in 2-6 structured weeks.",
      "Others drag out training with no clear structure"
    ]},
    { img: opportunitiesImg, title: "Job Opportunities", points: [
      "We provide direct pathways to employment",
      "Call us for more information",
      "Others leave you with no clear next step"
    ]}
  ];

  return (
    <section className="wsa">
      <div className="wsa-header">
        <h2>Why We Stand Above Other <br /> CDL Schools</h2>
        <p>A leading CDL training academy in Michigan</p>
      </div>

      <div className="wsa-grid">
        {cards.map((card, idx) => (
          <div className="wsa-card" key={idx}>
            <div className="image-wrapper">
              <img src={card.img} alt={card.title} />
              <div className="card-icon"><ArrowIcon /></div>
            </div>
            <h4>{card.title}</h4>
            <ul>
              {card.points.map((point, i) => (
                <li key={i}><span className="tick"></span> {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

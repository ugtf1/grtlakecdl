import React from "react";
import "./Wsa.css";

// Import your images
import jobImg from "../assets/job-results.png";
import industryImg from "../assets/industry-connection.png";
import trainingImg from "../assets/hands-on-training.png";
import supportImg from "../assets/full-support.png";
import fastTrackImg from "../assets/fast-track.png";
import opportunitiesImg from "../assets/job-opportunities.png";

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
      "Others offer no clear job outcomes"
    ]},
    { img: industryImg, title: "Industry Connection", points: [
      "We connect you directly with employers",
      "Others have little or no connection"
    ]},
    { img: trainingImg, title: "Hands-on Training", points: [
      "We provide real driving experience",
      "Others offer limited practice time"
    ]},
    { img: supportImg, title: "Full Support", points: [
      "We guide you from start to job placement",
      "Others leave you on your own after training"
    ]},
    { img: fastTrackImg, title: "Fast-Track Program", points: [
      "Get job-ready in 4–6 structured weeks",
      "Others drag out training with no clear structure"
    ]},
    { img: opportunitiesImg, title: "Job Opportunities", points: [
      "We provide direct pathways to employment",
      "Others leave you with no clear next step"
    ]}
  ];

  return (
    <section className="wsa">
      <div className="wsa-header">
        <h2>Why We Stand Above Other <br /> CDL Schools</h2>
        <p>The difference is clear when you know what to look for.</p>
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

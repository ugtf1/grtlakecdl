import React from "react";
import "./HowItWorks.css";

// Import assets
import callImg from "../assets/call.jpg";
import advisorImg from "../assets/advisor.jpg";
import trainingImg from "../assets/training.jpg";
// import trucksBg from "../assets/trucks-bg.jpg";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="hiw-overlay">
        <h2 className="hiw-heading">How It Works</h2>

        <div className="hiw-cards">
          <div className="hiw-card hiw-card-left">
            <img src={callImg} alt="Call or Apply" className="hiw-image" />
            <h3>Call or Apply</h3>
            <p>Reach out and take your first step.</p>
          </div>

          <div className="hiw-card hiw-card-center">
            <img src={advisorImg} alt="Meet Advisor" className="hiw-image" />
            <h3>Meet Advisor</h3>
            <p>Get clear guidance on your path.</p>
          </div>

          <div className="hiw-card1 hiw-card-right">
  <         img src={trainingImg} alt="Start Training" className="hiw-training-image" />
            <h3>Start Training</h3>
            <p>Begin building your new career.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

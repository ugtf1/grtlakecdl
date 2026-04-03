import React from "react";
import "./VisionMission.css";

// Import assets
import handshakeImg from "../assets/handshake.jpg";
import lightbulbIcon from "../assets/lightbulb.png";
// import networkOverlay from "../assets/network-overlay.png";

export default function VisionMission() {
  return (
    <section className="vision-mission">
      {/* Top headline */}
      <h1 className="vm-top-heading">
        We focus on helping you build income, not just driving skills.
      </h1>

      <div className="vm-cards">
        {/* Left card */}
        <div className="vm-card vm-left-card">
          <h2 className="vm-small-heading1">
            We Change Lives Through Career-Focused Training
          </h2>
          <p className="">
            With over 25 years of experience, Great Lake CDL Academy helps
            everyday people gain the skills, support, and job opportunities
            needed to build stable and rewarding careers.
          </p>

          <h2 className="vm-small-heading">Mission & Vision</h2>
          <p className="vm-text">
            We train people to earn, grow, and build a better future.
          </p>

          <h3 className="vm-button-heading">Mission</h3>
          <p className="vm-text">
            To change lives through practical CDL training that leads to real
            jobs and stable income.
          </p>

          <h3 className="vm-button-heading">Vision</h3>
          <p className="vm-text">
            To be the most trusted pathway to financial stability through
            career-focused driver education.
          </p>

          {/* Lightbulb beside text */}
          <div className="vm-lightbulb-container">
            <img src={lightbulbIcon} alt="Lightbulb Icon" className="vm-lightbulb" />
          </div>
        </div>

        {/* Right card */}
        <div className="vm-card vm-right-card">
          <img src={handshakeImg} alt="Handshake" className="vm-handshake" />
        </div>
      </div>
    </section>
  );
}

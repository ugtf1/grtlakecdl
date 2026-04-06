import React from "react";
import "./AboutHero.css";

// Import your images
import classroomImg from "../assets/classroom.webp";
import hardhatImg from "../assets/hardhat.webp";
import groupImg from "../assets/group.webp";
import cabImg from "../assets/cab.webp";

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>
            Change Your Future—<span className="highlight">Get your CDL</span>
        </h1>
        <p>
            hands-on training and job opportunities focus
        </p>
    </div>

      <div className="about-gallery">
        <div className="about-card">
          <img src={classroomImg} alt="Classroom Training" />
        </div>
        <div className="about-card">
          <img src={hardhatImg} alt="Safety Training" />
        </div>
        <div className="about-card">
          <img src={groupImg} alt="Group Instruction" />
        </div>
        <div className="about-card">
          <img src={cabImg} alt="Truck Cab Training" />
        </div>
      </div>
    </section>
  );
}

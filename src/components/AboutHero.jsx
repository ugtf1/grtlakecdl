import React from "react";
import "./AboutHero.css";

// Import your images
import classroomImg from "../assets/classroom.jpg";
import hardhatImg from "../assets/hardhat.jpg";
import groupImg from "../assets/group.jpg";
import cabImg from "../assets/cab.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-hero">
        <h1>
            Change Your Future—<span className="highlight">Get your CDL</span>
        </h1>
        <p>
            Hands-on CDL training, expert instructors, and a proven path to real job opportunities.
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

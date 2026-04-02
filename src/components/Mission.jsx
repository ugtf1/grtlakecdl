import React from "react";
import "./Mission.css";

// Import your images
import classroomImg from "../assets/classroom-discussion.png";
import cabImg from "../assets/truck-cab-training.png";
import missionImg from "../assets/mission-banner.png"; // placeholder for "Our Mission is Simple"

export default function MissionTwoCards() {
  return (
    <section className="mission-two-cards">
      {/* Left Card */}
      <div className="mission-card left-card">
        <h2>We Are Driven to Change Lives</h2>
        <p>
          At Great Lakes CDL Academy, we believe in changing lives—one graduate at a time.
          We may not be able to change the entire world, but for every student who walks
          through our doors, we change theirs. That purpose drives everything we do.
        </p>
        <p>
          We’re a top CDL training academy delivering hands-on learning, expert instruction,
          and real career results—so every student is fully prepared to succeed on the road.
        </p>
        <img src={cabImg} alt="Classroom Training" />
      </div>

      {/* Right Card */}
      <div className="mission-card right-card">
        <img src={classroomImg} alt="Truck Cab Training" />
        <img src={missionImg} alt="Our Mission Banner" className="mission-banner" />
        
        <h3>Want Results You Can Actually Count On?</h3>
        <p>
          Our commitment to results isn’t just a promise—it’s proven. With multiple national-level
          records in job placement within the trucking industry, we take pride in turning training
          into real employment opportunities for our graduates.
        </p>
      </div>
    </section>
  );
}

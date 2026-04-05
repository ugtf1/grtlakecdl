import React from "react";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-item">
        <h2>25+</h2>
        <p>Years of Experience</p>
      </div>
      <div className="stats-item">
        <h2>2000+</h2>
        <p>Students Trained</p>
      </div>
      <div className="stats-item">
        <h2>98%</h2>
        <p>Job Placement Rate</p>
      </div>
      <div className="stats-item">
        <h3>Class A 160 Class B 40</h3>
        <p>Hours Program Completion Time</p>
      </div>
    </section>
  );
}

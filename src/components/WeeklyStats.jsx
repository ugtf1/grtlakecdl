import React from "react";
import "./WeeklyStats.css";

// Import images
import earningsImg from "../assets/w1.png";   
import trucksImg from "../assets/w2.jpg";       

export default function WeeklyStats() {
  return (
    <section className="weekly-stats">
      <div className="stats-container">
        {/* First card */}
        <div className="stats-card stats-card-large">
          <h3>Job security stats</h3>
          <p>
            Join an industry with consistent demand and thousands of job openings.
          </p>
          <img src={trucksImg} alt="Trucks on Highway" className="stats-image" />
        </div>

        <div className="stats-card stats-card-small">
          <h3>Weekly earning potential</h3>
          <p>
            Start earning weekly paychecks that can support your bills, family,
            and future goals.
          </p>
          <img src={earningsImg} alt="Earnings Chart" className="stats-image" />
        </div>

      </div>
    </section>
  );
}

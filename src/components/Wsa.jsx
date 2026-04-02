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
  return (
    <section className="wsa">
      <div className="wsa-header">
        <h2>Why We Stand Above Other CDL Schools</h2>
        <p>The difference is clear when you know what to look for.</p>
      </div>

      <div className="wsa-grid">
        {/* Card 1 */}
        <div className="wsa-card">
          <img src={jobImg} alt="Job Results" />
          <h4>Job Results</h4>
          <ul>
            <li><span className="tick"></span> We deliver top placement rates nationwide</li>
            <li><span className="tick"></span> Others offer no clear job outcomes</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="wsa-card">
          <img src={industryImg} alt="Industry Connection" />
          <h4>Industry Connection</h4>
          <ul>
            <li><span className="tick"></span> We connect you directly with employers</li>
            <li><span className="tick"></span> Others have little or no connection</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="wsa-card">
          <img src={trainingImg} alt="Hands-on Training" />
          <h4>Hands-on Training</h4>
          <ul>
            <li><span className="tick"></span> We provide real driving experience</li>
            <li><span className="tick"></span> Others offer limited practice time</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="wsa-card">
          <img src={supportImg} alt="Full Support" />
          <h4>Full Support</h4>
          <ul>
            <li><span className="tick"></span> We guide you from start to job placement</li>
            <li><span className="tick"></span> Others leave you on your own after training</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="wsa-card">
          <img src={fastTrackImg} alt="Fast-Track Program" />
          <h4>Fast-Track Program</h4>
          <ul>
            <li><span className="tick"></span> Get job-ready in 4–6 structured weeks</li>
            <li><span className="tick"></span> Others drag out training with no clear structure</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="wsa-card">
          <img src={opportunitiesImg} alt="Job Opportunities" />
          <h4>Job Opportunities</h4>
          <ul>
            <li><span className="tick"></span> We provide direct pathways to employment</li>
            <li><span className="tick"></span> Others leave you with no clear next step</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

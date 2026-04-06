import React from "react";
import "./Wcu.css";

// Import your images/icons
import leftImg1 from "../assets/left-img1.webp";
import leftImg2 from "../assets/left-img2.webp";
import { FaBriefcase, FaTruck, FaChalkboardTeacher, FaHandsHelping } from "react-icons/fa";

export default function Wcu() {
  return (
    <section className="wcu">
      <div className="wcu-header">
        <h2>Why Choose Us</h2>
        <p>More Than Training — We Help You Build a <br></br>Better Future</p>
      </div>

      <div className="wcu-body">
        {/* Left Card */}
        <div className="wcu-left">
          <h3>Why We Do It?</h3>
          <p>
            A CDL isn’t just a license—it’s a pathway to stability, financial growth,
            and a new direction in life.
          </p>
          <p>
            Not All CDL Schools Are Created Equal. Choosing the right training program
            can determine how fast—and how successfully—you start your career.
          </p>
          <p>
            Here’s how Great Lakes CDL Academy stands apart.
          </p>
          <div className="wcu-left-images">
            <img src={leftImg1} alt="Training Image 1" />
            <img src={leftImg2} alt="Training Image 2" />
          </div>
        </div>

        {/* Right Card */}
        <div className="wcu-right">
          <div className="wcu-feature">
            <FaBriefcase className="feature-icon" />
            <h4>Real Career Outcomes</h4>
            <p>
              We don’t just train you—we help you start a stable, high-paying career
              with real opportunities after graduation.
            </p>
          </div>

          <div className="wcu-feature">
            <FaTruck className="feature-icon" />
            <h4>Hands-On Learning</h4>
            <p>
              From day one, you gain practical driving experience that builds confidence
              and prepares you for the road.
            </p>
          </div>

          <div className="wcu-feature">
            <FaChalkboardTeacher className="feature-icon" />
            <h4>Expert Instructors</h4>
            <p>
              Industry professionals with years of real-world experience guide you every step
              of the way.
            </p>
          </div>

          <div className="wcu-feature">
            <FaHandsHelping className="feature-icon" />
            <h4>Support From Start to Finish</h4>
            <p>
              From enrollment to job placement, we stay with you—helping you succeed at every stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

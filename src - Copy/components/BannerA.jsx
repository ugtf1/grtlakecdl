import React from "react";
import "./BannerA.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Ready to get started?</h1>
        <p>
          Take the first step toward a high-demand, high-paying career today.
        </p>
        <Link to="/Application-Form" className="banner-btn">
          Enroll Now
        </Link>
      </div>
    </section>
  );
}

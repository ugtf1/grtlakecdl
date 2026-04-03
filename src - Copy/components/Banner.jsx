import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Your future income is one decision away.</h1>
        <p>
          Start your journey toward financial stability with simple, guided training.
        </p>
        <Link to="/Application-Form" className="banner-btn">
          Enroll Now
        </Link>
      </div>
    </section>
  );
}

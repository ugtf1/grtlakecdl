import React from "react";
import "./Hero.css";
import truckDriverImg from "../assets/heroimg2.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
  <div className="hero-container">
    <div className="hero-content">
      <p className="trust-top">
        <span className="glow-dot"></span> Trusted by 1000s of CDL graduates
      </p>

      <h1>Struggling with money? Your high-paying CDL path starts here.”</h1>
      <p className="subtext">
        This is your pathway to stable, real income and a better future.
      </p>

      <div className="hero-buttons">
        <Link to="/Application-Form" className="btn-apply">
          Enroll Now
        </Link>
        <a href="tel:+1234567890" className="btn-call">
          Call Now
        </a>
      </div>
    </div>

    <div className="hero-image">
      <img src={truckDriverImg} alt="Truck Driver" />
    </div>
  </div>

  
  <div className="trust-bottom-container">
    <p className="trust-bottom">
      Trusted by 50,000+ businesses for innovative design and growth
    </p>
  </div>
</section>

  );
}

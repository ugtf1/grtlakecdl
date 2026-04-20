import React from "react";
import { Link } from "react-router-dom";
import truckDriverImg from "../assets/heroimg2.webp";
import "./Hero.css";

const Hero = React.memo(() => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="trust-top">
            <span className="glow-dot"></span> Trusted by 1000s of CDL graduates
          </p>

          <h1>Struggling with money? Your high-paying CDL path starts here.</h1>
          <p className="subtext">
            This is your pathway to stable, real income and a better future.
          </p>

          <div className="hero-buttons">
            <Link to="/Application-Form" className="btn-apply">
              Enroll Now
            </Link>
            <a href="tel:+13134749777" className="btn-call">
              Speak with a Supervisor Now
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={truckDriverImg}
            alt="Truck Driver"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="trust-bottom-container">
        <p className="trust-bottom">
          25+ years of combined experience serving the state of Michigan
        </p>
      </div>
    </section>
  );
});

export default Hero;

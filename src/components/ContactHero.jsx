import React from "react";
import "./ContactHero.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus } from "react-icons/fa";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-content">
        <h1>Got Questions? We’ve Got Answers</h1>
        <p>
          Reach out today and get the guidance you need to start your CDL training
          and secure a high-paying career.
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Ex. James" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Ex. Walker" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Ex. (225) 454-2586" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Ex. jane@example.com" />
        </div>
        <div className="form-group full-width">
          <label>Leave Us a Message</label>
          <textarea placeholder="Write your message here..."></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Start My CDL Career
        </button>
      </form>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h4>Give Us a Call</h4>
          <p>(233)-454-6125</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h4>Send Us Email</h4>
          <p>Greatlakedcl21@gmail.com</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h4>Our Location</h4>
          <p>1543 Michigan, USA</p>
          <button className="info-btn"><FaPlus /></button>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./ContactHero.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import { apiUrl } from "../lib/api";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch(apiUrl("/contact/"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        message: "",
      });
      setStatus({ type: "success", text: "Thanks. Your message was sent successfully." });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", text: "We couldn't send your message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group half-width">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Ex. James"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group half-width">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Ex. Walker"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            placeholder="Ex. (225) 454-2586"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Ex. jane@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group full-width">
          <label>Leave Us a Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {status.text && <p className={`contact-status ${status.type}`}>{status.text}</p>}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Start My CDL Career"}
        </button>
      </form>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h4>Give Us a Call</h4>
          <p>(313)-474-9777</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h4>Send Us Email</h4>
          <p>info@greatlakescdlacademy.net</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h4>Our Location</h4>
          <p>6575 W. Vernor Hwy, Detroit MI 48209</p>
          <button className="info-btn"><FaPlus /></button>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import "./ContactHero.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus } from "react-icons/fa";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await res.json();
        console.error(errorData);
        setStatus("Failed to submit message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error submitting message.");
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
        {status && (
          <div
            className={`form-message ${
              status.toLowerCase().includes("success") ? "success" : "error"
            }`}
          >
            {status}
          </div>
        )}

        <div className="form-row">
          <div className="form-group half-width">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Ex. James"
              required
            />
          </div>
          <div className="form-group half-width">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Ex. Walker"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Ex. (225) 454-2586"
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex. jane@example.com"
            required
          />
        </div>
        <div className="form-group full-width">
          <label>Leave Us a Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>
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
          <p>(313)-474-9777</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h4>Send Us Email</h4>
          <p>info@greatlakescdl.com</p>
          <button className="info-btn"><FaPlus /></button>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h4>Our Location</h4>
          <p>6575 West Burner Highway, Michigan, USA</p>
          <button className="info-btn"><FaPlus /></button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./Footer.css";

// Import images
import truckImg from "../assets/footimg.png"; // replace with your truck image
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={truckImg} alt="Great Lakes CDL Academy Truck" className="footer-truck" />
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <div className="link-group">
            <h4>Main Page</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Inner Page</h4>
            <ul>
              <li>Admin Page</li>
              <li>Sign Up</li>
              <li>Forgot</li>
              <li>Confirm Email</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Courses Pages</h4>
            <ul>
              <li>Style Guide</li>
              <li>Change Log</li>
              <li>404 Page</li>
              <li>Licenses</li>
              <li>Protected</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
          <div className="footer-contact">
            <FaPhone /> <span>+1 (314) 484-6208</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

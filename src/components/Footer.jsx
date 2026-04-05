import React from "react";
import "./Footer.css";

// Import images
import truckImg from "../assets/footimg.png"; // replace with your truck image
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";


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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/admin">Admin Page</a></li>
              {/* <li>Blog</li> */}
            </ul>
          </div>

          <div className="link-group">
            
            <ul>
              {/* <li>Sign Up</li>
              <li>Forgot</li>
              <li>Confirm Email</li> */}
              {/* <li>Privacy Policy</li> */}
            </ul>
          </div>

         
        </div>

        <div className="footer-social">
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaFacebook className="social-icon" />
          <div className="footer-contact">
            <FaPhone /> <span>+1 (313) 474-9777</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

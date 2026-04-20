import React from "react";
import "./Footer.css";

// Import image from public or assets
import truckImg from "../assets/footimg.webp"; 
import { Link } from "react-router-dom";

function SocialIcon({ label, path }) {
  return (
    <span className="social-icon" role="img" aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}

function PhoneIcon() {
  return (
    <span className="phone-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01Z" />
      </svg>
    </span>
  );
}

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <SocialIcon
            label="Instagram"
            path="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2m0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.88 1.12a1.13 1.13 0 1 1-1.13 1.13 1.12 1.12 0 0 1 1.13-1.13M12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5m0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4"
          />
          <SocialIcon
            label="Twitter"
            path="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.77-6.24L6.67 22H3.56l7.24-8.28L1 2h6.25l4.31 5.69Zm-1.07 18.17h1.69L6.33 3.74H4.51Z"
          />
          <SocialIcon
            label="LinkedIn"
            path="M6.94 8.5V19H3.5V8.5Zm.23-3.25a2 2 0 1 1-2-2 2 2 0 0 1 2 2M20.5 12.55V19h-3.42v-5.95c0-1.49-.53-2.5-1.87-2.5a2 2 0 0 0-1.88 1.34 2.5 2.5 0 0 0-.12.89V19H9.79s.04-9.68 0-10.5h3.42v1.49a3.39 3.39 0 0 1 3.08-1.7c2.25 0 3.94 1.47 3.94 4.63"
          />
          <SocialIcon
            label="Facebook"
            path="M13.5 21v-7h2.36l.35-2.73H13.5V9.53c0-.79.22-1.33 1.36-1.33h1.45V5.76A19.53 19.53 0 0 0 14.2 5.6c-2.09 0-3.52 1.28-3.52 3.63v2H8.32V14h2.36v7Z"
          />
          <div className="footer-contact">
            <PhoneIcon />
            <span>+1 (313) 474-9777</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

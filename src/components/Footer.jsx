import React, { Suspense } from "react";
import "./Footer.css";

// Import image from public or assets
import truckImg from "../assets/footimg.webp"; 
import { Link } from "react-router-dom";

// Lazy load each icon
const InstagramIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaInstagram }))
);
const TwitterIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaTwitter }))
);
const LinkedinIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaLinkedin }))
);
const FacebookIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaFacebook }))
);
const PhoneIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaPhone }))
);

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
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <Suspense fallback={<span />}>
            <InstagramIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
            <LinkedinIcon className="social-icon" />
            <FacebookIcon className="social-icon" />
            <div className="footer-contact">
              <PhoneIcon /> <span>+1 (313) 474-9777</span>
            </div>
          </Suspense>
        </div>
      </div>
    </footer>
  );
}

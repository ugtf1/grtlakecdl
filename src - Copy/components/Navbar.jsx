import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {

        setHidden(true);
      } else {
    
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Great Lake CDL Logo" className="navbar-logo" />
        <span className="navbar-brand">Great Lake CDL</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navbar-center">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>

        <div className="navbar-right">
          {isAuthenticated ? (
            <>
              <NavLink to="/admin" className="btn-admin">Admin</NavLink>
              <button onClick={logout} className="btn-logout">Logout</button>
            </>
          ) : (
            <NavLink to="/admin-login" className="btn-admin">Sign in as Admin</NavLink>
          )}
          <NavLink to="/application-form" className="btn-apply">Apply Now</NavLink>
        </div>
      </div>
    </nav>
  );
}

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo.webp";

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

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navbar-center">
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>

        <div className="navbar-right">
          {isAuthenticated ? (
            <>
              <NavLink to="/admin" className="btn-admin" onClick={() => setMenuOpen(false)}>Admin</NavLink>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="btn-logout"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/admin-login" className="btn-admin" onClick={() => setMenuOpen(false)}>Sign in as Admin</NavLink>
          )}
          <NavLink to="/application-form" className="btn-apply" onClick={() => setMenuOpen(false)}>Apply Now</NavLink>
        </div>
      </div>
    </nav>
  );
}

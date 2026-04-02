import React from "react";
import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <section className="admin-login">
      <div className="login-card">
        <h2 className="login-heading">Admin Portal</h2>
        <p className="login-subtext">Sign in to manage your dashboard</p>

        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="admin@example.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer">© 2026 Great Lake CDL Training</p>
      </div>
    </section>
  );
}

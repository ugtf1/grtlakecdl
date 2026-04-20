import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const routePreloads = {
  "/about": () => import("./pages/AboutUs.jsx"),
  "/contact": () => import("./pages/ContactUs.jsx"),
  "/application-form": () => import("./pages/ApplicationForm.jsx"),
  "/admin": () => import("./pages/Admin.jsx"),
  "/admin-login": () => import("./pages/AdminLogin.jsx"),
};

const preloadCurrentRoute = routePreloads[window.location.pathname.toLowerCase()];

// Start fetching the initial route chunk before React renders so the page
// component and its LCP element are discovered earlier.
if (preloadCurrentRoute) {
  void preloadCurrentRoute();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

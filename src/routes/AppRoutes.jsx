import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";

// Keep secondary pages lazy, but load Home eagerly for the landing route.
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Admin = lazy(() => import("../pages/Admin"));
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const ApplicationForm = lazy(() => import("../pages/ApplicationForm"));
// const Services = React.lazy(() => import("../pages/Services")); // if needed later

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/application-form" element={<ApplicationForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

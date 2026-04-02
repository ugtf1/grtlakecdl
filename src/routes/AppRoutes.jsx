import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
// import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import ApplicationForm from "../pages/ApplicationForm";
import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

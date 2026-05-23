import Hero from "../components/Hero";
import VisionMission from "../components/VisionMission";
import WeeklyStats from "../components/WeeklyStats";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import WhatWeOffer from "../components/WhatWeOffer";
import Testimonials from "../components/Testimonials";
import AcademySection from "../components/AcademySection";
import Banner from "../components/Banner";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
            <h1
        style={{
          textAlign: "center",
          fontFamily: "Poppins, Inter, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#2c3e50",
          marginTop: "40px",
          marginBottom: "20px",
          letterSpacing: "1px"
        }}
      >
        CDL Training in Detroit, Michigan – Great Lakes CDL Academy
      </h1>
      <VisionMission />
      <WeeklyStats />
      <WhyChooseUs />
      <HowItWorks />
      <WhatWeOffer />
      <Testimonials />
      <AcademySection />
      <Banner />
      <Footer />
    </div>
  );
}

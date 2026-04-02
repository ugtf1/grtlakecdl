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

import React, { Suspense } from "react";

// Critical above-the-fold component
import Hero from "../components/Hero";

// Lazy load the rest
const VisionMission = React.lazy(() => import("../components/VisionMission"));
const WeeklyStats = React.lazy(() => import("../components/WeeklyStats"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const HowItWorks = React.lazy(() => import("../components/HowItWorks"));
const WhatWeOffer = React.lazy(() => import("../components/WhatWeOffer"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const AcademySection = React.lazy(() => import("../components/AcademySection"));
const Banner = React.lazy(() => import("../components/Banner"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <div>
      {/* Hero loads immediately */}
      <Hero />

      {/* Other sections load lazily */}
      <Suspense fallback={<div>Loading...</div>}>
        <VisionMission />
        <WeeklyStats />
        <WhyChooseUs />
        <HowItWorks />
        <WhatWeOffer />
        <Testimonials />
        <AcademySection />
        <Banner />
        <Footer />
      </Suspense>
    </div>
  );
}

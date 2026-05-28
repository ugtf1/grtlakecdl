import AboutHero from "../components/AboutHero";
import Mission from "../components/Mission";
import Wcu from "../components/Wcu";
import Stats from "../components/Stats";
import Wsa from "../components/Wsa";
import Banner from "../components/BannerA";
import Footer from "../components/Footer";
import AboutFounder from "../components/AboutFounder";

export default function AboutUs() {
  return (
    <div>
      <AboutHero />
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
      <Mission />
      <AboutFounder />
      <Wcu />
      <Stats />
      <Wsa />
      <Banner />
      <Footer />

    </div>
  );
}

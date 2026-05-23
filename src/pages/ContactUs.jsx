import ContactHero from "../components/ContactHero";
import Banner from "../components/BannerA";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <div>
      <ContactHero />
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
      <Banner />
      <Footer />
    </div>
  );
}

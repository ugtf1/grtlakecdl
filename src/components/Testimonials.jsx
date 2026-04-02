import React from "react";
import "./Testimonials.css";

// Sample testimonials data
const testimonials = [
  {
    name: "Anonymous",
    rating: "★★★★☆",
    text: "I came in unsure about my future, but the instructors supported me every step of the way. Within weeks of graduating, I got hired and now I’m earning steady income.",
    footer: "Trusted by 50,000+ People in Michigan",
    cta: "Apply Now"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Sofia Mendez",
    rating: "★★★★★",
    text: "The training was practical and easy to follow. They didn’t just teach driving — they helped me find a real job and start providing for my family.",
    footer: "Sofia Mendez"
  },
  {
    name: "Noah Benson",
    rating: "★★★★★",
    text: "Before enrolling, I was struggling to find stable work. This academy gave me the skills, confidence, and job placement support I needed. I finally feel secure about my future.",
    footer: "Noah Benson"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-heading">Real Stories. <br></br>Real Success.</h2>
      <div className="slider">
        <div className="slider-track">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-rating">{t.rating}</div>
              <div className="testimonial-footer">{t.footer}</div>
              {t.cta && <button className="testimonial-btn">{t.cta}</button>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

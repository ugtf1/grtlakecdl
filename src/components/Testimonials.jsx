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
    name: "John Kelly",
    rating: "★★★★★",
    text: "I was skeptical at first, but this academy truly delivers. The instructors are knowledgeable and genuinely care about your success. I’m now on a stable career path thanks to them.",
    footer: "John Kelly"
  },
  {
    name: "Jacob Olabode",
    rating: "★★★★★",
    text: "Before enrolling, I was struggling to find stable work. This academy gave me the skills, confidence, and job placement support I needed. I finally feel secure about my future.",
    footer: "Jacob Olabode"
  },
  {
    name: "Kenneth Adams",
    rating: "★★★★★",
    text: "I was able to enroll quickly and the training was straightforward. The instructors were supportive and helped me every step of the way. I’m now employed and earning a steady income.",
    footer: "Kenneth Adams"
  },
  {
    name: "Rita Johnson",
    rating: "★★★★★",
    text: "I had been unemployed for months before I found this academy. The training was practical and the job placement support was incredible. I’m now working full-time and finally feel like I have a future again.",
    footer: "Rita Johnson"
  },
  {
    name: "Manuel Garcia",
    rating: "★★★★★",
    text: "I was hesitant to enroll because I didn’t have any experience, but the instructors were patient and supportive. They helped me build my skills and confidence. Now I’m employed and earning a steady income.",
    footer: "Manuel Garcia"
  },
  {
    name: "Patrick Harper",
    rating: "★★★★★",
    text: "I had been struggling to find work for months before I found this academy. The training was practical and the job placement support was amazing. I’m now employed and finally feel like I have a future again.",
    footer: "Patrick Harper"
  },
  {
    name: "Monica Lee",
    rating: "★★★★★",
    text: "Great Lakes CDL Academy changed my life. The instructors were supportive and the training was practical. I’m now employed and earning a steady income. I can’t recommend them enough.",
    footer: "Monica Lee"
  },
  {
    name: "Andrew Thompson",
    rating: "★★★★★",
    text: "Great Lakes CDL Academy gave me the skills and support I needed to turn my life around. The training was practical and the job placement support was incredible. I’m now employed and finally feel like I have a future again.",
    footer: "Andrew Thompson"
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

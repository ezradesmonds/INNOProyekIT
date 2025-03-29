"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Title";
import Features from "./components/Requirements";
import CTAButton from "./components/RegistButtons";
import ContactSection from "./components/ContactSection";
import PageLoader from "./components/PageLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const removeLoader = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);

  if (loading) {
    return <PageLoader text="" fadeOut={fadeOut} />;
  }

  return (
    <>
      <Navbar />
      <Hero />

      <section id="about" className="about-title">  
        <div className="about-title fade-in">
          <span>About Innofashion</span>
        </div>
        <p className="about-description fade-in">
          Innofashion atau yang sering disebut INNO merupakan suatu acara yang diselenggarakan oleh program studi DFT yang terdiri dari berbagai kegiatan seperti exhibition, graduation runaway, talkshow, dan workshop.
        </p>
      </section>

      <Features />

      <section className="timeline fade-in">
        <div className="timeline-container fade-in">
          <span className="date fade-in">10 Maret 2025</span>
          <div className="line-container fade-in">
            <span className="circle fade-in">o</span>
            <div className="line fade-in"></div>
            <span className="circle fade-in">o</span>
          </div>
          <span className="date fade-in">26 Maret 2025</span>
        </div>
        <div className="timeline-text fade-in">
          <span>Registration Period</span>
          <span className="extended fade-in">EXTENDED!</span>
        </div>
      </section>

      <div style={{ textAlign: "center", margin: "100px" }}>
        <CTAButton />
      </div>

      <ContactSection />
    </>
  );
}

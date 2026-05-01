import React, { useEffect } from "react";
import "../App.css";

function About() {

  /* Scroll Reveal */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="page-container">

      <div
        className="card reveal-on-scroll"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "40px",
          borderRadius: "25px",
          textAlign: "center"
        }}
      >

        <h1 style={{ marginBottom: "20px" }}>
          About BharatVerse
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          BharatVerse is a premium digital platform dedicated to showcasing,
          preserving, and celebrating India's rich historical, artistic,
          and cultural heritage.
        </p>

        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          From ancient monuments and classical dance traditions to
          traditional paintings, music, and regional cuisines —
          BharatVerse offers an immersive museum-style digital experience.
        </p>

        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          Our mission is to connect modern audiences with timeless
          Indian traditions through interactive exploration,
          virtual tours, and cultural discussions.
        </p>

      </div>

    </div>
  );
}

export default About;
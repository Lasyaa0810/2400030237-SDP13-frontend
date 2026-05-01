import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ Import API
import { API } from "../api/api";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";

function Home() {
  const navigate = useNavigate();

  const slides = [
    { image: slide1, title: "Puri Jagannadh Temple", state: "Odisha" },
    { image: slide2, title: "Pattachitra Traditional Painting", state: "Odisha" },
    { image: slide3, title: "Ganga Aarti at Varanasi", state: "Uttar Pradesh" },
    { image: slide4, title: "Kuchipudi Dance", state: "Andhra Pradesh" },
    { image: slide5, title: "Dal Baati Churma", state: "Rajasthan" },
    { image: slide6, title: "Music of Kerala", state: "Kerala" }
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Animation observer
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    cards.forEach(card => observer.observe(card));
  }, []);

  // ✅ API CALL (Step 3 added here)
  useEffect(() => {
    API.get("/api/users")   // 🔁 change endpoint if needed
      .then(data => {
        console.log("Backend response:", data);
      })
      .catch(err => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div className="page-container">

      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 10 + Math.random() * 10 + "s"
            }}
          ></span>
        ))}
      </div>

      <div
        style={{
          position: "relative",
          marginBottom: "60px",
          background: "#000",
          borderRadius: "25px",
          overflow: "hidden"
        }}
      >
        <img
          src={slides[current].image}
          alt="Slide"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
            backgroundColor: "#000"
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.65)",
            padding: "18px 40px",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            backdropFilter: "blur(10px)"
          }}
        >
          <h2 style={{ margin: 0, fontSize: "30px" }}>
            {slides[current].title}
          </h2>
          <p style={{ margin: 0, fontSize: "20px" }}>
            {slides[current].state}
          </p>
        </div>
      </div>

      <div className="hero-glass">
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Experience Bharat Like Never Before
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          Discover monuments, heritage, art, dance, music, and
          traditions of India in a royal immersive experience.
        </p>

        <div style={{ marginTop: "25px" }}>
          <button
            className="btn-primary"
            onClick={() => navigate("/explore")}
            style={{ marginRight: "15px" }}
          >
            Explore Monuments
          </button>

          <button
            className="btn-primary"
            onClick={() => navigate("/virtualtours")}
          >
            Virtual Tours
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "60px"
        }}
      >
        {[
          { title: "🏛 Explore", path: "/explore" },
          { title: "🌍 Virtual Tours", path: "/virtualtours" },
          { title: "💬 Discussions", path: "/discussions" },
          { title: "🍛 Food & Culture", path: "/foodculture" },
          { title: "🎨 Paintings", path: "/paintings" },
          { title: "💃 Dance Forms", path: "/danceforms" },
          { title: "🎵 Music", path: "/music" },
          { title: "🎉 Festivals", path: "/festivals" }
        ].map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(item.path)}
            style={{ cursor: "pointer" }}
          >
            <h3>{item.title}</h3>
            <p>Explore rich cultural heritage and traditions.</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
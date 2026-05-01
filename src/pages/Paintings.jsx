import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import madhubani from "../assets/paintings/madhubani.jpg";
import warli from "../assets/paintings/warli.jpg";
import tanjore from "../assets/paintings/tanjore.jpg";
import pattachitra from "../assets/paintings/pattachita.jpg";
import kalamkari from "../assets/paintings/kalamkari.jpg";
import phad from "../assets/paintings/phad.jpg";
import gond from "../assets/paintings/gond.jpg";
import pichwai from "../assets/paintings/pichwai.jpg";
import miniature from "../assets/paintings/miniature.jpg";
import mysore from "../assets/paintings/mysore.jpg";
import cheriyal from "../assets/paintings/cheriyal.jpg";
import saura from "../assets/paintings/saura.jpg";
import kangra from "../assets/paintings/kangra.jpg";
import kalighat from "../assets/paintings/kalighat.jpg";
import aipan from "../assets/paintings/aipan.jpg";

function Paintings() {

  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("All");

  const paintings = [
    { name: "Madhubani Painting", origin: "Bihar", image: madhubani, description: "Traditional folk art known for intricate patterns and vibrant colors." },
    { name: "Warli Painting", origin: "Maharashtra", image: warli, description: "Tribal art style using geometric shapes to depict daily life." },
    { name: "Tanjore Painting", origin: "Tamil Nadu", image: tanjore, description: "Rich paintings with gold foil work and religious themes." },
    { name: "Pattachitra", origin: "Odisha", image: pattachitra, description: "Cloth-based scroll painting with mythological narratives." },
    { name: "Kalamkari", origin: "Andhra Pradesh", image: kalamkari, description: "Hand-painted textile art using natural dyes." },
    { name: "Phad Painting", origin: "Rajasthan", image: phad, description: "Scroll painting depicting folk deities and epic stories." },
    { name: "Gond Painting", origin: "Madhya Pradesh", image: gond, description: "Tribal art using dots and lines to represent nature and animals." },
    { name: "Pichwai Painting", origin: "Rajasthan", image: pichwai, description: "Devotional paintings depicting Lord Krishna." },
    { name: "Miniature Painting", origin: "Himachal Pradesh", image: miniature, description: "Detailed small-scale paintings from royal courts." },
    { name: "Mysore Painting", origin: "Karnataka", image: mysore, description: "Elegant paintings featuring Hindu gods with muted colors." },
    { name: "Cheriyal Scroll Painting", origin: "Telangana", image: cheriyal, description: "Narrative scroll paintings illustrating local folklore." },
    { name: "Saura Painting", origin: "Odisha", image: saura, description: "Tribal art featuring symbolic human and nature figures." },
    { name: "Kangra Painting", origin: "Himachal Pradesh", image: kangra, description: "Delicate paintings inspired by love stories and mythology." },
    { name: "Kalighat Painting", origin: "West Bengal", image: kalighat, description: "19th-century painting style developed in Kolkata." },
    { name: "Aipan Art", origin: "Uttarakhand", image: aipan, description: "Ritualistic floor art created during festivals and ceremonies." }
  ];

  const filteredPaintings =
    selectedState === "All"
      ? paintings
      : paintings.filter((paint) => paint.origin === selectedState);

  const states = ["All", ...new Set(paintings.map((paint) => paint.origin))];

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredPaintings]);

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>
        Traditional Indian Paintings
      </h1>

      <p style={{ marginBottom: "25px", textAlign: "center" }}>
        Discover the rich artistic heritage of India.
      </p>

      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            padding: "12px 22px",
            borderRadius: "15px",
            fontSize: "16px",
            border: "none",
            background: "linear-gradient(135deg,#c29b87,#a97954)",
            color: "#1e423f",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px"
        }}
      >
        {filteredPaintings.map((paint, index) => (
          <div
            key={index}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/painting/${paint.name}`)}
          >
            <div style={{ overflow: "hidden", borderRadius: "18px", marginBottom: "18px" }}>
              <img
                src={paint.image}
                alt={paint.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover"
                }}
              />
            </div>

            <h2>{paint.name}</h2>
            <p><strong>Origin:</strong> {paint.origin}</p>
            <p>{paint.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Paintings;
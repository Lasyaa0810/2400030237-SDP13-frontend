import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import bharatanatyam from "../assets/dance/bharatanatyam.jpg";
import kathak from "../assets/dance/kathak.jpg";
import kathakali from "../assets/dance/kathakali.jpg";
import kuchipudi from "../assets/dance/kuchipudi.jpg";
import odissi from "../assets/dance/odissi.jpg";
import manipuri from "../assets/dance/manipuri.jpg";
import mohiniyattam from "../assets/dance/mohiniyattam.jpg";
import sattriya from "../assets/dance/sattriya.jpg";
import chhau from "../assets/dance/chhau.jpg";
import ghoomar from "../assets/dance/ghoomar.jpg";
import bhangra from "../assets/dance/bhangra.jpg";
import lavani from "../assets/dance/lavani.jpg";
import yakshagana from "../assets/dance/yakshagana.jpg";
import garba from "../assets/dance/garba.jpg";
import cheraw from "../assets/dance/cheraw.jpg";

function DanceForms() {

  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("All");

  const dances = [
    { name: "Bharatanatyam", state: "Tamil Nadu", image: bharatanatyam },
    { name: "Kathak", state: "Uttar Pradesh", image: kathak },
    { name: "Kathakali", state: "Kerala", image: kathakali },
    { name: "Kuchipudi", state: "Andhra Pradesh", image: kuchipudi },
    { name: "Odissi", state: "Odisha", image: odissi },
    { name: "Manipuri", state: "Manipur", image: manipuri },
    { name: "Mohiniyattam", state: "Kerala", image: mohiniyattam },
    { name: "Sattriya", state: "Assam", image: sattriya },
    { name: "Chhau", state: "Jharkhand", image: chhau },
    { name: "Ghoomar", state: "Rajasthan", image: ghoomar },
    { name: "Bhangra", state: "Punjab", image: bhangra },
    { name: "Lavani", state: "Maharashtra", image: lavani },
    { name: "Yakshagana", state: "Karnataka", image: yakshagana },
    { name: "Garba", state: "Gujarat", image: garba },
    { name: "Cheraw", state: "Mizoram", image: cheraw }
  ];

  const filteredDances =
    selectedState === "All"
      ? dances
      : dances.filter((dance) => dance.state === selectedState);

  const states = ["All", ...new Set(dances.map((dance) => dance.state))];

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
    return () => observer.disconnect();
  }, [filteredDances]);

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "10px" }}>
        Traditional Dance Forms of India
      </h1>

      <p style={{ marginBottom: "25px" }}>
        Explore classical and folk dance traditions across India.
      </p>

      <div style={{ marginBottom: "40px" }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            padding: "12px 20px",
            borderRadius: "15px",
            fontSize: "16px",
            border: "none",
            background: "linear-gradient(135deg,#c29b87,#a97954)",
            color: "#1e423f",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
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
        {filteredDances.map((dance, index) => (
          <div
            key={index}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/dance/${dance.name}`)}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "15px",
                marginBottom: "18px"
              }}
            >
              <img
                src={dance.image}
                alt={dance.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  transition: "transform 0.6s ease"
                }}
              />
            </div>

            <h2 style={{ marginBottom: "8px" }}>{dance.name}</h2>
            <p>
              <strong>Origin:</strong> {dance.state}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default DanceForms;
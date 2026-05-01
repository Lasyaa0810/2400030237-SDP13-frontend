import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import punjab from "../assets/food/punjab.jpg";
import tamilnadu from "../assets/food/tamilnadu.jpg";
import westbengal from "../assets/food/westbengal.jpg";
import rajasthan from "../assets/food/rajasthan.jpg";
import gujarat from "../assets/food/gujarat.jpg";
import kerala from "../assets/food/kerala.jpg";
import andhrapradesh from "../assets/food/andhrapradesh.jpg";
import karnataka from "../assets/food/karnataka.jpg";
import maharashtra from "../assets/food/maharashtra.jpg";
import uttarpradesh from "../assets/food/uttarpradesh.jpg";
import odisha from "../assets/food/odisha.jpg";
import assam from "../assets/food/assam.jpg";
import madhyapradesh from "../assets/food/madhyapradesh.jpg";
import bihar from "../assets/food/bihar.jpg";
import telangana from "../assets/food/telangana.jpg";

function FoodCulture() {

  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("All");

  const states = [
    { name: "Punjab", image: punjab, food: "Makki di Roti, Sarson da Saag, Amritsari Kulcha" },
    { name: "Tamil Nadu", image: tamilnadu, food: "Dosa, Idli, Pongal" },
    { name: "West Bengal", image: westbengal, food: "Rasgulla, Fish Curry, Sandesh" },
    { name: "Rajasthan", image: rajasthan, food: "Dal Baati Churma, Gatte ki Sabzi, Ker Sangri" },
    { name: "Gujarat", image: gujarat, food: "Dhokla, Thepla, Undhiyu" },
    { name: "Kerala", image: kerala, food: "Appam, Kerala Sadya, Puttu" },
    { name: "Andhra Pradesh", image: andhrapradesh, food: "Pulihora, Gongura Pachadi, Pesarattu" },
    { name: "Karnataka", image: karnataka, food: "Bisi Bele Bath, Mysore Pak, Ragi Mudde" },
    { name: "Maharashtra", image: maharashtra, food: "Vada Pav, Puran Poli, Misal Pav" },
    { name: "Uttar Pradesh", image: uttarpradesh, food: "Tunday Kebab, Petha, Bedai" },
    { name: "Odisha", image: odisha, food: "Pakhala Bhata, Dalma, Chhena Poda" },
    { name: "Assam", image: assam, food: "Khar, Masor Tenga, Pitha" },
    { name: "Madhya Pradesh", image: madhyapradesh, food: "Poha, Bhutte Ka Kees, Dal Bafla" },
    { name: "Bihar", image: bihar, food: "Litti Chokha, Thekua, Khaja" },
    { name: "Telangana", image: telangana, food: "Hyderabadi Biryani, Sarva Pindi, Sakinalu" }
  ];

  const filteredStates =
    selectedState === "All"
      ? states
      : states.filter((state) => state.name === selectedState);

  /* Scroll Reveal Animation */
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredStates]);

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "10px", textAlign: "center" }}>
        Famous Food of Indian States
      </h1>

      <p style={{ marginBottom: "25px", textAlign: "center" }}>
        Explore traditional dishes from different states of India.
      </p>

      {/* STATE FILTER */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            padding: "12px 18px",
            borderRadius: "12px",
            fontSize: "16px",
            border: "none",
            background: "linear-gradient(90deg,#c29b87,#a97954)",
            color: "#1e423f",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          <option value="All">All States</option>
          {states.map((state, index) => (
            <option key={index} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}
      >
        {filteredStates.map((state, index) => (
          <div
            key={index}
            className="card"
            style={{
              cursor: "pointer",
              padding: "20px",
              borderRadius: "20px",
              background: "#c29b87",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease"
            }}
            onClick={() => navigate(`/food/${state.name}`)}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >

            <img
              src={state.image}
              alt={state.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "15px"
              }}
            />

            <h2 style={{ marginBottom: "10px", color: "#1e423f" }}>
              {state.name}
            </h2>

            <p style={{ color: "#1e423f" }}>
              <strong>Famous Food:</strong> {state.food}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default FoodCulture;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import sankranti from "../assets/festivals/sankranti.jpg";
import pongal from "../assets/festivals/pongal.jpg";
import onam from "../assets/festivals/onam.jpg";
import durga from "../assets/festivals/durga.jpg";
import diwali from "../assets/festivals/diwali.jpg";
import bihu from "../assets/festivals/bihu.jpg";
import ganesh from "../assets/festivals/ganesh.jpg";
import navratri from "../assets/festivals/navratri.jpg";
import holi from "../assets/festivals/holi.jpg";
import ugadi from "../assets/festivals/ugadi.jpg";
import lohri from "../assets/festivals/lohri.jpg";

function Festivals() {

const navigate = useNavigate();
const [selectedState, setSelectedState] = useState("All");

const festivals = [
{ name: "Sankranti", state: "Andhra Pradesh", image: sankranti },
{ name: "Pongal", state: "Tamil Nadu", image: pongal },
{ name: "Onam", state: "Kerala", image: onam },
{ name: "Durga Puja", state: "West Bengal", image: durga },
{ name: "Diwali", state: "All India", image: diwali },
{ name: "Bihu", state: "Assam", image: bihu },
{ name: "Ganesh Chaturthi", state: "Maharashtra", image: ganesh },
{ name: "Navratri", state: "Gujarat", image: navratri },
{ name: "Holi", state: "Uttar Pradesh", image: holi },
{ name: "Ugadi", state: "Karnataka", image: ugadi },
{ name: "Lohri", state: "Punjab", image: lohri }
];

const filteredFestivals =
selectedState === "All"
? festivals
: festivals.filter((fest) => fest.state === selectedState);

const states = ["All", ...new Set(festivals.map((fest) => fest.state))];

useEffect(() => {
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("reveal");
}
});
});

cards.forEach((card) => observer.observe(card));

return () => observer.disconnect();


}, [filteredFestivals]);

return ( <div className="page-container">


  <h1 style={{ marginBottom: "10px" }}>
    Festivals of India
  </h1>

  <p style={{ marginBottom: "25px" }}>
    Discover vibrant festivals celebrated across different states of India.
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
    {filteredFestivals.map((fest, index) => (
      <div
        key={index}
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/festival/${fest.name}`)}
      >
        <div
          style={{
            overflow: "hidden",
            borderRadius: "15px",
            marginBottom: "18px"
          }}
        >
          <img
            src={fest.image}
            alt={fest.name}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              transition: "transform 0.6s ease"
            }}
          />
        </div>

        <h2 style={{ marginBottom: "8px" }}>{fest.name}</h2>
        <p>
          <strong>State:</strong> {fest.state}
        </p>

      </div>
    ))}
  </div>

</div>


);
}

export default Festivals;

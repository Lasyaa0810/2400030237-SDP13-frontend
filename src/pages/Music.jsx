import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import carnatic from "../assets/music/carnatic.jpg";
import hindustani from "../assets/music/hindustani.jpg";
import bhangra_music from "../assets/music/bhangra_music.jpg";
import lavani_music from "../assets/music/lavani_music.jpg";
import baul from "../assets/music/baul.jpg";
import ghazal from "../assets/music/ghazal.jpg";
import qawwali from "../assets/music/qawwali.jpg";
import yakshagana_music from "../assets/music/yakshagana_music.jpg";
import sufi from "../assets/music/sufi.jpg";
import rajasthani_folk from "../assets/music/rajasthani_folk.jpg";
import bihu_music from "../assets/music/bihu_music.jpg";
import chakri from "../assets/music/chakri.jpg";
import thumri from "../assets/music/thumri.jpg";
import nadaswaram from "../assets/music/nadaswaram.jpg";

function Music() {

  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("All");

  const musicForms = [
    { name: "Carnatic Music", state: "Andhrapradesh", image: carnatic },
    { name: "Hindustani Classical", state: "North India", image: hindustani },
    { name: "Bhangra Music", state: "Punjab", image: bhangra_music },
    { name: "Lavani Music", state: "Maharashtra", image: lavani_music },
    { name: "Baul Songs", state: "West Bengal", image: baul },
    { name: "Ghazal", state: "Uttar Pradesh", image: ghazal },
    { name: "Qawwali", state: "Delhi", image: qawwali },
    { name: "Yakshagana Music", state: "Karnataka", image: yakshagana_music },
    { name: "Sufi Music", state: "Rajasthan", image: sufi },
    { name: "Rajasthani Folk", state: "Rajasthan", image: rajasthani_folk },
    { name: "Bihu Music", state: "Assam", image: bihu_music },
    { name: "Chakri Music", state: "Jammu & Kashmir", image: chakri },
    { name: "Thumri", state: "Uttar Pradesh", image: thumri },
    { name: "Nadaswaram", state: "Tamil Nadu", image: nadaswaram }
  ];

  const filteredMusic =
    selectedState === "All"
      ? musicForms
      : musicForms.filter((music) => music.state === selectedState);

  const states = ["All", ...new Set(musicForms.map((music) => music.state))];

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
  }, [filteredMusic]);

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "10px" }}>
        Indian Music Traditions
      </h1>

      <p style={{ marginBottom: "25px" }}>
        Explore classical and folk music traditions across India.
      </p>

      <div style={{ marginBottom: "40px" }}>
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
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(0,0,0,0.25)"
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
        {filteredMusic.map((music, index) => (
          <div
            key={index}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/music/${music.name}`)}
          >
            <div
              style={{
                overflow: "hidden",
                borderRadius: "18px",
                marginBottom: "18px"
              }}
            >
              <img
                src={music.image}
                alt={music.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  transition: "transform 0.6s ease, filter 0.6s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.filter = "brightness(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              />
            </div>

            <h2 style={{ marginBottom: "8px" }}>
              {music.name}
            </h2>

            <p>
              <strong>Origin:</strong> {music.state}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Music;
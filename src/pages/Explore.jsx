import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ API import
import { API } from "../api/api";

/* ===== IMAGE IMPORTS ===== */

// Original
import taj from "../assets/images/taj.jpg";
import qutub from "../assets/images/qutub.jpg";
import hampi from "../assets/images/hampi.jpg";
import konark from "../assets/images/konark.jpg";
import indiagate from "../assets/images/indiagate.jpg";
import nationalwar from "../assets/images/nationalwar.jpg";
import meenakshi from "../assets/images/meenakshi.jpg";
import brihadeeswara from "../assets/images/brihadeeswara.jpg";
import victoria from "../assets/images/victoria.jpg";

// New
import gateway from "../assets/images/gateway.jpg";
import ajanta from "../assets/images/ajanta.jpg";
import redfort from "../assets/images/redfort.jpg";
import mysore from "../assets/images/mysore1.jpg";
import jagannath from "../assets/images/jagannath.jpg";
import dakshineswar from "../assets/images/dakshineswar.jpg";
import kamakhya from "../assets/images/kamakhya.jpg";
import vaishnodevi from "../assets/images/vaishnodevi.jpg";
import hidimba from "../assets/images/hidimba.jpg";
import tawang from "../assets/images/tawang.jpg";
import amaravtistupa from "../assets/images/amaravatistupa.jpg";
import charminar from "../assets/images/charminar.jpg";

function Explore() {

  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

   // ✅ API DATA STATE
  const [data, setData] = useState([]);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    API.get("/api/tours")
      .then(res => {
        console.log("Tours:", res);
        setData(res);
      })
      .catch(err => console.error("API error:", err));
  }, []);


  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    marginTop: "10px"
  };

  const monuments = [
    { id: "taj", name: "Taj Mahal", state: "Uttar Pradesh", type: "Mausoleum", img: taj, short: "UNESCO World Heritage Site built by Shah Jahan." },
    { id: "qutub", name: "Qutub Minar", state: "Delhi", type: "Minaret", img: qutub, short: "73-meter tall victory tower." },
    { id: "indiagate", name: "India Gate", state: "Delhi", type: "War Memorial", img: indiagate, short: "Memorial to World War I soldiers." },
    { id: "nationalwar", name: "National War Memorial", state: "Delhi", type: "War Memorial", img: nationalwar, short: "Tribute to Indian armed forces." },
    { id: "redfort", name: "Red Fort", state: "Delhi", type: "Fort", img: redfort, short: "Historic Mughal fort in Delhi." },
    { id: "hampi", name: "Hampi", state: "Karnataka", type: "Heritage Site", img: hampi, short: "Ancient Vijayanagara capital." },
    { id: "mysore", name: "Mysore Palace", state: "Karnataka", type: "Palace", img: mysore, short: "Royal palace of Wodeyars." },
    { id: "konark", name: "Konark Sun Temple", state: "Odisha", type: "Temple", img: konark, short: "Chariot-shaped Sun Temple." },
    { id: "jagannath", name: "Jagannath Temple", state: "Odisha", type: "Temple", img: jagannath, short: "Famous Rath Yatra temple." },
    { id: "meenakshi", name: "Meenakshi Temple", state: "Tamil Nadu", type: "Temple", img: meenakshi, short: "Colorful gopuram temple." },
    { id: "brihadeeswara", name: "Brihadeeswara Temple", state: "Tamil Nadu", type: "Temple", img: brihadeeswara, short: "Granite Chola masterpiece." },
    { id: "victoria", name: "Victoria Memorial", state: "West Bengal", type: "Heritage Site", img: victoria, short: "British-era marble monument." },
    { id: "dakshineswar", name: "Dakshineswar Temple", state: "West Bengal", type: "Temple", img: dakshineswar, short: "Famous Kali temple." },
    { id: "gateway", name: "Gateway of India", state: "Maharashtra", type: "Heritage Site", img: gateway, short: "Iconic monument in Mumbai." },
    { id: "ajanta", name: "Ajanta Caves", state: "Maharashtra", type: "Heritage Site", img: ajanta, short: "Ancient Buddhist cave paintings." },
    { id: "vaishnodevi", name: "Vaishno Devi Temple", state: "Jammu & Kashmir", type: "Temple", img: vaishnodevi, short: "Sacred pilgrimage site." },
    { id: "hidimba", name: "Hidimba Devi Temple", state: "Himachal Pradesh", type: "Temple", img: hidimba, short: "Wooden temple in Manali." },
    { id: "kamakhya", name: "Kamakhya Temple", state: "Assam", type: "Temple", img: kamakhya, short: "One of 51 Shakti Peethas." },
    { id: "tawang", name: "Tawang Monastery", state: "Arunachal Pradesh", type: "Monastery", img: tawang, short: "Largest monastery in India." },
    { id: "amaravati", name: "Amaravati Stupa", state: "Andhra Pradesh", type: "Buddhist Site", img: amaravtistupa, short: "Ancient Buddhist stupa." },
    { id: "charminar", name: "Charminar", state: "Telangana", type: "Monument", img: charminar, short: "Symbol of Hyderabad." }
  ];

  const filteredMonuments = monuments.filter(
    (m) =>
      (selectedState === "All" || m.state === selectedState) &&
      (selectedType === "All" || m.type === selectedType)
  );

  /* Scroll Reveal */
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

  return (
    <div>

      <h1 style={{ marginBottom: "10px" }}>Explore Monuments</h1>
      <p style={{ marginBottom: "25px" }}>
        Filter by state/type and open a monument for details.
      </p>

      {/* FILTERS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "40px",
        flexWrap: "wrap"
      }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{ padding: "12px", borderRadius: "12px" }}
        >
          <option value="All">All States</option>
          {[...new Set(monuments.map(m => m.state))].map((state, index) => (
            <option key={index}>{state}</option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ padding: "12px", borderRadius: "12px" }}
        >
          <option value="All">All Types</option>
          {[...new Set(monuments.map(m => m.type))].map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "35px"
      }}>
        {filteredMonuments.map((monument) => (
          <div className="card" key={monument.id}>
            <h2>{monument.name}</h2>
            <p>{monument.state} • {monument.type}</p>

            <img src={monument.img} alt={monument.name} style={imageStyle} />

            <p style={{ marginTop: "15px" }}>{monument.short}</p>

            <button
              className="btn-primary"
              onClick={() => navigate(`/monument/${monument.id}`)}
              style={{ marginTop: "15px" }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Explore;
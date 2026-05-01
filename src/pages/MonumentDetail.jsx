import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { monuments } from "../data/monumentsData";
import "../App.css";

function MonumentDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const monument = monuments.find((m) => m.id === id);

  if (!monument) {
    return (
      <div className="page-container">
        <h1>Monument Not Found</h1>
      </div>
    );
  }

  const related = monuments.filter(
    (m) => m.state === monument.state && m.id !== monument.id
  );

  return (
    <div className="page-container">

      <h1 style={{ fontSize: "44px", marginBottom: "40px" }}>
        {monument.name}
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "50px",
        marginBottom: "70px"
      }}>

        <div>
          <p><strong>Location:</strong> {monument.location}</p>
          <p><strong>Built By:</strong> {monument.builtBy}</p>
          <p><strong>Year:</strong> {monument.year}</p>

          {monument.description.map((para, index) => (
            <p key={index} style={{ lineHeight: "1.9", marginTop: "15px" }}>
              {para}
            </p>
          ))}
        </div>

        <div style={{ overflow: "hidden", borderRadius: "20px" }}>
  <img
    src={monument.image}
    alt={monument.name}
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "500px",
      objectFit: "contain",
      borderRadius: "20px",
      transition: "transform 0.5s ease"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />
</div>

      </div>

      {/* Gallery */}
      <h2 style={{ marginBottom: "25px" }}>Image Gallery</h2>

      <div style={premiumGrid}>
        {monument.gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="gallery"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "20px"
            }}
          />
        ))}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <>
          <h2 style={{ marginTop: "60px", marginBottom: "30px" }}>
            Related Monuments
          </h2>

          <div style={premiumGrid}>
            {related.map((r) => (
              <div
                key={r.id}
                className="card reveal-on-scroll"
                style={premiumCard}
                onClick={() => navigate(`/monument/${r.id}`)}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "15px"
                  }}
                />
                <h4 style={{ marginTop: "15px" }}>{r.name}</h4>
                <p>{r.state}</p>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px"
};

const premiumCard = {
  padding: "25px",
  borderRadius: "25px",
  cursor: "pointer"
};

export default MonumentDetail;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ContentCreatorDashboard() {

  const navigate = useNavigate();

  /* Safe Scroll Reveal */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => {
      el.classList.add("reveal");
    });
  }, []);

  return (
    <div className="page-container">

      <h1
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >
        Content Creator Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >

        <div
          className="card reveal-on-scroll"
          style={{
            width: "550px",
            padding: "50px",
            borderRadius: "30px",
            textAlign: "center",
            cursor: "pointer",
            transition: "0.3s ease"
          }}
          onClick={() => navigate("/creator-content")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3 style={{ marginBottom: "20px" }}>
            Add / Manage Monuments
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            Create, edit, update or delete monuments you visited.
          </p>

          <button
            className="btn-primary"
            style={{ marginTop: "30px" }}
          >
            Open Studio
          </button>

        </div>

      </div>

    </div>
  );
}

export default ContentCreatorDashboard;
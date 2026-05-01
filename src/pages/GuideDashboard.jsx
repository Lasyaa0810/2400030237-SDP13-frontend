import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function GuideDashboard() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "42px"
        }}
      >
        Tour Guide Command Center
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "18px",
          opacity: "0.8"
        }}
      >
        Manage your tours, sessions, resources and professional profile.
      </p>

      {/* ✅ CUSTOM GRID */}
      <div className="guide-grid">

        {/* 1 */}
        <div
          className="card"
          style={{ cursor: "pointer", padding: "40px" }}
          onClick={() => navigate("/guide-insights")}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Manage Tour Insights
          </h3>
          <p>
            Add detailed explanations for monuments and virtual tours.
          </p>
        </div>

        {/* 2 */}
        <div
          className="card"
          style={{ cursor: "pointer", padding: "40px" }}
          onClick={() => navigate("/guide-answer")}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Answer Cultural Questions
          </h3>
          <p>
            Provide official guide responses to visitor discussions.
          </p>
        </div>

        {/* 3 */}
        <div
          className="card"
          style={{ cursor: "pointer", padding: "40px" }}
          onClick={() => navigate("/guide-sessions")}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Schedule Guided Sessions
          </h3>
          <p>
            Create and manage live or virtual guided sessions.
          </p>
        </div>

        {/* 4 */}
        <div
          className="card"
          style={{ cursor: "pointer", padding: "40px" }}
          onClick={() => navigate("/guide-resources")}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Upload Educational Resources
          </h3>
          <p>
            Share PDFs, research materials and heritage references.
          </p>
        </div>

        {/* 5 */}
        <div
          className="card"
          style={{ cursor: "pointer", padding: "40px" }}
          onClick={() => navigate("/guide-profile")}
        >
          <h3 style={{ marginBottom: "15px" }}>
            Manage Guide Profile
          </h3>
          <p>
            Update your professional bio, expertise and experience.
          </p>
        </div>

      </div>

    </div>
  );
}

export default GuideDashboard;
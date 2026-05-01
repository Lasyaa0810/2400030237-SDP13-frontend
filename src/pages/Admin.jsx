import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ API import
import { API } from "../api/api";

function Admin() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    users: 0,
    contents: 0,
    discussions: 0
  });

  const [users, setUsers] = useState([]);

  // ✅ FETCH STATS (FIXED)
  const fetchStats = async () => {
    try {
      const data = await API.get("/api/admin/stats");
      setStats(data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  // ✅ FETCH USERS (FIXED)
  useEffect(() => {
    API.get("/api/users")
      .then(data => {
        console.log("Users:", data);
        setUsers(data); // ✅ FIXED
      })
      .catch(err => console.error(err));
  }, []);

  // ✅ LOAD STATS
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="page-container">

      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Admin Control Center
      </h1>

      {/* STATS */}
      <div style={premiumGrid}>
        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Cultural Content" value={stats.contents} />
        <StatCard title="Total Discussions" value={stats.discussions} />
      </div>

      {/* ACTIONS */}
      <div style={{ ...premiumGrid, marginTop: "60px" }}>

        <ActionCard
          title="Manage Users"
          desc="View, edit and remove registered users."
          onClick={() => navigate("/admin/users")}
        />

        <ActionCard
          title="Manage Cultural Content"
          desc="Update monuments, art, food and music content."
          onClick={() => navigate("/admin/content")}
        />

        <ActionCard
          title="Moderate Discussions"
          desc="Review and manage user discussions."
          onClick={() => navigate("/admin/discussions")}
        />

      </div>

    </div>
  );
}

/* COMPONENTS */

function StatCard({ title, value }) {
  return (
    <div className="card" style={premiumCard}>
      <h3>{title}</h3>
      <p style={{ fontSize: "40px", marginTop: "20px" }}>{value}</p>
    </div>
  );
}

function ActionCard({ title, desc, onClick }) {
  return (
    <div
      className="card"
      style={{ ...premiumCard, cursor: "pointer" }}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: "15px" }}>{desc}</p>
    </div>
  );
}

/* STYLES */

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px"
};

const premiumCard = {
  padding: "40px",
  borderRadius: "25px",
  textAlign: "center"
};

export default Admin;
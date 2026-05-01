import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Cultural Enthusiast");

  // ✅ API BASE URL (IMPORTANT)
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("reveal");
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  // ✅ CLEAN REGISTER FUNCTION
  const handleRegister = async () => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role
        })
      });

      const text = await res.text();

      // ✅ USE HTTP STATUS (BEST PRACTICE)
      if (!res.ok) {
        alert(text || "Registration failed");
        return;
      }

      alert("Account created successfully!");
      navigate("/login");

    } catch (err) {
      console.log("ERROR:", err);
      alert("Server not reachable");
    }
  };

  return (
    <div className="page-container">
      <div
        className="card reveal-on-scroll"
        style={{
          maxWidth: "600px",
          margin: "80px auto",
          padding: "50px",
          borderRadius: "30px"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={premiumInput}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={premiumInput}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={premiumInput}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={premiumInput}
        >
          <option>Cultural Enthusiast</option>
          <option>Admin</option>
          <option>Content Creator</option>
          <option>Tour Guide</option>
        </select>

        <button
          className="btn-primary"
          onClick={handleRegister}
          style={{ width: "100%" }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

const premiumInput = {
  width: "100%",
  padding: "16px",
  marginBottom: "25px",
  borderRadius: "18px",
  border: "1px solid #c29b87",
  fontSize: "16px",
  background: "rgba(255,255,255,0.7)"
};

export default Register;
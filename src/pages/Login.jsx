import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ IMPORT API
import { API } from "../api/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Cultural Enthusiast");

  const [showReset, setShowReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  // ✅ UPDATED LOGIN USING API.JS
  const handleLogin = async () => {

    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role
        })
      });

      const text = await res.text();

      if (res.status === 404) {
        alert(text);
        return;
      }

      if (res.status === 401) {
        alert("Incorrect password");
        setShowReset(true);
        return;
      }

      if (res.status === 400) {
        alert(text);
        return;
      }

      if (res.status === 500) {
        alert(text || "Server error");
        return;
      }

      if (!res.ok) {
        alert("Login failed");
        return;
      }

      const user = JSON.parse(text);

      // ✅ STORE USER DATA
      localStorage.setItem("email", user.email);
      localStorage.setItem("role", user.role);

      window.dispatchEvent(new Event("storage"));

      // ✅ ROLE BASED NAVIGATION
      if (user.role === "Admin") {
        navigate("/admin");
      } else if (user.role === "Content Creator") {
        navigate("/creator");
      } else if (user.role === "Tour Guide") {
        navigate("/guide");
      } else {
        navigate("/profile");
      }

    } catch (err) {
      console.log("Login error:", err);
      alert("Server not reachable");
    }
  };

  // ✅ RESET PASSWORD UPDATED
  const handleResetPassword = async () => {

    if (!email || !newPassword) {
      alert("Enter email and new password");
      return;
    }

    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password: newPassword
        })
      });

      const message = await res.text();
      alert(message);

      setShowReset(false);
      setNewPassword("");

    } catch (err) {
      console.log("Reset error:", err);
      alert("Error resetting password");
    }
  };

  return (
    <div className="page-container">

      <div className="card" style={{
        maxWidth: "600px",
        margin: "80px auto",
        padding: "50px",
        borderRadius: "30px"
      }}>

        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Welcome Back
        </h1>

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
          onClick={handleLogin}
          style={{ width: "100%" }}
        >
          Login
        </button>

        {showReset && (
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ textAlign: "center" }}>Reset Password</h3>

            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={premiumInput}
            />

            <button
              className="btn-primary"
              onClick={handleResetPassword}
              style={{ width: "100%" }}
            >
              Update Password
            </button>
          </div>
        )}

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
  background: "rgba(255,255,255,0.8)"
};

export default Login;
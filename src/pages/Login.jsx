import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ USE API
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

  // ✅ LOGIN USING API
  const handleLogin = async () => {

    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {

      const res = await API.post("/api/login", {
        email,
        password,
        role
      });

      // ⚠️ If your API wrapper returns JSON directly:
      const user = res;

      // STORE USER
      localStorage.setItem("email", user.email);
      localStorage.setItem("role", user.role);

      window.dispatchEvent(new Event("storage"));

      // ROLE NAVIGATION
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
      alert("Login failed or server not reachable");
    }
  };

  // ✅ RESET PASSWORD USING API
  const handleResetPassword = async () => {

    if (!email || !newPassword) {
      alert("Enter email and new password");
      return;
    }

    try {

      await API.post("/api/reset-password", {
        email,
        password: newPassword
      });

      alert("Password updated successfully");

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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Profile() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      navigate("/login");
      return;
    }

    fetch(`${API_URL}/api/users`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then(data => {

        const matchedUser = data.find(
          u => u.email === email
        );

        if (matchedUser) {
          setUser(matchedUser);
        } else {
          console.log("User not found");
          setUser(null);
        }

        setLoading(false);
      })
      .catch(err => {
        console.log("ERROR:", err);
        setLoading(false);
      });

  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  if (loading) {
    return (
      <div className="page-container">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Loading Profile...
        </h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="page-container">
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          User not found
        </h1>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            className="btn-primary"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">

      <div
        className="card reveal-on-scroll"
        style={{
          width: "700px",
          margin: "80px auto",
          padding: "60px",
          borderRadius: "30px",
          textAlign: "center"
        }}
      >

        <div style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#a97954,#532c2e)",
          color: "white",
          fontSize: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 30px"
        }}>
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <h2>Welcome, {user.name || "User"}</h2>

        <p style={{ marginTop: "20px" }}>
          <strong>Name:</strong> {user.name || "Not Provided"}
        </p>

        <p style={{ marginTop: "10px" }}>
          <strong>Email:</strong> {user.email}
        </p>

        <div style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 25px",
          borderRadius: "30px",
          background: "#532c2e",
          color: "white",
          fontWeight: "600"
        }}>
          {user.role}
        </div>

        {user.role && user.role.toLowerCase().includes("cultural") && (
          <div style={{ marginTop: "50px" }}>

            <h3 style={{ marginBottom: "20px" }}>
              Your Cultural Dashboard
            </h3>

            <div style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px"
            }}>

              <button className="btn-primary" onClick={() => navigate("/my-journey")}>
                My Journey
              </button>

              <button className="btn-primary" onClick={() => navigate("/favorites")}>
                Favorites
              </button>

              <button className="btn-primary" onClick={() => navigate("/wishlist")}>
                Wishlist
              </button>

              <button className="btn-primary" onClick={() => navigate("/achievements")}>
                Achievements
              </button>

            </div>

          </div>
        )}

        <div style={{ marginTop: "50px" }}>

          <button
            className="btn-primary"
            onClick={() => navigate("/explore")}
          >
            Explore More
          </button>

          <button
            className="btn-primary"
            style={{ marginLeft: "20px" }}
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;
import React, { useEffect, useState } from "react";
import "../App.css";

function Achievements() {

  const [stats, setStats] = useState({
    visits: 0,
    favorites: 0,
    wishlist: 0
  });

  const email = localStorage.getItem("email");

  // ✅ API BASE URL (works for both local + Railway)
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  useEffect(() => {

    // ❗ safety check
    if (!email) {
      console.log("No email found in localStorage");
      return;
    }

    fetch(`${API_URL}/api/userdata/${email}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        return res.json();
      })
      .then(data => {

        console.log("USER DATA:", data); // 🔍 debug

        setStats({
          visits: data.filter(d => d.place).length,
          favorites: data.filter(d => d.favoritePlace).length,
          wishlist: data.filter(d => d.wishlist).length
        });

      })
      .catch(err => {
        console.log("ERROR:", err);
      });

  }, [email]);

  return (
    <div className="page-container">
      <h1>My Cultural Achievements</h1>

      <div className="cards-container">

        <div className="card">
          <h3>🏛 Explorer</h3>
          <p>{stats.visits} Places</p>
        </div>

        <div className="card">
          <h3>❤️ Heritage Lover</h3>
          <p>{stats.favorites} Favorites</p>
        </div>

        <div className="card">
          <h3>🌍 Dream Traveler</h3>
          <p>{stats.wishlist} Wishlist</p>
        </div>

      </div>
    </div>
  );
}

export default Achievements;
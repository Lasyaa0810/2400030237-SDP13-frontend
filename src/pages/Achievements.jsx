import React, { useEffect, useState } from "react";
import "../App.css";

function Achievements() {

  const [stats, setStats] = useState({
    visits: 0,
    favorites: 0,
    wishlist: 0
  });

  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch(`http://localhost:8080/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {

        setStats({
          visits: data.filter(d => d.place).length,
          favorites: data.filter(d => d.favoritePlace).length,
          wishlist: data.filter(d => d.wishlist).length
        });

      });
  }, []);

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
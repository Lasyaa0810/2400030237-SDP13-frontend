import React, { useState, useEffect } from "react";
import "../App.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);
  const [item, setItem] = useState("");

  const email = localStorage.getItem("email");

  // LOAD DATA
  const loadData = () => {
    fetch(`http://localhost:8080/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(d => d.wishlist);
        setWishlist(filtered);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // ADD
  const addItem = async () => {
    if (!item) return;

    await fetch("http://localhost:8080/api/userdata/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        wishlist: item
      })
    });

    setItem("");
    loadData();
  };

  // DELETE
  const deleteItem = async (id) => {

    const confirmDelete = window.confirm("Delete this item?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:8080/api/userdata/wishlist/${id}`, {
      method: "DELETE"
    });

    setWishlist(wishlist.filter(w => w.id !== id));
  };

  return (
    <div className="page-container">

      <h1>My Cultural Wishlist</h1>

      {/* FORM */}
      <div className="card">
        <input
          placeholder="Add Place"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button className="btn-primary" onClick={addItem}>
          Add
        </button>
      </div>

      {/* GRID */}
      <div className="wishlist-grid">
        {wishlist.map((w) => (
          <div key={w.id} className="wishlist-card">

            <h3>{w.wishlist}</h3>

            <div className="btn-group">
              <button
                className="btn-primary"
                onClick={() => deleteItem(w.id)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Wishlist;
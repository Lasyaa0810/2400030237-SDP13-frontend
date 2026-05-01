import React, { useState, useEffect } from "react";
import "../App.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);
  const [item, setItem] = useState("");

  const email = localStorage.getItem("email");

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  // ================= LOAD =================
  const loadData = () => {
    fetch(`${API_URL}/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(d => d.wishlist);
        setWishlist(filtered);
      })
      .catch(err => console.log("Load Error:", err));
  };

  useEffect(() => {
    if (email) loadData();
  }, [email]);

  // ================= ADD =================
  const addItem = async () => {
    if (!item) return;

    try {
      await fetch(`${API_URL}/api/userdata/wishlist`, {
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

    } catch (err) {
      console.log("Add Error:", err);
    }
  };

  // ================= DELETE =================
  const deleteItem = async (id) => {

    const confirmDelete = window.confirm("Delete this item?");
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/api/userdata/wishlist/${id}`, {
        method: "DELETE"
      });

      setWishlist(wishlist.filter(w => w.id !== id));

    } catch (err) {
      console.log("Delete Error:", err);
    }
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
        {wishlist.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No wishlist items yet
          </p>
        ) : (
          wishlist.map((w) => (
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
          ))
        )}
      </div>

    </div>
  );
}

export default Wishlist;
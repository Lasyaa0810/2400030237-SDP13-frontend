import React, { useState, useEffect } from "react";
import "../App.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const email = localStorage.getItem("email");

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  // LOAD DATA
  const loadData = () => {
    fetch(`${API_URL}/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(d => d.favoritePlace);
        setFavorites(filtered);
      })
      .catch(err => console.log("Load Error:", err));
  };

  useEffect(() => {
    if (email) loadData();
  }, [email]);

  // ADD / UPDATE
  const handleSubmit = async () => {

    if (!place || (!image && !editId)) {
      alert("Enter place and image");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("favoritePlace", place);

    if (image) {
      formData.append("image", image);
    }

    try {

      const url = editId
        ? `${API_URL}/api/userdata/update/${editId}`
        : `${API_URL}/api/userdata/save`;

      const method = editId ? "PUT" : "POST";

      await fetch(url, {
        method: method,
        body: formData
      });

      loadData();
      setPlace("");
      setImage(null);
      setEditId(null);

    } catch (err) {
      console.log("Submit Error:", err);
      alert("Error");
    }
  };

  // DELETE
  const deleteFavorite = async (id) => {
    try {
      await fetch(`${API_URL}/api/userdata/delete/${id}`, {
        method: "DELETE"
      });

      setFavorites(favorites.filter(f => f.id !== id));
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  // EDIT
  const editFavorite = (f) => {
    setPlace(f.favoritePlace);
    setEditId(f.id);
    setImage(null);
  };

  return (
    <div className="page-container">

      <h1>My Favorites</h1>

      {/* FORM */}
      <div className="card">

        <input
          placeholder="Place Name"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          {editId ? "Update Favorite" : "Add Favorite"}
        </button>

      </div>

      {/* GRID */}
      <div className="favorites-grid">
        {favorites.map((f) => (
          <div key={f.id} className="favorite-card">

            <div className="image-container">
              <img
                src={f.favoriteImage}
                alt={f.favoritePlace}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
            </div>

            <h3>{f.favoritePlace}</h3>

            <div className="btn-group">
              <button
                className="btn-primary"
                onClick={() => editFavorite(f)}
              >
                Edit
              </button>

              <button
                className="btn-primary"
                onClick={() => deleteFavorite(f.id)}
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

export default Favorites;
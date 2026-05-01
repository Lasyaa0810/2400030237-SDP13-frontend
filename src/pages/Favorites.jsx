import React, { useState, useEffect } from "react";
import "../App.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  const email = localStorage.getItem("email");

  // LOAD DATA
  const loadData = () => {
    fetch(`http://localhost:8080/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(d => d.favoritePlace);
        setFavorites(filtered);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

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
        ? `http://localhost:8080/api/userdata/update/${editId}`
        : "http://localhost:8080/api/userdata/save";

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
      console.log(err);
      alert("Error");
    }
  };

  // DELETE
  const deleteFavorite = async (id) => {
    await fetch(`http://localhost:8080/api/userdata/delete/${id}`, {
      method: "DELETE"
    });

    setFavorites(favorites.filter(f => f.id !== id));
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

      {/* ✅ GRID DISPLAY FIXED */}
      <div className="favorites-grid">
        {favorites.map((f) => (
          <div key={f.id} className="favorite-card">

            {/* IMAGE */}
            <div className="image-container">
              <img
                src={f.favoriteImage}
                alt={f.favoritePlace}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
            </div>

            {/* TITLE */}
            <h3>{f.favoritePlace}</h3>

            {/* ✅ BUTTONS FIXED */}
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
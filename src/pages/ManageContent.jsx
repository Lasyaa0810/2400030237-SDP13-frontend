import React, { useState, useEffect } from "react";
import "../App.css";

function ManageContent() {

  const [contents, setContents] = useState([]);

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  // ================= FETCH =================
  const fetchContents = async () => {
    try {
      const res = await fetch(`${API_URL}/content`);
      const data = await res.json();
      setContents(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  // ================= DELETE =================
  const deleteContent = async (id) => {
    try {
      await fetch(`${API_URL}/content/${id}`, {
        method: "DELETE"
      });

      fetchContents();

    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  return (
    <div className="page-container">

      <h1>Manage Cultural Content</h1>

      {/* DISPLAY */}
      <div className="grid">

        {contents.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No content available
          </p>
        ) : (
          contents.map(item => {

            const images = item.image ? item.image.split(",") : [];

            return (
              <div key={item.id} className="card">

                <h3>{item.title}</h3>

                <p><b>State:</b> {item.state}</p>
                <p><b>Category:</b> {item.category}</p>
                <p><b>Rating:</b> {item.rating}</p>

                <div className={`card-images count-${images.length}`}>
                  {images.map((img, i) => (
                    <img key={i} src={img} alt="" />
                  ))}
                </div>

                <p>{item.description}</p>

                <button
                  className="btn-delete"
                  onClick={() => deleteContent(item.id)}
                >
                  Delete
                </button>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
}

export default ManageContent;
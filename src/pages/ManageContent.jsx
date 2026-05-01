import React, { useState, useEffect } from "react";
import "../App.css";

function ManageContent() {

  const [contents, setContents] = useState([]);

  // ✅ FETCH SAME DATA AS CREATOR
  const fetchContents = async () => {
    try {
      const res = await fetch("http://localhost:8080/content");
      const data = await res.json();
      setContents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  // ✅ DELETE (ADMIN CONTROL)
  const deleteContent = async (id) => {
    await fetch(`http://localhost:8080/content/${id}`, {
      method: "DELETE"
    });

    fetchContents();
  };

  return (
    <div className="page-container">

      <h1>Manage Cultural Content</h1>

      {/* 🔥 DISPLAY SAME DATA */}
      <div className="grid">

        {contents.length === 0 ? (
          <p style={{ textAlign: "center" }}>No content available</p>
        ) : (
          contents.map(item => {

            const images = item.image ? item.image.split(",") : [];

            return (
              <div key={item.id} className="card">

                <h3>{item.title}</h3>

                <p><b>State:</b> {item.state}</p>
                <p><b>Category:</b> {item.category}</p>
                <p><b>Rating:</b> {item.rating}</p>

                {/* 🔥 SAME IMAGE GRID */}
                <div className={`card-images count-${images.length}`}>
                  {images.map((img, i) => (
                    <img key={i} src={img} alt="" />
                  ))}
                </div>

                <p>{item.description}</p>

                {/* 🔥 ADMIN CONTROL */}
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
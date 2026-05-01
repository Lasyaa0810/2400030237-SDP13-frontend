import React, { useState, useEffect } from "react";
import "../App.css";

function MyJourney() {

  const [visits, setVisits] = useState([]);
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState("");
  const [note, setNote] = useState("");
  const [editId, setEditId] = useState(null);

  const email = localStorage.getItem("email");

  // ✅ LOAD DATA (FIXED)
  const loadData = () => {
    if (!email) return;

    fetch(`http://localhost:8080/api/userdata/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);

        // 🔥 FIX: remove empty rows
        const filtered = data.filter(d => d.place);
        setVisits(filtered);
      })
      .catch(err => console.log("LOAD ERROR:", err));
  };

  useEffect(() => {
    loadData();
  }, []);

  // ✅ ADD / UPDATE (FIXED API)
  const handleSubmit = async () => {

    if (!place) {
      alert("Enter place");
      return;
    }

    const data = { email, place, rating, note };

    try {

      if (editId) {
        // (optional update – keep as is or ignore)
        await fetch(`http://localhost:8080/api/userdata/update/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

      } else {
        // 🔥 FIX: use journey API (NOT save)
        await fetch("http://localhost:8080/api/userdata/journey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      }

      loadData();

      setPlace("");
      setRating("");
      setNote("");
      setEditId(null);

    } catch (err) {
      console.log("ERROR:", err);
      alert("Error saving data");
    }
  };

  // ❌ DELETE
  const deleteVisit = async (id) => {

    try {
      await fetch(`http://localhost:8080/api/userdata/delete/${id}`, {
        method: "DELETE"
      });

      setVisits(visits.filter(v => v.id !== id));

    } catch (err) {
      console.log("DELETE ERROR:", err);
    }
  };

  // ✏️ EDIT
  const editVisit = (v) => {
    setPlace(v.place);
    setRating(v.rating);
    setNote(v.note);
    setEditId(v.id);
  };

  return (
    <div className="page-container">

      <h1>My Cultural Journey</h1>

      {/* FORM */}
      <div className="card">

        <input
          placeholder="Place Visited"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <input
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <textarea
          placeholder="Personal Notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button className="btn-primary" onClick={handleSubmit}>
          {editId ? "Update Visit" : "Add Visit"}
        </button>

      </div>

      {/* DISPLAY TABLE */}
      {visits.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No visits added yet
        </p>
      ) : (
        <table style={{
          width: "100%",
          marginTop: "30px",
          borderCollapse: "collapse",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          overflow: "hidden"
        }}>

          <thead>
            <tr style={{ background: "#532c2e", color: "white" }}>
              <th style={thStyle}>Place</th>
              <th style={thStyle}>Rating</th>
              <th style={thStyle}>Notes</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {visits.map((v) => (
              <tr key={v.id} style={{ textAlign: "center" }}>

                <td style={tdStyle}>{v.place}</td>
                <td style={tdStyle}>{v.rating}⭐</td>
                <td style={tdStyle}>{v.note}</td>

                <td style={tdStyle}>
                  <button
                    className="btn-primary"
                    onClick={() => editVisit(v)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-primary"
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteVisit(v.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

// ✅ STYLES
const thStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};

export default MyJourney;
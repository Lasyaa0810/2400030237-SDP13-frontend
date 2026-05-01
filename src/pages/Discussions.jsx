import React, { useState, useEffect } from "react";
import "../App.css";

// ✅ API import
import { API } from "../api/api";

function Discussions() {

  const [category, setCategory] = useState("Monuments");
  const [site, setSite] = useState("Taj Mahal");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Backend + fallback state
  const [posts, setPosts] = useState([]);

  /* Category Data */
  const categoryOptions = {
    Monuments: [
      "Taj Mahal",
      "Qutub Minar",
      "Hampi",
      "Konark Sun Temple",
      "India Gate"
    ],
    "Dance Forms": [
      "Bharatanatyam",
      "Kathak",
      "Kathakali",
      "Kuchipudi",
      "Odissi"
    ],
    Music: [
      "Carnatic Music",
      "Hindustani Classical",
      "Bhangra Music",
      "Ghazal",
      "Sufi Music"
    ],
    Paintings: [
      "Madhubani",
      "Warli",
      "Tanjore",
      "Pattachitra",
      "Gond"
    ],
    "Food Culture": [
      "Punjab Cuisine",
      "Tamil Nadu Cuisine",
      "Rajasthan Cuisine",
      "Kerala Cuisine",
      "Bengal Cuisine"
    ]
  };

  // ✅ LOAD FROM BACKEND
  useEffect(() => {
    API.get("/api/discussions")
      .then(res => {
        console.log("Discussions:", res);
        setPosts(res);
      })
      .catch(err => {
        console.error("API error:", err);

        // fallback to localStorage
        const stored = JSON.parse(localStorage.getItem("discussions")) || [];
        setPosts(stored);
      });
  }, []);

  /* Scroll Reveal */
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    cards.forEach(card => observer.observe(card));
  }, [posts]);

  /* Update site when category changes */
  useEffect(() => {
    setSite(categoryOptions[category][0]);
  }, [category]);

  // ✅ ADD POST (BACKEND + FALLBACK)
  const addPost = async () => {
    if (!title || !message) return;

    const newPost = {
      category,
      site,
      title,
      message
    };

    try {
      // ✅ send to backend
      await API.post("/api/discussions", newPost);

      // reload from backend
      const updated = await API.get("/api/discussions");
      setPosts(updated);

    } catch (err) {
      console.error("Post error:", err);

      // fallback localStorage
      const fallbackPost = { ...newPost, id: Date.now() };
      const updated = [fallbackPost, ...posts];

      setPosts(updated);
      localStorage.setItem("discussions", JSON.stringify(updated));
    }

    setTitle("");
    setMessage("");
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "15px" }}>
        Cultural Discussions
      </h1>

      {/* Form */}
      <div
        className="card"
        style={{
          maxWidth: "750px",
          margin: "30px auto",
          padding: "30px",
          borderRadius: "20px"
        }}
      >

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg,#c29b87,#a97954)",
            color: "#1e423f",
            fontWeight: "600"
          }}
        >
          {Object.keys(categoryOptions).map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={site}
          onChange={(e) => setSite(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "none",
            background: "#f6f2ea"
          }}
        >
          {categoryOptions[category].map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #c29b87"
          }}
        />

        <textarea
          placeholder="Write your discussion..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #c29b87"
          }}
        />

        <button className="btn-primary" onClick={addPost}>
          Post Discussion
        </button>
      </div>

      {/* Posts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        {posts.length === 0 && (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No discussions yet.
          </p>
        )}

        {posts.map((post, index) => (
          <div key={post.id || index} className="card">
            <h3>{post.title}</h3>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Related To:</strong> {post.site}</p>
            <p>{post.message}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Discussions;
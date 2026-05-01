import React, { useState, useEffect } from "react";
import "../App.css";

function ManageDiscussions() {

  const [posts, setPosts] = useState([]);

  // ✅ FETCH FROM BACKEND
  const fetchDiscussions = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/discussions");
      const data = await res.json();
      console.log("DATA:", data);
      setPosts(data);
    } catch (err) {
      console.error("Error fetching discussions:", err);
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  // ✅ DELETE POST
  const deletePost = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/discussions/${id}`, {
        method: "DELETE"
      });

      fetchDiscussions();

    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  // ✅ TOGGLE RESOLVED STATUS
  const toggleResolved = async (post) => {
    try {
      const updatedPost = {
        ...post,
        resolved: !post.resolved
      };

      await fetch(`http://localhost:8080/api/discussions/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
      });

      fetchDiscussions();

    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "40px" }}>
        Moderate Discussions
      </h1>

      <div style={premiumGrid}>

        {posts.length === 0 ? (
          <p>No discussions found</p>
        ) : (
          posts.map(post => (
            <div
              key={post.id}
              className="card"
              style={premiumCard}
            >

              <h3>{post.title}</h3>

              <p><strong>Category:</strong> {post.category || "N/A"}</p>
              <p><strong>Related:</strong> {post.site || "N/A"}</p>
              <p>{post.message}</p>

              <p style={{ marginTop: "10px" }}>
                <strong>Status:</strong>{" "}
                <span style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: post.resolved ? "#1e423f" : "#a97954",
                  color: "white"
                }}>
                  {post.resolved ? "Resolved" : "Active"}
                </span>
              </p>

              <div style={{ marginTop: "20px" }}>
                <button
                  className="btn-primary"
                  style={{ marginRight: "15px" }}
                  onClick={() => toggleResolved(post)}
                >
                  Toggle Status
                </button>

                <button
                  className="btn-primary"
                  onClick={() => deletePost(post.id)}
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

/* STYLES */

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "35px"
};

const premiumCard = {
  padding: "35px",
  borderRadius: "25px"
};

export default ManageDiscussions;
import React, { useEffect, useState } from "react";
import "../App.css";

function GuideAnswerQuestions() {

  const [posts, setPosts] = useState([]);
  const [replyText, setReplyText] = useState({});

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  // ✅ FETCH FROM BACKEND
  const loadDiscussions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/guide/questions`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    loadDiscussions();
  }, []);

  // ✅ SEND REPLY TO BACKEND
  const handleReply = async (id) => {

    if (!replyText[id]) return;

    try {
      await fetch(`${API_URL}/api/guide/reply/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          guideReply: replyText[id],
          answeredByGuide: true
        })
      });

      setReplyText({ ...replyText, [id]: "" });
      loadDiscussions();

    } catch (err) {
      console.error("Reply Error:", err);
    }
  };

  return (
    <div className="page-container">

      <h1>Answer Cultural Questions</h1>

      {posts.length === 0 && (
        <div className="card">
          <h3>No questions available</h3>
        </div>
      )}

      <div className="cards-container">

        {posts.map(post => (
          <div key={post.id} className="card">

            <h3>{post.title}</h3>
            <p><b>Category:</b> {post.category}</p>
            <p>{post.message}</p>

            {post.guideReply ? (
              <div style={{
                background: "#1e423f",
                color: "white",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <b>Reply:</b> {post.guideReply}
              </div>
            ) : (
              <>
                <textarea
                  value={replyText[post.id] || ""}
                  onChange={(e) =>
                    setReplyText({
                      ...replyText,
                      [post.id]: e.target.value
                    })
                  }
                />

                <button
                  className="btn-primary"
                  onClick={() => handleReply(post.id)}
                >
                  Submit Reply
                </button>
              </>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default GuideAnswerQuestions;
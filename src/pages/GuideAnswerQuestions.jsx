import React, { useEffect, useState } from "react";
import "../App.css";

function GuideAnswerQuestions() {

  const [posts, setPosts] = useState([]);
  const [replyText, setReplyText] = useState({});

  // ✅ FETCH FROM BACKEND
  const loadDiscussions = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/guide/questions");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDiscussions();
  }, []);

  // ✅ SEND REPLY TO BACKEND
  const handleReply = async (id) => {

    if (!replyText[id]) return;

    await fetch(`http://localhost:8080/api/guide/reply/${id}`, {
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
import React, { useState, useEffect } from "react";
import "../App.css";

function GuideInsights() {

  const [insights, setInsights] = useState([]);
  const [monument, setMonument] = useState("");
  const [content, setContent] = useState("");

  const fetchInsights = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/guide/insights");
      const data = await res.json();
      setInsights(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const handleAdd = async () => {
    if (!monument || !content) return;

    try {
      await fetch("http://localhost:8080/api/guide/insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ monument, content })
      });

      setMonument("");
      setContent("");
      fetchInsights();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">

      <h1>Tour Insights Management</h1>

      <div className="card">
        <input
          placeholder="Monument Name"
          value={monument}
          onChange={(e) => setMonument(e.target.value)}
        />

        <textarea
          placeholder="Detailed Explanation"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn-primary" onClick={handleAdd}>
          Add Insight
        </button>
      </div>

      {insights.map(item => (
        <div key={item.id} className="card">
          <h3>{item.monument}</h3>
          <p>{item.content}</p>
        </div>
      ))}

    </div>
  );
}

export default GuideInsights;
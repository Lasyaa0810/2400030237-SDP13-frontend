import React, { useState, useEffect } from "react";
import "../App.css";

function GuideResources() {

  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // LOAD
  const fetchResources = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/guide/resources");
      const data = await res.json();
      setResources(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // ADD
  const handleAdd = async () => {

    if (!title || !file) {
      alert("Add title and file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      await fetch("http://localhost:8080/api/guide/upload-resource", {
        method: "POST",
        body: formData
      });

      setTitle("");
      setDescription("");
      setFile(null);

      fetchResources();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">

      <h1>Upload Educational Resources</h1>

      {/* FORM */}
      <div className="card">

        <input
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* FILE INPUT */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn-primary" onClick={handleAdd}>
          Upload Resource
        </button>

      </div>

      {/* DISPLAY */}
      <div className="favorites-grid">
        {resources.map(r => (
          <div key={r.id} className="favorite-card">

            <h3>{r.title}</h3>
            <p>{r.description}</p>

            <a href={r.link} target="_blank" rel="noreferrer">
              View / Download
            </a>

          </div>
        ))}
      </div>

    </div>
  );
}

export default GuideResources;
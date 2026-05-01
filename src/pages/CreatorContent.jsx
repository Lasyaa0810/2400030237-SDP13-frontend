import React, { useState, useEffect } from "react";
import "../App.css";

function CreatorContent() {

  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("Monument");
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    state: "",
    type: "",
    description: "",
    image: "",
    rating: "",
    visitedDate: ""
  });

  const [imagePreview, setImagePreview] = useState([]);

  // ================= FETCH =================
  const fetchData = async () => {
    const res = await fetch("http://localhost:8080/content");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= INPUT =================
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ================= FILE UPLOAD =================
  const handleFilesUpload = async (files) => {

    const uploadedUrls = [];

    for (let i = 0; i < files.length; i++) {

      const formDataUpload = new FormData();
      formDataUpload.append("file", files[i]);

      const res = await fetch("http://localhost:8080/content/upload", {
        method: "POST",
        body: formDataUpload
      });

      const url = await res.text();
      uploadedUrls.push(url);
    }

    setImagePreview(uploadedUrls);

    setFormData(prev => ({
      ...prev,
      image: uploadedUrls.join(",")
    }));
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/content/${id}`, {
      method: "DELETE"
    });

    fetchData();
  };

  // ================= EDIT =================
  const handleEdit = (item) => {

    setFormData({
      title: item.title || "",
      state: item.state || "",
      type: item.type || "",
      description: item.description || "",
      image: item.image || "",
      rating: item.rating || "",
      visitedDate: item.visitedDate || ""
    });

    setImagePreview(item.image ? item.image.split(",") : []);
    setCategory(item.category);
    setEditingId(item.id);
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {

    const data = {
      title: formData.title,
      state: formData.state,
      category,
      type: formData.type,
      description: formData.description,
      image: formData.image,
      rating: formData.rating ? Number(formData.rating) : 0,
      visitedDate: formData.visitedDate || null
    };

    try {

      const url = editingId
        ? `http://localhost:8080/content/${editingId}`
        : "http://localhost:8080/content";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        alert("Failed to save data");
        return;
      }

      alert(editingId ? "Updated Successfully" : "Added Successfully");

      // RESET
      setEditingId(null);
      setFormData({
        title: "",
        state: "",
        type: "",
        description: "",
        image: "",
        rating: "",
        visitedDate: ""
      });
      setImagePreview([]);

      fetchData();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">

      <h1 className="title">Content Creator Studio</h1>

      {/* CATEGORY */}
      <div className="card">
        <label>Select Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Monument</option>
          <option>Dance Forms</option>
          <option>Music</option>
          <option>Festivals</option>
        </select>
      </div>

      {/* FORM */}
      <div className="card">

        <div className="row">
          <input name="title" value={formData.title} placeholder="Name" onChange={handleChange} />
          <input name="state" value={formData.state} placeholder="State" onChange={handleChange} />
        </div>

        <div className="row">
          <input name="type" value={formData.type} placeholder="Type" onChange={handleChange} />
          <input type="date" name="visitedDate" value={formData.visitedDate} onChange={handleChange} />
        </div>

        <input
          type="number"
          name="rating"
          value={formData.rating}
          min="1"
          max="5"
          placeholder="Rating"
          onChange={handleChange}
        />

        {/* UPLOAD */}
        <div className="upload-box">
          <input type="file" multiple onChange={(e) => handleFilesUpload(e.target.files)} />
        </div>

        {/* PREVIEW */}
        <div className="preview">
          {imagePreview.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        <textarea
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <button className="btn" onClick={handleSubmit}>
          {editingId ? "Update Content" : "Add Content"}
        </button>
      </div>

      {/* DISPLAY */}
      <div className="grid">
        {items.map(item => {
          const images = item.image ? item.image.split(",") : [];

          return (
            <div key={item.id} className="card">

              <h3>{item.title}</h3>
              <p><b>State:</b> {item.state}</p>
              <p><b>Category:</b> {item.category}</p>
              <p><b>Rating:</b> {item.rating}</p>

              {/* 🔥 INSTAGRAM GRID */}
              <div className={`card-images count-${images.length}`}>
                {images.map((img, i) => (
                  <img key={i} src={img} alt="" />
                ))}
              </div>

              <p>{item.description}</p>

              {/* 🔥 PREMIUM BUTTONS */}
              <div className="action-buttons">
                <button className="btn-edit" onClick={() => handleEdit(item)}>
                  Edit
                </button>

                <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default CreatorContent;
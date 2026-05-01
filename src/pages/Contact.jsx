import React, { useState, useEffect } from "react";
import "../App.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* Scroll Reveal */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    elements.forEach(el => observer.observe(el));
  }, []);

  const handleSubmit = () => {
    if (!name || !email || !message) return;

    alert("Message Sent Successfully 👑");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page-container">

      <div
        className="card reveal-on-scroll"
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "40px",
          borderRadius: "25px"
        }}
      >

        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Contact Us
        </h1>

        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          We'd love to hear from you. Reach out for collaborations,
          queries, or cultural contributions.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "15px",
            border: "1px solid #c29b87",
            fontSize: "16px"
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "15px",
            border: "1px solid #c29b87",
            fontSize: "16px"
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "15px",
            border: "1px solid #c29b87",
            fontSize: "16px"
          }}
        />

        <button
          className="btn-primary"
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          Send Message
        </button>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p><strong>Email:</strong> support@bharatverse.com</p>
          <p><strong>Location:</strong> India</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;
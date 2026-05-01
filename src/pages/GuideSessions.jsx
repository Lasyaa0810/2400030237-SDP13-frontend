import React, { useState, useEffect } from "react";
import "../App.css";

function GuideSessions() {

  const [sessions, setSessions] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const fetchSessions = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/guide/sessions");
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const addSession = async () => {
    if (!title || !date) return;

    try {
      await fetch("http://localhost:8080/api/guide/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, date })
      });

      setTitle("");
      setDate("");
      fetchSessions();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">

      <h1>Schedule Guided Sessions</h1>

      <div className="card">
        <input
          placeholder="Session Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="btn-primary" onClick={addSession}>
          Schedule
        </button>
      </div>

      {sessions.map(session => (
        <div key={session.id} className="card">
          <h3>{session.title}</h3>
          <p>Date: {session.date}</p>
        </div>
      ))}

    </div>
  );
}

export default GuideSessions;
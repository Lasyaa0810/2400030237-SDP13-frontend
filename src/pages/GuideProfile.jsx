import React, { useState, useEffect } from "react";
import "../App.css";

function GuideProfile() {

  const [profile, setProfile] = useState({
    name: "",
    specialization: "",
    experience: "",
    bio: ""
  });

  // ✅ API BASE URL
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080";

  const fetchProfile = async () => {
    try {
      const res = await fetch(`${API_URL}/api/guide/profile`);
      const data = await res.json();

      if (data.length > 0) {
        setProfile(data[0]); // take first profile
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    if (!profile.name || !profile.specialization) return;

    try {
      await fetch(`${API_URL}/api/guide/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
      });

      alert("Profile Saved");

    } catch (err) {
      console.error("Save Error:", err);
    }
  };

  return (
    <div className="page-container">

      <h1>Guide Profile</h1>

      <div className="card">

        <input
          placeholder="Full Name"
          value={profile.name}
          onChange={(e) =>
            setProfile({ ...profile, name: e.target.value })
          }
        />

        <input
          placeholder="Specialization"
          value={profile.specialization}
          onChange={(e) =>
            setProfile({ ...profile, specialization: e.target.value })
          }
        />

        <input
          placeholder="Experience"
          value={profile.experience}
          onChange={(e) =>
            setProfile({ ...profile, experience: e.target.value })
          }
        />

        <textarea
          placeholder="Bio"
          value={profile.bio}
          onChange={(e) =>
            setProfile({ ...profile, bio: e.target.value })
          }
        />

        <button className="btn-primary" onClick={handleSave}>
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default GuideProfile;
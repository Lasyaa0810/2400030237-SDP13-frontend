import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Navbar() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const email = localStorage.getItem("email");
      const role = localStorage.getItem("role");

      if (email && role) {
        setUser({ email, role });
      } else {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  const role = user?.role;

  return (
    <div className="navbar">

      <h2>BharatVerse</h2>

      <div>

        {/* ALWAYS */}
        <Link to="/">Home</Link>

        {/* NOT LOGGED */}
        {!user && (
          <>
            <Link to="/explore">Explore</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Signup</Link>
          </>
        )}

        {/* ADMIN */}
        {user && role === "Admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/content">Content</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {/* CONTENT CREATOR */}
        {user && role === "Content Creator" && (
          <>
            <Link to="/explore">Explore</Link>
            <Link to="/creator">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {/* TOUR GUIDE */}
        {user && role === "Tour Guide" && (
          <>
            <Link to="/guide">Dashboard</Link>
            <Link to="/guide-insights">Insights</Link>
            <Link to="/guide-sessions">Sessions</Link>
            <Link to="/guide-resources">Resources</Link>
            <Link to="/guide-profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {/* CULTURAL ENTHUSIAST */}
        {user && role?.toLowerCase().includes("cultural") && (
          <>
            <Link to="/my-journey">My Journey</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/achievements">Achievements</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

      </div>

    </div>
  );
}

export default Navbar;
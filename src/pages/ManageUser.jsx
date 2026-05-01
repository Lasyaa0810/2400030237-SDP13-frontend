import React, { useEffect, useState } from "react";
import "../App.css";

function ManageUser() {

  const [users, setUsers] = useState([]);

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://2400030237-sdp13-backend-production.up.railway.app";

  // 🔥 FETCH USERS
  useEffect(() => {
    fetch(`${API_URL}/api/users`)   // ✅ FIXED
      .then(res => res.json())
      .then(data => {
        console.log("USERS:", data); // DEBUG
        setUsers(data);
      })
      .catch(err => console.log(err));
  }, []);

  // 🔥 DELETE USER
  const deleteUser = async (id) => {
    await fetch(`${API_URL}/api/users/${id}`, {  // ✅ FIXED
      method: "DELETE"
    });

    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="page-container">

      <h1>Manage Users</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

    </div>
  );
}

export default ManageUser;
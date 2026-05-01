import React, { useEffect, useState } from "react";
import "../App.css";

function ManageUser() {

  const [users, setUsers] = useState([]);

  // 🔥 FETCH USERS
  useEffect(() => {
    fetch("http://localhost:8080/api/admin/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  // 🔥 DELETE USER
  const deleteUser = async (id) => {
    await fetch(`http://localhost:8080/api/admin/users/${id}`, {
      method: "DELETE"
    });

    // refresh list
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
          {users.map(user => (
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
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default ManageUser;
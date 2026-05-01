import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  if (!email || !role) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
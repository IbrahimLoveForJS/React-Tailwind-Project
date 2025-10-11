// components/Auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = localStorage.getItem('grocifyAuth') === 'true';
  return auth ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;

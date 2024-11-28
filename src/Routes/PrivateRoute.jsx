import { useContext } from "react";
import { AuthContext } from "../contexts/UserContexts";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-8 h-8 border-4 border-dashed border-red-500 rounded-full animate-spin"
          role="status"
        ></div>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated, "isAuthenticated", user);
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/" />; // Redirect to login page if not authenticated
  }

  return children;
};

export default ProtectedRoute;

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ActiveContext } from "../../App";

const ProtectedRoute = ({ children, requireRegistered = true }) => {
  const { user } = useContext(ActiveContext);

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If requireRegistered=false but user is already registered, redirect to "/"
  if (requireRegistered === false && user.isRegistered) {
    return <Navigate to="/" replace />;
  }

  // If requireRegistered=true but user is not registered, redirect to dashboard
  if (requireRegistered === true && !user.isRegistered) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
export { ProtectedRoute };

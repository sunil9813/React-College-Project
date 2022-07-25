
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import checkAuthenticated from "src/app/auth/AuthUtil"

const ProtectedRoute = () => {
  const auth = checkAuthenticated();
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet/>
 
};

export default ProtectedRoute;
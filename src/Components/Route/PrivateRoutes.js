// PrivateRoutes.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({isAdmin}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
};

export default PrivateRoutes;

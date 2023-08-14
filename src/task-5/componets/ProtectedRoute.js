import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, allowedRoles }) {
  const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'));
  const userRole = loggedInUserData ? loggedInUserData.role : null;

  console.log('Stored Role:', userRole);
  console.log('Allowed Roles:', allowedRoles);

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;

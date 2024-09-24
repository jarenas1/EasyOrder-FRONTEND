import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthGuard = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const isAuthenticated = () => {
      const token = localStorage.getItem('userToken');
      return !!token;
    };

    const checkRole = () => {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const userRole = userData.role?.id;
      return allowedRoles.length === 0 || allowedRoles.includes(userRole);
    };

    if (isAuthenticated()) {
      if (checkRole()) {
        return <WrappedComponent {...props} />;
      } else {
        // Redirigir a una página de acceso denegado o a la página principal
        return <Navigate to="/login" replace />;
      }
    } else {
      return <Navigate to="/login" replace />;
    }
  };
};

export default withAuthGuard;
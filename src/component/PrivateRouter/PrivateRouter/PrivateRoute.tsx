import React from 'react';
import { PrivateRouteProps as Props } from './PrivateRoute.types';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC<Props> = ({ authentication }): React.ReactElement | null => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');
  if (authentication) {
    return isAuthenticated === null || isAuthenticated === 'false' ? <Navigate to='/login' /> : <Outlet />;
  } else {
    return isAuthenticated === null || isAuthenticated === 'false' ? <Outlet /> : <Navigate to='/' />;
  }
};

export default PrivateRoute;

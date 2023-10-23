import React from 'react';
import { AdminRouteProps as Props } from './AdminRoute.types';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute: React.FC<Props> = ({ adminCheck }): React.ReactElement | null => {
  const isAdmin = sessionStorage.getItem('isAdmin');

  if (adminCheck) {
    return (isAdmin === 'false' || isAdmin === 'false') ? <Navigate to='/login' /> : <Outlet />;
  } else {
    return (isAdmin === 'false' || isAdmin === 'false') ? <Outlet /> : <Navigate to='/' />;
  }
};

export default AdminRoute;

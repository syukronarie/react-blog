import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../utils/Auth';

export default function PrivateRoute() {
  if (!Auth.isAuthorization()) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

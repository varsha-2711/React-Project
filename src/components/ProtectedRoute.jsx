import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ role }) {

    const currentRole = localStorage.getItem('role');

    return currentRole === role
        ? <Outlet />
        : <Navigate to="/login" replace />;

}

export default ProtectedRoute;
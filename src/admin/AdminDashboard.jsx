import { Link, Outlet, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

function AdminDashboard() {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem('username');
        localStorage.removeItem('role');

        navigate('/');

    }

    return (

        <div className="dashboard-shell">

            <Navbar />

            <div className="dashboard-layout">

                <aside className="side-menu admin-menu">

                    <h3>Admin workspace</h3>

                    <p className="side-user">
                        CampusCart control centre
                    </p>

                    <Link to="/admin">
                        Overview
                    </Link>

                    <Link to="/admin/products">
                        Manage products
                    </Link>

                    <Link to="/admin/categories">
                        Categories
                    </Link>

                    <Link to="/admin/users">
                        Manage users
                    </Link>

                    <Link to="/admin/reports">
                        Reports
                    </Link>

                    <button onClick={logout}>
                        Logout
                    </button>

                </aside>

                <main className="dashboard-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}

export default AdminDashboard;
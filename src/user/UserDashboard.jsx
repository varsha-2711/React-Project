import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function UserDashboard() {

    const navigate = useNavigate();

    const username = localStorage.getItem('username');

    function logout() {

        localStorage.removeItem('username');
        localStorage.removeItem('role');

        navigate('/');

    }

    return (

        <div className="dashboard-shell">

            <Navbar />

            <div className="dashboard-layout">

                <aside className="side-menu">

                    <h3>Student space</h3>

                    <p className="side-user">
                        Hi, {username}
                    </p>

                    <Link to="/user">Overview</Link>

                    <Link to="/user/browse">
                        Browse products
                    </Link>

                    <Link to="/user/sell">
                        Sell a product
                    </Link>

                    <Link to="/user/listings">
                        My listings
                    </Link>

                    <Link to="/user/wishlist">
                        Wishlist
                    </Link>

                    <Link to="/user/profile">
                        My profile
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

export default UserDashboard;
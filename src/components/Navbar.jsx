import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    function logout() {

        localStorage.removeItem('username');
        localStorage.removeItem('role');

        navigate('/');

    }

    return (
        <nav className="cc-navbar">

            <Link className="cc-brand" to="/">
                CampusCart
            </Link>

            <div className="cc-nav-links">

                {role === 'user' &&
                    <Link to="/user">Dashboard</Link>
                }

                {role === 'admin' &&
                    <Link to="/admin">Dashboard</Link>
                }

                {!role &&
                    <Link to="/">Home</Link>
                }

                {role ?
                    <button onClick={logout}>
                        Logout
                    </button>
                    :
                    <>
                        <Link to="/login">Login</Link>

                        <Link
                            className="cc-nav-register"
                            to="/register"
                        >
                            Register
                        </Link>
                    </>
                }

            </div>

        </nav>
    );
}

export default Navbar;
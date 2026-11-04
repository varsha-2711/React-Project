import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {

    const [role, setRole] = useState('user');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const users = useSelector(state => state.users);

    const navigate = useNavigate();

    function handleLogin(e) {

        e.preventDefault();

        setError('');

        if (role === 'admin') {

            if (
                username === 'admin' &&
                password === 'admin123'
            ) {

                localStorage.setItem('username', 'admin');
                localStorage.setItem('role', 'admin');

                navigate('/admin');

            } else {

                setError('Invalid admin username or password.');

            }

            return;
        }

        const valid =
            (username === 'varsha' && password === 'varsha123') ||
            users.some(
                u =>
                    u.username === username &&
                    u.password === password
            );

        if (valid) {

            localStorage.setItem('username', username);
            localStorage.setItem('role', 'user');

            navigate('/user');

        } else {

            setError('Invalid student username or password.');

        }

    }

    return (

        <div className="auth-page">

            <form
                className="auth-card"
                onSubmit={handleLogin}
            >

                <Link to="/" className="auth-brand">
                    Campus<span>Cart</span>
                </Link>

                <h2>Welcome back</h2>

                <p className="auth-muted">
                    Login to your campus marketplace
                </p>

                <div className="role-tabs">

                    <button
                        type="button"
                        className={role === 'user' ? 'active' : ''}
                        onClick={() => {
                            setRole('user');
                            setError('');
                        }}
                    >
                        Student
                    </button>

                    <button
                        type="button"
                        className={role === 'admin' ? 'active' : ''}
                        onClick={() => {
                            setRole('admin');
                            setError('');
                        }}
                    >
                        Admin
                    </button>

                </div>

                <label>Username</label>

                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                />

                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />

                {error &&
                    <p className="auth-error">{error}</p>
                }

                <button className="primary-btn" type="submit">
                    Login
                </button>

                {role === 'user' &&
                    <p className="auth-switch">
                        New to CampusCart?
                        <Link to="/register"> Create account</Link>
                    </p>
                }

                <Link className="back-link" to="/">
                    ← Back to home
                </Link>

            </form>

        </div>

    );

}

export default Login;
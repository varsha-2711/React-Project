import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../redux/UserSlice';

function Register() {

    const [form, setForm] = useState({

        username: '',
        email: '',
        password: '',
        confirm: ''

    });

    const [error, setError] = useState('');

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    function change(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    function submit(e) {

        e.preventDefault();

        setError('');

        const username = form.username.trim();

        if (
            ['admin', 'varsha'].includes(username.toLowerCase())
        ) {

            setError('This username is reserved.');

            return;

        }

        if (form.password !== form.confirm) {

            setError('Passwords do not match.');

            return;

        }

        if (
            users.some(
                u => u.username.toLowerCase() === username.toLowerCase()
            )
        ) {

            setError('Username already exists.');

            return;

        }

        dispatch(registerUser({

            username,
            email: form.email,
            password: form.password

        }));

        alert('Registration successful. Please login.');

        navigate('/login');

    }

    return (

        <div className="auth-page">

            <form
                className="auth-card"
                onSubmit={submit}
            >

                <Link to="/" className="auth-brand">
                    Campus<span>Cart</span>
                </Link>

                <h2>Create account</h2>

                <p className="auth-muted">
                    Join your campus marketplace
                </p>

                <label>Username</label>

                <input
                    name="username"
                    value={form.username}
                    onChange={change}
                    required
                />

                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={change}
                    required
                />

                <label>Password</label>

                <input
                    type="password"
                    name="password"
                    minLength="6"
                    value={form.password}
                    onChange={change}
                    required
                />

                <label>Confirm password</label>

                <input
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    onChange={change}
                    required
                />

                {error &&
                    <p className="auth-error">{error}</p>
                }

                <button className="primary-btn" type="submit">
                    Register
                </button>

                <p className="auth-switch">
                    Already registered?
                    <Link to="/login"> Login</Link>
                </p>

                <Link className="back-link" to="/">
                    ← Back to home
                </Link>

            </form>

        </div>

    );

}

export default Register;
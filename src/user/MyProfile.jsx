import { useSelector } from 'react-redux';

function MyProfile() {

    const username = localStorage.getItem('username');

    const user = useSelector(state => state.users)
        .find(u => u.username === username);

    return (

        <div className="form-panel profile-panel">

            <p className="eyebrow">
                YOUR CAMPUS ACCOUNT
            </p>

            <h2>My profile</h2>

            <div className="profile-avatar">
                {username?.charAt(0).toUpperCase()}
            </div>

            <h3>{username}</h3>

            <p className="muted">
                {user?.email || 'Default demo student account'}
            </p>

            <p>
                <b>Account type:</b> Student
            </p>

        </div>

    );

}

export default MyProfile;
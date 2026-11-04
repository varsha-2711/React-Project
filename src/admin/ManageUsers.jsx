import { useDispatch, useSelector } from 'react-redux';

import { deleteUser } from '../redux/UserSlice';

function ManageUsers() {

    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    return (

        <div>

            <p className="eyebrow">
                COMMUNITY MEMBERS
            </p>

            <h2>Manage users</h2>

            <div className="table-wrap">

                <table>

                    <thead>

                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {users.map(u => (

                            <tr key={u.username}>

                                <td>{u.username}</td>

                                <td>{u.email}</td>

                                <td>

                                    <button
                                        className="table-action reject"
                                        onClick={() => {

                                            if (
                                                window.confirm(
                                                    `Remove ${u.username}?`
                                                )
                                            ) {

                                                dispatch(deleteUser(u.username));

                                            }

                                        }}
                                    >
                                        Remove
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {users.length === 0 && (

                <p className="empty-state">
                    No student registrations yet.
                </p>

            )}

        </div>

    );

}

export default ManageUsers;
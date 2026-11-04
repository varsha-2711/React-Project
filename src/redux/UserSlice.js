import { createSlice } from '@reduxjs/toolkit';

const initialState =
    JSON.parse(localStorage.getItem('campus_users') || 'null') || [];

const UserSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        registerUser: (state, action) => {
            state.push(action.payload);
        },

        deleteUser: (state, action) => {
            return state.filter(
                u => u.username !== action.payload
            );
        }
    }
});

export const {
    registerUser,
    deleteUser
} = UserSlice.actions;

export default UserSlice.reducer;
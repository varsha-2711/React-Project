import { createSlice } from '@reduxjs/toolkit';

const initialState =
    JSON.parse(localStorage.getItem('campus_requests') || 'null') || [];

const RequestSlice = createSlice({
    name: 'requests',
    initialState,

    reducers: {
        addRequest: (state, action) => {
            state.push(action.payload);
        },

        updateRequest: (state, action) => {
            const req = state.find(
                r => r.id === action.payload.id
            );

            if (req) {
                req.status = action.payload.status;
            }
        }
    }
});

export const {
    addRequest,
    updateRequest
} = RequestSlice.actions;

export default RequestSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';


const initialState =
    JSON.parse(localStorage.getItem('campus_wishlist') || 'null') || [];

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,

    reducers: {
        toggleWishlist: (state, action) => {

            const exists = state.findIndex(
                w =>
                    w.username === action.payload.username &&
                    w.productId === action.payload.productId
            );

            if (exists >= 0) {
                state.splice(exists, 1);
            } else {
                state.push(action.payload);
            }
        }
    }
});

export const { toggleWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState =
    JSON.parse(localStorage.getItem('campus_categories') || 'null') ||
    ['Books', 'Electronics', 'Accessories', 'Stationery', 'Other'];

const CategorySlice = createSlice({
    name: 'categories',
    initialState,

    reducers: {
        addCategory: (state, action) => {
            if (!state.some(
                c => c.toLowerCase() === action.payload.toLowerCase()
            )) {
                state.push(action.payload);
            }
        },

        deleteCategory: (state, action) => {
            return state.filter(c => c !== action.payload);
        }
    }
});

export const { addCategory, deleteCategory } = CategorySlice.actions;

export default CategorySlice.reducer;
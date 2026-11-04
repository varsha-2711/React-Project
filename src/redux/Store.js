import { configureStore } from '@reduxjs/toolkit';

import ProductReducer from './ProductSlice';
import CategoryReducer from './CategorySlice';
import UserReducer from './UserSlice';
import WishlistReducer from './WishlistSlice';
import RequestReducer from './RequestSlice';

const Store = configureStore({

    reducer: {
        products: ProductReducer,
        categories: CategoryReducer,
        users: UserReducer,
        wishlist: WishlistReducer,
        requests: RequestReducer
    }

});

Store.subscribe(() => {

    const state = Store.getState();

    localStorage.setItem(
        'campus_products',
        JSON.stringify(state.products)
    );

    localStorage.setItem(
        'campus_categories',
        JSON.stringify(state.categories)
    );

    localStorage.setItem(
        'campus_users',
        JSON.stringify(state.users)
    );

    localStorage.setItem(
        'campus_wishlist',
        JSON.stringify(state.wishlist)
    );

    localStorage.setItem(
        'campus_requests',
        JSON.stringify(state.requests)
    );

});

export default Store;
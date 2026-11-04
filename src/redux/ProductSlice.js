
import { createSlice } from '@reduxjs/toolkit';

const initialState =
    JSON.parse(localStorage.getItem('campus_products') || 'null') || [

        {
            id: 1,
            name: 'Engineering Mathematics',
            category: 'Books',
            price: 250,
            description: 'Useful engineering mathematics reference book in good condition.',
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600',
            seller: 'varsha',
            sellerNumber: '9876543210',
            status: 'approved'
        },

        {
            id: 2,
            name: 'Scientific Calculator',
            category: 'Electronics',
            price: 450,
            description: 'Scientific calculator for engineering students.',
            image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600',
            seller: 'varsha',
            sellerNumber: '9876543210',
            status: 'approved'
        },

        {
            id: 3,
            name: 'Java Programming Book',
            category: 'Books',
            price: 300,
            description: 'Complete Java programming guide for beginners.',
            image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
            seller: 'rahul',
            sellerNumber: '9876543211',
            status: 'approved'
        },

        {
            id: 4,
            name: 'Wireless Headphones',
            category: 'Electronics',
            price: 750,
            description: 'Comfortable wireless headphones for music and online classes.',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
            seller: 'sneha',
            sellerNumber: '9876543212',
            status: 'approved'
        },

        {
            id: 5,
            name: 'College Backpack',
            category: 'Accessories',
            price: 550,
            description: 'Spacious backpack for carrying books and college essentials.',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
            seller: 'arjun',
            sellerNumber: '9876543213',
            status: 'approved'
        },

        {
            id: 6,
            name: 'Wireless Mouse',
            category: 'Electronics',
            price: 350,
            description: 'Smooth wireless mouse suitable for laptops and computers.',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
            seller: 'varsha',
            sellerNumber: '9876543210',
            status: 'approved'
        },

        {
            id: 7,
            name: 'Notebook Collection',
            category: 'Stationery',
            price: 150,
            description: 'Premium notebook collection for college notes and assignments.',
            image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600',
            seller: 'rahul',
            sellerNumber: '9876543211',
            status: 'approved'
        },

        {
            id: 8,
            name: 'Mechanical Keyboard',
            category: 'Electronics',
            price: 900,
            description: 'Stylish keyboard perfect for coding and daily computer use.',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600',
            seller: 'sneha',
            sellerNumber: '9876543212',
            status: 'approved'
        },

        {
            id: 9,
            name: 'Python Programming Book',
            category: 'Books',
            price: 280,
            description: 'Beginner-friendly Python programming book with examples.',
            image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600',
            seller: 'arjun',
            sellerNumber: '9876543213',
            status: 'approved'
        },

        {
            id: 10,
            name: 'Digital Watch',
            category: 'Accessories',
            price: 650,
            description: 'Modern stylish watch for everyday college use.',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
            seller: 'varsha',
            sellerNumber: '9876543210',
            status: 'approved'
        },

        {
            id: 11,
            name: 'Study Desk Lamp',
            category: 'Study Essentials',
            price: 350,
            description: 'Modern desk lamp for comfortable late-night studying.',
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
            seller: 'rahul',
            sellerNumber: '9876543211',
            status: 'approved'
        },

        {
            id: 12,
            name: 'Steel Water Bottle',
            category: 'Accessories',
            price: 180,
            description: 'Reusable stainless steel bottle for everyday campus use.',
            image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600',
            seller: 'sneha',
            sellerNumber: '9876543212',
            status: 'approved'
        },

        {
            id: 13,
            name: 'Laptop Stand',
            category: 'Study Essentials',
            price: 450,
            description: 'Ergonomic laptop stand for comfortable studying and coding.',
            image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
            seller: 'arjun',
            sellerNumber: '9876543213',
            status: 'approved'
        },

        {
            id: 14,
            name: 'Highlighter Set',
            category: 'Stationery',
            price: 100,
            description: 'Colorful highlighter set for organizing notes and textbooks.',
            image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
            seller: 'varsha',
            sellerNumber: '9876543210',
            status: 'approved'
        }

    ];

const ProductSlice = createSlice({

    name: 'products',

    initialState,

    reducers: {

        addProduct: (state, action) => {
            state.push(action.payload);
        },

        updateProductStatus: (state, action) => {

            const item = state.find(
                p => p.id === action.payload.id
            );

            if (item) {
                item.status = action.payload.status;
            }

        },

        deleteProduct: (state, action) => {

            return state.filter(
                p => p.id !== action.payload
            );

        }

    }

});

export const {
    addProduct,
    updateProductStatus,
    deleteProduct
} = ProductSlice.actions;

export default ProductSlice.reducer;

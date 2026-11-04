import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../redux/ProductSlice';

function SellProducts() {

    const categories = useSelector(state => state.categories);

    const dispatch = useDispatch();

    const [form, setForm] = useState({

        name: '',
        category: categories[0] || 'Other',
        price: '',
        description: '',
        image: ''

    });

    const [message, setMessage] = useState('');

    function change(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    function submit(e) {

        e.preventDefault();

        dispatch(addProduct({

            ...form,

            id: Date.now(),

            price: Number(form.price),

            image: form.image ||
                'https://placehold.co/600x400?text=CampusCart',

            seller: localStorage.getItem('username'),

            status: 'pending'

        }));

        setForm({

            name: '',
            category: categories[0] || 'Other',
            price: '',
            description: '',
            image: ''

        });

        setMessage(
            'Your product was submitted. It will appear after admin approval.'
        );

    }

    return (

        <div className="form-panel">

            <p className="eyebrow">
                GIVE YOUR ITEMS A SECOND LIFE
            </p>

            <h2>List a product</h2>

            <p className="muted">
                Add clear details so another student can find what they need.
            </p>

            <form onSubmit={submit} className="form-grid">

                <label>
                    Product name

                    <input
                        name="name"
                        value={form.name}
                        onChange={change}
                        required
                        placeholder="e.g. Data structures textbook"
                    />
                </label>

                <label>
                    Category

                    <select
                        name="category"
                        value={form.category}
                        onChange={change}
                    >

                        {categories.map(c => (
                            <option key={c}>{c}</option>
                        ))}

                    </select>
                </label>

                <label>
                    Price (₹)

                    <input
                        type="number"
                        min="1"
                        name="price"
                        value={form.price}
                        onChange={change}
                        required
                    />
                </label>

                <label>
                    Image URL (optional)

                    <input
                        name="image"
                        value={form.image}
                        onChange={change}
                        placeholder="Paste an image URL"
                    />
                </label>

                <label className="full-field">
                    Description

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={change}
                        required
                        rows="4"
                    />
                </label>

                {message && (
                    <p className="success-message full-field">
                        {message}
                    </p>
                )}

                <button
                    className="primary-btn full-field"
                    type="submit"
                >
                    Submit for approval
                </button>

            </form>

        </div>

    );

}

export default SellProducts;
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    addCategory,
    deleteCategory
} from '../redux/CategorySlice';

function ManageCategories() {

    const [name, setName] = useState('');

    const categories = useSelector(state => state.categories);

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    function submit(e) {

        e.preventDefault();

        const clean = name.trim();

        if (!clean) return;

        if (
            categories.some(
                c => c.toLowerCase() === clean.toLowerCase()
            )
        ) {

            return alert('Category already exists.');

        }

        dispatch(addCategory(clean));

        setName('');

    }

    return (

        <div>

            <p className="eyebrow">
                ORGANISE THE MARKETPLACE
            </p>

            <h2>Manage categories</h2>

            <form
                className="inline-form"
                onSubmit={submit}
            >

                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="New category name"
                    required
                />

                <button className="primary-btn">
                    Add category
                </button>

            </form>

            <div className="category-list">

                {categories.map(c => (

                    <div className="category-row" key={c}>

                        <span>

                            <b>{c}</b>

                            <small>
                                {products.filter(
                                    p => p.category === c
                                ).length} products
                            </small>

                        </span>

                        <button
                            className="table-action reject"
                            onClick={() => {

                                if (
                                    products.some(p => p.category === c)
                                ) {

                                    return alert(
                                        'Cannot delete a category that is in use.'
                                    );

                                }

                                dispatch(deleteCategory(c));

                            }}
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ManageCategories;
import { useDispatch, useSelector } from 'react-redux';

import {
    deleteProduct,
    updateProductStatus
} from '../redux/ProductSlice';

function ManageProducts() {

    const products = useSelector(state => state.products);

    const dispatch = useDispatch();

    return (

        <div>

            <p className="eyebrow">
                LISTING MODERATION
            </p>

            <h2>Manage products</h2>

            <div className="table-wrap">

                <table>

                    <thead>

                        <tr>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {products.map(p => (

                            <tr key={p.id}>

                                <td>
                                    {p.name}
                                    <small>{p.category}</small>
                                </td>

                                <td>{p.seller}</td>

                                <td>₹{p.price}</td>

                                <td>
                                    <span className={`status-pill ${p.status}`}>
                                        {p.status}
                                    </span>
                                </td>

                                <td>

                                    {p.status === 'pending' && (

                                        <button
                                            className="table-action approve"
                                            onClick={() => dispatch(
                                                updateProductStatus({
                                                    id: p.id,
                                                    status: 'approved'
                                                })
                                            )}
                                        >
                                            Approve
                                        </button>

                                    )}

                                    {p.status === 'approved' && (

                                        <button
                                            className="table-action reject"
                                            onClick={() => dispatch(
                                                updateProductStatus({
                                                    id: p.id,
                                                    status: 'pending'
                                                })
                                            )}
                                        >
                                            Unpublish
                                        </button>

                                    )}

                                    <button
                                        className="table-action reject"
                                        onClick={() => {

                                            if (window.confirm('Delete this product?')) {

                                                dispatch(deleteProduct(p.id));

                                            }

                                        }}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {products.length === 0 && (

                <p className="empty-state">
                    No products yet.
                </p>

            )}

        </div>

    );

}

export default ManageProducts;
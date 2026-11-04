import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { toggleWishlist } from '../redux/WishlistSlice';

function Wishlist() {

    const username = localStorage.getItem('username');

    const products = useSelector(state => state.products);

    const wishlist = useSelector(state => state.wishlist)
        .filter(w => w.username === username);

    const dispatch = useDispatch();

    const savedProducts = wishlist.map(w =>

        products.find(
            p =>
                p.id === w.productId &&
                p.status === 'approved'
        )

    ).filter(Boolean);

    return (

        <div>

            <p className="eyebrow">SAVED FOR LATER</p>

            <h2>My wishlist</h2>

            <div className="product-grid">

                {savedProducts.map(p => (

                    <article className="product-card" key={p.id}>

                        <img src={p.image} alt={p.name} />

                        <div>

                            <h3>{p.name}</h3>

                            <strong>₹{p.price}</strong>

                            <div className="card-actions">

                                <Link
                                    className="small-btn"
                                    to={`/user/product/${p.id}`}
                                >
                                    View
                                </Link>

                                <button
                                    className="light-btn"
                                    onClick={() => dispatch(
                                        toggleWishlist({
                                            productId: p.id,
                                            username
                                        })
                                    )}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

            {savedProducts.length === 0 && (

                <p className="empty-state">
                    Your wishlist is empty.
                </p>

            )}

        </div>

    );

}

export default Wishlist;
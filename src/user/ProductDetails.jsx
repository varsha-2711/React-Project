
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../redux/RequestSlice';
import { toggleWishlist } from '../redux/WishlistSlice';
function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = useSelector(state =>
        state.products.find(
            p => p.id === Number(id) && p.status === 'approved'
        )
    );

    const requests = useSelector(state => state.requests);

    const username = localStorage.getItem('username');
    const wishlist = useSelector(state => state.wishlist);

    const isWishlisted = wishlist.some(
        w => w.username === username && w.productId === product.id
    );

    function handleWishlist() {
        dispatch(toggleWishlist({
            username: username,
            productId: product.id,
            productName: product.name,
            price: product.price,
            image: product.image,
            seller: product.seller
        }));

        alert(
            isWishlisted
                ? 'Removed from Wishlist'
                : 'Added to Wishlist'
        );
    }

    if (!product) {
        return (
            <div className="empty-state">
                <h2>Product not found.</h2>

                <button
                    className="primary-btn"
                    onClick={() => navigate('/user/browse')}
                >
                    Back to products
                </button>
            </div>
        );
    }

    function requestProduct() {

        if (product.seller === username) {
            return alert("You can't request your own product.");
        }

        if (
            requests.some(
                r =>
                    r.productId === product.id &&
                    r.buyer === username
            )
        ) {
            return alert('You have already sent a request.');
        }

        dispatch(addRequest({
            id: Date.now(),
            productId: product.id,
            productName: product.name,
            buyer: username,
            seller: product.seller,
            price: product.price,
            status: 'pending'
        }));

        alert('Request sent to seller.');
    }

    return (
        <div className="detail-layout">

            <img src={product.image} alt={product.name} />

            <div>

                <span className="category-pill">
                    {product.category}
                </span>

                <h1>{product.name}</h1>

                <h2>₹{product.price}</h2>

                <p>{product.description}</p>

                <p>
                    Seller: <b>{product.seller}</b>
                </p>

                <p>
                    <strong>Contact:</strong>{' '}
                    <a href={`tel:${product.sellerNumber}`}>
                        {product.sellerNumber || 'Number not available'}
                    </a>
                </p>

               

                <br /><br />

                <button
                    className="primary-btn"
                    onClick={requestProduct}
                >
                    Send Request
                </button>
                
                <button
                    className="light-btn"
                    onClick={handleWishlist}
                >
                    {isWishlisted ? '♥ Added to Wishlist' : '♡ Add to Wishlist'}
                </button>

            </div>

        </div>
    );
}

export default ProductDetails;

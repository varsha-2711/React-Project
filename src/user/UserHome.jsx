import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserHome() {

    const username = localStorage.getItem('username');

    const products = useSelector(state => state.products)
        .filter(p => p.status === 'approved');

    const mine = useSelector(state => state.products)
        .filter(p => p.seller === username);

    const wishlist = useSelector(state => state.wishlist)
        .filter(w => w.username === username);

    const requests = useSelector(state => state.requests)
        .filter(r => r.buyer === username);

    return (

        <div>

            <section className="user-hero">

                <p className="eyebrow">
                    THE CAMPUS COMMUNITY MARKETPLACE
                </p>

                <h1>
                    Good finds. Great campus stories.
                </h1>

                <p>
                    Buy, sell and reuse useful things
                    with students around you.
                </p>

                <Link
                    to="/user/browse"
                    className="primary-btn inline-btn"
                >
                    Explore marketplace →
                </Link>

            </section>

            <div className="stat-grid">

                <div className="stat-card">
                    <strong>{products.length}</strong>
                    <span>Available products</span>
                </div>

                <div className="stat-card">
                    <strong>{mine.length}</strong>
                    <span>My listings</span>
                </div>

                <div className="stat-card">
                    <strong>{wishlist.length}</strong>
                    <span>Wishlist items</span>
                </div>

                <div className="stat-card">
                    <strong>{requests.length}</strong>
                    <span>My requests</span>
                </div>

            </div>

            <div className="section-heading">

                <div>
                    <p className="eyebrow">FRESH ON CAMPUS</p>
                    <h2>Recently listed</h2>
                </div>

                <Link to="/user/browse">
                    View all →
                </Link>

            </div>

            <div className="product-grid">

                {products.slice(-3).reverse().map(p => (

                    <article className="product-card" key={p.id}>

                        <img src={p.image} alt={p.name} />

                        <div>

                          

                            <h3>{p.name}</h3>

                            <strong>₹{p.price}</strong>

                            <p>{p.description}</p>

                        </div>

                    </article>

                ))}

            </div>

        </div>

    );

}

export default UserHome;
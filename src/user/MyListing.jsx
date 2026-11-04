import { useSelector } from 'react-redux';

function MyListing() {

    const username = localStorage.getItem('username');

    const products = useSelector(state => state.products)
        .filter(p => p.seller === username);

    return (

        <div>

            <div className="section-heading">

                <div>
                    <p className="eyebrow">YOUR SELLING ACTIVITY</p>
                    <h2>My listings</h2>
                </div>

                <span>{products.length} listings</span>

            </div>

            <div className="product-grid">

                {products.map(p => (

                    <article className="product-card" key={p.id}>

                        <img src={p.image} alt={p.name} />

                        <div>

                            <span className={`status-pill ${p.status}`}>
                                {p.status}
                            </span>

                            <h3>{p.name}</h3>

                            <strong>₹{p.price}</strong>

                            <p>{p.description}</p>

                        </div>

                    </article>

                ))}

            </div>

            {products.length === 0 && (

                <p className="empty-state">
                    You haven't listed anything yet.
                </p>

            )}

        </div>

    );

}

export default MyListing;
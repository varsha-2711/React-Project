
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BrowseProducts() {

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const products = useSelector(state => state.products);

    const approvedProducts = products.filter(
        p => p.status === 'approved'
    );

    const categories = [
        'All',
        ...new Set(approvedProducts.map(p => p.category))
    ];

    const filteredProducts = selectedCategory === 'All'
        ? approvedProducts
        : approvedProducts.filter(
            p => p.category === selectedCategory
        );

    return (
        <div className="browse-page">

            <div className="browse-heading">
                <span>STUDENT MARKETPLACE</span>
                <h1>Explore Campus Products</h1>
                <p>
                    Discover affordable products shared by your fellow students.
                </p>
            </div>

         

            <div className="browse-category-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`browse-category-btn ${
                            selectedCategory === category ? 'active' : ''
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredProducts.length === 0 ? (

                <div className="empty-state">
                    <h3>No products available</h3>
                    <p>Check back later for new products.</p>
                </div>

            ) : (

                <div className="products-container">

                    {filteredProducts.map(product => (

                        <div className="product-card" key={product.id}>

                            <div className="product-image-box">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>

                            <div className="product-info">

                                <h3>{product.name}</h3>

                                <p className="product-description">
                                    {product.description}
                                </p>

                                <div className="product-seller">
                                    Seller: <b>{product.seller}</b>
                                </div>

                                <div className="product-bottom">

                                    <h4>₹{product.price}</h4>

                                    <button
                                        className="primary-btn"
                                        onClick={() =>
                                            navigate(`/user/product/${product.id}`)
                                        }
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default BrowseProducts;

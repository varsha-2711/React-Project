import Navbar from '../components/Navbar';
import '../Welcome.css';

function Welcome() {
  return (
    <div className="welcome-page">

      <Navbar />

      <section className="hero-section">

        <div className="hero-content">
         

          <h1>
            Your Campus.
            <br />
            Your <span>Marketplace.</span>
          </h1>

          <p>
            Buy, sell and discover amazing products within
            your college community. Give your unused items
            a new home and find what you need at great prices.
          </p>

          <div className="hero-buttons">
            <a href="/login" className="explore-btn">
              Explore Marketplace →
            </a>

            <a href="/register" className="sell-btn">
              Start Selling
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>100%</h3>
              <p>Student Focused</p>
            </div>

            <div>
              <h3>Easy</h3>
              <p>Buying & Selling</p>
            </div>

            <div>
              <h3>Smart</h3>
              <p>Campus Shopping</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">

          <div className="visual-circle"></div>

          <div className="product-card book-card">
            <span>📚</span>
            <h4>Study Materials</h4>
            <p>Find your next favourite book</p>
          </div>

          <div className="product-card laptop-card">
            <span>💻</span>
            <h4>Electronics</h4>
            <p>Smart finds for students</p>
          </div>

        </div>

      </section>

      <section className="about-section" id="about">

        <div className="section-heading">
          <span>WHY CAMPUSCART?</span>
          <h2>Everything Students Need, In One Place</h2>
          <p>
            A simple and convenient marketplace made
            especially for your college community.
          </p>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🛍️</div>
            <h3>Buy Products</h3>
            <p>
              Discover affordable products listed by
              fellow college students.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Sell Products</h3>
            <p>
              List your unused books, gadgets and
              other products with ease.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Campus Community</h3>
            <p>
              Connect with students and make buying
              and selling easier.
            </p>
          </div>

        </div>

      </section>

      <footer className="cc-footer" id="contact">
        <h2>CampusCart 🛍️</h2>
        <p>Your Campus. Your Marketplace.</p>
        <p>© 2026 CampusCart. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Welcome;
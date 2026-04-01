import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './Home.css';

const Home = () => {
  const products = Array(8).fill({
    name: 'XS SCYBA X SERUES 119',
    desc: 'The goods of our stores are very reliable and dur we care about the customer',
    price: '$500.00',
    imgPlaceholder: 'https://via.placeholder.com/200?text=Spa'
  });

  return (
    <div className="home-container">
      {/* Hero Banner Area */}
      <section className="hero-banner">
        <div className="hero-content">
          <h2 className="hero-title">
            Barrier Reef 158 Jet<br/>
            TV- Stereo - Home Theater<br/>
            Supter Spa
          </h2>
          <p className="hero-desc">
            Extra Large and Deep 8 Person<br/>
            158 Jet Supper Spa, TV-Home Theater Spa System,
          </p>
          <div className="hero-price-wrap">
            <span className="hero-price">$4899.00</span>
            <button className="btn-red hero-btn">More Details</button>
          </div>
        </div>
      </section>

      {/* Promotional Tri-banners */}
      <section className="promo-row">
        <div className="promo-item dark-blue">
          <h3>5-7 PERSON<br/>SPA</h3>
          <p>THIS IS PHOTOSHOP'S VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
        </div>
        <div className="promo-item medium-blue">
          <h3>TV THEATER SPA</h3>
          <p>THIS IS PHOTOSHOP'S VERSION OF LOREM IPSUM. PROIN</p>
        </div>
        <div className="promo-item red-bg">
          <h3>SAVE<br/>50%</h3>
          <p>THIS IS PHOTOSHOP'S VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
        </div>
      </section>

      {/* New Products Section */}
      <section className="products-section">
        <h2 className="section-title">NEW PRODUCTS</h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <div className="product-image-container">
                <img src={p.imgPlaceholder} alt={p.name} />
              </div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="product-price">{p.price}</div>
                <button className="btn-red add-to-cart-btn">
                  <span className="icon-bg"><ShoppingCart size={16} /></span>
                  ADD TO CART
                </button>
              </div>
              <div className="product-actions">
                <button className="text-btn">ADD TO WISH LIST</button>
                <span className="divider">|</span>
                <Link to="/products" className="text-btn">MORE DETIALS</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

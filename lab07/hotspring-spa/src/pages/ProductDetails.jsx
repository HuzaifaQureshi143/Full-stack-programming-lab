import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="product-page">
      <div className="breadcrumb">
        Home &gt; Product
      </div>
      
      <div className="product-main-area">
        <div className="product-left">
          <h2 className="product-title">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h2>
          <p className="product-model">Att Model: B22CS30SNSS | UPC Code: 825225868720</p>
          
          <div className="product-images-section">
            <div className="main-image">
              <img src="https://via.placeholder.com/400x300?text=Hot+Tub+Main" alt="Main" />
            </div>
            <div className="thumb-gallery">
              <img src="https://via.placeholder.com/80?text=1" alt="thumb1" className="active-thumb"/>
              <img src="https://via.placeholder.com/80?text=2" alt="thumb2" />
              <img src="https://via.placeholder.com/80?text=3" alt="thumb3" />
              <img src="https://via.placeholder.com/80?text=4" alt="thumb4" />
            </div>
          </div>
          
          <div className="product-tabs">
            <ul className="tab-heads">
              <li className="active">Details</li>
              <li>Quick Specs</li>
              <li>Accessories</li>
              <li>Reviews</li>
              <li>Q & A</li>
            </ul>
            <div className="tab-content">
              <h4>Product Details</h4>
              <p className="energy-star">Energy Star Rated - No</p>
              <h3>Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h3>
              <p>The Hottub B22CS30SNS stain</p>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor...</p>
            </div>
          </div>
        </div>
        
        <div className="product-right">
          <div className="pricing-info">
            <div className="rating">⭐⭐⭐⭐☆ <span>3.4 (14 reviews)</span></div>
            <p className="retail-price">Retail Price: $2199.00</p>
            <p className="sale-text">Sale price</p>
            <p className="sale-price">$1979.00</p>
            <p className="guarantee">Low Price Guarantee</p>
            
            <div className="specs-list">
              <strong>Size/Seating Capicity</strong>
              <p>77", 77", 32" / 6 Persons</p>
              <strong>Seating Design</strong>
              <p>Bucket, Lounge, Chair, Bench</p>
            </div>
            
            <button className="btn-red bold-add-btn">
               + ADD TO CART
            </button>
          </div>
          
          <div className="price-calculator">
            <h3>Price Calculator</h3>
            <div className="calc-group">
              <label>Interior Color:</label>
              <select><option>Select</option></select>
            </div>
            <div className="calc-group">
              <label>Quantity:</label>
              <input type="number" defaultValue={1} />
            </div>
            <div className="calc-total">
              Total Price: <strong>$650.00</strong>
            </div>
            <button className="btn-red center-btn">+ ADD TO CART</button>
          </div>
        </div>
      </div>
      
      <div className="related-items">
        <h3>Customers Who Viewed This Item Also</h3>
        <div className="related-grid">
           {[1,2,3,4].map(i => (
             <div className="rel-item" key={i}>
                <img src="https://via.placeholder.com/80?text=Rel" alt="rel"/>
                <div className="rel-info">
                  <p className="rel-price">$2,549.15</p>
                  <p className="rel-name">Bosch 22 Cu. Ft Stainless Refrigerator</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

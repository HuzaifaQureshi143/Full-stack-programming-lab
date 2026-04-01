import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="breadcrumb">
        Home &gt; Shopping Cart
      </div>
      
      <h2 className="cart-title">Shopping Cart</h2>
      
      <div className="cart-success-msg">
        ✔ The Cabaret 3 Person 41 Jet Hot Tub - 110 Volt Plug in was just added cart.
      </div>

      <div className="cart-list">
        <div className="cart-header">Items added: user_name <span className="items-total-text">Items total</span></div>
        
        <div className="cart-item">
          <img src="https://via.placeholder.com/80?text=Hot+Tub" alt="hot tub" className="cart-item-img" />
          <div className="cart-item-details">
            <h4 className="item-name">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</h4>
            <p className="item-desc">220 V/50 AMP - 4.5KW Heater 110 V/15 AMP - 1KW Heater/ convertible To 220 V / 4KW Heater</p>
          </div>
          <div className="cart-item-actions">
             <div className="qty-control">
               Quantity: <select defaultValue="10"><option value="10">10</option></select>
             </div>
             <p className="delivery-time">Standard ( 7 - 10 business days )</p>
          </div>
          <div className="cart-item-price">
             <strong>$9.00</strong>
             <div className="remove-links">
               <a href="#">Remove</a> | <a href="#">Edit Your Order</a>
             </div>
          </div>
        </div>

        <div className="cart-item">
          <img src="https://via.placeholder.com/80?text=Hot+Tub" alt="hot tub" className="cart-item-img" />
          <div className="cart-item-details">
            <h4 className="item-name">The Cabaret 3 Person 41 Jet Hot Tub-110 Volt Plug in or 220 Volt Version</h4>
            <p className="item-desc">220 V/50 AMP - 4.5KW Heater 110 V/15 AMP - 1KW Heater/ convertible To 220 V / 4KW Heater</p>
          </div>
          <div className="cart-item-actions">
             <div className="qty-control">
               Quantity: <select defaultValue="10"><option value="10">10</option></select>
             </div>
             <p className="delivery-time">Standard ( 7 - 10 business days )</p>
          </div>
          <div className="cart-item-price">
             <strong>$9.00</strong>
             <div className="remove-links">
               <a href="#">Remove</a> | <a href="#">Edit Your Order</a>
             </div>
          </div>
        </div>

        <div className="cart-summary">
           <div className="summary-text">Cart summary <span className="small-text">(2 items)</span></div>
           <div className="summary-total">Total: $21.00</div>
           
           <div className="cart-buttons">
             <button className="btn-light">CONTINUE SHOPPING</button>
             <button className="btn-red bold-btn">PROCEED TO CHECKOUT</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

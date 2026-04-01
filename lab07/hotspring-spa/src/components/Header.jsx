import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="top-bar-content">
          <span className="support-text">
            Call for Customer support: <span className="support-phone">020 38989565</span>
          </span>
          <nav className="top-nav">
            <Link to="/account">My Account</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/checkout">To Checkout</Link>
          </nav>
        </div>
      </div>
      
      <div className="main-header">
        <div className="main-header-content">
          <Link to="/" className="logo-area">
            <h1>HOTSPRING<sup className="reg-mark">&reg;</sup></h1>
            <span className="logo-subtext">Portable Spas</span>
          </Link>
          
          <div className="cart-widget">
            <div className="cart-icon-wrap">
              <ShoppingCart size={20} color="white" />
            </div>
            <div className="cart-info">
              <span>My Cart</span>
              <span className="cart-items">1 Items (s) <ChevronDown size={14} /></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="top-nav-row">
        <ul className="primary-nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/offers">SPECIAL OFFERS</Link></li>
          <li><Link to="/support">CUSTOMER SUPPORT</Link></li>
        </ul>
      </div>
      
      <div className="bottom-nav-row">
        <div className="bottom-nav-content">
          <ul className="secondary-nav">
            <li><Link to="/category">CATAGORY</Link></li>
            <li><Link to="/brand">BRAND</Link></li>
            <li><Link to="/info">INFO</Link></li>
          </ul>
          
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

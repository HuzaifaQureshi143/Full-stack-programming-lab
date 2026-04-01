import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col">
          <h3>CONTACT US</h3>
          <p>yoursitename.com</p>
          <p className="call-247">CALL 24/7: <span className="phone">888 - 201 - 8899</span></p>
          <p>Your Address:<br/>Street<br/>State & Zip Code<br/>City & Country</p>
          <p>Email: servicemail@yoursitename.com</p>
          <div className="social-links">
            <span className="social-icon twitter">t</span>
            <span className="social-icon facebook">f</span>
            <span className="social-icon linkedin">in</span>
            <span className="social-icon google">g+</span>
            <span className="social-icon youtube">yt</span>
            <span className="social-icon pinterest">p</span>
          </div>
        </div>

        <div className="footer-col">
          <h3>INFORMATION</h3>
          <ul>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>
            <li><Link to="/privacy">PRIVACY POLICY</Link></li>
            <li><Link to="/sitemap">SITE MAP</Link></li>
            <li><Link to="/search-terms">SEARCH TERMS</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li><Link to="/login">SIGN IN</Link></li>
            <li><Link to="/cart">VIEW CART</Link></li>
            <li><Link to="/wishlist">MY WISHLIST</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>SIGNUP FOR A NEWS LETER</h3>
          <p>SIGN UP FOR OUR NEWS LETTER:</p>
          <div className="newsletter-form">
            <input type="email" placeholder="" />
          </div>
          <h3 className="mt-20">PAYMENT SOLUTIONS</h3>
          <div className="payment-icons">
            <div className="pay-icon maestro">M</div>
            <div className="pay-icon mastercard">MC</div>
            <div className="pay-icon amex">AX</div>
            <div className="pay-icon visa">V</div>
            <div className="pay-icon paypal">PP</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2014 Hottubspaservice.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

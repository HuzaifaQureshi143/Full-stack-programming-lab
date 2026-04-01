import React from 'react';
import './Auth.css';

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="breadcrumb">
        Home &gt; My Account
      </div>

      <h2 className="auth-title">Login Or Creat Account</h2>

      <div className="auth-container-box">
        <div className="auth-left">
          <h3>User Login Details</h3>
          <p className="auth-subtitle">Please sign in below wih your login information.</p>
          <p className="req-fields">*Required Fields</p>
          
          <form className="auth-form">
            <div className="form-group">
              <label>Email <span className="req">*</span></label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Password <span className="req">*</span></label>
              <input type="password" />
            </div>
            
            <div className="remember-row">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me th next time i visit</label>
            </div>
            
            <div className="action-row">
              <button type="button" className="btn-red bold-btn signin-btn">SIGN IN</button>
              <a href="#" className="forgot-link">Forgor your password?</a>
            </div>
          </form>
        </div>

        <div className="auth-divider"></div>

        <div className="auth-right">
          <h3>New Customer</h3>
          <p className="registered-text">As a registered Abt.com customer you can:</p>
          <ul className="benefit-list">
            <li>Stpre billing & shipping information</li>
            <li>Check your order status</li>
            <li>Track your delivery Status</li>
            <li>View your order history</li>
          </ul>
          
          <button className="btn-red bold-btn create-acc-btn">CREATE NEW ACCOUNT</button>
        </div>
      </div>
      
      {/* Reusing the related items section block visually here */}
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

export default Auth;

import React from 'react';
import './BrandsRow.css';

const BrandsRow = () => {
  return (
    <div className="brands-row-container">
      <div className="brand-item save-1000s">
        <h2>SAVE $1,000'S</h2>
        <p>ON THE TOP SPA BRANDS</p>
        <span className="huge-discounts">HUGE DISCOUNTS<br/>AND SPECIAL OFFERS ONLY AT THE SHOW!</span>
      </div>
      <div className="brand-item oceanic">
        <span className="brand-logo oceanic-text">OCEANICSpa</span>
      </div>
      <div className="brand-item caldera">
        <span className="brand-logo caldera-text">CalderaSpas</span>
      </div>
      <div className="brand-item island">
        <span className="brand-logo island-text">IslandSpas<br/><small>by ARTESIAN</small></span>
      </div>
    </div>
  );
};

export default BrandsRow;

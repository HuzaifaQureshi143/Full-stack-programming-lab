import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">
<div class="main-wrapper">
<div class="content-box">
  <div class="breadcrumb"><a href="/">Home</a> &gt; Spa Collections</div>
  <div class="page-card" style="padding:15px; border-radius: 12px; box-shadow: var(--shadow);">
    <div class="category-layout">
      <div class="sidebar">
        <h3>Filter Sanctuary</h3>
        <div class="filter-group">
          <h4>Seating Capacity</h4>
          <ul>
            <li class="active"><a href="#">Intimate (2-4 People)</a></li>
            <li><a href="#">Social (5-7 People)</a></li>
            <li><a href="#">Elite (8+ People)</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>Dimensions</h4>
          <ul>
            <li><a href="#">Compact (5-6 ft)</a></li>
            <li><a href="#">Standard (6-7 ft)</a></li>
            <li><a href="#">Spacious (7-8 ft)</a></li>
            <li><a href="#">Estate (8 ft+)</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>Collection Tier</h4>
          <ul>
            <li><a href="#">Essential Series</a></li>
            <li><a href="#">Entertainment Plus</a></li>
            <li><a href="#">Medical-Grade Pro</a></li>
            <li><a href="#">Sustainable Eco</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>Investment</h4>
          <ul>
            <li><a href="#">Under $3,000</a></li>
            <li><a href="#">$3,000 - $5,000</a></li>
            <li><a href="#">$5,000 - $7,000</a></li>
            <li><a href="#">Premium ($7,000+)</a></li>
          </ul>
        </div>
      </div>

      <div class="products-area">
        <h3 style="font-size:20px; font-weight:800; color:var(--primary); margin-bottom:20px;">Elite Collection</h3>
        <div class="toolbar" style="background: var(--bg); padding: 10px; border-radius: 8px; margin-bottom: 20px;">
          <span>8 Premium Models Found</span>
          <span>Sort By: <select style="padding: 5px; border-radius: 4px; border: 1px solid var(--border);"><option>Newest Arrivals</option><option>Price: Low to High</option><option>Most Popular</option></select></span>
        </div>
        <div class="category-grid">
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=400&h=280&fit=crop&q=80" alt="Azure Oasis Pro">
            <div class="p-name">Azure Oasis Pro</div>
            <div class="p-desc">Signature 60-jet system with multi-colored LED waterfall.</div>
            <div class="p-price">$3,499.00</div>
            <button class="btn-cart" onclick="addToCart('Azure Oasis Pro',3499)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1544161515-4af6b1d46afc?w=400&h=280&fit=crop&q=80" alt="Crimson Echo 4">
            <div class="p-name">Crimson Echo 4</div>
            <div class="p-desc">High-fidelity audio integrated with 40 therapeutic jets.</div>
            <div class="p-price">$2,899.00</div>
            <button class="btn-cart" onclick="addToCart('Crimson Echo 4',2899)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?w=400&h=280&fit=crop&q=80" alt="Nebula Dream">
            <div class="p-name">Nebula Dream</div>
            <div class="p-desc">Zero-gravity seating for an weightless relaxation experience.</div>
            <div class="p-price">$4,199.00</div>
            <button class="btn-cart" onclick="addToCart('Nebula Dream',4199)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=280&fit=crop&q=80" alt="Zenith Alpha">
            <div class="p-name">Zenith Alpha</div>
            <div class="p-desc">Our flagship model with 120 jets and Smart-Heat™ control.</div>
            <div class="p-price">$6,200.00</div>
            <button class="btn-cart" onclick="addToCart('Zenith Alpha',6200)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=400&h=280&fit=crop&q=80" alt="Solaris Prime">
            <div class="p-name">Solaris Prime</div>
            <div class="p-desc">Energy-efficient heating for year-round luxury enjoyment.</div>
            <div class="p-price">$3,850.00</div>
            <button class="btn-cart" onclick="addToCart('Solaris Prime',3850)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=400&h=280&fit=crop&q=80" alt="Aurora Pulse">
            <div class="p-name">Aurora Pulse</div>
            <div class="p-desc">Compact 3-person spa perfect for balconies and patios.</div>
            <div class="p-price">$2,450.00</div>
            <button class="btn-cart" onclick="addToCart('Aurora Pulse',2450)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">WISHLIST</a><a href="product.html">DETAILS</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="also-viewed" style="margin-top:40px; padding-top: 30px; border-top: 2px solid var(--border);">
      <h3 style="font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 20px;">Curated For You</h3>
      <div style="position:relative;overflow:hidden;">
        <button class="av-nav prev">&lsaquo;</button>
        <div class="also-viewed-slider" style="padding:0 25px; display: flex; gap: 20px;">
          <div class="av-item"><img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=100&h=80&fit=crop&q=80" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$1,299</div><div class="av-name">Crimson Mini-Step</div><div style="font-size:10px;color:var(--text-muted);">Accessory Pack A1</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=100&h=80&fit=crop&q=80" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$349</div><div class="av-name">PureStream Filter Kit</div><div style="font-size:10px;color:var(--text-muted);">Maintenance Pack</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=100&h=80&fit=crop&q=80" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$599</div><div class="av-name">Thermal Shield Cover</div><div style="font-size:10px;color:var(--text-muted);">Energy Saver Edition</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=100&h=80&fit=crop&q=80" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$899</div><div class="av-name">Smart-Heat Controller</div><div style="font-size:10px;color:var(--text-muted);">WiFi Upgrade Kit</div></div></div>
        </div>
        <button class="av-nav next">&rsaquo;</button>
      </div>
    </div>
  </div>
</div>
</div>

</div>
`;

export default function CategoryPage() {
  return <HtmlBlock html={html} />;
}

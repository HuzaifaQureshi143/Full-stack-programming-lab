import HtmlBlock from '../components/HtmlBlock';

const html = `
<div class="hero-slider">
  <div class="slide active">
    <div class="slide-text">
      <h2>Zenith Hydro-Spa X1<br>The Pinnacle of Relaxation</h2>
      <p>Unrivaled 158-Jet System with Multi-Zone Hydrotherapy. Featuring Smart-Heat™ technology and CrystalClear filtration.</p>
      <div class="price">$5,899.00</div>
      <button class="btn-details" onclick="navigate('pages/product.html')">Explore Features</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&h=500&fit=crop&q=85" alt="Luxury Zenith Spa">
    </div>
  </div>
  <div class="slide">
    <div class="slide-text">
      <h2>Azure Oasis Elite<br>8-Person Social Hub</h2>
      <p>The ultimate entertainment spa with built-in Bluetooth audio, LED waterfall, and ergonomic seating for the whole family.</p>
      <div class="price">$4,299.00</div>
      <button class="btn-details" onclick="navigate('pages/product.html')">View Specifications</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop&q=85" alt="Azure Oasis">
    </div>
  </div>
  <div class="slide">
    <div class="slide-text">
      <h2>Grand Opening Sale<br>Exclusive 40% Off</h2>
      <p>Transform your backyard into a private sanctuary today. Limited time offers on our entire Crimson series.</p>
      <div class="price">Starting at $2,499.00</div>
      <button class="btn-details" onclick="navigate('pages/category.html')">Shop the Sale</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=800&h=500&fit=crop&q=85" alt="Crimson Sale">
    </div>
  </div>
  <div class="slider-dots">
    <span class="active" onclick="showSlide(0)"></span>
    <span onclick="showSlide(1)"></span>
    <span onclick="showSlide(2)"></span>
  </div>
</div>

<div class="promo-banners">
  <div class="promo-banner">
    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?w=600&h=400&fit=crop&q=80" alt="Family Spas">
    <h3>Family Edition</h3>
    <p>Spacious designs for bonding and relaxation.</p>
  </div>
  <div class="promo-banner">
    <img src="https://images.unsplash.com/photo-1544161515-4af6b1d46afc?w=600&h=400&fit=crop&q=80" alt="Therapy Spas">
    <h3>Therapeutic Pro</h3>
    <p>Targeted relief for active lifestyles.</p>
  </div>
  <div class="promo-banner red">
    <h3>Royal Savings</h3>
    <p>Save up to $1,500 on selected premium models this month.</p>
  </div>
</div>

<div class="container">
  <div class="section-title">New Arrivals</div>
  <div class="product-grid">
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=300&fit=crop&q=80" alt="Crimson Pulse V8">
      <div class="p-name">Crimson Pulse V8</div>
      <div class="p-desc">High-performance jets with deep-tissue massage capabilities.</div>
      <div class="p-price">$899.00</div>
      <button class="btn-cart" onclick="addToCart('Crimson Pulse V8',899)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=300&fit=crop&q=80" alt="Titan Ultra-Jet Pro">
      <div class="p-name">Titan Ultra-Jet Pro</div>
      <div class="p-desc">Unmatched power and durability for the ultimate spa experience.</div>
      <div class="p-price">$1,200.00</div>
      <button class="btn-cart" onclick="addToCart('Titan Ultra-Jet Pro',1200)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1570654639102-bdd95eeece7a?w=400&h=300&fit=crop&q=80" alt="Lumina Serenity">
      <div class="p-name">Lumina Serenity</div>
      <div class="p-desc">Atmospheric lighting and whisper-quiet operation for pure peace.</div>
      <div class="p-price">$750.00</div>
      <button class="btn-cart" onclick="addToCart('Lumina Serenity',750)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=300&fit=crop&q=80" alt="Aurora Thermal Peak">
      <div class="p-name">Aurora Thermal Peak</div>
      <div class="p-desc">Superior insulation designed for the coldest winter nights.</div>
      <div class="p-price">$1,450.00</div>
      <button class="btn-cart" onclick="addToCart('Aurora Thermal Peak',1450)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1560185008-b033106af5c3?w=400&h=300&fit=crop&q=80" alt="Nebula Cloud-Bath">
      <div class="p-name">Nebula Cloud-Bath</div>
      <div class="p-desc">Soft-touch surfaces and cloud-like foam seating.</div>
      <div class="p-price">$950.00</div>
      <button class="btn-cart" onclick="addToCart('Nebula Cloud-Bath',950)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=400&h=300&fit=crop&q=80" alt="Solaris Heat Wave">
      <div class="p-name">Solaris Heat Wave</div>
      <div class="p-desc">Solar-assisted heating for maximum energy efficiency.</div>
      <div class="p-price">$1,100.00</div>
      <button class="btn-cart" onclick="addToCart('Solaris Heat Wave',1100)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=300&fit=crop&q=80" alt="Zenith Compact">
      <div class="p-name">Zenith Compact</div>
      <div class="p-desc">The power of Zenith in a space-saving 2-person footprint.</div>
      <div class="p-price">$2,899.00</div>
      <button class="btn-cart" onclick="addToCart('Zenith Compact',2899)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop&q=80" alt="Azure Mini">
      <div class="p-name">Azure Mini</div>
      <div class="p-desc">Portable luxury that goes wherever you do.</div>
      <div class="p-price">$1,599.00</div>
      <button class="btn-cart" onclick="addToCart('Azure Mini',1599)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">WISHLIST</a><a href="pages/product.html">DETAILS</a></div>
    </div>
  </div>
</div>

`;

export default function HomePage() {
  return <HtmlBlock html={html} />;
}

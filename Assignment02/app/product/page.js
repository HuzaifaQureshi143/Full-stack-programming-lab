import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div style="font-size:13px; color:var(--text-muted); margin-bottom:10px;">
  <a href="/" style="color:var(--primary); font-weight: 600;">Home</a> / <a href="/category" style="color:var(--primary); font-weight: 600;">Elite Collection</a> / Zenith Alpha
</div>
<h1 style="font-size:32px; font-weight:900; color:var(--text); margin-bottom:20px; line-height:1.2;">Zenith Alpha Ultra-Lounge™ Spa</h1>

<div class="page-card" style="padding:0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow);">
  <div style="display:flex; gap:30px; padding:30px;">
    <div class="product-images" style="flex: 0 0 450px;">
      <div class="main-img">
        <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=600&h=450&fit=crop&q=85" alt="Zenith Alpha" class="product-main-img" style="width:100%; height:350px; object-fit:cover; border-radius: 8px;">
      </div>
      <p style="font-size:12px; color:var(--text-muted); text-align:center; margin:10px 0;">Interactive 360° View Enabled</p>
      <div class="thumbs" style="display: flex; gap: 10px; justify-content: center;">
        <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=100&h=80&fit=crop&q=85" alt="" style="border:2px solid var(--primary); border-radius: 4px;">
        <img src="https://images.unsplash.com/photo-1544161515-4af6b1d46afc?w=100&h=80&fit=crop&q=85" alt="" style="border-radius: 4px;">
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?w=100&h=80&fit=crop&q=85" alt="" style="border-radius: 4px;">
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=100&h=80&fit=crop&q=85" alt="" style="border-radius: 4px;">
      </div>
    </div>

    <div class="product-info" style="flex:1;">
      <div class="stars" style="color:var(--accent); font-size: 20px;">&#9733;&#9733;&#9733;&#9733;&#9733; <span style="font-size:14px; color:var(--text-muted);">(48 reviews)</span></div>
      <div class="meta" style="margin: 10px 0; font-size: 14px; color: var(--text-muted);">Model: <strong>ZA-UL-2026</strong> | SKU: <strong>8252258</strong></div>
      
      <div style="margin: 20px 0;">
        <div class="retail" style="text-decoration: line-through; color: var(--text-muted); font-size: 16px;">MSRP: $7,499.00</div>
        <div class="sale-price" style="font-size: 42px; font-weight: 900; color: var(--primary); margin: 5px 0;">$6,200.00</div>
        <div class="guarantee" style="color: #2e7d32; font-weight: 600; font-size: 14px;">✓ Best Price Guaranteed</div>
      </div>

      <table class="spec-table" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 10px 0; font-weight: 700; color: var(--text);">Capacity</td><td style="padding: 10px 0; color: var(--text-muted);">8 Adults | Ultra-Lounge™ Seating</td></tr>
        <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 10px 0; font-weight: 700; color: var(--text);">Jet System</td><td style="padding: 10px 0; color: var(--text-muted);">120 High-Pressure Massage Jets</td></tr>
        <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 10px 0; font-weight: 700; color: var(--text);">Water Volume</td><td style="padding: 10px 0; color: var(--text-muted);">450 Gallons / 1,700 Liters</td></tr>
        <tr style="border-bottom: 1px solid var(--border);"><td style="padding: 10px 0; font-weight: 700; color: var(--text);">Automation</td><td style="padding: 10px 0; color: var(--text-muted);">Smart-Heat™ Mobile Integration</td></tr>
      </table>

      <div class="stock" style="color: #2e7d32; font-weight: 700; margin-bottom: 20px;">● Ready for White-Glove Delivery</div>
      <button class="btn-addcart" onclick="addToCart('Zenith Alpha Ultra-Lounge', 6200)" style="width: 100%; padding: 18px; font-size: 18px;">ADD TO SANCTUARY</button>
    </div>
  </div>

  <div style="padding:0 30px 30px;">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,0)">Sophistication</div>
      <div class="tab" onclick="switchTab(this,1)">Technical Specs</div>
      <div class="tab" onclick="switchTab(this,2)">Accessories</div>
      <div class="tab" onclick="switchTab(this,3)">Guest Reviews</div>
    </div>
    <div class="tab-content" id="tab-0" style="padding-top: 20px;">
      <h4 style="font-size:18px; font-weight:700; margin-bottom:15px; color: var(--primary);">Crafted for the Connoisseur</h4>
      <p style="font-size:15px; color:var(--text-muted); line-height: 1.8;">The Zenith Alpha Ultra-Lounge™ is more than a spa; it is a statement. Featuring our signature Royal Crimson shell finish and hand-crafted wood-grain cabinet, this model represents the absolute peak of Crimson Spa engineering.</p>
      <p style="font-size:15px; color:var(--text-muted); line-height: 1.8; margin-top: 15px;">Every jet is strategically placed to target key muscle groups, providing a therapeutic experience that rivals the world's finest luxury resorts. With the integrated Smart-Heat™ system, you can prepare your sanctuary from your smartphone, ensuring the perfect temperature awaits your arrival.</p>
    </div>
    <div class="tab-content hidden" id="tab-1" style="padding-top: 20px;">
      <p style="font-size:15px; color:var(--text-muted);">Full technical manual and installation guides are available in the resources section.</p>
    </div>
  </div>
</div>

<div class="also-viewed" style="margin-top:40px; padding-top: 30px; border-top: 2px solid var(--border);">
  <h3 style="font-size: 20px; font-weight: 800;">Recommended Sanctuary Additions</h3>
  <div style="position:relative; overflow:hidden; margin-top: 20px;">
    <button class="av-nav prev">&lsaquo;</button>
    <div class="also-viewed-slider" style="padding:0 25px; display: flex; gap: 20px;">
      <div class="av-item"><img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=100&h=80&fit=crop&q=80" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$599</div><div class="av-name">Crimson Thermal Guard</div><div style="font-size:10px; color:var(--text-muted);">Energy Efficient Cover</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=100&h=80&fit=crop&q=85" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$3,899</div><div class="av-name">Azure Oasis Compact</div><div style="font-size:10px; color:var(--text-muted);">Social Collection</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=100&h=80&fit=crop&q=85" alt="" style="border-radius: 8px;"><div class="av-info"><div class="av-price">$899</div><div class="av-name">Hydro-Massage Kit Pro</div><div style="font-size:10px; color:var(--text-muted);">Upgrade Tier 2</div></div></div>
    </div>
    <button class="av-nav next">&rsaquo;</button>
  </div>
</div>

</div>
</div>


</div>
</div>
`;

export default function ProductPage() {
  return <HtmlBlock html={html} />;
}

import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Sanctuary Cart</div>
<h2 class="page-title">Your Sanctuary Selections</h2>
<div class="page-card" style="padding: 40px;">
  <div class="cart-success" style="background: #e8f5e9; color: #2e7d32; padding: 15px; border-radius: 8px; margin-bottom: 25px; font-weight: 600;">
    &#10003; The Zenith Alpha Ultra-Lounge™ has been secured in your cart.
  </div>

  <table class="cart-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
    <thead>
        <tr style="border-bottom: 2px solid var(--border); text-align: left;">
            <th style="padding: 15px;">Sanctuary Item</th>
            <th style="padding: 15px;">Configuration</th>
            <th style="padding: 15px;">Quantity</th>
            <th style="padding: 15px;">Total Investment</th>
        </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 15px; width: 120px;">
            <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=120&h=90&fit=crop&q=80" alt="Zenith Alpha" style="border-radius: 8px;">
        </td>
        <td style="padding: 15px;">
          <div class="item-name" style="font-weight: 800; color: var(--text);">Zenith Alpha Ultra-Lounge™ Spa</div>
          <div class="item-desc" style="font-size: 13px; color: var(--text-muted); margin: 5px 0;">120-Jet System | Royal Crimson Shell | Smart-Heat™ Enabled</div>
          <div class="item-links" style="font-size: 12px;"><a href="#" style="color: var(--primary);">Remove</a> | <a href="#" style="color: var(--primary);">Save for Later</a></div>
        </td>
        <td style="padding: 15px;">
          <select style="padding: 5px; border-radius: 4px; border: 1px solid var(--border);"><option>1</option><option>2</option></select>
        </td>
        <td style="padding: 15px; font-weight: 800; color: var(--primary);">$6,200.00</td>
      </tr>
    </tbody>
  </table>

  <div class="cart-summary" style="background: var(--bg); padding: 30px; border-radius: 12px; text-align: right; margin-bottom: 30px;">
    <div style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">Subtotal: $6,200.00</div>
    <div style="font-size: 14px; color: #2e7d32; margin-bottom: 15px;">Concierge Delivery: FREE</div>
    <div style="font-size: 24px; font-weight: 900; color: var(--text);">Total: $6,200.00</div>
  </div>

  <div class="cart-actions" style="display: flex; justify-content: space-between; gap: 20px;">
    <button class="btn-continue" onclick="location.href='/category'" style="padding: 15px 30px; border-radius: 8px; border: 1px solid var(--border); background: #fff; font-weight: 700; cursor: pointer;">EXPLORE MORE</button>
    <button class="btn-checkout" onclick="location.href='/payment'" style="padding: 15px 50px; border-radius: 8px; border: none; background: var(--primary); color: #fff; font-weight: 800; cursor: pointer; box-shadow: var(--shadow);">PROCEED TO SECURE CHECKOUT</button>
  </div>

  <div class="also-viewed" style="margin-top:50px; padding-top: 30px; border-top: 2px solid var(--border);">
    <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 25px;">Enhance Your Sanctuary</h3>
    <div style="display: flex; gap: 20px;">
        <div class="av-item" style="flex: 1; text-align: center;">
            <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200&h=150&fit=crop&q=80" alt="Cover" style="border-radius: 12px; width: 100%; margin-bottom: 10px;">
            <div style="font-weight: 700; font-size: 14px;">Thermal Guard Cover</div>
            <div style="color: var(--primary); font-weight: 800;">$599.00</div>
        </div>
        <div class="av-item" style="flex: 1; text-align: center;">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=150&fit=crop&q=80" alt="Steps" style="border-radius: 12px; width: 100%; margin-bottom: 10px;">
            <div style="font-weight: 700; font-size: 14px;">Crimson Entry Steps</div>
            <div style="color: var(--primary); font-weight: 800;">$249.00</div>
        </div>
        <div class="av-item" style="flex: 1; text-align: center;">
            <img src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=200&h=150&fit=crop&q=80" alt="Filter" style="border-radius: 12px; width: 100%; margin-bottom: 10px;">
            <div style="font-weight: 700; font-size: 14px;">PureStream Filter Pack</div>
            <div style="color: var(--primary); font-weight: 800;">$349.00</div>
        </div>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function CartPage() {
  return <HtmlBlock html={html} />;
}

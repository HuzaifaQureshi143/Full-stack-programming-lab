import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; <a href="/account">Account</a> &gt; Order Tracking</div>
<h2 class="page-title">Order Tracking: #CS-8821</h2>
<div class="page-card" style="padding: 40px;">
  <div class="order-meta" style="background: var(--bg); padding: 20px; border-radius: 12px; margin-bottom: 30px; font-weight: 600; color: var(--text);">
    Your order was secured on <span style="color: var(--primary);">May 15, 2026</span> and is currently <span style="background: #e3f2fd; color: #1976d2; padding: 4px 10px; border-radius: 20px; font-size: 12px;">Under White-Glove Preparation</span>.
  </div>

  <div class="order-block" style="margin-bottom: 40px;">
    <h3 style="font-size: 18px; font-weight: 800; color: var(--primary); margin-bottom: 20px;">Sanctuary Specifications</h3>
    <table class="order-table" style="width: 100%; border-collapse: collapse;">
      <thead style="text-align: left; background: var(--bg);">
        <tr><th style="padding: 15px;">Sanctuary Item</th><th style="padding: 15px;">Quantity</th><th style="padding: 15px;">Investment</th></tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 15px;"><a href="/product" style="color: var(--text); font-weight: 700;">Zenith Alpha Ultra-Lounge™ Spa</a></td>
          <td style="padding: 15px;">1</td>
          <td style="padding: 15px; font-weight: 700; color: var(--primary);">$6,200.00</td>
        </tr>
        <tr style="background: var(--bg); font-weight: 700;">
          <td colspan="2" style="padding: 15px; text-align: right;">Total Investment:</td>
          <td style="padding: 15px; color: var(--primary);">$6,200.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="three-col" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px;">
    <div style="background: var(--bg); padding: 20px; border-radius: 12px;">
      <h4 style="font-weight: 800; margin-bottom: 15px;">Concierge Details</h4>
      <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);"><strong>Name:</strong> John Doe<br><strong>Email:</strong> john@example.com<br><strong>Phone:</strong> +1 (555) 000-0000</p>
    </div>
    <div style="background: var(--bg); padding: 20px; border-radius: 12px;">
      <h4 style="font-weight: 800; margin-bottom: 15px;">Billing Concierge</h4>
      <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);">123 Serenity Drive<br>Luxury Estates<br>Beverly Hills, CA 90210</p>
    </div>
    <div style="background: var(--bg); padding: 20px; border-radius: 12px;">
      <h4 style="font-weight: 800; margin-bottom: 15px;">Installation Site</h4>
      <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);">123 Serenity Drive<br>Luxury Estates<br>Beverly Hills, CA 90210</p>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function OrderDetailsPage() {
  return <HtmlBlock html={html} />;
}

import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; <a href="/account">Account</a> &gt; Order Summary</div>
<h2 class="page-title">Sanctuary Secured</h2>
<div class="page-card" style="padding: 40px; text-align: center;">
  <div class="order-success-icon" style="font-size: 60px; color: #2e7d32; margin-bottom: 20px;">
    ✓
  </div>
  <h3 style="font-size: 24px; font-weight: 800; color: var(--primary); margin-bottom: 15px;">Your Sanctuary is Reserved</h3>
  <p style="color: var(--text-muted); margin-bottom: 40px;">Order #CS-8821 has been successfully received. A confirmation email has been sent to your concierge address.</p>

  <div class="order-block" style="text-align: left; background: var(--bg); padding: 30px; border-radius: 12px; margin-bottom: 40px;">
    <h4 style="font-weight: 800; margin-bottom: 15px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">Investment Summary</h4>
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <span>Order Number:</span>
        <strong>#CS-8821</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <span>Date:</span>
        <strong>May 15, 2026</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
        <span>Total Investment:</span>
        <strong style="color: var(--primary);">$6,200.00</strong>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 15px; font-size: 13px; color: var(--text-muted);">
        <span>Payment Method:</span>
        <span>Secure Card Payment</span>
    </div>
  </div>

  <div class="next-steps" style="text-align: left; margin-bottom: 40px;">
    <h4 style="font-weight: 800; margin-bottom: 15px;">Next Steps for Your Sanctuary</h4>
    <ul style="color: var(--text-muted); font-size: 14px; line-height: 1.8; list-style: none; padding: 0;">
        <li>● Our White-Glove team will review your installation site requirements.</li>
        <li>● You will receive a call within 2 hours to schedule your delivery window.</li>
        <li>● Professional installation and initial training will take approximately 4 hours.</li>
    </ul>
  </div>

  <div style="display: flex; justify-content: center; gap: 20px;">
    <button class="btn-primary" onclick="location.href='/account'" style="padding: 15px 30px;">TRACK ORDER</button>
    <button class="btn-continue" onclick="location.href='/category'" style="padding: 15px 30px; background: none; border: 1px solid var(--border); font-weight: 700; cursor: pointer;">CONTINUE SHOPPING</button>
  </div>
</div>

</div>
</div>

`;

export default function OrderSummaryPage() {
  return <HtmlBlock html={html} />;
}

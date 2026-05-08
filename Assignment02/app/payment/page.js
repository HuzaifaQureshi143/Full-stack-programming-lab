import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Secure Sanctuary Checkout</div>
<h2 class="page-title">Finalize Your Sanctuary</h2>
<div class="page-card" style="padding: 40px;">
  <div class="payment-layout" style="display: flex; gap: 40px;">
    <div class="payment-left" style="flex: 1.2;">
      <div class="payment-step-title" style="font-size: 18px; font-weight: 800; color: var(--primary); margin-bottom: 25px; border-bottom: 2px solid var(--border); padding-bottom: 10px;">
        Step 1. &nbsp; <span style="color: var(--text);">Installation & Billing</span>
      </div>
      <form id="payment-form">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div class="form-row"><label>First Name <span class="req">*</span></label><input type="text" placeholder="John" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
            <div class="form-row"><label>Last Name <span class="req">*</span></label><input type="text" placeholder="Doe" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        </div>
        <div class="form-row" style="margin: 15px 0;"><label>Email Address <span class="req">*</span></label><input type="email" placeholder="john@example.com" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        <div class="form-row" style="margin-bottom: 15px;"><label>Phone Number <span class="req">*</span></label><input type="tel" placeholder="+1 (555) 000-0000" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        <div class="form-row" style="margin-bottom: 15px;"><label>Installation Address <span class="req">*</span></label><input type="text" placeholder="Street address" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div class="form-row"><label>City <span class="req">*</span></label><input type="text" placeholder="City" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
            <div class="form-row"><label>State <span class="req">*</span></label><input type="text" placeholder="State" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
            <div class="form-row"><label>Zip Code <span class="req">*</span></label><input type="text" placeholder="00000" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        </div>
        <div style="margin-top: 10px;"><label style="font-size: 14px; cursor: pointer;"><input type="checkbox" checked> Billing address is same as installation</label></div>
      </form>
    </div>

    <div class="payment-right" style="flex: 1; background: var(--bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border);">
      <div class="payment-step-title" style="font-size: 18px; font-weight: 800; color: var(--primary); margin-bottom: 25px; border-bottom: 2px solid var(--border); padding-bottom: 10px;">
        Step 2. &nbsp; <span style="color: var(--text);">Secure Payment</span>
      </div>
      <form id="card-form">
        <div class="card-row" style="margin-bottom: 15px;"><label>Cardholder Name <span class="req">*</span></label><input type="text" placeholder="NAME ON CARD" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        <div class="card-row" style="margin-bottom: 15px;"><label>Card Number <span class="req">*</span></label><input type="text" placeholder="0000 0000 0000 0000" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div class="card-row"><label>Expiration <span class="req">*</span></label><input type="text" placeholder="MM/YY" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
            <div class="card-row"><label>Security Code <span class="req">*</span></label><input type="text" placeholder="CVC" required style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
        </div>
        
        <div class="order-summary" style="margin-top: 30px; border-top: 2px dashed var(--border); padding-top: 20px;">
            <h4 style="margin-bottom: 15px;">Order Review</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px;">
                <span>Zenith Alpha Ultra-Lounge™</span>
                <strong>$6,200.00</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px;">
                <span>White-Glove Installation</span>
                <strong style="color: #2e7d32;">FREE</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 20px; font-size: 20px; font-weight: 900; color: var(--primary);">
                <span>Total Investment</span>
                <span>$6,200.00</span>
            </div>
        </div>

        <div style="margin: 25px 0;"><label style="font-size: 12px; color: var(--text-muted);"><input type="checkbox" required> I agree to the <a href="#" style="color: var(--primary);">Premium Terms of Sanctuary Service</a></label></div>
        
        <button class="btn-place-order" type="button" onclick="alert('Thank you for your investment. Our White-Glove team will contact you within 2 hours to schedule installation.')" style="width: 100%; padding: 18px; font-size: 18px; background: var(--primary); color: #fff; border: none; border-radius: 8px; font-weight: 800; cursor: pointer; box-shadow: var(--shadow);">
            PLACE SECURE ORDER
        </button>
      </form>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function PaymentPage() {
  return <HtmlBlock html={html} />;
}

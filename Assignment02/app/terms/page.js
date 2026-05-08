import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Legal &gt; Terms of Sanctuary</div>
<h2 class="page-title">Terms of Sanctuary</h2>
<div class="page-card" style="padding: 40px;">
  <div class="terms-content" style="color: var(--text-muted); font-size: 14px; line-height: 1.7;">
    <h3 style="font-size: 20px; font-weight: 800; color: var(--primary); margin-bottom: 20px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">General Terms and Conditions</h3>
    <p style="margin-bottom: 20px;">These terms govern the purchase, delivery, and professional installation of Crimson Spas hydrotherapy systems.</p>
    
    <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px;">1. Interpretation</h3>
    <p style="margin-bottom: 20px;">
    <strong>'the Company'</strong> means Crimson Spas Global Ltd.<br>
    <strong>'the Buyer'</strong> means the individual or entity investing in sanctuary goods from the Company.<br>
    <strong>'the Goods'</strong> means the luxury hydrotherapy units and bespoke services provided.
    </p>

    <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px;">2. Investment and Title</h3>
    <p style="margin-bottom: 20px;">
    a) Risk passes to the customer upon completion of our professional White-Glove installation.<br>
    b) Crimson Spas remains the sole owner of the Goods until full investment payment is received and cleared.
    </p>

    <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px;">3. Concierge Delivery</h3>
    <p style="margin-bottom: 20px;">
    a) All installation windows are estimates. We prioritize precision and safety over speed.<br>
    b) Delivery within our primary service zones includes full White-Glove setup and initial water treatment training.
    </p>

    <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px;">4. Sanctuary Guarantee</h3>
    <p style="margin-bottom: 20px;">
    Crimson Spas offers a 30-day sanctuary satisfaction guarantee. If your chosen model does not meet your relaxation expectations, our concierge team will facilitate an exchange for a different tier (subject to logistical fees).
    </p>

    <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 10px;">5. Jurisdiction</h3>
    <p>All contracts are subject to international luxury trade standards and the laws of the operating region.</p>
  </div>
</div>

</div>
</div>

`;

export default function TermsPage() {
  return <HtmlBlock html={html} />;
}

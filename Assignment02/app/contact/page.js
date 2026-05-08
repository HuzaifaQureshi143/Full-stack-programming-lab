import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Concierge Support &gt; Reach Out</div>
<h2 class="page-title">Concierge Support</h2>
<div class="page-card" style="display: flex; gap: 40px; padding: 40px;">
  <div class="form-section" style="flex: 1;">
    <h3 style="font-size: 22px; color: var(--primary); margin-bottom: 15px;">How Can We Assist?</h3>
    <p style="color: var(--text-muted); margin-bottom: 25px;">Whether you are designing a new backyard sanctuary or need technical support for your existing Crimson spa, our specialists are ready to help.</p>
    
    <div class="contact-info" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
      <div class="contact-col">
        <h4 style="font-weight: 700; margin-bottom: 10px;">Flagship Experience Center</h4>
        <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);">777 Relaxation Way<br>Serenity Hills, CA 90210<br>United States</p>
      </div>
      <div class="contact-col">
        <h4 style="font-weight: 700; margin-bottom: 10px;">Direct Concierge</h4>
        <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted);">Phone: 1-888-CRIMSON<br>Email: support@crimson-spas.luxury</p>
      </div>
    </div>

    <form id="contact-form" style="background: var(--bg); padding: 25px; border-radius: 12px;">
      <div class="form-row"><label>Full Name <span class="req">*</span></label><input type="text" placeholder="Your name" required style="flex: 1; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
      <div class="form-row" style="margin: 15px 0;"><label>Email Address <span class="req">*</span></label><input type="email" placeholder="email@example.com" required style="flex: 1; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
      <div class="form-row" style="margin-bottom: 15px;"><label>Subject <span class="req">*</span></label><input type="text" placeholder="How can we help?" required style="flex: 1; padding: 10px; border-radius: 6px; border: 1px solid var(--border);"></div>
      <div class="form-row"><label>Message</label><textarea placeholder="Tell us more about your needs..." style="flex: 1; height: 120px; padding: 10px; border-radius: 6px; border: 1px solid var(--border); font-family: inherit;"></textarea></div>
      <div style="margin-top: 20px; text-align: right;">
        <button class="btn-primary" type="button" onclick="alert('Thank you for reaching out. A Crimson specialist will contact you within 24 hours.')" style="padding: 12px 30px;">SEND MESSAGE</button>
      </div>
    </form>
  </div>
  
  <div class="contact-visual" style="flex: 0 0 350px;">
    <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?w=400&h=600&fit=crop&q=80" alt="Crimson HQ" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow);">
    <div style="margin-top: 20px; background: var(--primary); color: #fff; padding: 20px; border-radius: 12px; text-align: center;">
        <h4 style="margin-bottom: 10px;">Visit Us</h4>
        <p style="font-size: 13px;">Our showroom is open daily<br>9:00 AM - 7:00 PM</p>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function ContactPage() {
  return <HtmlBlock html={html} />;
}

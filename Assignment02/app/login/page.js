import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Member Access</div>
<h2 class="page-title">Enter Your Sanctuary</h2>
<div class="page-card" style="padding: 40px;">
  <div class="auth-layout" style="display: flex; gap: 50px;">
    <div class="auth-col" style="flex: 1; padding-right: 50px; border-right: 1px solid var(--border);">
      <div class="form-section">
        <h3 style="font-size: 20px; font-weight: 800; color: var(--primary); margin-bottom: 15px;">Member Sign-In</h3>
        <p style="color: var(--text-muted); margin-bottom: 25px;">Please enter your credentials to access your bespoke sanctuary settings.</p>
        
        <form id="login-form">
            <div class="form-row" style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 700;">Concierge Email <span class="req">*</span></label>
                <input type="email" name="email" required style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);">
            </div>
            <div class="form-row" style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 700;">Secret Password <span class="req">*</span></label>
                <input type="password" name="password" required style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);">
            </div>
            <div class="remember-row" style="margin-bottom: 20px; font-size: 14px;">
                <label style="cursor: pointer;"><input type="checkbox"> Stay connected to the sanctuary</label>
            </div>
            <div style="display: flex; align-items: center; gap: 20px;">
              <button class="btn-primary" type="button" onclick="location.href='/account'" style="padding: 12px 35px;">SIGN IN</button>
              <a href="/forgot" style="font-size: 13px; color: var(--primary); font-weight: 600;">Forgotten Password?</a>
            </div>
        </form>
      </div>
    </div>
    
    <div class="auth-col" style="flex: 1;">
      <div class="form-section">
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 15px;">New Sanctuary Member</h3>
        <div class="new-customer-info" style="color: var(--text-muted); font-size: 14px; line-height: 1.8; margin-bottom: 30px;">
          <p>Join the Crimson Spas inner circle to:</p>
          <ul style="list-style: none; padding: 0;">
            <li>● Expedite your White-Glove checkout</li>
            <li>● Access real-time installation tracking</li>
            <li>● Review your bespoke order history</li>
            <li>● Receive exclusive invitations to private events</li>
          </ul>
        </div>
        <button class="btn-continue" onclick="location.href='/register'" style="width: 100%; padding: 15px; border-radius: 8px; border: 2px solid var(--primary); background: transparent; color: var(--primary); font-weight: 800; cursor: pointer;">APPLY FOR MEMBERSHIP</button>
      </div>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function LoginPage() {
  return <HtmlBlock html={html} />;
}

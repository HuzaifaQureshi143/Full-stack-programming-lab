import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Membership Application</div>
<h2 class="page-title">Join the Sanctuary</h2>
<div class="page-card" style="padding: 40px; max-width: 800px; margin: 0 auto;">
  <div class="form-section">
    <h3 style="font-size: 20px; font-weight: 800; color: var(--primary); margin-bottom: 15px;">Sanctuary Membership Application</h3>
    <p style="color: var(--text-muted); margin-bottom: 30px;">Complete the form below to begin your journey with Crimson Spas. Members receive priority installation scheduling and exclusive concierge support.</p>
    
    <form id="reg-form">
      <div class="form-row" style="margin-bottom: 15px;"><label style="display: block; margin-bottom: 5px; font-weight: 700;">Email Address <span class="req">*</span></label><input type="email" name="email" required style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);"></div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
        <div class="form-row"><label style="display: block; margin-bottom: 5px; font-weight: 700;">Password <span class="req">*</span></label><input type="password" name="new_password" required style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);"></div>
        <div class="form-row"><label style="display: block; margin-bottom: 5px; font-weight: 700;">Confirm Password <span class="req">*</span></label><input type="password" name="re_password" required style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);"></div>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
        <div class="form-row"><label style="display: block; margin-bottom: 5px; font-weight: 700;">First Name</label><input type="text" name="first_name" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);"></div>
        <div class="form-row"><label style="display: block; margin-bottom: 5px; font-weight: 700;">Last Name</label><input type="text" name="last_name" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid var(--border);"></div>
      </div>
      <div class="remember-row" style="margin: 20px 0;">
        <label style="cursor: pointer; font-size: 14px;"><input type="checkbox" checked> Yes, I wish to receive invitations to private Crimson Spas events and product reveals.</label>
      </div>
      <div style="margin-top: 30px; display: flex; align-items: center; gap: 25px;">
        <button class="btn-primary" type="button" onclick="location.href='/account'" style="padding: 15px 40px;">COMPLETE APPLICATION</button>
        <a href="/login" style="font-size: 14px; color: var(--text-muted);">Already a member? Sign in</a>
      </div>
    </form>
  </div>
</div>

</div>
</div>

`;

export default function RegisterPage() {
  return <HtmlBlock html={html} />;
}

import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Member Sanctuary &gt; Dashboard</div>
<h2 class="page-title">Member Dashboard</h2>
<div class="page-card" style="padding: 40px;">
  <div class="account-header" style="display: flex; align-items: center; gap: 25px; margin-bottom: 40px; border-bottom: 1px solid var(--border); padding-bottom: 30px;">
    <div class="profile-avatar" style="width: 100px; height: 100px; border-radius: 50%; background: var(--bg); display: flex; align-items: center; justify-content: center; font-size: 40px; color: var(--primary); border: 2px solid var(--primary);">
        👤
    </div>
    <div class="profile-meta">
        <h3 style="font-size: 24px; font-weight: 800; color: var(--text);">Welcome back, Sanctuary Member</h3>
        <p style="color: var(--text-muted);">From your dashboard, you can track your bespoke orders and manage your sanctuary settings.</p>
    </div>
  </div>

  <div class="account-section">
    <h3 style="font-size: 18px; font-weight: 800; color: var(--primary); margin-bottom: 20px;">Recent Sanctuary Orders</h3>
    <table class="orders-table" style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
      <thead style="background: var(--bg); text-align: left;">
        <tr><th style="padding: 15px;">Order ID</th><th style="padding: 15px;">Date</th><th style="padding: 15px;">Status</th><th style="padding: 15px;">Investment</th><th style="padding: 15px;">Options</th></tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 15px;"><a href="#" style="color: var(--primary); font-weight: 700;">#CS-8821</a></td>
          <td style="padding: 15px;">May 15, 2026</td>
          <td style="padding: 15px;"><span style="background: #e3f2fd; color: #1976d2; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">Preparing Delivery</span></td>
          <td style="padding: 15px;">$6,200.00</td>
          <td style="padding: 15px;"><button class="btn-view-order" style="padding: 8px 15px; background: var(--text); color: #fff; border-radius: 6px; font-size: 12px;">TRACK ORDER</button></td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 15px;"><a href="#" style="color: var(--primary); font-weight: 700;">#CS-7940</a></td>
          <td style="padding: 15px;">April 2, 2026</td>
          <td style="padding: 15px;"><span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">Installed</span></td>
          <td style="padding: 15px;">$599.00</td>
          <td style="padding: 15px;"><button class="btn-view-order" style="padding: 8px 15px; background: var(--text); color: #fff; border-radius: 6px; font-size: 12px;">VIEW DETAILS</button></td>
        </tr>
      </tbody>
    </table>

    <h3 style="font-size: 18px; font-weight: 800; color: var(--primary); margin-bottom: 20px;">Sanctuary Addresses</h3>
    <div class="addresses-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
      <div class="address-card" style="background: var(--bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border);">
        <h4 style="margin-bottom: 15px; font-weight: 800;">Primary Installation</h4>
        <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted); margin-bottom: 20px;">123 Serenity Drive<br>Luxury Estates<br>Beverly Hills, CA 90210<br>United States</p>
        <button class="btn-edit-addr" style="color: var(--primary); font-weight: 700; background: none; border: none; cursor: pointer; border-bottom: 1px solid var(--primary);">EDIT INSTALLATION ADDRESS</button>
      </div>
      <div class="address-card" style="background: var(--bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border);">
        <h4 style="margin-bottom: 15px; font-weight: 800;">Billing Concierge</h4>
        <p style="font-size: 14px; line-height: 1.6; color: var(--text-muted); margin-bottom: 20px;">123 Serenity Drive<br>Luxury Estates<br>Beverly Hills, CA 90210<br>United States</p>
        <button class="btn-edit-addr" style="color: var(--primary); font-weight: 700; background: none; border: none; cursor: pointer; border-bottom: 1px solid var(--primary);">EDIT BILLING DETAILS</button>
      </div>
    </div>
  </div>
</div>

</div>
</div>
`;

export default function AccountPage() {
  return <HtmlBlock html={html} />;
}

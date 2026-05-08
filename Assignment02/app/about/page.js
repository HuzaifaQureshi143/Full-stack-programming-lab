import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div class="breadcrumb"><a href="/">Home</a> &gt; Our Heritage</div>
<h2 class="page-title">Our Heritage</h2>
<div class="page-card">
  <h3 style="font-size:18px;font-weight:bold;color:var(--primary);border-bottom:2px solid var(--border);padding-bottom:10px;margin-bottom:20px;">Defining Luxury Relaxation Since 1995</h3>
  <div style="overflow:hidden; display: flex; gap: 30px; align-items: flex-start;">
    <div class="about-img" style="flex: 0 0 300px; margin: 0;">
      <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=300&fit=crop&q=80" alt="Our Workshop" style="width:100%; border-radius: 12px; box-shadow: var(--shadow);">
    </div>
    <div style="flex: 1;">
      <p class="about-text" style="font-size: 15px; color: var(--text-muted);">At Crimson Spas, we believe that relaxation is an art form. For nearly three decades, we have dedicated ourselves to engineering the world's most sophisticated hydrotherapy systems. Our journey began in a small workshop with a single goal: to blend clinical-grade massage technology with high-end aesthetic design.</p>
      <p class="about-text" style="margin-top:15px; font-size: 15px; color: var(--text-muted);">Today, we are global leaders in spa innovation, known for our patented Smart-Heat™ technology and sustainable manufacturing processes. Every Crimson spa is hand-finished and rigorously tested to ensure it provides a lifetime of sanctuary for you and your family.</p>
    </div>
  </div>

  <h3 style="font-size:18px;font-weight:bold;color:var(--primary);border-bottom:2px solid var(--border);padding-bottom:10px;margin:40px 0 20px;">The Minds Behind the Magic</h3>
  <p class="about-text" style="margin-bottom:25px; font-size: 15px; color: var(--text-muted);">Our team is a diverse collective of engineers, designers, and wellness experts committed to pushing the boundaries of what a home spa can be.</p>
  <div class="team-grid">
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80" alt="Elena Rodriguez" style="border-radius: 50%; width: 120px; height: 120px; margin: 0 auto 15px;">
      <div class="t-name">Elena Rodriguez</div>
      <div class="t-role">Founder & Chief Designer</div>
      <div class="t-desc" style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">The creative vision behind our Crimson series and minimalist aesthetic.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&q=80" alt="Marcus Thorne" style="border-radius: 50%; width: 120px; height: 120px; margin: 0 auto 15px;">
      <div class="t-name">Marcus Thorne</div>
      <div class="t-role">Lead Hydro-Engineer</div>
      <div class="t-desc" style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">The mastermind behind our patented multi-zone jet propulsion systems.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80" alt="Sarah Chen" style="border-radius: 50%; width: 120px; height: 120px; margin: 0 auto 15px;">
      <div class="t-name">Sarah Chen</div>
      <div class="t-role">Customer Success Director</div>
      <div class="t-desc" style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Ensuring every Crimson owner experiences seamless sanctuary from day one.</div>
    </div>
    <div class="team-card">
      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80" alt="David Smith" style="border-radius: 50%; width: 120px; height: 120px; margin: 0 auto 15px;">
      <div class="t-name">David Smith</div>
      <div class="t-role">Sustainability Officer</div>
      <div class="t-desc" style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Driving our mission to achieve carbon-neutral relaxation by 2030.</div>
    </div>
  </div>
</div>

</div>
</div>

`;

export default function AboutPage() {
  return <HtmlBlock html={html} />;
}

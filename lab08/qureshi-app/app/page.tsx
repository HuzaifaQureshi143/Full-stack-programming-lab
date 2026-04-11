import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Qureshi Store</h1>
        <p>
          Your one-stop shop for the latest tech gadgets and accessories.
          Browse our collection and find something you love!
        </p>
      </section>

      {/* Features */}
      <div className="page-container">
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e3a5f", marginBottom: 8 }}>
          Why Shop With Us?
        </h2>
        <div className="features">
          <div className="feature-card">
            <h3>🚚 Free Shipping</h3>
            <p>Free shipping on all orders over $50. No hidden fees.</p>
          </div>
          <div className="feature-card">
            <h3>⭐ Top Quality</h3>
            <p>We only sell products that meet our high quality standards.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Checkout</h3>
            <p>Your payment information is always safe and encrypted.</p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link
            href="/products"
            style={{
              padding: "12px 28px",
              background: "#2d6a9f",
              color: "#fff",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Browse Products →
          </Link>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import products from "@/app/data/products";

export default function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="info">
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 80)}...</p>
            <div className="price">${product.price.toFixed(2)}</div>
            <Link href={`/products/${product.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

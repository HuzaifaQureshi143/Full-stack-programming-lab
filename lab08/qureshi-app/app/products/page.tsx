import ProductList from "@/app/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="page-container">
      <h1>Our Products</h1>
      <p>Browse our collection of top-quality tech gadgets and accessories.</p>
      <ProductList />
    </div>
  );
}

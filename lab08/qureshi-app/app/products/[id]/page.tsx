import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/app/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <div className="price">${product.price.toFixed(2)}</div>
      <p className="description">{product.description}</p>
      <Link href="/products" className="back-link">
        ← Back to Products
      </Link>
    </div>
  );
}

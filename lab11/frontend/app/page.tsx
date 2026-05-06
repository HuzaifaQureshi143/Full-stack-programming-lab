'use client';
import { useEffect, useState } from 'react';

// ✅ Define type (fixes red errors)
type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10 tracking-tight">
        Huzaifa Store
      </h1>

      {loading ? (
        <p className="text-center text-zinc-500 animate-pulse">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-zinc-500">
          No products found.{' '}
          <a
            className="underline hover:text-white"
            href="http://localhost:5000/seed"
            target="_blank"
          >
            Seed data
          </a>
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition"
            >
              {/* ✅ FIXED IMAGE CONTAINER */}
              <div className="w-full h-44 overflow-hidden rounded-xl mb-4 bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <h2 className="text-sm font-medium mb-1 truncate">
                {product.name}
              </h2>

              <p className="text-xs text-zinc-500 line-clamp-2 mb-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">
                  ${product.price}
                </span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                  {product.category}
                </span>
              </div>

              <button className="mt-4 w-full text-sm py-2 rounded-xl bg-white text-black hover:bg-zinc-200 transition">
                Add
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
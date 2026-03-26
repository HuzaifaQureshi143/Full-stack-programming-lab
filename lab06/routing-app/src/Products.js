function Products() {
  const items = [
    { id: 1, title: "Laptop", desc: "High performance device" },
    { id: 2, title: "Phone", desc: "Smart communication device" },
    { id: 3, title: "Headphones", desc: "Quality sound experience" }
  ];

  return (
    <div>
      <h3>Products</h3>

      {items.map(p => (
        <div key={p.id} className="product">
          <b>{p.title}</b>
          <p>{p.desc}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
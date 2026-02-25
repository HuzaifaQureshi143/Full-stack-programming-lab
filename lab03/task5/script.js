// Task 5: Product Catalog using Map
// Using Map, search by ID, delete product, .size property

// Create a Map where key = product ID, value = product object
const productCatalog = new Map();

// Add minimum 5 products
productCatalog.set('P001', { name: 'Laptop', price: 85000, category: 'Electronics', stock: 15 });
productCatalog.set('P002', { name: 'Wireless Mouse', price: 2500, category: 'Accessories', stock: 50 });
productCatalog.set('P003', { name: 'Mechanical Keyboard', price: 7500, category: 'Accessories', stock: 30 });
productCatalog.set('P004', { name: 'Monitor 27"', price: 45000, category: 'Electronics', stock: 10 });
productCatalog.set('P005', { name: 'USB-C Hub', price: 3500, category: 'Accessories', stock: 40 });
productCatalog.set('P006', { name: 'Webcam HD', price: 5000, category: 'Electronics', stock: 25 });

// Build product table from Map
const buildProductTable = (catalog) => {
    let rows = '';
    for (const [id, product] of catalog) {
        rows += `
            <tr>
                <td>${id}</td>
                <td>${product.name}</td>
                <td>Rs. ${product.price.toLocaleString()}</td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
            </tr>
        `;
    }
    return `
        <table class="product-table">
            <thead>
                <tr><th>ID</th><th>Name</th><th>Price</th><th>Category</th><th>Stock</th></tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
};

// Show total products using .size
const totalBefore = productCatalog.size;

// Search by ID functionality
const searchId = 'P003';
const searchResult = productCatalog.get(searchId);

// Delete product functionality
const deleteId = 'P006';
const deletedProduct = productCatalog.get(deleteId);
productCatalog.delete(deleteId);

const totalAfter = productCatalog.size;

// Display results in HTML
const output = document.getElementById('output');
output.innerHTML = `
    <div class="card">
        <h2>📦 Product Catalog</h2>
        <p><strong>Total Products (using .size):</strong> <span class="badge">${totalBefore}</span></p>
        ${buildProductTable(productCatalog)}
    </div>

    <div class="card">
        <h2>🔍 Search Product by ID</h2>
        <p>Searching for ID: <strong>${searchId}</strong></p>
        <div class="search-result">
            <p><strong>Found:</strong> ${searchResult.name}</p>
            <p><strong>Price:</strong> Rs. ${searchResult.price.toLocaleString()}</p>
            <p><strong>Category:</strong> ${searchResult.category}</p>
            <p><strong>Stock:</strong> ${searchResult.stock} units</p>
        </div>
    </div>

    <div class="card">
        <h2>🗑️ Delete Product</h2>
        <p>Deleted product with ID: <strong>${deleteId}</strong></p>
        <div class="deleted">
            <p><strong>Removed:</strong> ${deletedProduct.name} (Rs. ${deletedProduct.price.toLocaleString()})</p>
        </div>
        <br>
        <p><strong>Total Products After Deletion (using .size):</strong> <span class="badge">${totalAfter}</span></p>
    </div>
`;

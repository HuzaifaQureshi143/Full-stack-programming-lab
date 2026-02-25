// Task 2: Online Shopping Cart
// Using Rest operator, Spread operator, and Array Destructuring

// Store products in an array
const products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];

// Function using Rest operator to add items to cart
const addToCart = (...items) => {
    const cart = [];
    for (const item of items) {
        cart.push(item);
    }
    return cart;
};

// Add products to cart using rest operator
const cart = addToCart(...products);

// Use Spread operator to clone the cart
const clonedCart = [...cart];

// Add an extra item to cloned cart to show independence
clonedCart.push('Webcam');

// Apply array destructuring to extract first item and remaining items
const [firstItem, ...remainingItems] = cart;

// Display results in HTML using innerHTML
const output = document.getElementById('output');
output.innerHTML = `
    <div class="card">
        <h2>🛒 Original Cart</h2>
        <p><strong>Total Items:</strong> <span class="highlight">${cart.length}</span></p>
        <ul class="item-list">
            ${cart.map(item => `<li>📦 ${item}</li>`).join('')}
        </ul>
    </div>

    <div class="card">
        <h2>📋 Cloned Cart (Spread Operator)</h2>
        <p><strong>Total Items:</strong> <span class="highlight">${clonedCart.length}</span></p>
        <p><em>Cloned using [...cart] and added "Webcam" to show independence</em></p>
        <ul class="item-list">
            ${clonedCart.map(item => `<li>📦 ${item}</li>`).join('')}
        </ul>
    </div>

    <div class="card">
        <h2>🔍 Destructured Cart</h2>
        <p><strong>First Item:</strong> <span class="highlight">${firstItem}</span></p>
        <p><strong>Remaining Items (${remainingItems.length}):</strong></p>
        <ul class="item-list">
            ${remainingItems.map(item => `<li>📦 ${item}</li>`).join('')}
        </ul>
    </div>
`;

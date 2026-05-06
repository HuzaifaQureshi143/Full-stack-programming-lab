const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String
});

// Product Model
const Product = mongoose.model('Product', productSchema);

// Root route
app.get('/', (req, res) => {
    res.send('Ecommerce Backend Running');
});

// Seed some products
app.get('/seed', async (req, res) => {
    await Product.deleteMany({});
    await Product.insertMany([
        { name: 'Laptop', price: 999, description: 'High performance laptop', category: 'Electronics', image: 'https://via.placeholder.com/150' },
        { name: 'Headphones', price: 49, description: 'Noise cancelling headphones', category: 'Electronics', image: 'https://via.placeholder.com/150' },
        { name: 'T-Shirt', price: 19, description: 'Cotton t-shirt', category: 'Clothing', image: 'https://via.placeholder.com/150' },
        { name: 'Sneakers', price: 89, description: 'Running sneakers', category: 'Footwear', image: 'https://via.placeholder.com/150' },
    ]);
    res.json({ message: 'Products seeded!' });
});

// Get all products
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get single product by ID
app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.json(product);
});

// Start server
app.listen(5000, () => {
    console.log('Backend server running on port 5000');
});
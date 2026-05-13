const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/huzaifa')
  .then(() => console.log('✅ MongoDB connected to huzaifa database'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/collections', require('./routes/collections'));
app.use('/api/orders', require('./routes/orders'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Rustik Plank API is running', status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

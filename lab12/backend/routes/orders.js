const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Inline Order schema
const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  items: [{
    productId: String,
    name: String,
    price: Number,
    qty: Number,
  }],
  subtotal: Number,
  shipping: Number,
  total: Number,
  paymentMethod: { type: String, default: 'card' },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

// POST /api/orders — place a new order
router.post('/', async (req, res) => {
  try {
    const { customer, items, subtotal, shipping, total, paymentMethod } = req.body;
    if (!customer || !items || !items.length) {
      return res.status(400).json({ error: 'Customer and items are required' });
    }
    const order = new Order({ customer, items, subtotal, shipping, total, paymentMethod });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully', orderId: order._id, order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/orders — list all orders (admin use)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/orders/:id — single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

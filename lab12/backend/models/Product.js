const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { type: String, enum: ['featured', 'special', 'popular'], default: 'featured' },
  collection: { type: String, enum: ['chairs', 'beds', 'tables', 'bookcases', 'cabinets', 'boxes'] },
  image: { type: String },
  description: { type: String },
  discount: { type: Number, default: 0 },
  isOnSale: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);

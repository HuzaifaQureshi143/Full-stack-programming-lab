const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now },
  author: { type: String, default: 'Admin' }
});

module.exports = mongoose.model('BlogPost', blogSchema);

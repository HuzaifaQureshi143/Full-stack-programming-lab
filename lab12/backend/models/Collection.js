const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String },
  label: { type: String }
});

module.exports = mongoose.model('Collection', collectionSchema);

const mongoose = require('mongoose');
const Product = require('./models/Product');
const BlogPost = require('./models/BlogPost');
const Collection = require('./models/Collection');

mongoose.connect('mongodb://localhost:27017/huzaifa')
  .then(() => console.log('✅ Connected to MongoDB for seeding'))
  .catch(err => { console.error(err); process.exit(1); });

const products = [
  // Featured
  { name: 'Wooden Lounge Chair', price: 134.99, category: 'featured', collection: 'chairs', image: 'https://placehold.co/200x160/8B4513/ffffff?text=Lounge+Chair', description: 'Handcrafted reclaimed wood lounge chair' },
  { name: 'Oak Bench Seat', price: 134.99, category: 'featured', collection: 'chairs', image: 'https://placehold.co/200x160/A0522D/ffffff?text=Oak+Bench', description: 'Solid oak bench with natural finish' },
  { name: 'Teak Side Table', price: 134.99, category: 'featured', collection: 'tables', image: 'https://placehold.co/200x160/7B3B0F/ffffff?text=Teak+Table', description: 'Teak side table with storage shelf' },
  { name: 'Walnut Bookcase', price: 134.99, category: 'featured', collection: 'bookcases', image: 'https://placehold.co/200x160/6B3A2A/ffffff?text=Bookcase', description: 'Three-shelf walnut bookcase' },
  // Special
  { name: 'Pine Storage Cabinet', price: 134.99, category: 'special', collection: 'cabinets', image: 'https://placehold.co/200x160/5C4033/ffffff?text=Cabinet', description: 'Rustic pine storage cabinet' },
  { name: 'Reclaimed Wood Stool', price: 134.99, category: 'special', collection: 'chairs', image: 'https://placehold.co/200x160/795548/ffffff?text=Bar+Stool', description: 'Handmade reclaimed wood bar stool' },
  { name: 'Oak Dining Table', price: 134.99, category: 'special', collection: 'tables', image: 'https://placehold.co/200x160/8D6E63/ffffff?text=Dining+Table', description: 'Solid oak dining table seats 6' },
  { name: 'Bamboo Shelf Unit', price: 134.99, category: 'special', collection: 'bookcases', image: 'https://placehold.co/200x160/A1887F/ffffff?text=Shelf+Unit', description: 'Eco-friendly bamboo shelf unit' },
  // Popular
  { name: 'Mahogany Bed Frame', price: 134.99, category: 'popular', collection: 'beds', image: 'https://placehold.co/200x160/6D4C41/ffffff?text=Bed+Frame', description: 'King size mahogany bed frame' },
  { name: 'Rustic Coffee Table', price: 134.99, category: 'popular', collection: 'tables', image: 'https://placehold.co/200x160/8B4513/ffffff?text=Coffee+Table', description: 'Reclaimed pine coffee table' },
  { name: 'Wooden Storage Box', price: 134.99, category: 'popular', collection: 'boxes', image: 'https://placehold.co/200x160/7B3B0F/ffffff?text=Storage+Box', description: 'Handcrafted decorative storage box' },
  { name: 'Elm Wood Wardrobe', price: 134.99, isOnSale: true, discount: 10, category: 'popular', collection: 'cabinets', image: 'https://placehold.co/200x160/A0522D/ffffff?text=Wardrobe', description: 'Three-door elm wood wardrobe' },
];

const blogPosts = [
  { title: 'Reclaimed Wood Trends 2024', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: 'https://placehold.co/360x200/8B4513/ffffff?text=Wood+Trends', date: new Date('2024-01-15') },
  { title: 'Handcrafted Furniture Guide', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: 'https://placehold.co/360x200/A0522D/ffffff?text=Furniture+Guide', date: new Date('2024-01-10') },
  { title: 'Sustainable Wood Choices', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: 'https://placehold.co/360x200/6B3A2A/ffffff?text=Sustainable+Wood', date: new Date('2024-01-05') },
];

const collections = [
  { name: 'Chairs', slug: 'chairs', image: 'https://placehold.co/380x220/8B4513/ffffff?text=Chairs+Collection', label: 'CHAIRS COLLECTION' },
  { name: 'Beds', slug: 'beds', image: 'https://placehold.co/380x220/7B3B0F/ffffff?text=Beds+Collection', label: 'BEDS COLLECTION' },
  { name: 'Tables', slug: 'tables', image: 'https://placehold.co/380x220/6B3A2A/ffffff?text=Tables+Collection', label: 'TABALES COLLECTION' },
];

async function seed() {
  await Product.deleteMany({});
  await BlogPost.deleteMany({});
  await Collection.deleteMany({});

  await Product.insertMany(products);
  await BlogPost.insertMany(blogPosts);
  await Collection.insertMany(collections);

  console.log('✅ Database seeded successfully!');
  console.log(`   - ${products.length} products`);
  console.log(`   - ${blogPosts.length} blog posts`);
  console.log(`   - ${collections.length} collections`);
  mongoose.disconnect();
}

seed().catch(err => { console.error(err); mongoose.disconnect(); });

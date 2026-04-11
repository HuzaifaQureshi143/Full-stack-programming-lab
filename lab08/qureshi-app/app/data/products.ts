export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life. Deep bass, crystal-clear highs, and a comfortable over-ear design perfect for music lovers and professionals.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "Feature-packed smart watch with heart-rate monitoring, GPS tracking, and a stunning AMOLED display. Stay connected and track your fitness goals throughout the day.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 3,
    title: "Laptop Backpack",
    description:
      "Durable and stylish laptop backpack with multiple compartments, USB charging port, and water-resistant fabric. Fits laptops up to 15.6 inches comfortably.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with 360-degree surround sound, waterproof design, and 12-hour playtime. Perfect companion for outdoor adventures and parties.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
  },
];

export default products;

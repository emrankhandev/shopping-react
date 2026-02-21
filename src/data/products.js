const products = [
  {
    id: 1,
    productName: "Wireless Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    details: "High quality wireless headphones with noise cancellation and 20 hours battery life."
  },
  {
    id: 2,
    productName: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511732351157-1865efcb7b7b",
    details: "Modern smart watch with fitness tracking, heart rate monitor and message notifications."
  },
  {
    id: 3,
    productName: "Gaming Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    details: "Ergonomic gaming mouse with RGB lighting and ultra-fast response time."
  },
  {
    id: 4,
    productName: "Laptop Backpack",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    details: "Durable and waterproof backpack with padded laptop compartment."
  },
  {
    id: 5,
    productName: "Bluetooth Speaker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
    details: "Portable Bluetooth speaker with deep bass and 12 hours playtime."
  }
];

export const getProducts = () => {
    return products
}
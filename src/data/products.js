import { PhysicalProduct, DigitalGame } from '../models/ProductModels';

export const products = [
  new PhysicalProduct({
    id: 1,
    name: "Neon Pro Controller",
    price: 69.99,
    image: "assets/images/prod1.png",
    category: "Accessories",
    rating: 4.8,
    description: "Experience pro-level control with a neon-infused aesthetic.",
    stock: 25
  }),
  new PhysicalProduct({
    id: 2,
    name: "Void Headset X",
    price: 129.99,
    image: "assets/images/prod2.png",
    category: "Accessories",
    rating: 4.9,
    description: "Immersive 7.1 surround sound with noise-canceling mic.",
    stock: 12
  }),
  new PhysicalProduct({
    id: 3,
    name: "Cyber Matrix Keyboard",
    price: 149.99,
    image: "assets/images/prod3.png",
    category: "Accessories",
    rating: 4.7,
    description: "Mechanical RGB keyboard with custom Enderman switches.",
    stock: 5
  }),
  new PhysicalProduct({
    id: 4,
    name: "Precision Mouse V2",
    price: 89.99,
    image: "assets/images/prod4.png",
    category: "Accessories",
    rating: 4.6,
    description: "Ultra-lightweight gaming mouse with precision optical sensor.",
    stock: 40
  }),
  new DigitalGame({
    id: 5,
    name: "Neon Drive 2084",
    price: 59.99,
    image: "assets/images/prod5.png",
    category: "Games",
    rating: 4.5,
    description: "A fast-paced cyberpunk racing game.",
    platform: "PC"
  }),
  new DigitalGame({
    id: 6,
    name: "Stellar Frontier",
    price: 49.99,
    image: "assets/images/prod5.png",
    category: "Games",
    rating: 4.8,
    description: "Explore the vast unknown in this epic space RPG.",
    platform: "PC/Console"
  }),
  new DigitalGame({
    id: 7,
    name: "Cyber Strike Ops",
    price: 39.99,
    image: "assets/images/prod5.png",
    category: "Games",
    rating: 4.4,
    description: "Tactical multiplayer shooter set in a dystopian future.",
    platform: "PC"
  }),
  new DigitalGame({
    id: 8,
    name: "1000 Exeon Credits",
    price: 9.99,
    image: "assets/images/prod1.png",
    category: "Digital",
    rating: 5.0,
    description: "In-game currency for Exeon-supported titles.",
    platform: "Cross-Platform"
  }),
  new DigitalGame({
    id: 9,
    name: "Premium Battle Pass",
    price: 19.99,
    image: "assets/images/prod1.png",
    category: "Digital",
    rating: 4.9,
    description: "Unlock exclusive skins and rewards for a full season.",
    platform: "Cross-Platform"
  })
];

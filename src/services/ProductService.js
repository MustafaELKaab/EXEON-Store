import { products } from '../data/products';

export class ProductService {
  constructor() {
    this.allProducts = products;
  }

  getAllProducts() {
    return this.allProducts;
  }

  getProductById(id) {
    return this.allProducts.find(product => product.id === parseInt(id));
  }

  getProductsByCategory(category) {
    if (category === 'All') return this.allProducts;
    return this.allProducts.filter(product => product.category === category);
  }

  getFeaturedProducts(limit = 3) {
    return this.allProducts.slice(0, limit);
  }

  searchProducts(query) {
    if (!query) return this.allProducts;
    const lowerQuery = query.toLowerCase();
    return this.allProducts.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) || 
      product.category.toLowerCase().includes(lowerQuery)
    );
  }
}

export const productService = new ProductService();

export class CartService {
  constructor() {
    this.cartKey = 'exeon-cart';
    this.cart = this.loadCart();
  }

  loadCart() {
    const saved = localStorage.getItem(this.cartKey);
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.saveCart();
    return this.cart;
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    return this.cart;
  }

  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }

  getCartCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }
}

export const cartService = new CartService();

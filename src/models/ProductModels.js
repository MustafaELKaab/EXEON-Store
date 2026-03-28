
export class Product {
  constructor({ id, name, price, image, category, rating, description }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.rating = rating;
    this.description = description || "High-quality gaming gear.";
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}


export class PhysicalProduct extends Product {
  constructor({ id, name, price, image, category, rating, description, stock }) {
    super({ id, name, price, image, category, rating, description });
    this.stock = stock || 10;
    this.type = "Physical";
  }

  isAvailable() {
    return this.stock > 0;
  }
}


export class DigitalGame extends Product {
  constructor({ id, name, price, image, category, rating, description, platform }) {
    super({ id, name, price, image, category, rating, description });
    this.platform = platform || "PC";
    this.type = "Digital";
  }

  isAvailable() {
    return true;
  }
}

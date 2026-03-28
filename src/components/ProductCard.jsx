import { Link } from 'react-router-dom';
import { cartService } from '../services/CartService';

function ProductCard({ product }) {
  const addToCart = () => {
    cartService.addToCart(product);
    window.dispatchEvent(new Event('cart-updated'));

    alert(`${product.name} ADDED TO CART!`);
  };

  return (
    <div className="bg-exeon-card border-2 border-exeon-border p-6 text-center transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 hover:border-exeon-primary hover:shadow-[0_0_20px_rgba(170,0,255,0.4)] flex flex-col h-full rounded-sm">
      

      <div className="relative mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110" 
        />
        {product.type === "Digital" && (
          <span className="absolute top-0 right-0 bg-exeon-primary text-black text-[10px] font-pixel px-2 py-1 uppercase font-bold tracking-wider">
            DIGITAL
          </span>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-sans tracking-wide text-white mb-2 leading-snug flex-grow">
          {product.name}
        </h3>
        
        <div className="text-exeon-primary text-xs mb-3 flex items-center justify-center gap-1">
          <i className="fas fa-star"></i> {product.rating}
        </div>
        
        <div className="text-exeon-primary text-xl font-bold mb-4 font-sans tracking-tight">
          ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <button 
          className="btn btn-primary w-full flex items-center justify-center gap-2" 
          onClick={addToCart}
        >
          <i className="fas fa-shopping-cart"></i> ADD TO CART
        </button>

        <Link 
          to={`/products/${product.id}`} 
          className="btn border-t-0 p-3 bg-transparent text-exeon-muted border-none mt-1 hover:text-white"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

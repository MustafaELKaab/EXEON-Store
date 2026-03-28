import { useParams, Link } from 'react-router-dom';
import { productService } from '../services/ProductService';
import { cartService } from '../services/CartService';
import { useState } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const product = productService.getProductById(id);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center bg-exeon-bg">
        <h2 className="text-4xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-6">PRODUCT NOT FOUND</h2>
        <Link to="/products" className="btn btn-outline px-8 border-2 border-exeon-primary text-exeon-primary">RETURN TO BROWSE</Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    cartService.addToCart(product);
    window.dispatchEvent(new Event('cart-updated'));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        

        <div className="mb-8 flex items-center gap-2 text-xs font-sans text-exeon-muted uppercase tracking-widest">
            <Link to="/" className="hover:text-exeon-primary transition-colors">HOME</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-exeon-primary transition-colors">GEAR</Link>
            <span>/</span>
            <span className="text-exeon-primary truncate">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-exeon-card border-2 border-exeon-border p-8 lg:p-12 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
            

          {product.type && (
            <div className="absolute top-0 right-0 bg-exeon-primary text-black font-pixel px-4 py-2 uppercase text-xs z-10 font-bold tracking-widest shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] border-l-2 border-b-2 border-black">
              {product.type}
            </div>
          )}


          <div className="bg-black border-2 border-exeon-primary p-8 flex items-center justify-center shadow-[inset_0_0_50px_rgba(170,0,255,0.1)] relative group min-h-[400px]">
            <div className="absolute top-4 left-4 text-exeon-primary opacity-50 font-pixel text-[10px] tracking-[0.3em]">
                {product.id}
            </div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[400px] object-contain drop-shadow-[0_0_20px_rgba(170,0,255,0.4)] transition-transform duration-500 group-hover:scale-105" 
            />
          </div>


          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-pixel text-white mb-6 leading-tight uppercase relative inline-block">
                {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
                <div className="flex bg-exeon-bg px-4 py-2 border border-exeon-primary text-exeon-primary font-bold text-lg items-center gap-2">
                    <i className="fas fa-star text-sm"></i> 
                    {product.rating}
                </div>
                <span className="text-exeon-muted font-sans text-xs tracking-widest uppercase">(VERIFIED REVIEWS)</span>
            </div>
            
            <div className="text-4xl text-exeon-primary font-bold font-sans tracking-tight mb-8 drop-shadow-[0_0_10px_rgba(170,0,255,0.5)]">
              ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
            </div>
            
            <div className="bg-exeon-bg/50 border-l-4 border-exeon-primary p-6 mb-8 mt-auto">
              <p className="text-white font-sans text-sm md:text-base leading-relaxed tracking-wide opacity-90">
                {product.description || `EQUIP YOURSELF WITH THE ${product.name.toUpperCase()}, FEATURING NEXT-GEN TECH AND A PREMIUM ENDERMAN-STYLED AESTHETIC. DOMINATE THE GAME.`}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-10 text-xs font-sans uppercase tracking-widest p-4 border border-exeon-border bg-black">
                <div className="flex flex-col gap-1">
                    <strong className="text-exeon-muted">CATEGORY</strong> 
                    <span className="text-exeon-primary">{product.category}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <strong className="text-exeon-muted">AVAILABILITY</strong> 
                    <span className="text-green-500 font-bold drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
                        {product.isAvailable ? (product.isAvailable() ? 'IN STOCK' : 'OUT OF STOCK') : 'ONLINE'}
                    </span>
                </div>
            </div>

            <button 
                className={`btn ${isAdded ? 'bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.5)]' : 'btn-primary'} w-full py-5 text-lg flex items-center justify-center gap-3 mt-auto`} 
                onClick={handleAddToCart}
                disabled={isAdded}
            >
              <i className={`fas ${isAdded ? 'fa-check' : 'fa-cart-plus'}`}></i> 
              {isAdded ? 'ADDED!' : 'INITIALIZE PURCHASE'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

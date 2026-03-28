import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartService } from '../services/CartService';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems([...cartService.getCart()]);
    setTotal(cartService.getCartTotal());
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('ORDER CONFIRMED. TRANSMITTING DATA...');
    cartService.clearCart();
    window.dispatchEvent(new Event('cart-updated'));
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-12 uppercase border-l-4 border-exeon-primary pl-4">
          SECURE CHECKOUT
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          

          <div className="lg:col-span-3 bg-exeon-card border-2 border-exeon-border p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl font-pixel text-white mb-8 border-b border-exeon-border pb-4">SHIPPING DATA</h3>
            
            <form onSubmit={handleCheckout} className="space-y-6">
              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">
                  IDENTIFICATION
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="ENDER MAN" 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted" 
                />
              </div>
              
              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">
                  COORDINATES (ADDRESS)
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="123 OBSIDIAN BLOCK, THE END" 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted" 
                />
              </div>
              
              <h3 className="text-xl font-pixel text-white mt-12 mb-6 border-b border-exeon-border pb-4">PAYMENT PROTOCOL</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="flex-1 p-4 border-2 border-exeon-primary bg-exeon-primary/10 text-center cursor-pointer text-white font-pixel text-[10px] uppercase shadow-[inset_0_0_10px_rgba(170,0,255,0.2)]">
                  CREDIT CHIP
                </div>
                <div className="flex-1 p-4 border-2 border-exeon-border text-center cursor-pointer text-exeon-muted font-pixel text-[10px] uppercase hover:border-exeon-primary transition-colors">
                  CRYPTO
                </div>
              </div>

              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">
                  CHIP NUMBER
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans tracking-widest text-sm focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">EXP</label>
                    <input type="text" placeholder="MM/YY" className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans tracking-widest text-sm focus:border-exeon-primary outline-none" required />
                  </div>
                  <div>
                    <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">CVC</label>
                    <input type="password" placeholder="***" className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans tracking-widest text-sm focus:border-exeon-primary outline-none" required />
                  </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full py-5 text-lg mt-8 flex justify-center items-center gap-2" 
                disabled={cartItems.length === 0}
              >
                <i className="fas fa-lock text-sm"></i> CONFIRM TRANSFER
              </button>
            </form>
          </div>


          <div className="lg:col-span-2 space-y-8">
              <div className="bg-exeon-card border-2 border-exeon-border p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] sticky top-32">
                <h3 className="text-xl font-pixel text-white mb-6 border-b border-exeon-border pb-4">MANIFEST</h3>
                
                {cartItems.length === 0 ? (
                  <p className="font-pixel text-[10px] text-exeon-muted text-center py-8 bg-black border border-exeon-border">NO ITEMS TO DECLARE.</p>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="max-h-[40vh] overflow-y-auto pr-2 space-y-4">
                        {cartItems.map((item, index) => (
                          <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-black p-3 border border-exeon-border/50">
                            <div className="flex items-center gap-3">
                                <span className="bg-exeon-bg text-exeon-primary font-pixel text-[8px] px-2 py-1 border border-exeon-primary">{item.quantity}x</span>
                                <span className="font-sans text-xs text-white uppercase truncate max-w-[120px]" title={item.name}>{item.name}</span>
                            </div>
                            <span className="font-sans text-xs text-exeon-muted">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                    </div>
                    
                    <div className="border-t-2 border-exeon-primary pt-6 mt-4 pb-2">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-sans text-xs text-exeon-muted uppercase tracking-widest">SUBTOTAL</span>
                            <span className="font-sans text-sm text-white">${total}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-sans text-xs text-exeon-muted uppercase tracking-widest">SHIPPING</span>
                            <span className="font-sans text-sm text-exeon-primary">FREE</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="font-pixel text-lg text-exeon-primary tracking-widest">TOTAL</span>
                            <span className="font-sans text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(170,0,255,0.5)]">${total}</span>
                        </div>
                    </div>
                  </div>
                )}
              </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Checkout;

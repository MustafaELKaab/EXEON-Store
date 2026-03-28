import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartService } from '../services/CartService';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const refreshCart = () => {
    setCartItems([...cartService.getCart()]);
    setTotal(cartService.getCartTotal());
  };

  useEffect(() => {
    refreshCart();
    const handleUpdate = () => refreshCart();
    window.addEventListener('cart-updated', handleUpdate);
    return () => window.removeEventListener('cart-updated', handleUpdate);
  }, []);

  const changeQty = (id, newQuantity) => {
    cartService.updateQuantity(id, newQuantity);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = (id) => {
    cartService.removeFromCart(id);
    window.dispatchEvent(new Event('cart-updated'));
  };

  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-8 uppercase border-l-4 border-exeon-primary pl-4">
          YOUR INVENTORY
        </h2>
        
        <div className="bg-exeon-card border-2 border-exeon-border p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-box-open text-6xl text-exeon-border mb-6"></i>
              <p className="mb-8 font-sans text-exeon-muted tracking-widest uppercase">YOUR INVENTORY IS EMPTY.</p>
              <Link to="/products" className="btn btn-primary px-8 py-4">FARM LOOT</Link>
            </div>
          ) : (
            <>

              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-exeon-border">
                      <th className="py-4 px-4 font-pixel text-exeon-primary text-[10px] tracking-widest">ITEM</th>
                      <th className="py-4 px-4 font-pixel text-exeon-primary text-[10px] tracking-widest">PRICE</th>
                      <th className="py-4 px-4 font-pixel text-exeon-primary text-[10px] tracking-widest">QTY</th>
                      <th className="py-4 px-4 font-pixel text-exeon-primary text-[10px] tracking-widest">TOTAL</th>
                      <th className="py-4 px-4 font-pixel text-exeon-primary text-[10px] tracking-widest text-center">DROP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b border-exeon-border/50 hover:bg-black/30 transition-colors">
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-black border border-exeon-primary flex items-center justify-center p-2 shrink-0">
                                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <span className="font-sans font-bold text-white tracking-wide uppercase">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-6 px-4 font-sans text-exeon-muted">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</td>
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-3">
                            <button onClick={() => changeQty(item.id, item.quantity - 1)} className="bg-black border border-exeon-border text-exeon-primary w-8 h-8 flex items-center justify-center hover:border-exeon-primary transition-colors hover:text-white font-pixel">-</button>
                            <span className="font-sans text-white w-4 text-center">{item.quantity}</span>
                            <button onClick={() => changeQty(item.id, item.quantity + 1)} className="bg-black border border-exeon-border text-exeon-primary w-8 h-8 flex items-center justify-center hover:border-exeon-primary transition-colors hover:text-white font-pixel">+</button>
                          </div>
                        </td>
                        <td className="py-6 px-4 font-sans font-bold text-exeon-primary">${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="py-6 px-4 text-center">
                          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-400 border border-transparent hover:border-red-500 p-2 transition-all" title="Drop Item">
                              <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div className="md:hidden flex flex-col gap-6">
                {cartItems.map(item => (
                   <div key={item.id} className="bg-black border border-exeon-border p-4 flex gap-4 relative">
                      <div className="w-20 h-20 bg-exeon-card border border-exeon-primary flex items-center justify-center shrink-0 p-2">
                         <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex flex-col flex-grow justify-between">
                          <h4 className="font-sans font-bold text-white text-sm uppercase leading-tight pr-8">{item.name}</h4>
                          <span className="font-sans text-exeon-primary font-bold">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
                          <div className="flex items-center gap-3 mt-2">
                            <button onClick={() => changeQty(item.id, item.quantity - 1)} className="bg-exeon-bg border border-exeon-border text-exeon-primary w-6 h-6 flex items-center justify-center font-pixel text-[8px]">-</button>
                            <span className="font-sans text-white text-sm">{item.quantity}</span>
                            <button onClick={() => changeQty(item.id, item.quantity + 1)} className="bg-exeon-bg border border-exeon-border text-exeon-primary w-6 h-6 flex items-center justify-center font-pixel text-[8px]">+</button>
                          </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="absolute top-2 right-2 text-red-500 border border-red-500 w-6 h-6 flex items-center justify-center">
                          <i className="fas fa-times text-xs"></i>
                      </button>
                   </div>
                ))}
              </div>


              <div className="mt-8 pt-8 border-t-2 border-exeon-border flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="w-full md:w-auto text-center md:text-left">
                    <span className="font-pixel text-exeon-muted text-[10px] block mb-2 tracking-widest uppercase">Subtotal</span>
                    <span className="text-3xl font-sans font-bold text-exeon-primary drop-shadow-[0_0_5px_rgba(170,0,255,0.5)]">${total}</span>
                </div>
                <Link to="/checkout" className="btn btn-primary w-full md:w-auto px-12 py-4 flex items-center justify-center gap-3">
                    PROCEED TO CHECKOUT <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </>
          )}

        </div>
      </div>
    </main>
  );
}

export default Cart;

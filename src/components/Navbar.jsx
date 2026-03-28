import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cartService } from '../services/CartService';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleStorageChange = () => {
      setCartCount(cartService.getCartCount());
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cart-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cart-updated', handleStorageChange);
    };
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <div className="logo z-50">
        <Link to="/" onClick={closeMenu} className="text-2xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_#000] hover:text-exeon-primary-hover transition-colors">
          EXEON<span className="text-white">.</span>
        </Link>
      </div>


      <ul className="hidden md:flex gap-8 items-center">
        <li><Link to="/" className={`text-xs font-pixel ${location.pathname === '/' ? 'text-exeon-primary' : 'text-exeon-text'} hover:text-exeon-primary transition-colors`}>HOME</Link></li>
        <li><Link to="/products" className={`text-xs font-pixel ${location.pathname === '/products' && !location.search.includes('Games') ? 'text-exeon-primary' : 'text-exeon-text'} hover:text-exeon-primary transition-colors`}>GEAR</Link></li>
        <li><Link to="/products?cat=Games" className={`text-xs font-pixel ${location.search.includes('Games') ? 'text-exeon-primary' : 'text-exeon-text'} hover:text-exeon-primary transition-colors`}>GAMES</Link></li>
        <li><Link to="/about" className={`text-xs font-pixel ${location.pathname === '/about' ? 'text-exeon-primary' : 'text-exeon-text'} hover:text-exeon-primary transition-colors`}>ABOUT</Link></li>
        <li><Link to="/contact" className={`text-xs font-pixel ${location.pathname === '/contact' ? 'text-exeon-primary' : 'text-exeon-text'} hover:text-exeon-primary transition-colors`}>CONTACT</Link></li>
      </ul>


      <div className={`fixed inset-0 bg-exeon-bg/95 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} transition-all duration-300 z-40 md:hidden`}>
        <ul className="flex flex-col gap-8 text-center">
          <li><Link to="/" onClick={closeMenu} className="text-xl font-pixel text-exeon-text hover:text-exeon-primary transition-colors">HOME</Link></li>
          <li><Link to="/products" onClick={closeMenu} className="text-xl font-pixel text-exeon-text hover:text-exeon-primary transition-colors">GEAR</Link></li>
          <li><Link to="/products?cat=Games" onClick={closeMenu} className="text-xl font-pixel text-exeon-text hover:text-exeon-primary transition-colors">GAMES</Link></li>
          <li><Link to="/about" onClick={closeMenu} className="text-xl font-pixel text-exeon-text hover:text-exeon-primary transition-colors">ABOUT</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className="text-xl font-pixel text-exeon-text hover:text-exeon-primary transition-colors">CONTACT</Link></li>
        </ul>
      </div>

      <div className="flex gap-6 items-center z-50">
        <Link to="/login" className="text-lg text-exeon-primary hover:text-white transition-colors">
          <i className="far fa-user"></i>
        </Link>
        <Link to="/cart" className="relative text-lg text-exeon-primary hover:text-white transition-colors">
          <i className="fas fa-shopping-bag"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-white text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full border border-exeon-primary">
              {cartCount}
            </span>
          )}
        </Link>
        <button 
          className="md:hidden text-xl text-exeon-primary hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

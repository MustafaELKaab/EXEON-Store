import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-exeon-bg pt-16 pb-8 px-6 md:px-12 border-t-2 border-exeon-primary w-full mt-24">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
                <div className="flex flex-col gap-4">
                    <div className="logo">
                        <Link to="/" className="text-2xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_#000] hover:text-exeon-primary-hover transition-colors">
                          EXEON<span className="text-white">.</span>
                        </Link>
                    </div>
                    <p className="text-exeon-muted text-xs leading-relaxed max-w-xs uppercase tracking-wider">
                      POWERING THE FUTURE OF INTERACTIVE ENTERTAINMENT.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-pixel text-white tracking-widest uppercase mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-exeon-primary">
                      SHOP
                    </h4>
                    <ul className="flex flex-col gap-3 mt-4">
                        <li><Link to="/products" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">ALL GEAR</Link></li>
                        <li><Link to="/products?cat=Accessories" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">ACCESSORIES</Link></li>
                        <li><Link to="/products?cat=Games" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">VIDEO GAMES</Link></li>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-pixel text-white tracking-widest uppercase mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-exeon-primary">
                      SUPPORT
                    </h4>
                    <ul className="flex flex-col gap-3 mt-4">
                        <li><Link to="/about" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">ABOUT</Link></li>
                        <li><Link to="#" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">RETURNS</Link></li>
                        <li><Link to="/contact" className="text-exeon-muted text-xs hover:text-exeon-primary transition-colors uppercase">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-exeon-border pt-8 text-center">
                <p className="text-exeon-muted text-[10px] tracking-widest uppercase">&copy; 2024 EXEON STORE. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

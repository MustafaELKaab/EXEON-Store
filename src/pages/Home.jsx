import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/ProductService';

function Home() {
  const featured = productService.getFeaturedProducts(4);

  return (
    <main className="w-full">

      <header className="h-screen w-full relative flex items-center justify-start pt-20 px-6 md:px-12 lg:px-24">

        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/assets/images/hero.png")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-pixel text-exeon-primary drop-shadow-[4px_4px_0_rgba(170,0,255,0.7)] mb-6 leading-tight uppercase">
            NEXT GEN<br/>GAMING GEAR
          </h1>
          <p className="text-exeon-muted text-sm md:text-base font-sans tracking-wide mb-10 leading-relaxed uppercase border-l-2 border-exeon-primary pl-4 py-1">
            TELEPORT INTO THE GAME. EXOTIC ENDERMAN TECH.
          </p>
          <div className="flex gap-4">
            <Link to="/products" className="btn btn-primary px-8 py-4 text-sm shadow-[0_0_15px_rgba(170,0,255,0.5)]">
               GEAR UP NOW
            </Link>
            <Link to="/products?cat=Games" className="btn btn-outline px-8 py-4 text-sm hidden sm:inline-block">
               BROWSE GAMES
            </Link>
          </div>
        </div>
      </header>


      <section className="bg-[#05000a] py-24 px-6 md:px-12 border-t border-exeon-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] inline-block relative after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-exeon-primary">
              SHOP BY CATEGORY
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products?cat=Accessories" className="bg-exeon-card border-2 border-exeon-border p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:border-exeon-primary hover:shadow-[0_0_30px_rgba(170,0,255,0.2)] group rounded-sm">
                <i className="fas fa-headset text-4xl text-exeon-primary mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(170,0,255,0.8)]"></i>
                <h3 className="text-lg font-pixel text-exeon-primary mb-4 tracking-widest text-shadow-sm">ACCESSORIES</h3>
                <p className="text-exeon-text text-xs font-sans tracking-wider uppercase opacity-80">PRO MICE, KEYBOARDS, HEADSETS</p>
            </Link>
            
            <Link to="/products?cat=Games" className="bg-exeon-card border-2 border-exeon-border p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:border-exeon-primary hover:shadow-[0_0_30px_rgba(170,0,255,0.2)] group rounded-sm">
                <i className="fas fa-gamepad text-4xl text-exeon-primary mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(170,0,255,0.8)]"></i>
                <h3 className="text-lg font-pixel text-exeon-primary mb-4 tracking-widest text-shadow-sm">VIDEO GAMES</h3>
                <p className="text-exeon-text text-xs font-sans tracking-wider uppercase opacity-80">LATEST AAA TITLES</p>
            </Link>
            
            <Link to="/products?cat=Digital" className="bg-exeon-card border-2 border-exeon-border p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:border-exeon-primary hover:shadow-[0_0_30px_rgba(170,0,255,0.2)] group rounded-sm">
                <i className="fas fa-coins text-4xl text-exeon-primary mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(170,0,255,0.8)]"></i>
                <h3 className="text-lg font-pixel text-exeon-primary mb-4 tracking-widest text-shadow-sm">DIGITAL</h3>
                <p className="text-exeon-text text-xs font-sans tracking-wider uppercase opacity-80">BATTLE PASSES & CREDITS</p>
            </Link>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 md:px-12 bg-exeon-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-exeon-border pb-6">
            <h2 className="text-2xl md:text-3xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] text-left mb-0">
              TRENDING NOW
            </h2>
            <Link to="/products" className="text-exeon-primary font-pixel text-[10px] hover:text-white transition-colors flex items-center gap-2">
              VIEW ALL <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

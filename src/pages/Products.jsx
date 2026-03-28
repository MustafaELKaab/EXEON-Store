import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/ProductService';

function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const catFilter = searchParams.get('cat');
  
  const displayProducts = catFilter 
    ? productService.getProductsByCategory(catFilter)
    : productService.getAllProducts();

  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <header className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-4 uppercase">
          {catFilter ? `${catFilter} GEAR` : 'ALL GEAR'}
        </h1>
        <p className="text-exeon-muted text-sm font-sans tracking-widest uppercase relative inline-block after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-exeon-primary">
          DISCOVER OUR ELITE COLLECTION.
        </p>
      </header>

      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-exeon-border pb-8">
          <Link to="/products" className={`btn ${!catFilter ? 'btn-primary' : 'btn-outline border-2 border-exeon-border hover:border-exeon-primary text-exeon-text'} px-8`}>ALL</Link>
          <Link to="/products?cat=Accessories" className={`btn ${catFilter === 'Accessories' ? 'btn-primary' : 'btn-outline border-2 border-exeon-border hover:border-exeon-primary text-exeon-text'} px-8`}>ACCESSORIES</Link>
          <Link to="/products?cat=Games" className={`btn ${catFilter === 'Games' ? 'btn-primary' : 'btn-outline border-2 border-exeon-border hover:border-exeon-primary text-exeon-text'} px-8`}>GAMES</Link>
          <Link to="/products?cat=Digital" className={`btn ${catFilter === 'Digital' ? 'btn-primary' : 'btn-outline border-2 border-exeon-border hover:border-exeon-primary text-exeon-text'} px-8`}>DIGITAL</Link>
        </div>
        
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-exeon-muted font-pixel mb-4">NO PRODUCTS FOUND</h2>
            <Link to="/products" className="text-exeon-primary underline font-sans text-sm">RETURN TO ALL GEAR</Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;

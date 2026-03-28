import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-4 uppercase">
            ABOUT EXEON
          </h1>
          <p className="text-exeon-muted text-sm font-sans tracking-widest uppercase relative inline-block after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-exeon-primary">
            THE ORIGIN OF THE VOID
          </p>
        </header>

        <section className="bg-exeon-card border-2 border-exeon-border p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden mb-12">

          <div className="absolute top-0 right-0 w-32 h-32 bg-exeon-primary opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-exeon-primary opacity-5 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="w-64 h-64 border-4 border-exeon-primary flex items-center justify-center bg-black rotate-45 transform shadow-[0_0_30px_rgba(170,0,255,0.2)]">
                  <div className="-rotate-45 transform">
                     <i className="fas fa-cube text-7xl text-exeon-primary drop-shadow-[0_0_15px_rgba(170,0,255,1)]"></i>
                  </div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-pixel text-white mb-6 uppercase">OUR MISSION</h2>
              <p className="text-gray-300 font-sans leading-relaxed mb-6">
                Founded in the dark corners of the digital realm, EXEON evolved from a simple concept into a leading purveyor of exotic, Enderman-inspired gaming hardware. Our goal is to bridge the gap between high-performance tactical gear and immersive dark-themed aesthetics.
              </p>
              <p className="text-gray-300 font-sans leading-relaxed mb-6">
                We design equipment engineered for ultimate longevity and unmatched precision, allowing gamers to teleport into the competitive scene with lethal accuracy.
              </p>
              <ul className="list-disc pl-5 text-exeon-primary font-sans text-sm tracking-widest uppercase">
                <li className="mb-2"><span className="text-gray-300">Premium Materials</span></li>
                <li className="mb-2"><span className="text-gray-300">Next-Gen Optical Switches</span></li>
                <li className="mb-2"><span className="text-gray-300">Zero-Latency Connectivity</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="border border-exeon-border bg-black p-8 hover:border-exeon-primary transition-colors group">
               <i className="fas fa-users text-3xl text-exeon-muted mb-4 group-hover:text-exeon-primary transition-colors"></i>
               <h3 className="font-pixel text-white mb-4 uppercase text-lg">THE TEAM</h3>
               <p className="text-gray-400 font-sans text-sm">A collective of veteran engineers and hardcore gamers dedicated to perfecting every click.</p>
            </div>
            <div className="border border-exeon-border bg-black p-8 hover:border-exeon-primary transition-colors group">
               <i className="fas fa-globe text-3xl text-exeon-muted mb-4 group-hover:text-exeon-primary transition-colors"></i>
               <h3 className="font-pixel text-white mb-4 uppercase text-lg">GLOBAL REACH</h3>
               <p className="text-gray-400 font-sans text-sm">Shipping to every server node on the planet, delivering gear right to your physical coordinates.</p>
            </div>
        </section>
        
        <div className="mt-16 text-center">
            <Link to="/products" className="btn btn-primary px-8 py-4 uppercase tracking-widest shadow-[0_0_15px_rgba(170,0,255,0.5)]">EXPLORE THE ARSENAL <i className="fas fa-arrow-right ml-2"></i></Link>
        </div>
      </div>
    </main>
  );
}

export default About;

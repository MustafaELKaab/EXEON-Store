import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');
    setTimeout(() => {
      setStatus('MESSAGE RECEIVED. OUR AGENTS WILL RESPOND SHORTLY.');
      e.target.reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-exeon-bg pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-pixel text-exeon-primary drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] mb-4 uppercase">
            CONTACT COMMAND
          </h1>
          <p className="text-exeon-muted text-sm font-sans tracking-widest uppercase relative inline-block after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-exeon-primary">
            ESTABLISH A SECURE CONNECTION
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <section className="bg-exeon-card border-2 border-exeon-border p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-center">
            <h2 className="text-xl font-pixel text-white mb-8 border-b border-exeon-border pb-4 uppercase">HEADQUARTERS</h2>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 bg-black border border-exeon-primary flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(170,0,255,0.2)]">
                <i className="fas fa-map-marker-alt text-exeon-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-pixel text-[10px] tracking-widest uppercase mb-2">LOCATION</h3>
                <p className="text-exeon-muted font-sans text-sm">SECTOR 7G, THE END<br/>OBSIDIAN CITADEL, 00101</p>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 bg-black border border-exeon-primary flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(170,0,255,0.2)]">
                <i className="fas fa-envelope text-exeon-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-pixel text-[10px] tracking-widest uppercase mb-2">TRANSMISSIONS</h3>
                <p className="text-exeon-primary hover:text-white transition-colors cursor-pointer font-sans text-sm">SUPPORT@EXEON.VOID</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-black border border-exeon-primary flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(170,0,255,0.2)]">
                <i className="fas fa-satellite-dish text-exeon-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-white font-pixel text-[10px] tracking-widest uppercase mb-2">COMMS LINK</h3>
                <p className="text-exeon-muted font-sans text-sm">+00 (VOID) 555-0199</p>
              </div>
            </div>
          </section>


          <section className="bg-exeon-card border-2 border-exeon-border p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
            <h2 className="text-xl font-pixel text-white mb-8 border-b border-exeon-border pb-4 uppercase">SEND ENCRYPTED SIGNAL</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">OPERATIVE NAME</label>
                <input 
                  type="text" 
                  required 
                  placeholder="GUEST_USER_99" 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm tracking-wider focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted/50" 
                />
              </div>

              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">RETURN FREQUENCY (EMAIL)</label>
                <input 
                  type="email" 
                  required 
                  placeholder="GUEST@DOMAIN.NET" 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm tracking-wider focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted/50" 
                />
              </div>

              <div>
                <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">MESSAGE PAYLOAD</label>
                <textarea 
                  required 
                  rows="4"
                  placeholder="ENTER MISSION BRIEFING HERE..." 
                  className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm tracking-wider focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted/50 resize-y" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn py-4 w-full text-sm uppercase tracking-widest shadow-[inset_0_0_15px_rgba(170,0,255,0.3)] bg-exeon-primary text-black border-exeon-primary hover:bg-black hover:text-exeon-primary"
                disabled={status === 'TRANSMITTING...'}
              >
                {status === 'TRANSMITTING...' ? <><i className="fas fa-spinner fa-spin mr-2"></i> TRANSMITTING...</> : <><i className="fas fa-paper-plane mr-2"></i> INITIATE TRANSFER</>}
              </button>
            </form>


            {status && status !== 'TRANSMITTING...' && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm z-20 flex items-center justify-center p-8 border-2 border-green-500">
                <div className="text-center">
                  <i className="fas fa-check-circle text-5xl text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(0,255,0,0.8)]"></i>
                  <h3 className="font-pixel text-green-500 text-sm leading-loose tracking-widest">{status}</h3>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Contact;

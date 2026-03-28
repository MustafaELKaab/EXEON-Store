import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('ACCESS GRANTED!');
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-exeon-bg flex items-center justify-center px-6 pt-32 pb-16">
      <div className="w-full max-w-md bg-exeon-card border-2 border-exeon-border p-8 md:p-12 shadow-[0_0_50px_rgba(170,0,255,0.15)] relative overflow-hidden group">
        

        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-exeon-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-exeon-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>

        <div className="text-center mb-10">
            <i className="fas fa-fingerprint text-4xl text-exeon-primary mb-4 drop-shadow-[0_0_10px_rgba(170,0,255,0.8)]"></i>
            <h2 className="text-3xl font-pixel text-white drop-shadow-[2px_2px_0_rgba(170,0,255,0.7)] uppercase">ACCESS PORTAL</h2>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">EMAIL</label>
            <input 
                type="email" 
                required 
                placeholder="PLAYER@VOID.NET" 
                className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm tracking-wider focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted/50" 
            />
          </div>
          <div>
            <label className="block text-exeon-primary font-pixel text-[10px] mb-2 tracking-widest uppercase">PASSWORD</label>
            <input 
                type="password" 
                required 
                placeholder="••••••••" 
                className="w-full p-4 bg-black border-2 border-exeon-border text-white font-sans text-sm tracking-wider focus:border-exeon-primary outline-none transition-colors placeholder-exeon-muted/50" 
            />
          </div>
          <button type="submit" className="btn btn-primary w-full py-4 text-sm mt-4 tracking-widest flex justify-center items-center gap-2">
              <i className="fas fa-sign-in-alt"></i> INITIALIZE LOGIN
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs font-sans tracking-widest uppercase">
          <p className="text-exeon-muted">
            NEW PLAYER? <Link to="/register" className="text-exeon-primary hover:text-white transition-colors ml-2 font-bold decoration-exeon-primary underline-offset-4 hover:underline">CREATE ACCOUNT</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;

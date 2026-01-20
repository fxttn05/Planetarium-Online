import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mars = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1f3c] text-white font-sans flex flex-col">
     
      <main className="flex-grow max-w-5xl mx-auto mt-10 px-6 pb-20">
        
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
         
          <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
             <img 
               src="/Astronaut.png" 
               alt="Character Icon" 
               className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
             />
          </div>

  
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">Mars</h1>

        
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-[#2d345e] shadow-2xl">
            <img 
              src="/planet/Mars.png" 
              alt="Mars Planet" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        <div className="space-y-12 max-w-3xl">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-10 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
              <h2 className="text-3xl md:text-4xl font-bold">Fakta Cepat</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-300 ml-6 marker:text-red-500">
              <li>Disebut "Planet Merah"</li>
              <li>Punya gunung terbesar di tata surya (Olympus Mons)</li>
              <li>Udara sangat tipis</li>
              <li>Punya dua bulan kecil: Phobos dan Deimos</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1.5 h-10 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
              <h2 className="text-3xl md:text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 ml-6">
              Mars warnanya merah karena penuh debu besi. Suhunya dingin, tapi banyak peneliti 
              percaya bahwa dulu Mars punya air. Itulah kenapa manusia sangat penasaran dan 
              ingin menjelajahi planet ini. Mars seperti tetangga misterius yang menunggu 
              ditemukan rahasianya.
            </p>
          </section>
        </div>

     
        <div className="flex justify-center mt-20">
          <button 
            onClick={() => navigate('/planet')}
            className="bg-[#d1d1d1] text-black px-16 py-3 rounded-2xl font-bold text-xl hover:bg-white hover:shadow-white/20 transition-all transform active:scale-95 shadow-xl"
          >
            kembali
          </button>
        </div>
      </main>

    
    </div>
  );
};

export default Mars;
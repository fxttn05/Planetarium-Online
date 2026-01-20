import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
const Pluto = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1f3c] text-white">
      
      {/* CONTENT */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <img
            src="/Astronaut.png"
            alt="Astronaut"
            className="w-48 h-48 object-contain"
          />

          <h1 className="text-7xl md:text-9xl font-bold">
           Pluto
          </h1>

          <img
            src="/planet/Pluto.png"
            alt="Pluto"
            className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-[#2d345e]"
          />
        </div>

        {/* CONTENT  */}
        <div className="max-w-3xl space-y-16">
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Fakta Cepat</h2>
            </div>
            <ul className="list-disc ml-6 space-y-3 text-xl text-gray-300 marker:text-red-500">
              <li>Pluto adalah planet kerdil di tata surya kita</li>
              <li>Memiliki lima bulan yang diketahui</li>
              <li>Permukaannya terdiri dari es dan batuan</li>
              <li>Orbitnya sangat elips dan miring</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6">
              Pluto adalah planet kerdil yang terletak di tepi tata surya kita.
              Meskipun ukurannya kecil, Pluto memiliki lima bulan yang diketahui,
              dengan Charon sebagai yang terbesar. Permukaannya terdiri dari es
              dan batuan, dan orbitnya sangat elips serta miring dibandingkan
              dengan planet-planet lain di tata surya.
            </p>
          </section>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-24">
          <button
            onClick={() => navigate('/planet')}
            className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95"
          >
            Kembali
          </button>
        </div>

      </main>

   
    </div>
  )
}

export default Pluto
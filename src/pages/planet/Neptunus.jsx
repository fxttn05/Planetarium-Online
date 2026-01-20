import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer'

const Neptunus = () => {
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
            Neptunus
          </h1>

          <img
            src="/planet/Neptunus.png"
            alt="Neptunus"
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
              <li>Neptunus adalah planet terjauh dari Matahari</li>
              <li>Memiliki warna biru karena metana di atmosfer</li>
              <li>Angin tercepat di tata surya (2.100 km/jam)</li>
              <li>Dilengkapi oleh 14 bulan yang dikenal</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6">
              Neptunus adalah planet terjauh dari Matahari dalam tata surya kita.
              Planet ini dikenal dengan warna birunya yang mencolok, 
              yang disebabkan oleh keberadaan metana di atmosfernya. 
              Neptunus memiliki angin tercepat di tata surya, 
              dengan kecepatan yang dapat mencapai hingga 2.100 kilometer per jam.
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

export default Neptunus
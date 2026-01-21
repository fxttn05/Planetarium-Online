import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Bulan = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1f3c] text-white">
      {/* CONTENT */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          {/* GAMBAR KIRI */}
          <img src="/Astronaut.png" alt="Astronaut" className="w-48 h-48 object-contain" />

          {/* JUDUL */}
          <h1 className="order-1 md:order-2 text-7xl md:text-9xl font-bold font-space">Bumi</h1>

          {/* GAMBAR KANAN */}
          <img src="/planet-real/Bumi.png" alt="Mars Real" className="order-3 md:order-3 w-40 h-40 md:w-56 md:h-56 object-contain" />
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6">
              Bumi adalah satu-satunya planet yang diketahui mendukung kehidupan, dengan permukaan yang sebagian besar tertutup air. Atmosfernya kaya akan oksigen dan memiliki lapisan ozon yang melindungi kehidupan dari radiasi matahari
              yang berbahaya.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-24">
          <button onClick={() => navigate('/planet')} className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95">
            Kembali
          </button>
        </div>
      </main>
    </div>
  );
};

export default Bulan;

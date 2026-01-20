import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

const Jupiter = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex flex-col bg-[#1a1f3c] text-white'>
      <main className='flex-grow max-w-5xl mx-auto px-6 py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 mb-20'>
          <img
            src="/Astronaut.png"
            alt="Astronaut"
            className="w-48 h-48 object-contain"
          />

          <h1 className="text-7xl md:text-9xl font-bold">
            Jupiter
          </h1>

          <img
            src="/planet/Jupiter.png"
            alt="Jupiter"
            className="w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-[#2d345e]"
          />
        </div>

        <div className='max-w-3xl space-y-16'>
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className='w-1 h-10 bg-red-600 rounded-full'></div>
              <h2 className='text-4xl font-bold'> Fakta Cepat</h2>
            </div>
            <ul className='list-disc ml-6 space-y-3 text-xl text-gray-300 marker:text-red-500'>
              <li>Planet terbesar di tata surya</li>
              <li>Memiliki lebih dari 79 bulan</li>
              <li>Memiliki Badai Besar Merah</li>
              <li>Terbuat dari gas dan cairan</li>
            </ul>
          </section>

          <section>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-1 h-10 bg-red-600 rounded-full'></div>
              <h2 className='text-4xl font-bold'> Penjelasan</h2>
            </div>
            <p className='text-xl leading-relaxed text-gray-300 ml-6'>
              Jupiter adalah planet terbesar di tata surya kita,
              dikenal dengan Badai Besar Merah yang ikonik. 
              Planet ini terutama terdiri dari gas dan cairan, 
              dan memiliki lebih dari 79 bulan yang mengorbitnya, 
              termasuk bulan terbesar di tata surya, Ganymede.
            </p>
          </section>
        </div>

        <div className='flex justify-center mt-24'>
          <button
            onClick={() => navigate('/planet')}
            className='bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xl hover:bg-white transition active:scale-95'
          >
            Kembali
          </button>
        </div>

      </main>
    </div>
  )
}

export default Jupiter
import React from 'react'

import QuizCard from "../../components/Quiz/QuizCard";
import saturnusQuiz from "../../data/saturnusQuiz";
import MiniCarouselCard from "../../components/MiniCarouselCard";
import { saturnFacts } from "../../data/facts";
import { Link } from 'react-router-dom';

const Bulan = () => {
  

  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white">
      <div className="flex-grow max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          
          {/* GAMBAR KIRI */}
          <img
            src="/planet/Saturnus.png"
            alt="Saturnus"
            className="order-2 md:order-1 w-40 h-40 md:w-56 md:h-56 float"
          />
        
          {/* JUDUL */}
          <h1 className="order-1 md:order-2 text-7xl md:text-9xl font-bold font-space">
            Saturnus
          </h1>
          
          {/* GAMBAR KANAN */}
          <img
            src="/planet-real/Saturnus.png"
            alt="Saturnus Real"
            className="order-3 md:order-3 w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        
        </div>


        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6 mb-4">
              Saturnus adalah planet gas raksasa yang terkenal dengan sistem cincinnya yang indah. Planet ini memiliki banyak bulan dan kepadatan yang rendah dibandingkan planet lain. Saturnus memerlukan waktu sekitar 29 tahun untuk mengelilingi Matahari satu kali.
            </p>
          </div>

          <div className='w-full '>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/qTJJUsUk3_8?si=62rXCIiO0gq9SRKI&amp;start=5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full md:min-h-[75vh] rounded-xl"
            />
          </div>

          <div className='flex flex-wrap md:flex-nowrap gap-x-5'>
            <div className='w-full md:w-2/5'>
              <div className='rounded-lg bg-[#2F3780]/20 mb-5 p-8'>
                <MiniCarouselCard facts={saturnFacts} />
              </div>
            </div> 
            <div className='w-full md:w-3/5'>
              <QuizCard quizData={saturnusQuiz}/>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-24">
          <Link to="/planet/jupiter">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              <i class="fa-solid fa-arrow-left"></i> Menuju Jupiter
            </button>
          </Link>
          <Link to="/planet">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Halaman utama
            </button>
          </Link>
          <Link to="/planet/uranus">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Menuju Uranus <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Bulan;

import React from 'react'

import QuizCard from "../../components/Quiz/QuizCard";
import matahariQuiz from "../../data/matahariQuiz";
import MiniCarouselCard from "../../components/MiniCarouselCard";
import { sunFacts } from "../../data/facts";
import { Link } from 'react-router-dom';

const Matahari = () => {

  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white">
      <div className="flex-grow max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          
          {/* GAMBAR KIRI */}
          <img
            src="/planet/Matahari.png"
            alt="Mars"
            className="order-2 md:order-1 w-40 h-40 md:w-56 md:h-56 float"
          />
        
          {/* JUDUL */}
          <h1 className="order-1 md:order-2 text-7xl md:text-9xl font-bold font-space">
            Matahari
          </h1>
          
          {/* GAMBAR KANAN */}
          <img
            src="/planet-real/Matahari.png"
            alt="Mars Real"
            className="order-3 md:order-3 w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        
        </div>


        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Penjelasan</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6">
              Matahari itu sangat besar, bahkan bisa muat 1,3 juta Bumi di dalamnya lho! Matahari juga berperan penting karena memberikan cahaya dan panas yang membuat kehidupan di Bumi bisa berlangsung. <br></br><br></br>Matahari dikenal sebagai pusat tata surya karena semua planet mengelilinginya. Ukurannya sangat besar dan memancarkan cahaya serta panas yang membuat Bumi tetap hangat. Tanpa Matahari, tidak akan ada kehidupan, sehingga Matahari menjadi benda langit yang sangat penting dan menarik untuk dipelajari.
            </p>
          </div>

          <div className='w-full '>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/tf9_VWicm50?si=fKSfDbxEGFgKK48U&amp;start=82"
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
                <MiniCarouselCard facts={sunFacts} />
              </div>
            </div> 
            <div className='w-full md:w-3/5'>
              <QuizCard quizData={matahariQuiz}/>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-24">
          <Link to="/planet/bumi">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              <i class="fa-solid fa-arrow-left"></i> Menuju Bumi
            </button>
          </Link>
          <Link to="/planet">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Kumpulan planet
            </button>
          </Link>
          <Link to="/planet/merkurius">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Menuju Merkurius <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Matahari
import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuizCard from "../../components/Quiz/QuizCard";
import jupiterQuiz from "../../data/jupiterQuiz";
import MiniCarouselCard from "../../components/MiniCarouselCard";
import { jupiterFacts } from "../../data/facts";
import { Link } from 'react-router-dom';

const Bulan = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white">
      <div className="flex-grow max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          
          {/* GAMBAR KIRI */}
          <img
            src="/planet/Jupiter.png"
            alt="Jupiter"
            className="order-2 md:order-1 w-40 h-40 md:w-56 md:h-56 float"
          />
        
          {/* JUDUL */}
          <h1 className="order-1 md:order-2 text-7xl md:text-9xl font-bold font-space">
            Jupiter
          </h1>
          
          {/* GAMBAR KANAN */}
          <img
            src="/planet-real/Jupiter.png"
            alt="Jupiter Real"
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
              
            </p>
            <div className="flex items-center gap-4 mb-6 mt-6">
              <div className="w-1 h-10 bg-red-600 rounded-full"></div>
              <h2 className="text-4xl font-bold">Teman Jupiter</h2>
            </div>
            <p className="text-xl leading-relaxed text-gray-300 ml-6 mb-4">
              Jupiter memiliki satelit alami yang disebut "moon". Moon mengelilingi Jupiter sebagai satu-satunya satelit alaminya dan selalu menjaga jarak yang tetap. Dari posisinya, Moon memengaruhi pasang surut air laut dan membantu menjaga keseimbangan gerakan Jupiter di ruang angkasa.
            </p>
            <Link to="/planet/saturnus">
              <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full md:w-1/3">
                Menuju saturnus <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>

          <div className='w-full '>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/K0mhAGTQuA4?si=5bjUo30ed5wGPGH_&amp;start=63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>

          <div className='flex flex-wrap md:flex-nowrap gap-x-5'>
            <div className='w-full md:w-2/5'>
              <div className='rounded-lg bg-[#2F3780]/20 mb-5 p-8'>
                <MiniCarouselCard facts={jupiterFacts} />
              </div>
            </div> 
            <div className='w-full md:w-3/5'>
              <QuizCard quizData={jupiterQuiz}/>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-24">
          <Link to="/planet/Saturnus">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              <i class="fa-solid fa-arrow-left"></i> Menuju Saturnus
            </button>
          </Link>
          <Link to="/planet">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Halaman utama
            </button>
          </Link>
          <Link to="/planet/Saturnus">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Menuju Saturnus <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Bulan;

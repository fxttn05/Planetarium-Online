import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuizCard from "../../components/Quiz/QuizCard";
import bumiQuiz from "../../data/bumiQuiz";
import MiniCarouselCard from "../../components/MiniCarouselCard";
import { earthFacts } from "../../data/facts";
import { Link } from 'react-router-dom';

const Bumi = () => {
  
  
  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white">
      <div className="flex-grow max-w-5xl mx-auto py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          
          {/* GAMBAR KIRI */}
          <img
            src="/planet/Bumi.png"
            alt="Mars"
            className="order-2 md:order-1 w-40 h-40 md:w-56 md:h-56 float"
          />
        
          {/* JUDUL */}
          <h1 className="order-1 md:order-2 text-7xl md:text-9xl font-bold font-space">
            Bumi
          </h1>
          
          {/* GAMBAR KANAN */}
          <img
            src="/planet-real/Bumi.png"
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
              <p className="text-xl leading-relaxed text-gray-300 ml-6 mb-4">
                Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui mendukung kehidupan. Planet ini memiliki permukaan yang sebagian besar tertutup air serta atmosfer yang kaya oksigen untuk makhluk hidup. Bumi membutuhkan waktu sekitar satu tahun untuk mengelilingi Matahari.
              </p>
              <div className="flex items-center gap-4 mb-6 mt-6">
                <div className="w-1 h-10 bg-red-600 rounded-full"></div>
                <h2 className="text-4xl font-bold">Teman Bumi</h2>
              </div>
              <p className="text-xl leading-relaxed text-gray-300 ml-6 mb-4">
                Bumi memiliki satu satelit alami yaitu Bulan, yang mengelilinginya secara teratur. Keberadaan Bulan membantu menjaga kestabilan rotasi Bumi dan berperan penting dalam terjadinya pasang surut air laut di seluruh dunia.
              </p>
              <Link to="/planet/bulan">
                <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full md:w-1/3">
                  Menuju Bulan <i class="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            
          </div>

          <div className='w-full '>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/WVfdQkBEYZo?si=vEikfWpupS0u7A_7&amp;start=30"
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
                <MiniCarouselCard facts={earthFacts} />
              </div>
            </div> 
            <div className='w-full md:w-3/5'>
              <QuizCard quizData={bumiQuiz}/>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-24">
          <Link to="/planet/venus">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              <i class="fa-solid fa-arrow-left"></i> Menuju Venus
            </button>
          </Link>
          <Link to="/planet">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Halaman utama
            </button>
          </Link>
          <Link to="/planet/mars">
            <button className="bg-gray-200 text-black px-14 py-3 rounded-xl font-bold text-xs md:text-lg hover:bg-white transition active:scale-95 w-full">
              Menuju Mars <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Bumi;

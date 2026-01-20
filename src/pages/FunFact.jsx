import React from 'react'
import { Link } from 'react-router-dom';
import QuizCard from "../components/Quiz/QuizCard";
import funfactQuiz from "../data/funfactQuiz";
import MiniCarouselCard from "../components/MiniCarouselCard";
import { solarSystemFunFacts } from "../data/facts";
import PlanetFlipCard from "../components/PlanetFlipCard";
import { planetFacts } from "../data/planetFacts";

const FunFact = () => {
  return (
    <>
      <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white px-2 sm:px-20 py-4 md:py-12">

        <div className='w-full  bg-linear-80 from-blue-800 to-pink-600 rounded-xl'>
          <div className='flex gap-x-10 px-8 py-8 md:px-16 md:py-10'>
            <div className='w-full md:w-3/5'>
              <h1 className='space-grotesk-bold text-7xl mt-3'>Matahari Itu Sangat Besar!</h1>
              <p className='mt-5 font-space text-lg'>Tahukah kamu? Matahari itu sangat besar, bahkan bisa muat <span className='underline space-grotesk-bold'>1,3 juta Bumi</span> di dalamnya lho! Matahari juga berperan penting karena memberikan cahaya dan panas yang membuat kehidupan di Bumi bisa berlangsung.</p>
              <div className='mt-6 md:mt-8 flex justify-center md:justify-normal pl-4'>
              <div className=' hover:scale-102'>
                <div className='absolute -ml-4 -mt-4'>
                  <img src="/planet/Bumi.png" alt=""  className='h-12 w-12 float'/>
                </div>
                <div className=''>
                  <Link to="/planet/matahari">
                    <button className='cursor-pointer py-2 px-10 bg-white rounded-full space-grotesk-semibold text-xl md:text-3xl text-black'>
                      Yuk Cari Tahu
                    </button>
                  </Link> 
                </div>
              </div>
            </div>
            </div>
            <div className='hidden md:block w-2/5'>
              <img src="/planet-real/Matahari4x3.png" alt="" className='h-auto object-cover rounded-xl float'/>
            </div>
          </div>
        </div>

        <div className='mt-14'>
          <h1 className='space-grotesk-bold text-4xl'>Planet Flipfact</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-10">
            <PlanetFlipCard name="Mercury" image="/planet/Merkurius.png" facts={planetFacts.mercury} />
            <PlanetFlipCard name="Venus" image="/planet/Venus.png" facts={planetFacts.venus} />
            <PlanetFlipCard name="Earth" image="/planet/Bumi.png" facts={planetFacts.earth} />
            <PlanetFlipCard name="Mars" image="/planet/Mars.png" facts={planetFacts.mars} />
            <PlanetFlipCard name="Jupiter" image="/planet/Jupiter.png" facts={planetFacts.jupiter} />
            <PlanetFlipCard name="Saturn" image="/planet/Saturnus.png" facts={planetFacts.saturn} />
            <PlanetFlipCard name="Uranus" image="/planet/Uranus.png" facts={planetFacts.uranus} />
            <PlanetFlipCard name="Neptune" image="/planet/Neptunus.png" facts={planetFacts.neptune} />
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap gap-x-5 mt-14'>
            <div className='w-full md:w-2/5'>
              <div className='rounded-lg bg-[#2F3780]/20 mb-5 p-8'>
                <MiniCarouselCard facts={solarSystemFunFacts} />
              </div>
            </div> 
            <div className='w-full md:w-3/5'>
              <QuizCard quizData={funfactQuiz}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default FunFact
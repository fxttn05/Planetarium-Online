import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

const PlanetLayout = () => {
  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white space-grotesk-normal">
      <div className='px-8 sm:px-40 py-4 sm:py-10 bg-blue-800/10 min-h-64'>
        <div className='flex gap-x-20'>
          <div className='w-2/5'>
            <img src="/Astronaut.png" alt="" className='rounded-xl '/>
          </div>
          <div className='w-3/5'>
            <p className='text-7xl font-space font-black leading-24'>Ayo Jelajahi Alam Semesta</p>
            <p className='text-xl font-space leading-10'>Ikuti petualangan seru melintasi tata surya bersama Kapten Komet, astronot cilik yang akan menemanimu belajar rahasia bintang!</p>
            <div className='mt-10 flex justify-center md:justify-normal pl-8'>
              <div className=' hover:scale-102'>
                <div className='absolute -ml-6 -mt-6'>
                  <img src="AstronotMale.png" alt="" className='h-12 w-14 float'/>
                </div>
                <div className=''>
                  <Link to="/planet"><button className='cursor-pointer py-2 px-10 bg-white rounded-full space-grotesk-semibold text-xl md:text-3xl text-black'>Mulai Petualangan!</button></Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Konten planet */}
      <Outlet />
    </div>
  )
}

export default PlanetLayout
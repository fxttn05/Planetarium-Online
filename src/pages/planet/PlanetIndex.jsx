import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const planets = [
  { photo: "Merkurius", path: "merkurius" },
  { photo: "Venus", path: "venus" },
  { photo: "Bumi", path: "bumi" },
  { photo: "Mars", path: "mars" },
  { photo: "Jupiter", path: "jupiter" },
  { photo: "Saturnus", path: "saturnus" },
  { photo: "Uranus", path: "uranus" },
  { photo: "Neptunus", path: "neptunus" },
  { photo: "Pluto", path: "pluto" },
  { photo: "Bulan", path: "bulan" },
];

const PlanetIndex = () => {
  return (
    <>
      <div className='px-8 sm:px-40 py-4 sm:py-10 bg-blue-800/10 min-h-64'>
        <div className='flex gap-x-20'>
          <div className='hidden md:block w-2/5'>
            <img src="/Astronaut.png" alt="" className='rounded-xl '/>
          </div>
          <div className='w-full md:w-3/5'>
            <p className='text-7xl font-space font-black leading-24'>Ayo Jelajahi Alam Semesta</p>
            <p className='text-xl font-space leading-10'>Ikuti petualangan seru melintasi tata surya bersama Kapten Komet, astronot cilik yang akan menemanimu belajar rahasia bintang!</p>
            <div className='mt-10 flex justify-center md:justify-normal pl-8'>
              <div className=' hover:scale-102'>
                <div className='absolute -ml-6 -mt-6'>
                  <img src="AstronotMale.png" alt="" className='h-12 w-14 float'/>
                </div>
                <div className=''>
                  <Link to="/planet/merkurius">
                    <button className='cursor-pointer py-3 px-10 bg-white rounded-full space-grotesk-semibold text-lg md:text-3xl text-black'>
                      Mulai Petualangan <i class="fa-solid fa-compass"></i>
                    </button>
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10 px-2 sm:px-20'>
        <div className='mb-16'>
          <p className='text-2xl md:text-4xl space-grotesk-semibold text-center'> Planet Tata Surya Kita</p>
        </div>
        <div className='flex flex-wrap gap-y-16'>
        {planets.map((p) => (
          <div className="w-full md:w-1/3 px-4">
            <div className='p-2 md:p-4 bg-[#2F3780] rounded-t-lg'>
              <div className='flex justify-center mb-5 -mt-12'>
                <img src={'/planet/'+p.photo+'.png'} alt=""  className='h-32 w-32 hover:scale-102 float'/>
              </div>
              <p className='text-3xl space-grotesk-semibold text-center'>{p.photo}</p>
            </div>
            <NavLink
              key={p.path}
              to={p.path}
            >
              <div className='bg-gray-700/40 h-10 w-full rounded-b-lg text-center hover:bg-gray-700 py-2'>
                  Yuk Cari Tahu
              </div>
            </NavLink>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default PlanetIndex
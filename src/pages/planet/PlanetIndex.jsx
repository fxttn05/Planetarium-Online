import React from 'react'
import { NavLink } from "react-router-dom";

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
      <div className='mt-10 mb-14 px-2 sm:px-20'>
        <div className='mb-16'>
          <p className='text-xl md:text-4xl space-grotesk-semibold text-center'> Planet Tata Surya Kita</p>
        </div>
        <div className='flex flex-wrap gap-y-16 mb-8 '>
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
        <div className=''>
          <p className='text-2xl space-grotesk-semibold text-center'> dan masih banyak lagi.. </p>
        </div>
      </div>
    </>
  )
}

export default PlanetIndex
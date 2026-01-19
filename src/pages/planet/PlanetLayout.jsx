import React from 'react'
import { Outlet } from "react-router-dom";

const PlanetLayout = () => {
  return (
    <div className="bg-[#171B3E] text-white space-grotesk-normal h-screen px-10 py-8">
      <h1 className="text-4xl font-bold mb-6">Planet Tata Surya 🪐</h1>

      {/* Konten planet */}
      <Outlet />
    </div>
  )
}

export default PlanetLayout
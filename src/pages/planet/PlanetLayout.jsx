import React from 'react'
import { Outlet } from "react-router-dom";

const PlanetLayout = () => {
  return (
    <div className="bg-[url('/outer-space-background.jpg')] bg-cover bg-center bg-[#171B3E] bg-blend-multiply text-white space-grotesk-normal">
      {/* Konten planet */}
      <Outlet />
    </div>
  )
}

export default PlanetLayout
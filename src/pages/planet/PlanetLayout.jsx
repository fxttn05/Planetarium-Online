import React from 'react'
import { Outlet } from "react-router-dom";

const PlanetLayout = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Planet Tata Surya 🪐</h1>

      {/* Konten planet */}
      <Outlet />
    </div>
  )
}

export default PlanetLayout
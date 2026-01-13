import React from 'react'
import { NavLink } from "react-router-dom";

const planets = [
  { name: "Merkurius", path: "merkurius" },
  { name: "Venus", path: "venus" },
  { name: "Bumi", path: "bumi" },
  { name: "Mars", path: "mars" },
  { name: "Jupiter", path: "jupiter" },
  { name: "Saturnus", path: "saturnus" },
  { name: "Uranus", path: "uranus" },
  { name: "Neptunus", path: "neptunus" },
  { name: "Pluto", path: "pluto" },
  { name: "Bulan", path: "bulan" },
];

const PlanetIndex = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {planets.map((p) => (
        <NavLink
          key={p.path}
          to={p.path}
          className="rounded-xl bg-gray-800/60 p-4 text-center hover:bg-gray-700 transition"
        >
          {p.name}
        </NavLink>
      ))}
    </div>
  )
}

export default PlanetIndex
import React, { useState } from "react";

const PlanetFlipCard = ({ name, image, facts }) => {
  const [flipped, setFlipped] = useState(false);
  const [factIndex, setFactIndex] = useState(
    Math.floor(Math.random() * facts.length)
  );

  const handleFlip = () => {
    setFlipped(!flipped);

    // ganti fakta SETELAH setengah animasi
    setTimeout(() => {
      setFactIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * facts.length);
        } while (next === prev);
        return next;
      });
    }, 320);
  };

  return (
    <div
      onClick={handleFlip}
      className="w-72 h-81 perspective cursor-pointer hover:scale-103"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-3xl bg-[#0e122a] flex flex-col items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-28 h-28 rounded-full mb-6 float"
          />
          <h3 className="text-white text-2xl font-bold">{name}</h3>
          <p className="text-cyan-400 mt-3 text-sm">Klik untuk Fakta menarik</p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-[#0e122a] flex items-center justify-center px-6 text-center">
          <p className="text-white text-xl leading-relaxed">
            {facts[factIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanetFlipCard;

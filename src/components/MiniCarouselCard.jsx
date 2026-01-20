import React, { useState, useEffect } from "react";

const MiniCarouselCard = ({ facts }) => {
  const slides = [
    facts[facts.length - 1],
    ...facts,
    facts[0],
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const next = () => {
    setIndex((prev) => prev + 1);
    setTransition(true);
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
    setTransition(true);
  };

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 2);
      }, 500);
    }
  }, [index, slides.length]);

  return (
    <div className="w-full max-w-md mx-auto relative">
      
      {/* ===== HEADER LUAR ===== */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-pink-500 h-9 w-9 rounded-xl flex justify-center items-center">
          <i className="fa-solid fa-lightbulb text-white"></i>
        </div>
        <h4 className="text-white text-xl font-extrabold">
          Tahukah kamu?
        </h4>
      </div>

      {/* ===== CARD ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0e132a] border border-white/10">
        <div
          className={`flex ${
            transition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((text, i) => (
            <div key={i} className="min-w-full px-8 py-10 text-center">
              <p className="text-white text-lg leading-relaxed font-space">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== NAV BUTTON ===== */}
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MiniCarouselCard;

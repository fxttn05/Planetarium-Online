import React, { useState, useEffect, useRef } from "react";

const facts = [
  "Tata surya terdiri dari delapan planet yang mengelilingi Matahari sebagai pusat gravitasinya.",
  "Matahari menyumbang lebih dari 99 persen massa total tata surya, sehingga pengaruh gravitasinya sangat besar.",
  "Selain planet, tata surya juga memiliki asteroid, komet, dan meteoroid yang mengorbit Matahari.",
  "Sabuk asteroid terletak di antara orbit Mars dan Jupiter dan berisi jutaan batuan angkasa.",
  "Planet dalam seperti Merkurius, Venus, Bumi, dan Mars memiliki permukaan berbatu.",
  "Planet luar seperti Jupiter dan Saturnus dikenal sebagai raksasa gas karena ukurannya sangat besar.",
  "Uranus dan Neptunus sering disebut raksasa es karena komposisinya yang kaya akan es dan gas.",
  "Setiap planet memiliki periode rotasi dan revolusi yang berbeda-beda.",
  "Bulan tidak hanya dimiliki oleh Bumi, tetapi hampir semua planet di tata surya.",
  "Tata surya diperkirakan terbentuk sekitar 4,6 miliar tahun yang lalu dari awan gas dan debu."
];

// clone slides
const slides = [
  facts[facts.length - 1],
  ...facts,
  facts[0],
];

const MiniCarouselCard = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef(null);

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
  }, [index]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          ref={trackRef}
          className={`flex ${
            transition ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((text, i) => (
            <div key={i} className="min-w-full h-40 md:min-h-56 px-12 py-8">
              <div className="flex gap-2 items-center mb-3">
                <div className="bg-[#2F3780]/30 h-9 w-9 rounded-full flex justify-center items-center">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h4 className="text-white font-space text-xl font-extrabold">
                  Tahukah kamu..
                </h4>
              </div>
              <p className="text-white font-space text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default MiniCarouselCard;

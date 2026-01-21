import React from 'react'

const QuizResult = ({ score, total, onRestart }) => {
  return (
    <div className="bg-[#0f132e] rounded-3xl p-12 text-center">
      <h3 className="text-4xl font-bold mb-6">
        Kuis Selesai 🎉
      </h3>

      <p className="text-6xl font-extrabold text-yellow-400 mb-4">
        {score} / {total}
      </p>

      <p className="text-xl text-gray-300 mb-10">
        {score >= 4
          ? "Hebat! Kamu pintar tentang tata surya 🚀"
          : "Ayo Pelajari dan tonton videonya lagi! 🌟"}
      </p>

      <button onClick={onRestart} className="bg-yellow-400 text-black px-10 py-3 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
        Ulangi Kuis
      </button>
    </div>
  );
};

export default QuizResult
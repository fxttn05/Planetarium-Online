import React from 'react'

const QuizQuestion = ({
  data,
  current,
  total,
  onAnswer,
  selected,
  showResult,
}) => {
  return (
    <div
      className={`bg-[#0f132e] rounded-3xl p-10 transition-opacity duration-500
      ${showResult ? "opacity-0" : "opacity-100"}`}
    >
      {/* HEADER */}
      <div className="flex justify-between mb-6 text-gray-400 text-sm">
        <span>QUESTION {current + 1} OF {total}</span>
        <span className="text-yellow-400 font-semibold">EASY LEVEL</span>
      </div>

      {/* QUESTION */}
      <h3 className="text-3xl font-bold mb-10">
        {data.question}
      </h3>

      {/* OPTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.options.map((option, index) => {
          let classes =
            "border rounded-xl px-6 py-4 text-xl transition-all duration-300";

          // BELUM DIKLIK
          if (selected === null) {
            classes +=
              " border-[#2d345e] hover:bg-[#1a1f3c] active:scale-95";
          }

          // SUDAH DIKLIK
          if (selected !== null) {
            // jawaban BENAR
            if (index === data.answer) {
              classes +=
                " bg-green-600 text-white border-green-500 scale-105";
            }
            // jawaban SALAH yang dipilih
            else if (index === selected) {
              classes +=
                " bg-red-600 text-white border-red-500 scale-105";
            }
            // jawaban lain
            else {
              classes += " opacity-50 border-[#2d345e]";
            }
          }

          return (
            <button
              key={index}
              disabled={selected !== null}
              onClick={() => onAnswer(index)}
              className={classes}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion
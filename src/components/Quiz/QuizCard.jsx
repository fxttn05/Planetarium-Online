import { useEffect, useState, useCallback } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

const QuizCard = ({ quizData }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [selected, setSelected] = useState(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    startQuiz();
  }, [quizData]);

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    // tunggu 1 detik → fade out → next
    setTimeout(() => {
      setFade(true);

      setTimeout(() => {
        setFade(false);
        setSelected(null);

        if (current === questions.length - 1) {
          setFinished(true);
        } else {
          setCurrent((prev) => prev + 1);
        }
      }, 400);
    }, 1000);
  };

  if (questions.length === 0) return null;

  return finished ? (
    <QuizResult
      score={score}
      total={questions.length}
      onRestart={startQuiz}
    />
  ) : (
    <QuizQuestion
      data={questions[current]}
      current={current}
      total={questions.length}
      onAnswer={handleAnswer}
      selected={selected}
      showResult={fade}
    />
  );
};

export default QuizCard;

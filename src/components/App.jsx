import React, { useEffect, useState } from 'react';
import Question from './Question';
import Options from './Options';
import AnswerFrame from './AnswerFrame';
import opentdb from '../api/opentdb';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(0);

  useEffect(() => {
    if (userAnswers.length === quizData.length) {
      compareAnswers(userAnswers, correctAnswers);
      setQuizData([]);
    }
  }, [userAnswers]);

  const nextQuestion = (answer) => {
    setUserAnswers((userAnswers) => [...userAnswers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const compareAnswers = (userAnswers, correctAnswers) => {
    let count = 0;
    userAnswers.map((answer, index) => {
      if (correctAnswers[index] === answer) {
        count = count + 1;
      }
    });
    return setQuizResult(count);
  };

  const requestQuiz = ({ category, difficulty, type }) => {
    opentdb
      .get('', {
        params: {
          category: category.id,
          difficulty: difficulty.id,
          type: type.id,
        },
      })
      .then((results) => {
        setQuizData([]);
        setCurrentQuestion(0);
        setCorrectAnswers([]);
        setUserAnswers([]);
        setQuizResult(0);

        setQuizData(results.data.results);
        results.data.results.map((quiz) => {
          return setCorrectAnswers((correctAnswers) => [
            ...correctAnswers,
            quiz.correct_answer,
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="quiz-window container rounded-4 d-flex justify-content-between mt-5 mx-auto">
      <div className="d-flex flex-column col-7 my-3">
        <Question
          quizData={quizData[currentQuestion]}
          index={currentQuestion + 1}
          quizResult={quizResult}
        />
        <Options getParams={requestQuiz} />
      </div>
      <AnswerFrame
        quizData={quizData[currentQuestion]}
        nextQuestion={nextQuestion}
      />
    </div>
  );
}

export default App;

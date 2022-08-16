import React, { useState } from 'react';
import Question from './Question';
import Options from './Options';
import AnswerFrame from './AnswerFrame';
import opentdb from '../api/opentdb';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
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
        <Question quizData={quizData[currentQuestion]} />
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

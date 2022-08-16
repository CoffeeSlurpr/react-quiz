import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Options({ quizData, nextQuestion }) {
  const [answerOptions, setAnswerOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const chooseAnswer = (answer) => {
    //TODO one answer late
    //setUserAnswers((userAnswers) => [...userAnswers, answer]);
    setUserAnswers(answer);
    console.log(userAnswers);
    nextQuestion();
  };

  const shuffleArray = (Array) => {
    for (let i = Array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      const temp = Array[i];
      Array[i] = Array[j];
      Array[j] = temp;
    }

    return Array;
  };

  useEffect(() => {
    if (quizData) {
      const Array = [...quizData.incorrect_answers, quizData.correct_answer];
      shuffleArray(Array);
      setAnswerOptions(Array);
    }
  }, [quizData]);

  return (
    <div className="window d-flex flex-column justify-content-evenly rounded-4 col-5 flex-fill ms-3 my-3 p-5">
      {answerOptions.map((answer, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              chooseAnswer(answer);
            }}
          >
            {answer}
          </Button>
        );
      })}
    </div>
  );
}

export default Options;

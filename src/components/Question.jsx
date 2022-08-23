import React from 'react';
import { decode } from 'html-entities';

function Question({ quizData, index, quizResult }) {
  const text = () => {
    if (quizResult) {
      return quizResult + '/10 questions were answered correctly';
    }
    if (!quizData) {
      return 'Press the Play button to begin!';
    }
    if (quizData) {
      return `${index}. ${decode(quizData.question)}`;
    }
  };

  return (
    <div className="window rounded-4 h-50 text-center">
      <h1>{text()}</h1>
    </div>
  );
}

export default Question;

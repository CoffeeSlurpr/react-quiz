import React from 'react';

function Question({ quizData, index }) {
  return (
    <div className="window rounded-4 h-50 text-center">
      <h1>
        {!quizData
          ? 'Press the Play button to begin!'
          : index + '. ' + quizData.question}
      </h1>
    </div>
  );
}

export default Question;

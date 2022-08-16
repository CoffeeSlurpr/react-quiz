<<<<<<< HEAD
import React from 'react';

function Question() {
  return (
    <div className="window rounded-4 h-50 text-center">
      <h1>Who is Joe?</h1>
    </div>
  );
}

export default Question;
=======
import React from 'react';

function Question({ quizData }) {
  return (
    <div className="window rounded-4 h-50 text-center">
      <h1>
        {!quizData ? 'Press the Play button to begin!' : quizData.question}
      </h1>
    </div>
  );
}

export default Question;
>>>>>>> c0f34ad (upload commit)

import React, { useState, useEffect } from 'react';
import Question from './Question';
import Options from './Options';
import AnswerFrame from './AnswerFrame';
import opentdb from '../api/opentdb';

function App() {
  //const [params, setParams] = useState({});

  /* useEffect(() => {
    opentdb.get('', {
      params: { category: 9, difficulty: 'easy', type: 'multiple' },
    });
  }, []); */

  return (
    <div className="quiz-window container rounded-4 d-flex justify-content-between mt-5 mx-auto">
      <div className="d-flex flex-column col-7 my-3">
        <Question />
        <Options />
      </div>
      <AnswerFrame />
    </div>
  );
}

export default App;

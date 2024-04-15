import React from 'react';
import './QuizQuestionCorrect.css';

const QuizQuestionCorrect = ({ questionData, onClickNext, correctAnswer}) => {
  const { id, options } = questionData;


  //call onClickNext(); automatically after 1 seconds
  setTimeout(() => {
    onClickNext();

  }, 400);
  


  return (
    <div className="question">
      <h2>{id})</h2>
      <ul className='options'>
        {options.map((option, index) => (
          option == correctAnswer ? 
          <li className="option congrats" key={index}>{option}</li> : 
          <li className="option dehiglight-other" key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestionCorrect;

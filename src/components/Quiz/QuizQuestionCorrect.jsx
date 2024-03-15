import React from 'react';
import './QuizQuestionCorrect.css';

const QuizQuestionCorrect = ({ questionData, onClickNext, correctAnswer, selectedAnswer, onClickFinish}) => {
  const { id, options } = questionData;

  const yanisIlerle = () => {
    onClickNext();
  };
  const erkenBitir = () => {
    onClickFinish();
  };

  return (
    <div className="question">
      <h2>Soru {id}</h2>
      <ul className='options'>
        {options.map((option, index) => (
          <li className={option == selectedAnswer ? "option false-one bg-red-800" : option == correctAnswer ? "option correct-one" : "option"} key={index}>{option}</li>))}
      </ul>
      <div className='w-full flex justify-between'><button className='restart-button my-2 rounded' onClick={() => erkenBitir()}>Bitir ❌</button><button className='restart-button my-2 rounded' onClick={() => yanisIlerle()}>Devam Et ⏩</button></div>

    </div>
  );
};

export default QuizQuestionCorrect;

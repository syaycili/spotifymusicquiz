import React from 'react';
import SongPlayer from './SongPlayer';

const QuizQuestion = ({ questionData, onAnswer }) => {
  const { id, options } = questionData;

  const handleClick = (answer) => {
    onAnswer(answer);
  };

  return (
    <div>
    <div className="question">
      <div className='flex justify-between items-center mx-auto'><h2>{id})</h2></div>
      <ul className='options'>
        {options.map((option, index) => (
          <li className='option' key={index} onClick={() => handleClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
     <SongPlayer songUrl={questionData.song} />
    </div>
  );
};

export default QuizQuestion;
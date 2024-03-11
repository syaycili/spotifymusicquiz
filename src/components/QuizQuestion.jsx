import React from 'react';

const QuizQuestion = ({ questionData, onAnswer }) => {
  const { id, artist, options } = questionData;

  const handleClick = (answer) => {
    onAnswer(answer);
  };

  return (
    <div className="question">
      <h2>{id}. Guess the Song by {artist}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;

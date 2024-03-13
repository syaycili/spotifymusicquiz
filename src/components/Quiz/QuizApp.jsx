import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import SongPlayer from './SongPlayer';

const QuizApp = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (answer) => {
    if (answer == quizData[currentQuestion].answers) {
      setScore(score + 1);
    }else{
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <div className="start-quiz">
          <button className='button' onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : (
        <>
          {showResult ? (
            <div className="result">
              <h2>Quiz Complete!</h2>
              <p>Your Score: {score} / {quizData.length}</p>
              <button className='restart-button' onClick={restartQuiz}>Restart Quiz</button>
            </div>
          ) : (
            <>
              <QuizQuestion
                questionData={quizData[currentQuestion]}
                onAnswer={handleAnswer}
              />
              <SongPlayer songUrl={quizData[currentQuestion].song} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuizApp;

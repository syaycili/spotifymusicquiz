import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import SongPlayer from './SongPlayer';
import SpotifyPlayer from '../SpotifyPlayer';
import './QuizApp.css';
import QuizQuestionCorrect from './QuizQuestionCorrect';

const QuizApp = ({ quizData, ArtistId, oneAlbumData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrect, setshowCorrect] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setselectedAnswer] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    setselectedAnswer(answer);
    const correct = quizData[currentQuestion].answers;
    setCorrectAnswer(correct); // Update correct answer
    if (answer == correct) {
      setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    }else{
      setshowCorrect(true);
    }
  };

  const yanisIlerle = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setshowCorrect(false);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const erkenBitir = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setCorrectAnswer(null); // Reset correct answer
    setselectedAnswer(null); // Reset correct answer

  };

  const startQuiz = () => {
    setQuizStarted(true);
  };
  return (
    <div className="p-4">
      {!quizStarted ? (
        <div className="start-quiz">
          <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover filter blur-sm outline-none" 
        src={oneAlbumData.images[0].url}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
       
        <button onClick={startQuiz} className="baslabtn font-bold py-2 px-4 rounded-xl border-4 border-transparent">
        <h1 className="text-white text-xl font-bold py-1 px-3">Başla</h1>
        </button>
      </div>
    </div>
          <p className='mt-2'><i className="text-xs">Kapak Resmi: {oneAlbumData.name}</i></p>
          <h2 className="text-xl font-bold mt-2">Soru Sayısı: {quizData.length}</h2>
          <div className="text-md font-bold mt-4"><button className='restart-button mx-2 rounded' onClick={() => navigate('/')}>Geri Dön 🥹</button></div>
        </div>
      ) : (
        <>
          {showResult ? (
            <div className="result">
              <h2>Quiz Tamamlandı!</h2>
              <p>Doğru Sayın: {score} / {quizData.length} 🎉</p>
              <div>
              <button className='restart-button mx-2' onClick={restartQuiz}>Tekrar Dene 🔁</button>
              <button className='restart-button mx-2' onClick={() => navigate('/')}>Yeni Quiz 🤩</button>
              </div>
              <div className='flex justify-between items-center py-4 text-center mt-2'>
                <div className='w-fit m-auto'><SpotifyPlayer ArtistId={ArtistId} /></div>
             </div>
            </div>
          ) : (
            <>
              <div>
                {showCorrect ? (
                 <QuizQuestionCorrect
                 questionData={quizData[currentQuestion]}
                 onClickNext={yanisIlerle}
                 onClickFinish={erkenBitir}
                 correctAnswer={correctAnswer}
                 selectedAnswer={selectedAnswer}
               />
                ) : 
                <div>
                  <QuizQuestion
                questionData={quizData[currentQuestion]}
                onAnswer={handleAnswer}
              />
              <SongPlayer songUrl={quizData[currentQuestion].song} />
                </div>
                }
              </div>
              
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuizApp;

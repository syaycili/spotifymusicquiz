import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizLoad.css'
import QuizApp from './QuizApp';

const QuizLoad = ({quizUrl}) => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(quizUrl);
        setQuizData(response.data.quiz);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []); // Run only once on component mount
  
  
  // {quizData ? <QuizApp quizData={quizData} /> : <p className='text-center'>Loading quiz...</p>}

  return (
    <div className="QApp">
      <div className="container">
      {quizData ? <pre>{JSON.stringify(quizData, null, 2)} </pre> : <p className='text-center'>Loading quiz...</p>}
      </div>
    </div>
  );
};

export default QuizLoad;

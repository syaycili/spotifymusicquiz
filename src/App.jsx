import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizApp from './components/QuizApp';

const App = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/829e5ee2-c7ac-4132-a52c-2eb44be99446');
        setQuizData(response.data.quiz);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []); // Run only once on component mount

  
  return (
    <div className="App">
         <div className="container">
      <h1>Music Quiz</h1>
      {quizData ? <QuizApp quizData={quizData} /> : <p>Loading quiz...</p>}
      </div>
    </div>
  );
};

export default App;

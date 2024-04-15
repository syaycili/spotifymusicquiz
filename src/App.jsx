import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './styles/App.css'
import Homepage from './Homepage';
import QuizLoad from './components/Quiz/QuizLoad';

const App = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://spotify-token-api-two.vercel.app/token');
        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }
        const data = await response.json();
        const { token: fetchedToken } = data;
        //console.log("Yeni Token: "+fetchedToken);
        setToken(fetchedToken);
        //window.localStorage.setItem('token', fetchedToken);
      } catch (error) {
        console.error('Error fetching token:', error);
        // Handle error here
      }
    };

    fetchToken();

  }, []);


  return (
    <div className="min-h-screen max-w-screen-sm text-white m-auto py-1">
      {token ?
        <Router>
          <header className="flex justify-between items-center py-4 px-4 mx-auto">
            <h1 className="text-2xl font-bold"><a href={(import.meta.env.VITE_ROOT_URL || '/')}>{import.meta.env.VITE_APP_NAME}</a></h1>
            <div className="text-gray-400 text-sm"><i>Developed By Sarp</i></div>
          </header>
          <Routes>
            <Route path="/quiz" element={<QuizLoad token={token}/>} />
            <Route path="/" element={<Homepage token={token} />} />
          </Routes>
        </Router>
        : <div></div>
      }
    </div>
  );
};

export default App;

// import QuizLoad from './components/Quiz/QuizLoad';
// <QuizLoad quizUrl={'https://mocki.io/v1/829e5ee2-c7ac-4132-a52c-2eb44be99446'}></QuizLoad>

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './styles/App.css'
import Login from './Login';
import Homepage from './Homepage';
import QuizLoad from './components/Quiz/QuizLoad';

const App = () => {

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem("token");
    let tokenExpiration = window.localStorage.getItem("tokenExpiration");

    if (!storedToken && hash) {
      storedToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      tokenExpiration = new Date().getTime() + 15 * 60 * 1000; // 15 minutes in milliseconds

      window.location.hash = "";
      window.localStorage.setItem("token", storedToken);
      window.localStorage.setItem("tokenExpiration", tokenExpiration);
    }

    if (tokenExpiration && new Date().getTime() > tokenExpiration) {
      // Token has expired, clear it from localStorage
      storedToken = "";
      tokenExpiration = null;
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("tokenExpiration");
    }

    setToken(storedToken);

  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
  }

  return (
    <div className="min-h-screen max-w-screen-sm text-white m-auto py-1">
      {token ?
        <Router>
          <header className="flex justify-between items-center py-4 px-4 mx-auto">
            <h1 className="text-2xl font-bold"><a href={import.meta.env.VITE_ROOT_URL}>{import.meta.env.VITE_APP_NAME}</a></h1>
            <div className="text-gray-400"><button onClick={logout}>Çıkış Yap</button></div>
          </header>
          <Routes>
            <Route path="/quiz" element={<QuizLoad token={token}/>} />
            <Route path="/" element={<Homepage token={token} />} />
          </Routes>
        </Router>
        : <Login />
      }
    </div>
  );
};

export default App;

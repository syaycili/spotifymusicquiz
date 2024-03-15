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
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

  setToken(token)

  }, [])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className="min-h-screen max-w-screen-sm text-white m-auto py-1">
      {token ?
        <Router>
          <header className="flex justify-between items-center py-4 px-4 mx-auto">
            <h1 className="text-2xl font-bold">quiz.musiki.xyz</h1>
            <div className="text-gray-400"><button onClick={logout}>Logout</button></div>
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

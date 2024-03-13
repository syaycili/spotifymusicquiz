// import QuizLoad from './components/Quiz/QuizLoad';
// <QuizLoad quizUrl={'https://mocki.io/v1/829e5ee2-c7ac-4132-a52c-2eb44be99446'}></QuizLoad>

import React, { useState, useEffect } from 'react';
import './styles/App.css'
import Login from './Login';
import Homepage from './Homepage';

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
    <div className="min-h-screen text-white">
    {token ?
    <div><header className="flex justify-between items-center py-4 px-6 max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-semibold">Music Quiz App!</h1>
        <div className="text-gray-400"><button onClick={logout}>Logout</button></div>
    </header><Homepage token={token}/></div>
    : <Login /> }
    </div>
  );
    
};

export default App;

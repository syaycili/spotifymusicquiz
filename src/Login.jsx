import React from "react";
import "./styles/login.css";
import gif1 from './assets/1.gif'; 
import gif2 from './assets/2.gif'; 



function Login() {
  
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLI_ID
  const REDIRECT_URI = import.meta.env.VITE_ROOT_URL
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const scopes = 'user-top-read';
  
    return (
      <div className="LoginScreen p-4">
      
      <div className="m-auto">
        <div className="bg-gray-800 shadow-xl rounded px-8 py-4 m-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Müzik Tahmin Oyunu!</h1>
          <p className="text-center text-gray-400 mb-6">En sevdiğin sanatçıların parçalarını 5 saniyelik kesitlerden tahmin et</p>
          <div className="m-auto max-w-xs flex flex-col items-center">
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes}&response_type=${RESPONSE_TYPE}`} 
               className="btn-spotify bg-green-600 hover:bg-green-500 flex items-center justify-center w-full rounded-md text-white font-semibold">
              <img className="loginimage mb-4" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify Logo"/> ile Oturum Aç
            </a>
            <span className="mt-3 text-gray-400 text-xs"><i>*This app is not related to Spotify.</i></span>
          </div>
        </div>
      </div>


      <div className="m-auto mt-10">
        <div className="bg-gray-800 shadow-xl rounded px-8 py-4 m-auto mb-8 flex">
          <div>
          <h1 className="text-2xl font-bold mb-2 text-start">En sevdiğin sanatçıları seç 🤩</h1>
          <p className="text-start text-gray-400 mb-6">En sevdiğin sanatçıların parçalarını 5 saniyelik kesitlerden tahmin et!</p>
          </div>
          <img src={gif1} alt="GIF Photo" style={{
        marginLeft: '35px',
        height: '200px', 
          }} />
        </div>
        <div className="bg-gray-800 shadow-xl rounded px-8 py-4 m-auto flex">
        <img src={gif2} alt="GIF Photo 2" style={{
        marginRight: '35px',
        height: '200px', 
          }} />
          <div>
          <h1 className="text-2xl font-bold mb-2 text-end">Cevaplar arasında doğru parçayı bul!</h1>
          <p className="text-end text-gray-400 mb-6">Dinlediğin sanatçıları ne kadar tanıyorsun🤔 Sanatçının tüm parçalarından seçilmiş soruları cevapla.</p>
          </div>
         
        </div>
      </div>
      
    </div>    
    );
  }
export default Login;
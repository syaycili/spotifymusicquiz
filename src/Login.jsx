import React from "react";
import "./styles/login.css";



function Login() {
  
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLI_ID
  const REDIRECT_URI = "http://localhost:5175/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

    return (
      <div className="login">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify logo"
        />
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Spotifya Bağlan</a>
      </div>
    );
  }
export default Login;
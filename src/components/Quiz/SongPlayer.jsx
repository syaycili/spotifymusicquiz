import React, { useEffect, useRef, useState } from 'react';
import replaybtnimage from '../../assets/replaybtn.svg'; 

  const SongPlayer = ({ songUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    clearTimeout();
    if (audioRef.current) {
      //console.log("Song URL: "+songUrl);
      audioRef.current.autoplay = true;
      audioRef.current.load();
      setIsPlaying(true);
      const stopAfterFiveSeconds = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }, 5000);

      return () => {
        clearTimeout(stopAfterFiveSeconds);
      };
    }
  }, [songUrl]);

  const handleReplay = () => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
      const stopAfterFiveSeconds = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }, 5000);

      return () => {
        clearTimeout(stopAfterFiveSeconds);
      };
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="song-player">
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
      >
        <source src={songUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button 
      className='replay-btn' 
      onClick={handleReplay} 
      disabled={isPlaying}
      style={{
        display: 'flex', // Flex to align items
        alignItems: 'center', // Center vertically
      }}
      >
      Replay 
      <img 
      src={replaybtnimage}
      alt=""
      style={{
        marginLeft: '10px', // Space between text and image
        height: '20px', // Adjust height of the image
      }}
      />
      </button>
    </div>
  );
};

export default SongPlayer;

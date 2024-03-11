import React, { useEffect, useRef, useState } from 'react';

  const SongPlayer = ({ songUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    clearTimeout();
    if (audioRef.current) {
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
      <button className='replay-btn' onClick={handleReplay} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Replay'}
      </button>
    </div>
  );
};

export default SongPlayer;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuizLoad.css'
import QuizApp from './QuizApp';
import Loading from './Loading';

const QuizLoad = ({token}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const artistId = location.state?.artistId;
  const [oneAlbumData, setOneAlbumData] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    
    const fetchQuestions = async () => {
      try {
        if (!artistId || !token) {
          // Redirect to "/" if artistId or token is missing
          navigate("/");
          return;
        }

        // Fetch all albums of the artist
        const albumsResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?market=TR`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const albumsData = await albumsResponse.json();
        
        if (albumsData.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * albumsData.items.length);
          setOneAlbumData(albumsData.items[randomIndex]);
        }

        const allTracks = [];
        for (let album of albumsData.items) {
          const tracksResponse = await fetch(`https://api.spotify.com/v1/albums/${album.id}/tracks?market=TR`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const tracksData = await tracksResponse.json();
          //check if the tracks has preview url
          tracksData.items = tracksData.items.filter(track => track.preview_url);
          //console.log(tracksData.items);

          allTracks.push(...tracksData.items);
        }

        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
        
        // After fetching all the questions
        shuffleArray(allTracks);
        
        // Function to get random unique tracks
        const getRandomTracks = (tracks, count, answer) => {
          let randomTracks = [];
          let trackNames = tracks.map(track => track.name);
          trackNames = trackNames.filter(name => name !== answer); // Remove the answer from the options
          //prevent infinite loop
          if(trackNames.length < count) { 
            //add tracknames to randomTracks and by shuffling them
            randomTracks = trackNames;
            shuffleArray(randomTracks);
          }else{
            while(randomTracks.length < count) { 
              let track = trackNames[Math.floor(Math.random() * trackNames.length)];
              if(!randomTracks.includes(track)) {
                randomTracks.push(track);
              }
          }
          }

          // Insert the answer at a random position
          const answerPosition = Math.floor(Math.random() * (count + 1));
          randomTracks.splice(answerPosition, 0, answer);

          return randomTracks;
        }

        const generatedQuestions = allTracks.slice(0, 20).map((track, index) => {
          const options = getRandomTracks(allTracks, 4, track.name); // Get 4 random tracks
          return {
            id: index + 1,
            song: track.preview_url,
            artist: track.artists.map((artist) => artist.name).join(', '),
            options: options,
            answers: [track.name],
          };
        });
        setQuestions(generatedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

      fetchQuestions();
    

  }, [artistId, token]);
  
  //<Loading />
  // {questions ? <QuizApp quizData={questions} ArtistId={artistId} /> : <Loading />}
  // {questions ? <pre>{JSON.stringify(questions, null, 2)} </pre> : <p className='text-center'>Loading quiz...</p>}
  return (
    <div className="QApp">
      <div>
      {questions && oneAlbumData ? <QuizApp quizData={questions} ArtistId={artistId} oneAlbumData={oneAlbumData}/> : <Loading />}
      </div>
    </div>
  );
};

export default QuizLoad;
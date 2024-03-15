import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Searchbar from './components/homepage/Searchbar';
import MostListened from './components/homepage/Mostlistened';
import SelectedArtist from './components/homepage/SelectedArtist';
import './styles/homepage.css';

const Homepage = ({token}) => {
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  const navigate = useNavigate();

  return (
    <div>
      <section className="p-4 mx-auto">
        <div className="mx-auto">
          <Searchbar token={token} setSelectedArtistId={setSelectedArtistId}/>
        </div>
      </section>

      <section className="p-4 mx-auto">
        <div className="mx-auto">
          {selectedArtistId ? <SelectedArtist token={token} artistId={selectedArtistId}/> : <div></div>}
        </div>
      </section>

      <section className="px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4">
        <MostListened token={token} setSelectedArtistId={setSelectedArtistId}/>
        </div>
      </section>

      <div className='baslabtndiv fixed bottom-5 px-4'>
{selectedArtistId ? 
<button className='baslabtn bg-gray-700 px-6 py-4 rounded-full text-white font-semibold shadow-lg w-full'
onClick={() => navigate('/quiz', { state: { artistId: selectedArtistId } })}
>Başla</button> : <div></div>}
      </div>
      <footer className="text-center py-4 max-w-screen-lg mx-auto py-9">
      </footer>
    </div>
  );
};

export default Homepage

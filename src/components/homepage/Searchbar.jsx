import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Searchbar = ({ token, setSelectedArtistId }) => {
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const searchArtists = async () => {
      try {
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            q: searchKey,
            type: "artist",
            limit: 3,
          }
        });
        setArtists(data.artists.items);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    if (searchKey.trim() !== '') {
      searchArtists();
    } else {
      setArtists([]);
    }
  }, [searchKey, token]);

  const renderArtists = () => {
    
      return artists.map((artist) => (
      <div key={artist.id} className="flex items-center bg-gray-700 p-4 shadow-lg hover:bg-gray-600 cursor-pointer" onClick={() => setSelectedArtistId(artist.id)}>
      {artist.images && artist.images[0] && artist.images[0].url && (
        <img src={artist.images[0].url} alt={artist.name} className="w-10 h-10 rounded-full mr-3" />
      )}          
      <h2 className="text-lg font-semibold">{artist.name}</h2>
      </div>
      ));
    
  };

  return (
    <div className="mx-auto rounded shadow divide-y-2 divide-gray-800">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchKey(e.target.search.value);
        }}
        className='divide-y'
      >
        <input
          type="text"
          name="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="🔍 Sanatçı Ara..."
          className="w-full px-4 py-3 bg-gray-800 focus:bg-gray-700 text-white placeholder-gray-400 outline-none"
        />
      </form>

      <div className='divide-y-2 divide-gray-800'>
        {artists.length > 0 ? (
          renderArtists()
        ) : ("")}
      </div>
    </div>
  );
};

export default Searchbar;
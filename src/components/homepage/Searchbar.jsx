import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Searchbar = ({ token }) => {
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
            type: "artist"
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
      <div key={artist.id} className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
        <div className="flex items-center">
          {artist.images.length ? (
            <img className="h-16 w-16 mr-4 rounded-full" src={artist.images[0].url} alt={artist.name} />
          ) : (
            <div className="h-16 w-16 mr-4 rounded-full bg-gray-600"></div>
          )}
          <div className="text-white">{artist.name}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchKey(e.target.search.value);
        }}
        className="flex items-center justify-center mb-8"
      >
        <input
          type="text"
          name="search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Search for artists..."
          className="px-4 py-2 rounded-l-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-full text-white font-semibold">
          Search
        </button>
      </form>

      <div>
        {artists.length > 0 ? (
          renderArtists()
        ) : (
          <div className="invisible"></div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

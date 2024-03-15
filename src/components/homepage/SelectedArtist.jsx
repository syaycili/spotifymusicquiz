import React, { useEffect, useState } from 'react';
import '../../styles/homepage.css';

const SelectedArtist = ({ token, artistId }) => {
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setArtist(data);
            } catch (error) {
                console.error('Error fetching artist:', error);
            }
        };

        fetchArtist();
    }, [token, artistId]);

    return (
        <div className="">
          {artist ? (
            <div className="cizgi text-white h-14 flex items-center justify-between my-5 rounded-lg px-8">
              <img
                src={artist.images[0].url}
                alt={artist.name}
                className="rounded-lg shadow-lg w-20 h-20 object-cover mr-4"
              />
              <div className='mx-auto'><h2 className="font-semibold"><span className='text-xs md:text-md'>Seçilen Sanatçı: </span><span className='text-md md:text-xl font-bold'>{artist.name}</span></h2></div>
            </div>

          ) : (
            <p className="text-lg">Yükleniyor...</p>
          )}
        </div>
      );
      
      
      
};

export default SelectedArtist;
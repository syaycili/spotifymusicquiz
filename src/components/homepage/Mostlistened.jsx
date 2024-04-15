import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MostListened = ({ token, setSelectedArtistId }) => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
      setArtists(

        [
          {
            "id": "0V2oXYR7DtrZAEFeILRW2r",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebaf38c0565f1b25edd75334ee",
                "width": 640
              },
            ],
            "name": "Lvbel C5",
          },
          {
            "id": "15AZJFNrXtIN4Nk8BIOnS2",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf014c87b59a361882b7b0d84",
                "width": 640
              },
            ],
            "name": "Batuflex",
          },
          {
            "id": "6XeLF1KiaS5aBmp2d1fghp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb4970ad4aba0054c2e62172a9",
                "width": 640
              },
            ],
            "name": "rufflws",
          }
        ]

        );
      
    }, [token]);

    return (
        <div>
            {artists.map(artist => (
                <div key={artist.id} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-600 cursor-pointer mb-4" onClick={() => setSelectedArtistId(artist.id)}>
                    <img src={artist.images[0].url} alt={artist.name} className="w-10 h-10 rounded-full mr-3" />
                    <h2 className="text-lg font-semibold">{artist.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default MostListened;
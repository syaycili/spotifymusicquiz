import React, { useEffect, useState } from 'react';

const MostListened = ({ token, setSelectedArtistId }) => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchMostListenedArtists = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=3', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setArtists(data.items);
            } catch (error) {
                console.error('Error fetching most listened artists:', error);
            }
        };

        fetchMostListenedArtists();
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
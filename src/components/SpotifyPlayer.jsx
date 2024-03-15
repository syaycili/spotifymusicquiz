import React, { useEffect, useState } from 'react';

const SpotifyPlayer = ({ ArtistId }) => {
    const [embedUrl, setEmbedUrl] = useState('');

    useEffect(() => {
        setEmbedUrl(`https://open.spotify.com/embed/artist/${ArtistId}`);
    }, [ArtistId]);

    return (
        <iframe src={embedUrl} height={400} allowtransparency="true" allow="encrypted-media" className='rounded-xl w-full'></iframe>
    );
};

export default SpotifyPlayer;
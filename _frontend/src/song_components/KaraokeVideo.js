import React from 'react';
//Need to make it so this is NOT so public.

let KaraokeVideo = ({songTitle, songArtist, karaokeUrl}) => {
    
    return (
        <>
            <h3>Karaoke Video</h3>
            <iframe src={karaokeUrl} title={`Karaoke Video of ${songTitle} by ${songArtist}`}></iframe>
        </>
    )
}

export default KaraokeVideo;
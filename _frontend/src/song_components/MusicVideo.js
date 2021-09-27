import React from 'react';

//Need to make it so this is NOT so public.

let MusicVideo = ({songTitle, songArtist, musicUrl}) => {
    return (
        <>
            <h3>Music Video</h3>
            <a className="aMusicUrl" href={musicUrl}>{songTitle} by {songArtist} Music Video</a>
            <h6>Clicking the link above will take you to YouTube to listen to the song, hope it's a good one.</h6>
        </>
    )
}

export default MusicVideo;
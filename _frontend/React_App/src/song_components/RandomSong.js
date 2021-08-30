import React from 'react';
import KaraokeVideo from './KaraokeVideo'
import Lyrics from './Lyrics'

let RandomSong = ({song}) => {
    return (
        <>
            {song.title ? <h1>{song.title}</h1> : <h1>Press Randomize!</h1>}
            {song.title ? <KaraokeVideo songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title ? <Lyrics songTitle={song.title} songArtist={song.artist} /> : null}
        </>
    )
}

export default RandomSong;
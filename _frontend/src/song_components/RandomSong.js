import React from 'react';
import KaraokeVideo from './KaraokeVideo'
import Lyrics from './Lyrics'
import MusicVideo from './MusicVideo';

let RandomSong = ({song, karaokeUrl, musicUrl, lyrics}) => {
    return (
        <>
            {song.title ? <h1>{song.title}</h1> : <h1>Welcome to Kamikazee Karaoke</h1>}
            {song.title && karaokeUrl !== undefined ? <KaraokeVideo karaokeUrl={karaokeUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && musicUrl !== undefined ? <MusicVideo musicUrl={musicUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && lyrics !== undefined ? <Lyrics lyrics={lyrics} /> : null}
        </>
    )
}

export default RandomSong;
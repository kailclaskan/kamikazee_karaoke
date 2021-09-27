import React, {useEffect, useState} from 'react';
import KaraokeVideo from './KaraokeVideo';
import Lyrics from './Lyrics';
import MusicVideo from './MusicVideo';
import LikeSong from './LikeSong';
import api from '../helpers/api';

let RandomSong = ({like, unlike, user, songs}) => {
    let [song, setSong] = useState({});
    let [lyrics, setLyrics] = useState("");
    let [karaokeUrl, setKaraokeUrl] = useState("");
    let [musicUrl, setMusicUrl] = useState("");


    useEffect(() => {
        let gatherSong = async () => {
          let res = await api.getRandomSong();
          setSong(res.song);
          setLyrics(res.lyrics);
          setKaraokeUrl(res.karaokeUrl);
          setMusicUrl(res.musicVideoUrl);
        }
        gatherSong();
      }, []);
    return (
        <>
            {song.title ? <h1>{song.title}</h1> : <h1>Loading</h1>}
            {song.title && karaokeUrl !== undefined ? <KaraokeVideo karaokeUrl={karaokeUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && musicUrl !== undefined ? <MusicVideo musicUrl={musicUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && lyrics !== undefined ? <Lyrics lyrics={lyrics} /> : null}
            {user && song.title && user ? <LikeSong like={like} unlike={unlike} songTitle={song.title} songArtist={song.artist} user={user} songs={songs} /> : null}
        </>
    )
}

export default RandomSong;
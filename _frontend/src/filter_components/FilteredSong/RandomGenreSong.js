import React, {useEffect, useState} from 'react';
import KaraokeVideo from '../../song_components/KaraokeVideo';
import Lyrics from '../../song_components/Lyrics';
import MusicVideo from '../../song_components/MusicVideo';
import LikeSong from '../../song_components/LikeSong';
import api from '../../helpers/api';
import { useParams } from 'react-router';

let RandomGenreSong = ({like, unlike, user, songs}) => {
    const {genre} = useParams();
    let [song, setSong] = useState({});
    let [lyrics, setLyrics] = useState("");
    let [karaokeUrl, setKaraokeUrl] = useState("");
    let [musicUrl, setMusicUrl] = useState("");
    useEffect(() => {
        let gatherSong = async () => {
            let res = await api.getRandomSongBasedOnGenre(genre);
            setSong(res.song);
            setLyrics(res.lyrics);
            setKaraokeUrl(res.karaokeUrl);
            setMusicUrl(res.musicVideoUrl);
        }
        gatherSong();
      }, [genre]);
    return (
        <>
            {song.title ? <h1>{song.title}</h1> : <h1>Loading</h1>}
            {song.title && karaokeUrl !== undefined ? <KaraokeVideo karaokeUrl={karaokeUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && musicUrl !== undefined ? <MusicVideo musicUrl={musicUrl} songTitle={song.title} songArtist={song.artist} /> : null}
            {song.title && lyrics !== undefined ? <Lyrics lyrics={lyrics} /> : null}
            {user && song.title ? <LikeSong like={like} unlike={unlike} songTitle={song.title} songArtist={song.artist} user={user} songs={songs} /> : null}
        </>
    )
}

export default RandomGenreSong;
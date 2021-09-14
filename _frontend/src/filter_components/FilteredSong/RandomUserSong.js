import React, {useEffect, useState} from 'react';
import KaraokeVideo from '../../song_components/KaraokeVideo';
import Lyrics from '../../song_components/Lyrics';
import MusicVideo from '../../song_components/MusicVideo';
import LikeSong from '../../song_components/LikeSong';
import api from '../../helpers/api';
import { useParams } from 'react-router';

let RandomUserSong = ({like, unlike, user, songs}) => {
    let [song, setSong] = useState({});
    let [lyrics, setLyrics] = useState("");
    let [karaokeUrl, setKaraokeUrl] = useState("");
    let [musicUrl, setMusicUrl] = useState("");
    useEffect(() => {
        let gatherSong = async () => {
            if(songs.songName !== undefined || songs.songName !== null){
                let res = await api.getRandomSongBasedOnUserLikes(songs);
                setSong(res.song);
                setLyrics(res.lyrics);
                setKaraokeUrl(res.karaokeUrl);
                setMusicUrl(res.musicVideoUrl);
            }
        }
        gatherSong();
      }, [songs]);
      console.log(song)
      return (
        <>
            {song.songName ? <h1>{song.songName}</h1> : <h1>Loading</h1>}
            {song.songName && karaokeUrl !== undefined ? <KaraokeVideo karaokeUrl={karaokeUrl} songTitle={song.songName} songArtist={song.songArtist} /> : null}
            {song.songName && musicUrl !== undefined ? <MusicVideo musicUrl={musicUrl} songTitle={song.songName} songArtist={song.songArtist} /> : null}
            {song.songName && lyrics !== undefined ? <Lyrics lyrics={lyrics} /> : null}
            {user && song.songName ? <LikeSong like={like} unlike={unlike} songTitle={song.songName} songArtist={song.songArtist} user={user} songs={songs} /> : null}
        </>
    )
}

export default RandomUserSong;
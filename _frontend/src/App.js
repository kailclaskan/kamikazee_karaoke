import './App.css';
import React, {useEffect, useState} from 'react';
import RandomSong from './song_components/RandomSong';
import axios from 'axios';

function App() {
  let [song, setSong] = useState({});
  let [lyrics, setLyrics] = useState("");
  let [karaokeUrl, setKaraokeUrl] = useState("");
  let [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    let gatherSong = async () => {
      let res = await axios.get("http://localhost:3001/kamikazee");
      setSong(res.data.song);
      setLyrics(res.data.lyrics);
      setKaraokeUrl(res.data.karaokeUrl);
      setMusicUrl(res.data.musicVideoUrl);
    }
    gatherSong();
  }, []);
  return (
    <div className="App">
      <h1>Kamikazee Karaoke</h1>
      <div>
        <RandomSong song={song} lyrics={lyrics} karaokeUrl={karaokeUrl} musicUrl={musicUrl} />
      </div>
    </div>
  );
}

export default App;

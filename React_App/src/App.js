import './App.css';
import React, {useState} from 'react';
import songs from './data/songData';
import RandomSong from './song_components/RandomSong';

function App() {
  let [song, setSong] = useState({});
  let randomSong = () => {
    let rand = Math.floor(Math.random() * songs.length);
    return songs[rand];
  }
  console.log(process.env.REACT_APP_YouTube_api_key);
  return (
    <div className="App">
      <button className="btnRandom" onClick={() => setSong(randomSong())}>Randomize!</button>
      <div>
        <RandomSong song={song} />
      </div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import grabLyrics from '../helpers/genius';

const rp = require('request-promise');
let Lyrics = ({songTitle, songArtist}) => {
    let [lyrics, setLyrics] = useState("");

    useEffect(() => {
        let data = async () => {
            let songLyrics = await grabLyrics(songTitle, songArtist);
            setLyrics(songLyrics);
        }
        data();
    }, [songTitle, songArtist]);
    console.log(lyrics);
    return (
        <>
            <h3>Lyrics</h3>
            <p>TBD</p>
        </>
    )
}

export default Lyrics;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import YT_API_KEY from "../secret";

//Need to make it so this is NOT so public.

let KaraokeVideo = ({songTitle, songArtist, karaokeUrl}) => {
    
    return (
        <>
            <h3>Karaoke Video</h3>
            <iframe src={karaokeUrl} title={`Karaoke Video of ${songTitle} by ${songArtist}`} width="400" height="300"></iframe>
        </>
    )
}

export default KaraokeVideo;
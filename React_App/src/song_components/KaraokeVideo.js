import React, {useState, useEffect} from 'react';
import axios from 'axios';

//Need to make it so this is NOT so public.
let REACT_APP_YOUTUBE_API_KEY = "AIzaSyDL7bMV5fSCWzoh-EinFzZPq0K_bRNRxyk";

let KaraokeVideo = ({songTitle, songArtist}) => {
    let [videoId, setVideoId] = useState("");
    useEffect(() => {
        let data = async () =>{
            let res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${songTitle} ${songArtist} karaoke&key=${REACT_APP_YOUTUBE_API_KEY}`)
            for(let song of res.data.items){
                if(song.snippet.channelId !== "UCbqcG1rdt9LMwOJN4PyGTKg" && song.snippet.channelId !== "UCwTRjvjVge51X-ILJ4i22ew"){
                    setVideoId(song.id.videoId);
                    console.log(song);
                    break;
                }
            }
        }
        data();
    }, [songTitle, songArtist]);
    const karaokeUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <>
            <iframe src={karaokeUrl} width="900" height="650"></iframe>
        </>
    )
}

export default KaraokeVideo;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import YT_API_KEY from "../secret";

//Need to make it so this is NOT so public.

let KaraokeVideo = ({songTitle, songArtist}) => {
    let [videoId, setVideoId] = useState("");
    useEffect(() => {
        let data = async () =>{
            let res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${songTitle} ${songArtist} karaoke&key=${YT_API_KEY}`);
            for(let song of res.data.items){
                if(song.snippet.channelId !== "UCbqcG1rdt9LMwOJN4PyGTKg" && song.snippet.channelId !== "UCwTRjvjVge51X-ILJ4i22ew"){
                    setVideoId(song.id.videoId);
                    break;
                }
            }
        }
        data();
    }, [songTitle, songArtist]);
    const karaokeUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <>
            <h3>Karaoke Video</h3>
            <iframe src={karaokeUrl} title={`${songTitle} by ${songArtist}`} width="400" height="300"></iframe>
        </>
    )
}

export default KaraokeVideo;
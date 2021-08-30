const { YT_API_KEY } = require("../config");
const axios = require("axios");

let karaokeVideo = async (songTitle, songArtist) =>{
    let videoId;
    let res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${songTitle} ${songArtist} karaoke&key=${YT_API_KEY}`);
    for(let song of res.data.items){
        if(song.snippet.channelId !== "UCbqcG1rdt9LMwOJN4PyGTKg" && song.snippet.channelId !== "UCwTRjvjVge51X-ILJ4i22ew"){
            videoId = song.id.videoId;
            break;
        }
    }
    const karaokeUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return karaokeUrl;
}

module.exports = karaokeVideo;
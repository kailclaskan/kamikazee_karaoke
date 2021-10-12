const YT_API_KEY = "../keys" ? require("../keys") : process.env.YT_API_KEY;
const axios = require("axios");

let karaokeVideo = async (songTitle, songArtist) =>{
    let kVideoId;
    let mVideoId;
    let karaokeUrl;
    let musicVideoUrl;
    let karaokeRes = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${songTitle} ${songArtist} karaoke&key=${YT_API_KEY}`);
    let musicRes = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${songTitle} ${songArtist} music video&key=${YT_API_KEY}`);
    if(karaokeRes.data.items){
        for(let song of karaokeRes.data.items){
            if(song.snippet.channelId !== "UCbqcG1rdt9LMwOJN4PyGTKg" && song.snippet.channelId !== "UCwTRjvjVge51X-ILJ4i22ew"){
                kVideoId = song.id.videoId;
                karaokeUrl = `https://www.youtube.com/embed/${kVideoId}`;
                break;
            }
        }
    } else {
        karaokeUrl = undefined;
    }
    if(musicRes.data.items){
        for(let song of musicRes.data.items){
            mVideoId = song.id.videoId;
            musicVideoUrl = `https://www.youtube.com/watch?v=${mVideoId}`
            break
        }
    } else {
        musicVideoUrl = undefined;
    }

    return { karaokeUrl, musicVideoUrl } ;
}

module.exports = karaokeVideo;
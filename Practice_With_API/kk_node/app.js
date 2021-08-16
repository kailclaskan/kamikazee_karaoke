const fs = require("fs");
const axios = require("axios");
const songsArr = require("./songName");
const artistsArr = require("./songArtist");
let songObjs = [];
let unsuccessful = [];
let i = 0;
const gatherSongData = async (title, artist) => {
    const years = [];
    const genres = [];
    //https://itunes.apple.com/search?term=${songTitle}&entity=song
    const res = await axios.get(`https://itunes.apple.com/search?media=music&entity=song&attribute=artistTerm&term=${artist}&limit=200`);

    for(let song of res.data.results){
        if(song.trackName.toLowerCase().includes(title.toLowerCase())){
            let yr;
            let gnr;
            if(song.releaseDate !== undefined && song.primaryGenreName !== undefined){
                yr = song.releaseDate.substring(0,4);
                gnr = song.primaryGenreName;
            }
            years.push(yr);
            genres.push(gnr);
        }
    }
    years.sort();
    genres.sort();
    let release;
    if(years[0] !== undefined){
        release = years[0]
    } else {
        release = years[1]
    }
    let genre;
    if(genres[0] !== undefined){
        genre = genres[0];
    } else {
        genre = genres[1];
    }

    let thisSong = {
        "title": title,
        "artist": artist,
        "release": release,
        "genre": genre        
    }
    //Maybe verify here if release and genre are undefined and re call 
    if(thisSong.release === undefined && thisSong.genre === undefined || thisSong.release === null && thisSong.genre === null || !thisSong.genre && !thisSong.release){
        songObjs.find(song => {
            if(song.artist === thisSong.artist && song.release && song.genre){
                thisSong.release = song.release;
                thisSong.genre = song.genre;        
            } else {
                unsuccessful.push(thisSong);
            }
            return;
        });
    }
    songObjs.push(thisSong);
}

const songInfoLoop = () => {
    setTimeout(() => {
        try{
            gatherSongData(songsArr[i], artistsArr[i]);
        } catch (e) {
            console.log("Error: " + e);
            console.log("Song: " + songsArr[i]);
            console.log("Artist: " + artistsArr[i]);
        }
        i++
        if(i < songsArr.length){
            songInfoLoop();
        } else {
            fs.writeFile("songData.js", "let data = "+JSON.stringify(songObjs)+";\n\nconsole.log(data.length);","utf8", (err, data) => {
                if(err){
                    console.log(err)
                    return
                } else {
                    console.log('created');
                }
            });
            console.log(unsuccessful.length);
        }
    }, 5000);
}
songInfoLoop();
console.log("running");
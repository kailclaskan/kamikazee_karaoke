const songs = require("./songData");

const randomSongByArtist = (artist) =>{
    let artistArr = [];
    for(let song of songs){
        if(artist === song.artist){
            artistArr.push(song);
        }
    }
    if(artistArr.length > 0){
        let rand = Math.floor(Math.random() * artistArr.length);
        return artistArr[rand];
    } else {
        let rand = Math.floor(Math.random() * songs.length);
        let msg = "Sorry, that artist isn't located in the database, but here's a song for you anyways."
        return songs[rand], msg;
    }
}

module.exports = randomSongByArtist;
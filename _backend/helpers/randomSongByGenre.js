const songs = require("./songData");

const randomSongByGenre = (genre) => {
    let genreArr = [];
    for(let song of songs){
        if(genre === song.genre){
            genreArr.push(song);
        }
    }
    let rand = Math.floor(Math.random() * genreArr.length);

    return genreArr[rand];
}

module.exports = randomSongByGenre;
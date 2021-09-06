const songs = require("./songData");

const randomSongByDate = (min, max) => {
    let dateArr = [];
    for(let song of songs){
        if(song.release >= min && song.release <= max){
            dateArr.push(song);
        }
    }
    let rand = Math.floor(Math.random() * dateArr.length);
    return dateArr[rand];
}

module.exports = randomSongByDate;
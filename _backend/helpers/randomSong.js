const songs = require("./songData");

let randomSong = () => {
    let rand = Math.floor(Math.random() * songs.length);
    return songs[rand];
}

module.exports = randomSong;
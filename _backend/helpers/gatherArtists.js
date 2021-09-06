const songs = require("./songData");

const gatherArtists = () => {
    let a = []
    for(let song of songs){
        if(song.artist !== undefined){
            a.push(song.artist);
        }
    }
    let artistsSet = new Set(a);
    let artists = Array.from(artistsSet);

    return artists;
}

module.exports = gatherArtists;
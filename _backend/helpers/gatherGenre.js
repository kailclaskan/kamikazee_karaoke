const songs = require("./songData");

const gatherGenre = () => {
    let g = [];
    for(let song of songs){
        if(song.genre !== undefined){
            g.push(song.genre);
        }
    }
    let genreSet = new Set(g);
    let genres = Array.from(genreSet);
    genres.sort();

    return genres;
}

module.exports = gatherGenre;
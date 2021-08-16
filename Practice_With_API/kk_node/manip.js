let songs = require("./songData");
let rand;
// console.log(songs[rand]);

let randomSong = () => {
    rand = Math.floor(Math.random() * songs.length);
    console.log(songs[rand]);
}
let genreSelect = (genre) => {
    let genreArr = [];

    for(song of songs){
        if(song.genre && song.genre.toLowerCase() === genre.toLowerCase()){
            genreArr.push(song);
        }
    }
    rand = Math.floor(Math.random() * genreArr.length);
    console.log(genreArr[rand]);
}

let yearSelect = (min, max) => {
    let yearArr = [];
    if(min < max){
        for(song of songs){
            if(song.release && song.release >= min && song.release <= max){
                yearArr.push(song)
            }
        }
        rand = Math.floor(Math.random() * yearArr.length);
        console.log(yearArr[rand]);
    } else{
        console.log("Incorrect year assignment.")
    }
}

module.exports = genreSelect, yearSelect, randomSong;
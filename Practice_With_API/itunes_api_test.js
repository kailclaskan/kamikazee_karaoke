let songObjs = [];
let i = 0;
const songInfo = async (songTitle, songArtist) => {
    //Years exists to hold all years from every song that matches below.
    const years = [];
    const genres = [];
    //https://itunes.apple.com/search?term=${songTitle}&entity=song
    const res = await axios.get(`https://itunes.apple.com/search?term=${songArtist}&term=${songTitle}&media=music&entity=song`);
    
    for(let song of res.data.results){
        if(song.artistName===songArtist && song.trackName===songTitle){
            //Grab only the year, date is in at yyyy-dd-mm
            //Add IF statements to check yr and gnr
            let yr;
            let gnr;
            if(song.releaseDate !== undefined && song.primaryGenreName !== undefined){
                yr = song.releaseDate.substring(0,4);
                gnr = song.primaryGenreName;
            }
            //Push every year/genre to the years/genres array.
            years.push(yr);
            genres.push(gnr);
        }
    }
    //Sort the years/genres least to greatest
    years.sort();
    genres.sort();
    //In the end it will be years[0]/genres[0] that is added to the database for the song_year.
    const release = years[0];
    const genre = genres[0];
    let thisSong = {
        "title": songTitle,
        "artist": songArtist,
        "release": release,
        "genre": genre
    }
    songObjs.push(thisSong);
}
//Trying to give the API some breathing room so it can return regardless of the situation.
const gatherLoop = () => {
    setTimeout(() => {
        try{
        songInfo(songsArr[i], artistsArr[i])
        }catch(e){
            console.log("Song: " + songsArr[i]);
            console.log("Artist: " + artistsArr[i]);
        }
        i++
        if(i < 5){
            gatherLoop();
        }
    }, 5000);
}

gatherLoop();

console.log(songObjs);


//At 138 received the first Error
//Adjusting the Time to see if 1 sec isn't long enough.

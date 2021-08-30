const Genius = require("genius-lyrics");
const Client = new Genius.Client("");

const grabLyrics = async (song, artist) =>{
    const searches = await Client.songs.search(`${artist} ${song}`);
    
    const firstSong = searches[0];

    const lyrics = await firstSong.lyrics();
    console.log("Lyrics: \n", lyrics, "\n");
}

module.exports = grabLyrics;
const Genius = require("genius-lyrics");
const Client = new Genius.Client("");

const gatherLyrics = async (song, artist) =>{
    const searches = await Client.songs.search(`${artist} ${song}`);
    
    const firstSong = searches[0];

    const lyrics = await firstSong.lyrics();
    return lyrics;
}

module.exports = gatherLyrics;
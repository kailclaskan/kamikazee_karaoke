let songObjs = [];
let i = 0;

const songInfo = async (songTitle, songArtist) => {
    //https://api.deezer.com/search?q=track:"${songTitle}"
    const res = await axios.get(`http://localhost:8010/proxy/search?q=track:"${songTitle}"artist:"${songArtist}"`);
    const song = res.data.data[0];
    console.log(song.title);
}

const gatherLoop = () => {
    setTimeout(() => {
        songInfo(songsArr[i], artistsArr[i])
        i++
        if(i < songsArr.length){
            gatherLoop();
        }
    }, 1250);
}

gatherLoop();

//This API will work for gathering a lot of information, but not all the information I need for the database.
//Will need to work out the best way to gather that from either iTunes or another source.

const randomSongByUser = async (songs) => {
    let rand = Math.floor(Math.random() * s.length);
    
    return s[rand];
}

module.exports = randomSongByUser;
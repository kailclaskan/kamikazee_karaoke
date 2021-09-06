const gatherLyrics = require("../helpers/gatherLyrics");
const karaokeVideo = require("../helpers/karaokeVideo");

const songInformationHelper = async (title, artist) => {
    let lyrics = await gatherLyrics(title, artist);
    let { karaokeUrl, musicVideoUrl } = await karaokeVideo(title, artist);

    return {lyrics, karaokeUrl, musicVideoUrl};
}

module.exports = songInformationHelper;
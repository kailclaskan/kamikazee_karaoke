"use strict";

const randomSong = require("../helpers/randomSong");
const gatherLyrics = require("../helpers/gatherLyrics");
const karaokeVideo = require("../helpers/karaokeVideo");
const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try{
        let song = randomSong();
        let lyrics = await gatherLyrics(song.title, song.artist);
        let { karaokeUrl, musicVideoUrl } = await karaokeVideo(song.title, song.artist);

        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e){
        return next(e);
    }    
});

module.exports = router;

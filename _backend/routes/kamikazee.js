"use strict";

const randomSong = require("../helpers/randomSong");
const gatherLyrics = require("../helpers/gatherLyrics");
const karaokeVideo = require("../helpers/karaokeVideo");
const musicVideo = require("../helpers/musicVideo");
const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try{
        let song = randomSong();
        let lyrics = await gatherLyrics(song.title, song.artist);
        let karaokeUrl = await karaokeVideo(song.title, song.artist);
        let musicUrl = await musicVideo(song.title, song.artist);

        return res.json({song, lyrics, karaokeUrl, musicUrl});
    } catch(e){
        return next(e);
    }    
});

module.exports = router;

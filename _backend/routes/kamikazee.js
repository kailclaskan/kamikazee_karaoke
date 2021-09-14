"use strict";

const randomSong = require("../helpers/randomSong");
const randomSongByArtist = require("../helpers/randomSongByArtist");
const randomSongByGenre = require("../helpers/randomSongByGenre");
const randomSongByDate = require("../helpers/randomSongByDate");
const randomSongByUser = require("../helpers/randomSongByUser");
const songInformationHelper = require("../helpers/songInformationHelper");
const express = require("express");
const router = new express.Router();

router.get("/", async (req, res, next) => {
    try{
        let song = randomSong();
        let {lyrics, karaokeUrl, musicVideoUrl} = await songInformationHelper(song.title, song.artist);

        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e){
        return next(e);
    }    
});

router.get("/genre/:genre", async(req,res,next)=>{
    try{
        let song = randomSongByGenre(req.params.genre);
        let {lyrics, karaokeUrl, musicVideoUrl} = await songInformationHelper(song.title, song.artist);


        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e) {
        return next(e);
    }
});

router.get("/date/:min/:max", async(req, res, next)=>{
    try{
        let song = randomSongByDate(req.params.min, req.params.max);
        let {lyrics, karaokeUrl, musicVideoUrl} = await songInformationHelper(song.title, song.artist);

        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e){ 
        return next(e)
    }
});

router.get("/artist/:artist", async(req, res, next)=>{
    try{
        let song = randomSongByArtist(req.params.artist);
        let {lyrics, karaokeUrl, musicVideoUrl} = await songInformationHelper(song.title, song.artist);

        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e){ 
        return next(e)
    }
});

router.get("/user", async(req,res,next)=>{
    try{
        let song = await req.query;
        console.log(song)
        let {lyrics, karaokeUrl, musicVideoUrl} = await songInformationHelper(song.songName, song.songArtist);
        return res.json({song, lyrics, karaokeUrl, musicVideoUrl});
    } catch(e){ 
        return next(e)
    }
});

module.exports = router;

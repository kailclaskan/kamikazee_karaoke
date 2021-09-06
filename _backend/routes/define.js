"use strict";

const gatherArtists = require("../helpers/gatherArtists");
const gatherGenre = require("../helpers/gatherGenre");
const express = require("express");
const router = new express.Router();

router.get("/artists", async(req,res,next) => {
    try{
        let artists = gatherArtists();
        return res.json({artists});
    } catch (e) {
        console.log(e);
    }
});
router.get("/genres", async(req,res,next) => {
    try {
        let genres = gatherGenre();
        return res.json({genres});
    } catch (e){
        console.log(e);
    }
});



module.exports = router;
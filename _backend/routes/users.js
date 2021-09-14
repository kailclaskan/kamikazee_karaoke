"Use strict";

const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/:username", async function(req,res,next) {
   try{
    const {username} = req.params;
    let results = await User.get(username);
    return res.json({results});
   } catch(e) {
       return next(e)
   } 
})

router.post("/:username/favorites/:songName/:songArtist", async function(req,res,next){
    try {
        const {username, songName, songArtist} = req.params;
        await User.like(username, songName, songArtist);
        return res.status(201).json({ liked: `${songName} by ${songArtist}` });
    } catch(e) {
        return next(e);
    }
});

router.delete("/:username/unfavorite/:songName/:songArtist", async function(req,res,next){
    try{
        const {username, songName, songArtist} = req.params;
        await User.unlike(username, songName, songArtist);
        return res.status(201).json({ unliked: `${songName} by ${songArtist}`});
    } catch(e) {
        return next(e)
    }
})

//Add router.post for unlike /:username/unfavorite/:songName/:songArtist

module.exports = router;
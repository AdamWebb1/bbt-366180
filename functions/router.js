const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const inTitle = require("./routes/inTitle")
const inDescription = require("./routes/inDescription")
const inSeason = require("./routes/inSeason")
const getEpisode = require("./routes/getEpisode")

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex)
router.get("/word-in-title/:word", inTitle)
router.get("/word-in-desc/:word", inDescription)
router.get("/episodes-in-season/:season", inSeason)
router.get("/get-episode/:season/:episodeNum", getEpisode)

module.exports = router;

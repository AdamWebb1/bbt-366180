const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const inTitle = require("./routes/inTitle")

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex)
router.get("/word-in-title/:word", inTitle)

module.exports = router;

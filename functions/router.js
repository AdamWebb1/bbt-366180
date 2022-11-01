const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const inTitle = require("./routes/inTitle")
const inDescription = require("./routes/inDescription")

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex)
router.get("/word-in-title/:word", inTitle)
router.get("/word-in-desc/:word", inDescription)

module.exports = router;

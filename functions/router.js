const router = require('express').Router();
const episodes = require('./episodes');

router.get("/episodes", episodes);

module.exports = router;

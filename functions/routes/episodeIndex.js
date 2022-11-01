const bbt = require('big-bang-theory');

const episodeIndex = (req, res) => {
  res.status(200).json({
    success: true,
    data: bbt._embedded.episodes[req.params.index]
  })
}

module.exports = episodeIndex;

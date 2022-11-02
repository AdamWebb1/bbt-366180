const bbt = require("big-bang-theory")

function isSeasonAndEpisode(episode, season, episodeNum){
    return bbt._embedded.episodes[episode].season == season && bbt._embedded.episodes[episode].number == episodeNum
}

function generateResp(season, episodeNum){
    for (episode in bbt._embedded.episodes){
        if (isSeasonAndEpisode(episode, season, episodeNum)){
            return bbt._embedded.episodes[episode]
        }
    }
}

const getEpisode = (req, res) => {
    res.status(200).json({
      success: true,
      data: generateResp(req.params.season, req.params.episodeNum)
    })
  }
  
module.exports = getEpisode;
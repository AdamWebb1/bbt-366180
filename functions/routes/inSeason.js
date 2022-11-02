const bbt = require("big-bang-theory")

function isInSeason(episode, season){
    return bbt._embedded.episodes[episode].season == season
}

function generateResp(season){
    response = []

    for (episode in bbt._embedded.episodes){
        if (isInSeason(episode, season)){
            response.push(bbt._embedded.episodes[episode])
        }
    }

    console.log(response)
    return response
}

const inSeason = (req, res) => {
    res.status(200).json({
      success: true,
      data: generateResp(req.params.season)
    })
  }
  
module.exports = inSeason;
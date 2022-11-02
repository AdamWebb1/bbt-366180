const bbt = require("big-bang-theory")

function hasWord(episode, word){
    return bbt._embedded.episodes[episode].summary.toLowerCase().indexOf(word) != -1
}

function generateResp(word){
    response = []

    for (episode in bbt._embedded.episodes){
        if (hasWord(episode, word)){
            response.push( bbt._embedded.episodes[episode])
        }
    }
    
    console.log(response)
    return response
}

const inDescription = (req, res) => {
    res.status(200).json({
      success: true,
      data: generateResp(req.params.word)
    })
  }
  
module.exports = inDescription;
let articles = require('../data/articals.json')
function getArticles (req,res){
        res.send(articles)
}
module.exports = {getArticles}
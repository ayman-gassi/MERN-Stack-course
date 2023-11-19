let users = require('../data/users.json')
let getUsers = (req, res) =>{
    res.send(users)
}
module.exports = {getUsers}
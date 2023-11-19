const router = require('express').Router()
const {getUsers} = require('../controllers/usersContoller')
router.use("/",getUsers)
module.exports=router;
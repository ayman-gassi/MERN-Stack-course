const {getAllBlogs} = require('../controllers/QuestionController')
const router = require('express').Router()
router.get('/',async(req,res)=>{
    let logged ;
    if(req.session.user){
        logged = {islogged : true ,session : req.session.user}
    }
    else{
        logged = {islogged : false}
    }
    let users = await getAllBlogs()
    res.render('home',{logged : logged, alldata :users})
})
router.post('NewBlog',(req,res)=>{
    
})
module.exports=router;
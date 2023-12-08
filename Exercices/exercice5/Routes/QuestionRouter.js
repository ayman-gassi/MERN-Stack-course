const {getAllBlogs,addBlogs} = require('../controllers/QuestionController')
const router = require('express').Router()
router.get('/',async(req,res)=>{
    let logged ;
    if(req.session.user){
        logged = {islogged : true ,session : req.session.user}
    }
    else{
        logged = {islogged : false}
    }
    let data = await getAllBlogs()
    res.render('home',{logged : logged, alldata :data})
})
router.post('/newQuestion',async(req,res)=>{
    await addBlogs(req.body.title,req.body.newpost,req.session.user.Email)
    res.redirect('/')
})
module.exports=router;
const {addReplieToBlog} = require('../Controllers/ReponseController')
const router = require('express').Router()
router.post('/:id',async(req,res)=>{
    await addReplieToBlog(req.params.id,req.body.newpost,req.session.user.Email)
    res.redirect('/question')
})
module.exports=router;
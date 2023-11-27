const {Login,Register} = require('../Middlewares/auth')
const router = require('express').Router()
const express = require('express');
router.use(express.static('public'));
router.get('/login',(req,res)=>{
    res.render('login')
})
router.post('/log',async(req,res)=>{
    let result =await Login(req.body.email,req.body.password)
       if(result){  
            req.session.user = result
            res.redirect('/question')
       }
       else{
           res.redirect('login')
       } 
})
router.get('/register',(req,res)=>{
   res.render('register')
})
router.post('/reg',async(req,res)=>{
    let result =await Register(req.body.Fname,req.body.Lname,req.body.field,req.body.email,req.body.password)
       if(result){
            req.session.user= result
            res.redirect('/question')
       }
       else{
           res.redirect('register')
       } 
})
router.get('/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Internal Server Error');
            } else {
                console.log("Destroyed Succefully");
                res.redirect('/question'); 
            }
        });
    } else {
        res.redirect('/question');
    }
});
module.exports=router;
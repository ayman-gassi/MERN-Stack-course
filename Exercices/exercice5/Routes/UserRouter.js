const {Login} = require('../Middlewares/auth')
const router = require('express').Router()
const express = require('express');
router.use(express.static('public'));
router.get('/login',(req,res)=>{
    res.render('login')
})
router.post('/log',async(req,res)=>{
    let result =await Login(req.body.email,req.body.password)
       if(result){
            req.session.user= result
            res.redirect('/question')
       }
       else{
           res.redirect('login')
       } 
})
router.get('/register',(req,res)=>{
   res.render('register')
})
module.exports=router;
const express = require('express');
const app =  express()
const bodyParser = require('body-parser');
const session = require("express-session")
app.use(session({
        secret : "un secret",
        resave : false,
        saveUninitialized : true,
        cookie : {maxAge : 20000}
}))
app.set("view engine","pug")
app.set("views","./views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"))
app.use((req,res,next)=>{
    req.user={email: "XjonSnow",score: 12}
    next()
})
app.get("/Login",(req,res)=>{
    res.render("login")

})
app.post("/Login",(req,res)=>{
    req.session.user={UserEmail : req.body.email, UserPassword : req.body.password}
    res.redirect("/Home")
})

app.get("/Home",(req,res)=>{
    if(req.session.user){
        res.render("index",{user: req.user, session: req.session.user})
    }
    else{
        res.redirect("/Login")
    }
})
app.listen(3000)
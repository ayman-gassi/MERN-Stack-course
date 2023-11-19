const express = require('express')
const app = express()
const FirstMiddleWare = require('./FirstMiddleWare')
app.use(FirstMiddleWare)

app.get('/' ,(req,res)=>{
       res.send("Home")
})
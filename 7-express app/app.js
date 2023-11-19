const express = require('express')
const app = express()
app.listen(3000)
app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root : __dirname})
})
app.get('/contact',(req,res)=>{
    res.sendFile('./views/contact.html',{root : __dirname})
})
app.get('/contact-us',(req,res)=>{
    res.redirect('/contact')
})
app.get('/client/:id',(req,res)=>{
    res.send(`user ${req.params.id}`)
})
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root : __dirname})
})
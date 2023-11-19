const express = require('express')
const app = express()
app.set('view engine','ejs')
app.listen(3000)
app.get('/',(req,res)=>{
        res.render('index',{title : 'Home page'})
})
app.get('/contact',(req,res)=>{
    res.render('about',{title : 'contact page'})
})
app.get('/contact-us',(req,res)=>{
    res.redirect('/contact',{title : 'Contact us page'})
})
app.use((req,res)=>{
    res.status(404).render('404',{title : 'Error page '})
})
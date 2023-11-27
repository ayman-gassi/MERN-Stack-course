const UserRouter = require('./Routes/UserRouter')
const QuestionRouter = require('./Routes/QuestionRouter')
const express = require('express') 
const Client = require('mongoose')
const app = express()
const session = require("express-session")
const bodyParser = require('body-parser');
app.use(session({
        secret : "un secret",
        resave : false,
        saveUninitialized : true,
        cookie : {maxAge : 20000}
}))
app.set("view engine","pug")
app.set("views","./views")
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: true }));
Client.connect('mongodb+srv://ayman_gs:Theonly_XjonSnow2003@cluster0.ukaeqke.mongodb.net/',{dbName : 'ESTE'}).then((client)=>{
    console.log("Connection Done");
    app.get('/', (req, res) => {
        res.redirect('/question');
      });
    app.use('/question',QuestionRouter)
    app.use('/auth',UserRouter)
})
.catch((e)=>{
    console.log(e)
})



app.listen(5000)
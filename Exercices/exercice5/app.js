const {Login}  = require('./Controllers/AuthController')
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const Client = new MongoClient('mongodb://localhost:27017/?directConnection=true')
const db = Client.db('ESTE');
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
Client.connect().then((client)=>{
    console.log("Connection Done");
    let usersCollection = db.collection("Student");
    app.get('/', (req, res) => {
        res.redirect('/homepage');
      });
      
    app.get('/homepage',(req,res)=>{
        let logged ;
        if(req.session.user){
            logged = {islogged : true ,session : req.session.user}
        }
        else{
            logged = {islogged : false}
        }
        usersCollection.find({}).toArray()
         .then(users => {
            console.log('data found')
            res.render('home',{logged : logged, alldata :users , session})
         })
         .catch(err => {
            console.log(e)
         });
    })
    app.get('/login',(req,res)=>{
         res.render('login')
    })
    app.post('/login',async(req,res)=>{
       
         let result =await Login(usersCollection,req.body.email,req.body.password)
         console.log(result)
            if(result){
                 req.session.user= result
                 res.redirect('homepage')
            }
            else{
                res.redirect('login')
            }
            
   })
    app.get('/register',(req,res)=>{
        res.render('register')
    })
})
.catch((e)=>{
    console.log(e)
    Client.close()
})



app.listen(3000)
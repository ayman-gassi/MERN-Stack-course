const express = require('express')
const {getArticles} = require('./controllers/articlesContoller')
const userRoute = require('./routes/userRouter')

const app = express()
app.use(express.json())
app.get('/', getArticles)
app.get('/api/v1/users',userRoute)

app.listen("3000")
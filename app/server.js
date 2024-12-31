const express = require('express')
const app = express()
var cors = require('cors')
const  mongoose  = require('mongoose')
const connectionToDB = require('./db/dbConnection')
const port = 4000
const userRoutes=require("./router/userRoutes")
const recipeRoutes=require('./router/recipeRoutes')
const blogRoutes=require('./router/blogPostRouter')
const teamMembersRoutes= require('./router/teamMemberRouter')
const createAuthorRoutes=require('./router/becomeAuthorRouter')
const favoriteRouter = require('./router/favoriteRouter')


//Middleware
app.use(cors())
app.use(express.json())



//connecting to DB
connectionToDB();

app.use('/api', userRoutes)
app.use('/api', recipeRoutes)
app.use('/api', blogRoutes)
app.use('/api', teamMembersRoutes)
app.use('/api', createAuthorRoutes)
app.use('/api', favoriteRouter)



//Basic server
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const mongoose = require("mongoose");
require('dotenv').config()

const connectionToDB = async () => {
  await mongoose.connect('mongodb+srv://farahn1292:3YdQKORm0uP6XgzI@cluster0.aivau.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>(
    console.log("Pinged your deployment. You succesfully connected to MongoDB!")
  ))
  .catch((error)=>console.log(error)
  )
};
module.exports=connectionToDB
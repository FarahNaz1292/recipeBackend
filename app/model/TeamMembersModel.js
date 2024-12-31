const {Schema}=require('mongoose')
const mongoose=require("mongoose")


const teamSchema=new Schema({
    fullName: {type:String, required:true} ,
    position: {type:String, required:true, enum:['management', 'production', 'marketing', 'sales', 'operation']},
    email: {type:String, required:true, unique:true} ,
   image:{type:String, required:true},
shortBio: {type:String, required:true} ,
contributions:{type:String}
})

const Team=mongoose.model('Team', teamSchema)
module.exports=Team
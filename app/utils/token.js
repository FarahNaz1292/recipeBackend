const jwt= require('jsonwebtoken')
require("dotenv").config()



const getToken=(user)=>{
    const token=jwt.sign({
                id:user._id,
                userName: user.userName, 
                email:user.email,
                photo: user.photo
    
            }, process.env.TOKEN, {expiresIn: process.env.TOKEN_EXPIRATION})
            // console.log(token);
            return token
}
module.exports=getToken
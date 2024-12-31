const status= require ('http-status')


const createSuccessResponse=(statusCode, message, data)=>{
    return{
        status:"Success",
        statusCode, 
        message,
        data
    }
}
const createErrorResponse=(statusCode, message, error="An error Occured")=>{
    return{
        status:"Error",
        statusCode, 
        message,
        error
    }
}
 const notFoundResponse=(statusCode, message, error)=>{
    return{
        status:"Error",
        statusCode, 
        message,
        error
    }
    
 }
 const loginResponse=(statusCode, message, data)=>{
    return{
        status:"Success",
        statusCode, 
        message,
        data
    }
 }
 const invalidPasswordResponse=(statusCode, message, error)=>{
    return{
        status:"Error",
        statusCode, 
        message,
        error
    }
    
 }
module.exports={
    createSuccessResponse,
    createErrorResponse,
    notFoundResponse,
    loginResponse,
    invalidPasswordResponse
}
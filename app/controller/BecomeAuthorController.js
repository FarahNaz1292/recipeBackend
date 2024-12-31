const status = require("http-status");

const response = require("../utils/response");
const BecomeAuthor = require("../model/BecomeAuthorModel");


const createAuthor=async(req, res)=>{
    try {
        const newAuthor=new BecomeAuthor(req.body)
        const result=await newAuthor.save()
        res.status(status.status.CREATED).send(
         response.createSuccessResponse(status.status.CREATED, "Author created Succesfully", result)
        )
    } catch (error) {
     res.status(
        response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while creating a Author", error)
     )
    }
}
module.exports={createAuthor}
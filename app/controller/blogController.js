const Blog= require('../model/BlogModel')
const status=require('http-status')
const response= require('../utils/response')

const createBlog=async(req, res)=>{
    try {
        const newBlog=new Blog(req.body)
        const result=await newBlog.save()
        res.status(status.status.CREATED).send(
         response.createSuccessResponse(status.status.CREATED, "Blog created Succesfully", result)
        )
    } catch (error) {
     res.status(
        response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while creating a Blog", error)
     )
    }
}
const getAllBolgs=async (req,res) => {
    try {
        const result=  await Blog.find()
        res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "All blogs retrieved successfully", result))
     } catch (error) {
         res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while retriveing all blogs", error))
     }
    
}
const getSingleBlog=async (req,res) => {
    try {
        const {id}= req.params
        const result= await Blog.findById(id)
        res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Single blog retrieved successfully", result))
    } catch (error) {
        res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while retriveing a blog", error))
    }
   
        
    }
    const updateBlog=async(req,res)=>{
        try {
            const {id}= req.params
            const updateBlog= req.body
            const result=await Blog.findByIdAndUpdate(id, updateBlog, {new:true})
            if(!result){
                res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "No blog Found to update"))
            }
            res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Updated a blog successfully", result))
        } catch (error) {
            res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while updating a blog", error))
        }
       
    }
    const deleteBlog=async(req,res)=>{
        try {
            const {id}= req.params
           
            const result=await Blog.findByIdAndDelete(id)
            if(!result){
                res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "No Blog Found to delete"))
            }
            res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Deleted a blog successfully", result))
        } catch (error) {
            res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while deleting a blog", error))
        }
       
    }




module.exports={
    createBlog,
    getAllBolgs, 
    getSingleBlog,
    deleteBlog, 
    updateBlog
}
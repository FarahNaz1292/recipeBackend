
const Recipe= require('../model/RecipeModel')
const status=require('http-status')
const response= require('../utils/response')

const createRecipe=async(req, res)=>{
    try {
        const newRecipe=new Recipe(req.body)
        const result=await newRecipe.save()
        res.status(status.status.CREATED).send(
         response.createSuccessResponse(status.status.CREATED, "Recipe created Succesfully", result)
        )
    } catch (error) {
     res.status(
        response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while creating a Recipe", error)
     )
    }
}
const getAllRecipes=async(req, res)=>{
    try {
       const result=  await Recipe.find()
       res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "All recipes retrieved successfully", result))
    } catch (error) {
        res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while retriveing all Recipes", error))
    }
}
const getSingleRecipe=async(req, res)=>{
    try {
        const {id}=req.params
        const result= await Recipe.findById(id).populate('author', 'fullName email photo')
        if(!result){
            res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "No Recipe Found"))
        }
        res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Retrieved a recipe successfully", result))
    } catch (error) {
        res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while retriveing a recipe", error))
    }
}
const updateRecipe=async(req,res)=>{
    try {
        const {id}= req.params
        const updateRecipe= req.body
        const result=await Recipe.findByIdAndUpdate(id, updateRecipe, {new:true})
        if(!result){
            res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "No Recipe Found to update"))
        }
        res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Updated a recipe successfully", result))
    } catch (error) {
        res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while updating a recipe", error))
    }
   
}
const deleteRecipe=async(req,res)=>{
    try {
        const {id}= req.params
       
        const result=await Recipe.findByIdAndDelete(id)
        if(!result){
            res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "No Recipe Found to delete"))
        }
        res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "Deleted a recipe successfully", result))
    } catch (error) {
        res.status(status.status.INTERNAL_SERVER_ERROR).send(response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "Error occurred while deleting a recipe", error))
    }
   
}
module.exports={
    createRecipe,
    getAllRecipes, 
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
}
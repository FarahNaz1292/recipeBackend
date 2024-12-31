const express = require('express');
const router = express.Router();
const recipeRouter=require('../controller/recipeController')


router.post('/create-recipe', recipeRouter.createRecipe)
router.get('/get-all-recipes', recipeRouter.getAllRecipes)
router.get('/get-recipe/:id', recipeRouter.getSingleRecipe)
router.put('/update-recipe/:id', recipeRouter.updateRecipe)
router.delete('/delete-recipe/:id', recipeRouter.deleteRecipe)


module.exports=router
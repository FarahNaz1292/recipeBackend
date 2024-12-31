const express = require('express');
const router = express.Router();
const blogRouter=require('../controller/blogController')


router.post('/create-blog', blogRouter.createBlog)
router.get('/get-all-blogs', blogRouter.getAllBolgs)
router.get('/get-single-blog/:id', blogRouter.getSingleBlog)
router.put('/update-blog/:id', blogRouter.updateBlog)
router.delete('/delete-blog/:id', blogRouter.deleteBlog)



module.exports=router
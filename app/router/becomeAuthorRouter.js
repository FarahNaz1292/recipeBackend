const express = require('express');
const router = express.Router();
const becomeAuthorController=require('../controller/becomeAuthorController')


router.post('/create-author',becomeAuthorController.createAuthor)



module.exports=router
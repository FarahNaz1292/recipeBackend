const express= require("express")
const router=express.Router()
const userRouter=require('../controller/userController')

router.post("/signup", userRouter.signup)
router.post("/signin", userRouter.signin)
router.get("/get-all-users", userRouter.getAllUsers)
router.get("/getuser/:id", userRouter.getSingleUser)
router.put("/getuser/:id", userRouter.updateUser)
router.delete("/deleteuser/:id", userRouter.deleteUser)


module.exports=router
const express= require("express")
const router=express.Router()
const teamRouter=require('../controller/TeamController')

router.post("/create-teamMember", teamRouter.createTeamMember)
router.get("/get-all-members", teamRouter.getAllMembers)
router.get("/get-member/:id", teamRouter.getSingleMember)
router.put("/update-member/:id", teamRouter.updateTeamMember)
router.delete("/delete-member/:id", teamRouter.deleteTeamMember)


module.exports=router
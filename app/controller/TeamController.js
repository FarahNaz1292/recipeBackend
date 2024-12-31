const Team= require('../model/TeamMembersModel')
const status=require('http-status')
const response= require('../utils/response')



const createTeamMember= async (req, res) => {
    try {
       const newTeamMemeber= new Team(req.body) 
       const result= await newTeamMemeber.save()
           res.status(status.status.CREATED).send(
            response.createSuccessResponse(status.status.CREATED, "Team Member created Succesfully", result)
           )
       } catch (error) {
        res.status(
           response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while creating a Team Member", error)
        )
       }
 
}
const getAllMembers=async(req, res)=>{
    try {
        const result= await Team.find()
    res.status(status.status.OK).send(response.createSuccessResponse(status.status.OK, "All Members Retrieved successfully",result))
    }
    catch (error) {
        res.status(
            response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while retrieving all Members ", error)
         )
    
    }
    } 
    const getSingleMember= async(req, res)=>{
       try {
        const {id}= req.params
        const result = await Team. findById(id)
        if(!result){
            return res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "Member not found"))
        }
    
             res.status(status.status.OK). send(response.createSuccessResponse(status.status.OK, "Member retrieved successfully",result ))
        } catch (error) {
            res.status(
                response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while retrieving the member", error)
             )
        }
    }
    const updateTeamMember= async(req, res)=>{
       try {
        const {id}= req.params
        const updateTeamMember=req.body
        const result=  await Team.findByIdAndUpdate(id, updateTeamMember, {new:true})
    
        if(!result){
            return res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "Member not found"))
        }
    
             res.status(status.status.OK). send(response.createSuccessResponse(status.status.OK, "Member updated successfully",result ))
        } catch (error) {
            res.status(
                response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while updating the member", error)
             )
        }
    }
    const deleteTeamMember=async(req, res)=>{
        try {
            const {id}= req.params
            const result = await Team.findByIdAndDelete(id)
            if(!result){
                return res.status(status.status.NOT_FOUND).send(response.notFoundResponse(status.status.NOT_FOUND, "Member not found"))
            }
        
                 res.status(status.status.OK). send(response.createSuccessResponse(status.status.OK, "Team member deleted successfully",result ))
            } catch (error) {
                res.status(
                    response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while deleting the team Member", error)
                 )
            }
    }

    module.exports={
        createTeamMember, 
        getAllMembers, 
        updateTeamMember, 
        deleteTeamMember, 
        getSingleMember

    }
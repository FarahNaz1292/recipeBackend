const FavoriteItems = require("../model/FavoriteModel");
const status = require("http-status");
const response= require('../utils/response')




// Create a new favourite
const createFavourite = async (req, res) => {
    try {
        const newFavoriteItem=new FavoriteItems(req.body)
        const result=await newFavoriteItem.save()
        res.status(status.status.CREATED).send(
         response.createSuccessResponse(status.status.CREATED, "Favorite item created Succesfully", result)
        )
    } catch (error) {
     res.status(
        response.createErrorResponse(status.status.INTERNAL_SERVER_ERROR, "An error occured while creating a favorite Item", error)
     )
    }
};


// Delete a favourite by ID
// const deleteFavourite = async (req, res) => {
//     try {
//         const favourite = await FavoriteItems.findByIdAndDelete(req.params.id);
//         if (!favourite) {
//             return res.status(404).json({
//                 status: 'fail',
//                 message: 'No favourite found with that ID'
//             });
//         }
//         res.status(204).json({
//             status: 'success',
//             data: null
//         });
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err.message
//         });
//     }
// };
module.exports = {  createFavourite };
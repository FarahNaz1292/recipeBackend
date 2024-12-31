const mongoose = require('mongoose');
const { Schema } = mongoose;

const FavoriteItemsSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Replace 'User' with the actual name of your User model
      required: true,
    },
    items_type: {
      type: String,
 
      required: true,
    },
    items_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'items_type', 
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

const FavoriteItems = mongoose.model('FavoriteItems', FavoriteItemsSchema);

module.exports = FavoriteItems;

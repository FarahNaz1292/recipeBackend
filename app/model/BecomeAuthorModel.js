const mongoose = require('mongoose');
const { Schema } = mongoose;

const BecomeAuthorSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Replace 'User' with the actual name of your User model
      required: true,
    },
    reason: {
      type: String,
      required: true,
    
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'], // Valid statuses
      default: 'pending',
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const BecomeAuthor = mongoose.model('BecomeAuthor', BecomeAuthorSchema);

module.exports = BecomeAuthor;

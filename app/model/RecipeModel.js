const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Recipe Schema
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
   
  },
  method: {
    type: [String],
    required: true
  },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true }
    }
  ],
  servings: {
    type: Number,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,  // Reference to the User model
    ref: 'User',  // User model that holds author details
    required: true
  },
  reviews: [
    {
      reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who reviewed
      rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
      reviewText: { type: String, required: true }, // Review text
      submissionDate: { type: Date, default: Date.now } // Date when the review was submitted
    }
  ]
}, {
  timestamps: true 
});


const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

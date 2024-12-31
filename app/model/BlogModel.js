const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      text: {
        type: String,
        required: true,
      }
     
    },
  ],
},{timestamps: true});


const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog ;

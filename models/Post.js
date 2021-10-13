const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  plantId: {
    type: Schema.Types.ObjectId,
    ref: 'plants'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  caption: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
})

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  title: {
    type: String
  }
  mp3: {
    type: String
  }
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;

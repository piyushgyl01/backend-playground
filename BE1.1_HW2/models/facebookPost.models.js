const mongoose = require("mongoose");

const FacebookPostSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  profileImageURL: {
    type: String,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
  hastags: [
    {
      type: String,
    },
  ],
  mentions: [
    {
      type: String,
    },
  ],
  link: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  reaction: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
});

const FacebookPost = mongoose.model("FacebookPost", FacebookPostSchema);

module.exports = FacebookPost;

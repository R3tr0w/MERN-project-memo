/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const PostMessage = require('../Models/postMessage');

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    const createdPost = await newPost.save();
    res.status(201).json(createdPost);
  } catch (error) {
    if (error.Name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
};

module.exports = {
  getPosts,
  createPost,
};

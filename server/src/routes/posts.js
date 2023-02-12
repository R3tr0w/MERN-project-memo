/* eslint-disable linebreak-style */
const { Router } = require('express');
const { getPosts, createPost, deletePost } = require('../controllers/posts');

const routes = Router();

routes.get('/', getPosts);
routes.post('/', createPost);
routes.delete('/:postId', deletePost);

module.exports = routes;

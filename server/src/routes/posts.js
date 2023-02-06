/* eslint-disable linebreak-style */
const { Router } = require('express');
const { getPosts, createPost } = require('../controllers/posts');

const routes = Router();

routes.get('/', getPosts);
routes.post('/', createPost);
// routes.delete('/:post_id', null);

module.exports = routes;

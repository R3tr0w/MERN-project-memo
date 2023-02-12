import axios from 'axios';
import env from 'react-dotenv';

const url = `http://${env.MY_IP}:1337/posts/`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost)
export const deletePost = (id) => axios.delete(url + id)
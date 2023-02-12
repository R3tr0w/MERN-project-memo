import { combineReducers } from 'redux';

import posts from './posts';
import mc from './mock';

export default combineReducers({ posts, mc });
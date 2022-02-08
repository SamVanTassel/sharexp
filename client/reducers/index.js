import { combineReducers } from 'redux';
import postsReducer from './posts.js';
import companiesReducer from './companies.js';
import usersReducer from './users.js';

const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  companies: companiesReducer
});

export default reducers;
import { configureStore } from '@reduxjs/toolkit';
import companiesReducer  from '../features/companies/companiesSlice.js';
import authReducer from '../features/auth/authSlice.js';
import usersReducer from '../features/users/usersSlice.js';
import postsReducer from '../features/posts/postsSlice.js';
import { api } from '../services/api.js'

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    [api.reducerPath]: api.reducer
  }
});

export default store;
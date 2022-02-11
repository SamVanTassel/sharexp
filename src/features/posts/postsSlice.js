import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: ['sweetgreen was ok', 'i really love jollibee']
  },
  reducers: {
    load: (state, action) => {
      state.companies = action.payload
    },
    add: (state, action) => {
      state.posts.push(action.payload)
    },
    remove: state => {
      // write delete logic here
      state
    }
  }
});

export const { load, add, remove } = postsSlice.actions

export default postsSlice.reducer;
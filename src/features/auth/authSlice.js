import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false
  },
  reducers: {
    login: (state, action) => {
      // login logic
      state.companies = action.payload
    },
    signup: (state, action) => {
      // signup logic
      state
    },
    logout: state => {
      // write logout logic here
      state
    }
  }
});

export const { login, signup, logout } = authSlice.actions

export default authSlice.reducer;
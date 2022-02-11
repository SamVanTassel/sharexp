import { createSlice } from '@reduxjs/toolkit'

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    list: ['google', 'facebook']
  },
  reducers: {
    load: (state, action) => {
      state.list = action.payload
    },
    add: (state, action) => {
      state.list.push(action.payload)
    },
    remove: state => {
      // write delete logic here
      state
    }
  }
});

export const { load, add, remove } = companiesSlice.actions

export default companiesSlice.reducer;
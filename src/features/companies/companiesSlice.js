import { createSlice } from '@reduxjs/toolkit'

export const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: ['google', 'facebook']
  },
  reducers: {
    load: (state, action) => {
      state.companies = action.payload
    },
    add: (state, action) => {
      state.companies.push(action.payload)
    },
    remove: state => {
      // write delete logic here
      state
    }
  }
});

export const { load, add, remove } = companiesSlice.actions

export default companiesSlice.reducer;
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

// thunks
export const fetchCompaniesList = () => {
  return async (dispatch, getState) => {
    try {
      const companiesList = await // fetch call
      dispatch(load(companiesList))
    } catch (err) {
      console.log('sorry, an error occured: ', err)
    }
  }
}


export const { load, add, remove } = companiesSlice.actions

export default companiesSlice.reducer;
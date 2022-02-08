import types from '../constants/actionTypes.js';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_POST: {
      return (
        {
          ...state,
        });
    }
    case types.DELETE_POST:
      return {
        ... state
      };
    default: return state;
  }
};

export default postsReducer;
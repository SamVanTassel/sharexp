import types from '../constants/actionTypes.js';

const initialState = {
  companies: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_COMPANY: {
      return (
        {
          ...state,
        });
    }
    case types.ENTER_COMPANY:
      return {
        ... state
      };
    case types.DELETE_COMPANY: {
      return {
        ...state
      };
    }
    default: return state;
  }
};

export default companiesReducer;
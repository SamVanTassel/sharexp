import types from '../constants/actionTypes.js';

const initialState = {
  username: '',
  password: '',
  userLoggedIn: false,
  developer: "Sam"
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER: {
      return {
        ...state,
        password: '',
        userLoggedIn: true
      };
    }
    case types.ENTER_USERNAME: {
      return {
        ...state
      }
    }
    case types.ENTER_PASSWORD: {
      return { ...state }
    }
    default: return state;
  }
};

export default usersReducer;
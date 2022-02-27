import { authConstants } from "../types";

const initialState = {
  id: "",
  name: "",
  email: "",
  authenticated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        ...state,
        id: action.payload.data.user.uid,
        name: action.payload.data.user.displayName,
        email: action.payload.data.user.email,
        authenticated: true,
      };

    case authConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;

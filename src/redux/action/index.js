import { authConstants } from "../types";

export const loginAction = (data) => {
  return {
    type: authConstants.LOGIN,
    payload: {
      data,
    },
  };
};

export const logout = () => ({
  type: authConstants.LOGOUT,
});

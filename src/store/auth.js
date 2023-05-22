const initialState = { auth: false };

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        auth: true,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

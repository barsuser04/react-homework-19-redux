const initialState = {
  cash: 0,
};

const INC = "INC";
const DEC = "DEC";
const RESET = "RESET";

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case DEC:
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

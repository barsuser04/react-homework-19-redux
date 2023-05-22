const initialState = {
  todo: [],
};

export const actionTypesTodo = {
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
  EDIT: "EDIT_TODO",
  SAVE_EDIT_TODO: "SAVE_EDIT_TODO",
  DELETE_ALL: "DELETE_ALLS",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesTodo.ADD:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case actionTypesTodo.DELETE:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case actionTypesTodo.DELETE_ALL:
      return initialState;
    case actionTypesTodo.EDIT:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              edit: !item.edit,
            };
          }
          return item;
        }),
      };

    case actionTypesTodo.SAVE_EDIT_TODO:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payload.id) {
            item.id = action.payload.id;
            item.title = action.payload.title;
            item.edit = false;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

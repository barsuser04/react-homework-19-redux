import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth";
import { todoReducer } from "./todo";

const rootReducer = combineReducers({
  auth: authReducer,
  todoshka: todoReducer,
});

export const store = createStore(rootReducer);

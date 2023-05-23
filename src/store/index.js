import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth";
import { todoReducer } from "./todo";
import { calcReducer } from "./calculate";

const rootReducer = combineReducers({
  auth: authReducer,
  todoshka: todoReducer,
  calculator: calcReducer,
});

export const store = createStore(rootReducer);

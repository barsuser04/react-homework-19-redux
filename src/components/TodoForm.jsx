import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { actionTypesTodo } from "../store/todo";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function addNewTodo(e) {
    e.preventDefault();

    const data = {
      title: title,
      id: v4(),
      edit: false,
    };

    dispatch({ type: actionTypesTodo.ADD, payload: data });

    setTitle("");
  }

  function deleteAll() {
    dispatch({ type: actionTypesTodo.DELETE_ALL });
  }
  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button disabled={!title}>add todo</button>
      </form>
      <button onClick={() => deleteAll()}>delete all</button>

      <TodoList />
    </>
  );
};

export default TodoForm;

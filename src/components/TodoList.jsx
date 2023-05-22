import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoArr = useSelector((state) => state.todoshka.todo);
  console.log(todoArr);
  const array = todoArr || [];
  return (
    <div>
      {array.map((el) => {
        return <TodoItem key={el.id} el={el} />;
      })}
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { actionTypesTodo } from "../store/todo";
import TodoList from "./TodoList";
import { Button } from "../UI/Button";
import { styled } from "styled-components";

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
    <h2>TODO LIST</h2>
      <Container>
        <StyledForm onSubmit={addNewTodo}>
          <MyInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" bgColor="teal" color="white" disabled={!title}>
            add todo
          </Button>
        </StyledForm>
        <Button onClick={() => deleteAll()}>delete all</Button>
      </Container>
      <TodoList />
    </>
  );
};

const StyledForm = styled.form`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  border-radius: 20px;
  padding: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid teal;
  width: 500px;
`;

const MyInput = styled.input`
  width: 300px;
  height: 40px;
  border: 2px solid red;
  outline: none;
  border-radius: 5px;
`;

export default TodoForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { actionTypesTodo } from "../store/todo";

const TodoItem = ({ el }) => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState(el.title);

  function deleteTodoId(id) {
    dispatch({ type: actionTypesTodo.DELETE, payload: id });
  }

  const saveEditHandler = (data) => {
    dispatch({
      type: actionTypesTodo.SAVE_EDIT_TODO,
      payload: { id: data.id, title: data.title },
    });
  };

  const editHandler = (id) => {
    dispatch({ type: actionTypesTodo.EDIT, payload: id });
  };

  const saveEdit = () => {
    const data = {
      id: el.id,
      title: editTitle,
    };

    saveEditHandler(data);
  };

  return (
    <>
      {el.edit ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <Container>
          <h2>{el.title}</h2>
          <div>
            <button onClick={() => editHandler(el.id)}>edit</button>
            <button onClick={() => deleteTodoId(el.id)}>delete</button>
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  border: 2px solid gray;
  width: 300px;
  padding: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export default TodoItem;

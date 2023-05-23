import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { actionTypesTodo } from "../store/todo";
import { Button } from "../UI/Button";

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
      <Container>
        {el.edit ? (
          <>
            <MyInput
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <Button onClick={saveEdit}>Save</Button>
          </>
        ) : (
          <h2>{el.title}</h2>
        )}

        <ButtonDiv>
          <Button onClick={() => editHandler(el.id)}>edit</Button>
          <Button
            bgColor="red"
            color="white"
            onClick={() => deleteTodoId(el.id)}
          >
            delete
          </Button>
        </ButtonDiv>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  border: 2px solid gray;
  width: 450px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const MyInput = styled.input`
  width: 200px;
  height: 20px;
  border: 2px solid brown;
  outline: none;
  border-radius: 5px;
  padding: 10px;
`;

export default TodoItem;

// return (
//   <>
//     {el.edit ? (
//       <div>
//         <MyInput
//           type="text"
//           value={editTitle}
//           onChange={(e) => setEditTitle(e.target.value)}
//         />
//         <Button onClick={saveEdit}>Save</Button>
//       </div>
//     ) : (
//       <Container>
//         <h2>{el.title}</h2>
//         <ButtonDiv>
//           <Button onClick={() => editHandler(el.id)}>edit</Button>
//           <Button bgColor="red" color="white" onClick={() => deleteTodoId(el.id)}>delete</Button>
//         </ButtonDiv>
//       </Container>
//     )}
//   </>
// );

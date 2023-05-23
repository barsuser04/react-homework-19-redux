import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";
import { styled } from "styled-components";

const LoginPage = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: actionTypes.LOGIN });
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </Form>
      <Button
        // bgColor="brown"
        // color="white"
        onClick={submitHandler}
        disabled={!formIsValid}
      >
        Login
      </Button>

      {auth ? navigate("/contentPage") : null}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
`;

export default LoginPage;

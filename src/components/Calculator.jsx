import React, { useState } from "react";
import { Button } from "../UI/Button";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  const [value, setValue] = useState();

  const cashValue = useSelector((state) => state.calculator.cash);
  const dispatch = useDispatch();

  const inc = (cash) => {
    dispatch({ type: "INC", payload: cash });
  };

  const dec = (cash) => {
    dispatch({ type: "DEC", payload: cash });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h1>Calculate</h1>
      <Container>
        <h2>{cashValue}</h2>
        <input type="number" value={value} />
        <DivBtn>
          <Button onClick={() => dec()}>minus</Button>
          <Button onClick={() => reset()}>reset</Button>
          <Button onClick={() => inc()}>plus</Button>
        </DivBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid teal;
  padding: 20px;
  align-items: center;
  width: 180px;

  input {
    width: 100px;
    height: 30px;
    outline: none;
    margin-bottom: 10px;
    border: 2px solid teal;
  }
`;

const DivBtn = styled.div`
  display: flex;
  gap: 10px;
`;

export default Calculator;

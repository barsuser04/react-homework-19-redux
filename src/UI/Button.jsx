import React from "react";
import { styled } from "styled-components";

export const Button = ({
  type,
  children,
  onClick,
  bgColor,
  disabled,
  color,
}) => {
  return (
    <MyButton
      type={type}
      color={color}
      disabled={disabled}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </MyButton>
  );
};

const MyButton = styled.button`
  padding: 10px;
  background: ${(props) => props.bgColor};
  font-weight: 600;
  color: ${(props) => props.color};
  border-radius: 5px;
`;

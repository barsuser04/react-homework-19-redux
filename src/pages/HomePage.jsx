import React from "react";
import LoginPage from "./LoginPage";
import { styled } from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <LoginPage />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomePage;

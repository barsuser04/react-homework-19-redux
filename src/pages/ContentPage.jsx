import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ContentPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <>
          <StyledNavlink to={"calculator"}>Calculator</StyledNavlink>
          <StyledNavlink to={"todoshka"}>Todoshka</StyledNavlink>
        </>

        <button onClick={() => navigate("/")}>Logout</button>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: teal;
  display: flex;
  gap: 50px;
  justify-content: end;
`;

const StyledNavlink = styled(NavLink)`
  font-size: 25px;
  color: aliceblue;
  font-weight: 600;
`;

export default ContentPage;

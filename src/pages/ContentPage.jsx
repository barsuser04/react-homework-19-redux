import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../UI/Button";

const ContentPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <>
          <StyledNavlink to={"calculator"}>Calculator</StyledNavlink>
          <StyledNavlink to={"todoshka"}>Todoshka</StyledNavlink>
        </>

        <Button onClick={() => navigate("/")}>Logout</Button>
      </Container>

      <OutletDiv>
        <Outlet />
      </OutletDiv>
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

const OutletDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
`;

export default ContentPage;

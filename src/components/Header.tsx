import React from "react";
import { Container } from "../styles/ContainerStyles";
import styled from "styled-components";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <HeaderCon>
      <Container>
        <HeaderBox>
          <h1>Where in the world?</h1>
          <ModeBox>
            <IoMoonOutline />
            <p>Dark Mode</p>
          </ModeBox>
        </HeaderBox>
      </Container>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  background-color: #ffffff;
`;

const HeaderBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;

  & h1 {
    color: #111517;
  }

  @media (max-width: 700px) {
    & h1 {
      font-size: 14px;
    }
  }
`;

const ModeBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 600;
    color: #111517;
  }

  @media (max-width: 700px) {
    & p {
      font-size: 12px;
    }

    svg {
      width: 12px;
    }
  }
`;

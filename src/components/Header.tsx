import React from "react";
import { Container } from "../styles/ContainerStyles";
import { IoMoonOutline } from "react-icons/io5";
import { HeaderBox, HeaderCon, ModeBox } from "../styles/HeaderStyles";

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

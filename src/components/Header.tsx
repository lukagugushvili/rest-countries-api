import React from "react";
import { Container } from "../styles/ContainerStyles";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { HeaderBox, HeaderCon, ModeBox } from "../styles/HeaderStyles";
import { useDataContext } from "../context/DataContext";

const Header = () => {
  const { handleChangeMode, mode } = useDataContext();

  return (
    <HeaderCon $mode={mode}>
      <Container>
        <HeaderBox $mode={mode}>
          <h1>Where in the world?</h1>
          <ModeBox onClick={handleChangeMode} $mode={mode}>
            {mode ? <IoSunnyOutline color="#FFFFFF" /> : <IoMoonOutline />}
            <p>Dark Mode</p>
          </ModeBox>
        </HeaderBox>
      </Container>
    </HeaderCon>
  );
};

export default Header;

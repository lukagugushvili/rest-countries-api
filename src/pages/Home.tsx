import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { Wrapper } from "../styles/HomeStyles";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Filter />
    </Wrapper>
  );
};

export default Home;

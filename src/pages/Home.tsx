import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { Wrapper } from "../styles/HomeStyles";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Filter />
      <Cards />
    </Wrapper>
  );
};

export default Home;

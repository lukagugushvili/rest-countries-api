import React, { useEffect, useState } from "react";
import { Container } from "../styles/ContainerStyles";
import { Card, CardsWrapper, Details } from "../styles/CardsStyles";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";

const Cards = () => {
  const { countries } = useDataContext();
  const navigate = useNavigate();

  const handleSeeAbout = (id: string) => {
    navigate(`/about/:${id}`);
  };

  return (
    <div>
      <Container>
        <CardsWrapper>
          {countries.map((country) => {
            const { common } = country.name;
            const { population, region, capital } = country;

            return (
              <Card
                key={country.cca2}
                onClick={() => handleSeeAbout(country.cca2)}
              >
                <img src={country.flags.png} alt={common} />
                <Details>
                  <h2>{common}</h2>
                  <h3>
                    Population:
                    <span>{population}</span>
                  </h3>
                  <h3>
                    Region:
                    <span>{region}</span>
                  </h3>
                  <h3>
                    Capital:
                    <span>{capital}</span>
                  </h3>
                </Details>
              </Card>
            );
          })}
        </CardsWrapper>
      </Container>
    </div>
  );
};

export default Cards;

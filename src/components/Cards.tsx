import React, { useEffect, useState } from "react";
import { Container } from "../styles/ContainerStyles";
import { DataType } from "../types/DataTypes";
import { Card, CardsWrapper, Details } from "../styles/CardsStyles";

const Cards = () => {
  const [countries, setCountries] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URl = "https://restcountries.com/v3.1/all";
      try {
        const res = await fetch(API_URl);

        if (!res.ok) {
          throw new Error(`Network response was not ok`);
        }

        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <CardsWrapper>
          {countries.map((country) => {
            const { common } = country.name;
            const { population, region, capital } = country;

            return (
              <Card key={country.cca2}>
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

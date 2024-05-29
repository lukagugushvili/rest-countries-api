import React, { useEffect, useState } from "react";
import { Container } from "../styles/ContainerStyles";
import styled from "styled-components";
import { count } from "console";
import { DataType } from "../types/DataTypes";

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

  console.log(countries);

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

const CardsWrapper = styled.div`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 50px;
`;

const Card = styled.div`
  cursor: pointer;
  max-height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 0px 7px 2px #00000008;
  background-color: #ffffff;

  & img {
    flex: 1;
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0px 0px;
  }

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;

const Details = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h2 {
    padding: 15px 0 10px 0;
    font-size: 18px;
  }

  & h3 {
    font-size: 14px;
    font-weight: 600;

    & span {
      font-size: 14px;
      font-weight: 300;
      padding-left: 10px;
    }
  }
`;

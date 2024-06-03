import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { DataType } from "../types/DataTypes";
import { ErrorCon } from "../styles/ErrorMsgStyles";
import Loader from "../utils/Loader";

const About = () => {
  const { id } = useParams<{ id: string }>();

  const [country, setCountry] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `https://restcountries.com/v3.1/alpha/${id}`;
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`Network response was not ok`);
        }

        const data = await res.json();
        setCountry(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return (
      <ErrorCon>
        <p>Something went wrong! Please try again.</p>
        <p>Error: {error}</p>
      </ErrorCon>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {country && (
        <div>
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population}</p>
          <p>Latitude and Longitude: {country.latlng}</p>
        </div>
      )}
    </div>
  );
};

export default About;

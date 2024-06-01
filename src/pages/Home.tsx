import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import { Wrapper } from "../styles/HomeStyles";
import Cards from "../components/Cards";
import { DataType } from "../types/DataTypes";
import { ErrorCon } from "../styles/ErrorMsgStyles";
import Loader from "../utils/Loader";
import { DataContext } from "../context/DataContext";
import { DataContextType } from "../types/DataContextTypes";

const Home = () => {
  const [countries, setCountries] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_URl = "https://restcountries.com/v3.1/all";
      setIsLoading(true);
      try {
        const res = await fetch(API_URl);

        if (!res.ok) {
          throw new Error(`Network response was not ok`);
        }

        const data = await res.json();
        setCountries(data);
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
  }, []);

  if (error) {
    return (
      <ErrorCon>
        <p>Something went wrong! Please try again.</p>
      </ErrorCon>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  const handleChangeMode = () => {
    setMode((prevMode) => !prevMode);
    console.log(mode);
  };

  const DataContextValue: DataContextType = {
    countries,
    mode,
    handleChangeMode,
  };

  return (
    <DataContext.Provider value={DataContextValue}>
      <Wrapper $mode={mode}>
        <Header />
        <Filter />
        <Cards />
      </Wrapper>
    </DataContext.Provider>
  );
};

export default Home;

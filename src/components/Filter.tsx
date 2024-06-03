import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../styles/ContainerStyles";
import { IoIosSearch } from "react-icons/io";
import { FilterCon, InpCon } from "../styles/FilterConStyles";
import { useDataContext } from "../context/DataContext";
import RegionFilter from "./_atoms/RegionFilter";

const Filter = () => {
  const { mode, countries, setResult } = useDataContext();

  const [regions, setRegions] = useState<string[]>([]);
  const [inpValue, setInpValue] = useState<string>("");

  useEffect(() => {
    setResult(countries);
  }, [countries, setResult]);

  const searchData = useCallback(
    (value: string) => {
      if (value === "") {
        setResult(countries);
      } else {
        const results = countries.filter((reg) =>
          reg.name.common.toLowerCase().includes(value.toLowerCase())
        );
        setResult(results);
      }
    },
    [countries, setResult]
  );

  const handleChangeValues = (value: string) => {
    setInpValue(value);
    searchData(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchData(inpValue);
    }
  };

  return (
    <div>
      <Container>
        <FilterCon>
          <InpCon $mode={mode}>
            <IoIosSearch />
            <input
              type="text"
              value={inpValue}
              placeholder="Search for a country..."
              onChange={(e) => handleChangeValues(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </InpCon>
          <RegionFilter setRegions={setRegions} regions={regions} />
        </FilterCon>
      </Container>
    </div>
  );
};

export default Filter;

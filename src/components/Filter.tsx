import React from "react";
import { Container } from "../styles/ContainerStyles";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FilterCon, InpCon, RegionsCon } from "../styles/FilterConStyles";

const Filter = () => {
  return (
    <div>
      <Container>
        <FilterCon>
          <InpCon>
            <IoIosSearch />
            <input type="text" placeholder="Search for a country..." />
          </InpCon>
          <RegionsCon>
            <p>Filter by Region</p>
            <IoIosArrowForward />
          </RegionsCon>
        </FilterCon>
      </Container>
    </div>
  );
};

export default Filter;
